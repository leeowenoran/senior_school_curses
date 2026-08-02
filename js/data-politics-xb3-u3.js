/* 思想政治 · 选择性必修3 · 逻辑与思维 · 第三课 领会科学思维 */
(function () {
  var v = gzGetVolume('politics', 'xb3');
  if (!v) return;
  v.points.push({
    id: 'xb3-u3',
    name: '第三课 领会科学思维',
    chapter: '高二思想政治（选择性必修3 逻辑与思维）· 第三课 领会科学思维',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、科学思维是什么' },
      { type: 'paragraph', text: '前面两课我们认识了思维、逻辑。那什么样的思维才算"好"的、值得追求的？答案就是科学思维。科学思维不是某一种具体的思维形态，而是对所有"靠谱思维"的统称——它既要求内容站得住，也要求形式过得硬。' },
      { type: 'keypoint', label: '重点·科学思维的两个基本条件', text: '<strong>科学思维泛指符合认识规律、遵循逻辑规则的思维，是能够达到正确认识结果的思维。它有两个基本条件：第一，内容真实（反映的对象是客观存在的、符合实际的）；第二，形式正确（遵守逻辑规则，推理结构没有毛病）。两个条件缺一不可，就像一道菜既要食材新鲜（内容真实），又要烹饪得法（形式正确）。</strong>' },
      { type: 'list', items: ['内容真实：思维所反映的对象是客观存在的，结论与事实相符。', '形式正确：思维过程遵守逻辑规则，概念明确、判断恰当、推理有效。', '二者关系：只有内容真实加形式正确，才能叫科学思维，也才能得出正确结论。'] },
      { type: 'example', label: '例子·从"地心说"到"日心说"', text: '古人长期相信"太阳绕地球转"（地心说），它在当时逻辑自洽，但内容不真实——事实是地球绕太阳转。后来哥白尼提出日心说，既符合观测事实（内容真实），又能用天体力学严谨推导（形式正确），于是成为科学思维的代表。可见内容真实是科学思维的硬指标。' },

      { type: 'heading', text: '二、科学思维的三大特征' },
      { type: 'paragraph', text: '科学思维之所以"科学"，在于它具备三个鲜明特征。这三个特征把科学思维和胡乱猜想、主观臆断清楚地区分开来。' },
      { type: 'table', headers: ['特征', '内涵（是什么意思）'], rows: [['追求认识的客观性', '追问事实真相，追求真理性认识结果，努力揭示事物的本质和规律'], ['结果具有预见性', '在对事物规律把握的基础上，能对事物的发展趋势、前景作出推断'], ['结果具有可检验性', '形成的认识能够接受实践的严格检验，对错可由实践判定']] },
      { type: 'example', label: '例子·天气预报里的三个特征', text: '气象台根据卫星、气压等真实数据（客观性）推算出"三天后台风将在某登陆"（预见性），事后台风是否如期登陆，一目了然（可检验性）。一次成功的预报，把科学思维的三个特征全演示了一遍。' },
      { type: 'warn', label: '易错·科学思维不是"并列"的思维形态', text: '这是本课最容易踩的坑。科学思维不是和"逻辑思维、辩证思维、创新思维"平起平坐的第四种思维形态，而是对"实践中遵循逻辑要求、运用辩证方法、创造性解决问题"的那类思维的统称。换句话说：逻辑思维、辩证思维、创新思维只要做得好、符合两个基本条件，就都是科学思维。别把科学思维当成孤立的一类。' },

      { type: 'heading', text: '三、学习科学思维的意义' },
      { type: 'paragraph', text: '学科学思维不只是为了考试，它对我们的成长大有好处。课本从两个层面讲意义：一是思维素养层面，二是思想政治层面。' },
      { type: 'list', items: ['思维素养意义：捍卫真理；揭示和把握事物的本质和规律；提高我们的创新能力。', '思想政治意义：帮助我们提高政治站位和思想水平，自觉拥护科学理论和正确路线。'] },
      { type: 'list', items: ['对个人的用：学会理性思考，不人云亦云，遇到争议能抓住要害、辨别真伪。', '对学习的用：把科学思维用到各科，解题更讲逻辑、作文更有条理。', '对成长的用：在面临选择时，能用预见性和可检验性去评估方案，少走弯路。'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">科学思维的两个基本条件</text><rect x="90" y="70" width="220" height="150" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="200" y="110" font-size="15" fill="#3d1f24" text-anchor="middle" font-weight="bold">内容真实</text><text x="200" y="140" font-size="12" fill="#3d1f24" text-anchor="middle">食材新鲜</text><text x="200" y="165" font-size="12" fill="#3d1f24" text-anchor="middle">反映客观事实</text><text x="200" y="195" font-size="11" fill="#3d1f24" text-anchor="middle">结论与事实相符</text><rect x="370" y="70" width="220" height="150" rx="10" fill="#b8334a"/><text x="480" y="110" font-size="15" fill="#fff" text-anchor="middle" font-weight="bold">形式正确</text><text x="480" y="140" font-size="12" fill="#fff" text-anchor="middle">烹饪得法</text><text x="480" y="165" font-size="12" fill="#fff" text-anchor="middle">遵守逻辑规则</text><text x="480" y="195" font-size="11" fill="#fff" text-anchor="middle">推理结构无误</text><text x="340" y="260" font-size="12" fill="#3d1f24" text-anchor="middle">两个基本条件同时满足，才是科学思维。</text></svg>', caption: '图1　科学思维：内容真实 + 形式正确。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">科学思维的三大特征</text><rect x="60" y="70" width="170" height="80" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="145" y="105" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">客观性</text><text x="145" y="128" font-size="11" fill="#3d1f24" text-anchor="middle">求真</text><rect x="255" y="70" width="170" height="80" rx="10" fill="#b8334a"/><text x="340" y="105" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">预见性</text><text x="340" y="128" font-size="11" fill="#fff" text-anchor="middle">断趋势</text><rect x="450" y="70" width="170" height="80" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="535" y="105" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">可检验</text><text x="535" y="128" font-size="11" fill="#3d1f24" text-anchor="middle">受实践</text><text x="340" y="200" font-size="13" fill="#3d1f24" text-anchor="middle">客观性打底，预见性向前看，可检验性兜底。</text></svg>', caption: '图2　科学思维的三大特征。' },
      { type: 'tip', label: '学习提示', text: '记住一句话就不会把科学思维当"第四种思维"：逻辑思维、辩证思维、创新思维是"方法"，科学思维是"标准"。凡是遵循逻辑、运用辩证、敢于创新并且内容真实、形式正确的思维，都算科学思维。考试若问"三者的关系"，就答"科学思维是对它们的统称"。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="270" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">学习科学思维的两层意义</text><rect x="80" y="70" width="240" height="120" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="200" y="105" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">思维素养意义</text><text x="200" y="132" font-size="12" fill="#3d1f24" text-anchor="middle">捍卫真理·把握本质</text><text x="200" y="156" font-size="12" fill="#3d1f24" text-anchor="middle">提高创新能力</text><rect x="360" y="70" width="240" height="120" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="480" y="105" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">思想政治意义</text><text x="480" y="132" font-size="12" fill="#3d1f24" text-anchor="middle">提高政治站位</text><text x="480" y="156" font-size="12" fill="#3d1f24" text-anchor="middle">提升思想水平</text><text x="340" y="235" font-size="12" fill="#3d1f24" text-anchor="middle">从"会思考"到"思想正"，科学思维助人全面成长。</text></svg>', caption: '图3　学习科学思维在思维素养和思想政治两层面的意义。' }
    ],
    exercises: [
      { type: 'choice', question: '关于科学思维，下列说法正确的是？', options: ['科学思维是与逻辑思维并列的一种思维形态', '科学思维只要形式正确就够了', '科学思维要求内容真实和形式正确', '科学思维不能接受实践检验'], answer: '科学思维要求内容真实和形式正确', explanation: '科学思维泛指符合认识规律、遵循逻辑规则的思维，其两个基本条件是内容真实（反映客观事实）和形式正确（遵守逻辑规则），缺一不可。它不是与逻辑思维、辩证思维并列的第四种形态，而是对它们的统称；科学思维的结果恰恰具有可检验性，要接受实践检验。所以只有"内容真实和形式正确"正确。' },
      { type: 'choice', question: '气象台根据真实数据推算出台风登陆时间，事后被验证准确。这体现了科学思维的？', options: ['只有客观性', '客观性、预见性、可检验性都有', '只有可检验性', '没有体现任何特征'], answer: '客观性、预见性、可检验性都有', explanation: '该过程同时体现三个特征：依据真实观测数据体现客观性；提前推算出台风登陆时间体现预见性；事后登陆与否一目了然、可由实践判定体现可检验性。科学思维的三大特征在这次预报中全部展现，故应选三者皆有。' },
      { type: 'choice', question: '下列对科学思维与逻辑思维关系的理解，正确的是？', options: ['二者毫无关系', '科学思维是对逻辑思维等的统称', '逻辑思维不属于科学思维', '科学思维比逻辑思维更高级'], answer: '科学思维是对逻辑思维等的统称', explanation: '科学思维不是孤立的一种思维形态，而是对"实践中遵循逻辑要求、运用辩证方法、创造性解决问题"的那类思维的统称。因此，符合两个基本条件的逻辑思维、辩证思维、创新思维都属于科学思维。正确表述是"科学思维是对逻辑思维等的统称"。' },
      { type: 'fill', question: '科学思维的两个基本条件是___和___；其中要求"结论与事实相符"的是___。', answer: '内容真实；形式正确；内容真实', explanation: '科学思维泛指符合认识规律、遵循逻辑规则的思维，其两个基本条件是内容真实（思维反映的对象客观存在、结论与事实相符）和形式正确（遵守逻辑规则、推理结构无误）。"结论与事实相符"直接对应内容真实这一条件。填空需写全两个条件并指出内容真实。' },
      { type: 'fill', question: '科学思维的三大特征是追求认识的___、结果具有___、结果具有___；学习它的意义分为___意义和___意义两层。', answer: '客观性；预见性；可检验性；思维素养；思想政治', explanation: '科学思维三大特征：追求认识的客观性（求真）、结果具有预见性（能推断趋势前景）、结果具有可检验性（接受实践检验）。学习意义分两层：思维素养意义（捍卫真理、把握本质、提高创新力）和思想政治意义（提高政治站位和思想水平）。填空依次填客观性、预见性、可检验性、思维素养、思想政治。' }
    ]
  });
})();
