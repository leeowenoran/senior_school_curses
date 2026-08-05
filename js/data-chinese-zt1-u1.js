/* 语文 · 高考复习 · 一、现代文阅读（zt1）：信息类文本阅读、文学类文本阅读 */
(function () {
  var v = gzGetVolume('chinese', 'zt1');
  if (!v) return;

  /* —— 子板块 1：信息类文本阅读 —— */
  v.points.push({
    id: 'zt1-info',
    name: '信息类文本阅读',
    chapter: '一、现代文阅读',
    difficulty: '中等',
    content: [
      { type: 'heading', text: '一、题型概览' },
      { type: 'paragraph', text: '信息类文本阅读含论述类与实用类文本。论述类多为社科论文、时评、随笔；实用类多为新闻、调查报告、传记、科普文章。本板块重点考查信息筛选与整合、逻辑分析与推断、观点概括与评价。' },
      { type: 'list', items: [
        '筛选并整合文中的关键信息',
        '分析论证思路、结构与手法',
        '理解重要概念和重要句子',
        '概括作者在文中的观点态度',
        '根据文本进行合理推断与评价'
      ] },
      { type: 'keypoint', text: '<strong>两大抓手</strong>：论述类抓"论点—论据—论证"三要素；实用类抓"事实—数据—结论"的对应关系。读文时先标段落层次，再回原文定位比对。' },
      { type: 'table', headers: ['文本类型', '典型材料', '常考角度'], rows: [
        ['论述类', '社科论文、时评', '论点辨析、论证结构、推理判断'],
        ['实用类', '新闻、传记、调查报告', '信息整合、图表解读、价值评价']
      ] },
      { type: 'tip', text: '<strong>答题顺序</strong>：先读题目圈关键词，再带着问题速读全文，定位区间后逐句比对选项。常见设误类型有偷换概念、以偏概全、无中生有、因果倒置、混淆时态。' },
      { type: 'warn', text: '易错点：把"他人观点或引述观点"误当作"作者观点"；把"合理推断"当成"原文直说"；把"局部信息"当作"整体结论"。' },
      { type: 'example', text: '示例（高考风格）：下列对原文论证的相关分析，正确的一项是（ ）。A. 文章先提出观点再逐层批驳 B. 文章以举例为主展开论证 C. 文章采用对比结构突出差异 D. 文章结尾归结出中心结论。思路：题干问"论证分析"，应回原文梳理"提出—分析—结论"的结构，再排除与原文不符的项。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#f3f7fc"/><text x="20" y="32" font-size="18" fill="#2f5d9e" font-weight="bold">信息类文本阅读 · 题型构成</text><rect x="40" y="70" width="180" height="60" rx="8" fill="#dce8f7" stroke="#2f5d9e"/><text x="130" y="105" font-size="14" fill="#1f3a5f" text-anchor="middle">论述类文本</text><rect x="250" y="70" width="180" height="60" rx="8" fill="#dce8f7" stroke="#2f5d9e"/><text x="340" y="105" font-size="14" fill="#1f3a5f" text-anchor="middle">实用类文本</text><rect x="460" y="70" width="180" height="60" rx="8" fill="#e9f3e3" stroke="#3f7d1e"/><text x="550" y="100" font-size="13" fill="#2e3a22" text-anchor="middle">共同考查</text><text x="550" y="118" font-size="12" fill="#2e3a22" text-anchor="middle">信息加逻辑</text><polygon points="220,100 248,100 234,92 248,100 234,108" fill="#2f5d9e"/><polygon points="430,100 458,100 444,92 458,100 444,108" fill="#3f7d1e"/></svg>', caption: '信息类文本分论述类与实用类，二者共同考查信息筛选与逻辑思辨。' }
    ],
    exercises: [
      { type: 'choice', question: '下列属于实用类文本的是（ ）。', options: ['小说', '社科论文与新闻通讯', '散文', '诗歌'], answer: '社科论文与新闻通讯', explanation: '实用类文本以传递信息为目的，典型材料包括新闻、传记、调查报告、科普文章等；小说与散文属于文学类文本，诗歌属于文学体裁，均不属于实用类文本范畴。' },
      { type: 'choice', question: '论述类文本阅读的核心要素是（ ）。', options: ['人物、情节、环境', '论点、论据、论证', '意象、意境、情感', '字词、句式、修辞'], answer: '论点、论据、论证', explanation: '论述类文本以说理为目的，其阅读应抓住论点、论据、论证三要素，理清作者如何提出观点并用材料证明；其余选项分别是小说、诗歌、语言运用相关要素。' },
      { type: 'fill', question: '信息类文本阅读中，选项常设的陷阱包括偷换概念、以偏概全、______等。', answer: '无中生有', explanation: '除偷换概念、以偏概全外，常见设误还有无中生有、因果倒置、混淆时态、张冠李戴等。答题时须逐句回原文比对，不能凭印象判断。' },
      { type: 'choice', question: '阅读信息类文本时，先读题目再读文的主要目的是（ ）。', options: ['节省时间不读全文', '带着问题定向定位信息', '直接背诵全文', '寻找错别字'], answer: '带着问题定向定位信息', explanation: '先读题目能明确考查区间与关键词，再速读全文时有意识定位相关语句，可大幅提高比对效率与准确率，而非盲目通读或跳读。' },
      { type: 'fill', question: '概括作者观点态度时，应区分"作者观点"与______观点。', answer: '他人或引述', explanation: '文中常引述他人看法作为论据，这些并非作者本人的态度。概括时必须分清哪些是作者主张、哪些是引述材料，避免张冠李戴。' }
    ]
  });

  /* —— 子板块 2：文学类文本阅读 —— */
  v.points.push({
    id: 'zt1-lit',
    name: '文学类文本阅读',
    chapter: '一、现代文阅读',
    difficulty: '较难',
    content: [
      { type: 'heading', text: '一、题型概览' },
      { type: 'paragraph', text: '文学类文本阅读以小说、散文为主，偶有戏剧、现代诗歌。重点考查对形象、语言、表达技巧的鉴赏，以及对思想情感、主旨意蕴的探究，强调审美体验与个性化解读。' },
      { type: 'list', items: [
        '分析人物形象、环境与物象的作用',
        '赏析语言特色与表达技巧',
        '概括情节结构并分析其效果',
        '探究主旨意蕴与作者情感态度',
        '对作品进行个性化解读与评价'
      ] },
      { type: 'keypoint', text: '<strong>小说三要素</strong>：人物、情节、环境。答题时环境描写常从"交代背景、渲染气氛、烘托人物、推动情节、暗示主题"等角度切入；散文则重"形散神聚"，抓线索与情感脉络。' },
      { type: 'table', headers: ['题型', '设问方式', '答题要点'], rows: [
        ['形象赏析', '某某是一个怎样的人', '身份、性格、命运，结合言行分析'],
        ['技巧鉴赏', '画线句有何表达效果', '手法加内容加情感加效果'],
        ['意蕴探究', '结尾有何深意', '表层义、深层义、主旨义']
      ] },
      { type: 'tip', text: '<strong>表达效果答题公式</strong>：明确手法（修辞或表现手法）加结合文本分析加传达的情感或达到的效果。宁可多写角度，也要避免只答术语不结合材料。' },
      { type: 'warn', text: '易错点：赏析只写"生动形象"等套话而不结合原文；把"环境描写"作用答成"铺垫情节"却说不清铺垫了什么；探究题脱离文本空发议论。' },
      { type: 'example', text: '示例（高考风格）：文中画线句子运用了什么修辞手法？有怎样的表达效果？思路：先判定为比喻或拟人等手法，再指出本体与喻体，最后说明其如何突出特征、强化情感，做到手法、内容、效果三结合。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#fbf3f7"/><text x="20" y="32" font-size="18" fill="#9e2f6f" font-weight="bold">文学类文本阅读 · 鉴赏维度</text><rect x="40" y="70" width="160" height="60" rx="8" fill="#f3dce9" stroke="#9e2f6f"/><text x="120" y="105" font-size="14" fill="#5f1f46" text-anchor="middle">形象</text><rect x="230" y="70" width="160" height="60" rx="8" fill="#f3dce9" stroke="#9e2f6f"/><text x="310" y="105" font-size="14" fill="#5f1f46" text-anchor="middle">语言</text><rect x="420" y="70" width="160" height="60" rx="8" fill="#f3dce9" stroke="#9e2f6f"/><text x="500" y="105" font-size="14" fill="#5f1f46" text-anchor="middle">技巧</text><rect x="250" y="148" width="180" height="40" rx="8" fill="#e9f3e3" stroke="#3f7d1e"/><text x="340" y="173" font-size="13" fill="#2e3a22" text-anchor="middle">指向主旨意蕴</text></svg>', caption: '文学类阅读从形象、语言、技巧三个维度切入，最终指向对主旨意蕴的理解。' }
    ],
    exercises: [
      { type: 'choice', question: '小说三要素指的是（ ）。', options: ['人物、情节、环境', '论点、论据、论证', '意象、意境、情感', '起承转合'], answer: '人物、情节、环境', explanation: '小说三要素是人物、情节、环境，三者共同服务于主题表达；论点论据论证属论述类文本，意象意境情感属诗歌鉴赏，起承转合属文章结构。' },
      { type: 'choice', question: '赏析画线句表达效果时，最完整的答题思路是（ ）。', options: ['只写生动形象', '手法加内容加情感效果', '只抄原句', '只写作者心情'], answer: '手法加内容加情感效果', explanation: '表达效果题须三步：先点明所用手法，再结合文本具体分析，最后说明传达的情感或达到的效果，空泛套话无法得分。' },
      { type: 'fill', question: '散文的特征常被概括为"形散而______聚"。', answer: '神', explanation: '散文看似题材自由、结构松散，但始终围绕一个中心情感或主旨展开，即"形散神聚"，阅读时要抓住线索与情感脉络。' },
      { type: 'choice', question: '环境描写的作用一般不包括（ ）。', options: ['交代时代背景', '渲染气氛烘托人物', '直接给出标准答案', '推动情节发展'], answer: '直接给出标准答案', explanation: '环境描写可交代背景、渲染气氛、烘托人物、推动情节、暗示主题，但不会在文中直接给出考题的标准答案，须由读者结合文本分析得出。' },
      { type: 'fill', question: '探究题作答须立足______，避免脱离文本空发议论。', answer: '文本', explanation: '探究题虽鼓励个性化解读，但所有结论都必须从文本出发、有依据支撑，不能抛开原文主观发挥，这是高考评分的基本要求。' }
    ]
  });
})();
