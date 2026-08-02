/* 思想政治 · 选择性必修3 · 逻辑与思维 · 第六课 掌握演绎推理方法 */
(function () {
  var v = gzGetVolume('politics', 'xb3');
  if (!v) return;
  v.points.push({
    id: 'xb3-u6',
    name: '第六课 掌握演绎推理方法',
    chapter: '高二思想政治（选择性必修3 逻辑与思维）· 第六课 掌握演绎推理方法',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、推理与演绎推理概述' },
      { type: 'paragraph', text: '从已知推出未知，是人类最了不起的本领。看到乌云推断要下雨，由"人都会死"推出"苏格拉底会死"，这都是推理。推理把判断串起来，使我们能从已经知道的东西走向还不知道的东西。' },
      { type: 'keypoint', label: '重点·演绎推理：从一般到个别', text: '<strong>推理是由一个或几个已知前提推导出一个新结论的思维形式。演绎推理是从一般性前提推出个别性结论的推理（如从"所有金属导电"推出"这块铁导电"）。演绎推理的关键不在于内容，而在于"形式结构"：只要前提真、形式结构正确，结论就必然真。所以教材强调——从真前提推出真结论，取决于思想的形式结构是否正确。</strong>' },
      { type: 'list', items: ['推理的构成：前提（已知的判断）+ 结论（推出的新判断）。', '推理按方向分：演绎推理（一般到个别）、归纳推理（个别到一般）、类比推理（个别到个别）。', '演绎推理保真：前提真且结构正确，结论一定真。'] },

      { type: 'heading', text: '二、简单判断的演绎推理方法' },
      { type: 'paragraph', text: '以简单判断为前提的演绎推理，主要有换质法、换位法和三段论。它们处理的是性质判断内部项（主项、谓项）的关系。' },
      { type: 'table', headers: ['方法', '做什么', '要点'], rows: [['换质法', '改变判断的质（肯定变否定，或反之），谓项变矛盾概念', '如"所有金属都导电"→"所有金属都不是不导电的"'], ['换位法', '调换主项和谓项的位置', '注意项的周延性，全称肯定一般不能简单换位'], ['三段论', '由两个含共同项的性质判断推出新性质判断', '如"人都会死，苏格拉底是人，所以苏格拉底会死"']] },
      { type: 'example', label: '例子·经典三段论', text: '大前提：所有的人都会死（全称肯定）。小前提：苏格拉底是人。结论：所以苏格拉底会死。这里"人"是两个前提的共同项（中项），它把大前提和小前提连起来，推出关于苏格拉底的结论。三段论是演绎推理最典型的代表，逻辑严密、结论必然。' },
      { type: 'warn', label: '易错·三段论的中项至少周延一次', text: '三段论最容易犯的规则错误是"中项不周延"。中项（两个前提共有的那个概念）在前提中至少要有一次是周延的（即被全部断定），否则就推不出必然结论。比如"老虎是动物，猫是动物，所以猫是老虎"——"动物"作为中项在两个前提中都不周延（都没断定全部动物），于是推理无效。做题时一定检查中项是否周延。' },

      { type: 'heading', text: '三、复合判断的演绎推理方法' },
      { type: 'paragraph', text: '以复合判断为前提的演绎推理，依据联结词的不同分为联言推理、选言推理和假言推理。它们的规则直接来自上一课复合判断的真假规律。' },
      { type: 'list', items: ['联言推理：分解式（由整体真推出部分真）与合成式（由各部分真推出整体真）。', '选言推理：相容选言用"否定肯定式"（否定一部分，肯定另一部分）；不相容选言还可用"肯定否定式"。', '假言推理：充分条件用"肯定前件式、否定后件式"；必要条件用"否定前件式、肯定后件式"。'] },
      { type: 'table', headers: ['类型', '有效式', '例子'], rows: [['充分条件假言', '肯定前件式、否定后件式', '"如果下雨地就湿；下雨了→地湿"（肯前）；"地没湿→没下雨"（否后）'], ['必要条件假言', '否定前件式、肯定后件式', '"只有年满18才能投票；未满18→不能投"（否前）；"投了票→年满18"（肯后）']] },
      { type: 'example', label: '例子·充分条件假言推理', text: '前提："如果明天下雨，就不去郊游"（充分条件：下雨→不去）。肯定前件式：明天下雨了，所以不去郊游（有效）。否定后件式：去郊游了，说明明天没下雨（有效）。但若"没下雨"就推"去郊游"，或"没去郊游"就推"下雨了"，都属于无效式——因为充分条件只保证"前件真则后件真"，不保证反向。' },
      { type: 'tip', label: '学习提示', text: '演绎推理的口诀：换质换位看"项"的周延，三段论盯"中项"周延一次；复合推理按联结词套规则——联言重"全真"，选言重"否定肯定"，假言重"充分肯前/否后、必要否前/肯后"。背熟这几条，演绎推理题基本稳拿分。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">演绎推理：从一般到个别</text><rect x="120" y="70" width="180" height="70" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="210" y="105" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">一般前提</text><rect x="380" y="70" width="180" height="70" rx="10" fill="#b8334a"/><text x="470" y="105" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">个别结论</text><line x1="300" y1="105" x2="380" y2="105" stroke="#d4485a" stroke-width="2"/><polygon points="380,105 368,100 368,110" fill="#d4485a"/><text x="340" y="200" font-size="12" fill="#3d1f24" text-anchor="middle">前提真 + 形式结构正确 → 结论必然真</text></svg>', caption: '图1　演绎推理由一般前提推出个别结论。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">三段论的结构</text><rect x="80" y="80" width="200" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="180" y="115" font-size="12" fill="#3d1f24" text-anchor="middle">大前提：人都会死</text><rect x="400" y="80" width="200" height="60" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="500" y="115" font-size="12" fill="#3d1f24" text-anchor="middle">小前提：苏格拉底是人</text><rect x="240" y="180" width="200" height="60" rx="10" fill="#b8334a"/><text x="340" y="215" font-size="12" fill="#fff" text-anchor="middle">结论：苏格拉底会死</text><text x="340" y="265" font-size="12" fill="#3d1f24" text-anchor="middle">中项"人"连接两个前提，推理成立。</text></svg>', caption: '图2　三段论：中项连接大小前提推出结论。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#fbeef0"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#d4485a" text-anchor="middle">复合判断的演绎推理</text><rect x="60" y="70" width="170" height="80" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="145" y="105" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">联言推理</text><text x="145" y="128" font-size="11" fill="#3d1f24" text-anchor="middle">分解·合成</text><rect x="255" y="70" width="170" height="80" rx="10" fill="#b8334a"/><text x="340" y="105" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">选言推理</text><text x="340" y="128" font-size="11" fill="#fff" text-anchor="middle">否定肯定式</text><rect x="450" y="70" width="170" height="80" rx="10" fill="#f7dde1" stroke="#d4485a" stroke-width="1.5"/><text x="535" y="105" font-size="13" fill="#3d1f24" text-anchor="middle" font-weight="bold">假言推理</text><text x="535" y="128" font-size="11" fill="#3d1f24" text-anchor="middle">肯前·否后</text><text x="340" y="210" font-size="12" fill="#3d1f24" text-anchor="middle">复合推理的规则来自对应判断的真假规律。</text></svg>', caption: '图3　联言、选言、假言三种复合演绎推理。' }
    ],
    exercises: [
      { type: 'choice', question: '演绎推理的主要特点是？', options: ['从个别推出一般', '从一般推出个别', '结论一定超出前提范围', '前提真结论未必真'], answer: '从一般推出个别', explanation: '演绎推理是从一般性前提推出个别性结论的推理，比如由"所有金属导电"推出"这块铁导电"。它的保真性来自形式结构：只要前提真、结构正确，结论必然真。从个别到一般是归纳推理，结论超出前提范围是归纳和类比的特点，演绎结论不超出前提范围。因此正确选项是"从一般推出个别"。' },
      { type: 'choice', question: '三段论"老虎是动物，猫是动物，所以猫是老虎"的错误在于？', options: ['大前提假', '小前提假', '中项不周延', '结论太荒谬'], answer: '中项不周延', explanation: '该三段论的中项是"动物"，它在两个前提"老虎是动物""猫是动物"中都不周延（都没有断定全部动物），导致中项无法起连接作用，推理无效。这正是三段论规则"中项在前提中至少周延一次"被违反的典型情形。大前提和小前提都是真的，问题出在推理结构上，故选"中项不周延"。' },
      { type: 'choice', question: '充分条件假言推理"如果下雨地就湿；地没湿，所以没下雨"属于？', options: ['肯定前件式', '否定前件式', '否定后件式', '肯定后件式'], answer: '否定后件式', explanation: '充分条件假言推理有两个有效式：肯定前件式（肯定前件推出肯定后件）和否定后件式（否定后件推出否定前件）。本题"地没湿"是否定后件，"所以没下雨"是否定前件，属于否定后件式，是有效推理。注意充分条件不能用"否定前件式"或"肯定后件式"，否则无效。' },
      { type: 'fill', question: '演绎推理是从___性前提推出___性结论的推理；其结论必然真的两个条件是前提真且___正确。', answer: '一般；个别；形式结构', explanation: '演绎推理的界定：从一般性前提推出个别性（特殊性）结论。它之所以能保真，是因为只要前提真实，并且思维的形式结构正确，结论就必然真实。所以填空依次为：一般、个别、形式结构。这是演绎推理的核心原理。' },
      { type: 'fill', question: '简单判断的演绎推理包括换质法、换位法和___；复合判断的演绎推理包括联言推理、选言推理和___。充分条件假言推理的有效式是肯定前件式和___式。', answer: '三段论；假言推理；否定后件', explanation: '简单判断的演绎推理有换质法、换位法和三段论；复合判断的演绎推理有联言推理、选言推理和假言推理。充分条件假言推理的有效式是"肯定前件式"（肯前推肯后）和"否定后件式"（否后推否前）。填空依次填：三段论、假言推理、否定后件。' }
    ]
  });
})();
