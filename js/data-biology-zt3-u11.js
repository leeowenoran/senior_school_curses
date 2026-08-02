/* 生物学 · 高三复习 · 稳态与调节 · 第3章 · 课时：第2节 激素调节的过程（二）甲状腺激素分级调节 */
(function () {
  var v = gzGetVolume('biology', 'zt3');
  if (!v) return;
  v.points.push({
    id: 'zt3-u11',
    name: '第2节 激素调节的过程（二）甲状腺激素分级调节',
    chapter: '稳态与调节 · 第3章 体液调节',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、甲状腺激素的分级调节（下丘脑—垂体—甲状腺轴）' },
      { type: 'paragraph', text: '甲状腺激素几乎作用于全身细胞，能<strong>促进代谢、促进生长发育、提高神经系统兴奋性</strong>。它的分泌不是甲状腺自己说了算，而是由下丘脑和垂体自上而下逐级下令，这叫<strong>分级调节</strong>。可以把它比作一家公司：下丘脑是总部，垂体是分部，甲状腺是门店，命令一级一级往下传。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="300" fill="#eef6e4"/><text x="24" y="44" fill="#3f7d1e" font-size="20" font-family="sans-serif">图1 甲状腺激素分泌的分级调节（总部—分部—门店）</text><rect x="40" y="120" width="150" height="64" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="58" y="148" fill="#2e3a22" font-size="16" font-family="sans-serif">下丘脑</text><text x="58" y="170" fill="#5aa832" font-size="14" font-family="sans-serif">分泌TRH</text><rect x="265" y="120" width="150" height="64" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="288" y="148" fill="#2e3a22" font-size="16" font-family="sans-serif">垂体</text><text x="288" y="170" fill="#5aa832" font-size="14" font-family="sans-serif">分泌TSH</text><rect x="490" y="120" width="150" height="64" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="505" y="148" fill="#2e3a22" font-size="16" font-family="sans-serif">甲状腺</text><text x="495" y="170" fill="#5aa832" font-size="14" font-family="sans-serif">分泌甲状腺激素</text><line x1="190" y1="152" x2="256" y2="152" stroke="#3f7d1e" stroke-width="3"/><polygon points="248,144 268,152 248,160" fill="#3f7d1e"/><line x1="415" y1="152" x2="481" y2="152" stroke="#3f7d1e" stroke-width="3"/><polygon points="473,144 493,152 473,160" fill="#3f7d1e"/></svg>', caption: '下丘脑分泌TRH促进垂体，垂体分泌TSH促进甲状腺，形成自上而下的分级调节。' },
      { type: 'keypoint', text: '核心概念：分级调节。下丘脑分泌促甲状腺激素释放激素（TRH）→ 促进垂体分泌促甲状腺激素（TSH）→ 促进甲状腺分泌甲状腺激素。上级激素促进下级腺体，下级激素促进下下级腺体。' },
      { type: 'paragraph', text: '具体路径是：<strong>下丘脑 → 垂体 → 甲状腺 → 甲状腺激素</strong>。其中TRH是下丘脑分泌的「动员令」，TSH是垂体分泌的「执行令」。甲状腺激素释放入血后，随体液运输到全身，发挥促进代谢等作用。' },
      { type: 'list', items: [
        '下丘脑：分泌TRH（促甲状腺激素释放激素），位置最高，相当于发出总指令。',
        '垂体：接受TRH刺激后分泌TSH（促甲状腺激素），相当于中间执行部门。',
        '甲状腺：接受TSH刺激后分泌甲状腺激素，相当于最前线的生产车间。'
      ] },
      { type: 'paragraph', text: '那么，甲状腺激素会不会一直分泌、越积越多？不会。身体有一套<strong>刹车装置</strong>——负反馈调节。当血液中甲状腺激素含量已经足够甚至过高时，它会反过来抑制下丘脑和垂体，让TRH和TSH减少，甲状腺就少分泌。这就像房间里暖气太足时，温控器自动关小炉子。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="300" fill="#eef6e4"/><text x="24" y="44" fill="#3f7d1e" font-size="20" font-family="sans-serif">图2 甲状腺激素的负反馈调节</text><rect x="60" y="120" width="160" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="78" y="156" fill="#2e3a22" font-size="16" font-family="sans-serif">下丘脑和垂体</text><rect x="470" y="120" width="150" height="60" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="490" y="156" fill="#2e3a22" font-size="16" font-family="sans-serif">甲状腺</text><path d="M470 150 C 380 150 380 70 210 70" fill="none" stroke="#3f7d1e" stroke-width="3"/><polygon points="206,62 224,70 206,78" fill="#3f7d1e"/><text x="270" y="58" fill="#5aa832" font-size="15" font-family="sans-serif">甲状腺激素过多时抑制（负反馈）</text></svg>', caption: '血液中甲状腺激素含量过高时，反过来抑制下丘脑和垂体分泌，维持含量稳定。' },
      { type: 'warn', text: '易错辨析：TRH和TSH绝对不能混。TRH（促甲状腺激素释放激素）由<strong>下丘脑</strong>分泌；TSH（促甲状腺激素）由<strong>垂体</strong>分泌。考题常把两者张冠李戴，记住「释放」对应下丘脑、「促甲状腺」对应垂体。' },
      { type: 'tip', text: '高频考点：负反馈曲线。题目常给一条甲状腺激素含量变化曲线，问某点下降的原因。思路——含量过高会抑制下丘脑和垂体，使TRH、TSH减少，从而甲状腺激素回落；含量过低则解除抑制，TRH、TSH增多，甲状腺激素回升。抓住「过多抑制、过少解除抑制」即可。' },
      { type: 'table', headers: ['激素', '分泌部位', '作用'], rows: [
        ['TRH（促甲状腺激素释放激素）', '下丘脑', '促进垂体分泌TSH'],
        ['TSH（促甲状腺激素）', '垂体', '促进甲状腺分泌甲状腺激素'],
        ['甲状腺激素', '甲状腺', '促进代谢、促生长发育、提高神经兴奋性']
      ] },
      { type: 'example', text: '例题（高考风格）：如图为甲状腺激素分泌的分级调节示意图。若给小鼠注射适量TSH，短期内小鼠血液中TRH和甲状腺激素的含量分别如何变化？思路：外源TSH直接促进甲状腺，甲状腺激素升高；甲状腺激素过高通过负反馈抑制下丘脑，使TRH下降。结论：TRH下降，甲状腺激素上升。本题考查分级与反馈两条线索的叠加，是经典题型。' },
      { type: 'paragraph', text: '分级调节的意义在于<strong>放大调节信号、精细控制</strong>。下丘脑只需分泌少量TRH，就能通过垂体、甲状腺逐级放大，产生大量甲状腺激素；同时负反馈又能防止激素过量，保持内环境稳定。' },
      { type: 'list', items: [
        '分级调节＝「自上而下促进」：下丘脑促垂体、垂体促甲状腺。',
        '负反馈调节＝「自下而上抑制」：甲状腺激素过多抑制下丘脑和垂体。',
        '两者方向相反、共同协作，维持激素含量在正常范围。'
      ] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="680" height="320" fill="#eef6e4"/><text x="24" y="44" fill="#3f7d1e" font-size="20" font-family="sans-serif">图3 下丘脑—垂体—甲状腺轴（分级＋反馈）</text><rect x="40" y="90" width="170" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="58" y="124" fill="#2e3a22" font-size="16" font-family="sans-serif">下丘脑(TRH)</text><rect x="40" y="180" width="170" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="62" y="214" fill="#2e3a22" font-size="16" font-family="sans-serif">垂体(TSH)</text><rect x="40" y="270" width="170" height="48" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="58" y="300" fill="#2e3a22" font-size="16" font-family="sans-serif">甲状腺(激素)</text><line x1="210" y1="118" x2="210" y2="208" stroke="#3f7d1e" stroke-width="3"/><polygon points="202,200 210,220 218,200" fill="#3f7d1e"/><line x1="210" y1="208" x2="210" y2="292" stroke="#3f7d1e" stroke-width="3"/><polygon points="202,284 210,304 218,284" fill="#3f7d1e"/><path d="M210 294 C 400 294 400 120 210 118" fill="none" stroke="#3f7d1e" stroke-width="2" stroke-dasharray="6 5"/><text x="300" y="200" fill="#5aa832" font-size="15" font-family="sans-serif">激素过高抑制（负反馈）</text></svg>', caption: '自上而下分级促进，自下而上负反馈抑制，共同维持甲状腺激素含量稳定。' },
      { type: 'keypoint', text: '再强调核心：下丘脑→垂体→甲状腺是一条逐级促进的「命令链」，而甲状腺激素对上游是「负反馈抑制」。记熟这条链，分级与反馈两类题都能拿下。' },
      { type: 'paragraph', text: '如果甲亢（甲状腺激素过多），负反馈使TRH、TSH降低；如果甲状腺功能减退，甲状腺激素不足，负反馈减弱，TRH、TSH反而升高。临床上常通过测定TSH来初步判断甲状腺疾病，正是利用了反馈原理。' },
      { type: 'tip', text: '解题口诀：「上游促下游，下游抑上游」。上游激素（TRH、TSH）促进下游腺体；下游产物（甲状腺激素）抑制上游分泌。考曲线、考注射实验都围绕这两句。' },
      { type: 'warn', text: '另一个易错点：甲状腺激素≠TSH。甲状腺激素是甲状腺分泌的「终产物」，作用于全身细胞；TSH是垂体分泌的「调节令」，只作用于甲状腺。二者名称相近但来源和功能完全不同。' },
      { type: 'paragraph', text: '小结：本课关键是把「分级调节」和「负反馈调节」两根线同时装在脑子里。分级是纵向的促进链，反馈是纵向的抑制环，二者合并成下丘脑—垂体—甲状腺轴，是高三复习体液调节的重中之重。' }
    ],
    exercises: [
      { type: 'choice', question: '甲状腺激素分级调节中，TRH（促甲状腺激素释放激素）是由哪个结构分泌的？', options: ['下丘脑', '垂体', '甲状腺', '肾上腺'], answer: '下丘脑', explanation: 'TRH是促甲状腺激素释放激素，由下丘脑分泌，作用于垂体促使其分泌TSH；TSH由垂体分泌，作用于甲状腺。牢记「释放」对应下丘脑、「促甲状腺」对应垂体，二者不可混淆。' },
      { type: 'choice', question: '当血液中甲状腺激素含量过高时，机体进行的调节方式是？', options: ['促进下丘脑和垂体分泌', '抑制下丘脑和垂体分泌', '只促进垂体分泌', '只抑制甲状腺分泌'], answer: '抑制下丘脑和垂体分泌', explanation: '甲状腺激素含量过高时会通过负反馈抑制下丘脑和垂体的分泌活动，使TRH和TSH减少，进而使甲状腺激素回落，从而维持激素含量稳定。这是典型的负反馈调节机制。' },
      { type: 'choice', question: '下列激素与分泌部位的对应关系，正确的是？', options: ['TRH由垂体分泌', 'TSH由下丘脑分泌', 'TRH由下丘脑分泌、TSH由垂体分泌', '甲状腺激素由垂体分泌'], answer: 'TRH由下丘脑分泌、TSH由垂体分泌', explanation: '正确的对应是TRH由下丘脑分泌、TSH由垂体分泌、甲状腺激素由甲状腺分泌。选项前两项把分泌部位颠倒，后一项把甲状腺激素的来源说成垂体，均错误。' },
      { type: 'fill', question: '在下丘脑—垂体—甲状腺轴中，垂体分泌的促激素英文缩写是______。', answer: 'TSH', explanation: '垂体分泌的促甲状腺激素英文缩写为TSH，它作用于甲状腺，促进甲状腺激素的分泌。下丘脑分泌的是TRH，注意不要与TSH混淆。' },
      { type: 'fill', question: '甲状腺激素含量过高时反过来抑制下丘脑和垂体的分泌，这种调节方式称为______调节。', answer: '负反馈', explanation: '这种「产物过多抑制上游分泌」的机制叫负反馈调节。负反馈使激素含量不会无限升高，是维持内环境稳态的重要方式，与分级调节方向相反、协同工作。' }
    ]
  });
})();
