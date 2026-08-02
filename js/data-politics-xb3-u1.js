/* 思想政治 · 选择性必修3 · 逻辑与思维 · 第一课 走进思维世界 */
(function () {
  var v = gzGetVolume('politics', 'xb3');
  if (!v) return;
  v.points.push({
    id: 'xb3-u1',
    name: '第一课 走进思维世界',
    chapter: '高二思想政治（选择性必修3 逻辑与思维）· 第一课 走进思维世界',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是"思维"：从日常说到课本' },
      { type: 'paragraph', text: '我们常说"好好动动脑子""他这人很有想法"，这里的"脑子""想法"说的就是思维。在哲学和逻辑里，"思维"这个词有宽有窄：平常我们把它和"意识""认识"混着用；课本则把它限定在更精确的范围里，专门指人脑对事物本质和规律的反映。弄清楚课本讲的"思维"到底指什么，是学习整本书的第一步。' },
      { type: 'keypoint', label: '重点·本书的"思维"指理性认识', text: '<strong>《逻辑与思维》里的"思维"主要从狭义来讲，也就是理性认识——认识的高级阶段，是对事物本质及其规律的反映。它和"感性认识"（对事物现象、外部联系的反映）相对。简单说：看见苹果落地是感性认识，想明白"万有引力"才是思维。记住"思维=理性认识=抓本质规律"这个等式，后面很多内容都建立在这上面。</strong>' },
      { type: 'list', items: ['广义思维：和"意识"同义，既包括感性认识，也包括理性认识，是个大口袋。', '狭义思维：和"理性认识"同义，是对事物本质和规律的反映，是认识的高级阶段。', '感性认识：人脑对客观事物现象和外部联系的反映，是认识的初级阶段（看、听、摸得到的）。', '理性认识：人脑对事物本质和规律的反映，是认识的高级阶段（想明白"为什么"）。'] },

      { type: 'heading', text: '二、思维的三个共同特征' },
      { type: 'paragraph', text: '不管什么内容、什么形式的思维，只要是人的思维，就有三个大家都具备的共同特征：间接性、概括性、能动性。这三个词听起来抽象，其实每天都发生在我们身上。下面用一张表把它们讲清楚。' },
      { type: 'table', headers: ['特征', '内涵（是什么意思）', '生活里的样子'], rows: [['间接性', '凭借感性材料、已有经验和知识，透过现象揭示本质和规律', '医生看化验单推断病因，而不是靠"看一眼"就下结论'], ['概括性', '从多种事物及其属性中，抓住内在的、共同的、本质的属性', '从无数只鸟中概括出"鸟是有羽毛、卵生的脊椎动物"'], ['能动性', '提炼加工感性材料，形成有别于客观实际的认识，有目的、选择、创造、预见', '工程师按图纸想象出还没建成的桥，并提前预见它的承重']] },
      { type: 'example', label: '例子·一次看病看懂三个特征', text: '小明发烧去诊所。医生没有"看见"病毒，而是根据体温、血象（感性材料）推断出是细菌感染（间接性）；医生脑子里装的不是小明一个人，而是成千上万病人的共同规律（概括性）；医生还结合经验判断该用哪种药、预计几天能好（能动性）。你看，一次普通看病，三个特征全齐了。' },
      { type: 'keypoint', label: '重点·概括性最容易被考', text: '<strong>概括性是思维把"许多个别"提炼成"共同本质"的本领。考试常让你判断一句话体现的是哪个特征：如果是"从现象推出看不见的本质"，选间接性；如果是"总结出共同规律"，选概括性；如果是"有目的、有创造地构想"，选能动性。三句话分别对应"推本质、抓共性、能创造"。</strong>' },
      { type: 'warn', label: '易错·能动性不是"胡思乱想"', text: '有同学把"能动性"理解成思维可以随便脱离现实、天马行空。这是错的。能动性是"提炼加工感性材料后形成认识"，它仍然以实践获得的材料为基础，并且正确的思维要能指导实践、接受检验。凭空乱想、违背规律，不是能动性，而是主观臆断。能动性强调"加工"，不是"凭空编造"。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">思维的三个共同特征</text><rect x="40" y="70" width="180" height="80" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="130" y="105" font-size="15" fill="#3d1f24" text-anchor="middle" font-weight="bold">间接性</text><text x="130" y="130" font-size="11" fill="#3d1f24" text-anchor="middle">推本质</text><rect x="250" y="70" width="180" height="80" rx="10" fill="#b8334a"/><text x="340" y="105" font-size="15" fill="#fff" text-anchor="middle" font-weight="bold">概括性</text><text x="340" y="130" font-size="11" fill="#fff" text-anchor="middle">抓共性</text><rect x="460" y="70" width="180" height="80" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="550" y="105" font-size="15" fill="#3d1f24" text-anchor="middle" font-weight="bold">能动性</text><text x="550" y="130" font-size="11" fill="#3d1f24" text-anchor="middle">能创造</text><text x="340" y="200" font-size="13" fill="#3d1f24" text-anchor="middle">三个特征同时存在，缺一不可，是"人的思维"的标配。</text><text x="340" y="235" font-size="12" fill="#3d1f24" text-anchor="middle">间接性=透过现象看本质；概括性=提炼共同本质；能动性=加工创造。</text></svg>', caption: '图1　思维的间接性、概括性、能动性三个特征。' },

      { type: 'heading', text: '三、思维的基本形态：抽象思维与形象思维' },
      { type: 'paragraph', text: '同样是"想事情"，有的人爱用概念、公式推来推去，有的人爱用画面、故事去联想。这就引出思维的两种基本形态：抽象思维和形象思维。它们不是谁好谁坏，而是各有擅长，常常配合着用。' },
      { type: 'table', headers: ['', '抽象思维', '形象思维'], rows: [['含义', '以概念、判断和推理等反映对象，揭示本质和规律', '在感觉、知觉、表象基础上，用联想、想象、幻想反映对象'], ['基本单元', '概念性', '形象性'], ['运行方式', '推导性（一步一步推理）', '想象性（一幅幅画面）'], ['思维表达', '严谨性（逻辑清楚）', '情感性（生动可感）']] },
      { type: 'example', label: '例子·解数学题 vs 画一幅画', text: '做几何题时，你写"因为三角形内角和等于180度，所以……"，这是抽象思维在干活，靠概念和推理。而画家画一条河，脑子里是先浮现水的波纹、岸边的柳枝，再下笔，这是形象思维在干活，靠表象和想象。一个大科学家也常常形象思维发达，爱因斯坦就说过自己常靠"思想实验"的画面来突破。' },
      { type: 'tip', label: '学习提示', text: '区分两种形态看"用的什么工具"：用概念、判断、推理的是抽象思维；用画面、联想、想象的是形象思维。二者区分是相对的，写文章既要逻辑严密（抽象），又要生动形象（形象），实际思考中它们相辅相成。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">抽象思维与形象思维</text><rect x="60" y="70" width="250" height="170" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="185" y="100" font-size="15" fill="#3d1f24" text-anchor="middle" font-weight="bold">抽象思维</text><text x="185" y="130" font-size="12" fill="#3d1f24" text-anchor="middle">工具：概念·判断·推理</text><text x="185" y="155" font-size="12" fill="#3d1f24" text-anchor="middle">单元：概念性</text><text x="185" y="180" font-size="12" fill="#3d1f24" text-anchor="middle">方式：推导性</text><text x="185" y="205" font-size="12" fill="#3d1f24" text-anchor="middle">表达：严谨</text><rect x="370" y="70" width="250" height="170" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="495" y="100" font-size="15" fill="#3d1f24" text-anchor="middle" font-weight="bold">形象思维</text><text x="495" y="130" font-size="12" fill="#3d1f24" text-anchor="middle">工具：联想·想象·幻想</text><text x="495" y="155" font-size="12" fill="#3d1f24" text-anchor="middle">单元：形象性</text><text x="495" y="180" font-size="12" fill="#3d1f24" text-anchor="middle">方式：想象性</text><text x="495" y="205" font-size="12" fill="#3d1f24" text-anchor="middle">表达：情感</text></svg>', caption: '图2　抽象思维与形象思维的对照。' },

      { type: 'heading', text: '四、思维与实践的关系' },
      { type: 'paragraph', text: '思维再聪明，也不是从天上掉下来的。它来自我们亲手做的、亲眼见的、亲自参与的活动——也就是实践。弄清思维和实践活动的关系，才能明白为什么要"知行合一"。' },
      { type: 'list', items: ['思维在实践中产生：人先有了劳动、交往等实践活动，才慢慢发展出思维。', '思维在实践中发展：实践不断提出新问题，推动思维向前走、越来越深。', '思维反作用于实践：正确的思维能指导人们在实践中实现预期目的，错误的思维会把人带偏。'] },
      { type: 'keypoint', label: '重点·实践是思维的源头和检验场', text: '<strong>思维和实践是"源"和"流"的关系：实践是唯一来源，思维是实践的产物和反映；同时思维又回头指导实践。正因为思维来自实践、要接受实践检验，所以后面才强调"科学思维"必须内容真实、能被实践验证。这句话是连接第一单元和后面各单元的主线。</strong>' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">思维与实践的辩证关系</text><ellipse cx="200" cy="150" rx="110" ry="60" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="200" y="146" font-size="15" fill="#3d1f24" text-anchor="middle" font-weight="bold">实践</text><text x="200" y="168" font-size="11" fill="#3d1f24" text-anchor="middle">产生·发展</text><ellipse cx="480" cy="150" rx="110" ry="60" fill="#b8334a"/><text x="480" y="146" font-size="15" fill="#fff" text-anchor="middle" font-weight="bold">思维</text><text x="480" y="168" font-size="11" fill="#fff" text-anchor="middle">反作用</text><path d="M310 130 C 380 90, 380 90, 372 120" stroke="#d4485a" stroke-width="2" fill="none"/><polygon points="372,120 360,118 368,130" fill="#d4485a"/><path d="M370 170 C 380 210, 380 210, 310 170" stroke="#d4485a" stroke-width="2" fill="none"/><polygon points="310,170 322,168 314,180" fill="#d4485a"/><text x="340" y="250" font-size="12" fill="#3d1f24" text-anchor="middle">实践给思维供给养料，思维又指导实践，二者循环上升。</text></svg>', caption: '图3　思维在实践中产生和发展，又反作用于实践。' }
    ],
    exercises: [
      { type: 'choice', question: '《逻辑与思维》中讲的"思维"主要是指？', options: ['广义的思维，即意识', '狭义的思维，即理性认识', '感性认识', '只包括形象思维'], answer: '狭义的思维，即理性认识', explanation: '课本里的"思维"从狭义角度讲，指理性认识，也就是认识的高级阶段，是对事物本质及其规律的反映。它和感性认识（对现象、外部联系的反映）相对。广义思维才和意识同义，包含感性和理性两部分，但本书不用这个宽口径。所以正确选项是"狭义的思维，即理性认识"。' },
      { type: 'choice', question: '医生根据化验单和症状推断病人感染病菌，主要体现了思维的？', options: ['间接性', '概括性', '能动性', '形象性'], answer: '间接性', explanation: '思维的间接性是指凭借感性材料、已有经验和知识，透过现象揭示事物的本质和规律。医生没有直接"看见"病菌，而是借助化验单、症状这些感性材料推断出病因，正是"透过现象看本质"，属于间接性。概括性强调从多个事物中抓共同本质，能动性强调有目的创造性地加工，均不贴切。' },
      { type: 'choice', question: '从许多只具体的鸟中概括出"鸟是有羽毛、卵生的脊椎动物"，体现了思维的？', options: ['间接性', '概括性', '能动性', '严谨性'], answer: '概括性', explanation: '概括性是思维从多种事物及其属性中，抓住内在的、共同的、本质的属性的本领。把千差万别的鸟提炼成"有羽毛、卵生的脊椎动物"这个共同本质，正是概括性的体现。间接性侧重由现象推本质，能动性侧重有目的创造，严谨性是抽象思维的表达特点，都不符合这一描述。' },
      { type: 'fill', question: '思维的三个共同特征是___、___和___；其中从多种事物中抓住共同本质属性的是___。', answer: '间接性；概括性；能动性；概括性', explanation: '人的思维具有三个共同特征：间接性（透过现象揭示本质和规律）、概括性（从多种事物中抓住共同的本质属性）、能动性（有目的、选择、创造、预见地加工材料）。把许多个别事物提炼成共同本质，正是概括性的定义。填空要完整写出三个特征，并明确"概括性"对应抓共同本质。' },
      { type: 'fill', question: '思维在___中产生，在___中发展，又___于实践；其中___是思维的来源和检验场。', answer: '实践；实践；反作用；实践', explanation: '思维与实践密不可分：思维在实践中产生、在实践中发展，同时又反作用于实践，正确的思维能指导实践实现预期目的。实践是唯一来源，也是检验思维是否正确的场所。记住"实践—思维—实践"的循环上升关系，是理解全书"科学思维要接受实践检验"这句话的基础。' }
    ]
  });
})();
