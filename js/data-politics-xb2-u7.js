/* 思想政治 · 选择性必修2 · 法律与生活 · 第七课 做个明白的劳动者 */
(function () {
  var v = gzGetVolume('politics', 'xb2');
  if (!v) return;
  v.points.push({
    id: 'xb2-u7',
    name: '第七课 做个明白的劳动者',
    chapter: '高二思想政治（选择性必修2 法律与生活）· 第七课 做个明白的劳动者',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、法律守护劳动者' },
      { type: 'paragraph', text: '我们长大后都要工作，而劳动关系里有强有弱——用人单位往往更强势，劳动者容易吃亏。为此，劳动法带着"倾斜保护"的立场，专门维护劳动者合法权益，同时也保障企业正常用工。' },
      { type: 'keypoint', label: '重点·劳动法的基本原则', text: '<strong>劳动法的基本原则包括：保护劳动者合法权益；劳动者平等就业、选择职业；按劳分配为主、多种分配方式并存；劳动者享有劳动权利与承担劳动义务相统一。核心是"保护劳动者"，因为劳动者在劳动关系中通常处于相对弱势。</strong>' },
      { type: 'list', items: ['劳动者享有平等就业和选择职业的权利。', '劳动者有取得劳动报酬、休息休假、获得劳动安全卫生保护的权利。', '劳动者有接受职业技能培训、享受社会保险和福利的权利。'] },

      { type: 'heading', text: '二、劳动合同：劳动关系的"凭证"' },
      { type: 'paragraph', text: '建立劳动关系，应当订立书面劳动合同。合同明确了双方权利义务，是发生争议时最重要的证据。用人单位自用工之日起即与劳动者建立劳动关系。' },
      { type: 'table', headers: ['必备条款', '示例'], rows: [['用人单位与劳动者基本信息', '名称、住址、身份证号'], ['合同期限', '固定期限、无固定期限、以完成一定任务为期限'], ['工作内容与地点', '岗位、工作地点'], ['劳动报酬、社会保险', '工资、社保缴纳'], ['劳动保护与条件', '安全卫生、工时休假']] },
      { type: 'keypoint', label: '重点·试用期不是"廉价期"', text: '<strong>试用期长度受合同期限限制：合同期3个月以上不满1年的，试用期不超1个月；1年以上不满3年的，不超2个月；3年以上及无固定期限的，不超6个月。同一单位与同一劳动者只能约定一次试用期，试用期工资不得低于转正工资的80%或当地最低工资。不得随意延长或压低待遇。</strong>' },
      { type: 'warn', label: '易错·不签合同不等于没劳动关系', text: '有的老板说"没签合同就不是我员工"。错。用人单位自用工之日起即与劳动者建立劳动关系，签书面合同只是形式要求。用工超过一个月不签合同的，单位要支付二倍工资；满一年不签的，视为已订立无固定期限合同。所以"用工即有关系"，别被忽悠。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">劳动合同的关键节点</text><rect x="60" y="80" width="180" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="150" y="115" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">用工之日</text><text x="150" y="140" font-size="11" fill="#3d1f24" text-anchor="middle">关系即成立</text><line x1="240" y1="115" x2="290" y2="115" stroke="#d4485a" stroke-width="2"/><polygon points="290,108 304,115 290,122" fill="#d4485a"/><rect x="300" y="80" width="180" height="70" rx="10" fill="#b8334a"/><text x="390" y="115" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">1个月内签合同</text><text x="390" y="140" font-size="11" fill="#fff" text-anchor="middle">法定要求</text><line x1="480" y1="115" x2="530" y2="115" stroke="#d4485a" stroke-width="2"/><polygon points="530,108 544,115 530,122" fill="#d4485a"/><rect x="540" y="80" width="100" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="590" y="115" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">超期担责</text><text x="340" y="220" font-size="12" fill="#3d1f24" text-anchor="middle">用工即建立劳动关系，不签书面合同单位要负二倍工资等责任。</text></svg>', caption: '图1　用工之日劳动关系即成立，应及时签书面合同。' },

      { type: 'heading', text: '三、劳动者的权利与义务' },
      { type: 'paragraph', text: '劳动者既享有权利，也要履行义务。只谈权利不尽义务，或只压义务不保权利，都背离劳动法精神。' },
      { type: 'list', items: ['权利：取得报酬、休息休假、安全卫生保护、技能培训、社保福利、提请争议处理。', '义务：完成劳动任务、提高职业技能、执行安全卫生规程、遵守纪律和职业道德。', '特殊保护：国家对女职工和未成年工（16-18岁）实行特殊劳动保护，禁止安排禁忌工种。'] },
      { type: 'example', label: '例子·加班要给钱', text: '公司要求员工连续周末加班却不给加班费，这侵犯了劳动者取得劳动报酬和休息休假的权利。法律规定安排加班的应支付不低于工资150%（休息日200%、法定假日300%）的加班工资。员工可据此维权，要求补发报酬。' },
      { type: 'warn', label: '易错·未成年工不是童工', text: '未成年工指16周岁以上不满18周岁的劳动者，法律允许其就业但给予特殊保护（限制夜班、高强度工种）；童工指不满16周岁，法律严禁使用。二者完全不同：招童工违法甚至犯罪，招未成年工只是要"特殊保护"。别把两个概念混为一谈。' },

      { type: 'heading', text: '四、维权途径' },
      { type: 'paragraph', text: '权益被侵害怎么办？法律提供了从协商到诉讼的一整条救济链，劳动者应按"先柔后刚、先内后外"的顺序理性维权。' },
      { type: 'table', headers: ['途径', '特点'], rows: [['协商', '与单位自行沟通，最便捷'], ['调解', '向调解组织申请，中立第三方介入'], ['仲裁', '向劳动争议仲裁委员会申请，是诉讼前置程序'], ['诉讼', '对仲裁裁决不服的，可向法院起诉']] },
      { type: 'keypoint', label: '重点·仲裁是诉讼的前置', text: '<strong>劳动争议处理一般遵循"协商—调解—仲裁—诉讼"顺序，其中劳动仲裁是提起诉讼的必经前置程序：除个别情形外，未经过仲裁不能直接去法院。劳动者要在知道权利被侵害之日起一年内申请仲裁，逾期可能丧失胜诉权。</strong>' },
      { type: 'tip', label: '学习提示', text: '本课记住"保护弱者"的基调：劳动法向劳动者倾斜。重点抓三条——①用工即建关系、必须签书面合同；②试用期有上限；③维权先仲裁后诉讼。案例题先看有没有书面合同、有没有超试用期，再选维权路径。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">劳动争议维权四步走</text><rect x="30" y="90" width="130" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="95" y="125" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">协商</text><line x1="160" y1="120" x2="190" y2="120" stroke="#d4485a" stroke-width="2"/><polygon points="190,113 204,120 190,127" fill="#d4485a"/><rect x="200" y="90" width="130" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="265" y="125" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">调解</text><line x1="330" y1="120" x2="360" y2="120" stroke="#d4485a" stroke-width="2"/><polygon points="360,113 374,120 360,127" fill="#d4485a"/><rect x="370" y="90" width="130" height="60" rx="10" fill="#b8334a"/><text x="435" y="125" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">仲裁</text><line x1="500" y1="120" x2="530" y2="120" stroke="#d4485a" stroke-width="2"/><polygon points="530,113 544,120 530,127" fill="#d4485a"/><rect x="540" y="90" width="110" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="595" y="125" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">诉讼</text><text x="340" y="220" font-size="12" fill="#3d1f24" text-anchor="middle">仲裁是诉讼的前置程序，未经仲裁一般不能直接起诉。</text></svg>', caption: '图2　劳动争议按协商→调解→仲裁→诉讼顺序解决。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">试用期上限对照</text><rect x="50" y="75" width="180" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="140" y="110" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">合同&lt;1年</text><text x="140" y="135" font-size="12" fill="#3d1f24" text-anchor="middle">试用期≤1个月</text><rect x="250" y="75" width="180" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="340" y="110" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">1年≤合同&lt;3年</text><text x="340" y="135" font-size="12" fill="#3d1f24" text-anchor="middle">试用期≤2个月</text><rect x="450" y="75" width="180" height="70" rx="10" fill="#b8334a"/><text x="540" y="110" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">≥3年/无固定</text><text x="540" y="135" font-size="12" fill="#fff" text-anchor="middle">试用期≤6个月</text><text x="340" y="210" font-size="12" fill="#3d1f24" text-anchor="middle">同一单位与同一劳动者只能约定一次试用期。</text><text x="340" y="245" font-size="12" fill="#3d1f24" text-anchor="middle">试用期工资≥转正工资80%且≥当地最低工资。</text></svg>', caption: '图3　试用期长度随合同期限增加而延长，但有上限。' }
    ],
    exercises: [
      { type: 'choice', question: '关于劳动关系，下列说法正确的是？', options: ['没签合同就不算劳动关系', '用工之日起即建立劳动关系', '试用期可随意延长', '童工指不满18周岁'], answer: '用工之日起即建立劳动关系', explanation: '用人单位自用工之日起即与劳动者建立劳动关系，签订书面合同只是法定形式要求，没签合同不等于没有劳动关系；超期不签单位要承担二倍工资等责任。试用期长度受合同期限限制不能随意延长；童工指不满16周岁，而非不满18周岁。所以只有"用工之日起即建立劳动关系"正确。' },
      { type: 'choice', question: '劳动合同期限3年以上，试用期最长可为？', options: ['1个月', '2个月', '6个月', '12个月'], answer: '6个月', explanation: '根据规定，劳动合同期限3年以上及无固定期限的，试用期不得超过6个月；合同期1年以上不满3年的不超过2个月；3个月以上不满1年的不超过1个月。同一单位与同一劳动者只能约定一次试用期。所以3年以上合同试用期最长6个月。' },
      { type: 'choice', question: '劳动争议诉讼前一般必须经过？', options: ['协商', '调解', '仲裁', '信访'], answer: '仲裁', explanation: '劳动争议处理遵循协商、调解、仲裁、诉讼的顺序，其中劳动仲裁是提起诉讼的法定前置程序：除个别法定情形外，未经仲裁不能直接向法院起诉。协商和调解是自愿选择，不是必经；信访不是法定争议处理程序。所以诉讼前一般必须经过仲裁。' },
      { type: 'fill', question: '劳动法的基本原则核心是___；劳动争议处理遵循___、___、___、___的顺序。', answer: '保护劳动者合法权益；协商；调解；仲裁；诉讼', explanation: '劳动法以"保护劳动者合法权益"为核心原则，因为劳动者在劳动关系中通常处于相对弱势。发生争议时，处理顺序一般为协商、调解、仲裁、诉讼，其中仲裁是诉讼的前置程序。填空要完整写出核心原则和四步顺序，这是本课高频考点。' },
      { type: 'fill', question: '未成年工是指___周岁以上不满___周岁的劳动者，法律对其实行___保护；而___是指不满该年龄、严禁使用的对象。', answer: '16；18；特殊劳动；童工', explanation: '未成年工指年满16周岁不满18周岁的劳动者，法律允许其就业但给予特殊劳动保护（如限制夜班和禁忌工种）；童工指不满16周岁，法律严禁使用，招用童工属违法甚至犯罪。二者年龄界限是16周岁，切勿把"未成年工"与"童工"混淆，前者可雇受保护、后者严禁。' }
    ]
  });
})();
