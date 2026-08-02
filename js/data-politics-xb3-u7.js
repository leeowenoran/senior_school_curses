/* 思想政治 · 选择性必修3 · 逻辑与思维 · 第七课 学会归纳推理与类比推理 */
(function () {
  var v = gzGetVolume('politics', 'xb3');
  if (!v) return;
  v.points.push({
    id: 'xb3-u7',
    name: '第七课 学会归纳推理与类比推理',
    chapter: '高二思想政治（选择性必修3 逻辑与思维）· 第七课 学会归纳推理与类比推理',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、归纳推理：从个别走向一般' },
      { type: 'paragraph', text: '演绎推理从一般到个别，而归纳推理走相反方向：从许多个别的事实、现象中，概括出一般性的结论。我们常说的"总结经验""找规律"，背后就是归纳推理。' },
      { type: 'keypoint', label: '重点·归纳推理：个别到一般', text: '<strong>归纳推理是从个别性前提推出一般性结论的推理。它分为两类：完全归纳推理（考察了某类全部对象后得出结论，前提真则结论必真）和不完全归纳推理（只考察部分对象就得出一般结论，结论具有或然性，不一定绝对真）。日常大多数归纳是不完全归纳，所以要警惕"以偏概全"。</strong>' },
      { type: 'list', items: ['完全归纳推理：对某类每一个对象都考察后下结论，结论可靠。', '不完全归纳推理：只考察部分对象，凭此概括全体，结论可能真也可能假。', '提高不完全归纳可靠性的办法：增加考察对象数量、扩大范围、寻找因果联系。'] },
      { type: 'table', headers: ['类型', '前提范围', '结论可靠性'], rows: [['完全归纳推理', '某类全部对象', '前提真则结论必真（保真）'], ['不完全归纳推理', '某类部分对象', '或然（可能真，可能假）']] },
      { type: 'example', label: '例子·"瑞雪兆丰年"是怎么来的', text: '"瑞雪兆丰年"是古人看到几次冬雪后来年丰收，就概括出"下雪预示丰收"的一般结论，这是典型的不完全归纳。它有一定道理（积雪保温、杀虫、补水），但毕竟没考察所有年份，所以不是绝对规律。而"本班40名同学全部通过了考试"若是逐一核对过每人，就是完全归纳，结论铁定真。' },
      { type: 'keypoint', label: '重点·不完全归纳易犯"以偏概全"', text: '<strong>不完全归纳只看了一部分就推广到全体，最容易犯的错就是"以偏概全"：比如只见过两只天鹅是白的，就宣布"所有天鹅都是白的"，后来在澳洲发现黑天鹅就被推翻。因此用不完全归纳作结论时，要说明"样本有限、结论待验证"，不能把或然当必然。</strong>' },
      { type: 'example', label: '例子·"黑天鹅"如何推翻断言', text: '欧洲人长期只见过白天鹅，便由不完全归纳断言"所有天鹅皆白"。直到有人在澳大利亚发现黑天鹅，这个看似铁律的结论瞬间崩塌。这个故事说明：不完全归纳的结论是"挂在不同样本上"的，只要出现一个反例，结论就被推翻，所以下结论务必留有余地。' },
      { type: 'list', items: ['提高不完全归纳可靠性：尽量多考察对象，扩大覆盖面。', '提高不完全归纳可靠性：寻找对象之间的因果联系，而不只是表面相似。', '提高类比可靠性：尽量找本质属性上的相似，而非偶然相似。'] },

      { type: 'heading', text: '二、类比推理：由此及彼' },
      { type: 'paragraph', text: '类比推理是另一种非演绎推理：根据两个或两类对象在某些属性上相同或相似，推出它们在其他属性上也可能相同或相似。它像一座桥，把一个领域的经验搬到另一个领域。' },
      { type: 'list', items: ['类比推理：从个别（或一般）前提推出个别（或一般）结论。', '方法基础：两个对象之间在属性上相同或相似。', '典型应用：仿生学（模仿生物结构发明技术）、法律上的类推适用。'] },
      { type: 'example', label: '例子·从蝙蝠到雷达', text: '科学家发现蝙蝠靠超声波定位，于是类比到人类：如果在飞机上装类似装置发射电磁波并接收回波，也能"看清"地形和障碍——雷达就这样被发明出来。这是类比推理在科技史上最经典的案例：由生物属性类比到机械属性，由此及彼、举一反三。' },
      { type: 'warn', label: '易错·类比结论是"或然"的', text: '类比推理的前提和结论之间不是必然联系，结论只是"可能真"，不是"一定真"。比如"地球和火星都有大气、水、适宜温度，地球有生命，所以火星也有生命"——这个类比看着合理，但火星大气成分、辐射等差异让结论至今未被证实。因此类比结论要经实践检验，不能当成定论直接使用。' },
      { type: 'tip', label: '学习提示', text: '归纳和类比都属"非演绎推理"，结论都超出前提范围、都具创造性，也都不保真。区别在于方向：归纳是"个别→一般"（找共性规律），类比是"个别→个别"（搬相似经验）。做题时看清题干是从许多事例总结规律（归纳），还是由一事物推另一相似事物（类比）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">归纳推理：从个别到一般</text><circle cx="150" cy="150" r="30" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><circle cx="230" cy="150" r="30" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><circle cx="310" cy="150" r="30" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="150" y="155" font-size="12" fill="#3d1f24" text-anchor="middle">个</text><text x="230" y="155" font-size="12" fill="#3d1f24" text-anchor="middle">个</text><text x="310" y="155" font-size="12" fill="#3d1f24" text-anchor="middle">个</text><rect x="450" y="125" width="150" height="60" rx="10" fill="#b8334a"/><text x="525" y="160" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">一般结论</text><line x1="340" y1="150" x2="450" y2="150" stroke="#d4485a" stroke-width="2"/><polygon points="450,150 438,145 438,155" fill="#d4485a"/></svg>', caption: '图1　归纳推理把许多个别事实提炼成一般结论。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">类比推理：由此及彼</text><rect x="120" y="90" width="160" height="90" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="200" y="125" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">对象A</text><text x="200" y="150" font-size="11" fill="#3d1f24" text-anchor="middle">有属性a,b,c</text><rect x="400" y="90" width="160" height="90" rx="10" fill="#b8334a"/><text x="480" y="125" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">对象B</text><text x="480" y="150" font-size="11" fill="#fff" text-anchor="middle">有属性a,b,c?</text><line x1="280" y1="135" x2="400" y2="135" stroke="#d4485a" stroke-width="2"/><polygon points="400,135 388,130 388,140" fill="#d4485a"/><text x="340" y="230" font-size="12" fill="#3d1f24" text-anchor="middle">属性相似 → 推断另一属性也可能相似（或然）</text></svg>', caption: '图2　类比推理依属性相似推断未知属性。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 270" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="270" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">归纳与类比的对比</text><rect x="90" y="70" width="240" height="120" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="210" y="110" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">归纳推理</text><text x="210" y="138" font-size="12" fill="#3d1f24" text-anchor="middle">方向：个别→一般</text><text x="210" y="162" font-size="12" fill="#3d1f24" text-anchor="middle">找共性规律</text><rect x="350" y="70" width="240" height="120" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="470" y="110" font-size="14" fill="#3d1f24" text-anchor="middle" font-weight="bold">类比推理</text><text x="470" y="138" font-size="12" fill="#3d1f24" text-anchor="middle">方向：个别→个别</text><text x="470" y="162" font-size="12" fill="#3d1f24" text-anchor="middle">搬相似经验</text><text x="340" y="235" font-size="12" fill="#3d1f24" text-anchor="middle">二者都超出前提、都具创造性、结论都不保真。</text></svg>', caption: '图3　归纳与类比的方向和用途不同。' }
    ],
    exercises: [
      { type: 'choice', question: '从"金导电、银导电、铜导电"推出"所有金属都导电"，这属于？', options: ['完全归纳推理', '不完全归纳推理', '演绎推理', '类比推理'], answer: '不完全归纳推理', explanation: '该推理只考察了金、银、铜等部分金属（而非全部金属），就概括出"所有金属都导电"的一般结论，属于从个别到一般的归纳推理，且前提未覆盖全体，是不完全归纳推理。完全归纳要求考察每一对象；演绎是从一般到个别；类比是个别到个别。故选"不完全归纳推理"。' },
      { type: 'choice', question: '类比推理的结论具有什么性质？', options: ['必然真', '必然假', '或然（可能真可能假）', '与前提无关'], answer: '或然（可能真可能假）', explanation: '类比推理依据两个对象在某些属性上相同或相似，推断它们在其他属性上也可能相同或相似。前提与结论之间不是必然联系，结论只是"可能真"，不是"一定真"，需要实践检验。所以类比结论是或然的。这正是它与演绎推理（保真）的根本区别，也是易错点。' },
      { type: 'choice', question: '"只见过几只白天鹅，就断言所有天鹅都是白的"犯了什么逻辑错误？', options: ['偷换概念', '自相矛盾', '以偏概全', '两不可'], answer: '以偏概全', explanation: '这是用不完全归纳、只考察少数样本就推广到全体的典型错误，称为"以偏概全"。不完全归纳的结论本就具有或然性，不能把"部分白"当成"全部白"。后来黑天鹅的发现推翻了这一断言，正说明以偏概全的危害。它不属于偷换概念、自相矛盾或两不可等逻辑规律错误。' },
      { type: 'fill', question: '归纳推理是从___性前提推出___性结论；分为完全归纳和___归纳两类。', answer: '个别；一般；不完全', explanation: '归纳推理的方向与演绎相反：从个别性前提推出一般性结论，如从多个具体事例概括出普遍规律。它分为完全归纳推理（考察全部对象，结论保真）和不完全归纳推理（只考察部分对象，结论或然）两类。填空依次填：个别、一般、不完全。' },
      { type: 'fill', question: '类比推理是根据两个对象在属性上___或___，推出它们在其他属性上也可能相同或相似的推理；其结论需经___检验。仿生学中由蝙蝠发明___是著名案例。', answer: '相同；相似；实践；雷达', explanation: '类比推理建立在两个或两类对象某些属性相同、相似的基础上，据此推断它们在别的属性上也可能相似，结论超出前提、不保真，必须经实践检验。科技史上经典案例是科学家由蝙蝠用超声波定位类比发明雷达。填空依次填：相同、相似、实践、雷达。' }
    ]
  });
})();
