/* 化学 · 高三复习 · 元素化合物 · 专题九 · 课时：特征颜色性质与物质推断 */
(function () {
  var v = gzGetVolume('chemistry', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u20',
    name: '特征颜色性质与物质推断',
    chapter: '元素化合物 · 专题九 常见物质的转化与推断',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、本课是元素化合物的侦探课' },
      { type: 'paragraph', text: '前面八个专题我们认识了钠、铝、铁、铜、氯、硫、氮、硅各自的性质。高考很喜欢把这些物质混在一起考，给你一堆实验现象、颜色、转化关系，让你猜出每种物质是什么。这种题叫物质推断题。本节课把前面所有专题的特征颜色和特征性质汇总起来，教你怎么找线索、怎么推理。' },
      { type: 'list', items: ['第一步 找突破口：从最特别、最不像别的东西的现象入手，比如特殊颜色、特殊气味、特殊反应', '第二步 确定一种物质：用突破口先认出一个物质，它是整道题的支点', '第三步 顺藤摸瓜：以这个物质为中心，利用物质之间的转化关系，把其他物质一个个推出来'] },
      { type: 'heading', text: '二、常见物质特征颜色（推断第一线索）' },
      { type: 'paragraph', text: '颜色是肉眼能直接看到的最明显线索。下面这张表把推断题里最常考的特征颜色都列出来，建议背熟。看到某种颜色，脑子里要立刻跳出对应的物质。' },
      { type: 'table', headers: ['颜色', '代表物质', '记忆要点'], rows: [
        ['淡黄色', 'Na₂O₂、S、AgBr', '过氧化钠、硫单质、溴化银'],
        ['红棕色', 'Fe₂O₃、NO₂', '氧化铁粉末、二氧化氮气体'],
        ['红褐色', 'Fe(OH)₃', '氢氧化铁沉淀'],
        ['蓝色', 'Cu(OH)₂、CuSO₄·5H₂O', '氢氧化铜、胆矾（蓝矾）'],
        ['黑色', 'FeO、Fe₃O₄、CuO、MnO₂', '铁的氧化物、氧化铜、二氧化锰'],
        ['黄绿色', 'Cl₂', '氯气单质'],
        ['紫红色', 'Cu', '金属铜'],
        ['白色→灰绿→红褐', 'Fe(OH)₂（被空气氧化）', '是 Fe(OH)₂ 氧化的特征现象']
      ] },
      { type: 'paragraph', text: '这里要单独强调 Fe(OH)₂ 的颜色变化。它是白色沉淀，但特别怕空气里的氧气，会慢慢被氧化：先是白色，过一会儿变成灰绿色的中间产物，最后完全变成红褐色的 Fe(OH)₃。这一串颜色变化本身就是一道推断题的突破口。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 460" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="460" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">常见物质特征颜色速查</text><rect x="30" y="56" width="620" height="44" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><rect x="42" y="63" width="30" height="30" fill="#f3e08a"/><text x="85" y="83" font-size="14" font-weight="bold" fill="#b5651d">淡黄色</text><text x="220" y="83" font-size="13" fill="#4a3724">Na₂O₂、S、AgBr</text><rect x="30" y="104" width="620" height="44" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><rect x="42" y="111" width="30" height="30" fill="#8c3a26"/><text x="85" y="131" font-size="14" font-weight="bold" fill="#b5651d">红棕色</text><text x="220" y="131" font-size="13" fill="#4a3724">Fe₂O₃、NO₂</text><rect x="30" y="152" width="620" height="44" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><rect x="42" y="159" width="30" height="30" fill="#7a3a1c"/><text x="85" y="179" font-size="14" font-weight="bold" fill="#b5651d">红褐色</text><text x="220" y="179" font-size="13" fill="#4a3724">Fe(OH)₃</text><rect x="30" y="200" width="620" height="44" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><rect x="42" y="207" width="30" height="30" fill="#3a6ea5"/><text x="85" y="227" font-size="14" font-weight="bold" fill="#b5651d">蓝色</text><text x="220" y="227" font-size="13" fill="#4a3724">Cu(OH)₂、CuSO₄·5H₂O</text><rect x="30" y="248" width="620" height="44" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><rect x="42" y="255" width="30" height="30" fill="#2a2a2a"/><text x="85" y="275" font-size="14" font-weight="bold" fill="#b5651d">黑色</text><text x="220" y="275" font-size="13" fill="#4a3724">FeO、Fe₃O₄、CuO、MnO₂</text><rect x="30" y="296" width="620" height="44" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><rect x="42" y="303" width="30" height="30" fill="#8fbf3f"/><text x="85" y="323" font-size="14" font-weight="bold" fill="#b5651d">黄绿色</text><text x="220" y="323" font-size="13" fill="#4a3724">Cl₂</text><rect x="30" y="344" width="620" height="44" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><rect x="42" y="351" width="30" height="30" fill="#a83255"/><text x="85" y="371" font-size="14" font-weight="bold" fill="#b5651d">紫红色</text><text x="220" y="371" font-size="13" fill="#4a3724">Cu</text><rect x="30" y="392" width="620" height="44" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><rect x="42" y="399" width="10" height="30" fill="#ffffff"/><rect x="54" y="399" width="10" height="30" fill="#7d8c6a"/><rect x="66" y="399" width="10" height="30" fill="#7a3a1c"/><text x="85" y="419" font-size="14" font-weight="bold" fill="#b5651d">白色→灰绿→红褐</text><text x="270" y="419" font-size="13" fill="#4a3724">Fe(OH)₂ 被空气氧化</text></svg>', caption: '图1　推断题常见特征颜色汇总，看到颜色要立刻联想到对应物质。' },
      { type: 'heading', text: '三、特征性质（推断的另一把钥匙）' },
      { type: 'paragraph', text: '除了颜色，还有一些特征反应和特征现象，也是推断题的身份证。下面这张表汇总了最常考的几条。' },
      { type: 'table', headers: ['特征现象', '对应物质', '说明'], rows: [
        ['使品红褪色，加热后红色恢复', 'SO₂', '化合生成不稳定无色物，可逆'],
        ['使品红褪色，加热后红色不恢复', 'Cl₂、Na₂O₂、HClO、O₃', '强氧化性漂白，不可逆'],
        ['使湿润红色石蕊试纸变蓝', 'NH₃', '氨气溶于水显碱性'],
        ['遇 KSCN 溶液变红', 'Fe³⁺', '检验铁离子的特征反应'],
        ['在空气中由无色迅速变红棕色', 'NO', '一氧化氮被氧气氧化成 NO₂'],
        ['溶于水显碱性', 'NH₃、Na₂O、Na₂O₂', '与水反应生成碱或碱和 O₂'],
        ['既能与酸又能与碱反应', 'Al、Al₂O₃、Al(OH)₃', '两性']
      ] },
      { type: 'list', items: ['品红褪色要分清可逆与不可逆：SO₂ 可逆，Cl₂ 系不可逆', '石蕊试纸类：NH₃ 使湿润红色石蕊变蓝，是唯一的碱性气体', 'KSCN 变红只认 Fe³⁺，是铁离子最可靠的身份证', 'NO 无色但遇空气立刻变红棕色，这个变色非常显眼'] },
      { type: 'warn', label: '易错·品红褪色别只看褪色二字', text: '品红褪色别只看"褪色"二字。SO₂ 和 Cl₂ 都能使品红褪色，但原理完全不同：SO₂ 是和有色物质化合生成不稳定无色物，加热后无色物分解，红色恢复；Cl₂、Na₂O₂、HClO、O₃ 是靠强氧化性把有色物质的结构破坏掉，红色永远回不来。题目若说"加热后红色恢复"，那一定是 SO₂；若说"不恢复"，则可能是 Cl₂ 系。考试经常在这里设陷阱。' },
      { type: 'heading', text: '四、常见漂白剂对比' },
      { type: 'paragraph', text: '漂白剂是推断题和实验题的高频考点。三种常见漂白方式原理不同，记住下面这张表就能分清。' },
      { type: 'table', headers: ['漂白剂', '漂白原理', '是否可逆', '举例'], rows: [
        ['SO₂', '与有色物质化合生成不稳定无色物', '可逆（加热恢复）', 'SO₂ 漂白品红'],
        ['HClO / Cl₂ / Na₂O₂', '强氧化性破坏有色物质结构', '不可逆', '漂白粉、漂白液、过氧化钠'],
        ['活性炭', '物理吸附有色物质', '不可逆', '活性炭净水、褪色']
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">推断题解题流程图</text><rect x="30" y="120" width="170" height="80" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="115" y="152" font-size="15" font-weight="bold" fill="#b5651d" text-anchor="middle">① 找突破口</text><text x="115" y="178" font-size="12" fill="#4a3724" text-anchor="middle">特征颜色/反应/现象</text><rect x="255" y="120" width="170" height="80" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="152" font-size="15" font-weight="bold" fill="#b5651d" text-anchor="middle">② 确定一种物质</text><text x="340" y="178" font-size="12" fill="#4a3724" text-anchor="middle">用突破口先认出一个</text><rect x="480" y="120" width="170" height="80" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="565" y="152" font-size="15" font-weight="bold" fill="#b5651d" text-anchor="middle">③ 顺藤摸瓜</text><text x="565" y="178" font-size="12" fill="#4a3724" text-anchor="middle">推出其余物质</text><polygon points="240,150 240,170 258,160" fill="#b5651d"/><polygon points="465,150 465,170 483,160" fill="#b5651d"/><rect x="30" y="240" width="620" height="60" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="45" y="270" font-size="13" fill="#4a3724">突破口举例：淡黄色固体→Na₂O₂；品红褪色加热恢复→SO₂；KSCN 变红→Fe³⁺；</text><text x="45" y="292" font-size="13" fill="#4a3724">NO 遇空气变红棕→NO₂；白色沉淀变灰绿再变红褐→Fe(OH)₂ 氧化。</text></svg>', caption: '图2　推断题三步走：找突破口、确定一种物质、顺藤摸瓜推出其余。' },
      { type: 'heading', text: '五、推断题解题方法' },
      { type: 'paragraph', text: '推断题不是瞎猜，而是有固定套路。核心就是先找突破口，再顺藤摸瓜。突破口通常是三类：特征颜色（如淡黄色固体想到 Na₂O₂）、特征反应（如 KSCN 变红想到 Fe³⁺）、特征现象（如 NO 遇空气变红棕色）。一旦认出一个物质，就以它为起点，根据题目给出的转化关系或反应条件，把相邻的物质逐个确定。' },
      { type: 'example', label: '例题·颜色特征推断', text: '一种淡黄色固体 A 与水反应，放出能使带火星木条复燃的气体 B，同时得到无色溶液 C。另取 C 与氯化铝溶液反应，生成白色胶状沉淀。求 A、B、C 各是什么物质。<br><strong>解析</strong>：淡黄色固体且遇水放 O₂，突破口是 Na₂O₂，故 A 为 Na₂O₂。反应为 2Na₂O₂ + 2H₂O = 4NaOH + O₂↑，所以 B 为 O₂（使带火星木条复燃），C 为 NaOH 溶液。NaOH 与 AlCl₃ 反应先生成白色 Al(OH)₃ 沉淀（过量 NaOH 才溶解），符合题意。本题训练从"淡黄色"和"助燃气体"两个特征锁定 Na₂O₂。' },
      { type: 'keypoint', label: '重点·突破口优先原则', text: '<strong>做推断题时，永远先找最特殊的那条线索，而不是从第一条信息挨个试。</strong>特殊颜色（淡黄、红棕、蓝、黑）、特殊现象（品红褪色、KSCN 变红、NO 变色）、特殊反应（遇水放 O₂、两性）都是高优先级的突破口。一旦用突破口认出一种物质，整道题往往就打开了。' },
      { type: 'heading', text: '六、元素化合物与其他模块的融合' },
      { type: 'paragraph', text: '元素化合物从来不是孤立考的。高考常把它和多个模块揉在一起，既考这是什么物质，也考它怎么反应、怎么转化、怎么制备。下面这张图展示了元素化合物与其他模块的联系。' },
      { type: 'list', items: ['氧化还原反应：物质推断常涉及电子转移，比如 Fe²⁺ 与 Fe³⁺ 的相互转化、NO 被氧化', '离子反应：用离子方程式表示制备与检验，如 Al³⁺ 与 [Al(OH)₄]⁻ 的反应', '电化学：金属腐蚀、电解精炼铜都以元素化合物性质为基础', '化学实验：物质的制备、检验、分离提纯都要用到元素化合物知识', '工业流程：以铁、铜、氯、硫等元素为核心的真实生产流程题'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 410" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="410" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">元素化合物与其他模块的融合</text><line x1="340" y1="212" x2="115" y2="85" stroke="#b5651d" stroke-width="2"/><line x1="340" y1="212" x2="565" y2="85" stroke="#b5651d" stroke-width="2"/><line x1="340" y1="212" x2="90" y2="210" stroke="#b5651d" stroke-width="2"/><line x1="340" y1="212" x2="595" y2="210" stroke="#b5651d" stroke-width="2"/><line x1="340" y1="212" x2="135" y2="345" stroke="#b5651d" stroke-width="2"/><line x1="340" y1="212" x2="550" y2="345" stroke="#b5651d" stroke-width="2"/><polygon points="292,185 277,184 283,172" fill="#b5651d"/><polygon points="292,239 283,252 277,240" fill="#b5651d"/><polygon points="395,212 409,205 409,219" fill="#b5651d"/><polygon points="285,212 271,219 271,205" fill="#b5651d"/><polygon points="294,242 278,244 286,256" fill="#b5651d"/><polygon points="386,241 402,242 394,254" fill="#b5651d"/><rect x="40" y="60" width="150" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="115" y="90" font-size="14" fill="#4a3724" text-anchor="middle">氧化还原反应</text><rect x="490" y="60" width="150" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="565" y="90" font-size="14" fill="#4a3724" text-anchor="middle">离子反应</text><rect x="20" y="185" width="140" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="90" y="215" font-size="14" fill="#4a3724" text-anchor="middle">电化学</text><rect x="520" y="185" width="150" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="595" y="215" font-size="14" fill="#4a3724" text-anchor="middle">化学实验</text><rect x="60" y="320" width="150" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="135" y="350" font-size="14" fill="#4a3724" text-anchor="middle">工业流程</text><rect x="460" y="320" width="180" height="50" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="550" y="350" font-size="14" fill="#4a3724" text-anchor="middle">物质结构与周期律</text><rect x="260" y="180" width="160" height="64" rx="10" fill="#d98e3a" stroke="#b5651d" stroke-width="2"/><text x="340" y="218" font-size="17" font-weight="bold" fill="#ffffff" text-anchor="middle">元素化合物</text></svg>', caption: '图3　元素化合物是核心，与氧化还原、离子反应、电化学、实验、工业流程等模块融合考查。' },
      { type: 'tip', label: '提示·两句解题口诀', text: '推断题不用怕，编两句顺口溜：<strong>"特殊颜色先入眼，特征反应定身份；顺藤摸瓜推到底，转化关系要记全。"</strong>平时把前面各专题的特征颜色和特征性质整理成一张表，考前看一遍，推断题就稳了。' }
    ],
    exercises: [
      { type: 'choice', question: '下列物质中，常温下呈淡黄色固体的是？', options: ['Na₂O₂', 'Fe₂O₃', 'Cu', 'Cu(OH)₂'], answer: 'Na₂O₂', explanation: '过氧化钠 Na₂O₂ 是淡黄色固体，此外硫 S 和溴化银 AgBr 也呈淡黄色。Fe₂O₃ 是红棕色粉末，Cu 是紫红色金属，Cu(OH)₂ 是蓝色沉淀，均不是淡黄色。所以选 Na₂O₂。' },
      { type: 'choice', question: '下列能使品红溶液褪色，且加热后红色恢复的物质是？', options: ['Cl₂', 'Na₂O₂', 'SO₂', 'O₃'], answer: 'SO₂', explanation: '二氧化硫 SO₂ 与品红中的有色物质化合生成不稳定的无色物，加热时该无色物分解，红色恢复，属于可逆漂白。Cl₂、Na₂O₂、O₃ 的漂白依靠强氧化性，破坏有色物质结构，不可逆，加热后红色不恢复。所以选 SO₂。' },
      { type: 'choice', question: '某未知溶液中滴加 KSCN 溶液后变红，说明溶液中一定含有？', options: ['Fe²⁺', 'Fe³⁺', 'Cu²⁺', 'NH₄⁺'], answer: 'Fe³⁺', explanation: '铁离子 Fe³⁺ 与硫氰化钾 KSCN 反应生成血红色配合物，这是检验 Fe³⁺ 的特征反应。Fe²⁺ 与 KSCN 不变红，Cu²⁺ 与 KSCN 通常生成绿色或沉淀，NH₄⁺ 与 KSCN 无此现象。所以滴加 KSCN 变红说明含有 Fe³⁺。' },
      { type: 'fill', question: '在空气中，白色沉淀 Fe(OH)₂ 会逐渐被氧化，颜色变化为白色→___→红褐色（最终生成 Fe(OH)₃）。', answer: '灰绿色', explanation: '氢氧化亚铁 Fe(OH)₂ 是白色沉淀，在空气中极易被氧气氧化。它先变成灰绿色的中间产物，最终完全氧化为红褐色的氢氧化铁 Fe(OH)₃。这一颜色变化是推断题中识别 Fe(OH)₂ 与 Fe³⁺ 的重要突破口，书写相关转化时通常写 Fe(OH)₂ 在空气中转化为 Fe(OH)₃。' },
      { type: 'fill', question: '下列漂白剂中，依靠物理吸附作用使有色物质褪色、且过程不可逆的是___（填物质名称）。', answer: '活性炭', explanation: '活性炭的漂白属于物理变化，依靠疏松多孔的结构把有色物质吸附在表面，使颜色褪去，过程不可逆。与之不同，SO₂ 是与有色物质化合生成不稳定无色物，加热可逆；HClO、Cl₂、Na₂O₂ 依靠强氧化性破坏有色物质结构，也不可逆。三者的漂白原理是高考常考对比点。' }
    ]
  });
})();
