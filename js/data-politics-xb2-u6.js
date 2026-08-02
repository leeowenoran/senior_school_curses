/* 思想政治 · 选择性必修2 · 法律与生活 · 第六课 珍惜婚姻关系 */
(function () {
  var v = gzGetVolume('politics', 'xb2');
  if (!v) return;
  v.points.push({
    id: 'xb2-u6',
    name: '第六课 珍惜婚姻关系',
    chapter: '高二思想政治（选择性必修2 法律与生活）· 第六课 珍惜婚姻关系',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、婚姻要依法成立' },
      { type: 'paragraph', text: '结婚不是办场酒席就算数，它必须依法登记才产生法律效力。民法典规定，要求结婚的男女双方应当亲自到婚姻登记机关申请结婚登记，完成登记即确立婚姻关系。只有领了证，法律才承认你们是夫妻。' },
      { type: 'keypoint', label: '重点·结婚的法定条件', text: '<strong>结婚须同时满足：①男女双方完全自愿；②达到法定婚龄（男不得早于22周岁，女不得早于20周岁）；③符合一夫一妻制；④没有禁止结婚的亲属关系（直系血亲或三代以内旁系血亲禁止结婚）。四个条件缺一不可，否则婚姻无效或可撤销。</strong>' },
      { type: 'list', items: ['自愿：不许任何一方对他方强迫，不许任何组织或个人干涉。', '登记：必须亲自到登记机关办理，不能由他人代理。', '效力：完成登记，婚姻关系才确立，仪式不能替代登记。'] },

      { type: 'heading', text: '二、无效婚姻与可撤销婚姻' },
      { type: 'paragraph', text: '有些婚姻从法律上"不成立"，有些则可以推翻。分清无效和可撤销，才能正确处理纠纷。' },
      { type: 'table', headers: ['类型', '情形', '后果'], rows: [['无效婚姻', '重婚、有禁止结婚的亲属关系、未到法定婚龄', '自始无效，当事人无夫妻权利义务'], ['可撤销婚姻', '受胁迫结婚、一方隐瞒重大疾病', '受损害方可在一年内请求撤销']] },
      { type: 'keypoint', label: '重点·胁迫结婚可撤销', text: '<strong>因胁迫结婚的，受胁迫一方可以向人民法院请求撤销婚姻，应当自胁迫行为终止之日起一年内提出；被非法限制人身自由的，自恢复自由之日起一年内提出。被隐瞒重大疾病的，另一方可自知道之日起一年内请求撤销。撤销后婚姻自始无效。</strong>' },
      { type: 'warn', label: '易错·无效和可撤销后果相同但原因不同', text: '二者最终都"自始无效"，但性质不同：无效婚姻是严重违法（如重婚），国家主动否定；可撤销婚姻是意思不自由或有隐瞒，需由受损害方在期限内主动主张，过期不撤销则婚姻继续有效。不要把"受胁迫一年"和"隐瞒疾病一年"的起算点搞混。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">结婚的法定条件</text><rect x="40" y="70" width="170" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="125" y="105" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">完全自愿</text><rect x="255" y="70" width="170" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="340" y="105" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">法定婚龄</text><rect x="470" y="70" width="170" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="555" y="105" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">一夫一妻</text><rect x="255" y="160" width="170" height="60" rx="10" fill="#b8334a"/><text x="340" y="195" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">无禁婚亲属</text><text x="340" y="270" font-size="12" fill="#3d1f24" text-anchor="middle">四条件同时满足，且须亲自登记，婚姻才成立。</text></svg>', caption: '图1　结婚须同时满足四项法定条件并登记。' },

      { type: 'heading', text: '三、夫妻财产关系' },
      { type: 'paragraph', text: '结了婚，钱怎么算？法律把夫妻财产区分为共同财产和个人财产。弄清界限，既避免纠纷，也保护双方权益。' },
      { type: 'table', headers: ['类别', '范围'], rows: [['夫妻共同财产', '婚姻存续期间的工资、奖金、生产经营收益、知识产权收益、继承或受赠（明确给双方的）财产等'], ['夫妻个人财产', '一方婚前财产、因受到人身损害获得的赔偿、遗嘱或赠与合同中确定只归一方的财产、一方专用生活用品等']] },
      { type: 'keypoint', label: '重点·共同财产平等处理', text: '<strong>夫妻对共同财产有平等的处理权，不因收入高低而不同。婚姻关系存续期间所得的一般归共同所有；但一方婚前买的房、因工伤获赔的医疗费等属个人财产，离婚时不参与分割。约定优先于法定：夫妻可以书面约定财产归属。</strong>' },
      { type: 'warn', label: '易错·婚前房婚后增值未必是共同财产', text: '一方婚前个人房产，婚后自然增值和孳息一般仍属个人财产；但若婚后用共同收入还贷，则共同还贷及对应增值部分可能要在离婚时进行补偿。别简单认为"结婚后一切都共有"。区分"婚前个人财产"与"婚后共同投入"是关键。' },

      { type: 'heading', text: '四、离婚：好聚好散也要依法' },
      { type: 'paragraph', text: '婚姻可以解除，但必须依法进行。离婚有协议离婚和诉讼离婚两种方式，法律还设置了冷静期，目的是减少冲动离婚。' },
      { type: 'list', items: ['协议离婚：双方自愿并就子女、财产等达成一致，到登记机关申请，经过30日冷静期后领证。', '诉讼离婚：一方要求离婚、对方不同意的，可向法院起诉；法院应进行调解，感情确已破裂才判离。', '限制：女方在怀孕期间、分娩后一年内或终止妊娠后六个月内，男方不得提出离婚（女方提出或法院认为必要除外）。'] },
      { type: 'example', label: '例子·冷静期不是"拦着不离"', text: '夫妻俩闹矛盾去民政局办离婚，工作人员受理后会进入30日离婚冷静期。这30天里任何一方反悔都可撤回申请；期满双方仍坚持，再去领离婚证。冷静期不是不让离，而是给冲动的双方一个缓冲，避免一时之气铸成遗憾，保障婚姻稳定。' },
      { type: 'tip', label: '学习提示', text: '本课主线：结婚（条件+登记）→ 效力（无效/可撤销）→ 财产（共同/个人）→ 离婚（协议/诉讼+冷静期）。记住"登记才生效""约定优于法定""冷静期30日"这几个硬数字，考试常直接考。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">夫妻财产的二分</text><rect x="60" y="80" width="260" height="170" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="190" y="115" font-size="15" fill="#3d1f24" text-anchor="middle" font-weight="bold">共同财产</text><text x="190" y="145" font-size="12" fill="#3d1f24" text-anchor="middle">婚后工资·经营收益</text><text x="190" y="170" font-size="12" fill="#3d1f24" text-anchor="middle">知识产权收益</text><text x="190" y="195" font-size="12" fill="#3d1f24" text-anchor="middle">继承受赠（给双方）</text><text x="190" y="220" font-size="12" fill="#3d1f24" text-anchor="middle">平等处理权</text><rect x="360" y="80" width="260" height="170" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="490" y="115" font-size="15" fill="#3d1f24" text-anchor="middle" font-weight="bold">个人财产</text><text x="490" y="145" font-size="12" fill="#3d1f24" text-anchor="middle">婚前财产</text><text x="490" y="170" font-size="12" fill="#3d1f24" text-anchor="middle">人身损害赔偿</text><text x="490" y="195" font-size="12" fill="#3d1f24" text-anchor="middle">遗嘱指定归一方</text><text x="490" y="220" font-size="12" fill="#3d1f24" text-anchor="middle">专用生活用品</text><text x="340" y="290" font-size="12" fill="#3d1f24" text-anchor="middle">约定优于法定，书面约定可改变上述划分。</text></svg>', caption: '图2　夫妻财产分为共同财产与个人财产。' },

      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">离婚的两种路径</text><rect x="60" y="80" width="260" height="80" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="190" y="115" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">协议离婚</text><text x="190" y="140" font-size="12" fill="#3d1f24" text-anchor="middle">自愿+冷静期30日</text><rect x="360" y="80" width="260" height="80" rx="10" fill="#b8334a"/><text x="490" y="115" font-size="14" fill="#fff" text-anchor="middle" font-weight="bold">诉讼离婚</text><text x="490" y="140" font-size="12" fill="#fff" text-anchor="middle">起诉+调解+判离</text><text x="340" y="210" font-size="12" fill="#3d1f24" text-anchor="middle">感情确已破裂是诉讼离婚判离的标准。</text><text x="340" y="245" font-size="12" fill="#3d1f24" text-anchor="middle">特殊时期限制男方离婚诉权，保护女方。</text></svg>', caption: '图3　离婚有协议与诉讼两种方式。' }
    ],
    exercises: [
      { type: 'choice', question: '关于结婚，下列说法正确的是？', options: ['办酒席即确立婚姻关系', '男22周岁女20周岁为法定婚龄', '可由父母代办登记', '表兄妹可以结婚'], answer: '男22周岁女20周岁为法定婚龄', explanation: '我国法定婚龄为男不得早于22周岁、女不得早于20周岁；结婚必须双方完全自愿、亲自到登记机关登记，完成登记才确立婚姻关系，办酒席不能替代登记，也不能由他人代理。直系血亲和三代以内旁系血亲（如表兄妹）禁止结婚。因此只有"男22女20为法定婚龄"正确。' },
      { type: 'choice', question: '下列属于夫妻个人财产的是？', options: ['婚后工资收入', '婚后经营店铺收益', '一方因工伤获得的赔偿', '婚后继承且未指定归一方的财产'], answer: '一方因工伤获得的赔偿', explanation: '夫妻个人财产包括一方婚前财产、因受到人身损害获得的赔偿或补偿、遗嘱或赠与合同中确定只归一方的财产、一方专用的生活用品等。婚后工资、经营收益、未指定归一方的继承财产一般属夫妻共同财产。所以"一方因工伤获得的赔偿"属于个人财产，离婚时不予分割。' },
      { type: 'choice', question: '关于协议离婚，下列说法正确的是？', options: ['无需冷静期', '有30日离婚冷静期', '必须向法院申请', '冷静期内不能撤回'], answer: '有30日离婚冷静期', explanation: '协议离婚要求双方自愿并就子女、财产等达成一致，到婚姻登记机关申请，之后进入30日离婚冷静期；冷静期内任何一方可撤回申请，期满双方仍坚持才可领证。协议离婚是向登记机关而非法院申请，且冷静期内可以撤回。所以"有30日离婚冷静期"正确。' },
      { type: 'fill', question: '结婚须同时满足：男女双方___、达到___、符合___、没有禁止结婚的___。', answer: '完全自愿；法定婚龄（男22女20）；一夫一妻制；亲属关系', explanation: '结婚的法定条件有四：一是男女双方完全自愿，不许强迫和干涉；二是达到法定婚龄（男22周岁、女20周岁）；三是符合一夫一妻制；四是双方不属于直系血亲或三代以内旁系血亲等禁止结婚的亲属关系。四条件缺一不可，否则婚姻无效或可撤销。' },
      { type: 'fill', question: '受胁迫结婚的，受胁迫方应自胁迫行为终止之日起___内请求撤销；被隐瞒重大疾病的，另一方可自知道之日起___内请求撤销。', answer: '一年；一年', explanation: '可撤销婚姻中，因胁迫结婚的，受胁迫一方应自胁迫行为终止之日起一年内向人民法院请求撤销；被非法限制人身自由的，自恢复自由之日起一年内提出。一方隐瞒重大疾病的，另一方可自知道或应当知道撤销事由之日起一年内请求撤销。两类的撤销权都受一年除斥期间限制，逾期则婚姻继续有效。' }
    ]
  });
})();
