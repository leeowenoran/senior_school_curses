/* 地理 · 高三总复习 · 专题一 自然地理 · 第5章 地表形态的塑造 · 第1节 内力作用与地貌 */
(function () {
  var v = gzGetVolume('geography', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u14',
    name: '第1节 内力作用与地貌',
    chapter: '高三地理复习 · 专题一 自然地理 · 第5章 地表形态的塑造',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、内力作用的能量与表现' },
      { type: 'paragraph', text: '内力作用能量来自地球内部放射性元素衰变产生的热能。主要表现形式有地壳运动、岩浆活动、变质作用和地震。内力作用使地表变得高低起伏，奠定地表形态的基本格局。按照地壳运动的方向，可分为水平运动（形成褶皱山、裂谷）和垂直运动（引起地壳抬升或下沉）。' },
      { type: 'list', items: ['能量来源：地球内部热能（放射性衰变）', '表现：地壳运动、岩浆活动、变质作用、地震', '水平运动：挤压形成褶皱山，张裂形成裂谷、海洋', '垂直运动：地壳抬升或下沉，引起海陆变迁'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">内力作用的主要表现</text><rect x="60" y="80" width="250" height="200" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="185" y="115" font-size="14" fill="#1f3a4d" font-weight="bold">地壳运动</text><text x="185" y="155" font-size="13" fill="#1f3a4d" text-anchor="middle">水平：褶皱山</text><text x="185" y="185" font-size="13" fill="#1f3a4d" text-anchor="middle">垂直：抬升下沉</text><rect x="370" y="80" width="250" height="200" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="495" y="115" font-size="14" fill="#1f3a4d" font-weight="bold">岩浆活动</text><text x="495" y="155" font-size="13" fill="#1f3a4d" text-anchor="middle">侵入：花岗岩</text><text x="495" y="185" font-size="13" fill="#1f3a4d" text-anchor="middle">喷出：玄武岩、火山</text><text x="340" y="320" font-size="13" fill="#1f3a4d" text-anchor="middle">变质作用、地震也是内力表现，共同塑造高低起伏的地表。</text></svg>', caption: '图1　内力作用以地壳运动和岩浆活动为主，使地表趋于高低不平。' },
      { type: 'keypoint', label: '重点·板块构造学说', text: '<strong>全球岩石圈分为六大板块，板块内部稳定、交界地带活跃。</strong>板块相向运动（碰撞）形成高大山脉、海沟；相背运动（张裂）形成裂谷、海洋。两大边界：生长边界（张裂，如大西洋、东非裂谷）和消亡边界（挤压，如喜马拉雅、环太平洋带）。记「生长张裂、消亡挤压」。' },
      { type: 'heading', text: '二、板块运动与地貌' },
      { type: 'paragraph', text: '六大板块为亚欧、非洲、印度洋、太平洋、美洲、南极洲板块。板块碰撞处（消亡边界）：大陆与大陆碰撞形成巨大褶皱山系（喜马拉雅山、阿尔卑斯山），大洋与大陆碰撞形成海岸山脉、海沟、岛弧。板块张裂处（生长边界）：形成裂谷（东非大裂谷）或海洋（大西洋、红海）。' },
      { type: 'list', items: ['六大板块：亚欧、非洲、印度洋、太平洋、美洲、南极洲', '消亡边界（挤压）：海沟、岛弧、褶皱山', '生长边界（张裂）：裂谷、海洋、海岭', '环太平洋带、地中海—喜马拉雅带为两大地震火山带'] },
      { type: 'table', headers: ['边界类型', '运动方向', '典型地貌', '实例'], rows: [['生长边界', '张裂', '裂谷、海洋', '东非大裂谷、大西洋'], ['消亡边界（陆陆）', '碰撞', '褶皱山系', '喜马拉雅山'], ['消亡边界（洋陆）', '俯冲', '海沟、岛弧、海岸山', '安第斯山、马里亚纳海沟']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">板块边界与地貌</text><rect x="40" y="120" width="280" height="120" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="180" y="160" font-size="13" fill="#1f3a4d" font-weight="bold">生长边界</text><text x="180" y="195" font-size="12" fill="#1f3a4d" text-anchor="middle">张裂→裂谷、海洋</text><rect x="360" y="120" width="280" height="120" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="500" y="160" font-size="13" fill="#1f3a4d" font-weight="bold">消亡边界</text><text x="500" y="195" font-size="12" fill="#1f3a4d" text-anchor="middle">挤压→山、海沟</text><path d="M320 180 L360 180" stroke="#c1583b" stroke-width="3" marker-end="url(#b)"/><path d="M360 180 L320 180" stroke="#c1583b" stroke-width="3"/><text x="340" y="300" font-size="12" fill="#1f3a4d" text-anchor="middle">生长边界板块分离，消亡边界板块相撞，地貌截然不同。</text></svg>', caption: '图2　板块生长边界张裂成裂谷海洋，消亡边界挤压成山脉海沟。' },
      { type: 'example', label: '例题·板块判断', text: '题目：红海面积不断扩大的原因是什么？<br>解析：红海位于非洲板块与印度洋板块的生长边界（张裂带），两大板块持续分离，地壳断裂下陷并被海水侵入，使红海面积逐渐扩大，未来可能发展成新的大洋。类似地，东非大裂谷也是张裂产物。判断某海域扩大还是缩小，关键看它处于生长边界（扩大）还是消亡边界（缩小）。' },
      { type: 'heading', text: '三、地质构造与地貌' },
      { type: 'paragraph', text: '地壳运动使岩层发生变形变位，形成地质构造，主要有褶皱和断层。褶皱分背斜（岩层上拱，早期成山、易被侵蚀成谷）和向斜（岩层下凹，早期成谷、易储水成山）。断层是岩层断裂并错动，上升岩块成地垒（如华山、庐山），下降岩块成地堑（如汾河谷地、东非裂谷）。' },
      { type: 'warn', label: '易错·背斜向斜判读', text: '① 背斜岩层向上拱起、中心老两翼新；向斜向下弯曲、中心新两翼老；② 「背斜成山、向斜成谷」是初期；长期受侵蚀后可能「背斜成谷、向斜成山」（地形倒置），因为背斜顶部受张力易被侵蚀；③ 找油气一般在背斜，找地下水在向斜，修隧道宜选背斜（结构稳定、不易积水）。这些是常考点。' },
      { type: 'tip', label: '提示·构造实践意义', text: '背斜是良好的储油储气构造（密度小的油气聚于顶部），向斜是储水构造；隧道、水库选址避开断层（易渗漏、诱发地震），宜选背斜（岩层拱起、稳固且排水好）。把「背斜油、向斜水、隧背斜、避断层」连成口诀，工程区位题就不慌。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">褶皱与断层示意</text><path d="M120 230 Q200 150 280 230" fill="none" stroke="#2a6fa8" stroke-width="3"/><text x="200" y="135" font-size="13" fill="#2a6fa8" font-weight="bold">背斜（拱起）</text><path d="M400 230 Q480 310 560 230" fill="none" stroke="#c1583b" stroke-width="3"/><text x="480" y="320" font-size="13" fill="#c1583b" font-weight="bold">向斜（下凹）</text><line x1="330" y1="90" x2="330" y2="270" stroke="#1f3a4d" stroke-width="3"/><text x="345" y="180" font-size="13" fill="#1f3a4d" font-weight="bold">断层（错动）</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">背斜拱起、向斜下凹；断层处岩块断裂错位，形成地垒地堑。</text></svg>', caption: '图3　褶皱（背斜拱、向斜凹）与断层是地壳运动留下的地质构造。' },
      { type: 'heading', text: '四、火山、地震与地貌' },
      { type: 'paragraph', text: '岩浆活动喷出地表形成火山地貌（火山锥、熔岩高原），如富士山、五大连池。地震多发生在板块交界带，常引发地形突变和海啸。内力作用总体上「创建」地表高低起伏的大格局，外力作用再对其进行雕塑。理解内力是认识地表形态成因的第一步。' },
      { type: 'list', items: ['火山喷发：形成火山锥、熔岩台地', '地震：多位于板块交界，常伴地形剧变', '内力定格局：造山、造海、成高原', '与外力共同作用塑造今日地貌'] },
      { type: 'example', label: '例题·山地成因', text: '题目：喜马拉雅山脉是由哪两个板块碰撞形成的？<br>解析：喜马拉雅山位于亚欧板块与印度洋板块的消亡边界，印度洋板块向北俯冲、与亚欧板块强烈碰撞挤压，使岩层褶皱抬升形成巨大山系，且至今仍在缓慢升高。这类「高大褶皱山系」几乎都位于板块碰撞的消亡边界，如阿尔卑斯山也是板块碰撞产物。' }
    ],
    exercises: [
      { type: 'choice', question: '板块生长边界通常形成的地貌是？', options: ['海沟', '褶皱山', '裂谷或海洋', '岛弧'], answer: '裂谷或海洋', explanation: '生长边界是板块张裂分离的地带，地壳断裂下陷形成裂谷（如东非大裂谷），继续扩张被海水侵入形成海洋（如大西洋、红海）。海沟、岛弧、褶皱山系都出现在板块碰撞的消亡边界，而非生长边界。' },
      { type: 'choice', question: '背斜构造一般适宜？', options: ['储地下水', '修水库大坝', '储油储气', '开垦梯田'], answer: '储油储气', explanation: '背斜岩层向上拱起，密度较小的石油和天然气易在顶部聚集，是良好储油储气构造；向斜岩层向下凹，是储水构造。隧道、水库宜选背斜以避开地下水、结构稳定，工程要避开断层。因此背斜最典型用途是储油储气。' },
      { type: 'choice', question: '下列地貌由板块碰撞（消亡边界）形成的是？', options: ['东非大裂谷', '大西洋', '喜马拉雅山脉', '红海'], answer: '喜马拉雅山脉', explanation: '喜马拉雅山是亚欧板块与印度洋板块碰撞挤压形成的褶皱山系，属消亡边界地貌。东非大裂谷、大西洋、红海都位于生长边界（张裂带），前者是裂谷、后两者是海洋。判断地貌成因须先识别边界类型。' },
      { type: 'fill', question: '内力作用的能量主要来自地球内部的___能，主要表现有地壳运动、岩浆活动、变质作用和___。', answer: '热；地震', explanation: '内力作用的能量来源于地球内部放射性元素衰变产生的热能。其表现形式包括地壳运动、岩浆活动、变质作用和地震。内力作用使地表变得高低起伏，奠定地表形态的基本格局，再与外力的侵蚀堆积共同作用塑造地形。' },
      { type: 'fill', question: '长期受侵蚀后，背斜顶部因受张力易被侵蚀反而形成___，向斜槽部坚实反而形成___，称为地形倒置。', answer: '谷地；山岭', explanation: '背斜初期成山，但其顶部受张力、岩石破碎易被侵蚀，久之成谷；向斜初期成谷，但槽部受挤压、岩性坚实不易侵蚀，反而成山。这种「背斜成谷、向斜成山」的现象叫地形倒置。所以判读构造不能只看地形，要看岩层新老关系。' }
    ]
  });
})();
