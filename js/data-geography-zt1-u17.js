/* 地理 · 高三总复习 · 专题一 自然地理 · 第6章 自然环境的整体性与差异性 · 第2节 水平地域分异规律 */
(function () {
  var v = gzGetVolume('geography', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u17',
    name: '第2节 水平地域分异规律',
    chapter: '高三地理复习 · 专题一 自然地理 · 第6章 自然环境的整体性与差异性',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、地域分异与水平分异' },
      { type: 'paragraph', text: '地球表层的自然环境在结构上既有整体性，又在空间上表现出规律性的差异，这叫地域分异。水平地域分异指沿纬度方向或经度方向的变化，包括纬度地带性（由赤道到两极）和经度地带性（由沿海到内陆）。它们分别对应热量和水分条件的空间变化，是自然带呈带状分布的根本原因。' },
      { type: 'list', items: ['纬度地带性：沿纬度方向，以热量为基础', '经度地带性：沿经度方向，以水分基础', '二者叠加使自然带呈带状分布', '分异动力来自太阳辐射和海陆分布'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">水平地域分异：纬度与经度地带性</text><rect x="60" y="80" width="160" height="200" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="140" y="185" font-size="12" fill="#1f3a4d" text-anchor="middle" font-weight="bold">低纬</text><rect x="260" y="80" width="160" height="200" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="185" font-size="12" fill="#1f3a4d" text-anchor="middle" font-weight="bold">中纬</text><rect x="460" y="80" width="160" height="200" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="540" y="185" font-size="12" fill="#1f3a4d" text-anchor="middle" font-weight="bold">高纬</text><line x1="140" y1="60" x2="140" y2="300" stroke="#c1583b" stroke-width="2"/><text x="150" y="70" font-size="12" fill="#c1583b" font-weight="bold">纬度地带性（南北更替）</text><line x1="60" y1="190" x2="620" y2="190" stroke="#3d6fb5" stroke-width="2"/><text x="480" y="215" font-size="12" fill="#3d6fb5" font-weight="bold">经度地带性（东西更替）</text><text x="340" y="345" font-size="12" fill="#1f3a4d" text-anchor="middle">纬度地带性沿南北方向更替，经度地带性沿东西方向更替，二者交织。</text></svg>', caption: '图1　纬度地带性沿南北更替（热量），经度地带性沿东西更替（水分），构成水平分异。' },
      { type: 'keypoint', label: '重点·纬度地带性', text: '<strong>纬度地带性（由赤道到两极）：以热量为基础，自然带沿纬度方向（南北）更替，在低纬和高纬表现明显。</strong>典型如非洲：热带雨林带→热带草原带→热带荒漠带→亚热带常绿硬叶林带，随纬度升高有序更替。它是太阳辐射从赤道向两极递减的直接结果。' },
      { type: 'heading', text: '二、经度地带性（干湿度地带性）' },
      { type: 'paragraph', text: '经度地带性（由沿海到内陆）以水分条件为基础，自然带沿经度方向（东西）更替，在中纬度大陆表现最典型。从沿海向内陆，降水逐渐减少，景观依次为森林带→草原带→荒漠带。我国北方从东北到西北就呈现这种「经森林到荒漠」的更替，是海陆位置导致水分差异的结果。' },
      { type: 'list', items: ['基础：水分（距海远近、降水）', '方向：沿经度（东西）更替', '中纬度最典型：森林→草原→荒漠', '我国北方：东南森林、西北荒漠'] },
      { type: 'table', headers: ['距海远近', '降水', '自然带', '典型地区'], rows: [['近海', '多', '森林带', '我国东北', '湿润'], ['内陆过渡', '中等', '草原带', '内蒙古高原', '半干旱'], ['深居内陆', '少', '荒漠带', '塔里木盆地', '干旱']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">经度地带性（沿海→内陆）</text><rect x="40" y="90" width="190" height="170" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="135" y="160" font-size="14" fill="#1f3a4d" font-weight="bold">森林带</text><text x="135" y="190" font-size="12" fill="#1f3a4d" text-anchor="middle">近海·湿润</text><rect x="245" y="90" width="190" height="170" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="160" font-size="14" fill="#1f3a4d" font-weight="bold">草原带</text><text x="340" y="190" font-size="12" fill="#1f3a4d" text-anchor="middle">半干旱</text><rect x="450" y="90" width="190" height="170" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="545" y="160" font-size="14" fill="#1f3a4d" font-weight="bold">荒漠带</text><text x="545" y="190" font-size="12" fill="#1f3a4d" text-anchor="middle">深居内陆·干旱</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">从沿海向内陆，降水递减，自然带由森林经草原过渡到荒漠。</text></svg>', caption: '图2　经度地带性沿东西方向更替：近海森林、内陆草原、深处荒漠。' },
      { type: 'example', label: '例题·经度地带性', text: '题目：从我国东北平原向西到塔里木盆地，自然带大致如何变化？为什么？<br>解析：自东向西距海渐远、降水递减，自然带依次为温带落叶阔叶林（或针阔混交林）带→温带草原带→温带荒漠带，体现经度地带性（干湿度地带性）。其基础是水分条件由沿海向内陆递减，是海陆位置差异造成的。这类「东西更替、水分主导」的题即经度地带性。' },
      { type: 'heading', text: '三、两种水平分异的叠加' },
      { type: 'paragraph', text: '在现实地表，纬度地带性和经度地带性往往叠加。例如亚欧大陆：北部沿纬度呈苔原→针叶林更替，东部沿海沿经度呈森林→草原→荒漠更替，二者交织使自然带呈网格状。低纬和高纬热量差异主导、纬度地带性明显；中纬水分差异主导、经度地带性明显。' },
      { type: 'warn', label: '易错·两种分异的判别', text: '① 看更替方向：南北更替→纬度地带性（热量），东西更替→经度地带性（水分）；② 看表现地区：低纬高纬纬度地带性明显，中纬经度地带性明显；③ 不要把「纬度地带性」等同于「随高度变化」（那是垂直地带性）；④ 非洲南北对称分布是纬度地带性的典型。先判方向再判基础最稳妥。' },
      { type: 'tip', label: '提示·判读口诀', text: '遇到自然带更替题，先问「沿哪个方向变」：南北变看热量（纬度地带性），东西变看水分（经度地带性）。再结合纬度：低纬高纬多热量主导，中纬多水分主导。把「方向定类型、纬位定主导」记住，选择题秒判。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">纬度与经度地带性叠加（理想大陆）</text><rect x="60" y="90" width="240" height="170" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="180" y="130" font-size="13" fill="#1f3a4d" font-weight="bold">低纬：热量主导</text><text x="180" y="170" font-size="12" fill="#1f3a4d" text-anchor="middle">南北更替明显</text><rect x="380" y="90" width="240" height="170" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="500" y="130" font-size="13" fill="#1f3a4d" font-weight="bold">中纬：水分主导</text><text x="500" y="170" font-size="12" fill="#1f3a4d" text-anchor="middle">东西更替明显</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">低纬高纬热量差异大、维度地带性显；中纬水分差异大、经度地带性显。</text></svg>', caption: '图3　两种水平分异叠加：低纬高纬看纬度地带性，中纬看经度地带性。' },
      { type: 'heading', text: '四、非地带性分异' },
      { type: 'paragraph', text: '除地带性规律外，受地形、洋流、海陆分布、地质构造等局地因素影响，会出现非地带性（地方性）分异。如赤道附近的东非高原因海拔高呈草原景观（非地带性），沙漠中的绿洲由地下水或河流造就，南美巴塔哥尼亚荒漠因地形阻挡西风。非地带性是对地带性规律的局部偏离。' },
      { type: 'list', items: ['地形：东非高原（赤道附近草原）因海拔高', '洋流：暖流增湿、寒流致岸荒漠', '地下水：沙漠绿洲', '地形阻挡：巴塔哥尼亚荒漠（背风坡）'] },
      { type: 'example', label: '例题·非地带性', text: '题目：赤道附近的东非高原为何不是热带雨林而是热带草原？<br>解析：按纬度地带性，赤道附近应是热带雨林带，但东非高原海拔高、气温较低、降水减少，不足以维持雨林，而形成热带草原景观，这是地形（海拔）导致的非地带性分异。类似地，寒流沿岸虽处低纬却出现荒漠，也是非地带性。判读时要看是否有地形、洋流等局地因素干扰。' }
    ],
    exercises: [
      { type: 'choice', question: '由赤道到两极的地域分异规律，其基础是？', options: ['水分', '热量', '地形', '土壤'], answer: '热量', explanation: '由赤道到两极的纬度地带性以热量为基础，由于太阳辐射从赤道向两极递减，自然带沿纬度方向（南北）有序更替，在低纬和高纬表现最明显。水分虽也变化，但此分异的主导因素是热量。经度地带性才以水分基础。' },
      { type: 'choice', question: '中纬度大陆由沿海向内陆，自然带更替顺序是？', options: ['荒漠→草原→森林', '森林→草原→荒漠', '雨林→草原→荒漠', '苔原→草原→森林'], answer: '森林→草原→荒漠', explanation: '经度地带性（干湿度地带性）以水分基础，中纬度从沿海向内陆距海渐远、降水递减，自然带依次由森林带过渡到草原带再到荒漠带。我国北方自东南向西北即呈现这一更替，是海陆位置导致水分差异的结果。' },
      { type: 'choice', question: '下列属非地带性分异的是？', options: ['非洲南北对称的自然带', '赤道东非高原呈草原景观', '由赤道到两极的更替', '由沿海到内陆的更替'], answer: '赤道东非高原呈草原景观', explanation: '非地带性指受地形、洋流、地下水等局地因素影响而偏离地带性规律的现象。东非高原虽处赤道却因海拔高气温低、降水少而成热带草原，是地形导致的非地带性。其余三项都是经典的地带性分异规律。' },
      { type: 'fill', question: '纬度地带性沿___方向更替，以___为基础；经度地带性沿___方向更替，以水分基础。', answer: '纬度（南北）；热量；经度（东西）', explanation: '纬度地带性（由赤道到两极）沿纬度方向即南北方向更替，基础是热量；经度地带性（由沿海到内陆）沿经度方向即东西方向更替，基础是水分。判读时先看更替方向再定主导因素，二者交织构成水平地域分异。' },
      { type: 'fill', question: '纬度地带性在___纬度和___纬度表现明显，经度地带性在___纬度表现最典型。', answer: '低；高；中', explanation: '由于低纬和高纬地区热量差异随纬度变化显著，纬度地带性（南北更替）在高低纬表现明显；而中纬度地区海陆差异大、东西向水分差异显著，经度地带性（东西更替、森林到荒漠）最典型。亚欧大陆中部的草原荒漠带即是证明。' }
    ]
  });
})();
