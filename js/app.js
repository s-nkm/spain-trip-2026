(() => {
  const { TRIP, PLACES, MOVES, DAYS, HOTELS, AIRPORTS, SOUVENIRS, SOUVENIR_NOTES, INFO } = window;
  const app = document.getElementById('app');
  const DARK = window.matchMedia('(prefers-color-scheme: dark)');
  let maps = [];

  // ---------- utils ----------
  const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const gmaps = (p) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.en + ' ' + p.lat + ',' + p.lng)}`;
  const gmapsQ = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
  const gdir = (p) => `https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}`;
  const near = (kw, p) => `https://www.google.com/maps/search/${encodeURIComponent(kw)}/@${p.lat},${p.lng},16z`;
  const color = (name) => getComputedStyle(document.documentElement).getPropertyValue('--' + name).trim();

  // スペイン時間の今日（YYYY-MM-DD）
  const todayMadrid = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Madrid' }).format(new Date());
  const todayDay = () => DAYS.find((d) => d.date === todayMadrid());
  const daysUntil = () => Math.ceil((new Date(TRIP.start + 'T00:00:00+09:00') - new Date()) / 86400000);
  const md = (iso) => { const [, m, d] = iso.split('-'); return `${+m}/${+d}`; };

  const KIND = {
    airport: { c: 'cobalt', l: '✈' }, station: { c: 'olive', l: '駅' }, hotel: { c: 'ink', l: '宿' },
    sight: { c: 'terra', l: '◆' }, food: { c: 'saffron', l: '食' }, shop: { c: 'saffron', l: '買' },
  };

  // ---------- components ----------
  const planeIcon = '<svg viewBox="0 0 54 18"><path d="M2 9h50M44 4l6 5-6 5"/></svg>';
  const trainIcon = '<svg viewBox="0 0 54 18"><path d="M2 9h50M2 13h50M10 5v12M22 5v12M34 5v12M46 5v12"/></svg>';

  function ticket(m) {
    const end = (e, t, note, r) => `<div class="tk-end${r ? ' r' : ''}"><div class="code">${esc(e.code)}</div><div class="city">${esc(e.city)}${e.term ? ' ' + esc(e.term) : ''}</div><div class="time">${t}${note ? `<sup> ${note}</sup>` : ''}</div></div>`;
    return `<div class="ticket ${m.type}">
      <div class="ticket-top"><span>${m.type === 'flight' ? 'FLIGHT' : 'TRAIN'} · <b>${esc(m.code)}</b></span><span>${esc(m.dur)}</span></div>
      <div class="ticket-main">${end(m.from, m.dep)}<div class="ticket-mid">${m.type === 'flight' ? planeIcon : trainIcon}</div>${end(m.to, m.arr, m.arrNote, true)}</div>
      <div class="ticket-cut"></div>
      <div class="ticket-foot">${esc(m.carrier)}${m.note ? ' ・ ' + esc(m.note) : ''}</div>
    </div>`;
  }

  const badge = (tag) => tag ? `<span class="badge ${tag}">${{ booked: '予約済', plan: '予定', tip: 'TIP', sleep: '睡眠' }[tag]}</span>` : '';

  function timelineItem(it) {
    if (it.move) {
      return `<li class="tl-item is-move reveal"><div class="tl-time">${it.time}</div><div class="tl-body">${ticket(MOVES[it.move])}</div></li>`;
    }
    const p = it.place && PLACES[it.place];
    return `<li class="tl-item reveal${it.tag === 'sleep' ? ' is-sleep' : ''}"><div class="tl-time">${esc(it.time)}</div><div class="tl-body">
      <h3>${esc(it.title)} ${badge(it.tag)}</h3>
      ${it.note ? `<p>${esc(it.note)}</p>` : ''}
      ${it.jet ? `<div class="tl-actions"><a class="btn-link in-site" href="#/info/jetlag">時差ボケ対策を詳しく</a></div>` : ''}
      ${p ? `<div class="tl-actions"><a class="btn-link" href="${gmaps(p)}" target="_blank" rel="noopener">地図</a><a class="btn-link" href="${gdir(p)}" target="_blank" rel="noopener">経路案内</a></div>` : ''}
    </div></li>`;
  }

  function footer() {
    return `<div class="tile-band"></div><footer class="footer"><span class="display">¡Buen viaje!</span>${esc(TRIP.subtitle)} ・ 予約番号などは確認書PDFを参照</footer>`;
  }

  // ---------- map ----------
  // ベース地図：OpenFreeMap のベクター地図。地名は日本語名があれば日本語、なければ現地語
  const STYLE_URL = 'https://tiles.openfreemap.org/styles/liberty';
  const JA_NAME = ['coalesce', ['get', 'name:ja'], ['get', 'name']];
  let stylePromise;
  function jaStyle() {
    stylePromise = stylePromise || fetch(STYLE_URL).then((r) => r.json()).then((style) => {
      style.layers.forEach((l) => { if (l.layout && l.layout['text-field']) l.layout['text-field'] = JA_NAME; });
      return style;
    });
    return stylePromise;
  }
  function osmRaster(map) {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  }
  function addBaseLayer(map) {
    if (!L.maplibreGL || !window.maplibregl) { osmRaster(map); return; }
    jaStyle().then((style) => {
      L.maplibreGL({
        style, localIdeographFontFamily: "'Hiragino Sans', 'Noto Sans JP', sans-serif",
        attribution: '<a href="https://openfreemap.org" target="_blank">OpenFreeMap</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
      }).addTo(map);
    }).catch(() => osmRaster(map)); // 取得できないとき（オフライン等）は通常の地図
  }

  function makeMap(el, { placeIds, routes = [], fitPad = 30 }) {
    if (!window.L) { el.innerHTML = '<p class="section muted">地図を読み込めませんでした（オフライン）。</p>'; return; }
    const map = L.map(el, { zoomControl: true, scrollWheelZoom: false, zoomSnap: 0.25 });
    addBaseLayer(map);

    const stroke = { flight: color('cobalt'), train: color('terra'), car: color('olive'), walk: color('muted') };
    routes.forEach(([a, b, mode]) => {
      const A = PLACES[a], B = PLACES[b];
      if (!A || !B) return;
      const pts = mode === 'flight' ? arc([A.lat, A.lng], [B.lat, B.lng]) : [[A.lat, A.lng], [B.lat, B.lng]];
      L.polyline(pts, {
        color: stroke[mode], weight: mode === 'walk' ? 2.5 : 3, opacity: .9,
        dashArray: mode === 'flight' ? '2 8' : mode === 'walk' ? '1 6' : mode === 'car' ? '8 6' : null, lineCap: 'round',
      }).addTo(map);
    });

    const bounds = [];
    placeIds.forEach((id, i) => {
      const p = PLACES[id];
      if (!p) return;
      const k = KIND[p.kind] || KIND.sight;
      const icon = L.divIcon({ className: '', html: `<div class="pin" style="--pin:${color(k.c) || color('ink')}"><span>${k.l}</span></div>`, iconSize: [28, 28], iconAnchor: [14, 28], popupAnchor: [0, -26] });
      L.marker([p.lat, p.lng], { icon }).addTo(map).bindPopup(
        `<b>${esc(p.name)}</b><br><span style="opacity:.7">${esc(p.en)}</span>${p.addr ? `<br>${esc(p.addr)}` : ''}${p.tel ? `<br><a href="tel:${p.tel}">${p.tel}</a>` : ''}<br><a href="${gmaps(p)}" target="_blank" rel="noopener">Googleマップ ↗</a>　<a href="${gdir(p)}" target="_blank" rel="noopener">経路案内 ↗</a>`
      );
      bounds.push([p.lat, p.lng]);
    });
    if (bounds.length === 1) map.setView(bounds[0], 13);
    else if (bounds.length) map.fitBounds(bounds, { padding: [fitPad, fitPad] });
    map.on('click', () => map.scrollWheelZoom.enable());
    maps.push(map);
    return map;
  }

  // 飛行機の弧
  function arc(a, b, n = 40) {
    const mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    const dx = b[1] - a[1], dy = b[0] - a[0];
    const ctrl = [mid[0] + dx * 0.18, mid[1] - dy * 0.18];
    const out = [];
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      out.push([(1 - t) ** 2 * a[0] + 2 * (1 - t) * t * ctrl[0] + t * t * b[0], (1 - t) ** 2 * a[1] + 2 * (1 - t) * t * ctrl[1] + t * t * b[1]]);
    }
    return out;
  }

  const legend = `<div class="map-legend"><span><i style="border-color:var(--cobalt);border-top-style:dotted"></i>飛行機</span><span><i style="border-color:var(--terra)"></i>鉄道・地下鉄</span><span><i style="border-color:var(--olive);border-top-style:dashed"></i>車・タクシー</span><span><i style="border-color:var(--muted);border-top-style:dotted"></i>徒歩</span></div>`;

  // ---------- views ----------
  const heroArt = `<svg viewBox="0 0 400 190" role="img" aria-label="スペインの街並みのイラスト">
    <rect width="400" height="190" fill="#E7B98F"/>
    <circle cx="318" cy="62" r="30" fill="#F4D48A"/>
    <path d="M0 132 Q60 112 120 126 T250 120 T400 116 V190 H0Z" fill="#C9724B"/>
    <g fill="#9C4A2B">
      <rect x="28" y="96" width="44" height="40"/><rect x="40" y="78" width="20" height="20"/><path d="M40 78 L50 64 L60 78Z"/>
      <rect x="88" y="104" width="62" height="32"/><rect x="96" y="90" width="12" height="16"/><rect x="132" y="90" width="12" height="16"/>
    </g>
    <g fill="#7E3A20">
      <path d="M232 136 V86 Q236 54 240 86 V136Z"/><path d="M246 136 V72 Q251 30 256 72 V136Z"/><path d="M262 136 V78 Q267 40 272 78 V136Z"/><path d="M278 136 V92 Q282 62 286 92 V136Z"/>
      <rect x="226" y="112" width="66" height="26"/>
    </g>
    <path d="M0 150 Q100 136 200 148 T400 144 V190 H0Z" fill="#6E7A4A"/>
    <path d="M0 168 Q120 158 220 168 T400 164 V190 H0Z" fill="#4F5A33"/>
    <g fill="#F4EEE3" opacity=".85"><rect x="46" y="104" width="6" height="10" rx="3"/><rect x="104" y="112" width="6" height="10" rx="3"/><rect x="122" y="112" width="6" height="10" rx="3"/></g>
  </svg>`;

  function viewHome() {
    const td = todayDay();
    const n = daysUntil();
    let cd = '';
    if (td) cd = `<div class="countdown reveal t-${td.theme}"><div><div class="lbl">今日は DAY ${td.n}</div><div class="h-serif" style="font-size:18px">${esc(td.city)}</div></div><a class="chip on" href="#/day/${td.n}">今日の予定 →</a></div>`;
    else if (n > 0) cd = `<div class="countdown reveal"><div class="cd-text"><div class="lbl">出発まであと</div><div class="cd-val"><span class="num">${n}</span><span class="lbl">日</span></div></div><a class="chip" href="#/info">持ち物チェック →</a></div>`;

    return `
      <section class="hero">
        <div class="eyebrow reveal">${md(TRIP.start)} — ${md(TRIP.end)} ・ 2026</div>
        <h1 class="reveal">Viaje a <span>España</span></h1>
        <p class="hero-sub reveal">${esc(TRIP.travelers)}でめぐる、8日間のスペイン。</p>
      </section>
      <figure class="hero-photo reveal">
        <picture><source srcset="img/hero.avif" type="image/avif"><img src="img/hero.jpg" alt="トレド旧市街とタホ川の夕景" width="1742" height="1160" fetchpriority="high"></picture>
        <figcaption>Toledo</figcaption>
      </figure>
      <div class="route-line reveal"><b>NRT</b>→ AUH →<b>MADRID</b>→<b>TOLEDO</b>→<b>GRANADA</b>→<b>BARCELONA</b>→ AUH →<b>NRT</b></div>
      ${cd}
      <section class="section">
        <div class="section-title reveal"><h2>旅程</h2><span class="display">Itinerario</span></div>
        <ul class="day-list">
          ${DAYS.map((d) => `<li class="day-row reveal t-${d.theme}${td && td.n === d.n ? ' today' : ''}"><a href="#/day/${d.n}">
            <span class="d-num">${String(d.n).padStart(2, '0')}</span>
            <span><span class="d-meta">${md(d.date)} ${d.dow}</span><br><span class="d-city">${esc(d.city)}</span><br><span class="d-head">${esc(d.headline)}</span></span>
            <span class="arrow">→</span></a></li>`).join('')}
        </ul>
      </section>
      <div class="tile-band thick"></div>
      <section class="section">
        <div class="section-title reveal"><h2>ガイド</h2><span class="display">Guía</span></div>
        <div class="quick">
          <a href="#/map" class="reveal t-terra"><span class="display">Mapa</span><span>全行程マップ</span></a>
          <a href="#/airports" class="reveal t-cobalt"><span class="display">Aeropuertos</span><span>空港の歩き方</span></a>
          <a href="#/souvenirs" class="reveal t-saffron"><span class="display">Recuerdos</span><span>お土産ガイド</span></a>
          <a href="#/info" class="reveal t-olive"><span class="display">Información</span><span>ホテル・持ち物・緊急連絡先</span></a>
        </div>
      </section>
      ${footer()}`;
  }

  function viewDay(n) {
    const d = DAYS.find((x) => x.n === n) || todayDay() || DAYS[0];
    const prev = DAYS.find((x) => x.n === d.n - 1), next = DAYS.find((x) => x.n === d.n + 1);
    const nb = d.nearby && PLACES[d.nearby.center];
    const html = `
      <div class="t-${d.theme}">
        <nav class="day-strip" aria-label="日付">${DAYS.map((x) => `<a href="#/day/${x.n}" class="${x.n === d.n ? 'on' : ''}"><b>${+x.date.slice(8)}</b><small>${x.dow}</small></a>`).join('')}</nav>
        <section class="day-hero">
          <span class="big">${String(d.n).padStart(2, '0')}</span>
          <span class="eyebrow">Day ${d.n} · ${md(d.date)} ${d.dow}</span>
          <h1>${esc(d.city)}</h1>
          <span class="en">${esc(d.cityEn)}</span>
        </section>
        <p class="day-lead">${esc(d.headline)}。${esc(d.lead)}</p>
        <div class="tile-band" style="margin-top:22px"></div>
        <ol class="timeline">${d.items.map(timelineItem).join('')}</ol>
        ${d.places.length > 1 ? `<section style="margin-top:24px"><div class="section" style="padding-bottom:12px"><div class="section-title" style="margin:0"><h2>この日の地図</h2><span class="display">Ruta</span></div></div><div id="day-map" class="map"></div>${legend}</section>` : ''}
        ${nb ? `<section class="section">
          <div class="section-title"><h2>周辺情報</h2><span class="display">Cerca</span></div>
          <p class="muted" style="font-size:13px;margin-bottom:12px">${esc(d.nearby.label)}のおすすめ</p>
          <div class="nearby-cards">${d.nearby.picks.map((id) => { const p = PLACES[id]; return `<a href="${gmaps(p)}" target="_blank" rel="noopener"><small>${{ food: 'EAT', shop: 'SHOP', sight: 'SEE', hotel: 'STAY' }[p.kind] || 'SEE'}</small>${esc(p.name)}</a>`; }).join('')}</div>
          <p class="sub-h">ホテル周辺をGoogleマップで探す</p>
          <div class="search-grid">
            ${[['restaurants', '🍽 レストラン'], ['cafe', '☕ カフェ'], ['tapas bar', '🍷 バル'], ['supermarket', '🛒 スーパー'], ['pharmacy', '💊 薬局'], ['ATM', '💶 ATM']].map(([q, l]) => `<a class="chip" href="${near(q, nb)}" target="_blank" rel="noopener">${l}</a>`).join('')}
          </div>
        </section>` : ''}
        <div class="day-pager">${prev ? `<a href="#/day/${prev.n}">← DAY ${prev.n}</a>` : '<span></span>'}${next ? `<a href="#/day/${next.n}">DAY ${next.n} →</a>` : '<span></span>'}</div>
      </div>
      ${footer()}`;
    return { html, after: () => { const el = document.getElementById('day-map'); if (el) makeMap(el, { placeIds: d.places, routes: d.routes }); } };
  }

  function viewMap(filter) {
    const opts = [['all', 'すべて'], ['spain', 'スペイン全体'], ...DAYS.filter((d) => d.places.length > 1).map((d) => [String(d.n), `${md(d.date)} ${d.city.split(' ')[0]}`])];
    const cur = filter || 'spain';
    const html = `
      <section class="section" style="padding-bottom:12px">
        <div class="section-title"><h2>全行程マップ</h2><span class="display">Mapa</span></div>
        <div class="chips">${opts.map(([k, l]) => `<a class="chip ${k === cur ? 'on' : ''}" href="#/map/${k}">${esc(l)}</a>`).join('')}</div>
      </section>
      <div id="all-map" class="map tall"></div>${legend}
      <p class="section muted" style="font-size:12.5px;padding-top:12px">ピンをタップすると、Googleマップでの表示や経路案内に進めます。ピンの位置は目安です。</p>`;
    return {
      html, after: () => {
        let placeIds, routes;
        if (cur === 'all' || cur === 'spain') {
          const all = new Set(); routes = [];
          DAYS.forEach((d) => { d.places.forEach((p) => all.add(p)); routes.push(...d.routes); });
          if (cur === 'spain') { ['nrt', 'auh'].forEach((x) => all.delete(x)); routes = routes.filter((r) => !['nrt', 'auh'].some((x) => r.includes(x))); }
          placeIds = [...all];
        } else {
          const d = DAYS.find((x) => String(x.n) === cur) || DAYS[1];
          placeIds = d.places; routes = d.routes;
        }
        makeMap(document.getElementById('all-map'), { placeIds, routes });
      },
    };
  }

  function viewAirports() {
    return `
      <section class="section">
        <div class="section-title"><h2>空港ガイド</h2><span class="display">Aeropuertos</span></div>
        <div class="chips" style="margin-bottom:18px">${AIRPORTS.map((a) => `<a class="chip" href="#/airports/${a.id}">${a.code}</a>`).join('')}</div>
        ${AIRPORTS.map((a) => `
          <article class="card reveal t-cobalt" id="ap-${a.id}">
            <div class="ap-head"><span class="ap-code">${a.code}</span><h3>${esc(a.name)}</h3></div>
            <div class="ap-when">${esc(a.when)}</div>
            <p style="font-size:13.5px;margin-top:10px">${esc(a.lead)}</p>
            <p class="sub-h">流れ</p>
            <ol class="steps">${a.steps.map((s) => `<li><div><b>${esc(s.t)}</b><span>${esc(s.d)}</span></div></li>`).join('')}</ol>
            ${a.arrive.length ? `<p class="sub-h">${a.id === 'nrt' ? '帰国時' : '市内への行き方'}</p><ol class="steps">${a.arrive.map((s) => `<li><div><b>${esc(s.t)}</b><span>${esc(s.d)}</span></div></li>`).join('')}</ol>` : ''}
            <p class="sub-h">ポイント</p>
            <ul class="notes">${a.tips.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
            <div style="margin-top:14px;display:flex;gap:16px;flex-wrap:wrap"><a class="btn-link" href="${gmaps(PLACES[a.id])}" target="_blank" rel="noopener">地図</a><a class="btn-link" href="${gmapsQ(PLACES[a.id].en + ' shops')}" target="_blank" rel="noopener">空港内のショップを検索</a></div>
          </article>`).join('')}
        <p class="muted" style="font-size:12px;margin-top:16px">※ 運賃や運行状況は変わることがあります。最新情報は現地の案内で確認してください。</p>
      </section>
      ${footer()}`;
  }

  function viewSouvenirs() {
    return `
      <section class="section">
        <div class="section-title"><h2>お土産ガイド</h2><span class="display">Recuerdos</span></div>
        ${SOUVENIR_NOTES.map((n) => `<div class="callout reveal">${esc(n)}</div>`).join('')}
      </section>
      <div class="tile-band"></div>
      <section class="section">
        ${SOUVENIRS.map((c) => `
          <div class="sv-city t-${c.theme}">
            <div class="sv-head reveal"><h3>${esc(c.city)}</h3><span class="display">${esc(c.en)}</span></div>
            ${c.items.map((it) => `<div class="sv-item reveal"><h4>${esc(it.name)}</h4><span class="sv-price">${esc(it.price)}</span><p>${esc(it.desc)}</p>${it.shop ? `<a class="btn-link" href="${gmapsQ(it.shop)}" target="_blank" rel="noopener">${esc(it.shop)}</a>` : ''}</div>`).join('')}
          </div>`).join('')}
        <p class="muted" style="font-size:12px;margin-top:20px">※ 価格は目安です。店舗の営業時間や取り扱い商品は変わることがあります。</p>
      </section>
      ${footer()}`;
  }

  function viewInfo() {
    let checked = {};
    try { checked = JSON.parse(localStorage.getItem('checklist') || '{}'); } catch (e) { /* ignore */ }
    return {
      html: `
      <section class="section">
        <div class="section-title"><h2>ホテル</h2><span class="display">Hoteles</span></div>
        ${HOTELS.map((h) => { const p = PLACES[h.place]; return `<article class="card reveal">
          <span class="eyebrow">${esc(h.city)}</span><h3 style="margin-top:4px">${esc(p.name)}</h3><span class="display muted" style="font-size:16px">${esc(p.en)}</span>
          <dl class="kv"><dt>宿泊</dt><dd>${esc(h.nights)}</dd><dt>チェックイン</dt><dd>${esc(h.in)}</dd><dt>チェックアウト</dt><dd>${esc(h.out)}</dd><dt>部屋</dt><dd>${esc(h.room)}</dd><dt>食事</dt><dd>${esc(h.meal)}</dd><dt>住所</dt><dd>${esc(p.addr)}</dd><dt>電話</dt><dd><a href="tel:${p.tel}">${p.tel}</a></dd><dt>メモ</dt><dd>${esc(h.note)}</dd></dl>
          <div style="margin-top:12px;display:flex;gap:16px"><a class="btn-link" href="${gmaps(p)}" target="_blank" rel="noopener">地図</a><a class="btn-link" href="${gdir(p)}" target="_blank" rel="noopener">経路案内</a></div>
        </article>`; }).join('')}
        <p class="muted" style="font-size:12px;margin-top:12px">確認番号・予約番号は、予約確認書PDFの原本を見てください。</p>
      </section>
      <div class="tile-band"></div>
      <section class="section">
        <div class="section-title"><h2>フライト・鉄道</h2><span class="display">Transporte</span></div>
        <div style="display:grid;gap:12px">${Object.values(MOVES).map((m) => `<div class="reveal t-${m.type === 'train' ? 'terra' : 'cobalt'}">${ticket(m)}</div>`).join('')}</div>
        <p class="sub-h">手荷物</p>
        <ul class="notes t-cobalt">${INFO.baggage.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
      </section>
      <section class="section">
        <div class="section-title"><h2>持ち物チェック</h2><span class="display">Lista</span></div>
        <ul class="check">${INFO.checklist.map((c, i) => `<li><label><input type="checkbox" data-i="${i}" ${checked[i] ? 'checked' : ''}><span>${esc(c)}</span></label></li>`).join('')}</ul>
        <p class="muted" style="font-size:12px;margin-top:8px">チェックはこの端末にだけ保存されます。</p>
      </section>
      <section class="section" id="info-jetlag">
        <div class="section-title"><h2>時差ボケ対策</h2><span class="display">Jet lag</span></div>
        <p style="font-size:13.5px">${esc(INFO.jetlag.lead)}</p>
        ${INFO.jetlag.legs.map((leg) => `
          <p class="sub-h">${esc(leg.h)}</p>
          <ol class="jet-list">${leg.rows.map((r) => `<li class="${r.sleep ? 'is-sleep' : ''}">
            <div class="jet-k">${esc(r.k)}</div>
            <div class="jet-t"><span>スペイン ${esc(r.es)}</span><span>日本 ${esc(r.jp)}</span></div>
            <div class="jet-act">${esc(r.act)}</div>
          </li>`).join('')}</ol>`).join('')}
        <p class="sub-h">コツ</p>
        <ul class="notes">${INFO.jetlag.tips.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      </section>
      <section class="section">
        <div class="section-title"><h2>緊急連絡先</h2><span class="display">Emergencia</span></div>
        <ul class="tel-list card">${INFO.emergency.map((e) => `<li><span>${esc(e.k)}</span><a href="tel:${e.v.replace(/-/g, '')}">${esc(e.v)}</a></li>`).join('')}</ul>
      </section>
      <section class="section">
        <div class="section-title"><h2>旅のメモ</h2><span class="display">Consejos</span></div>
        <dl class="kv" style="grid-template-columns:96px 1fr;gap:12px">${INFO.tips.map((t) => `<dt>${esc(t.k)}</dt><dd>${esc(t.v)}</dd>`).join('')}</dl>
      </section>
      ${footer()}`,
      after: () => {
        app.querySelectorAll('.check input').forEach((el) => el.addEventListener('change', () => {
          checked[el.dataset.i] = el.checked;
          try { localStorage.setItem('checklist', JSON.stringify(checked)); } catch (e) { /* ignore */ }
        }));
      },
    };
  }

  // ---------- router ----------
  function render() {
    maps.forEach((m) => m.remove()); maps = [];
    const [, route = '', arg] = location.hash.replace(/^#/, '').split('/');
    let view, tab = route || 'home', anchor = null;
    switch (route) {
      case 'day': view = viewDay(arg ? +arg : (todayDay() || DAYS[0]).n); break;
      case 'map': view = viewMap(arg); break;
      case 'airports': view = viewAirports(); anchor = arg && 'ap-' + arg; break;
      case 'souvenirs': view = viewSouvenirs(); break;
      case 'info': view = viewInfo(); anchor = arg && 'info-' + arg; break;
      default: view = viewHome(); tab = 'home';
    }
    if (typeof view === 'string') view = { html: view };
    app.innerHTML = view.html;
    document.querySelectorAll('.tabbar a').forEach((a) => a.classList.toggle('active', a.dataset.tab === tab));
    const target = anchor && document.getElementById(anchor);
    if (target) target.scrollIntoView(); else window.scrollTo(0, 0);
    view.after && view.after();
    observe();
  }

  let io;
  function observe() {
    io && io.disconnect();
    if (!('IntersectionObserver' in window)) { app.querySelectorAll('.reveal').forEach((e) => e.classList.add('in')); return; }
    io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    // 表示中の要素はすぐ出す（アンカー移動時に薄いまま残らないように）
    app.querySelectorAll('.reveal').forEach((e) => {
      const r = e.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) e.classList.add('in');
      else io.observe(e);
    });
  }

  function topbarDate() {
    const t = new Intl.DateTimeFormat('ja-JP', { timeZone: 'Europe/Madrid', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date());
    document.getElementById('topbar-date').textContent = `MADRID ${t}`;
  }

  window.addEventListener('hashchange', render);
  // テーマ切り替え（選択は端末に保存。未選択なら端末の設定に追従）
  const themeBtn = document.getElementById('theme-btn');
  const themeMeta = document.querySelectorAll('meta[name="theme-color"]');
  function applyTheme(t) {
    document.documentElement.dataset.theme = t;
    themeBtn.setAttribute('aria-label', t === 'dark' ? 'デイモードに切り替え' : 'ナイトモードに切り替え');
    themeMeta.forEach((m) => { m.removeAttribute('media'); m.content = t === 'dark' ? '#1A1613' : '#F4EEE3'; });
  }
  applyTheme(document.documentElement.dataset.theme);
  themeBtn.addEventListener('click', () => {
    const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', t); } catch (e) { /* ignore */ }
    applyTheme(t);
    maps.forEach((m) => m.invalidateSize());
  });
  DARK.addEventListener && DARK.addEventListener('change', (e) => {
    let saved = null;
    try { saved = localStorage.getItem('theme'); } catch (err) { /* ignore */ }
    if (!saved) { applyTheme(e.matches ? 'dark' : 'light'); render(); }
  });
  render();
  topbarDate(); setInterval(topbarDate, 30000);

  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
})();
