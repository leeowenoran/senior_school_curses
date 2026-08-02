/* 思想政治 · 选择性必修2 · 法律与生活 · 第四课 侵权责任与权利界限 */
(function () {
  var v = gzGetVolume('politics', 'xb2');
  if (!v) return;
  v.points.push({
    id: 'xb2-u4',
    name: '第四课 侵权责任与权利界限',
    chapter: '高二思想政治（选择性必修2 法律与生活）· 第四课 侵权责任与权利界限',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是侵权责任' },
      { type: 'paragraph', text: '你在路上被别人养的狗咬伤，或者邻居装修砸坏了你的车，这些都属于侵权。侵权责任，是指行为人侵害他人民事权益，依法应当承担的民事责任。它保护的是已经存在的权利（如物权、人格权），和合同保护"约好的权利"不同。' },
      { type: 'keypoint', label: '重点·侵权与违约的区别', text: '<strong>侵权责任保护的是法定权利，不需要双方事先有合同；违约责任保护的是合同约定的权利，以合同有效成立为前提。比如你买的热水壶炸伤你，既可告商家违约（买卖合同），也可告侵权（产品致人损害），这就是"责任竞合"，受害人可选择其一主张。</strong>' },
      { type: 'list', items: ['侵权对象：他人民事权益，包括人身权、财产权、知识产权等。', '责任性质：填补损害，让受害人回到未被侵害的状态。', '与合同关系：无合同也可成立侵权，这是它和违约的最大不同。'] },

      { type: 'heading', text: '二、侵权责任的承担方式' },
      { type: 'paragraph', text: '侵害他人造成损害的，要承担相应民事责任。民法典规定了多种责任方式，可以单独适用，也可以合并适用。' },
      { type: 'table', headers: ['方式', '适用情形'], rows: [['停止侵害', '侵害行为正在进行'], ['排除妨碍、消除危险', '权利行使受阻或面临威胁'], ['返还财产', '财产被非法占有'], ['恢复原状、赔偿损失', '财产损坏或发生损害'], ['消除影响、恢复名誉、赔礼道歉', '人格权受侵害']] },
      { type: 'keypoint', label: '重点·损害赔偿', text: '<strong>侵害他人造成人身损害的，应赔偿医疗费、护理费、交通费等为治疗和康复支出的合理费用，以及因误工减少的收入；造成残疾的还应赔偿残疾赔偿金，造成死亡的还应赔偿丧葬费和死亡赔偿金。财产损害的，按损失发生时的市场价格或其他合理方式计算。</strong>' },

      { type: 'heading', text: '三、侵权责任的一般构成要件' },
      { type: 'paragraph', text: '一般侵权（过错责任）要成立，需要四个条件同时具备：有侵权行为、有损害事实、行为与损害之间有因果关系、行为人有过错。' },
      { type: 'list', items: ['侵权行为：客观上实施了侵害他人权益的行为。', '损害事实：受害人确实遭受了人身或财产损害。', '因果关系：损害是由该行为引起的。', '主观过错：行为人有故意或过失。'] },
      { type: 'warn', label: '易错·有损害不一定有赔偿', text: '很多同学以为"只要受损害了就该赔"。其实一般侵权还要看行为人有没有过错、行为与损害有没有因果关系。比如 pure 意外、完全由受害人自身原因造成的损害，若行为人无过错且无法律规定，可能不赔。另外还要区分"过错责任"和"无过错责任"——后者不看过错也要担责。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">一般侵权的四个构成要件</text><rect x="40" y="80" width="270" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="175" y="115" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">① 侵权行为</text><rect x="370" y="80" width="270" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="505" y="115" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">② 损害事实</text><rect x="40" y="170" width="270" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="175" y="205" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">③ 因果关系</text><rect x="370" y="170" width="270" height="60" rx="10" fill="#b8334a"/><text x="505" y="205" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">④ 主观过错</text><text x="340" y="280" font-size="12" fill="#3d1f24" text-anchor="middle">四要件同时具备，一般侵权责任才成立。</text></svg>', caption: '图1　一般侵权责任需具备四个要件。' },

      { type: 'heading', text: '四、过错责任与无过错责任' },
      { type: 'paragraph', text: '法律对"要不要看过错"作了不同安排。绝大多数侵权适用过错责任；但对一些特殊危险活动，法律出于保护受害人，规定即便无过错也要担责，这叫无过错责任。' },
      { type: 'table', headers: ['归责原则', '是否看过错', '典型情形'], rows: [['过错责任', '看，有过错才担责', '一般侵权，如打伤他人'], ['无过错责任', '不看，有损害即担责', '产品缺陷、高危作业、环境污染、饲养动物'], ['过错推定', '先推定有过错，自证清白才可免', '建筑物脱落坠落、医疗机构违规']] },
      { type: 'keypoint', label: '重点·饲养动物致人损害', text: '<strong>饲养的动物造成他人损害的，动物饲养人或者管理人承担无过错责任，也就是说不问其有没有过错，只要动物伤了人就要担责（受害人故意或重大过失可减责免责）。所以"我家狗平时不咬人"不能成为免责理由。这是无过错责任的典型代表，常考。</strong>' },
      { type: 'warn', label: '易错·过错推定不是"过错责任"', text: '过错推定表面上仍是"有过错才担责"，但举证责任倒置：先假定你有过错，你要自己证明没过错才能免责（如能证明已尽管理职责）。它和无过错责任不同——无过错责任根本不看过错。做题时要看清题目问的是哪一原则，别把"推定"当成"不看过错"。' },

      { type: 'heading', text: '五、权利行使的界限' },
      { type: 'paragraph', text: '权利不是无限的。民事主体行使权利时，应当履行法律规定的和当事人约定的义务，不得滥用权利损害他人、国家或社会利益。法律在保护你的同时，也给你的权利画了一道边界。' },
      { type: 'list', items: ['民事权利有边界：行使物权、知识产权等不得损害公共利益和他人合法权利。', '相邻关系：不动产权利人应为相邻权利人用水、排水、通行等提供必要便利。', '禁止权利滥用：以损害他人为目的行使权利，不受法律保护。'] },
      { type: 'example', label: '例子·楼上漏水与相邻关系', text: '你家楼上住户水管破裂漏水泡了你的天花板，他不能以"这是我家"为由拒绝修。基于相邻关系，不动产权利人应避免对相邻方造成损害，造成损害要停止并赔偿。又如你在家开演唱会震得邻居无法入睡，属于权利滥用，邻居可要求停止侵害。' },
      { type: 'tip', label: '学习提示', text: '本课抓住"两条线"：一条是"责任怎么定"（一般过错四要件，特殊情形无过错/过错推定）；另一条是"权利到哪里止"（不得滥用、相邻互谅）。案例题先定性是一般侵权还是特殊侵权，再套对应规则。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">三类归责原则对比</text><rect x="40" y="70" width="180" height="80" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="130" y="105" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">过错责任</text><text x="130" y="130" font-size="11" fill="#3d1f24" text-anchor="middle">有错才担责</text><rect x="250" y="70" width="180" height="80" rx="10" fill="#b8334a"/><text x="340" y="105" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">无过错责任</text><text x="340" y="130" font-size="11" fill="#fff" text-anchor="middle">不看过错</text><rect x="460" y="70" width="180" height="80" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="550" y="105" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">过错推定</text><text x="550" y="130" font-size="11" fill="#3d1f24" text-anchor="middle">先推定有错</text><text x="340" y="200" font-size="12" fill="#3d1f24" text-anchor="middle">饲养动物、产品缺陷多适用无过错责任。</text><text x="340" y="235" font-size="12" fill="#3d1f24" text-anchor="middle">过错推定由行为人自证清白，与无过错不同。</text></svg>', caption: '图2　侵权归责三原则各有适用规则。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">权利行使要有边界</text><rect x="80" y="70" width="200" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="180" y="105" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">我的权利</text><text x="180" y="130" font-size="11" fill="#3d1f24" text-anchor="middle">受法律保护</text><line x1="280" y1="105" x2="400" y2="105" stroke="#d4485a" stroke-width="2" stroke-dasharray="6 4"/><rect x="400" y="70" width="200" height="70" rx="10" fill="#b8334a"/><text x="500" y="105" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">权利边界</text><text x="500" y="130" font-size="11" fill="#fff" text-anchor="middle">不得滥用</text><text x="340" y="210" font-size="12" fill="#3d1f24" text-anchor="middle">行使权利不得损害国家、社会和他人合法权益。</text><text x="340" y="245" font-size="12" fill="#3d1f24" text-anchor="middle">相邻关系要求邻里之间互谅互让、提供必要的便利。</text></svg>', caption: '图3　民事权利有边界，行使不得滥用。' }
    ],
    exercises: [
      { type: 'choice', question: '关于饲养动物致人损害，下列说法正确的是？', options: ['适用过错责任，主人无过错不担责', '适用无过错责任，主人一般要担责', '受害人任何情况都不可减责', '属于违约责任'], answer: '适用无过错责任，主人一般要担责', explanation: '民法典规定饲养的动物造成他人损害的，动物饲养人或管理人承担无过错责任，即不问其主观有无过错，只要动物伤了人就要担责，"狗平时不咬人"不能免责。仅在受害人故意或重大过失时可减轻或免除责任。这属于侵权而非违约，因为双方之间通常没有合同关系。所以"适用无过错责任，主人一般要担责"正确。' },
      { type: 'choice', question: '一般侵权责任成立，不需要下列哪一要件？', options: ['侵权行为', '损害事实', '因果关系', '行为人必须具有故意'], answer: '行为人必须具有故意', explanation: '一般侵权（过错责任）的四个要件是：侵权行为、损害事实、因果关系、主观过错。这里的"过错"包括故意和过失两种，并不要求必须是故意，过失（应当预见而未预见）同样构成过错。所以"行为人必须具有故意"不是必备要件，其余三项都是要件。' },
      { type: 'choice', question: '甲买的热水壶爆炸炸伤甲，甲可以？', options: ['只能告侵权', '只能告违约', '选择告违约或侵权', '既不能告违约也不能告侵权'], answer: '选择告违约或侵权', explanation: '甲与商家之间存在买卖合同，商家交付不合格产品构成违约；同时缺陷产品致人损害又构成侵权。这种情况属于"责任竞合"，法律允许受害人选择其一主张，既可以依合同告违约，也可以依侵权告产品责任，但不能同时主张两份赔偿。因此"选择告违约或侵权"正确。' },
      { type: 'fill', question: '一般侵权责任的四个要件是：___、___、___和___。', answer: '侵权行为；损害事实；因果关系；主观过错', explanation: '一般侵权（过错责任）成立需同时具备四个要件：一是有侵害他人民事权益的侵权行为；二是受害人确实遭受损害事实；三是侵权行为与损害之间存在因果关系；四是行为人主观上有过错（故意或过失）。四个要件缺一不可，做题时要逐一对照，尤其注意"过错"包含过失。' },
      { type: 'fill', question: '侵权责任保护的是___权利，违约责任保护的是___权利；前者不需要双方事先存在___。', answer: '法定（或既有）；约定（合同）；合同（关系）', explanation: '侵权责任保护的是法律已经确认的民事权益（如人格权、物权），不需要当事人之间事先订约；违约责任保护的是合同有效成立后约定的权利，以存在合同关系为前提。这是二者最本质的区别，也是判断一道案例题该走"侵权"还是"违约"路径的关键。' }
    ]
  });
})();
