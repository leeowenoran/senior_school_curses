(function () {
  var v = gzGetVolume('chinese', 'zt4');
  if (!v) return;
  v.points.push(

    /* ===================== 附录 · 高三作文备考全策略 ===================== */

    { id: 'zt4-u4-l1',    cover: 'assets/cover/chinese/zt4-u4-l1.svg',
    name: '写作专题（七）：高三作文备考全策略', author: '高考复习', chapter: '附录 · 高三作文备考全策略', difficulty: '中等',
      content: [
        { type: 'heading', text: '一、备考总览：四阶段闭环' },
        { type: 'paragraph', text: '作文无法靠一日之功，须以“日常积累—限时训练—升格修改—临场策略”四阶段循环推进。前三个阶段在平时完成，临场策略负责把平时的训练成果稳定发挥出来。闭环转动得越多，考场越从容。' },
        { type: 'table', headers: ['阶段', '做什么', '达到什么效果'], rows: [['一·日常积累', '建素材本、读时评、背金句', '源头有活水，下笔不枯'], ['二·限时训练', '每周一篇、严格计时 50 分钟', '形成考场节奏与手感'], ['三·升格修改', '自我/互评→针对性改写', '一篇变一类，化蛹成蝶'], ['四·临场策略', '审题→列纲→成文→检查', '稳定发挥，规避失分雷区']] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">作文备考四阶段闭环</text><circle cx="125" cy="115" r="46" fill="#1f5f8b"/><text x="125" y="112" text-anchor="middle" font-size="13" fill="#fff">日常</text><text x="125" y="130" text-anchor="middle" font-size="13" fill="#fff">积累</text><circle cx="300" cy="115" r="46" fill="#4a8fa8"/><text x="300" y="112" text-anchor="middle" font-size="13" fill="#fff">限时</text><text x="300" y="130" text-anchor="middle" font-size="13" fill="#fff">训练</text><circle cx="475" cy="115" r="46" fill="#c07f4e"/><text x="475" y="112" text-anchor="middle" font-size="13" fill="#fff">升格</text><text x="475" y="130" text-anchor="middle" font-size="13" fill="#fff">修改</text><circle cx="600" cy="55" r="38" fill="#7aa05a"/><text x="600" y="60" text-anchor="middle" font-size="12" fill="#fff">临场</text><path d="M171 115 L252 115" stroke="#1f5f8b" stroke-width="3"/><path d="M346 115 L427 115" stroke="#1f5f8b" stroke-width="3"/><path d="M521 92 L566 72" stroke="#1f5f8b" stroke-width="3"/><path d="M562 34 C 460 8, 220 8, 130 60" stroke="#7a6fae" stroke-width="2.5" fill="none" stroke-dasharray="5,4"/><text x="340" y="200" text-anchor="middle" font-size="13" fill="#555">闭环转动越多，考场越从容</text></svg>', caption: '四阶段闭环：日常积累→限时训练→升格修改→临场策略，循环往复形成能力。' },
        { type: 'heading', text: '二、阶段一：日常积累（源头活水）' },
        { type: 'paragraph', text: '巧妇难为无米之炊。考场上“没东西写”的根源，是平时积累太少。日常积累不求多而杂，求“精而能用”。' },
        { type: 'list', items: ['建素材本：分“人物/时事/名言/句式”四栏，每周添 3-5 条', '读时评：订阅主流媒体评论，揣摩其立论角度与论证逻辑', '背金句：积累可迁移的哲理句、排比句，考试直接化用', '勤摘抄：遇到好标题、好开头、好结尾，分类归档备用'] },
        { type: 'keypoint', label: '素材本三栏法', text: '每条素材按<strong>“内容—适用主题—可化用句”</strong>三栏记录。例如苏武：内容（北海牧羊十九年守节）、适用主题（坚守/气节/忠诚）、可化用句（“十九年的风雪，吹不冷一腔未冷的忠”）。三栏齐备，考场上才能“一材多用”。' },
        { type: 'example', label: '积累示范', text: '读“北斗团队”：不只记“他们造了导航”，而提炼主题“自立/匠心/青春报国”，并写下可化用句“把青春焊进星河，让中国坐标立在天上”。——一条素材同时撑起“奋斗”“创新”“家国”多个主题，正是三栏法的价值。' },
        { type: 'heading', text: '三、阶段二：限时训练（考场模拟）' },
        { type: 'paragraph', text: '积累再多，考场上卡壳也白费。限时训练的核心是“模拟真实考场”：严格 50 分钟、不查资料、一次成文，逼出节奏感。' },
        { type: 'list', items: ['严格计时：审题 5 分 + 列纲 10 分 + 写作 30 分 + 检查 5 分', '每周一篇：固定时间（如周日早），形成生物钟', '不依赖外援：写作中不翻书、不查手机，仿真考场', '复盘比写更重要：写完对照评分表自评，找薄弱项'] },
        { type: 'warn', label: '易错提醒', text: '<strong>“不限时”是最大陷阱</strong>：平时拖两小时写出的“好文”，考场 50 分钟根本复制不出来。务必把训练钉死在 50 分钟内，宁可先写完再润色，也不可因纠结开头而超时、字数不足——字数不足每 50 字扣 1 分，是最高频硬伤。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">限时训练时间分配（50分钟）</text><rect x="40" y="60" width="68" height="50" rx="6" fill="#1f5f8b"/><text x="74" y="90" text-anchor="middle" font-size="12" fill="#fff">审题5</text><rect x="118" y="60" width="136" height="50" rx="6" fill="#4a8fa8"/><text x="186" y="90" text-anchor="middle" font-size="12" fill="#fff">列纲10</text><rect x="264" y="60" width="272" height="50" rx="6" fill="#c07f4e"/><text x="400" y="90" text-anchor="middle" font-size="12" fill="#fff">写作30</text><rect x="546" y="60" width="94" height="50" rx="6" fill="#7aa05a"/><text x="593" y="90" text-anchor="middle" font-size="12" fill="#fff">检查5</text><text x="340" y="155" text-anchor="middle" font-size="13" fill="#555">先写完再润色，杜绝因超时字数不足</text></svg>', caption: '限时训练 50 分钟分配：审题 5′ / 列纲 10′ / 写作 30′ / 检查 5′。' },
        { type: 'heading', text: '四、阶段三：升格修改（化蛹成蝶）' },
        { type: 'paragraph', text: '“写十篇新文”不如“改好一篇旧文”。升格修改是把二类卷磨成一类卷的关键动作，比盲目多写更高效。' },
        { type: 'keypoint', label: '升格四步', text: '①<strong>通读定位</strong>：自评哪处拖沓、哪处空洞；②<strong>增补论据</strong>：空洞处补事例或分析；③<strong>打磨语言</strong>：把口语换金句、把散句变整句；④<strong>重拟首尾</strong>：让开头入题快、结尾有升华。四步做完，同一素材能上更大台阶。' },
        { type: 'example', label: '升格对比', text: '原句：“我们要坚持不懈，才能成功。”（空洞口号）<br>升格：“滴水穿石，非力使然，乃恒使然；绳锯木断，非锐使然，乃久使然——坚持从不是爆发，而是把平凡的日子，一天天钉进目标里。”（化用警句+比喻，有文采且深刻）。——同一意思，升格后语言与立意双提升。' },
        { type: 'list', items: ['每次只攻一个薄弱点：本次专练“论据充实”，下次专练“结构”', '保留修改痕迹：用红笔标出改前改后，看清进步轨迹', '互评借镜：同桌互改，用对方的眼睛发现自己看不见的硬伤', '建“升格档案”：把改得最好的 3 篇收藏，考前回看找手感'] },
        { type: 'heading', text: '五、阶段四：临场策略（稳定发挥）' },
        { type: 'paragraph', text: '经过前三阶段，临场只需一套固定流程把成果“装进卷子”。越是紧张，越要机械地走流程，避免临场乱阵脚。' },
        { type: 'list', items: ['审：圈画材料关键词与任务指令，确认文体与对象', '列：用 3 分钟列提纲（中心+分论点+素材），不列不写', '写：先入题、段首亮观点、段内叙议结合', '查：写完查标题、查字数（≥800）、查错字、查文体格式', '稳：遇偏题不慌，回材料重找角度，不中途换题', '净：卷面工整、分段清晰（5-8 段为宜），给阅卷好印象'] },
        { type: 'tip', label: '学习提示', text: '把“列纲”养成铁律：无论多急，动笔前必花 3 分钟列提纲（中心句 + 三个分论点 + 各配什么素材）。提纲一立，中途就不会跑偏，也省去大量返工时间。这是性价比最高的临场习惯。' },
        { type: 'reading', text: '延伸思考：备考四阶段中，“升格修改”最耗时却最被学生忽略。如果你是老师，会如何用“一篇文改三遍”的制度，让全班在有限课时内最大化提升？请结合“改一篇胜过写十篇”的理念谈你的设计。' },
        { type: 'heading', text: '六、温馨提示：准·深·浅·实·美 五字诀' },
        { type: 'paragraph', text: '把全部备考要点压成五字，落笔前在心里过一遍，可同时兼顾基础与发展等级。' },
        { type: 'keypoint', label: '五字诀', text: '<strong>准</strong>——审题立意要准，不跑题；<strong>深</strong>——分析要深，透过现象看本质；<strong>浅</strong>——语言深入浅出，不故作晦涩；<strong>实</strong>——内容充实，有事例有分析；<strong>美</strong>——有文采，句式灵活善用修辞。五字兼顾，一类卷可期。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef5f7"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#1f5f8b">备考五字诀</text><rect x="40" y="60" width="116" height="80" rx="8" fill="#1f5f8b"/><text x="98" y="105" text-anchor="middle" font-size="20" fill="#fff">准</text><rect x="166" y="60" width="116" height="80" rx="8" fill="#4a8fa8"/><text x="224" y="105" text-anchor="middle" font-size="20" fill="#fff">深</text><rect x="292" y="60" width="116" height="80" rx="8" fill="#c07f4e"/><text x="350" y="105" text-anchor="middle" font-size="20" fill="#fff">浅</text><rect x="418" y="60" width="116" height="80" rx="8" fill="#7aa05a"/><text x="476" y="105" text-anchor="middle" font-size="20" fill="#fff">实</text><rect x="544" y="60" width="96" height="80" rx="8" fill="#7a6fae"/><text x="592" y="105" text-anchor="middle" font-size="20" fill="#fff">美</text><text x="340" y="170" text-anchor="middle" font-size="13" fill="#555">准审题·深分析·浅表达·实内容·美文采</text></svg>', caption: '五字诀：准（审题）·深（分析）·浅（表达）·实（内容）·美（文采），兼顾基础与发展。' },
        { type: 'tip', label: '收尾提示', text: '备考切忌“只背不写、只写不改”。最稳的路径是：用三栏法积累（准素材）→用 50 分钟限时练手感→用升格四步磨一篇→用五字诀做临场自检。四步闭环走满一轮，比零散刷题有效得多。' }
      ],
      exercises: [
        { type: 'choice', question: '高三作文备考四阶段的正确闭环顺序是？', options: ['限时训练→日常积累→临场策略→升格修改', '日常积累→限时训练→升格修改→临场策略', '升格修改→日常积累→临场策略→限时训练', '临场策略→升格修改→日常积累→限时训练'], answer: '日常积累→限时训练→升格修改→临场策略', explanation: '备考四阶段是循序渐进的闭环：先“日常积累”解决“没米下锅”，再“限时训练”形成考场节奏，然后“升格修改”把二类磨成一类，最后“临场策略”稳定发挥。前三者打底、临场收口，故选“日常积累→限时训练→升格修改→临场策略”。' },
        { type: 'fill', question: '素材本三栏法要求每条素材记录“内容、__、可化用句”三栏，三栏齐备方能一材多用。', answer: '适用主题', explanation: '三栏法为“内容—适用主题—可化用句”：内容记事实梗概，适用主题标它能支撑哪些立意，可化用句提炼考场上能直用的金句。只有三栏齐备，一条素材才能在不同题目中反复调用，故填“适用主题”。' },
        { type: 'choice', question: '下列关于限时训练的说法，错误的是？', options: ['应严格控制在 50 分钟内', '写作中可随时翻书查资料', '每周固定一篇形成生物钟', '写后须对照评分表自评复盘'], answer: '写作中可随时翻书查资料', explanation: '限时训练必须“仿真考场”：严格 50 分钟、不查资料、一次成文，才能逼出真实节奏。若写作中随时翻书查资料，就失去了模拟意义，考场照样卡壳，故选“写作中可随时翻书查资料”。' },
        { type: 'fill', question: '升格修改四步为：通读定位→增补论据→打磨语言→__。', answer: '重拟首尾', explanation: '升格四步：①通读定位（找拖沓空洞处）②增补论据（补事例分析）③打磨语言（口语换金句、散句变整句）④重拟首尾（开头入题快、结尾有升华）。首尾是阅卷第一与最后印象，须专门重拟，故填“重拟首尾”。' },
        { type: 'choice', question: '备考“五字诀”中，“浅”字的含义是？', options: ['内容肤浅', '语言深入浅出、不故作晦涩', '审题浅薄', '立意浅显'], answer: '语言深入浅出、不故作晦涩', explanation: '五字诀“准深浅表实美”中，“浅”指语言深入浅出、不故意写得晦涩难懂——深刻靠思想而非靠堆砌生僻词。它绝非提倡内容肤浅或立意浅显，故选“语言深入浅出、不故作晦涩”。' }
      ]
    }

  );
})();
