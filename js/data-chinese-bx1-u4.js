/* ============================================================
 * 高一语文 · 必修 上册 · 第四单元 我们的家园（家乡文化生活）
 * 综合学习活动，3 课时：记录家乡的人和物 / 家乡文化现状调查 / 参与家乡文化建设
 * 数据注入：chinese.bx1.points
 * 质量标准：每课 ≥22 内容块 / 3 SVG / 含 example+table+tip+warn+list+keypoint
 * ============================================================ */
(function () {
  var v = gzGetVolume('chinese', 'bx1');
  if (!v) return;

  v.points.push(
    /* ==================== 第1课 记录家乡的人和物 ==================== */
    {
      id: 'bx1-u4-l1',
      cover: 'assets/cover/chinese/bx1-u4-l1.svg',
      name: '记录家乡的人和物',
      author: '学习活动',
      chapter: '第四单元 我们的家园（家乡文化生活）',
      difficulty: '简单',
      content: [
        { type: 'heading', text: '一、活动目标与定位' },
        { type: 'paragraph', text: '本单元属于「当代文化参与」学习任务群。第一课要求我们通过采访、观察，记录家乡有代表性的人和物，在真实情境中培养对脚下土地的温情与实地调研的能力，是走进家乡文化的第一步。' },
        { type: 'paragraph', text: '「记录」不同于写作文，它强调亲历、亲见、亲闻：走出教室，走进街巷与田野，用眼睛看、用耳朵听、用笔记录。这一过程既是语文实践，也是公民素养的养成。' },
        { type: 'keypoint', label: '重点·对象', text: '记录的两大对象：<strong>「人」</strong>（乡贤、手艺人、长辈等与家乡有故事的人）与<strong>「物」</strong>（老建筑、文物、特产、自然风物等有文化记忆的物）。方法以<strong>实地走访 + 口述记录</strong>为主。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef6ee"/><rect x="220" y="120" width="240" height="140" rx="6" fill="#caa46a" stroke="#7a5a2e" stroke-width="2"/><path d="M210 120 l130 -46 130 46 z" fill="#8a5a2e"/><rect x="318" y="185" r="18" fill="#5b3b12"/><rect x="250" y="200" width="30" height="60" fill="#5b3b12"/><rect x="400" y="200" width="30" height="60" fill="#5b3b12"/><g fill="#e85d8d"><circle cx="140" cy="150" r="18"/><circle cx="540" cy="150" r="18"/></g><text x="140" y="190" font-size="13" fill="#9c4a6e" text-anchor="middle">人</text><text x="540" y="190" font-size="13" fill="#9c4a6e" text-anchor="middle">人</text><text x="340" y="288" font-size="15" fill="#3e6b2e" text-anchor="middle">走访老屋与长辈，记录人与物</text></svg>', caption: '记录从「看得见的老屋」与「走得动的长辈」入手最易着手。' },
        { type: 'heading', text: '二、怎样做访谈记录' },
        { type: 'list', items: ['拟定提纲：先列想了解的问题，避免漫无边际', '尊重对象：说明来意、征得同意、注意隐私', '原汁记录：保留受访者的原话与方言亮点', '拍照留存：对老物件、旧址拍照并标注说明', '整理成文：去粗取精，写成「人物小传」或「风物志」'] },
        { type: 'paragraph', text: '访谈不是「审问」，而是一场平等的对话。开场应自然寒暄、建立信任，再顺着受访者的回忆慢慢深入；遇到生动的方言、俚语、老故事，要原样记下，这些正是家乡文化最鲜活的印记。' },
        { type: 'keypoint', label: '重点·写法', text: '记录文稿宜<strong>夹叙夹议</strong>：先客观记述事实（人说了什么、物是什么样），再自然抒写自己对家乡文化的理解与情感，避免写成干巴巴的清单或流水账。' },
        { type: 'example', label: '示范·人物小传', text: '下面是记录一位老手艺人的片段，请体会其写法。<br><br><strong>原文片段</strong>：「王阿婆今年八十二，从十七岁起跟母亲学扎灯笼。她说『灯骨要选三年的毛竹，火烤弯了才不易断』。说话时，她手上的茧比灯笼上的竹篾还厚。」<br><strong>评析</strong>：这段记录<strong>用原话 + 细节</strong>（「三年的毛竹」「手上的茧」）代替空泛赞美，既真实可感，又让手艺人的坚守自然流露，是「夹叙夹议」中「叙」的典范。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#f3f8fb"/><rect x="40" y="40" width="150" height="150" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="115" y="115" font-size="14" fill="#3e6b2e" text-anchor="middle">拟定提纲</text><rect x="210" y="40" width="150" height="150" rx="8" fill="#7ec8e3" stroke="#2e6fae" stroke-width="2"/><text x="285" y="115" font-size="14" fill="#0f3b5e" text-anchor="middle">实地访谈</text><rect x="380" y="40" width="150" height="150" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="455" y="115" font-size="14" fill="#5b3b12" text-anchor="middle">拍照整理</text><rect x="550" y="40" width="120" height="150" rx="8" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="610" y="110" font-size="14" fill="#fff" text-anchor="middle">成文</text><path d="M190 115 h20" stroke="#555" stroke-width="3" marker-end="url(#a1)"/><path d="M360 115 h20" stroke="#555" stroke-width="3" marker-end="url(#a1)"/><path d="M530 115 h18" stroke="#555" stroke-width="3" marker-end="url(#a1)"/><text x="340" y="215" font-size="13" fill="#3e5b6b" text-anchor="middle">访谈四步：准备 → 走访 → 整理 → 成文</text><defs><marker id="a1" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker></defs></svg>', caption: '一次完整的家乡记录，是「问题—走访—素材—文章」的闭环。' },
        { type: 'heading', text: '三、记录「物」：风物与老物件' },
        { type: 'list', items: ['老建筑：古桥、祠堂、老屋，记其形制与来历', '老物件：农具、器皿、票证，记其用途与故事', '土特产：小吃、手作，记其工艺与口碑', '自然风物：古树、河流、山岭，记其与人的关系', '非遗民俗：庙会、节庆，记其仪式与寓意'] },
        { type: 'keypoint', label: '重点·物之魂', text: '记「物」不能只写<strong>样子</strong>，更要写<strong>人与物的关系</strong>：这口井谁打的、这条街为何叫这名、这味吃食承载了哪些记忆。物因人才有了温度，这正是家乡文化的核心。' },
        { type: 'warn', label: '易错·真实性', text: '记录须<strong>真实具体</strong>，不夸大、不虚构；涉及个人隐私与未公开信息要征得同意。把道听途说当事实、为「好看」而编造细节，都违背了「当代文化参与」的诚信底线。' },
        { type: 'table', headers: ['记录类别', '关键要素', '易陷误区'], rows: [['记人', '姓名、身份、原话、故事', '只写评价不写事实'], ['记物', '名称、形制、来历、人与物的关系', '只写外观不写人情'], ['记俗', '仪式、时间、参与者、寓意', '猎奇化、表面化'], ['记变迁', '过去与现在的对照', '一味怀旧或一味求新']] },
        { type: 'heading', text: '四、成果呈现' },
        { type: 'paragraph', text: '记录完成后，可形成多样的成果在班级交流。文字类可写成「家乡人物志」「家乡风物志」；图像类可画手绘地图、做摄影集；影音类可剪短视频。形式越贴近内容、越便于传播越好。' },
        { type: 'keypoint', label: '重点·价值', text: '成果的意义不在「精美」，而在<strong>练笔与认同</strong>： writing 过程中你重新认识了家乡，也在表达中增强了乡土认同与文化自信，这正是语文「工具性与人文性统一」的体现。' },
        { type: 'tip', label: '拓展·口述史', text: '「记录家乡的人和物」本质上是一次小型<strong>口述史</strong>实践。专业口述史广泛用于非遗保护、家族史整理。你今天记下的长辈口述，未来可能成为珍贵的地方文献——普通人也能参与文化传承。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f3f8ee"/><g font-size="13" text-anchor="middle"><rect x="40" y="50" width="170" height="70" rx="8" fill="#cfe3a8" stroke="#7a9b3e" stroke-width="2"/><text x="125" y="90" fill="#3e6b2e">实地走访</text><rect x="255" y="50" width="170" height="70" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="340" y="90" fill="#5b3b12">口述记录</text><rect x="470" y="50" width="170" height="70" rx="8" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="555" y="90" fill="#fff">整理成文</text></g><g stroke="#555" stroke-width="3" fill="none"><line x1="210" y1="85" x2="253" y2="85" marker-end="url(#a2)"/><line x1="425" y1="85" x2="468" y2="85" marker-end="url(#a2)"/></g><defs><marker id="a2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker></defs><text x="340" y="155" font-size="13" fill="#3e6b2e" text-anchor="middle">记录流程：走访 → 记录 → 成文（真实为先）</text></svg>', caption: '从实地走到成文，真实与温度贯穿始终。' },
        { type: 'list', items: ['「当代文化参与」任务群，第一课重在记录', '两大对象：人（乡贤、手艺人、长辈）与物（老屋、风物）', '访谈五步：提纲、尊重、原话、拍照、成文', '写法宜夹叙夹议，记物要写人与物的关系', '真实具体、尊重隐私，不虚构不夸大', '成果多样：人物志、风物志、手绘地图、短视频'] }
      ],
      exercises: [
        { type: 'choice', question: '「记录家乡的人和物」活动中，「物」通常不包括？', options: ['老建筑、旧址', '地方特产、文物', '与家乡无关的明星八卦', '自然风物、老物件'], answer: '与家乡无关的明星八卦', explanation: '本课记录的「物」指具有家乡文化代表性的事物，如老屋、文物、特产、风物等；与家乡无关联的娱乐八卦既不是「家乡」也非「文化」，不属记录范围。' },
        { type: 'choice', question: '做人物访谈时，不恰当的做法是？', options: ['事先拟定提纲', '说明来意、征得同意', '原汁原味记录受访者原话', '随意编造受访者没说过的话'], answer: '随意编造受访者没说过的话', explanation: '访谈记录追求真实，应保留受访者原话并标注；虚构他人言论既违背真实性原则，也可能侵犯权益。尊重对象、实事求是是「当代文化参与」的基本要求。' },
        { type: 'fill', question: '记录文稿宜「夹叙夹议」：先______记述事实，再抒写对家乡文化的理解。', answer: '客观', explanation: '「夹叙夹议」指叙述与议论结合。家乡记录应先客观、准确地记述人与物的真实情况（叙），再自然引出自己的认识与情感（议），避免写成干巴巴的流水清单。' },
        { type: 'choice', question: '本次学习活动的任务群归属是？', options: ['文学阅读与写作', '当代文化参与', '思辨性阅读与表达', '整本书阅读'], answer: '当代文化参与', explanation: '「家乡文化生活」是《普通高中语文课程标准》中「当代文化参与」学习任务群的载体，旨在引导学生在真实情境中调查、参与、反思身边的文化现象，提升公民实践素养。' },
        { type: 'choice', question: '关于记录成果的呈现，合适的是？', options: ['只能写论文', '可写成人物志、风物志，也可用手绘地图或短视频', '必须印刷成书', '越虚构越精彩'], answer: '可写成人物志、风物志，也可用手绘地图或短视频', explanation: '成果形式应灵活多元，文字（人物志、风物志）、图像（手绘地图、摄影）、影音（短视频）皆可，关键在于真实呈现与有效交流，而非拘泥于某一种文体。' }
      ]
    },

    /* ==================== 第2课 家乡文化生活现状调查 ==================== */
    {
      id: 'bx1-u4-l2',
      cover: 'assets/cover/chinese/bx1-u4-l2.svg',
      name: '家乡文化生活现状调查',
      author: '学习活动',
      chapter: '第四单元 我们的家园（家乡文化生活）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、从「记录」到「调查」' },
        { type: 'paragraph', text: '第一课记录个案，本课要对家乡文化生活做面上的调查：了解习俗、设施、活动、需求的现状与问题，形成有依据的调研报告，从「讲一个故事」走向「看清一片状况」。' },
        { type: 'paragraph', text: '调查的核心是问题意识：家乡的文化生活有哪些资源？乡亲们满意吗？缺什么、盼什么？带着这些问题去收集证据，调查才不会流于形式。' },
        { type: 'keypoint', label: '重点·三件套', text: '调查三件套：<strong>问卷（量化）</strong> + <strong>访谈（深描）</strong> + <strong>文献/观察（佐证）</strong>。三者互补，结论才可靠——问卷看「多少」，访谈看「为什么」，文献看「来龙去脉」。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#f3f1e8"/><rect x="60" y="90" width="150" height="170" rx="8" fill="#fff" stroke="#caa83a" stroke-width="2"/><text x="135" y="180" font-size="14" fill="#5b3b12" text-anchor="middle">问卷</text><g stroke="#888" stroke-width="2"><line x1="80" y1="120" x2="190" y2="120"/><line x1="80" y1="145" x2="190" y2="145"/><line x1="80" y1="170" x2="190" y2="170"/><circle cx="95" cy="200" r="6"/><circle cx="135" cy="200" r="6" fill="#caa83a"/><circle cx="175" cy="200" r="6"/></g><rect x="290" y="90" width="150" height="170" rx="8" fill="#eaf3fb" stroke="#2e6fae" stroke-width="2"/><text x="365" y="180" font-size="14" fill="#0f3b5e" text-anchor="middle">访谈</text><circle cx="365" cy="140" r="20" fill="#7ec8e3"/><path d="M350 235 q15 -40 30 0" stroke="#2e6fae" stroke-width="2" fill="none"/><rect x="520" y="90" width="150" height="170" rx="8" fill="#fdeaf0" stroke="#c0392b" stroke-width="2"/><text x="595" y="180" font-size="14" fill="#9c1a2e" text-anchor="middle">文献观察</text><rect x="555" y="130" width="80" height="50" fill="#fff" stroke="#c0392b" stroke-width="2"/><line x1="555" y1="145" x2="635" y2="145"/><line x1="555" y1="160" x2="635" y2="160"/><text x="340" y="288" font-size="13" fill="#5b4636" text-anchor="middle">问卷 + 访谈 + 文献：三角互证更可靠</text></svg>', caption: '单一方法易偏，三种方法交叉验证才能得出可信结论。' },
        { type: 'heading', text: '二、设计问卷与提纲' },
        { type: 'list', items: ['问题具体可答：避免「你幸福吗」式空泛题', '题型搭配：单选、多选、量表、开放题结合', '样本合理：覆盖不同年龄、职业的乡亲', '先小范围试测，再正式发放', '数据可视化：用图表呈现结果'] },
        { type: 'paragraph', text: '问卷的信度与效度取决于设计：题目要中立、不含诱导；选项要互斥且穷尽；量表（如「非常满意—不满意」五档）便于量化。正式发放前先找几位乡亲试填，能发现不少措辞歧义。' },
        { type: 'keypoint', label: '重点·报告', text: '调研报告一般含：<strong>背景与目的、方法与样本、发现与数据、问题与分析、建议</strong>五部分。它用证据说话，重在「发现了什么」与「意味着什么」，而非抒情。' },
        { type: 'example', label: '示范·题目设计', text: '比较下面两道问卷题，哪道更可取？<br><br>甲：「你觉得家乡文化好不好？」（好 / 不好）<br>乙：「你对家乡下列文化设施的使用频率是？」——图书室、文化广场、戏台……（经常 / 偶尔 / 从不）<br><br><strong>解析</strong>：<strong>乙题更可取</strong>。甲题空泛、只有两极，得不到有效信息；乙题把「文化」<strong>操作化为具体设施</strong>，可勾选、可统计，还能暴露「哪些设施闲置」的真问题。好问卷善于把抽象概念拆成可测的指标。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#f6f8fb"/><rect x="60" y="160" width="50" height="50" fill="#7ec8e3"/><rect x="140" y="120" width="50" height="90" fill="#5b9bd0"/><rect x="220" y="90" width="50" height="120" fill="#3e6fae"/><rect x="300" y="140" width="50" height="70" fill="#7ec8e3"/><rect x="380" y="100" width="50" height="110" fill="#5b9bd0"/><g fill="#444" font-size="12" text-anchor="middle"><text x="85" y="225">习俗</text><text x="165" y="225">设施</text><text x="245" y="225">活动</text><text x="325" y="225">需求</text><text x="405" y="225">满意度</text></g><text x="560" y="120" font-size="14" fill="#33485a">用柱状图把</text><text x="560" y="145" font-size="14" fill="#33485a">抽象数据</text><text x="560" y="170" font-size="14" fill="#33485a">变成可视</text><text x="560" y="195" font-size="14" fill="#33485a">结论</text></svg>', caption: '把调查数据画成图表，报告更有说服力。' },
        { type: 'heading', text: '三、形成建议' },
        { type: 'list', items: ['具体：针对数据指出的真问题，不空喊口号', '可行：分条列出、量力而行、有步骤', '接地气：尊重乡情民俗，易被执行', '可评估：写明预期效果，便于后续检验', '协商：与村委会、乡亲沟通，而非独断'] },
        { type: 'keypoint', label: '重点·落点', text: '调查的最终价值在<strong>建设性建议</strong>：针对发现的问题，提出可操作、接地气的改进方案，体现「参与」而非仅「旁观」。没有建议的调查，容易停在「抱怨」层面。' },
        { type: 'warn', label: '易错·方法', text: '忌<strong>结论先行、拿数据凑观点</strong>；应先看数据再下判断。也忌<strong>以偏概全</strong>——如只问年轻人就推断全体乡亲。样本缺乏代表性，结论必然失真。' },
        { type: 'table', headers: ['调查方法', '优势', '局限'], rows: [['问卷', '量化、覆盖面广、便于统计', '难触达深层原因'], ['访谈', '深入、能听原话与故事', '样本小、耗时长'], ['文献观察', '提供背景与佐证', '可能过时或不完整']] },
        { type: 'heading', text: '四、调查报告写法与价值' },
        { type: 'paragraph', text: '写报告时，数据与故事要配合：用数据说话立住骨架，用一两段访谈引语添上血肉。语言要平实准确，少形容词、多事实与数字，让读者「看得见状况、想得清对策」。' },
        { type: 'keypoint', label: '重点·价值', text: '调查让青年从<strong>旁观者变参与者</strong>：当你用证据指出「村中老人活动少、缺少场所」，并附上可行方案，你就已经参与了家乡治理的一角，这正是「当代文化参与」的真义。' },
        { type: 'tip', label: '拓展·田野方法', text: '社会学的<strong>田野调查</strong>、人类学的<strong>参与式观察</strong>，都是本课方法的「专业版」。费孝通写《江村经济》便长住村庄、与农人同吃同劳动。中学生的家乡调查虽小，方法逻辑与大师一脉相承。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f3f1e8"/><g font-size="13" text-anchor="middle"><rect x="40" y="50" width="170" height="70" rx="8" fill="#eaf3fb" stroke="#2e6fae" stroke-width="2"/><text x="125" y="90" fill="#0f3b5e">记录</text><rect x="255" y="50" width="170" height="70" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="340" y="90" fill="#5b3b12">调查</text><rect x="470" y="50" width="170" height="70" rx="8" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="555" y="90" fill="#fff">建议</text></g><g stroke="#555" stroke-width="3" fill="none"><line x1="210" y1="85" x2="253" y2="85" marker-end="url(#a3)"/><line x1="425" y1="85" x2="468" y2="85" marker-end="url(#a3)"/></g><defs><marker id="a3" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker></defs><text x="340" y="155" font-size="13" fill="#5b4636" text-anchor="middle">单元推进：记录 → 调查 → 建议（参与递进）</text></svg>', caption: '从记录个案到面上调查，再到建设性建议。' },
        { type: 'list', items: ['本课做「面上调查」，重在问题意识与证据', '调查三件套：问卷 + 访谈 + 文献观察（三角互证）', '问卷要具体可答、样本覆盖不同人群、先试测', '报告五部分：背景、方法、发现、问题、建议', '忌结论先行、以偏概全；建议要具体可行', '调查价值：从旁观者变为有依据的参与者'] }
      ],
      exercises: [
        { type: 'choice', question: '家乡文化现状调查最可靠的方法是？', options: ['只发问卷', '问卷 + 访谈 + 文献观察三者结合', '只凭网上的传言', '只采访一位长辈'], answer: '问卷 + 访谈 + 文献观察三者结合', explanation: '单一方法各有局限：问卷易表面化，访谈样本小，文献可能过时。三者交叉验证（三角互证）能互补短板，使调查结论更扎实可信，这是社会调查的基本方法。' },
        { type: 'choice', question: '设计问卷时，应避免的问题是？', options: ['题型搭配合理', '问题具体可答', '问「你幸福吗」这类空泛题', '覆盖不同人群'], answer: '问「你幸福吗」这类空泛题', explanation: '空泛、抽象的问题受访者难以作答，也得不到有效数据。好问卷应问题具体、选项清晰、题型多样，并覆盖不同年龄职业的样本，才能反映真实情况。' },
        { type: 'fill', question: '调研报告一般包含：背景与目的、方法与样本、发现与数据、问题与______、建议五部分。', answer: '分析', explanation: '标准的调研报告结构为：背景目的（为何做）、方法样本（怎么做）、发现数据（看到什么）、问题与分析（意味着什么）、建议（怎么办）。「分析」承上启下，把数据转化为判断，是报告的核心环节。' },
        { type: 'choice', question: '调查中发现「村中老人活动少」，恰当的建议是？', options: ['置之不理', '提出建设村老年活动中心、组织节庆活动等可操作方案', '一律取消活动经费', '只写感叹不提办法'], answer: '提出建设村老年活动中心、组织节庆活动等可操作方案', explanation: '「当代文化参与」强调建设性。面对问题应提出具体、可行、接地气的方案（如建活动场所、办活动），而非旁观抱怨，这才体现调查的实践价值。' },
        { type: 'choice', question: '下列哪种做法容易导致调查结论偏差？', options: ['样本覆盖老中青', '先试测再正式发放', '只问年轻人就推断全体乡亲', '用图表呈现数据'], answer: '只问年轻人就推断全体乡亲', explanation: '样本缺乏代表性（如只调查年轻人）会以偏概全，使结论失真。可靠的调查须合理抽样、覆盖不同群体，并先小范围试测修正问题，再用图表客观呈现。' }
      ]
    },

    /* ==================== 第3课 参与家乡文化建设 ==================== */
    {
      id: 'bx1-u4-l3',
      cover: 'assets/cover/chinese/bx1-u4-l3.svg',
      name: '参与家乡文化建设',
      author: '学习活动',
      chapter: '第四单元 我们的家园（家乡文化生活）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、从「调查」到「参与」' },
        { type: 'paragraph', text: '本单元最后一课，要求把调查所得转化为行动：或为家乡写一份建议书，或参与组织一次文化活动，或制作文化宣传品，真正做家乡文化的「建设者」，而非只交一份报告了事。' },
        { type: 'paragraph', text: '青年学生力量虽小，却大有可为：一次微建议、一场小活动、一段短视频，都可能让更多人关注家乡文化。参与的关键在真诚与可行，不在规模大小。' },
        { type: 'keypoint', label: '重点·三路径', text: '「参与」的三条路径：<strong>写建议（文本）</strong>、<strong>做活动（实践）</strong>、<strong>传文化（传播）</strong>。三者可单独也可结合，核心是让文化「被看见、被珍惜、被传承」。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4f0"/><rect x="60" y="90" width="160" height="150" rx="8" fill="#fff" stroke="#2e8f6f" stroke-width="2"/><text x="140" y="160" font-size="14" fill="#1c5b46" text-anchor="middle">建议书</text><line x1="80" y1="120" x2="200" y2="120" stroke="#2e8f6f" stroke-width="2"/><line x1="80" y1="145" x2="200" y2="145" stroke="#2e8f6f" stroke-width="2"/><line x1="80" y1="170" x2="200" y2="170" stroke="#2e8f6f" stroke-width="2"/><rect x="260" y="90" width="160" height="150" rx="8" fill="#fdeaf0" stroke="#c0392b" stroke-width="2"/><text x="340" y="160" font-size="14" fill="#9c1a2e" text-anchor="middle">办活动</text><circle cx="340" cy="140" r="18" fill="#e85d8d"/><path d="M322 195 q18 -30 36 0" stroke="#c0392b" stroke-width="2" fill="none"/><rect x="460" y="90" width="160" height="150" rx="8" fill="#fef3d8" stroke="#d9a441" stroke-width="2"/><text x="540" y="155" font-size="14" fill="#7a5a1e" text-anchor="middle">做传播</text><path d="M510 130 l40 -16 40 16 -40 16 z" fill="#f6c453"/><text x="340" y="285" font-size="13" fill="#2e5b46" text-anchor="middle">建议 · 活动 · 传播：三种参与家乡的方式</text></svg>', caption: '从旁观者到建设者，青年也能为家乡文化添砖加瓦。' },
        { type: 'heading', text: '二、怎样写一份建议书' },
        { type: 'list', items: ['称呼明确：写给村委会、社区或相关职能部门', '问题具体：引用调查数据，不空喊口号', '建议可行：分条列出、量力而行', '语气得体：尊重、理性、建设性', '附上预期效果，便于对方采纳'] },
        { type: 'paragraph', text: '建议书是正式的应用文，语气要不卑不亢、有理有据。先礼后言事，摆事实、讲道理，再给对策。切忌情绪化指责或过度谦卑，二者都不利于被采纳。' },
        { type: 'keypoint', label: '重点·正文', text: '建议书正文要「<strong>摆问题—析原因—提对策</strong>」三步走：先用调查数据指出真实问题，再分析成因，最后分条提出可操作的对策，逻辑清晰最易被采纳。' },
        { type: 'example', label: '示范·建议书片段', text: '下面是建议书的开头片段，请体会写法。<br><br><strong>片段</strong>：「村委会并转文化站：我村六十岁以上老人占三成，但无固定活动场所。据问卷，七成老人『偶尔或从不』使用现有图书室。建议利用村口旧仓库改造成老年活动中心，预计可服务约百人。」<br><strong>评析</strong>：这段<strong>先点明对象</strong>，<strong>用数据摆问题</strong>（三成、七成），<strong>再提具体对策</strong>（旧仓库改造）。有依据、有方案、有预期，正是「问题—原因—对策」的扎实示范。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#f3f8fb"/><rect x="50" y="40" width="170" height="140" rx="8" fill="#fdeaf0" stroke="#c0392b" stroke-width="2"/><text x="135" y="110" font-size="14" fill="#9c1a2e" text-anchor="middle">摆问题</text><text x="135" y="135" font-size="12" fill="#9c1a2e" text-anchor="middle">用数据</text><rect x="255" y="40" width="170" height="140" rx="8" fill="#fef3d8" stroke="#d9a441" stroke-width="2"/><text x="340" y="110" font-size="14" fill="#7a5a1e" text-anchor="middle">析原因</text><text x="340" y="135" font-size="12" fill="#7a5a1e" text-anchor="middle">找症结</text><rect x="460" y="40" width="170" height="140" rx="8" fill="#eaf3fb" stroke="#2e6fae" stroke-width="2"/><text x="545" y="110" font-size="14" fill="#0f3b5e" text-anchor="middle">提对策</text><text x="545" y="135" font-size="12" fill="#0f3b5e" text-anchor="middle">分条列</text><path d="M220 110 h35" stroke="#555" stroke-width="3" marker-end="url(#a4)"/><path d="M425 110 h35" stroke="#555" stroke-width="3" marker-end="url(#a4)"/><text x="340" y="205" font-size="13" fill="#3e5b6b" text-anchor="middle">建议书正文三步：问题 → 原因 → 对策</text><defs><marker id="a4" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker></defs></svg>', caption: '建议书写法：先说清「是什么」，再想「为什么」，最后给「怎么办」。' },
        { type: 'heading', text: '三、办活动与做传播' },
        { type: 'list', items: ['办活动：村晚、非遗体验、老照片展、乡史讲座', '做传播：短视频、公众号、手绘文化地图', '联资源：邀请手艺人、乡贤当主角', '重互动：让乡亲参与而非只看热闹', '可持续：留下记录，方便年年延续'] },
        { type: 'keypoint', label: '重点·传播', text: '「传文化」要点是<strong>真实、有趣、有用</strong>：把老手艺拍成短视频，把村史写成推文，让外部看到、让内部珍惜。好的传播能把一次活动变成长期影响。' },
        { type: 'warn', label: '易错·分寸', text: '参与要<strong>量力、合法、尊重民意</strong>：建议可提但落实需多方协商，<strong>切忌代替他人做决定或好高骛远</strong>。越俎代庖既不民主也难落地，青年应做建设性的参与者而非包办者。' },
        { type: 'table', headers: ['参与路径', '常见形式', '关键要点'], rows: [['写建议', '建议书、公开信', '用数据、具体可行'], ['做活动', '村晚、展览、讲座', '乡亲参与、可持续'], ['传文化', '短视频、推文、地图', '真实有趣、便于传播']] },
        { type: 'heading', text: '四、单元主旨与素养' },
        { type: 'paragraph', text: '三课连起来，是一个完整的实践链条：从走近家乡（记录），到读懂家乡（调查），再到建设家乡（参与）。它培养的不仅是语文能力，更是作为现代公民的乡土情怀与社会责任感。' },
        { type: 'keypoint', label: '重点·主旨', text: '通过「记录—调查—参与」三步，本单元引导我们<strong>关心身边文化、习得调研方法、增强乡土认同与社会责任感</strong>，做有行动力的当代青年，这正是「当代文化参与」任务群的核心追求。' },
        { type: 'tip', label: '拓展·乡村振兴', text: '家乡文化建设与国家的<strong>乡村振兴</strong>战略同频共振。文化振兴是乡村振兴的灵魂——留得住乡愁、传得下文脉，乡村才有持久活力。今天的中学生参与家乡文化，正是在为未来的乡村积蓄青年力量。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4f0"/><g font-size="13" text-anchor="middle"><rect x="40" y="50" width="170" height="70" rx="8" fill="#cfe3d8" stroke="#2e8f6f" stroke-width="2"/><text x="125" y="90" fill="#1c5b46">记录</text><rect x="255" y="50" width="170" height="70" rx="8" fill="#f6c453" stroke="#d9a441" stroke-width="2"/><text x="340" y="90" fill="#5b3b12">调查</text><rect x="470" y="50" width="170" height="70" rx="8" fill="#e85d8a" stroke="#c0392b" stroke-width="2"/><text x="555" y="90" fill="#fff">参与</text></g><g stroke="#555" stroke-width="3" fill="none"><line x1="210" y1="85" x2="253" y2="85" marker-end="url(#a5)"/><line x1="425" y1="85" x2="468" y2="85" marker-end="url(#a5)"/></g><defs><marker id="a5" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 z" fill="#555"/></marker></defs><text x="340" y="155" font-size="13" fill="#2e5b46" text-anchor="middle">全流程：记录 → 调查 → 参与（知行合一）</text></svg>', caption: '三课一体：从认识家乡到建设家乡。' },
        { type: 'list', items: ['本单元最后一课，强调化调查为行动', '参与三路径：写建议、做活动、传文化', '建议书格式：标题、称呼、正文、落款', '正文三步：摆问题—析原因—提对策', '参与须量力合法、尊重民意，不包办', '单元主旨：知行合一，培养有行动力的当代青年'] }
      ],
      exercises: [
        { type: 'choice', question: '「参与家乡文化建设」不提倡的做法是？', options: ['写建议书反映问题', '组织一次文化宣传活动', '代替全村人做所有决定', '制作家乡风物短视频'], answer: '代替全村人做所有决定', explanation: '参与强调尊重民意、合法协商、量力而行。越俎代庖替他人做主既不民主也难落实。青年应做建设性的参与者而非包办者，建议可行、活动务实才是正道。' },
        { type: 'choice', question: '建议书正文最合理的结构是？', options: ['抒情—感叹—口号', '摆问题—析原因—提对策', '只写对策', '只写表扬'], answer: '摆问题—析原因—提对策', explanation: '建议书是务实的应用文，正文应先以调查数据摆出真实问题，再分析成因，最后分条提出可操作对策，逻辑清晰才易被采纳，避免空喊口号或只唱赞歌。' },
        { type: 'fill', question: '建议书格式一般包含标题、称呼、______、落款（署名与日期）四部分。', answer: '正文', explanation: '标准建议书由标题（表明事由）、称呼（送达对象）、正文（问题—原因—对策）、落款（提议人及日期）组成。格式规范、语气得体，才能让建议显得郑重而被重视。' },
        { type: 'choice', question: '本单元「记录—调查—参与」三步的最终目的是？', options: ['完成作文任务即可', '培养关心身边文化、有行动力的当代青年', '取代政府工作', '收集素材发朋友圈'], answer: '培养关心身边文化、有行动力的当代青年', explanation: '「当代文化参与」任务群重在真实情境中的实践与反思：从记录熟悉家乡，到调查发现问题，再到参与建设，逐步培养乡土认同、调研能力与社会责任感，这正是素养导向的体现。' },
        { type: 'choice', question: '为家乡老手艺写宣传短视频脚本，属于哪种参与路径？', options: ['写建议', '做传播（传文化）', '办活动', '纯娱乐'], answer: '做传播（传文化）', explanation: '把家乡老手艺拍成短视频，是在「传播文化」——让更多人了解、关注、珍视本土文化。它与写建议（文本建言）、办活动（实践参与）并列，都是青年参与家乡文化建设的可行路径。' }
      ]
    }
  );
})();
