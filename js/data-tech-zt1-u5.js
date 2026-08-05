/* 通用技术 · 高三复习 · 技术与设计理论 · 第二节 知识产权与专利 */
(function () {
  var v = gzGetVolume('tech', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u5',
    name: '知识产权与专利',
    chapter: '二、技术与设计1核心理论 · 技术及其性质',
    difficulty: '重点',
    content: [
      { type: 'heading', text: '一、本课时复习定位' },
      { type: 'paragraph', text: '“知识产权”是技术世界里容易被忽略、却年年都要考的一块内容。它和技术设计的关系非常直接：你辛辛苦苦设计出一个新产品，如果不去申请保护，别人抄去用，你一点办法都没有。所以，理解知识产权、知道专利是怎么回事，是“负责任的设计”的一部分。本节课要掌握三件事：什么是知识产权、专利有哪些特性、专利怎么分类、怎么申请。' },
      { type: 'heading', text: '二、什么是知识产权' },
      { type: 'paragraph', text: '知识产权，简单说就是“智力劳动成果依法享有的专有权利”。你脑子里想出来的设计、写出来的程序、画出来的图案，只要符合法律规定，就归你“专有”，别人不能随便拿去用。它保护的是“无形的脑力成果”，而不是一台具体的机器本身。' },
      { type: 'keypoint', label: '重点·知识产权的定义', text: '<strong>知识产权是人们对自己的智力劳动成果依法享有的专有权利，保护的是无形的脑力创造成果。</strong>它和“物权”不同：你买一台手机拥有的是那台具体的手机（物权），但你拥有某个手机外观设计的专利权，保护的是“那个设计图案”这个无形成果。' },
      { type: 'heading', text: '三、知识产权的三大狭义组成' },
      { type: 'paragraph', text: '通常说的“知识产权”，狭义上包括三大类。我们做技术的，重点关注专利权，但它和另外两类也常一起考。' },
      { type: 'list', items: [
        '著作权（版权）：保护文学、艺术、软件作品。比如你写的一段程序代码，自动享有著作权。',
        '专利权：保护新的技术方案或外观设计。这是技术设计最需要关心的，后面详讲。',
        '商标权：保护商品或服务的标志。比如某个品牌的logo和名称，防止别人冒用。'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="240" fill="#e8f3ee"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2f6b4f" text-anchor="middle">知识产权三大狭义组成</text><rect x="40" y="60" width="180" height="140" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="130" y="108" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">著作权</text><text x="130" y="140" font-size="12" fill="#1e3a2b" text-anchor="middle">文字、艺术、软件</text><text x="130" y="164" font-size="12" fill="#1e3a2b" text-anchor="middle">如程序代码</text><rect x="250" y="60" width="180" height="140" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="340" y="108" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">专利权</text><text x="340" y="140" font-size="12" fill="#1e3a2b" text-anchor="middle">新技术方案</text><text x="340" y="164" font-size="12" fill="#1e3a2b" text-anchor="middle">技术设计核心</text><rect x="460" y="60" width="180" height="140" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="550" y="108" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">商标权</text><text x="550" y="140" font-size="12" fill="#1e3a2b" text-anchor="middle">商品服务标志</text><text x="550" y="164" font-size="12" fill="#1e3a2b" text-anchor="middle">如品牌logo</text></svg>', caption: '图1　知识产权狭义三大组成：著作权、专利权、商标权，其中专利权与技术创新最密切。' },
      { type: 'heading', text: '四、专利的三大特性' },
      { type: 'paragraph', text: '专利不是“申请了就永远谁都能管、处处都能管”，它有三个重要特性，选择题很喜欢拿其中某一特性挖坑。' },
      { type: 'list', items: [
        '独占性：专利权人对自己的专利享有独占实施权，别人未经许可不能用、不能卖。',
        '时间性：保护有期限，到期之后专利就进入公共领域，谁都可以免费用。',
        '地域性：专利权只在申请并被授权的国家或地区内有效，出了这个地界就不受保护。'
      ] },
      { type: 'tip', label: '提示·三性这样记', text: '<strong>“独占、时间、地域”可以记成：我的（独占）、有期限的（时间）、只在这片地盘（地域）。</strong>做题时题干说“别人不能随便仿造”对应独占性，“过了20年就能随便用”对应时间性，“只在中国有效、到国外要再申请”对应地域性。' },
      { type: 'heading', text: '五、三种专利类型与保护期限' },
      { type: 'paragraph', text: '我国专利分三种，区别主要在保护对象和保护期限上。一定要记清期限，这是高频填空和选择考点。' },
      { type: 'table', headers: ['专利类型', '保护期限', '说明'], rows: [
        ['发明专利', '20年', '针对产品、方法或其改进提出的新的技术方案，含金量最高、审查最严'],
        ['实用新型专利', '10年', '针对产品的形状、构造提出的适于实用的新技术方案，俗称“小发明”'],
        ['外观设计专利', '10年', '针对产品的形状、图案、色彩及其结合作出的富有美感并适于工业应用的新设计']
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="250" fill="#e8f3ee"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2f6b4f" text-anchor="middle">三种专利类型与保护期限</text><rect x="40" y="58" width="180" height="160" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="130" y="104" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">发明</text><text x="130" y="138" font-size="14" fill="#1e3a2b" text-anchor="middle">保护 20 年</text><text x="130" y="168" font-size="12" fill="#1e3a2b" text-anchor="middle">新技术方案</text><text x="130" y="190" font-size="12" fill="#1e3a2b" text-anchor="middle">审查最严</text><rect x="250" y="58" width="180" height="160" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="340" y="104" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">实用新型</text><text x="340" y="138" font-size="14" fill="#1e3a2b" text-anchor="middle">保护 10 年</text><text x="340" y="168" font-size="12" fill="#1e3a2b" text-anchor="middle">小发明</text><text x="340" y="190" font-size="12" fill="#1e3a2b" text-anchor="middle">形状构造改进</text><rect x="460" y="58" width="180" height="160" rx="12" fill="#cdeadd" stroke="#2f9e6b" stroke-width="1.5"/><text x="550" y="104" font-size="15" font-weight="bold" fill="#2f6b4f" text-anchor="middle">外观设计</text><text x="550" y="138" font-size="14" fill="#1e3a2b" text-anchor="middle">保护 10 年</text><text x="550" y="168" font-size="12" fill="#1e3a2b" text-anchor="middle">外形图案美感</text><text x="550" y="190" font-size="12" fill="#1e3a2b" text-anchor="middle">工业应用</text></svg>', caption: '图2　发明专利保护20年，实用新型和外观设计均保护10年。' },
      { type: 'heading', text: '六、专利申请的步骤' },
      { type: 'paragraph', text: '申请专利有一套固定流程，记住顺序即可，常考排序题。' },
      { type: 'list', items: [
        '第一步 提交申请：向国家知识产权局递交申请文件。',
        '第二步 受理：专利局确认收到并给出申请号。',
        '第三步 初审：对申请文件的形式和内容做初步审查。',
        '第四步 公布：申请后满18个月（发明）予以公布。',
        '第五步 实审：对发明进行实质审查，看是否具备新颖性、创造性、实用性。',
        '第六步 授权：审查通过后授予专利权、发证公告。'
      ] },
      { type: 'warn', label: '易错·实用新型和外观设计没有实审', text: '注意：只有“发明专利”有实质审查环节；实用新型和外观设计专利走的是初步审查，没有实审这一步。考试如果说“所有专利都要经过实质审查”，那就是错的。' },
      { type: 'example', label: '例题·专利特性辨析', text: '题目：某中国企业在国内为一项新技术申请了发明专利，期限为20年。但该公司想把产品卖到国外，却发现当地有企业已经在仿造。这主要违背了专利的哪一特性？<br>解析：题干说“在国内申请、到国外不被保护”，说明专利权只在被授权的国家/地区内有效，这就是地域性。若是“别人在国内也随便仿”则对应独占性，“20年后谁都能用”则对应时间性。本题考查地域性。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于知识产权三大狭义组成的说法，正确的是？', options: ['知识产权狭义上只包括著作权和商标权', '专利权、著作权、商标权是知识产权的三大狭义组成', '专利权只保护文学作品', '商标权保护的是技术方案'], answer: '专利权、著作权、商标权是知识产权的三大狭义组成', explanation: '知识产权狭义上由著作权（版权）、专利权、商标权三部分组成。著作权保护文学、艺术、软件等作品，专利权保护新的技术方案或外观设计，商标权保护商品或服务的标志。选项中说“只包括两类”“专利权保护文学”“商标权保护技术方案”都是错的。' },
      { type: 'choice', question: '某发明专利的保护期限为20年，到期后任何人都可以免费使用该项技术。这体现了专利的哪一特性？', options: ['独占性', '时间性', '地域性', '创造性'], answer: '时间性', explanation: '专利权只在法定期限内有效，期限届满后进入公共领域、任何人可免费使用，这体现的是时间性。独占性强调的是“别人未经许可不能用”，地域性强调的是“只在授权国有效”，创造性是授权条件而非专利特性。' },
      { type: 'choice', question: '下列三种专利中，保护期限不是10年的是？', options: ['实用新型专利', '外观设计专利', '发明专利', '以上保护期限均为10年'], answer: '发明专利', explanation: '我国专利中，实用新型专利和外观设计专利的保护期限都是10年，而发明专利的保护期限是20年。所以“不是10年”的是发明专利。' },
      { type: 'fill', question: '专利的三大特性是___、___和地域性；其中“别人未经许可不能使用、销售该专利”体现的是___性。', answer: '独占性；时间性；独占', explanation: '专利三特性为独占性、时间性、地域性。独占性指专利权人对其专利享有独占的实施权，他人未经许可不得为生产经营目的制造、使用、销售。填空后两空分别填“时间性”和“独占”。' },
      { type: 'fill', question: '专利申请的完整流程依次是：提交申请、受理、初审、公布、___、___。（发明类需经实质审查）', answer: '实审；授权', explanation: '专利申请的六步流程为：提交申请→受理→初审→公布→实审→授权。注意只有发明专利有实审（实质审查）环节；实用新型和外观设计只经初步审查，无实审。两空顺序为“实审”“授权”。' }
    ]
  });
})();
