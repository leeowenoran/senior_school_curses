/* 地理 · 必修 第一册 · 第6章 · 课时：第1节 气象灾害 */
(function () {
  var v = gzGetVolume('geography', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u14',
    name: '第1节 气象灾害',
    chapter: '必修 第一册 · 第6章 自然灾害',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、气象灾害是什么' },
      { type: 'paragraph', text: '气象灾害是指因大气活动异常，给人类生命财产和生存环境造成损害的事件。它和地震、火山不同，根源在天上，由风、雨、气温、气压等天气现象的异常变化引起。常见的气象灾害有台风、洪涝、干旱、寒潮等。我国地处东亚季风区，季风不稳定，是世界上气象灾害发生最频繁的国家之一。' },
      { type: 'list', items: ['台风（热带气旋）：夏秋季节袭击东南沿海', '洪涝：暴雨或持续降水导致江河泛滥、农田积水', '干旱：长时间少雨，河流干涸、农田缺水', '寒潮：强冷空气迅速南下，带来剧烈降温和大风'] },
      { type: 'heading', text: '二、台风——来自海洋的旋转风暴' },
      { type: 'paragraph', text: '台风是发生在热带或副热带洋面上的强烈热带气旋。海面水温越高，空气上升越剧烈，周围空气旋转着补位，就形成一个巨大的空气旋涡。北半球台风逆时针旋转，中心附近最大风力可达12级或以上，常伴随暴雨和风暴潮。台风主要影响我国东南沿海地区，多出现在夏秋季节。' },
      { type: 'keypoint', label: '重点·台风的结构', text: '<strong>台风由内到外分三层：</strong>① <strong>台风眼</strong>，位于正中心，天气相对晴朗、风平浪静；② <strong>旋涡风雨区</strong>，环绕台风眼，风雨最猛烈，破坏力最强；③ <strong>外围大风区</strong>，风力由外向内逐渐增强。记住「眼静、壁猛、外渐强」，就不会把台风眼当成风雨最大的地方。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">台风的水平结构（由内到外）</text><circle cx="340" cy="200" r="150" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><circle cx="340" cy="200" r="95" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><circle cx="340" cy="200" r="38" fill="#e8f2fb" stroke="#3389c4" stroke-width="2"/><text x="340" y="206" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">台风眼</text><text x="340" y="120" font-size="13" fill="#1f3a4d" text-anchor="middle">旋涡风雨区</text><text x="340" y="300" font-size="13" fill="#1f3a4d" text-anchor="middle">外围大风区</text><text x="340" y="335" font-size="12" fill="#1f3a4d" text-anchor="middle">由内到外：台风眼（平静）→ 旋涡风雨区（最猛）→ 外围大风区（渐强）。</text></svg>', caption: '图1　台风由内到外分为台风眼、旋涡风雨区、外围大风区三层。' },
      { type: 'list', items: ['强风：吹倒房屋、广告牌，损坏电力通信设施', '暴雨：引发城市内涝和山洪', '风暴潮：海水倒灌，淹没沿海低地'] },
      { type: 'paragraph', text: '虽然台风危害很大，但它带来的降水有时能缓解长江中下游地区的伏旱，这也是台风有利的一面。所以台风不全是灾害，关键看它影响和防御情况。' },
      { type: 'heading', text: '三、洪涝——被水淹没的威胁' },
      { type: 'paragraph', text: '洪涝分为两类：一是洪水，河流水量猛增、水位上涨漫出河道，淹没两岸土地；二是涝渍，地势低洼处积水排不出去，作物长期泡在水里。我国洪涝多发生在降水集中的夏秋季节，东部平原和河口三角洲尤其常见。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">洪涝的形成过程</text><rect x="60" y="55" width="560" height="70" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="85" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">① 持续暴雨或强降水</text><text x="340" y="110" font-size="12" fill="#1f3a4d" text-anchor="middle">大气降水集中，水量迅速增加</text><rect x="60" y="140" width="560" height="70" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="170" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">② 河流水位猛涨、漫出河道</text><text x="340" y="195" font-size="12" fill="#1f3a4d" text-anchor="middle">排水不畅，河水泛滥</text><rect x="60" y="225" width="560" height="70" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="255" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">③ 低洼农田、城镇被淹没</text><text x="340" y="280" font-size="12" fill="#1f3a4d" text-anchor="middle">形成洪水或涝渍，造成灾害</text></svg>', caption: '图2　降水集中、排水不畅、地势低平叠加，容易形成洪涝。' },
      { type: 'warn', label: '易错·几个易混概念', text: '<strong>注意区分：</strong>① <strong>洪水与涝渍</strong>不同，洪水是河道漫溢，涝渍是低地积水；② <strong>洪涝与干旱</strong>相反，一个水太多，一个水太少，但都和降水异常有关；③ 城市内涝不等于河流洪水，城市内涝多因排水系统跟不上短时强降雨。考试常把这几个概念混在一起考，要分清。' },
      { type: 'keypoint', label: '重点·我国洪涝多发区', text: '<strong>我国洪涝集中区：</strong>东部季风区的平原和三角洲，如长江中下游平原、珠江流域、淮河下游、嫩江松花江流域。这些地方降水集中、河网密布、地势低平，一旦暴雨集中就容易成灾。理解「降水集中 + 地势低平 + 河道弯曲」三大原因，就能解释为什么洪涝总在这些地方发生。' },
      { type: 'heading', text: '四、干旱——缺水的长期困扰' },
      { type: 'paragraph', text: '干旱是指长时间降水明显偏少，空气干燥、土壤缺水，河流湖泊水位下降甚至干涸。干旱不一定立刻能看到灾害，但会影响农业、饮水和生态，持续时间越长危害越大。我国干旱分布广，几乎每年都有不同地区受旱。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">干旱的主要影响</text><rect x="50" y="60" width="170" height="200" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="135" y="160" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">河流干涸</text><text x="135" y="185" font-size="12" fill="#1f3a4d" text-anchor="middle">水位下降断流</text><rect x="255" y="60" width="170" height="200" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="160" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">农田龟裂</text><text x="340" y="185" font-size="12" fill="#1f3a4d" text-anchor="middle">作物缺水减产</text><rect x="460" y="60" width="170" height="200" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="545" y="160" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">饮水困难</text><text x="545" y="185" font-size="12" fill="#1f3a4d" text-anchor="middle">人畜缺水</text><text x="340" y="295" font-size="12" fill="#1f3a4d" text-anchor="middle">长期少雨造成水、土、生物连锁缺水。</text></svg>', caption: '图3　干旱会让河流干涸、农田龟裂、人畜饮水困难。' },
      { type: 'tip', label: '提示·我国的典型旱灾', text: '我国典型旱灾按季节区分：<strong>春旱</strong>多见于华北平原，春季升温快、降水少；<strong>伏旱</strong>多见于长江中下游，盛夏7、8月受副热带高压控制，炎热少雨；<strong>夏旱、秋旱</strong>在南方部分地区也常见。记住「华北春旱、长江伏旱」，做题就能快速对应地区与季节。' },
      { type: 'heading', text: '五、寒潮——强冷空气的速冻' },
      { type: 'paragraph', text: '寒潮是强冷空气迅速南下造成大范围剧烈降温的天气现象，常伴随大风、雨雪和霜冻。寒潮多发生在冬半年，影响我国大部分地区。它能冻伤农作物、影响交通，但也能冻死害虫、改善空气质量。' },
      { type: 'list', items: ['危害：剧烈降温冻伤越冬作物，大风大雪影响交通', '防御：提前发布预警，农作物覆盖保暖，交通部门除冰', '好处：低温杀灭害虫，减少来年虫灾'] },
      { type: 'example', label: '例题·判断气象灾害类型', text: '题目：下列现象中，属于气象灾害的是？<br>A. 地震导致房屋倒塌　B. 台风登陆带来狂风暴雨　C. 火山喷发掩埋村庄　D. 滑坡堵塞河道<br>解析：气象灾害由大气活动异常引起，台风是典型的气象灾害；地震、火山喷发来自地球内部，属于地质灾害；滑坡多由重力或暴雨诱发，通常归为地质灾害或次生灾害。所以四个选项中只有台风属于气象灾害，应选B。' },
      { type: 'table', headers: ['灾害类型', '主要成因', '多发地区', '主要危害'], rows: [['台风', '热带洋面强烈气旋', '东南沿海', '强风、暴雨、风暴潮'], ['洪涝', '暴雨集中、排水不畅', '东部平原、三角洲', '淹没农田房屋、交通中断'], ['干旱', '长期少雨、蒸发强', '华北、长江中下游等', '缺水、农业减产、生态退化']] }
    ],
    exercises: [
      { type: 'choice', question: '下列关于台风的说法，正确的是？', options: ['台风是发源于热带洋面的强烈热带气旋', '台风中心（台风眼）风雨最大', '台风只会给人类带来灾害，没有好处', '台风主要出现在冬季的黄海海域'], answer: '台风是发源于热带洋面的强烈热带气旋', explanation: '台风是发生在热带或副热带洋面上的强烈热带气旋，中心附近风力可达12级或以上。台风眼区天气相对平静、晴朗，风雨并不大；旋涡风雨区才是风雨最猛烈的地方。台风虽带来灾害，但也能缓解南方伏旱、带来降水。台风多发于夏秋季节的西北太平洋，而非冬季黄海。所以正确说法是台风是发源于热带洋面的强烈热带气旋。' },
      { type: 'choice', question: '我国洪涝灾害多发区主要集中在？', options: ['气候干旱的西北地区', '长江中下游平原和珠江流域等东部季风区', '青藏高原腹地', '东北漠河以北'], answer: '长江中下游平原和珠江流域等东部季风区', explanation: '我国东部季风区受夏季风影响，降水集中且多暴雨，加上地势低平、河道弯曲、排水不畅，容易发生洪涝。长江中下游平原、珠江流域、淮河下游等地都是洪涝多发区。西北地区气候干旱，降水少，洪涝极少；青藏高原和漠河北部也不是主要洪涝区。因此选东部季风区的平原和流域地区。' },
      { type: 'choice', question: '下列属于气象灾害的是？', options: ['地震', '台风', '泥石流', '火山喷发'], answer: '台风', explanation: '气象灾害是由大气活动异常引起的灾害，主要包括台风、暴雨洪涝、干旱、寒潮等。地震、火山喷发属于地质灾害，由地球内部运动引起；泥石流多由暴雨或山体破坏诱发，常归为地质灾害或次生灾害。四个选项中只有台风是典型的大气活动类气象灾害。所以选台风。' },
      { type: 'fill', question: '台风结构从内到外一般分为___、旋涡风雨区和___。', answer: '台风眼；外围大风区', explanation: '台风水平结构从中心向外分为三层：最中心是台风眼，天气晴朗、风小；其外是旋涡风雨区，风雨最猛烈，破坏力最大；最外层是外围大风区，风力逐渐增强。记住从内到外的顺序台风眼、旋涡风雨区、外围大风区，有助于理解台风的破坏特点。' },
      { type: 'fill', question: '按发生季节，华北地区春季常见的干旱称为___，长江中下游地区7、8月常见的干旱称为___。', answer: '春旱；伏旱', explanation: '我国地域辽阔，干旱类型多。华北平原春季气温回升快、降水少、蒸发强，易发春旱；长江中下游地区在盛夏7、8月受副热带高压控制，炎热少雨，形成伏旱。春旱和伏旱是教材中常讲的两种典型旱灾，理解其季节和成因有助于防灾减灾。' }
    ]
  });
})();
