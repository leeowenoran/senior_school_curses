/* 思想政治 · 选择性必修2 · 法律与生活 · 第五课 在和睦家庭中成长 */
(function () {
  var v = gzGetVolume('politics', 'xb2');
  if (!v) return;
  v.points.push({
    id: 'xb2-u5',
    name: '第五课 在和睦家庭中成长',
    chapter: '高二思想政治（选择性必修2 法律与生活）· 第五课 在和睦家庭中成长',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、家庭中的法律关系' },
      { type: 'paragraph', text: '家庭不只是讲感情的地方，也受法律调整。父母子女之间、夫妻之间、祖孙之间，既有血缘亲情，也有法定的权利和义务。民法典婚姻家庭编和继承编，把"家和万事兴"的愿望变成了可操作的法律规则。' },
      { type: 'keypoint', label: '重点·婚姻家庭受国家保护', text: '<strong>我国实行婚姻自由、一夫一妻、男女平等的婚姻制度，保护妇女、未成年人、老年人、残疾人的合法权益。家庭成员应当敬老爱幼、互相帮助，维护平等、和睦、文明的婚姻家庭关系。法律既守护家庭的温情，也守住底线。</strong>' },
      { type: 'list', items: ['父母对未成年子女有抚养、教育、保护的义务。', '成年子女对父母有赡养、扶助、保护的义务。', '夫妻在婚姻家庭中地位平等，互负扶养义务。'] },

      { type: 'heading', text: '二、父母与子女的权利义务' },
      { type: 'paragraph', text: '父母子女关系是家庭法律的核心。对未成年子女，父母既是监护人也是抚养人；对年老父母，成年子女要反哺尽孝。这既是道德要求，也是法律强制。' },
      { type: 'table', headers: ['关系', '主要义务', '法律后果'], rows: [['父母 → 未成年子女', '抚养、教育、保护（监护）', '不履行可撤销监护、追究责任'], ['成年子女 → 父母', '赡养、扶助、保护', '拒不赡养可被起诉、强制执行']] },
      { type: 'keypoint', label: '重点·抚养与赡养的区别', text: '<strong>抚养是长辈对晚辈（父母养育未成年子女）的供养教育；赡养是晚辈对长辈（成年子女供养父母）的扶助保护。二者方向不同但都是法定义务，不能因为"断绝关系"的口头声明而免除。血缘关系不能通过声明解除，义务依然存在。</strong>' },
      { type: 'warn', label: '易错·"断绝父子关系"有效吗', text: '有人以为写张"从此断绝父子关系"的文书就能不养老。法律上，自然血亲的父母子女关系基于出生产生，不能通过声明解除。即便分户、矛盾再深，成年子女对父母的赡养义务、父母对未成年子女的抚养义务都不会因一纸声明而消失。只有依法收养成立，才会形成新的亲子法律关系。' },

      { type: 'heading', text: '三、继承：把财产传下去' },
      { type: 'paragraph', text: '人去世后，留下的个人合法财产成为遗产，由继承人依法取得，这就是继承。继承分两种：法定继承和遗嘱继承。遗嘱继承优先于法定继承。' },
      { type: 'list', items: ['法定继承：按法律规定的继承人范围、顺序和份额继承，适用于无遗嘱情形。', '遗嘱继承：被继承人立遗嘱指定继承人，优先于法定继承。', '遗赠：把遗产赠给法定继承人以外的人（如朋友、基金会）。', '遗产范围：只能是被继承人死亡时的个人合法财产，不含他人财产。'] },
      { type: 'table', headers: ['继承顺序', '继承人'], rows: [['第一顺序', '配偶、子女、父母'], ['第二顺序', '兄弟姐妹、祖父母、外祖父母']] },
      { type: 'keypoint', label: '重点·遗嘱的形式与效力', text: '<strong>遗嘱有自书、代书、打印、录音录像、口头、公证等多种形式。立有数份内容相抵触的遗嘱，以最后的为准；公证遗嘱不再具有绝对优先效力。遗嘱人要有完全民事行为能力，内容真实合法，并为缺乏劳动能力又无生活来源的继承人保留必要份额，否则部分无效。</strong>' },
      { type: 'warn', label: '易错·公证遗嘱不再"说了算"', text: '旧法曾规定公证遗嘱效力最高，新民法典改了：立有数份遗嘱且内容冲突的，一律以最后的遗嘱为准，不再因"公证过"就压过其他遗嘱。所以别再记"公证遗嘱优先"。同时注意口头遗嘱只在危急情况有效，危急解除后能另立遗嘱的，口头遗嘱失效。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">法定继承的顺序</text><rect x="240" y="60" width="200" height="55" rx="10" fill="#b8334a"/><text x="340" y="92" font-size="15" fill="#fff" text-anchor="middle" font-weight="bold">被继承人</text><line x1="340" y1="115" x2="180" y2="160" stroke="#d4485a" stroke-width="2"/><line x1="340" y1="115" x2="500" y2="160" stroke="#d4485a" stroke-width="2"/><rect x="80" y="160" width="200" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="180" y="195" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">第一顺序</text><text x="180" y="218" font-size="11" fill="#3d1f24" text-anchor="middle">配偶·子女·父母</text><rect x="400" y="160" width="200" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="500" y="195" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">第二顺序</text><text x="500" y="218" font-size="11" fill="#3d1f24" text-anchor="middle">兄弟姐妹·祖辈</text><text x="340" y="280" font-size="12" fill="#3d1f24" text-anchor="middle">有第一顺序继承人时，第二顺序不继承。</text></svg>', caption: '图1　法定继承先由第一顺序继承人继承。' },

      { type: 'heading', text: '四、继承中的权利保护' },
      { type: 'paragraph', text: '继承不是"谁的拳头硬归谁"。法律保障每个继承人的平等权利，也保护被继承人自由处分财产的意思。' },
      { type: 'list', items: ['男女平等：女儿与儿子享有平等的继承权，出嫁不丧失继承权。', '对胎儿特留：遗产分割时应为胎儿保留继承份额。', '必留份：应为缺乏劳动能力又无生活来源的继承人保留必要份额。', '受遗赠人应在知道受遗赠后60日内表示接受，否则视为放弃。'] },
      { type: 'example', label: '例子·女儿也有份', text: '老父亲去世留下一套房，儿子说"妹妹出嫁了不算家里人，房归我"。这违法。女儿不论是否出嫁，都与儿子平等享有继承权，属于第一顺序继承人。除非父亲生前立有效遗嘱把房给儿子，否则儿子独占房屋侵犯了女儿的继承权，女儿可依法主张分割。' },
      { type: 'tip', label: '学习提示', text: '本课关键词是"义务"与"继承"。义务线：父母抚养子女、子女赡养父母，且都不能靠声明免除。继承线：遗嘱优先于法定，法定分一二顺序，公证遗嘱不再绝对优先。做题先问"有没有有效遗嘱"，再决定走哪条路。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">继承的两条路径</text><rect x="60" y="80" width="260" height="170" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="190" y="115" font-size="15" fill="#3d1f24" text-anchor="middle" font-weight="bold">遗嘱继承</text><text x="190" y="145" font-size="12" fill="#3d1f24" text-anchor="middle">被继承人立遗嘱指定</text><text x="190" y="170" font-size="12" fill="#3d1f24" text-anchor="middle">优先于法定继承</text><text x="190" y="195" font-size="12" fill="#3d1f24" text-anchor="middle">多份抵触以最后为准</text><rect x="360" y="80" width="260" height="170" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="490" y="115" font-size="15" fill="#3d1f24" text-anchor="middle" font-weight="bold">法定继承</text><text x="490" y="145" font-size="12" fill="#3d1f24" text-anchor="middle">无遗嘱时适用</text><text x="490" y="170" font-size="12" fill="#3d1f24" text-anchor="middle">按一二顺序分配</text><text x="490" y="195" font-size="12" fill="#3d1f24" text-anchor="middle">男女平等·必留份</text><text x="340" y="290" font-size="12" fill="#3d1f24" text-anchor="middle">有有效遗嘱先按遗嘱，没有才走法定。</text></svg>', caption: '图2　遗嘱继承优先，法定继承兜底。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">家庭中的双向义务</text><rect x="60" y="80" width="240" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="180" y="115" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">父母 → 子女</text><text x="180" y="140" font-size="12" fill="#3d1f24" text-anchor="middle">抚养·教育·保护</text><line x1="300" y1="115" x2="380" y2="115" stroke="#d4485a" stroke-width="2"/><polygon points="380,108 394,115 380,122" fill="#d4485a"/><rect x="380" y="80" width="240" height="70" rx="10" fill="#b8334a"/><text x="500" y="115" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">子女 → 父母</text><text x="500" y="140" font-size="12" fill="#fff" text-anchor="middle">赡养·扶助·保护</text><text x="340" y="210" font-size="12" fill="#3d1f24" text-anchor="middle">双向义务都不能靠"断绝关系"声明免除。</text><text x="340" y="245" font-size="12" fill="#3d1f24" text-anchor="middle">血缘关系不能单方解除，法定义务永久有效。</text></svg>', caption: '图3　父母子女互负法定抚养与赡养义务。' }
    ],
    exercises: [
      { type: 'choice', question: '关于法定继承，下列说法正确的是？', options: ['女儿出嫁后丧失继承权', '有第一顺序继承人时第二顺序也参与', '第一顺序是配偶、子女、父母', '法定继承优先于遗嘱继承'], answer: '第一顺序是配偶、子女、父母', explanation: '法定继承中，第一顺序继承人包括配偶、子女、父母；第二顺序是兄弟姐妹、祖父母、外祖父母。有第一顺序继承人时，第二顺序不继承。女儿不论是否出嫁都享有平等继承权，不因此丧失资格；遗嘱继承优先于法定继承，而非相反。所以只有"第一顺序是配偶、子女、父母"正确。' },
      { type: 'choice', question: '被继承人立有多份内容抵触的遗嘱，应？', options: ['以公证遗嘱为准', '以最早一份为准', '以最后的遗嘱为准', '所有遗嘱都无效'], answer: '以最后的遗嘱为准', explanation: '根据民法典，立有数份遗嘱且内容相抵触的，以最后的遗嘱为准。新法取消了公证遗嘱的绝对优先效力，不再"公证过就压过其他"。所以应以最后的遗嘱为准，而不是公证遗嘱或最早一份。这提醒我们更新记忆，别再套用旧法规则。' },
      { type: 'choice', question: '关于赡养义务，下列说法正确的是？', options: ['写声明断绝关系即可免除', '仅限经济供养', '成年子女对父母有赡养扶助保护义务', '只有儿子才需赡养'], answer: '成年子女对父母有赡养扶助保护义务', explanation: '赡养是成年子女对父母的法定义务，包括经济上的供养、生活上的照料和精神上的慰藉等多方面，且子女（不论男女）都不能通过"断绝关系"的声明免除，因为自然血亲关系不能单方解除。所以"成年子女对父母有赡养扶助保护义务"正确，其余表述都错误。' },
      { type: 'fill', question: '继承分为___继承和___继承，其中___继承优先于___继承。', answer: '法定；遗嘱；遗嘱；法定', explanation: '继承制度分为法定继承和遗嘱继承两种。遗嘱继承是被继承人通过遗嘱指定继承人，它优先于法定继承适用——即存在有效遗嘱时按遗嘱办，没有遗嘱或遗嘱无效时才按法定继承办理。填空要写清两种继承及优先顺序，这是继承题的出发点。' },
      { type: 'fill', question: '父母对未成年子女负有___、___和___的义务；成年子女对父母负有___、___和___的义务。', answer: '抚养；教育；保护；赡养；扶助；保护', explanation: '家庭中的双向法定义务：父母对未成年子女负有抚养、教育、保护的义务（含监护职责）；成年子女对父母负有赡养、扶助、保护的义务。这两组义务方向相反但都具有强制性，不能通过声明解除。记清动词搭配，答题时才不会把"抚养"和"赡养"的方向写反。' }
    ]
  });
})();
