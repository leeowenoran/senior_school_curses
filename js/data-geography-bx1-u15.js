/* 地理 · 必修 第一册 · 第6章 · 课时：第2节 地质灾害 */
(function () {
  var v = gzGetVolume('geography', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u15',
    name: '第2节 地质灾害',
    chapter: '必修 第一册 · 第6章 自然灾害',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是地质灾害' },
      { type: 'paragraph', text: '地质灾害是由地球内部运动或岩石圈物质变化引起的灾害，和气象灾害不同，它的根子在地下。我国位于亚欧板块、印度洋板块和太平洋板块交界处，地壳运动活跃，地质灾害种类多、分布广。最常见的地质灾害有地震、滑坡、泥石流和崩塌。' },
      { type: 'list', items: ['地震：岩层断裂错动释放能量，地面剧烈震动', '滑坡：斜坡上的岩土体沿滑动面整体下滑', '泥石流：暴雨带动泥沙石块形成的洪流', '崩塌：陡坡岩土体突然坠落'] },
      { type: 'heading', text: '二、地震——大地的剧烈颤抖' },
      { type: 'paragraph', text: '地震多发生在板块交界带和断层附近。地下岩层受到长期挤压，能量越积越多，一旦超过岩石承受极限，就会突然断裂错动，把能量以地震波的形式传向四面八方，引起地面震动。世界上绝大多数强震分布在环太平洋和地中海—喜马拉雅两大地震带。' },
      { type: 'keypoint', label: '重点·地震的几个术语', text: '<strong>记住四个词：</strong>① <strong>震源</strong>，地球内部发生破裂的起点；② <strong>震中</strong>，震源正上方的地面，受灾往往最重；③ <strong>震级</strong>，表示释放能量大小，每差一级能量约差30倍；④ <strong>烈度</strong>，地面受破坏的程度，离震中越近烈度越大。震级看能量，烈度看破坏，两者不是一回事。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">地震构造示意</text><rect x="40" y="120" width="600" height="200" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="320" font-size="13" fill="#1f3a4d" text-anchor="middle">地表（地面）</text><circle cx="340" cy="250" r="14" fill="#3389c4" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="288" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">震源</text><line x1="340" y1="236" x2="340" y2="120" stroke="#2a6fa8" stroke-width="2" stroke-dasharray="5,4"/><text x="368" y="115" font-size="13" fill="#1f3a4d" font-weight="bold">震中</text><circle cx="340" cy="250" r="40" fill="none" stroke="#2a6fa8" stroke-width="1.5"/><circle cx="340" cy="250" r="70" fill="none" stroke="#2a6fa8" stroke-width="1.5"/><circle cx="340" cy="250" r="100" fill="none" stroke="#2a6fa8" stroke-width="1.5"/><text x="455" y="180" font-size="12" fill="#1f3a4d" text-anchor="middle">地震波向四周传播</text><text x="340" y="345" font-size="12" fill="#1f3a4d" text-anchor="middle">震源越浅、离震中越近，地面破坏越严重。</text></svg>', caption: '图1　震源在地下，震中在地面正上方，地震波从震源向外传播。' },
      { type: 'list', items: ['建筑物倒塌，人员伤亡', '引发火灾、海啸、滑坡等次生灾害', '破坏交通、通信、供水等生命线工程'] },
      { type: 'heading', text: '三、滑坡——斜坡上的整体下滑' },
      { type: 'paragraph', text: '滑坡是斜坡上的岩土体在重力作用下，沿着一个滑动面整体向下滑动的现象。多见于山地丘陵、河谷两岸。坡陡、岩层破碎、遇暴雨或人类开挖坡脚，都容易诱发滑坡。滑坡会掩埋村庄道路，阻断河流形成堰塞湖。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">滑坡示意</text><polygon points="60,260 300,120 340,120 340,260" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="180" y="200" font-size="13" fill="#1f3a4d" text-anchor="middle">稳定斜坡</text><polygon points="300,120 340,120 360,260 300,260" fill="#d8a05a" stroke="#2a6fa8" stroke-width="2"/><text x="320" y="185" font-size="12" fill="#1f3a4d" text-anchor="middle">滑动面</text><rect x="360" y="200" width="260" height="60" rx="8" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="490" y="235" font-size="13" fill="#1f3a4d" text-anchor="middle">下滑的岩土体</text><polygon points="490,200 470,180 510,180" fill="#3389c4"/><text x="340" y="300" font-size="12" fill="#1f3a4d" text-anchor="middle">岩土体沿滑动面整体下滑，掩埋坡脚房屋道路。</text></svg>', caption: '图2　岩土体沿滑动面整体下滑，是滑坡的典型特征。' },
      { type: 'warn', label: '易错·滑坡与泥石流', text: '<strong>滑坡和泥石流不同：</strong>① 滑坡是<strong>固体岩土体</strong>沿滑动面整体下滑，物质以土石为主，水较少；② 泥石流是<strong>水、泥沙、石块混合</strong>的洪流，必须有大量水流参与，像黏稠的泥浆奔涌。简单记：滑坡「土石滑」，泥石流「泥水冲」。两者都多发于山区、雨季，但物质和形态差别明显。' },
      { type: 'heading', text: '四、泥石流——山沟里的泥水洪流' },
      { type: 'paragraph', text: '泥石流是山区沟谷中，由暴雨或冰雪融水带动大量泥沙、石块形成的特殊洪流。它来势猛、速度快、破坏力强，能冲毁房屋、道路、桥梁，淤埋农田。泥石流多发于地形陡峻、松散物质多、降水集中的山区，我国西南山区尤为常见。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">泥石流的形成</text><polygon points="60,260 200,80 300,80 300,260" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="180" y="180" font-size="13" fill="#1f3a4d" text-anchor="middle">陡峻山坡</text><text x="180" y="205" font-size="12" fill="#1f3a4d" text-anchor="middle">松散土石</text><rect x="300" y="55" width="120" height="40" rx="8" fill="#9fd0e8" stroke="#2a6fa8" stroke-width="2"/><text x="360" y="80" font-size="12" fill="#1f3a4d" text-anchor="middle">暴雨</text><path d="M 360 100 Q 450 160 560 230" fill="none" stroke="#3389c4" stroke-width="14" stroke-linecap="round"/><text x="470" y="155" font-size="12" fill="#1f3a4d" text-anchor="middle">泥水洪流</text><rect x="540" y="240" width="110" height="30" rx="6" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="595" y="260" font-size="12" fill="#1f3a4d" text-anchor="middle">冲毁区</text><text x="340" y="300" font-size="12" fill="#1f3a4d" text-anchor="middle">暴雨 + 陡坡 + 松散物质，三者齐备易发泥石流。</text></svg>', caption: '图3　暴雨带动陡坡松散土石，形成泥石流冲向下游。' },
      { type: 'tip', label: '提示·泥石流逃生', text: '遇到泥石流，记住<strong>向两侧高处跑，不要顺沟谷往下跑</strong>。泥石流沿沟谷向下奔流，人应朝垂直于流动方向的山坡高处撤离，避开河道和堆积区。下雨时尽量不去沟谷游玩，发现沟中水变浑、有轰鸣声要立刻转移。' },
      { type: 'keypoint', label: '重点·我国地质灾害分布', text: '<strong>我国地质灾害集中区：</strong>① 西南地区（横断山区、云贵高原），板块挤压、地形陡、降水多，地震滑坡泥石流都很频繁；② 台湾、福建、华南沿海，位于环太平洋地震带，地震多；③ 黄土高原沟壑区，滑坡崩塌常见。总体规律是「地形越陡、地壳越活、降水越多」的地方越易发。' },
      { type: 'list', items: ['工程措施：护坡、排水、加固斜坡，减少下滑条件', '监测预报：用仪器监测位移和雨量，及时预警', '避让搬迁：危险区居民搬到安全地带', '保护植被：植树种草，减少水土流失'] },
      { type: 'example', label: '例题·判断地质灾害', text: '题目：下列灾害中，属于地质灾害的是？<br>A. 台风　B. 干旱　C. 泥石流　D. 寒潮<br>解析：地质灾害由地球内部运动或岩石圈变化引起，泥石流是山区暴雨带动土石形成的洪流，属于地质灾害；台风、干旱、寒潮都由大气活动异常引起，属于气象灾害。所以四个选项中只有泥石流是地质灾害，应选C。' },
      { type: 'table', headers: ['灾害类型', '主要物质', '主要触发因素', '常见地区'], rows: [['地震', '岩层断裂错动', '板块运动、断层活动', '西南、台湾等板块交界带'], ['滑坡', '岩土体沿滑动面下滑', '暴雨、坡脚开挖', '山地丘陵、河谷两岸'], ['泥石流', '泥沙石块混合洪流', '暴雨、冰雪融水', '西南山区、黄土高原沟谷']] },
      { type: 'heading', text: '五、崩塌——陡崖上的突然坠落' },
      { type: 'paragraph', text: '崩塌是陡坡上的岩土体在重力作用下突然坠落的现象，比滑坡更突然、范围更小，但同样危险。它常发生在陡峭崖壁、采矿边坡或修路开挖的陡坎。防治崩塌主要靠清除危岩、设置拦石网和挡墙。' }
    ],
    exercises: [
      { type: 'choice', question: '关于地震，下列说法正确的是？', options: ['震中是地球内部发生破裂的起点', '震级表示释放能量的大小，烈度表示地面破坏程度', '离震中越远，烈度一定越大', '地震只会发生在陆地上'], answer: '震级表示释放能量的大小，烈度表示地面破坏程度', explanation: '地震的破裂起点叫震源，震源正上方地面才叫震中，所以A错；震级表示一次地震释放能量的大小，烈度表示地面受破坏的程度，离震中越近烈度通常越大，B正确；离震中越远烈度一般越小，C错；海底也会发生地震并可能引发海啸，D错。因此正确说法是震级表能量、烈度表破坏。' },
      { type: 'choice', question: '下列灾害中，主要由大气活动引起、不属于地质灾害的是？', options: ['地震', '泥石流', '滑坡', '台风'], answer: '台风', explanation: '地质灾害由地球内部运动或岩石圈变化引起，地震、滑坡、泥石流都属于地质灾害；台风是热带洋面上的强烈热带气旋，由大气活动异常引起，属于气象灾害，不是地质灾害。题目要求选不属于地质灾害的一项，所以应选台风。区分关键在于看灾害的根源在地下还是天上。' },
      { type: 'choice', question: '泥石流和滑坡的主要区别是？', options: ['滑坡必须有大量水流参与，泥石流是土石下滑', '泥石流是水沙石混合的洪流，滑坡是土石沿面下滑', '两者完全一样', '滑坡只发生在冬季'], answer: '泥石流是水沙石混合的洪流，滑坡是土石沿面下滑', explanation: '滑坡是斜坡岩土体沿滑动面整体下滑，物质以土石为主，水较少；泥石流是暴雨或融水带动泥沙石块形成的特殊洪流，必须有大量水流参与，像黏稠泥水奔涌。所以区别在物质和形态：滑坡是土石滑，泥石流是泥水冲。其余选项表述正好相反或明显错误。' },
      { type: 'fill', question: '地震中，地球内部发生破裂的起点叫___，它正上方的地面叫___。', answer: '震源；震中', explanation: '地震是地下岩层突然断裂错动引起的，破裂开始的那个点叫震源；震源正上方的地面位置叫震中，通常震中附近地面破坏最严重、烈度最大。记住震源在地下、震中在地面，两者上下相对，是理解地震术语的基础。' },
      { type: 'fill', question: '我国地质灾害频繁的西南地区包括横断山区和___，这里位于板块交界处，地壳活跃。', answer: '云贵高原', explanation: '我国西南的横断山区、云贵高原等地地形陡峻、地壳运动活跃、降水丰沛，是地震、滑坡、泥石流的多发区，这与印度洋板块和亚欧板块强烈挤压有关。台湾及华南沿海则位于环太平洋地震带。记住西南和台湾两大集中区，有助于答题时判断灾害分布。' }
    ]
  });
})();
