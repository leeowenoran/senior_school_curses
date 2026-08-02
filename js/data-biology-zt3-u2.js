/* 生物学 · 高三复习 · 稳态与调节 · 第1章 · 课时：第2节 内环境的稳态 */
(function () {
  var v = gzGetVolume('biology', 'zt3');
  if (!v) return;
  v.points.push({
    id: 'zt3-u2',
    name: '第2节 内环境的稳态',
    chapter: '稳态与调节 · 第1章 人体的内环境与稳态',
    difficulty: '基础',
    content: [
      { type:'heading', text:'一、稳态的概念与调节机制' },
      { type:'paragraph', text:'正常机体通过调节作用，使各个器官、系统协调活动，共同维持内环境的相对稳定状态，这种状态叫做稳态。稳态不是静止不变，而是动态中的相对稳定，就像空调把室温控制在设定范围附近小幅波动。' },
      { type:'keypoint', text:'稳态定义：正常机体通过调节作用使各器官、系统协调活动，共同维持内环境的相对稳定状态。' },
      { type:'list', items:['神经调节：快速、准确','体液调节：缓慢、范围广','免疫调节：防御、自稳、监视'] },
      { type:'paragraph', text:'机体维持稳态的主要调节机制是神经—体液—免疫调节网络，三者相互配合、缺一不可。例如体温调节既有神经调节（血管舒缩），也有体液调节（甲状腺激素参与）。' },
      { type:'list', items:['神经调节通过反射弧完成','体液调节通过激素等化学物质经体液运输','免疫调节靠免疫细胞与免疫活性物质'] },
      { type:'svg', svg:`<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="680" height="360" fill="#eef6e4"/>
  <text x="340" y="40" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="bold" fill="#3f7d1e">稳态调节网络</text>
  <rect x="240" y="80" width="200" height="80" rx="12" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="340" y="125" text-anchor="middle" font-size="18" fill="#2e3a22">稳态</text>
  <rect x="60" y="220" width="160" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="140" y="268" text-anchor="middle" font-size="16" fill="#2e3a22">神经调节</text>
  <rect x="260" y="220" width="160" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="340" y="268" text-anchor="middle" font-size="16" fill="#2e3a22">体液调节</text>
  <rect x="460" y="220" width="160" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="540" y="268" text-anchor="middle" font-size="16" fill="#2e3a22">免疫调节</text>
  <line x1="140" y1="220" x2="317" y2="160" stroke="#3f7d1e" stroke-width="2"/>
  <line x1="340" y1="220" x2="340" y2="160" stroke="#3f7d1e" stroke-width="2"/>
  <line x1="540" y1="220" x2="363" y2="160" stroke="#3f7d1e" stroke-width="2"/>
  <text x="340" y="330" text-anchor="middle" font-size="14" fill="#5aa832">三大系统共同维持稳态</text>
</svg>`, caption:'神经—体液—免疫调节网络是机体维持稳态的主要调节机制。' },
      { type:'keypoint', text:'机体维持稳态的主要调节机制是神经—体液—免疫调节网络，三者协调配合、缺一不可。' },
      { type:'warn', text:'易错辨析：稳态是相对稳定，不是绝对不变；内环境各项指标只是在很小范围内波动，而非固定在一个数值。把稳态误解为静止不变是选择题中常见的错误。' },
      { type:'paragraph', text:'机体的调节能力是有一定限度的。当外界变化过于剧烈，或人体自身调节功能出现障碍时，稳态就会被破坏，导致细胞代谢紊乱，从而出现疾病。' },
      { type:'table', headers:['失调情形','后果','举例'], rows:[
        ['血钙过低','肌肉抽搐','缺钙引起抽筋'],
        ['血糖过高','尿糖、糖尿病','胰岛素分泌不足'],
        ['体温过高','酶失活、中暑','高温环境散热障碍']
      ] },
      { type:'svg', svg:`<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="680" height="360" fill="#eef6e4"/>
  <text x="340" y="40" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="bold" fill="#3f7d1e">稳态是生命活动的必要条件</text>
  <rect x="70" y="100" width="180" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="160" y="148" text-anchor="middle" font-size="15" fill="#2e3a22">稳态正常</text>
  <rect x="430" y="100" width="180" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="520" y="148" text-anchor="middle" font-size="15" fill="#2e3a22">稳态失调</text>
  <polygon points="250,145 430,135 430,155" fill="#3f7d1e"/>
  <text x="340" y="200" text-anchor="middle" font-size="13" fill="#5aa832">偏离稳态</text>
  <text x="160" y="240" text-anchor="middle" font-size="14" fill="#2e3a22">细胞代谢正常</text>
  <text x="520" y="240" text-anchor="middle" font-size="14" fill="#2e3a22">疾病甚至危机</text>
</svg>`, caption:'内环境稳态是机体进行正常生命活动的必要条件，失调将引发疾病。' },
      { type:'example', text:'例题：下列关于稳态的叙述，错误的是（ ）。A 稳态是机体进行正常生命活动的必要条件 B 稳态依靠神经—体液—免疫调节网络维持 C 稳态是恒定不变的状态 D 稳态被破坏会导致疾病。思路：稳态是动态中的相对稳定，并非恒定不变，C表述错误，故应选C。' },
      { type:'tip', text:'高频考点：稳态的调节机制几乎必考，要记牢神经—体液—免疫三大调节网络；稳态概念中的相对稳定是易错点，选择题常把稳定说成恒定来设置陷阱，审题时务必留意。' },
      { type:'paragraph', text:'稳态是机体进行正常生命活动的必要条件。细胞代谢需要适宜的温度、pH和渗透压，这些都依赖稳态来提供。复习时把稳态与前面学过的酶、ATP等知识联系起来，理解其重要性。' },
      { type:'heading', text:'二、本节复习框架' },
      { type:'list', items:['稳态=相对稳定状态','调节机制=神经—体液—免疫网络','调节能力有限度','稳态是生命活动的必要条件'] },
      { type:'svg', svg:`<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="680" height="360" fill="#eef6e4"/>
  <text x="340" y="40" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="bold" fill="#3f7d1e">调节能力有一定限度</text>
  <rect x="120" y="100" width="440" height="160" rx="12" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="340" y="160" text-anchor="middle" font-size="16" fill="#2e3a22">正常波动范围（稳态可维持）</text>
  <text x="340" y="200" text-anchor="middle" font-size="14" fill="#5aa832">超出限度则稳态被破坏</text>
  <polygon points="560,140 590,130 590,150" fill="#3f7d1e"/>
  <text x="340" y="310" text-anchor="middle" font-size="14" fill="#2e3a22">外界干扰过强时调节能力会失效</text>
</svg>`, caption:'机体维持稳态的调节能力是有一定限度的，超出限度将导致内环境紊乱。' }
    ],
    exercises: [
      { type:'choice', question:'下列关于稳态定义的表述，正确的是（ ）。', options:['正常机体通过调节作用使各器官系统协调活动，共同维持内环境的相对稳定状态','细胞通过内环境与外界直接交换物质的状态','血浆pH恒定保持在7.0的状态','只有神经调节参与维持的状态'], answer:'正常机体通过调节作用使各器官系统协调活动，共同维持内环境的相对稳定状态', explanation:'稳态的定义强调三个要点：正常机体、通过调节作用、维持内环境相对稳定。B项错在细胞直接与外界交换；C项错在恒定在7.0且不是相对稳定；D项忽略体液和免疫调节。故选A。' },
      { type:'choice', question:'机体维持稳态的主要调节机制是（ ）。', options:['神经调节','体液调节','免疫调节','神经—体液—免疫调节网络'], answer:'神经—体液—免疫调节网络', explanation:'机体维持稳态依赖神经、体液、免疫三大系统协调配合，构成神经—体液—免疫调节网络，这是主要调节机制。单独任何一项都不能独立完成全部稳态调节，因此选网络这一综合机制。' },
      { type:'choice', question:'下列关于稳态的叙述，正确的是（ ）。', options:['稳态是绝对恒定不变的状态','稳态被破坏不会影响生命活动','稳态是机体进行正常生命活动的必要条件','只有体液调节参与稳态维持'], answer:'稳态是机体进行正常生命活动的必要条件', explanation:'稳态是动态中的相对稳定，不是绝对恒定，被破坏会引起细胞代谢紊乱并导致疾病，是正常生命活动的必要条件；调节还涉及神经和免疫。因此正确选项是表述必要条件这一点的C。' },
      { type:'fill', question:'机体维持稳态的主要调节机制是______调节网络。', answer:'神经—体液—免疫', explanation:'神经—体液—免疫调节网络是机体维持稳态的主要调节机制，神经调节快速准确，体液调节缓慢广泛，免疫调节负责防御自稳监视，三者缺一不可。' },
      { type:'fill', question:'当外界变化过于剧烈或调节功能障碍时，稳态会被______，导致疾病。', answer:'破坏', explanation:'机体调节能力有一定限度，当外界干扰过强或自身调节功能障碍时，稳态就会被破坏，进而引起细胞代谢紊乱并出现疾病，如中暑、低血糖等都与此有关。' }
    ]
  });
})();
