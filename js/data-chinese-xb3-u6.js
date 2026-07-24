(function () {
  var v = gzGetVolume('chinese', 'xb3');
  if (!v) return;
  v.points.push(

    /* ===================== 附录 重点积累 ===================== */

    { id: 'xb3-u6-l1', name: '《本册重点积累》', author: '教材附录', chapter: '附录 重点积累', difficulty: '简单',
      content: [
        { type: 'heading', text: '一、本册知识框架' },
        { type: 'paragraph', text: '选择性必修下册涵盖古诗文与现当代作品，本归纳板聚焦于需要长期积累的文言基础与背诵内容，按“字音字形—实词虚词—成语典故—文化常识—背诵默写”五大模块系统梳理，便于复习时查漏补缺。' },
        { type: 'keypoint', label: '五大积累模块', text: '本册积累可归为：<strong>易错字音字形</strong>、<strong>重点文言实词与虚词</strong>、<strong>常考成语典故</strong>、<strong>古代文化常识</strong>、<strong>背诵默写篇目</strong>。五者相互勾连，是文言文阅读与默写题的基础。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">本册知识框架</text><circle cx="340" cy="120" r="44" fill="#9c4221"/><text x="340" y="116" text-anchor="middle" font-size="13" fill="#fff">积累</text><text x="340" y="136" text-anchor="middle" font-size="11" fill="#fff">总纲</text><circle cx="110" cy="60" r="34" fill="#7aa05a"/><text x="110" y="64" text-anchor="middle" font-size="12" fill="#fff">字音形</text><circle cx="110" cy="180" r="34" fill="#c08168"/><text x="110" y="184" text-anchor="middle" font-size="12" fill="#fff">实虚词</text><circle cx="340" cy="200" r="34" fill="#a8632e"/><text x="340" y="204" text-anchor="middle" font-size="12" fill="#fff">成语典</text><circle cx="570" cy="60" r="34" fill="#c0473a"/><text x="570" y="64" text-anchor="middle" font-size="12" fill="#fff">文化常</text><circle cx="570" cy="180" r="34" fill="#9c4221"/><text x="570" y="184" text-anchor="middle" font-size="12" fill="#fff">背诵篇</text><path d="M146 78 L296 96" stroke="#9c4221" stroke-width="2"/><path d="M146 162 L296 138" stroke="#9c4221" stroke-width="2"/><path d="M340 164 L340 146" stroke="#9c4221" stroke-width="2"/><path d="M534 78 L384 96" stroke="#9c4221" stroke-width="2"/><path d="M534 162 L384 138" stroke="#9c4221" stroke-width="2"/></svg>', caption: '以“积累总纲”统摄字音字形、实虚词、成语典故、文化常识、背诵篇目五大模块。' },
        { type: 'heading', text: '二、易错字音字形' },
        { type: 'table', headers: ['字词', '读音', '易错提示'], rows: [['氓', 'méng', '不读 máng，指百姓、民'], ['蚩蚩', 'chī chī', '一种憨厚痴笑的样子'], ['扪参', 'mén shēn', '参为星宿名，不读 cān'], ['踯躅', 'zhí zhú', '徘徊不前'], ['醅', 'pēi', '未滤的浊酒，不读 pī'], ['霁', 'jì', '雨雪停、天放晴']] },
        { type: 'list', items: ['“萧”与“箫”：风萧萧（风声）vs 洞箫（乐器）', '“沧”与“苍”：沧海vs苍天', '“唯”与“惟”：唯利是图vs惟妙惟肖', '“即”与“既”：若即若离vs既往不咎'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">易错字归纳</text><rect x="50" y="60" width="270" height="70" rx="8" fill="#e8d9b0" stroke="#cbb89d"/><text x="185" y="92" text-anchor="middle" font-size="13" fill="#5b2c16">萧（风）/ 箫（乐）</text><text x="185" y="116" text-anchor="middle" font-size="12" fill="#555">同音形近易混</text><rect x="360" y="60" width="270" height="70" rx="8" fill="#e8d9b0" stroke="#cbb89d"/><text x="495" y="92" text-anchor="middle" font-size="13" fill="#5b2c16">沧（海）/ 苍（天）</text><text x="495" y="116" text-anchor="middle" font-size="12" fill="#555">偏旁表义不同</text><rect x="50" y="150" width="270" height="60" rx="8" fill="#f3e3d3" stroke="#cbb89d"/><text x="185" y="184" text-anchor="middle" font-size="13" fill="#5b2c16">即（就）/ 既（已）</text><rect x="360" y="150" width="270" height="60" rx="8" fill="#f3e3d3" stroke="#cbb89d"/><text x="495" y="184" text-anchor="middle" font-size="13" fill="#5b2c16">唯（独）/ 惟（思）</text></svg>', caption: '从同音形近、偏旁表义、时态副词三个角度归纳本册易错字。' },
        { type: 'warn', label: '易混读音', text: '“参”是多音字：在“扪参历井”中读 shēn（星宿）；在“参加”中读 cān；在“参差”中读 cēn。“禅”在“禅让”读 shàn，在“禅宗”读 chán。积累时需据义定音，避免惯性误读。' },
        { type: 'heading', text: '三、重点文言实词与虚词' },
        { type: 'table', headers: ['实词', '义项', '例句'], rows: [['爽', '差错、过失', '女也不爽（《氓》）'], ['耽', '沉溺、迷恋', '无与士耽（《氓》）'], ['替', '废弃、贬黜', '謇朝谇而夕替（《离骚》）'], ['了却', '完成、了结', '痴儿了却公家事（《登快阁》）'], ['缘', '因为', '花径不曾缘客扫（《客至》）']] },
        { type: 'table', headers: ['虚词', '用法', '例句'], rows: [['之', '助词“的”/ 代词', '氓之蚩蚩 / 总角之宴'], ['以', '连词表目的', '乘彼垝垣，以望复关'], ['其', '代词“他（她）的”', '静言思之，躬自悼矣'], ['于', '介词“在/向”', '送子涉淇，至于顿丘'], ['而', '连词表转折', '青眼聊因美酒横（而）']] },
        { type: 'list', items: ['通假字：于→吁、说→脱、泮→畔、错→措、圜→圆', '一词多义：相（骨相/偏指我/偏指你）、就（接近/完成）', '词类活用：名作动、使动、意动，需结合语境判断'] },
        { type: 'heading', text: '四、常考成语与典故' },
        { type: 'list', items: ['夙兴夜寐：早起晚睡，形容勤奋（出自《氓》）', '九死不悔：纵死多次也不后悔，形容意志坚定（出自《离骚》）', '红豆相思：代指男女相思（出自王维诗，常考）', '青眼有加：对人器重、喜爱（出自阮籍典）', '盟鸥：喻隐逸淡泊、无机心（出自《列子》典）'] },
        { type: 'table', headers: ['成语', '出处/典故', '常用语境'], rows: [['夙兴夜寐', '《诗经·卫风·氓》', '勤勉持家、治学'], ['九死不悔', '屈原《离骚》', '坚守理想、不屈不挠'], ['青眼有加', '阮籍青白眼', '受人赏识、器重'], ['投闲置散', '韩愈文', '不被任用、闲居']] },
        { type: 'tip', label: '积累提示', text: '成语积累建议“溯源+用例”双线：先记出自哪篇课文或典故，再记现代常用语境。这样既能应对默写与文学常识题，也能在作文中准确化用，避免望文生义。' },
        { type: 'heading', text: '五、古代文化常识' },
        { type: 'list', items: ['六义：风、雅、颂（音乐分类）；赋、比、兴（表现手法）', '纪年：建安、上元、元丰、淳熙皆帝王年号', '年龄：弱冠（男20）、而立（30）、不惑（40）、花甲（60）', '职官：县令（百里侯）、参军（军事属官）、转运使（财政官）', '称谓：明府（对县令尊称）、居士（自号）、道人（方外号）'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#fbf6ef"/><text x="340" y="26" text-anchor="middle" font-size="17" font-weight="bold" fill="#9c4221">背诵篇目思维导图</text><circle cx="340" cy="120" r="42" fill="#9c4221"/><text x="340" y="116" text-anchor="middle" font-size="13" fill="#fff">背诵</text><text x="340" y="136" text-anchor="middle" font-size="11" fill="#fff">默写篇目</text><circle cx="130" cy="120" r="40" fill="#7aa05a"/><text x="130" y="124" text-anchor="middle" font-size="12" fill="#fff">古诗词</text><text x="130" y="142" text-anchor="middle" font-size="11" fill="#fff">诵读4首</text><circle cx="550" cy="120" r="40" fill="#c08168"/><text x="550" y="124" text-anchor="middle" font-size="12" fill="#fff">文言文</text><text x="550" y="142" text-anchor="middle" font-size="11" fill="#fff">数篇</text><text x="250" y="80" font-size="11" fill="#555">拟行路难</text><text x="250" y="100" font-size="11" fill="#555">客至</text><text x="250" y="120" font-size="11" fill="#555">登快阁</text><text x="250" y="140" font-size="11" fill="#555">临安春雨</text><text x="470" y="100" font-size="11" fill="#555">陈情表</text><text x="470" y="120" font-size="11" fill="#555">项脊轩志</text><text x="470" y="140" font-size="11" fill="#555">归去来辞</text><path d="M170 120 L298 120" stroke="#9c4221" stroke-width="2"/><path d="M510 120 L382 120" stroke="#9c4221" stroke-width="2"/></svg>', caption: '背诵默写篇目分“古诗词诵读4首”与“文言文数篇”两大支，构建记忆导图。' },
        { type: 'keypoint', label: '背诵篇目清单', text: '本册要求背诵的篇目主要包括：古诗词诵读四首——<strong>《拟行路难（其四）》《客至》《登快阁》《临安春雨初霁》</strong>；文言文如<strong>《陈情表》《项脊轩志》《归去来兮辞（并序）》《石钟山记》</strong>等。具体以教材与考试说明为准，宜分散背诵、循环巩固。' },
        { type: 'heading', text: '六、易错警示与自测' },
        { type: 'warn', label: '默写易错', text: '默写最易在通假字、生僻字上失分：如“于嗟鸠兮”的“于”、“犹可说也”的“说”、“隰则有泮”的“泮”皆通假；又如“砯崖”“峥嵘”“崔嵬”等形声字需按偏旁准确书写，不可凭音臆造。' },
        { type: 'example', label: '自测例题', text: '下列句子默写有误的一项是：A. 泻水置平地，各自东西南北流；B. 落木千山天远大，澄江一道月分明；C. 小楼一夜听春雨，深巷明朝买杏花；D. 心非木石岂无感？吞声踯躅不敢言。<br>答案：C 项应为“卖杏花”而非“买杏花”，“卖”写错即丢分，可见形近字是默写重灾区。' },
        { type: 'reading', text: '自测建议：每周用“遮写法”自测一篇背诵篇目，错字用红笔订正三遍；同时将本课五大模块做成随身卡片，利用碎片时间循环记忆，积少成多。' }
      ],
      exercises: [
        { type: 'choice', question: '下列对《陈情表》“舅夺母志”中“夺”的解释，正确的一项是？', options: ['抢夺', '改变', '失去', '屈服'], answer: '改变', explanation: '“舅夺母志”指舅父改变了母亲守节不再嫁的志向（迫使她改嫁）。“夺”在此意为“强行改变”，而非抢夺或失去。这是文言实词考查的常见义项，需结合语境准确理解，故选“改变”。' },
        { type: 'fill', question: '《诗经》按音乐分为风、雅、颂，其表现手法“赋、比、__”三者合称“六义”。', answer: '兴', explanation: '《诗经》的“六义”包括按内容分类的风、雅、颂和按表现手法分类的赋、比、兴。题干已列赋与比，所缺的第三种表现手法即“兴”，指先言他物以引起所咏之词。' },
        { type: 'choice', question: '下列成语中，出自本册课文《氓》的一项是？', options: ['守株待兔', '夙兴夜寐', '刻舟求剑', '画蛇添足'], answer: '夙兴夜寐', explanation: '“夙兴夜寐”出自《诗经·卫风·氓》：“夙兴夜寐，靡有朝矣”，形容早起晚睡、勤劳不懈。其余三项均出自先秦寓言或杂事，不在本册课文范围内，故选“夙兴夜寐”。' },
        { type: 'fill', question: '古代男子__岁称“弱冠”，束发加冠，泛指男子成年。', answer: '二十', explanation: '“弱冠”指男子二十岁。古代男子二十行冠礼，因身体尚弱未壮，故称“弱冠”。与之对应的年龄称谓还有三十而立、四十不惑、六十花甲等，是文化常识题常考内容。' },
        { type: 'choice', question: '下列篇目中，属于本册“古诗词诵读”板块要求背诵的是？', options: ['《蜀道难》', '《扬州慢》', '《拟行路难（其四）》', '《望海潮》'], answer: '《拟行路难（其四）》', explanation: '《拟行路难（其四）》属选择性必修下册“古诗词诵读”板块，为教材要求背诵篇目。其余三项均出自本册第一单元“诗的国度”，不属于“古诗词诵读”板块，故应选此项。' }
      ]
    }

  );
})();
