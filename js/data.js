// 出典：ハノイスケジュールv02.pdf。公開用のため氏名・座席割当・予約番号は掲載しない。
// 時刻は各現地時間。地図の座標と線は目安。
window.TRIP = { title:'Journey to Vietnam', subtitle:'ベトナム家族旅行 2026', start:'2026-10-14', end:'2026-10-19', travelers:'家族3人', timezone:'Asia/Ho_Chi_Minh', language:'vi-VN' };
window.PLACES = {
 nrt:{name:'成田空港',en:'Narita International Airport',lat:35.772,lng:140.393,kind:'airport'},
 hkg:{name:'香港国際空港',en:'Hong Kong International Airport',lat:22.308,lng:113.918,kind:'airport'},
 han:{name:'ノイバイ国際空港',en:'Noi Bai International Airport',lat:21.219,lng:105.804,kind:'airport'},
 hHanoi:{name:'トラン・トラン セントラル ホテル',en:'TrangTrang Central Hotel',lat:21.035,lng:105.853,kind:'hotel',addr:'6B Luong Ngoc Quyen Street, Hanoi',query:'TrangTrang Central Hotel 6B Luong Ngoc Quyen Hanoi'},
 cruise:{name:'Celina of The Sea Cruise 集合先',en:'Celina of The Sea Cruise',lat:20.921,lng:106.986,kind:'hotel',addr:'Lot 41A, Tuan Chau Marina, Ha Long',query:'Celina of The Sea Cruise Lot 41A Tuan Chau Marina',mapNote:'港周辺の目安です。正確な受付地点を運航会社に確認してください。'},
 oldQuarter:{name:'ハノイ旧市街',en:'Hanoi Old Quarter',lat:21.035,lng:105.85,kind:'sight'},
 hoanKiem:{name:'ホアンキエム湖',en:'Hoan Kiem Lake',lat:21.0287,lng:105.852,kind:'sight'},
 trainStreet:{name:'トレインストリート（観光案）',en:'Hanoi Train Street',lat:21.0304,lng:105.8452,kind:'sight'},
 temple:{name:'文廟',en:'Temple of Literature Hanoi',lat:21.0281,lng:105.8355,kind:'sight'},
 dongXuan:{name:'ドンスアン市場',en:'Dong Xuan Market',lat:21.038,lng:105.85,kind:'shop'}
};
const flight=(code,from,to,dep,arr,dur,note,arrNote='')=>({type:'flight',code,carrier:'香港エクスプレス',from,to,dep,arr,dur,note,arrNote});
const NRT={code:'NRT',city:'東京 成田'},HKG={code:'HKG',city:'香港'},HAN={code:'HAN',city:'ハノイ'};
window.MOVES={
 uo653:flight('UO653',NRT,HKG,'21:35','01:30','4時間55分','10/14出発 → 10/15到着。時刻は旅程PDFより','+1'),
 uo540:flight('UO540',HKG,HAN,'07:40','08:50','2時間10分','10/15。香港で6時間10分の乗継。荷物の扱いは要確認'),
 uo541:flight('UO541',HAN,HKG,'09:35','12:40','2時間5分','10/19。早朝の空港送迎を事前手配'),
 uo652:flight('UO652',HKG,NRT,'15:10','20:40','4時間30分','10/19。香港で2時間30分の乗継。荷物の扱いは要確認')
};
const item=(time,title,note,place,tag)=>({time,title,note,place,tag});
const nearby={center:'hHanoi',label:'ホテル・旧市街周辺',picks:['oldQuarter','hoanKiem','dongXuan']};
window.DAYS=[
 {n:1,date:'2026-10-14',dow:'水',city:'成田 → 香港',cityEn:'Narita → Hong Kong',theme:'olive',headline:'夜のフライトで旅のはじまり',lead:'香港経由でハノイへ。香港到着は翌日01:30です。',items:[
 item('出発前','成田でチェックイン','ターミナル・カウンター・受付締切を航空会社で確認。香港での乗継方法、次便の搭乗券、荷物の最終受取地も確認。','nrt','tip'),{time:'21:35',move:'uo653'},
 {...item('機内','到着前に休息','香港は日本より1時間、ハノイは2時間遅れ。夜間の移動と早朝の乗継に備え休みます。',null,'sleep'),jet:true}
 ],places:['nrt','hkg'],routes:[['nrt','hkg','flight']],nearby:null},
 {n:2,date:'2026-10-15',dow:'木',city:'香港 → ハノイ',cityEn:'Hong Kong → Hanoi',theme:'terra',headline:'旧市街とホアンキエム湖',lead:'08:50ハノイ着。体調に合わせて旧市街を散策する観光案です。',items:[
 item('01:30','香港到着・乗継','次便07:40まで6時間10分。U-Connect利用有無と預け荷物の取扱いで手順が変わるため、事前に確認した案内に従います。','hkg'),{time:'07:40',move:'uo540'},
 item('08:50','ハノイ到着','入国・荷物受取後、ホテルへ。送迎の予約状況は要確認。','han'),
 item('午前','ホテルへ・荷物を預ける','10/15〜16の1泊。チェックイン時刻と到着前の荷物預かりはホテルに確認。','hHanoi','booked'),
 item('午後','旧市街・ホアンキエム湖散策','PDFの観光案。夜間移動後なので、疲れ具合に合わせて調整。','hoanKiem','plan'),
 item('夕方','翌日の送迎・集合場所を確認','10/16の11:00集合は確定。07:00ホテル出発・10:15港着は移動目安。送迎予約時に再確認。',null,'confirm')
 ],places:['hkg','han','hHanoi','oldQuarter','hoanKiem'],routes:[['hkg','han','flight'],['han','hHanoi','car'],['hHanoi','hoanKiem','walk']],nearby},
 {n:3,date:'2026-10-16',dow:'金',city:'ハノイ → ハロン湾',cityEn:'Hanoi → Ha Long Bay',theme:'cobalt',headline:'ハロン湾で1泊クルーズ',lead:'Celina of The Sea Cruise。11:00集合は確定、朝の出発・到着時刻は目安です。',items:[
 item('07:00頃','ホテル出発（移動目安）','送迎予約時に出発時刻・迎えの場所を確認。チェックアウトと荷物の扱いも確認。','hHanoi','estimate'),
 item('10:15頃','トゥアンチャウ港 到着目標','余裕を見た提案時刻。集合先はLot 41A。正確な受付地点は運航会社に確認。','cruise','estimate'),
 item('11:00','クルーズ集合【確定】','Celina of The Sea Cruise／Lot 41A, Tuan Chau Marina, Ha Long。ご本人確認済みの集合時刻。','cruise','confirmed'),
 item('乗船後','クルーズ・船内泊','10/16〜17の1泊。出港・食事・アクティビティは運航会社の確定行程に従います。',null,'booked')
 ],places:['hHanoi','cruise'],routes:[['hHanoi','cruise','car']],nearby:null},
 {n:4,date:'2026-10-17',dow:'土',city:'ハロン湾 → ハノイ',cityEn:'Ha Long Bay → Hanoi',theme:'cobalt',headline:'下船してハノイへ',lead:'下船時刻と帰路の移動方法は要確認。ハノイで再びホテルへ。',items:[
 item('時刻未定','クルーズ下船','下船時刻・迎えの場所・帰路の送迎を運航会社に確認。','cruise','confirm'),
 item('下船後','ハノイへ移動','所要時間や到着時刻は送迎確定後に更新。',null,'confirm'),
 item('到着後','ホテル チェックイン','TrangTrang Central Hotel。10/17〜19の2泊は予約済み。','hHanoi','booked'),
 item('夜','旧市街で夕食','PDFの観光案。帰着時間と疲れ具合に合わせて調整。','oldQuarter','plan')
 ],places:['cruise','hHanoi','oldQuarter'],routes:[['cruise','hHanoi','car']],nearby},
 {n:5,date:'2026-10-18',dow:'日',city:'ハノイ',cityEn:'Hanoi',theme:'terra',headline:'市内観光と買い物',lead:'トレインストリート、文廟、買い物などの観光案。順番と時間は未確定です。',items:[
 item('時間未定','トレインストリート','PDFの候補。現地の立入規制と案内に従い、線路内には立ち入らないでください。','trainStreet','plan'),
 item('時間未定','文廟','PDFの候補。開館状況・チケットは訪問前に確認。','temple','plan'),
 item('時間未定','旧市街で買い物','買い物先や購入品は当日調整。お土産ガイドも参照。','oldQuarter','plan'),
 item('夜','翌朝の空港送迎・荷造り','09:35発に間に合うホテル出発時刻を送迎業者に確認。早朝チェックアウトもフロントへ相談。','hHanoi','confirm')
 ],places:['hHanoi','trainStreet','temple','oldQuarter'],routes:[],nearby},
 {n:6,date:'2026-10-19',dow:'月',city:'ハノイ → 香港 → 成田',cityEn:'Hanoi → Hong Kong → Narita',theme:'olive',headline:'香港経由で帰国',lead:'09:35ハノイ発、20:40成田着。香港での乗継は2時間30分です。',items:[
 item('早朝','ホテル出発 → ノイバイ空港','送迎を事前手配。出発時刻・受付締切・空港到着目標を予約時に確認。','hHanoi','confirm'),
 {time:'09:35',move:'uo541'},item('12:40','香港到着・乗継','次便15:10まで2時間30分。荷物の受取・再預けが必要か事前確認。','hkg'),
 {time:'15:10',move:'uo652'},item('20:40','成田到着','入国手続き・荷物受取・税関後に帰宅。','nrt')
 ],places:['hHanoi','han','hkg','nrt'],routes:[['hHanoi','han','car'],['han','hkg','flight'],['hkg','nrt','flight']],nearby:null}
];
window.HOTELS=[
 {place:'hHanoi',city:'ハノイ',nights:'10/15 → 10/16（1泊）',in:'要確認',out:'10/16 早朝出発予定・要確認',room:'確認書を参照',meal:'要確認',note:'予約済み。朝の送迎とチェックアウトを事前に相談。'},
 {place:'cruise',city:'ハロン湾・船内泊',nights:'10/16 → 10/17（1泊）',in:'10/16 11:00集合【確定】',out:'10/17 下船時刻は要確認',room:'確認書を参照',meal:'運航会社の行程を確認',note:'受付はLot 41A。正確な地点・下船時刻・帰路の送迎を確認。'},
 {place:'hHanoi',city:'ハノイ',nights:'10/17 → 10/19（2泊）',in:'要確認',out:'10/19 早朝出発予定・要確認',room:'確認書を参照',meal:'要確認',note:'予約済み。10/19の空港送迎を前日までに手配。'}
];
const hk='https://www.hkexpress.com/';
window.AIRPORTS=[
 {id:'nrt',code:'NRT',name:'成田空港',when:'10/14 21:35出発 ・ 10/19 20:40帰国',lead:'香港エクスプレス UO653で香港へ。使用ターミナルとカウンターは最新案内を確認。',steps:[{t:'チェックイン',d:'パスポートと確認書を用意。香港での乗継方法、次便の搭乗券、荷物の最終受取地を確認。'},{t:'保安検査・出国',d:'航空会社の手荷物条件と空港の案内に従って搭乗ゲートへ。'}],arrive:[{t:'帰国時',d:'入国手続き → 荷物受取 → 税関。'}],tips:['手荷物枠は購入運賃で異なります。予約内容を確認。'],links:[{label:'成田空港公式',url:'https://www.narita-airport.jp/'},{label:'航空会社公式',url:hk}]},
 {id:'hkg',code:'HKG',name:'香港国際空港',when:'10/15 01:30 → 07:40（6時間10分）・ 10/19 12:40 → 15:10（2時間30分）',lead:'U-Connect利用有無・搭乗券・荷物の扱いを事前に確認。',steps:[{t:'乗継方法を確認',d:'U-Connectの利用状況は旅程PDFに未記載。入国・荷物受取・再チェックインの要否を航空会社へ確認。'},{t:'次便の搭乗券',d:'乗継として案内された場合はTransferの標識に従い、搭乗券の有無に応じた手順へ。'},{t:'保安検査・ゲート確認',d:'乗継保安検査後、案内板でUO540／UO652のゲートと搭乗時刻を確認。'}],arrive:[],tips:['往路は深夜から早朝。羽織もの・充電器を手元に。','復路は2時間30分。再チェックインが必要なら受付締切を事前確認。'],links:[{label:'空港の乗継案内',url:'https://www.hongkongairport.com/en/passenger-guide/transfer-transit/'},{label:'U-Connect公式',url:'https://www2.hkexpress.com/en/plan-your-trip/u-connect-connecting-flights'}]},
 {id:'han',code:'HAN',name:'ノイバイ国際空港',when:'10/15 08:50到着 ・ 10/19 09:35出発',lead:'ハノイの空港。帰国日は早朝にホテルを出発。',steps:[{t:'到着',d:'入国手続き → 荷物受取 → 税関。迎えの場所を送迎業者と確認。'},{t:'帰国日の出発',d:'チェックイン → 保安検査・出国手続き → 搭乗ゲート。受付締切は航空会社で確認。'}],arrive:[{t:'ホテルへ',d:'ホテルまたは送迎業者へ車を手配。6B Luong Ngoc Quyen Streetを伝えます。予約状況は要確認。'}],tips:['10/19の空港送迎を前日までに手配。','料金・集合場所・出発時刻を予約時に確認。'],links:[{label:'空港公式',url:'https://noibaiairport.vn/'}]}
];
const sv='https://vietnam.travel/things-to-do/12-traditional-vietnamese-souvenirs';
window.SOUVENIRS=[{city:'ハノイ',en:'Hanoi',theme:'saffron',items:[
 {name:'ベトナムコーヒー・フィン',price:'店頭で確認',desc:'コーヒーと金属の抽出フィルター。豆・粉の違いと賞味期限を確認して選ぶ候補。',shop:'Hanoi Vietnamese coffee phin',url:sv},
 {name:'漆の小物',price:'店頭で確認',desc:'ベトナムの工芸品。小さな箱やトレーなど、持ち帰りやすいサイズを選ぶ候補。',shop:'Hanoia Hanoi',url:sv},
 {name:'シルクの小物',price:'店頭で確認',desc:'スカーフなどの候補。素材・品質表示を確かめて選びます。',shop:'Hanoi silk shop',url:sv}
]}];
window.SOUVENIR_NOTES=['買い物は10/18の観光案。店舗や価格は未確定です。','液体や壊れ物は荷物条件を確認し、余裕を持って梱包。'];
window.INFO={
 confirmations:['10/16 港までの送迎を予約。11:00集合に間に合う出発時刻を確認。','クルーズの受付地点、10/17の下船時刻、ハノイへの帰路を確認。','香港乗継のU-Connect利用有無、搭乗券、荷物受取・再預けの要否を確認。','全4便の機内持込・預入条件と購入済みの荷物枠を確認。','10/19早朝のホテル→空港送迎を事前手配。'],
 baggage:['購入運賃と追加購入によって手荷物枠が異なります。4便それぞれの予約内容を確認。','香港での自動荷物乗継はU-Connect等の条件を確認。通し扱いとは断定できません。','座席割当と予約番号は確認書PDFを参照。'],
 checklist:['パスポート','航空券・ホテル・クルーズ確認書（オフライン保存）','10/16 港までの送迎確認','クルーズ受付地点・下船時刻・帰路確認','香港乗継と荷物条件の確認','10/19 空港送迎確認','財布・カード','スマートフォン・充電器','モバイルバッテリー（航空会社の条件を確認）','通信手段・オフライン地図','羽織もの','歩きやすい靴','雨具','常備薬','旅行保険の連絡先'],
 jetlag:{lead:'ハノイは日本より2時間、香港は1時間遅れ。往路の夜間移動と香港での長い待ち時間に合わせて休息を確保します。',legs:[
 {h:'往路・10/14〜15',rows:[{k:'成田出発',es:'10/14 19:35',jp:'10/14 21:35',act:'香港到着は現地10/15 01:30。'},{k:'香港乗継',es:'10/15 00:30〜06:40',jp:'10/15 02:30〜08:40',act:'香港現地01:30〜07:40。搭乗手続き・ゲートを確認してから休息。',sleep:true},{k:'ハノイ到着',es:'10/15 08:50',jp:'10/15 10:50',act:'ホテルへ。観光は体調に合わせて調整。'}]},
 {h:'復路・10/19',rows:[{k:'ハノイ出発',es:'10/19 09:35',jp:'10/19 11:35',act:'早朝の空港送迎を手配。'},{k:'香港乗継',es:'10/19 11:40〜14:10',jp:'10/19 13:40〜16:10',act:'香港現地12:40〜15:10。荷物とゲートを確認。'},{k:'成田到着',es:'10/19 18:40',jp:'10/19 20:40',act:'同日夜に帰国。'}]}
 ],tips:['アイマスク・耳栓・羽織ものを用意。','香港とハノイの時計を混同しないよう、便ごとの出発地の時刻で確認。']},
 emergency:[{k:'警察（ベトナム）',v:'113'},{k:'消防（ベトナム）',v:'114'},{k:'救急（ベトナム）',v:'115'}],
 tips:[{k:'時刻',v:'全日程は各現地時刻。香港は日本−1時間、ハノイは−2時間。'},{k:'通貨',v:'ベトナムドン（VND）。香港での買い物は香港ドル（HKD）。'},{k:'集合',v:'10/16 11:00は確定。07:00出発・10:15港着は移動目安。'},{k:'地図',v:'ピンは目安。クルーズ受付はLot 41Aの場所を事前確認。線は移動の概略。'},{k:'未定事項',v:'観光の順番、下船時刻、送迎、部屋・食事条件は確認後に更新。'}],
 sources:[{label:'香港エクスプレス：荷物FAQ',url:'https://www.hkexpress.com/ja/Need-help/Customer-Care/baggage-faq'},{label:'香港国際空港：乗継案内',url:'https://www.hongkongairport.com/en/passenger-guide/transfer-transit/'},{label:'ベトナム政府観光局：ハノイ',url:'https://vietnam.travel/places-to-go/northern-vietnam/ha-noi'},{label:'在ベトナム日本国大使館',url:'https://www.vn.emb-japan.go.jp/'},{label:'大使館：安全の手引き・緊急連絡先',url:'https://www.vn.emb-japan.go.jp/files/100954888.pdf'}]
};
window.PHRASES=[
 {h:'あいさつ・基本',en:'Greetings',note:'声調があるためカタカナは目安。端末に対応音声がない場合は文字を見せてください。',items:[{es:'Xin chào',kana:'シン チャオ',ja:'こんにちは'},{es:'Cảm ơn',kana:'カム オン',ja:'ありがとう'},{es:'Xin lỗi',kana:'シン ロイ',ja:'すみません／ごめんなさい'},{es:'Vâng',kana:'ヴァン',ja:'はい'},{es:'Không',kana:'ホン',ja:'いいえ'}]},
 {h:'食事・買い物',en:'Food & Shopping',items:[{es:'Cho tôi cái này',kana:'チョー トイ カイ ナイ',ja:'これをください'},{es:'Bao nhiêu tiền?',kana:'バオ ニエウ ティエン',ja:'いくらですか？'},{es:'Tính tiền',kana:'ティン ティエン',ja:'お会計をお願いします'},{es:'Không cay',kana:'ホン カイ',ja:'辛くしないでください'}]},
 {h:'移動・困ったとき',en:'Getting Around',items:[{es:'Nhà vệ sinh ở đâu?',kana:'ニャー ヴェ シン オー ダウ',ja:'トイレはどこですか？'},{es:'Bạn có nói tiếng Anh không?',kana:'バン コー ノイ ティエン アイン ホン',ja:'英語を話せますか？'},{es:'Làm ơn giúp tôi',kana:'ラム オン ズップ トイ',ja:'助けてください'}]}
];
