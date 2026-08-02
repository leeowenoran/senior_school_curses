/* 地理 · 必修 第一册 · 第6章 · 课时：第4节 地理信息技术在防灾减灾中的应用 */
(function () {
  var v = gzGetVolume('geography', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u17',
    name: '第4节 地理信息技术在防灾减灾中的应用',
    chapter: '必修 第一册 · 第6章 自然灾害',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是地理信息技术' },
      { type: 'paragraph', text: '地理信息技术是用计算机和卫星等工具，采集、管理、分析地理空间数据的技术。在防灾减灾中，它就像给人类装上了千里眼和聪明脑。最常用的三大技术是遥感、全球卫星导航系统和地理信息系统，合称3S技术。' },
      { type: 'list', items: ['遥感（RS）：从卫星或飞机上拍照，远距离感知地面', '全球卫星导航系统（GNSS/GPS）：给地面目标精确定位', '地理信息系统（GIS）：把数据放进电脑，叠加分析做决策'] },
      { type: 'heading', text: '二、遥感（RS）——从天上拍照片' },
      { type: 'paragraph', text: '遥感是借助飞机、卫星上的传感器，接收地面物体反射或辐射的电磁波，再处理成影像的技术。它不需要人到现场，就能大范围、快速地获取地面信息。灾害发生时，遥感是获取第一手资料最快的手段。' },
      { type: 'keypoint', label: '重点·遥感在防灾中的作用', text: '<strong>遥感在防灾减灾中的作用：</strong>① 监测台风位置和云系变化；② 判读洪涝淹没范围、滑坡体和泥石流沟谷；③ 评估地震、火灾的受灾面积；④ 长期跟踪灾区恢复情况。遥感最大的优势是<strong>快、广、不用到现场</strong>，适合灾害应急。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">遥感（RS）工作过程</text><circle cx="340" cy="60" r="22" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="65" font-size="12" fill="#1f3a4d" text-anchor="middle" font-weight="bold">卫星</text><line x1="340" y1="82" x2="340" y2="240" stroke="#3389c4" stroke-width="3" stroke-dasharray="6,4"/><text x="378" y="162" font-size="12" fill="#1f3a4d" text-anchor="middle">电磁波</text><rect x="120" y="240" width="440" height="50" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="270" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">地面目标（受灾区域）</text><text x="340" y="310" font-size="12" fill="#1f3a4d" text-anchor="middle">传感器接收反射或辐射信号，生成影像供判读。</text></svg>', caption: '图1　遥感通过卫星接收地面电磁波，生成受灾区域影像。' },
      { type: 'heading', text: '三、全球卫星导航系统（GNSS）——精准定位' },
      { type: 'paragraph', text: '全球卫星导航系统由多颗卫星组成，接收机同时收到几颗卫星的信号，通过测距交汇就能算出自己的经纬度、高度和速度。我国的北斗、美国的GPS、欧洲的伽利略都属于这类系统。在灾害中，它能给救援人员和受灾点精准定位。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">卫星导航定位（GNSS）</text><circle cx="160" cy="70" r="18" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="160" y="75" font-size="11" fill="#1f3a4d" text-anchor="middle">卫星</text><circle cx="340" cy="55" r="18" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="60" font-size="11" fill="#1f3a4d" text-anchor="middle">卫星</text><circle cx="520" cy="70" r="18" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="520" y="75" font-size="11" fill="#1f3a4d" text-anchor="middle">卫星</text><circle cx="340" cy="230" r="16" fill="#3389c4" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="235" font-size="11" fill="#1f3a4d" text-anchor="middle">接收机</text><line x1="160" y1="88" x2="340" y2="214" stroke="#2a6fa8" stroke-width="1.5"/><line x1="340" y1="73" x2="340" y2="214" stroke="#2a6fa8" stroke-width="1.5"/><line x1="520" y1="88" x2="340" y2="214" stroke="#2a6fa8" stroke-width="1.5"/><text x="340" y="280" font-size="12" fill="#1f3a4d" text-anchor="middle">多颗卫星测距交汇，确定地面点的精确位置。</text></svg>', caption: '图2　接收机接收多颗卫星信号，交汇算出精确位置。' },
      { type: 'warn', label: '易错·RS与GNSS', text: '<strong>遥感（RS）和定位（GNSS）别混淆：</strong>① <strong>RS</strong>是「看」，从高处拍下大面积影像，回答「哪里受灾、范围多大」；② <strong>GNSS</strong>是「定」，算出某个点的精确坐标，回答「这个点在哪、怎么过去」。一个管宏观观测，一个管微观定位，常常配合使用。' },
      { type: 'keypoint', label: '重点·卫星导航的作用', text: '<strong>卫星导航在防灾减灾中的作用：</strong>① 给救灾车辆、船只和飞机导航，选最快路线；② 给被困人员、救援队精确定位，方便搜救；③ 监测山体、大坝的微小位移，提前预警滑坡崩塌。没有精准定位，灾区里的救援会像摸黑走路。' },
      { type: 'heading', text: '四、地理信息系统（GIS）——分析与决策' },
      { type: 'paragraph', text: '地理信息系统是一个存地图、管数据的电脑系统。它把地形、河流、人口、道路等信息做成一层层电子图层，需要时叠在一起分析。比如把降水图层和居民点图层叠加，就能看出哪些村庄下雨容易受灾。GIS擅长把零散数据变成有用的判断。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">地理信息系统（GIS）图层叠加</text><rect x="60" y="70" width="150" height="90" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="135" y="118" font-size="13" fill="#1f3a4d" text-anchor="middle">地形图层</text><rect x="265" y="70" width="150" height="90" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="118" font-size="13" fill="#1f3a4d" text-anchor="middle">降水图层</text><rect x="470" y="70" width="150" height="90" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="545" y="118" font-size="13" fill="#1f3a4d" text-anchor="middle">居民点层</text><rect x="200" y="195" width="280" height="90" rx="10" fill="#e3f0fa" stroke="#3389c4" stroke-width="2"/><text x="340" y="225" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">叠加分析</text><text x="340" y="252" font-size="12" fill="#1f3a4d" text-anchor="middle">得出灾害风险区</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">把多类数据叠在一起，GIS帮我们判断哪里最危险。</text></svg>', caption: '图3　GIS把地形、降水、居民点等图层叠加，分析风险区。' },
      { type: 'list', items: ['灾害风险区划：标出高风险区，指导规划和搬迁', '应急路径规划：为救援车找最快最安全的路线', '损失评估：快速统计受灾面积和人口，辅助决策'] },
      { type: 'tip', label: '提示·3S如何配合', text: '三种技术<strong>各管一段、配合使用</strong>：遥感负责「看灾情」，卫星导航负责「定位置」，地理信息系统负责「做分析」。例如台风来了，遥感监测台风走向，卫星导航引导船只回港，GIS分析哪些沿海城市需要撤离，三者合力让防灾更精准。' },
      { type: 'example', label: '例题·判断技术', text: '题目：想要快速获取某次地震后的受灾范围影像，最适合采用的技术是？<br>A. 遥感（RS）　B. 全球卫星导航（GNSS）　C. 地理信息系统（GIS）　D. 普通电话<br>解析：遥感能从卫星或飞机上远距离获取地面影像，不需人员到场，最适合快速掌握大范围受灾情况；卫星导航用于定位，GIS用于分析，普通电话不能获取影像。所以获取受灾范围影像最适合用遥感，选A。' },
      { type: 'table', headers: ['技术', '核心功能', '防灾减灾中的应用'], rows: [['遥感 RS', '远距离获取地面影像', '监测台风、洪涝、滑坡范围'], ['卫星导航 GNSS', '精确定位与导航', '救援定位、车辆导航、位移监测'], ['地理信息系统 GIS', '数据叠加与分析', '风险区划、路径规划、损失评估']] },
      { type: 'heading', text: '五、三大技术的综合应用' },
      { type: 'paragraph', text: '实际防灾中，三大技术常融为一体。例如应对台风：气象卫星和遥感跟踪台风路径与云系，北斗等导航系统引导渔船回港、为救援队定位，GIS把风雨、地形、人口图层叠加，划出需要撤离的区域并规划转移路线。技术越协同，保护的人就越多。' }
    ],
    exercises: [
      { type: 'choice', question: '能快速获取大范围受灾影像、不需人员到场的技术是？', options: ['遥感（RS）', '全球卫星导航（GNSS）', '地理信息系统（GIS）', '普通电话'], answer: '遥感（RS）', explanation: '遥感借助飞机或卫星上的传感器，接收地面电磁波并生成影像，能在不派人进入灾区的情况下，快速、大范围获取受灾信息，最适合应急监测；卫星导航负责定位，GIS负责分析，普通电话不能获取影像。所以快速获取受灾影像靠遥感。' },
      { type: 'choice', question: '给救援车辆精确导航、为被困人员定位，主要依靠？', options: ['遥感（RS）', '全球卫星导航（GNSS）', '地理信息系统（GIS）', '气象雷达'], answer: '全球卫星导航（GNSS）', explanation: '全球卫星导航系统由多颗卫星组成，接收机通过测距交汇算出精确经纬度，实现定位与导航，常用于救灾车辆引导、被困人员定位、位移监测；遥感负责观测，GIS负责分析，气象雷达主要用于监测降水。所以导航和定位主要靠卫星导航。' },
      { type: 'choice', question: '把地形、降水、居民点等图层叠加，判断哪里最危险，主要用到？', options: ['遥感（RS）', '全球卫星导航（GNSS）', '地理信息系统（GIS）', '人造卫星拍照'], answer: '地理信息系统（GIS）', explanation: '地理信息系统把各类地理数据做成电子图层，叠加分析后得出结论，例如把降水图层与居民点图层叠加判断易受淹村庄；遥感负责获取影像，卫星导航负责定位，拍照只是数据来源之一。所以图层叠加分析主要用GIS。' },
      { type: 'fill', question: '地理信息技术三大支柱合称3S，分别是遥感、___和___。', answer: '全球卫星导航系统；地理信息系统', explanation: '地理信息技术三大支柱是遥感RS、全球卫星导航系统GNSS（或GPS）、地理信息系统GIS，合称3S技术。遥感负责远距离获取影像，卫星导航负责精准定位，GIS负责数据叠加与分析。三者各有所长又相互配合，共同支撑现代防灾减灾。' },
      { type: 'fill', question: '防灾减灾中，遥感负责___，卫星导航负责___，GIS负责做分析。', answer: '看灾情；定位置', explanation: '三种技术分工明确：遥感像眼睛，从高处拍摄大范围影像，负责看灾情；卫星导航像指南针，算出精确坐标，负责定位置、做导航；GIS像大脑，把各类图层叠加分析，负责做判断和决策。记住看、定、析三字，就能分清三者角色。' }
    ]
  });
})();
