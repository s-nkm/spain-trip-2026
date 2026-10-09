// 旅のしおりデータ
// ※ 氏名・eチケット番号・PNR・ホテル確認番号などの個人情報は公開リポジトリのため掲載しない
// 時刻はすべて現地時刻。座標は目安（ピン位置がずれる場合あり）

window.TRIP = {
  title: 'Viaje a España',
  subtitle: 'スペイン家族旅行 2026',
  start: '2026-10-14',
  end: '2026-10-21',
  travelers: '家族3人',
};

// 地点
window.PLACES = {
  nrt: { name: '成田空港 第1ターミナル', en: 'Narita Airport T1', lat: 35.7720, lng: 140.3929, kind: 'airport' },
  auh: { name: 'アブダビ ザイード国際空港 ターミナルA', en: 'Zayed International Airport', lat: 24.4330, lng: 54.6511, kind: 'airport' },
  mad: { name: 'マドリード バラハス空港 T4', en: 'Madrid-Barajas T4', lat: 40.4919, lng: -3.5934, kind: 'airport' },
  grx: { name: 'グラナダ空港', en: 'Granada Airport (GRX)', lat: 37.1887, lng: -3.7774, kind: 'airport' },
  bcn: { name: 'バルセロナ エル・プラット空港 T1', en: 'Barcelona-El Prat T1', lat: 41.2884, lng: 2.0731, kind: 'airport' },

  atocha: { name: 'マドリード・プエルタ・デ・アトーチャ駅', en: 'Madrid-Puerta de Atocha', lat: 40.4065, lng: -3.6895, kind: 'station' },
  toledoSt: { name: 'トレド駅', en: 'Estación de Toledo', lat: 39.8622, lng: -4.0119, kind: 'station' },
  granadaSt: { name: 'グラナダ駅', en: 'Estación de Granada', lat: 37.1843, lng: -3.6097, kind: 'station' },

  hMadrid: { name: 'リウ プラザ エスパーニャ', en: 'Hotel Riu Plaza España', lat: 40.4234, lng: -3.7120, kind: 'hotel', addr: 'Calle Gran Vía, 84, 28013 Madrid', tel: '+34-919-193393' },
  hGranada: { name: 'ホテル アリクサレス', en: 'Hotel Alixares', lat: 37.1747, lng: -3.5875, kind: 'hotel', addr: 'P.º de la Sabica, 40, 18009 Granada', tel: '+34-958-225575' },
  hBarcelona: { name: 'ユーロスターズ モニュメンタル', en: 'Eurostars Monumental', lat: 41.4003, lng: 2.1783, kind: 'hotel', addr: 'Carrer del Consell de Cent, 498-500, 08013 Barcelona', tel: '+34-932-320288' },

  // トレド
  zocodover: { name: 'ソコドベール広場', en: 'Plaza de Zocodover', lat: 39.8588, lng: -4.0220, kind: 'sight' },
  toledoCat: { name: 'トレド大聖堂', en: 'Catedral Primada de Toledo', lat: 39.8570, lng: -4.0236, kind: 'sight' },
  alcazar: { name: 'アルカサル', en: 'Alcázar de Toledo', lat: 39.8577, lng: -4.0207, kind: 'sight' },
  santoTome: { name: 'サント・トメ教会（エル・グレコ）', en: 'Iglesia de Santo Tomé', lat: 39.8567, lng: -4.0272, kind: 'sight' },
  sanJuan: { name: 'サン・フアン・デ・ロス・レイエス修道院', en: 'Monasterio de San Juan de los Reyes', lat: 39.8592, lng: -4.0302, kind: 'sight' },
  mirador: { name: 'トレド展望台（ミラドール・デル・バジェ）', en: 'Mirador del Valle', lat: 39.8508, lng: -4.0198, kind: 'sight' },

  // マドリード
  palacioReal: { name: '王宮', en: 'Palacio Real', lat: 40.4180, lng: -3.7143, kind: 'sight' },
  plazaMayor: { name: 'マヨール広場', en: 'Plaza Mayor', lat: 40.4155, lng: -3.7074, kind: 'sight' },
  sanMiguel: { name: 'サン・ミゲル市場', en: 'Mercado de San Miguel', lat: 40.4154, lng: -3.7090, kind: 'food' },
  sol: { name: 'プエルタ・デル・ソル', en: 'Puerta del Sol', lat: 40.4169, lng: -3.7035, kind: 'sight' },
  prado: { name: 'プラド美術館', en: 'Museo del Prado', lat: 40.4138, lng: -3.6921, kind: 'sight' },
  debod: { name: 'デボー神殿（夕日スポット）', en: 'Templo de Debod', lat: 40.4240, lng: -3.7178, kind: 'sight' },
  sanGines: { name: 'チョコラテリア・サン・ヒネス（チュロス）', en: 'Chocolatería San Ginés', lat: 40.4168, lng: -3.7068, kind: 'food' },
  botin: { name: 'ソブリーノ・デ・ボティン（世界最古のレストラン）', en: 'Sobrino de Botín', lat: 40.4140, lng: -3.7083, kind: 'food' },

  // グラナダ
  alhambra: { name: 'アルハンブラ宮殿 入場口', en: 'Alhambra – Pabellón de Acceso', lat: 37.1760, lng: -3.5847, kind: 'sight' },
  nazaries: { name: 'ナスル朝宮殿', en: 'Palacios Nazaríes', lat: 37.1770, lng: -3.5890, kind: 'sight' },
  generalife: { name: 'ヘネラリフェ', en: 'Generalife', lat: 37.1770, lng: -3.5830, kind: 'sight' },
  granadaCat: { name: 'グラナダ大聖堂・王室礼拝堂', en: 'Catedral / Capilla Real', lat: 37.1763, lng: -3.5995, kind: 'sight' },
  alcaiceria: { name: 'アルカイセリア（土産物街）', en: 'Alcaicería', lat: 37.1756, lng: -3.5985, kind: 'shop' },
  sanNicolas: { name: 'サン・ニコラス展望台', en: 'Mirador de San Nicolás', lat: 37.1811, lng: -3.5926, kind: 'sight' },
  sacromonte: { name: 'サクロモンテ（洞窟フラメンコ）', en: 'Sacromonte', lat: 37.1817, lng: -3.5850, kind: 'sight' },
  castaneda: { name: 'ボデガス・カスタニェダ（タパス）', en: 'Bodegas Castañeda', lat: 37.1767, lng: -3.5987, kind: 'food' },
  diamantes: { name: 'バル・ロス・ディアマンテス（魚介フライ）', en: 'Bar Los Diamantes', lat: 37.1740, lng: -3.5985, kind: 'food' },

  // バルセロナ
  plCatalunya: { name: 'カタルーニャ広場', en: 'Plaça de Catalunya', lat: 41.3870, lng: 2.1700, kind: 'sight' },
  batllo: { name: 'カサ・バトリョ', en: 'Casa Batlló', lat: 41.3916, lng: 2.1649, kind: 'sight' },
  sagrada: { name: 'サグラダ・ファミリア', en: 'Basílica de la Sagrada Família', lat: 41.4036, lng: 2.1744, kind: 'sight' },
  mila: { name: 'カサ・ミラ', en: 'Casa Milà (La Pedrera)', lat: 41.3954, lng: 2.1619, kind: 'sight' },
  boqueria: { name: 'ボケリア市場', en: 'Mercat de la Boqueria', lat: 41.3817, lng: 2.1716, kind: 'food' },
  gotic: { name: 'ゴシック地区・大聖堂', en: 'Barri Gòtic / Catedral', lat: 41.3840, lng: 2.1762, kind: 'sight' },
  barceloneta: { name: 'バルセロネータ（海辺）', en: 'Barceloneta', lat: 41.3784, lng: 2.1925, kind: 'sight' },
  catalana: { name: 'セルベセリア・カタラナ（タパス）', en: 'Cervecería Catalana', lat: 41.3925, lng: 2.1615, kind: 'food' },
  xampanyet: { name: 'エル・シャンパニェット（バル）', en: 'El Xampanyet', lat: 41.3845, lng: 2.1813, kind: 'food' },
  amatller: { name: 'チョコレート・アマトリェール', en: 'Chocolate Amatller', lat: 41.3914, lng: 2.1652, kind: 'shop' },
};

// 移動（チケット風カード）
window.MOVES = {
  ey801: { type: 'flight', code: 'EY801', carrier: 'エティハド航空', from: { code: 'NRT', city: '東京 成田', term: 'T1' }, to: { code: 'AUH', city: 'アブダビ', term: 'A' }, dep: '18:00', arr: '00:20', arrNote: '+1', dur: '約11時間20分', note: 'スルーバゲージ（荷物はマドリードまで）' },
  ey101: { type: 'flight', code: 'EY101', carrier: 'エティハド航空', from: { code: 'AUH', city: 'アブダビ', term: 'A' }, to: { code: 'MAD', city: 'マドリード', term: 'T4' }, dep: '02:25', arr: '08:10', dur: '約7時間45分', note: '乗継時間 2時間5分' },
  toledoGo: { type: 'train', code: 'Renfe', carrier: '鉄道（直通）', from: { code: 'MAD', city: 'アトーチャ駅' }, to: { code: 'TOL', city: 'トレド駅' }, dep: '11:15', arr: '11:49', dur: '34分', note: '予約済み・乗換なし' },
  toledoBack: { type: 'train', code: 'Renfe', carrier: '鉄道（直通）', from: { code: 'TOL', city: 'トレド駅' }, to: { code: 'MAD', city: 'アトーチャ駅' }, dep: '17:23', arr: '17:57', dur: '34分', note: '予約済み・乗換なし' },
  ave: { type: 'train', code: 'AVE', carrier: 'Renfe 高速鉄道', from: { code: 'MAD', city: 'アトーチャ駅' }, to: { code: 'GRX', city: 'グラナダ駅' }, dep: '16:40', arr: '20:21', dur: '3時間41分', note: '予約確定・乗換なし。列車番号は確認書PDF' },
  vy2011: { type: 'flight', code: 'VY2011', carrier: 'ブエリング航空', from: { code: 'GRX', city: 'グラナダ' }, to: { code: 'BCN', city: 'バルセロナ', term: 'T1' }, dep: '09:15', arr: '10:45', dur: '1時間30分', note: '受託手荷物は無料枠なし。購入状況を要確認' },
  ey112: { type: 'flight', code: 'EY112', carrier: 'エティハド航空', from: { code: 'BCN', city: 'バルセロナ', term: 'T1' }, to: { code: 'AUH', city: 'アブダビ', term: 'A' }, dep: '10:45', arr: '19:20', dur: '約6時間35分', note: 'スルーバゲージ（荷物は成田まで）' },
  ey800: { type: 'flight', code: 'EY800', carrier: 'エティハド航空', from: { code: 'AUH', city: 'アブダビ', term: 'A' }, to: { code: 'NRT', city: '東京 成田', term: 'T1' }, dep: '21:25', arr: '12:45', arrNote: '+1', dur: '約10時間20分', note: '乗継時間 2時間5分' },
};

// 日程
// item: { time, title, note, move, place, tag }  tag: 'booked' | 'plan' | 'tip'
window.DAYS = [
  {
    n: 1, date: '2026-10-14', dow: '水', city: '東京 → 機内', cityEn: 'Tokyo', theme: 'olive',
    headline: '旅のはじまり',
    lead: '成田からエティハド航空でアブダビへ。機内で1泊します。',
    items: [
      { time: '15:00', title: '成田空港 第1ターミナル到着（目安）', note: '国際線は出発の3時間前に着くのがおすすめ。チェックインの列は時期によって長くなります。', place: 'nrt' },
      { time: '18:00', move: 'ey801' },
      { time: '機内', title: 'なるべく起きておく', note: '日本は夜でも、スペインはまだ昼（11:00〜22:20）。ここで長く寝ると次の便で眠れません。仮眠は離陸後1〜2時間まで。時計はスペイン時間（−7時間）に合わせます。', tag: 'sleep', jet: true },
    ],
    places: ['nrt', 'auh'],
    routes: [['nrt', 'auh', 'flight']],
    nearby: null,
  },
  {
    n: 2, date: '2026-10-15', dow: '木', city: 'マドリード ／ トレド', cityEn: 'Madrid · Toledo', theme: 'terra',
    headline: '古都トレドへ日帰り',
    lead: '早朝にマドリード到着。その足で「街全体が世界遺産」のトレドへ。',
    items: [
      { time: '00:20', title: 'アブダビ到着・乗継', note: '「Transfer」の案内に従って保安検査を受け、出発ゲートへ。乗継は2時間5分あります。寝ずに歩いて過ごし、カフェインは控えめに。', place: 'auh' },
      { time: '02:25', move: 'ey101' },
      { time: '機内', title: 'ここでしっかり寝る', note: 'スペインの深夜0:25〜8:10。食事の後すぐ寝て、5〜6時間を目標に。アイマスク・耳栓・ネックピローがあると眠りやすい。', tag: 'sleep', jet: true },
      { time: '08:10', title: 'マドリード T4 到着', note: '入国審査はEUの新しい出入国システム（EES）で顔写真・指紋の登録があり、混むと時間がかかります。そのあと荷物を受け取ります。', place: 'mad' },
      { time: '終日', title: '22時頃まで起きている', note: '午前中に日光を浴びるのが一番効きます。眠いときはトレド行きの電車で20分だけ。コーヒーは15時頃まで。', tag: 'sleep', jet: true },
      { time: '09:30頃', title: '空港 → アトーチャ駅', note: 'T4の地下から近郊線セルカニアス C1 でアトーチャ駅まで直通（約25分）。大きな荷物は駅のコインロッカー、またはタクシー（定額€33）でホテルに預けてから向かうことも可能。', place: 'atocha', tag: 'tip' },
      { time: '11:15', move: 'toledoGo', tag: 'booked' },
      { time: '12:00', title: 'トレド旧市街へ', note: '駅から旧市街は上り坂で徒歩20〜25分。バス（L5・L61・L62）かタクシーで5〜10分のソコドベール広場へ。', place: 'zocodover' },
      { time: '12:30', title: 'トレド大聖堂・アルカサル', note: 'スペイン・カトリックの総本山。宝物館と聖歌隊席は必見。', place: 'toledoCat' },
      { time: '14:00', title: 'ランチ', note: '名物は鹿肉や山うずらの煮込み、カルカムーサス（豚肉とトマトの煮込み）。' },
      { time: '15:00', title: 'サント・トメ教会・サン・フアン・デ・ロス・レイエス修道院', note: 'エル・グレコの名作「オルガス伯爵の埋葬」。修道院は回廊が美しい。', place: 'santoTome' },
      { time: '16:15', title: 'トレド展望台（ミラドール）', note: '旧市街を一望できる絶景ポイント。タクシーで往復、または観光ミニトレインで。', place: 'mirador', tag: 'plan' },
      { time: '17:23', move: 'toledoBack', tag: 'booked' },
      { time: '18:30頃', title: 'ホテル チェックイン', note: 'リウ プラザ エスパーニャ。屋上の「360°ルーフトップバー」は夜景が見事（ガラスの空中通路あり）。', place: 'hMadrid' },
      { time: '夜', title: '夕食はマヨール広場周辺へ', note: 'スペインの夕食は21時頃から。早めならバルでタパスを。', place: 'plazaMayor' },
    ],
    places: ['mad', 'atocha', 'toledoSt', 'zocodover', 'toledoCat', 'alcazar', 'santoTome', 'sanJuan', 'mirador', 'hMadrid'],
    routes: [['mad', 'atocha', 'train'], ['atocha', 'toledoSt', 'train'], ['toledoSt', 'zocodover', 'car'], ['zocodover', 'toledoCat', 'walk'], ['toledoCat', 'santoTome', 'walk'], ['santoTome', 'sanJuan', 'walk'], ['toledoSt', 'atocha', 'train'], ['atocha', 'hMadrid', 'car']],
    nearby: { center: 'hMadrid', label: 'ホテル（グラン・ビア）周辺', picks: ['debod', 'palacioReal', 'sanGines', 'plazaMayor'] },
  },
  {
    n: 3, date: '2026-10-16', dow: '金', city: 'マドリード → グラナダ', cityEn: 'Madrid → Granada', theme: 'terra',
    headline: '首都散策、そしてAVEで南へ',
    lead: '午前はマドリード中心部を歩き、夕方に高速鉄道AVEでアンダルシアへ。',
    items: [
      { time: '朝', title: 'ホテルで朝食', note: '3名分の朝食つき。', place: 'hMadrid' },
      { time: '09:30', title: '王宮', note: 'ホテルから徒歩約10分。ヨーロッパ屈指の豪華な宮殿。', place: 'palacioReal', tag: 'plan' },
      { time: '11:00', title: 'マヨール広場・サン・ミゲル市場', note: '市場では生ハム、オリーブ、クロケタなどの食べ歩きができます。', place: 'sanMiguel', tag: 'plan' },
      { time: '12:00', title: 'ホテル チェックアウト', note: '12:00まで。荷物はフロントに預けて観光を続けるのがおすすめ。', place: 'hMadrid' },
      { time: '13:00', title: 'ランチ・プエルタ・デル・ソル周辺', note: 'チュロスならサン・ヒネス（1894年創業）。', place: 'sanGines', tag: 'plan' },
      { time: '14:30', title: 'プラド美術館（時間があれば）', note: 'アトーチャ駅から徒歩10分。ベラスケスやゴヤの名作。オンラインで事前購入がおすすめ。', place: 'prado', tag: 'plan' },
      { time: '16:00', title: 'アトーチャ駅へ', note: 'AVEは発車前に荷物のX線検査があります。20〜30分前には駅へ。', place: 'atocha', tag: 'tip' },
      { time: '16:40', move: 'ave', tag: 'booked' },
      { time: '20:21', title: 'グラナダ駅到着 → ホテルへ', note: 'ホテルはアルハンブラの丘の上。タクシーで約15分（目安€12〜15）。', place: 'granadaSt' },
      { time: '21:00頃', title: 'ホテル アリクサレス チェックイン', note: '2泊。アルハンブラ宮殿の入場口まで徒歩数分の好立地。', place: 'hGranada' },
    ],
    places: ['hMadrid', 'palacioReal', 'plazaMayor', 'sanMiguel', 'sol', 'sanGines', 'prado', 'atocha', 'granadaSt', 'hGranada'],
    routes: [['hMadrid', 'palacioReal', 'walk'], ['palacioReal', 'sanMiguel', 'walk'], ['sanMiguel', 'sol', 'walk'], ['sol', 'prado', 'walk'], ['prado', 'atocha', 'walk'], ['atocha', 'granadaSt', 'train'], ['granadaSt', 'hGranada', 'car']],
    nearby: { center: 'hMadrid', label: 'マドリード中心部', picks: ['sanMiguel', 'botin', 'sanGines', 'prado'] },
  },
  {
    n: 4, date: '2026-10-17', dow: '土', city: 'グラナダ', cityEn: 'Granada', theme: 'cobalt',
    headline: 'アルハンブラの朝',
    lead: 'イスラム建築の最高傑作アルハンブラ宮殿へ。夕方はアルバイシンから宮殿を望む夕日を。',
    items: [
      { time: '07:30', title: 'ホテルで朝食', place: 'hGranada' },
      { time: '08:00', title: '入場口へ（徒歩数分）', note: '⚠️ チケットは記名式。パスポート原本が必要です。音声ガイドの受け取り方はGetYourGuideの案内を確認。', place: 'alhambra', tag: 'tip' },
      { time: '08:30', title: 'アルハンブラ宮殿 入場（音声ガイドつき）', note: 'ナスル朝宮殿は指定時刻にしか入れないので、時刻をチケットで確認。アルカサバ、ヘネラリフェもあわせて3〜4時間。', place: 'nazaries', tag: 'booked' },
      { time: '12:30', title: '丘を下って市街地へ', note: 'ミニバス（C30・C32）か、ゴメレス坂を徒歩で下りて約20分。', tag: 'tip' },
      { time: '13:00', title: 'タパスでランチ', note: 'グラナダはドリンクを頼むとタパスが無料でつく文化。ボデガス・カスタニェダが老舗。', place: 'castaneda', tag: 'plan' },
      { time: '14:30', title: '大聖堂・王室礼拝堂・アルカイセリア', note: 'カトリック両王の墓所。アルカイセリアは旧絹市場の土産物街。', place: 'granadaCat', tag: 'plan' },
      { time: '17:00', title: 'アルバイシン散策', note: '白壁の迷路のような旧アラブ人街（世界遺産）。スリに注意。', tag: 'plan' },
      { time: '19:00', title: 'サン・ニコラス展望台で夕日', note: '夕日に染まるアルハンブラは旅のハイライト。日の入りは19時半頃。', place: 'sanNicolas', tag: 'plan' },
      { time: '21:00', title: 'フラメンコ（予定）', note: 'サクロモンテの洞窟フラメンコはグラナダ名物。バルセロナで観る場合は10/19の夜に。', place: 'sacromonte', tag: 'plan' },
    ],
    places: ['hGranada', 'alhambra', 'nazaries', 'generalife', 'castaneda', 'granadaCat', 'alcaiceria', 'sanNicolas', 'sacromonte', 'diamantes'],
    routes: [['hGranada', 'alhambra', 'walk'], ['alhambra', 'generalife', 'walk'], ['generalife', 'nazaries', 'walk'], ['nazaries', 'castaneda', 'walk'], ['castaneda', 'granadaCat', 'walk'], ['granadaCat', 'sanNicolas', 'walk'], ['sanNicolas', 'sacromonte', 'walk']],
    nearby: { center: 'hGranada', label: 'グラナダ中心部', picks: ['castaneda', 'diamantes', 'alcaiceria', 'sanNicolas'] },
  },
  {
    n: 5, date: '2026-10-18', dow: '日', city: 'グラナダ → バルセロナ', cityEn: 'Granada → Barcelona', theme: 'cobalt',
    headline: '地中海の街へ',
    lead: '朝の便でバルセロナへ。午後は旧市街と海辺をのんびり歩きます。',
    items: [
      { time: '07:00', title: 'ホテルで朝食・チェックアウト', note: '朝食つき。早めの時間に食べられるか前日にフロントで確認を。', place: 'hGranada' },
      { time: '07:30', title: 'タクシーで空港へ', note: '約25分。前日のうちにホテルのフロントでタクシーを予約しておくと安心です。', place: 'grx', tag: 'tip' },
      { time: '09:15', move: 'vy2011', tag: 'booked' },
      { time: '10:45', title: 'バルセロナ T1 到着 → ホテルへ', note: 'アエロブス（空港バス）でカタルーニャ広場へ約35分、そこから地下鉄。タクシーなら約30分（€35〜40）。', place: 'bcn' },
      { time: '12:00', title: 'ホテルに荷物を預ける', note: 'チェックインは15:00から。', place: 'hBarcelona' },
      { time: '13:00', title: 'ボケリア市場・ランブラス通り', note: '生ハム、フルーツジュース、シーフードのバル。ランブラスはスリが多いので特に注意。', place: 'boqueria', tag: 'plan' },
      { time: '15:00', title: 'ゴシック地区・大聖堂', note: '中世の路地が残るエリア。日曜日は閉まっている店も多いです。', place: 'gotic', tag: 'plan' },
      { time: '17:00', title: 'バルセロネータで海辺散歩', note: '夕食はパエリアのお店で。', place: 'barceloneta', tag: 'plan' },
      { time: '19:00頃', title: 'ホテル チェックイン', note: 'ユーロスターズ モニュメンタル（2泊）。都市税（約€55）は現地で支払い。', place: 'hBarcelona' },
    ],
    places: ['hGranada', 'grx', 'bcn', 'plCatalunya', 'hBarcelona', 'boqueria', 'gotic', 'xampanyet', 'barceloneta'],
    routes: [['hGranada', 'grx', 'car'], ['grx', 'bcn', 'flight'], ['bcn', 'plCatalunya', 'car'], ['plCatalunya', 'hBarcelona', 'train'], ['plCatalunya', 'boqueria', 'walk'], ['boqueria', 'gotic', 'walk'], ['gotic', 'barceloneta', 'walk']],
    nearby: { center: 'hBarcelona', label: 'ホテル（モニュメンタル）周辺', picks: ['sagrada', 'xampanyet', 'boqueria', 'barceloneta'] },
  },
  {
    n: 6, date: '2026-10-19', dow: '月', city: 'バルセロナ', cityEn: 'Barcelona', theme: 'saffron',
    headline: 'ガウディをめぐる一日',
    lead: 'ガウディ没後100年の2026年。代表作3つを1日でめぐります（すべて予約済み）。',
    items: [
      { time: '08:00', title: 'ホテルで朝食', place: 'hBarcelona' },
      { time: '08:40', title: 'カサ・バトリョへ', note: '地下鉄L2 Monumental → Passeig de Gràcia（約15分）。', tag: 'tip' },
      { time: '09:15', title: 'カサ・バトリョ（ブルーチケット）', note: '海をテーマにした「骨の家」。所要時間は約1時間〜1時間半。', place: 'batllo', tag: 'booked' },
      { time: '10:40', title: 'サグラダ・ファミリアへ移動', note: '地下鉄L5 Diagonal → Sagrada Família（約10分）。15分前には到着を。', tag: 'tip' },
      { time: '11:15', title: 'サグラダ・ファミリア（塔登り＋音声ガイド）', note: '塔はランダム割当。登る時刻はチケットの表示を確認。大きな荷物は持ち込み不可。', place: 'sagrada', tag: 'booked' },
      { time: '13:30', title: 'ランチ', note: 'カサ・ミラ近くのセルベセリア・カタラナは人気のタパス店（並ぶ覚悟で）。', place: 'catalana', tag: 'plan' },
      { time: '14:30', title: 'カサ・ミラ（スタンダードツアー）', note: '波打つ屋上の煙突群が見どころ。所要時間は約1時間半。', place: 'mila', tag: 'booked' },
      { time: '16:30', title: 'グラシア通りでショッピング', note: 'カサ・バトリョの隣にチョコレート・アマトリェール。', place: 'amatller', tag: 'plan' },
      { time: '夜', title: 'フラメンコ or 最後のディナー', note: 'グラナダで観なかった場合はランブラス周辺のタブラオで。', tag: 'plan' },
    ],
    places: ['hBarcelona', 'batllo', 'amatller', 'sagrada', 'catalana', 'mila'],
    routes: [['hBarcelona', 'batllo', 'train'], ['batllo', 'sagrada', 'train'], ['sagrada', 'catalana', 'train'], ['catalana', 'mila', 'walk'], ['mila', 'amatller', 'walk']],
    nearby: { center: 'hBarcelona', label: 'グラシア通り周辺', picks: ['catalana', 'amatller', 'mila', 'batllo'] },
  },
  {
    n: 7, date: '2026-10-20', dow: '火', city: 'バルセロナ → 機内', cityEn: 'Barcelona → Abu Dhabi', theme: 'olive',
    headline: 'アディオス、エスパーニャ',
    lead: 'バルセロナからアブダビ経由で帰国します。免税手続きを忘れずに。',
    items: [
      { time: '07:00', title: '朝食・チェックアウト', place: 'hBarcelona' },
      { time: '07:45', title: '空港へ', note: 'タクシーで約30分。アエロブスならカタルーニャ広場から約35分。', tag: 'tip' },
      { time: '08:30', title: 'T1 到着・免税手続き・チェックイン', note: '免税（タックスフリー）の書類がある場合は、チェックイン前にDIVA端末で認証を。詳しくは空港ページ。', place: 'bcn', tag: 'tip' },
      { time: '10:45', move: 'ey112' },
      { time: '機内', title: 'なるべく起きておく', note: '日本時間では夕方〜深夜0時頃（17:45〜00:20）。短い仮眠ならOK。時計は日本時間（+7時間）に合わせます。', tag: 'sleep', jet: true },
      { time: '19:20', title: 'アブダビ到着・乗継', note: '軽く食べて、次の便で寝る準備を。', place: 'auh' },
      { time: '21:25', move: 'ey800' },
      { time: '機内', title: '離陸したらすぐ寝る', note: '日本の深夜2:25〜。ここでどれだけ寝られるかが帰国後の時差ボケを左右します。成田着の2〜3時間前に起きる。', tag: 'sleep', jet: true },
    ],
    places: ['hBarcelona', 'bcn', 'auh', 'nrt'],
    routes: [['hBarcelona', 'bcn', 'car'], ['bcn', 'auh', 'flight'], ['auh', 'nrt', 'flight']],
    nearby: null,
  },
  {
    n: 8, date: '2026-10-21', dow: '水', city: '東京', cityEn: 'Tokyo', theme: 'olive',
    headline: 'ただいま',
    lead: '12:45 成田着。おつかれさまでした！',
    items: [
      { time: '12:45', title: '成田空港 第1ターミナル到着', note: '入国前の動物検疫に注意。生ハムなどの肉製品は持ち込めません。', place: 'nrt' },
      { time: '午後〜', title: '22〜23時まで起きている', note: '日光を浴びて体内時計を日本に戻します。昼寝は15時までに30分以内。翌日の予定は軽めに。', tag: 'sleep', jet: true },
    ],
    places: ['nrt'],
    routes: [],
    nearby: null,
  },
];

// ホテル
window.HOTELS = [
  { place: 'hMadrid', city: 'マドリード', nights: '10/15 → 10/16（1泊）', in: '15:00以降', out: '12:00まで', room: 'スーペリアデラックスツイン（シングルベッド2台＋ソファーベッド）', meal: '10/16 朝食', note: 'キャンセル無料は10/13まで' },
  { place: 'hGranada', city: 'グラナダ', nights: '10/16 → 10/18（2泊）', in: '14:00以降', out: '12:00まで', room: 'トリプル（シングルベッド3台）', meal: '10/17・10/18 朝食', note: 'キャンセル無料は10/13まで' },
  { place: 'hBarcelona', city: 'バルセロナ', nights: '10/18 → 10/20（2泊）', in: '15:00以降', out: '12:00まで', room: 'ダブル／ツイン（エキストラベッド）', meal: '10/19・10/20 朝食', note: '都市税 約€55.44 を現地で支払い' },
];

// 空港ガイド
window.AIRPORTS = [
  {
    id: 'nrt', code: 'NRT', name: '成田空港 第1ターミナル', when: '10/14 出発 ・ 10/21 帰国',
    lead: 'エティハド航空は第1ターミナル。どちらのウィングかは当日の出発案内板で確認します。',
    steps: [
      { t: '出発3時間前', d: '第1ターミナル4階の出発ロビーへ。エティハドのカウンターでチェックインし、荷物を預けます（荷物はマドリードまで通しで運ばれます）。' },
      { t: '保安検査', d: '液体は100ml以下の容器に入れ、1L以下の透明袋1つにまとめます。モバイルバッテリーは機内持ち込みのみ。' },
      { t: '出国審査', d: '顔認証ゲートでパスポートをかざすだけ。' },
      { t: '出国後', d: '免税店「Fa-So-La」や飲食店があります。日本円はここで最小限ユーロに両替するか、現地ATMを使う方が有利なことが多いです。' },
    ],
    arrive: [
      { t: '帰国時', d: '検疫 → 入国審査（顔認証ゲート）→ 荷物受取 → 税関（Visit Japan Webの二次元コードを使うと早い）。' },
    ],
    tips: ['Visit Japan Web に帰国前に税関申告を登録しておくとスムーズ', '肉製品（生ハム・サラミ・ソーセージ）は免税店で買ったものでも持ち込めません'],
  },
  {
    id: 'auh', code: 'AUH', name: 'アブダビ ザイード国際空港 ターミナルA', when: '10/15 乗継（2時間5分）・ 10/20 乗継（2時間5分）',
    lead: '2023年に開業した巨大な新ターミナル。乗継はターミナル内で完結します。',
    steps: [
      { t: '到着', d: '飛行機を降りたら「Transfers（乗継）」の案内に従います。入国審査は不要。' },
      { t: '乗継保安検査', d: 'もう一度保安検査があります。液体ルールに注意（免税店で買った液体は封をした袋のままに）。' },
      { t: 'ゲート確認', d: '案内板で次の便（EY101 / EY800）のゲートを確認。ゲートまで歩いて10〜15分かかることもあります。' },
      { t: '待ち時間', d: '中央のマーケットプレイス・エリアに免税店、カフェ、フードコート。深夜でも営業している店があります。' },
    ],
    arrive: [],
    tips: ['預けた荷物は最終目的地まで通しで運ばれるので、受け取りは不要', 'お土産ならデーツ（ナツメヤシ）やアラビアンコーヒーが定番', 'ターミナル内は冷房が強めなので羽織るものを'],
  },
  {
    id: 'mad', code: 'MAD', name: 'マドリード バラハス空港 T4', when: '10/15 到着',
    lead: 'シェンゲン圏外からの便はT4S（サテライト）に着き、入国審査のあと無人電車でT4本館へ移動して荷物を受け取ります。',
    steps: [
      { t: '到着（T4S）', d: '案内に従って入国審査へ。EUの新システム（EES）により初回は顔写真・指紋の登録があります。混雑時は1時間程度かかることも。' },
      { t: '無人電車でT4へ', d: '入国審査のあと、シャトル電車（約3分）でT4本館へ。' },
      { t: '荷物受取・税関', d: '受け取ったら緑の「Nothing to declare（申告なし）」の出口から外へ。' },
      { t: '市内へ', d: '下の「市内への行き方」を参照。' },
    ],
    arrive: [
      { t: '近郊線 セルカニアス C1', d: 'T4の地下ホームからアトーチャ駅まで直通約25分（約€2.6）。トレドへ向かう日はこれが最適。' },
      { t: '空港バス（Exprés Aeropuerto）', d: '24時間運行・€5。アトーチャ駅周辺まで約40分。' },
      { t: 'タクシー', d: '市内中心部まで定額€33。ホテル（グラン・ビア）に荷物を預けるならこれが便利。' },
    ],
    tips: ['到着の日は大忙し。トレド行きは11:15発なので、入国が長引いたらタクシーで直接アトーチャ駅へ', 'アトーチャ駅には荷物預かり（コンシグナ）あり'],
  },
  {
    id: 'grx', code: 'GRX', name: 'グラナダ空港（フェデリコ・ガルシア・ロルカ）', when: '10/18 出発',
    lead: '小さな空港なので迷う心配はありません。市内から西へ約17km。',
    steps: [
      { t: '出発の1時間半前', d: 'ブエリング航空のカウンターへ。オンラインチェックインを前日に済ませておくとスムーズです。' },
      { t: '手荷物', d: '⚠️ 国内線の区間は運賃に受託手荷物が含まれていません。購入済みか必ず確認を（空港で追加すると割高）。' },
      { t: '保安検査', d: 'スペイン国内線なので出国審査はありません。' },
    ],
    arrive: [
      { t: 'タクシー', d: 'ホテルから約25分。空港行きは定額運賃あり（€30前後）。早朝なので前日にホテルで予約を。' },
    ],
    tips: ['早朝はカフェが少ないので、ホテルで朝食をとるか軽食の持参を'],
  },
  {
    id: 'bcn', code: 'BCN', name: 'バルセロナ エル・プラット空港 T1', when: '10/18 到着 ・ 10/20 出発',
    lead: '到着も出発もT1。ガラス張りの明るく大きなターミナルです。',
    steps: [
      { t: '出発：チェックイン前に免税手続き', d: '免税書類がある人は、まずDIVA端末（電子認証機）でパスポートと書類をスキャン。預け荷物に入れる商品は、荷物を預ける前に見せられるように。' },
      { t: 'チェックイン・荷物預け', d: 'エティハドのカウンターへ。荷物は成田まで通しで運ばれます。' },
      { t: '保安検査 → 出国審査', d: 'EES（出国の記録）があるので時間に余裕を。出国審査のあとは非シェンゲンエリア。' },
      { t: '出国後', d: '大きな免税店（Duty Free）でトゥロン、オリーブオイル、ワイン、お菓子などが買えます。' },
    ],
    arrive: [
      { t: 'アエロブス（Aerobús）', d: 'T1から約5〜10分間隔。カタルーニャ広場まで約35分。そこから地下鉄L2（Universitat駅）でMonumental駅へ。' },
      { t: 'タクシー', d: 'ホテルまで約30分・€35〜40。3人と荷物ならコスパ良し。' },
    ],
    tips: ['アブダビで乗り継ぐため、オリーブオイルやワインなどの液体は街で買ってスーツケースに入れるのが安全', '免税店の液体は封をした袋のまま開けずに'],
  },
];

// お土産
window.SOUVENIRS = [
  {
    city: 'トレド', en: 'Toledo', theme: 'terra',
    items: [
      { name: 'マサパン（マジパン）', desc: 'アーモンドと砂糖で作るトレド名物。1856年創業「サント・トメ」が有名。', price: '€8〜25', shop: 'Mazapanes Santo Tomé' },
      { name: 'ダマスキナード（金銀象嵌）', desc: '黒い鉄に金の糸で模様を描いた伝統工芸。アクセサリーや小皿。', price: '€10〜60' },
      { name: 'トレドの剣（ミニチュア）', desc: '刀剣の街トレドならでは。ペーパーナイフなど小物が手頃。', price: '€10〜40' },
    ],
  },
  {
    city: 'マドリード', en: 'Madrid', theme: 'terra',
    items: [
      { name: 'トゥロン（ヌガー）', desc: 'スペインの定番菓子。硬い「アリカンテ」と柔らかい「ヒホナ」の2種類。老舗のカサ・ミラ（1842年創業）が有名。', price: '€6〜20', shop: 'Casa Mira Madrid' },
      { name: 'スモークパプリカ（ピメントン）', desc: 'おしゃれな缶入り。料理好きへのお土産に。', price: '€3〜8' },
      { name: 'グルメ食材', desc: 'エル・コルテ・イングレスのカリャオ店のグルメ売り場なら、まとめて買えて便利。', price: '—', shop: 'El Corte Inglés Callao' },
    ],
  },
  {
    city: 'グラナダ', en: 'Granada', theme: 'cobalt',
    items: [
      { name: 'タラセア（寄木細工）', desc: 'イスラム由来の幾何学模様の寄木細工。小箱やコースター。', price: '€15〜80' },
      { name: 'ファハラウサ焼', desc: '白地に青と緑で絵付けしたグラナダの陶器。', price: '€10〜50' },
      { name: 'ピオノノ', desc: 'シロップを染みこませた小さなケーキ。日持ちしないので現地で。', price: '€1.5〜/個', shop: 'Casa Ysla Granada' },
      { name: 'アルハンブラ模様の雑貨', desc: 'タイル柄のマグネットやコースター。アルカイセリアに店が集まっています。', price: '€3〜15' },
    ],
  },
  {
    city: 'バルセロナ', en: 'Barcelona', theme: 'saffron',
    items: [
      { name: 'ガウディグッズ', desc: 'トレンカディス（モザイク）柄のトカゲ、タイル、文具。各施設のミュージアムショップが充実。', price: '€5〜40' },
      { name: 'チョコレート・アマトリェール', desc: '1797年創業のブランド。レトロなパッケージの板チョコはばらまき用に最適。', price: '€3〜10', shop: 'Chocolate Amatller Barcelona' },
      { name: 'トゥロン・ビセンス', desc: 'フレーバー豊富な高級トゥロン。', price: '€8〜25', shop: 'Torrons Vicens Barcelona' },
      { name: 'エスパドリーユ', desc: '1940年創業の老舗「ラ・マヌアル・アルパルガテラ」の手作り麻底靴。', price: '€20〜60', shop: 'La Manual Alpargatera' },
    ],
  },
  {
    city: 'スーパーで買える', en: 'Supermercado', theme: 'olive',
    items: [
      { name: 'オリーブオイル', desc: '小瓶や缶入りが便利。必ずスーツケースへ。', price: '€4〜15' },
      { name: 'サフラン', desc: 'パエリアに欠かせない。日本よりずっと安い。', price: '€3〜10' },
      { name: 'チュパチャプス／ラカシトス', desc: 'チュパチャプスはスペイン生まれ（ロゴはダリのデザイン）。', price: '€1〜5' },
      { name: 'パエリアの素', desc: '粉末やペーストタイプ。帰国後に旅の味を再現。', price: '€1〜4' },
      { name: 'メルカドナのコスメ', desc: '大手スーパー「メルカドナ」のプライベートブランドのコスメが安くて人気。', price: '€2〜10' },
    ],
  },
];

window.SOUVENIR_NOTES = [
  '🚫 生ハム・チョリソー・サラミなどの肉製品は、日本の動物検疫で持ち込みできません（真空パックや免税品でも不可）。',
  '🧴 液体（オイル・ワイン・ジャム）は、アブダビの乗継で没収されないようにスーツケースへ。',
  '🧾 スペインは免税（タックスフリー）に最低購入金額がありません。対象のお店で「Tax free」と伝えて書類を作ってもらい、帰国時にバルセロナ空港のDIVA端末で手続きします。',
];

// 情報
window.INFO = {
  baggage: [
    'エティハド（国際線）：機内持ち込み1個／人（7kg・56×36×23cm以内）、受託手荷物25kg／人（90×72×45cm以内）',
    'ブエリング（グラナダ→バルセロナ）：無料の受託手荷物なし。購入状況を要確認',
  ],
  emergency: [
    { k: '緊急通報（警察・救急・消防）', v: '112' },
    { k: '在スペイン日本国大使館（マドリード）', v: '+34-91-590-7600' },
    { k: '在バルセロナ日本国総領事館', v: '+34-93-280-3433' },
  ],
  tips: [
    { k: '時差', v: '日本より7時間遅い（日本 20:00 ＝ スペイン 13:00）。10/25 にサマータイムが終わりますが、旅行中は影響なし。' },
    { k: '天気（10月中旬）', v: 'マドリード 12〜22℃、グラナダ 10〜23℃（朝晩は冷える）、バルセロナ 15〜22℃。重ね着がおすすめ。' },
    { k: '電源', v: 'Cタイプ、230V。スマホやPCの充電器はそのまま使えます（変換プラグが必要）。' },
    { k: 'お金', v: 'ほぼどこでもカード払い（タッチ決済）が使えます。小銭は市場やチップ用に少し。' },
    { k: 'チップ', v: '義務ではありません。レストランでよかったら端数を切り上げるか5〜10%程度。' },
    { k: '食事の時間', v: 'ランチは14時頃、ディナーは21時頃からと遅め。バルなら一日中つまめます。' },
    { k: '治安', v: '観光地や地下鉄はスリが多発。バッグは体の前に、スマホをテーブルに置かない。' },
    { k: '入国', v: 'パスポートの残存期間は3か月以上。欧州渡航認証ETIASは開始時期を出発前に要確認。' },
  ],
  jetlag: {
    lead: '行きは「1本目は起きる・2本目で寝る」、帰りも「1本目は起きる・2本目で寝る」。どちらも乗り継ぎ後の便が到着地の夜にあたります。',
    legs: [
      { h: '行き 10/14〜15', rows: [
        { k: 'EY801 成田→アブダビ', es: '11:00→22:20', jp: '18:00→05:20', act: 'なるべく起きておく', sleep: false },
        { k: 'アブダビ乗継', es: '22:20→00:25', jp: '05:20→07:25', act: '起きて歩く', sleep: false },
        { k: 'EY101 アブダビ→マドリード', es: '00:25→08:10', jp: '07:25→15:10', act: '5〜6時間しっかり寝る', sleep: true },
        { k: 'マドリード到着日', es: '08:10→22:00', jp: '15:10→05:00', act: '日光を浴び、22時頃まで起きる', sleep: false },
      ] },
      { h: '帰り 10/20〜21', rows: [
        { k: 'EY112 バルセロナ→アブダビ', es: '10:45→17:20', jp: '17:45→00:20', act: 'なるべく起きておく', sleep: false },
        { k: 'アブダビ乗継', es: '17:20→19:25', jp: '00:20→02:25', act: '軽く食べて寝る準備', sleep: false },
        { k: 'EY800 アブダビ→成田', es: '19:25→05:45', jp: '02:25→12:45', act: '離陸後すぐ寝る', sleep: true },
        { k: '帰国日', es: '—', jp: '12:45→23:00', act: '日光を浴び、22〜23時まで起きる', sleep: false },
      ] },
    ],
    tips: [
      '日本→スペインは体内時計を遅らせる方向なので比較的楽。2日目には慣れることが多い',
      '帰りは早める方向でつらくなりがち。EY800の前半にどれだけ寝られるかが勝負',
      '機内のお酒は眠りが浅くなるので控えめに。水をこまめに',
      '乗った時点で時計を到着地の時間に。行動を合わせやすくなる',
      '一番効くのは光：朝は日光を浴び、夜はスマホの画面を暗めに',
      '出発前の10/12〜13は普段どおりでOK',
      '睡眠薬やサプリを使う場合は、事前に医師・薬剤師に相談を',
    ],
  },
  checklist: [
    'パスポート（残存期間3か月以上）', '予約確認書PDF（スマホに保存＋印刷）', 'クレジットカード 2枚以上', '変換プラグ（Cタイプ）',
    'モバイルバッテリー（機内持ち込み）', 'eSIM／海外ローミングの設定', '羽織もの（朝晩・機内用）', '歩きやすい靴',
    'Visit Japan Web の登録（帰国用）', 'ブエリングのオンラインチェックイン（10/17）', 'グラナダの空港タクシー予約（10/17）', 'トレド・AVEのチケットをスマホに保存',
  ],
};
