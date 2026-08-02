/* 生物学 · 选择性必修3 生物技术与工程 · 第4章 · 课时：第2节 关注生殖性克隆人 */
(function () {
  var v = gzGetVolume('biology', 'xb3');
  if (!v) return;
  v.points.push({
    id: 'xb3-u13',
    name: '第2节 关注生殖性克隆人',
    chapter: '选择性必修3 生物技术与工程 · 第4章 生物技术的安全性与伦理问题',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、克隆技术的分类' },
      { type: 'paragraph', text: '克隆是指用生物体细胞来培育新个体。大家熟悉的克隆羊多莉，是用一只成年羊的体细胞（乳腺细胞）的细胞核，移植到另一只羊的去核卵子里，发育成胚胎再生出来的。根据目的不同，克隆技术分为两大类：治疗性克隆和生殖性克隆，二者走到不同阶段就分道扬镳了。' },
      { type: 'list', items: [
        '治疗性克隆：目的是治病，不培育完整的人。',
        '生殖性克隆：目的是生出一个完整的克隆人。',
        '两者起点相同，终点不同，伦理评价也完全不同。'
      ] },
      { type: 'keypoint', text: '治疗性克隆：取患者自身的体细胞核，移植到去核卵母细胞中，在体外培养成早期胚胎，再从胚胎中取出<strong>干细胞</strong>用于治疗。这些干细胞能分化成多种细胞，可用来修复受损组织，且因为来自患者自己，一般不会被免疫系统排斥。它不孕育成个体。' },
      { type: 'paragraph', text: '治疗性克隆的关键价值在于“配型相合”。用患者自己的细胞做出来的干细胞，移植回患者体内时，免疫系统会把它当成“自己人”，不会发动攻击。这给糖尿病、帕金森病、脊髓损伤等难治疾病带来了新希望。' },
      { type: 'example', text: '一位烧伤患者需要新皮肤。科学家可以用他自己的皮肤细胞做治疗性克隆，得到干细胞后诱导分化成皮肤细胞，再移植回去，既补上了皮肤，又不用担心排异反应。' },
      { type: 'warn', text: '生殖性克隆人存在严重伦理问题：它把人当作“制造品”，冲击家庭与社会关系，造成身份认同混乱，而且目前技术很不成熟，克隆动物畸形率高、早夭多，用在人身上极不道德也极危险。' },
      { type: 'list', items: [
        '违背伦理道德：人不应被复制和物化。',
        '冲击家庭社会关系：谁是孩子真正的父母难以界定。',
        '身份认同混乱：克隆人可能背负“复制品”的心理压力。',
        '技术不成熟：畸形率高，健康风险大。'
      ] },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 320" font-family="sans-serif"><rect x="0" y="0" width="680" height="320" fill="#eef6e4"/><text x="340" y="30" text-anchor="middle" font-size="20" font-weight="bold" fill="#3f7d1e">治疗性克隆与生殖性克隆对比</text><rect x="220" y="50" width="240" height="44" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="77" text-anchor="middle" font-size="15" fill="#2e3a22">体细胞核 + 去核卵母细胞</text><polygon points="340,94 332,104 348,104" fill="#3f7d1e"/><rect x="220" y="104" width="240" height="44" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="131" text-anchor="middle" font-size="15" fill="#2e3a22">体外培养成早期胚胎</text><polygon points="250,148 242,158 258,158" fill="#3f7d1e"/><polygon points="430,148 422,158 438,158" fill="#3f7d1e"/><rect x="40" y="158" width="200" height="110" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="140" y="190" text-anchor="middle" font-size="15" font-weight="bold" fill="#3f7d1e">治疗性克隆</text><text x="140" y="216" text-anchor="middle" font-size="13" fill="#2e3a22">取干细胞治病</text><text x="140" y="238" text-anchor="middle" font-size="13" fill="#2e3a22">不孕育成个体</text><text x="140" y="258" text-anchor="middle" font-size="13" fill="#2e3a22">被允许研究</text><rect x="440" y="158" width="200" height="110" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="540" y="190" text-anchor="middle" font-size="15" font-weight="bold" fill="#3f7d1e">生殖性克隆</text><text x="540" y="216" text-anchor="middle" font-size="13" fill="#2e3a22">胚胎植入子宫</text><text x="540" y="238" text-anchor="middle" font-size="13" fill="#2e3a22">孕育成完整个体</text><text x="540" y="258" text-anchor="middle" font-size="13" fill="#2e3a22">被普遍禁止</text></svg>', caption: '治疗性克隆取干细胞治病不孕育个体，生殖性克隆则孕育完整克隆人。' },
      { type: 'heading', text: '二、生殖性克隆人的伦理问题' },
      { type: 'paragraph', text: '生殖性克隆是把克隆出来的胚胎植入子宫，让它发育成一个完整的人。这样做会带来一连串社会和伦理难题。比如，克隆出来的孩子和提供细胞核的人是什么关系？是兄弟姐妹、子女，还是复制品？家庭和社会关系都会变得混乱。' },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 280" font-family="sans-serif"><rect x="0" y="0" width="680" height="280" fill="#eef6e4"/><text x="340" y="30" text-anchor="middle" font-size="20" font-weight="bold" fill="#3f7d1e">生殖性克隆人的伦理问题</text><rect x="50" y="70" width="160" height="80" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="130" y="100" text-anchor="middle" font-size="14" font-weight="bold" fill="#2e3a22">违背伦理</text><text x="130" y="124" text-anchor="middle" font-size="12" fill="#2e3a22">人不应被复制</text><rect x="260" y="70" width="160" height="80" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="100" text-anchor="middle" font-size="14" font-weight="bold" fill="#2e3a22">冲击家庭</text><text x="340" y="124" text-anchor="middle" font-size="12" fill="#2e3a22">亲子关系混乱</text><rect x="470" y="70" width="160" height="80" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="550" y="100" text-anchor="middle" font-size="14" font-weight="bold" fill="#2e3a22">身份混乱</text><text x="550" y="124" text-anchor="middle" font-size="12" fill="#2e3a22">复制品压力</text><rect x="260" y="180" width="160" height="70" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="208" text-anchor="middle" font-size="14" font-weight="bold" fill="#2e3a22">技术不成熟</text><text x="340" y="230" text-anchor="middle" font-size="12" fill="#2e3a22">畸形率高、危险</text><polygon points="190,148 130,160 250,160" fill="#3f7d1e"/><polygon points="410,148 350,160 470,160" fill="#3f7d1e"/><polygon points="550,150 550,172 540,164" fill="#3f7d1e"/><polygon points="340,150 340,172 330,164" fill="#3f7d1e"/></svg>', caption: '生殖性克隆人面临违背伦理、冲击家庭、身份混乱、技术不成熟四大问题。' },
      { type: 'keypoint', text: '我国对生殖性克隆人的态度非常明确，用四个“不”概括：<strong>不赞成、不允许、不支持、不接受</strong>任何生殖性克隆人实验。这与国际社会的普遍立场一致。' },
      { type: 'tip', text: '国际社会普遍禁止生殖性克隆人。许多国家和国际组织都通过宣言或法律明确反对，因为这关系到人类尊严和基本伦理底线。' },
      { type: 'heading', text: '三、试管婴儿与设计试管婴儿' },
      { type: 'paragraph', text: '试管婴儿是把卵子和精子在体外受精，培养成早期胚胎后再植入母体子宫。设计试管婴儿在此基础上，于胚胎植入前做<strong>遗传学诊断（PGD）</strong>，筛掉带有严重遗传病基因的胚胎，选择健康的胚胎植入，用来避免生出患遗传病的孩子。' },
      { type: 'list', items: [
        '试管婴儿：体外受精后直接选择健康胚胎植入。',
        '设计试管婴儿：植入前做遗传学诊断（PGD）筛选特定胚胎。',
        '设计试管婴儿的目的通常是避免严重遗传病。'
      ] },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 300" font-family="sans-serif"><rect x="0" y="0" width="680" height="300" fill="#eef6e4"/><text x="340" y="30" text-anchor="middle" font-size="20" font-weight="bold" fill="#3f7d1e">试管婴儿与设计试管婴儿的区别</text><rect x="50" y="70" width="240" height="160" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="170" y="100" text-anchor="middle" font-size="16" font-weight="bold" fill="#3f7d1e">试管婴儿</text><text x="170" y="130" text-anchor="middle" font-size="13" fill="#2e3a22">体外受精</text><text x="170" y="152" text-anchor="middle" font-size="13" fill="#2e3a22">培养成胚胎</text><text x="170" y="174" text-anchor="middle" font-size="13" fill="#2e3a22">直接植入子宫</text><text x="170" y="196" text-anchor="middle" font-size="13" fill="#2e3a22">不筛选遗传病</text><rect x="390" y="70" width="240" height="160" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="510" y="100" text-anchor="middle" font-size="16" font-weight="bold" fill="#3f7d1e">设计试管婴儿</text><text x="510" y="130" text-anchor="middle" font-size="13" fill="#2e3a22">体外受精</text><text x="510" y="152" text-anchor="middle" font-size="13" fill="#2e3a22">植入前做PGD诊断</text><text x="510" y="174" text-anchor="middle" font-size="13" fill="#2e3a22">筛掉致病基因胚胎</text><text x="510" y="196" text-anchor="middle" font-size="13" fill="#2e3a22">选健康胚胎植入</text><polygon points="290,150 380,140 380,160" fill="#3f7d1e"/><text x="335" y="135" text-anchor="middle" font-size="12" fill="#5aa832">多一步诊断</text></svg>', caption: '设计试管婴儿比试管婴儿多了植入前遗传学诊断（PGD）筛选这一步。' },
      { type: 'table', headers: ['比较项目', '试管婴儿', '设计试管婴儿'], rows: [
        ['受精方式', '体外受精', '体外受精'],
        ['是否做PGD', '一般不做', '植入前做遗传学诊断'],
        ['主要目的', '解决不孕', '避免严重遗传病'],
        ['伦理要求', '需知情同意', '需严格伦理审查与知情同意']
      ] },
      { type: 'example', text: '一对夫妻都携带地中海贫血致病基因，自然怀孕可能生下重病孩子。他们可以选择设计试管婴儿：在胚胎阶段做PGD，挑出不带致病基因的胚胎植入，从而生下健康宝宝。' },
      { type: 'tip', text: '无论是治疗性克隆还是设计试管婴儿，都必须在伦理委员会审查下进行，并充分保障当事人的知情同意权，绝不能为非医学目的（如选择性别、制造“定制人”）而滥用。' },
      { type: 'warn', text: '生殖性克隆人技术目前仍很不成熟，克隆动物常见畸形、器官缺陷和早夭。把这种不成熟技术用在人身上，既违背伦理，也极度危险，因此必须坚决禁止。' }
    ],
    exercises: [
      { type: 'choice', question: '治疗性克隆的主要目的是什么？', options: ['制取胚胎干细胞用于治疗，不孕育成个体', '孕育出与供体相同的完整个体', '制造克隆人用于器官买卖', '培育转基因动物'], answer: '制取胚胎干细胞用于治疗，不孕育成个体', explanation: '治疗性克隆把患者体细胞核移植到去核卵母细胞，培养成早期胚胎后取干细胞用于治疗，目的是治病且不孕育成完整个体，不违反伦理。' },
      { type: 'choice', question: '我国对生殖性克隆人的态度是下列哪一项？', options: ['不赞成、不允许、不支持、不接受', '完全开放并鼓励', '仅允许科研用途的克隆人', '不禁止也不支持'], answer: '不赞成、不允许、不支持、不接受', explanation: '我国对生殖性克隆人明确坚持“四不”方针，即不赞成、不允许、不支持、不接受任何生殖性克隆人实验，与国际社会普遍禁止的立场一致。' },
      { type: 'choice', question: '设计试管婴儿与常规试管婴儿的主要区别是？', options: ['设计试管婴儿在植入前做遗传学诊断（PGD）筛选特定胚胎', '设计试管婴儿不需要体外受精', '设计试管婴儿一定生男孩', '二者没有任何区别'], answer: '设计试管婴儿在植入前做遗传学诊断（PGD）筛选特定胚胎', explanation: '设计试管婴儿在胚胎植入子宫前做遗传学诊断（PGD），筛掉携带严重致病基因的胚胎，选择健康胚胎植入，以此避免遗传病，这是它与常规试管婴儿的关键区别。' },
      { type: 'fill', question: '在治疗性克隆中，通常把患者体细胞的细胞核移植到______（填：去核卵母细胞或受精卵）中。', answer: '去核卵母细胞', explanation: '治疗性克隆将体细胞核移入去核卵母细胞，利用卵细胞质重编程细胞核，使其在体外发育为早期胚胎，再取干细胞用于治疗。' },
      { type: 'fill', question: '为避免严重遗传病，设计试管婴儿在胚胎植入前要进行遗传学诊断，其英文缩写是______。', answer: 'PGD', explanation: 'PGD是胚胎植入前遗传学诊断的英文缩写，用于在胚胎植入子宫前筛查致病基因，挑选健康胚胎，避免遗传病患儿出生。' }
    ]
  });
})();
