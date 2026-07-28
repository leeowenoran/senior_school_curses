/* ============================================================
 * 高二英语 · 选择性必修 第二册 · Unit 5 First Aid（急救）
 * 课时：xb2-u5-l1 核心词汇与动词-ing形式作主语
 *       xb2-u5-l2 重点句型与动词-ing形式作宾语
 * 数据注入：english.xb2.points（紫色系配色）
 * ============================================================ */
(function () {
  var v = gzGetVolume('english', 'xb2');
  if (!v) return;

  v.points.push(
    /* ---------------- 第1课时 核心词汇与动词-ing形式作主语 ---------------- */
    {
      id: 'xb2-u5-l1',
      name: '核心词汇与动词-ing形式作主语',
      chapter: 'Unit 5 First Aid',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、Unit 5 核心词汇（急救相关）' },
        { type: 'paragraph', text: '本单元讲“急救”（first aid）。我们先记住一组在意外和受伤时常用的词。这些词在读写急救文章、看懂警示牌时都会用到，是这一单元的基础。' },
        { type: 'table', headers: ['单词', '词性', '中文释义'], rows: [
          ['burn', '动词/名词', '烧伤、烫伤'],
          ['choke', '动词', '窒息、噎住'],
          ['poison', '名词/动词', '毒药；使中毒'],
          ['fracture', '名词/动词', '骨折；折断'],
          ['symptom', '名词', '症状'],
          ['treatment', '名词', '治疗、处理办法'],
          ['conscious', '形容词', '有意识的'],
          ['unconscious', '形容词', '无意识的、昏迷的'],
          ['pressure', '名词', '压力、按压'],
          ['bandage', '名词/动词', '绷带；包扎'],
          ['vital', '形容词', '至关重要的']
        ] },
        { type: 'keypoint', label: '重点·易混词', text: '下面几个词最容易记混，请特别留意：<br><strong>burn</strong> 作动词是“烧伤、烫伤”，作名词也表示“烧伤处”；<br><strong>choke</strong> 是“窒息、噎住”，比如吃东西卡住；<br><strong>conscious</strong> 是“有意识的”，<strong>unconscious</strong> 是“失去意识的”，两者意思相反。' },
        { type: 'paragraph', text: '再记几个和受伤处理有关的词：fracture 是“骨折”，symptom 是“症状”，treatment 是“治疗、处理办法”，pressure 是“压力、按压”，bandage 是“绷带”，vital 是“至关重要的”。' },
        { type: 'tip', label: '记忆', text: '记单词可以联想画面：看到 <strong>bandage</strong> 就想到包扎的绷带；看到 <strong>choke</strong> 就想到有人被食物卡住的样子。把词和具体场景连起来，记得更牢。' },
        { type: 'heading', text: '二、Unit 5 常用短语' },
        { type: 'table', headers: ['短语', '中文释义', '用法提示'], rows: [
          ['depend on', '取决于、依赖', '主语常是事情的结果'],
          ['in case of', '以防、如果发生', '后面跟名词'],
          ['make a difference', '起作用、有影响', '常用于鼓励'],
          ['call for', '需要、呼吁', '后可接名词']
        ] },
        { type: 'list', items: [
          'depend on：意思是“取决于、依赖”，主语常是事情的结果',
          'in case of：意思是“如果发生、以防”，后面跟名词或动词-ing',
          'make a difference：意思是“起作用、有影响”',
          'call for：意思是“需要、呼吁”'
        ] },
        { type: 'keypoint', label: '重点·短语', text: '<strong>depend on</strong> 后面如果加动作，要用动词-ing 形式，例如：It depends on keeping calm.（这要看能否保持冷静。）<br><strong>in case of</strong> 后面直接跟名词，例如：in case of fire（如果发生火灾）。' },
        { type: 'paragraph', text: '这些短语在急救说明里很常见。比如包扎前要先按压伤口止血，这时可以说 apply pressure（施加压力）；发现有人昏迷，要立刻呼救，这时可以用 call for help（呼救）。' },
        { type: 'warn', label: '易错', text: '不要把 <strong>choke</strong>（噎住、窒息）和 <strong>breath</strong>（呼吸）弄混：choke 是“被卡住、喘不上气”的危险状态，breath 是正常的一呼一吸。另外 depend on 的 on 不能漏掉。' },
        { type: 'heading', text: '三、动词-ing 形式作主语' },
        { type: 'paragraph', text: '“动词-ing 形式”就是把动词变成“doing”的样子（比如 learning、helping）。它本来是动词，但可以当一个“东西”用，放在句子最前面当主语。简单说：把一个动作当成一件事，这件事就是主语。' },
        { type: 'keypoint', label: '重点·构成', text: '动词-ing 作主语有四种写法：<br><strong>doing</strong>：主动、一般（动作和谓语同时或现在发生）；<br><strong>having done</strong>：主动、完成（这个动作先发生）；<br><strong>being done</strong>：被动、一般（这个动作正被做）；<br><strong>having been done</strong>：被动、完成（这个动作先被做）。' },
        { type: 'list', items: [
          '主动一般：doing（如 learning）',
          '主动完成：having done（动作在先）',
          '被动一般：being done（正被做）',
          '被动完成：having been done（先被做）'
        ] },
        { type: 'example', label: '例句1', text: 'Learning first aid is essential.<br>中文：<strong>学习急救很重要。</strong><br>说明：Learning 是动词-ing 形式，放在句首当主语；is 是谓语，用单数。' },
        { type: 'example', label: '例句2', text: 'It is useful knowing some first aid.<br>中文：<strong>懂一点急救很有用。</strong><br>说明：这里用 it 当“形式主语”放在句首，真正的主语 knowing some first aid 挪到了后面，读起来更顺。' },
        { type: 'warn', label: '易错', text: '动词-ing 作主语时，后面的谓语<strong>要用单数</strong>（is、makes 等），因为被当作“一件事”。不要写成 are 或 make。例如：Reading books is fun.（读书很有趣），不能说 Reading books are fun。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg">
<rect width="680" height="220" fill="#f3edfa"/>
<text x="340" y="34" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">动词-ing形式作主语的基本结构</text>
<g font-size="15" fill="#3a2a4a" text-anchor="middle">
<rect x="40" y="80" width="150" height="56" rx="8" fill="#b87fd8"/>
<text x="115" y="108" fill="#ffffff" font-weight="bold">Doing</text>
<text x="115" y="128" font-size="12" fill="#ffffff">动词-ing 形式</text>
<rect x="265" y="80" width="150" height="56" rx="8" fill="#9c56d4"/>
<text x="340" y="108" fill="#ffffff" font-weight="bold">is 系动词</text>
<text x="340" y="128" font-size="12" fill="#ffffff">谓语用单数</text>
<rect x="490" y="80" width="150" height="56" rx="8" fill="#7a3fb0"/>
<text x="565" y="108" fill="#ffffff" font-weight="bold">表语</text>
<text x="565" y="128" font-size="12" fill="#ffffff">essential 等</text>
</g>
<g stroke="#7a3fb0" stroke-width="2.5"><line x1="190" y1="108" x2="262" y2="108"/><line x1="415" y1="108" x2="487" y2="108"/></g>
<text x="340" y="185" font-size="14" fill="#3a2a4a" text-anchor="middle">例：Learning first aid is essential.（学习急救很重要）</text>
</svg>`, caption: '图1　动词-ing 形式作主语：先做的事情（Doing）放在句首当主语，后面谓语用单数。' },
        { type: 'paragraph', text: '除了直接把 doing 放句首，还可以用 it 当“形式主语”，把真正的主语（动词-ing）放到句子后面。两种写法意思一样，只是 it 的写法读起来更轻松。' },
        { type: 'tip', label: '提示', text: '看到句子开头是 it is ... 后面跟着动词-ing，多半就是“<strong>it 作形式主语</strong>”的用法。记住一句口诀：<strong>事在前，谓语单；用 it 替，读着顺。</strong>' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg">
<rect width="680" height="250" fill="#f3edfa"/>
<text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">急救场景：皮肤烧伤后的处理步骤</text>
<g font-size="13" fill="#3a2a4a" text-anchor="middle">
<circle cx="110" cy="120" r="34" fill="#f6d9c8" stroke="#c0392b" stroke-width="2"/>
<text x="110" y="125" fill="#c0392b" font-weight="bold">伤处</text>
<text x="110" y="180" font-size="12">1. 烧伤的皮肤</text>
<rect x="230" y="86" width="100" height="68" rx="10" fill="#a7d3f0" stroke="#7a3fb0" stroke-width="2"/>
<text x="280" y="125" fill="#3a2a4a" font-weight="bold">凉水</text>
<text x="280" y="180" font-size="12">2. 用凉水冲</text>
<rect x="410" y="86" width="100" height="68" rx="10" fill="#ffffff" stroke="#5a7a2a" stroke-width="2"/>
<text x="460" y="125" fill="#5a7a2a" font-weight="bold">绷带</text>
<text x="460" y="180" font-size="12">3. 轻轻包扎</text>
<circle cx="590" cy="120" r="34" fill="#cfe7c8" stroke="#5a7a2a" stroke-width="2"/>
<text x="590" y="125" fill="#5a7a2a" font-weight="bold">好转</text>
<text x="590" y="180" font-size="12">4. 等待恢复</text>
</g>
<g stroke="#9c56d4" stroke-width="2.5"><line x1="144" y1="120" x2="228" y2="120"/><line x1="330" y1="120" x2="408" y2="120"/><line x1="510" y1="120" x2="556" y2="120"/></g>
</svg>`, caption: '图2　皮肤烧伤后：先用凉水冲洗，再轻轻包扎，不要乱涂东西。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: [
          '核心词汇：burn 烧伤、choke 噎住、poison 毒药、fracture 骨折、symptom 症状、treatment 治疗、conscious 有意识、unconscious 无意识、pressure 按压、bandage 绷带、vital 重要的',
          '常用短语：depend on 取决于、in case of 以防、make a difference 起作用、call for 需要',
          '动词-ing 作主语：把动作当一件事放在句首',
          '四种写法：doing、having done、being done、having been done',
          '谓语用单数；也可用 it 当形式主语'
        ] },
        { type: 'svg', svg: `<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg">
<rect width="680" height="280" fill="#f3edfa"/>
<text x="340" y="30" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">动词-ing 形式的四种写法</text>
<g font-size="13" fill="#3a2a4a" text-anchor="middle">
<rect x="60" y="70" width="240" height="70" rx="8" fill="#b87fd8"/>
<text x="180" y="100" fill="#ffffff" font-weight="bold">doing</text>
<text x="180" y="122" fill="#ffffff">主动 一般（同时或现在）</text>
<rect x="380" y="70" width="240" height="70" rx="8" fill="#9c56d4"/>
<text x="500" y="100" fill="#ffffff" font-weight="bold">having done</text>
<text x="500" y="122" fill="#ffffff">主动 完成（先发生）</text>
<rect x="60" y="170" width="240" height="70" rx="8" fill="#7a3fb0"/>
<text x="180" y="200" fill="#ffffff" font-weight="bold">being done</text>
<text x="180" y="222" fill="#ffffff">被动 一般（正被做）</text>
<rect x="380" y="170" width="240" height="70" rx="8" fill="#7a3fb0"/>
<text x="500" y="200" fill="#ffffff" font-weight="bold">having been done</text>
<text x="500" y="222" fill="#ffffff">被动 完成（先被做）</text>
</g>
<text x="340" y="268" font-size="13" fill="#3a2a4a" text-anchor="middle">作主语时，四种形式都能用，谓语都用单数。</text>
</svg>`, caption: '图3　动词-ing 的四种写法：先分清主动还是被动，再看动作先后。' }
      ],
      exercises: [
        { type: 'choice', question: '“烧伤、烫伤”对应的单词是？', options: ['burn', 'choke', 'poison', 'fracture'], answer: 'burn', explanation: 'burn 作动词和名词都表示“烧伤、烫伤”，是这一单元的核心词。choke 是噎住、窒息；poison 是毒药；fracture 是骨折，三者意思不同，故选 burn。' },
        { type: 'choice', question: '短语 depend on 的意思是？', options: ['取决于、依赖', '以防、如果发生', '起作用、有影响', '需要、呼吁'], answer: '取决于、依赖', explanation: 'depend on 表示“取决于、依赖”，主语常是事情的结果，如 It depends on the weather（这要看天气）。in case of 是“以防”；make a difference 是“起作用”；call for 是“需要、呼吁”。' },
        { type: 'choice', question: '动词-ing 形式作主语时，谓语应该用什么？', options: ['复数', '单数', '原形的动词', '不填'], answer: '单数', explanation: '动词-ing 作主语时被当作“一件事”，后面的谓语要用单数，如 is、makes。例如 Learning first aid is essential，不能说 are。故选单数。' },
        { type: 'fill', question: '动词-ing 作主语时，谓语要用____（填“单数”或“复数”）。', answer: '单数', explanation: '把一个动作当作一件事放在句首当主语，这件事被看作整体，所以谓语用单数，如 is、makes、helps。例如 Reading books is fun，不能说 are。' },
        { type: 'fill', question: '完成句子：Learning first aid ____ (be) essential.', answer: 'is', explanation: '本句主语是 Learning first aid（学习急救），动词-ing 作主语被看作一件事，谓语用单数，所以 be 动词用 is。全句意思为“学习急救很重要”。' }
      ]
    },

    /* ---------------- 第2课时 重点句型与动词-ing形式作宾语 ---------------- */
    {
      id: 'xb2-u5-l2',
      name: '重点句型与动词-ing形式作宾语',
      chapter: 'Unit 5 First Aid',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、Unit 5 重点句型' },
        { type: 'paragraph', text: '在讲急救时，我们经常要给别人提建议或说明重要性。下面两句是这一单元最常用、也最好记的句式。' },
        { type: 'keypoint', label: '重点·句型', text: '<strong>You should learn some first aid.</strong>（你应该学一点急救。）——用 should 提建议，语气友好又不生硬。<br><strong>It is vital to stay calm.</strong>（保持冷静很重要。）——用 it 当形式主语，真正的主语是后面的 to stay calm。' },
        { type: 'table', headers: ['句型', '中文意思', '使用场景'], rows: [
          ['You should ...', '你应该做某事', '给别人提建议'],
          ['It is vital to ...', '做某事很重要', '说明急救原则'],
          ['It is useful ...', '做某事很有用', '说明学习价值'],
          ['We must ...', '我们必须做某事', '强调必要动作']
        ] },
        { type: 'list', items: [
          '提建议：You should / We must + 动词原形',
          '说重要：It is vital / important to + 动词原形',
          '说有用：It is useful + 动词-ing 或 to do',
          '急救原则：先保护自己，再帮助别人'
        ] },
        { type: 'example', label: '例句', text: 'You should learn some first aid before travelling.<br>中文：<strong>出门前你应该学一点急救。</strong><br>说明：should 后接动词原形 learn，用来给别人提建议。' },
        { type: 'warn', label: '易错', text: 'It is vital to stay calm 里的 stay 是<strong>动词原形</strong>（带 to），不要写成 staying。如果是 It is useful knowing，后面的 knowing 才是动词-ing。两者主语形式不同，别混。' },
        { type: 'heading', text: '二、动词-ing 形式作宾语' },
        { type: 'paragraph', text: '“宾语”就是动作的对象，放在动词后面，回答“做了什么”。有些动词后面不能接动词原形，而要接“动词-ing 形式”（doing）。换句话说，这些动词“吃”的是 doing 这种形式。' },
        { type: 'keypoint', label: '重点·接-ing 的动词', text: '下面这些动词后面要接动词-ing 形式：<br><strong>advise</strong>（建议）、<strong>finish</strong>（完成）、<strong>mind</strong>（介意）、<strong>practice</strong>（练习）、<strong>avoid</strong>（避免）、<strong>suggest</strong>（建议）。<br>记忆口诀：<strong>建议完成练习，介意避免建议</strong>（advise, finish, practice, mind, avoid, suggest）。' },
        { type: 'list', items: [
          'advise doing：建议做某事',
          'finish doing：做完某事',
          'practice doing：练习做某事',
          'avoid doing：避免做某事',
          'suggest doing：建议做某事',
          'mind doing：介意做某事'
        ] },
        { type: 'example', label: '例句1', text: 'He suggests taking a first aid course.<br>中文：<strong>他建议参加急救课程。</strong><br>说明：suggest 后接 taking（take 的-ing 形式）作宾语，不能接 to take。' },
        { type: 'example', label: '例句2', text: 'She avoided touching the wound.<br>中文：<strong>她避免碰伤口。</strong><br>说明：avoid 后接 touching（touch 的-ing 形式）；the wound 是 touching 的宾语。' },
        { type: 'warn', label: '易错', text: '<strong>介词后面也要用动词-ing 形式</strong>，不只是上面那些动词。比如：Thank you for helping me.（谢谢你帮我），for 是介词，后面 helping 用-ing。不要把介词后的动词写成原形或 to do。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg">
<rect width="680" height="220" fill="#f3edfa"/>
<text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">动词-ing 形式作宾语的结构</text>
<g font-size="14" fill="#3a2a4a" text-anchor="middle">
<rect x="60" y="80" width="180" height="56" rx="8" fill="#9c56d4"/>
<text x="150" y="108" fill="#ffffff" font-weight="bold">动词 介词</text>
<text x="150" y="128" font-size="12" fill="#ffffff">advise, avoid, in</text>
<rect x="300" y="80" width="180" height="56" rx="8" fill="#b87fd8"/>
<text x="390" y="108" fill="#ffffff" font-weight="bold">doing</text>
<text x="390" y="128" font-size="12" fill="#ffffff">动词-ing 形式</text>
<rect x="540" y="80" width="100" height="56" rx="8" fill="#7a3fb0"/>
<text x="590" y="108" fill="#ffffff" font-weight="bold">对象</text>
</g>
<g stroke="#7a3fb0" stroke-width="2.5"><line x1="240" y1="108" x2="297" y2="108"/><line x1="480" y1="108" x2="537" y2="108"/></g>
<text x="340" y="178" font-size="14" fill="#3a2a4a" text-anchor="middle">例：He suggests taking a first aid course.（他建议参加急救课）</text>
</svg>`, caption: '图1　动词-ing 作宾语：某些动词和所有介词后面，要用动词-ing 形式。' },
        { type: 'tip', label: '提示', text: '分不清后面接不接-ing 时，先看它<strong>是不是介词</strong>。介词（in、on、for、of、about 等）后面一律用动词-ing。再背熟那几个“吃-ing”的动词，就不容易错。' },
        { type: 'heading', text: '三、本册拓展：动词-ing 的时态与被动' },
        { type: 'paragraph', text: '在选择性必修第一册里，我们学过动词-ing 可以作主语、宾语、表语。本册（选择性必修第二册）往前走了一步：给动词-ing 加上“时间先后”和“主动被动”的变化，也就是四种写法。' },
        { type: 'keypoint', label: '重点·时态与被动', text: '<strong>having done</strong> 表示这个动作<strong>先发生</strong>（主动、完成）；<br><strong>being done</strong> 表示这个动作<strong>正被做</strong>（被动、一般）。<br>例：Being helped by others makes him happy.（被别人帮助让他开心。）这里 being helped 是被动，作主语，谓语 makes 用单数。' },
        { type: 'table', headers: ['形式', '主动/被动', '时间', '含义'], rows: [
          ['doing', '主动', '一般', '同时发生'],
          ['having done', '主动', '完成', '先发生'],
          ['being done', '被动', '一般', '正被做'],
          ['having been done', '被动', '完成', '先被做']
        ] },
        { type: 'example', label: '例句', text: 'Being helped by others makes him happy.<br>中文：<strong>被别人帮助让他开心。</strong><br>说明：being helped 是“被动的一般式”，放句首当主语；makes 用单数。' },
        { type: 'svg', svg: `<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg">
<rect width="680" height="220" fill="#f3edfa"/>
<text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">having done 表示动作先发生</text>
<line x1="80" y1="120" x2="600" y2="120" stroke="#7a3fb0" stroke-width="2.5"/>
<g font-size="13" fill="#3a2a4a" text-anchor="middle">
<circle cx="180" cy="120" r="16" fill="#b87fd8"/>
<text x="180" y="124" fill="#ffffff" font-weight="bold">先</text>
<text x="180" y="165" font-size="12">having learned</text>
<text x="180" y="183" font-size="12">先学会急救</text>
<circle cx="470" cy="120" r="16" fill="#9c56d4"/>
<text x="470" y="124" fill="#ffffff" font-weight="bold">后</text>
<text x="470" y="165" font-size="12">helps others</text>
<text x="470" y="183" font-size="12">后来帮助别人</text>
</g>
<text x="325" y="100" font-size="12" fill="#3a2a4a" text-anchor="middle">时间向前</text>
</svg>`, caption: '图2　having done 强调“先发生”：学急救在先，帮助别人在后。' },
        { type: 'warn', label: '易错', text: 'being done 和 having been done 都是被动，区别在<strong>时间</strong>：being done 是“正被做”，having been done 是“先被做（已经完成被动）”。选哪个，看动作和谓语谁先谁后。' },
        { type: 'tip', label: '提示', text: '判断用哪一种，先问两件事：<strong>主动还是被动</strong>？<strong>和谓语同时，还是更早发生</strong>？先定主动被动，再定一般还是完成，就能选出正确的-ing 形式。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: [
          '提建议用 You should / We must + 动词原形',
          '说重要用 It is vital to + 动词原形',
          'advise, finish, mind, practice, avoid, suggest 后接动词-ing',
          '介词后一律用动词-ing',
          '本册增加 having done（先发生）和 being done（被动）'
        ] },
        { type: 'svg', svg: `<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg">
<rect width="680" height="240" fill="#f3edfa"/>
<text x="340" y="32" font-size="17" font-weight="bold" fill="#7a3fb0" text-anchor="middle">动词-ing 形式能充当的句子成分</text>
<g font-size="14" fill="#3a2a4a" text-anchor="middle">
<rect x="70" y="80" width="150" height="60" rx="8" fill="#b87fd8"/>
<text x="145" y="108" fill="#ffffff" font-weight="bold">作主语</text>
<text x="145" y="128" font-size="12" fill="#ffffff">句首</text>
<rect x="265" y="80" width="150" height="60" rx="8" fill="#9c56d4"/>
<text x="340" y="108" fill="#ffffff" font-weight="bold">作宾语</text>
<text x="340" y="128" font-size="12" fill="#ffffff">动词后</text>
<rect x="460" y="80" width="150" height="60" rx="8" fill="#7a3fb0"/>
<text x="535" y="108" fill="#ffffff" font-weight="bold">作表语</text>
<text x="535" y="128" font-size="12" fill="#ffffff">be 后</text>
</g>
<text x="340" y="190" font-size="14" fill="#3a2a4a" text-anchor="middle">本册进一步学习它们的时态和被动形式。</text>
</svg>`, caption: '图3　动词-ing 可作主语、宾语、表语；本册增加时态与被动的变化。' }
      ],
      exercises: [
        { type: 'choice', question: '下列动词中，后面接动词-ing 形式的是？', options: ['advise', 'want', 'hope', 'decide'], answer: 'advise', explanation: 'advise（建议）后面要接动词-ing 形式，如 advise taking a course。want、hope、decide 后面通常接 to do（不定式），不接-ing，故选 advise。' },
        { type: 'choice', question: '介词后面应该用什么动词形式？', options: ['动词原形', '动词-ing 形式', '不定式 to do', '过去式'], answer: '动词-ing 形式', explanation: '介词（如 in、on、for、of、about）后面一律用动词-ing 形式。例如 Thank you for helping me，for 是介词，后面 helping 用-ing。不能用原形或 to do。' },
        { type: 'choice', question: 'having done 表示动作怎样？', options: ['被动、正在进行', '主动、先发生', '被动、先发生', '主动、正在被做'], answer: '主动、先发生', explanation: 'having done 是动词-ing 的“主动完成式”，表示这个动作比谓语先发生。例如 Having learned first aid, he helped others（先学会急救，后来帮助别人）。被动完成是 having been done，故选主动、先发生。' },
        { type: 'fill', question: '完成句子：He suggests ____ (take) a first aid course.', answer: 'taking', explanation: 'suggest（建议）后面要接动词-ing 形式作宾语，不能接 to take。take 变成 taking，全句为 He suggests taking a first aid course，意为“他建议参加急救课程”。' },
        { type: 'fill', question: '完成句子：Being helped by others ____ (make) him happy.', answer: 'makes', explanation: '主语是 Being helped by others（被别人帮助），是动词-ing 的被动形式作主语，被看作一件事，谓语用单数 makes。全句意为“被别人帮助让他开心”。' }
      ]
    }

  );
})();
