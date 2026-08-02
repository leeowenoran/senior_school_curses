/* 思想政治 · 选择性必修2 · 法律与生活 · 第三课 订约履约 诚信为本 */
(function () {
  var v = gzGetVolume('politics', 'xb2');
  if (!v) return;
  v.points.push({
    id: 'xb2-u3',
    name: '第三课 订约履约 诚信为本',
    chapter: '高二思想政治（选择性必修2 法律与生活）· 第三课 订约履约 诚信为本',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、合同是什么' },
      { type: 'paragraph', text: '合同是民事主体之间设立、变更、终止民事法律关系的协议。大到买房签的购房合同，小到扫码点餐达成的服务约定，本质上都是合同。只要有"要约"和"承诺"，合同就在当事人之间扎下了根，双方都要受它约束。' },
      { type: 'keypoint', label: '重点·合同的法律约束力', text: '<strong>依法成立的合同，对当事人具有法律约束力，双方应当按照约定全面履行自己的义务。合同不是"说好了不算数"的口头戏言，一旦成立生效，违约就要承担法律责任。这也是市场经济讲信用的法律保障。</strong>' },
      { type: 'list', items: ['合同是一种协议，但协议不一定都是合同（只有设立、变更、终止民事关系的才算）。', '合同主体可以是自然人、法人、非法人组织。', '合同形式可以是书面、口头或其他形式，但重要合同建议书面。'] },

      { type: 'heading', text: '二、合同的订立：要约与承诺' },
      { type: 'paragraph', text: '合同的成立要经过两个阶段：要约和承诺。要约是一方希望和他人订立合同的意思表示；承诺是受要约人同意要约的意思。承诺生效时，合同成立。' },
      { type: 'table', headers: ['阶段', '含义', '效力'], rows: [['要约', '一方希望订立合同、内容具体确定的意思表示', '到达受要约人后，要约人受约束'], ['承诺', '受要约人同意要约的意思表示', '承诺生效时合同成立'], ['新要约', '对要约内容作实质性变更的回复', '视为新要约，原要约失效']] },
      { type: 'keypoint', label: '重点·实质性变更=新要约', text: '<strong>受要约人对合同标的、数量、质量、价款、履行地点等主要内容作变更的，不构成承诺，而是一项新要约。比如商家标价100元（要约），你回复"80元卖我就买"，这是新要约而非承诺，商家可以同意也可以拒绝。只有对原要约完全同意，承诺才生效、合同才成立。</strong>' },
      { type: 'warn', label: '易错·要约与要约邀请不同', text: '商家发传单、打广告一般属于"要约邀请"，是吸引你来询价，本身不具约束力；而标价陈列商品、内容具体的订单常构成"要约"。区分二者关键看：内容是否具体确定、是否表明"你同意我就成立"。传单通常不算要约，你拿着传单去付款才是要约，商家收款是承诺。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">合同订立：要约 → 承诺</text><rect x="60" y="90" width="180" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="150" y="125" font-size="15" fill="#3d1f24" text-anchor="middle" font-weight="bold">要约</text><text x="150" y="148" font-size="11" fill="#3d1f24" text-anchor="middle">希望订约的意思</text><line x1="240" y1="125" x2="290" y2="125" stroke="#d4485a" stroke-width="2"/><polygon points="290,118 304,125 290,132" fill="#d4485a"/><rect x="300" y="90" width="180" height="70" rx="10" fill="#b8334a"/><text x="390" y="125" font-size="15" fill="#fff" text-anchor="middle" font-weight="bold">承诺</text><text x="390" y="148" font-size="11" fill="#fff" text-anchor="middle">同意要约的意思</text><line x1="480" y1="125" x2="530" y2="125" stroke="#d4485a" stroke-width="2"/><polygon points="530,118 544,125 530,132" fill="#d4485a"/><rect x="540" y="90" width="100" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="590" y="125" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">合同成立</text><text x="340" y="220" font-size="12" fill="#3d1f24" text-anchor="middle">承诺生效时合同成立，对双方产生法律约束力。</text><text x="340" y="255" font-size="12" fill="#3d1f24" text-anchor="middle">对要约作实质性变更 → 视为新要约。</text></svg>', caption: '图1　合同经要约与承诺两个阶段而成立。' },

      { type: 'heading', text: '三、合同的效力：有效还是无效' },
      { type: 'paragraph', text: '不是所有"合同"都有效。一份有效合同需要满足行为人有相应民事行为能力、意思表示真实、不违反法律和公序良俗。欠缺条件的，可能无效、可撤销或效力待定。' },
      { type: 'list', items: ['有效合同：主体合格、意思真实、内容合法。', '无效合同：违背法律强制性规定、违背公序良俗，或虚假意思表示。', '可撤销合同：因欺诈、胁迫、重大误解、显失公平订立的，受损害方可请求撤销。', '效力待定：如限制行为能力人超出能力订立的合同，需法定代理人追认。'] },
      { type: 'example', label: '例子·受欺诈买的"名表"', text: '商家用假表冒充名表卖给你，你基于错误认识付了钱，这属于因欺诈订立的合同。你作为受损害方，可以向法院或仲裁机构请求撤销合同，撤销后合同自始无效，商家应退款。这说明"意思不真实"的合同可撤销，法律给你一条救济通道。' },
      { type: 'warn', label: '易错·无效和可撤销不是一回事', text: '无效合同是"从一开始就不算数"（当然无效）；可撤销合同是"先算数，但你可以选择推翻它"，如果撤销权人在期限内不撤销，合同就一直有效。二者法律后果不同：无效合同损害公共利益，任何人可主张；可撤销合同只保护受损害一方，且撤销有除斥期间限制。' },

      { type: 'heading', text: '四、合同履行的原则' },
      { type: 'paragraph', text: '合同成立后要"履约"。履行不是随便做做，而是要按照法律规定和诚实信用的要求全面完成自己的义务。' },
      { type: 'table', headers: ['原则', '要求'], rows: [['全面履行', '按约定的标的、数量、质量、价款、方式、地点等全部履行'], ['诚信履行', '根据合同性质、目的和交易习惯履行通知、协助、保密等义务'], ['协作履行', '当事人相互配合，为对方履行提供便利']] },
      { type: 'keypoint', label: '重点·全面履行是底线', text: '<strong>全面履行原则要求当事人按照约定"原原本本"地履行，不能偷工减料、单方面变更。比如约定交"一级大米"就不能交"三级大米"，约定"送货上门"就不能让买家自提。违反全面履行就是违约，要承担相应责任。</strong>' },

      { type: 'heading', text: '五、违约责任' },
      { type: 'paragraph', text: '一方不履行或履行不符合约定，就构成违约，要承担违约责任。法律既讲究补偿，也通过定金、违约金等机制促使大家守约。' },
      { type: 'list', items: ['继续履行：能履行且合理的，可要求继续按约履行。', '采取补救措施：如修理、重作、更换、退货。', '赔偿损失：赔偿因违约造成的合理损失。', '定金与违约金：定金不超过主合同标的额20%；违约金与定金一般不能并用。'] },
      { type: 'keypoint', label: '重点·定金罚则', text: '<strong>给付定金一方不履行的，无权要求返还定金；收受定金一方不履行的，应双倍返还定金。这就是"定金罚则"。注意定金数额由当事人约定，但不得超过主合同标的额的20%，超过部分不产生定金效力。订金不同于定金，一般可退，不具有罚则效力。</strong>' },
      { type: 'tip', label: '学习提示', text: '本课主线是"订约—效力—履约—违约"。先把订立的两阶段（要约、承诺）记牢，再记住有效合同三要件，最后抓住履行三原则和违约四责任。遇到案例题，先判断合同是否成立、是否有效，再看谁违约、该担什么责。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">违约责任的承担方式</text><rect x="40" y="70" width="170" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="125" y="105" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">继续履行</text><rect x="255" y="70" width="170" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="340" y="105" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">补救措施</text><rect x="470" y="70" width="170" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="555" y="105" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">赔偿损失</text><rect x="150" y="160" width="380" height="60" rx="10" fill="#b8334a"/><text x="340" y="195" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">定金罚则 / 违约金</text><text x="340" y="240" font-size="12" fill="#3d1f24" text-anchor="middle">违约方要为自己的不履约"买单"。</text><text x="340" y="275" font-size="12" fill="#3d1f24" text-anchor="middle">定金不超标的额20%；定金与违约金一般不并用。</text></svg>', caption: '图2　违约责任的多种承担方式。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">合同效力三档</text><rect x="60" y="80" width="180" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="150" y="115" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">有效</text><text x="150" y="138" font-size="11" fill="#3d1f24" text-anchor="middle">主体合格·意思真</text><rect x="250" y="80" width="180" height="70" rx="10" fill="#b8334a"/><text x="340" y="115" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">无效</text><text x="340" y="138" font-size="11" fill="#fff" text-anchor="middle">违法·违背公序</text><rect x="440" y="80" width="180" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="530" y="115" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">可撤销</text><text x="530" y="138" font-size="11" fill="#3d1f24" text-anchor="middle">欺诈·胁迫·误解</text><text x="340" y="210" font-size="12" fill="#3d1f24" text-anchor="middle">有效合同需同时满足三要件；无效自始无效；可撤销须由受损方主张。</text></svg>', caption: '图3　合同效力分有效、无效、可撤销三档。' }
    ],
    exercises: [
      { type: 'choice', question: '关于要约与承诺，下列说法正确的是？', options: ['商家发传单总是要约', '受要约人对价款作实质性变更视为新要约', '承诺可以随便变更要约内容', '要约到达前合同就成立'], answer: '受要约人对价款作实质性变更视为新要约', explanation: '合同的成立需经过要约和承诺。受要约人对合同标的、数量、价款等主要内容作变更的，不构成承诺，而是一项新要约，原要约因此失效。商家发传单通常是要约邀请而非要约；承诺必须完全同意要约内容，不能随意变更；合同在承诺生效时才成立，而非要约到达前。因此只有"实质性变更视为新要约"正确。' },
      { type: 'choice', question: '甲卖假名表给乙，乙知情后可？', options: ['只能自认倒霉', '请求撤销合同并要求退款', '合同当然无效', '三年后在任何时候都可撤销'], answer: '请求撤销合同并要求退款', explanation: '商家以假充真构成欺诈，乙因欺诈订立的合同属于可撤销合同，受损害方乙有权请求法院或仲裁机构撤销，撤销后合同自始无效、商家应退款。注意可撤销不同于无效：无效是当然无效，而可撤销需由受损方在除斥期间内主动主张，并非任何时候都能撤销。' },
      { type: 'choice', question: '关于定金，下列说法正确的是？', options: ['定金数额不受限制', '给付定金方违约可要求返还', '收受定金方违约应双倍返还', '定金与订金效力相同'], answer: '收受定金方违约应双倍返还', explanation: '定金罚则规定：给付定金一方不履行的，无权要求返还定金；收受定金一方不履行的，应双倍返还定金。定金数额由当事人约定，但不得超过主合同标的额的20%，并非不受限制；"订金"一般可退，不具有定金罚则效力，二者不同。所以只有"收受方违约应双倍返还"正确。' },
      { type: 'fill', question: '合同订立经过___和___两个阶段；___生效时合同成立。', answer: '要约；承诺；承诺', explanation: '合同的成立要经过要约和承诺两个阶段。要约是一方希望订立合同的意思表示，承诺是受要约人同意要约的意思表示，承诺生效时合同成立，对当事人产生法律约束力。若受要约人对主要内容作实质性变更，则视为新要约，合同尚未成立。填空要准确写出这两个阶段名称。' },
      { type: 'fill', question: '有效合同须同时满足：行为人有相应___、意思表示___、不违反法律和___。', answer: '民事行为能力；真实；公序良俗（或强制性规定）', explanation: '一份有效合同需要满足三个要件：一是行为人具有相应的民事行为能力，二是意思表示真实（不存在欺诈、胁迫等），三是不违反法律、行政法规的强制性规定，不违背公序良俗。三个要件缺一不可，否则合同可能无效或可撤销。答题时要完整写出这三项条件。' }
    ]
  });
})();
