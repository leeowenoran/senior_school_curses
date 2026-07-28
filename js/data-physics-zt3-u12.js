/* ============================================================
 * 高三复习 · 热学与近代物理 · 专题四 原子结构和波粒二象性
 * 课时2：波粒二象性与物质波（德布罗意波）
 * 数据注入：physics.zt3.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'zt3');
  if (!v) return;

  v.points.push({
    id: 'zt3-u12-l1',
    name: '波粒二象性与物质波（德布罗意波）',
    chapter: '热学与近代物理 · 专题四 原子结构和波粒二象性',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、光既有波动性，又有粒子性' },
      { type: 'paragraph', text: '光不是单纯的"波"或单纯的"粒子"，它同时具有两种面貌，这叫光的波粒二象性。在干涉、衍射现象里，光表现出一波一浪的波动性；在光电效应里，光又像一个个带着固定能量的"子弹"（光子）打在金属上。两种面貌在不同实验里分别显现，并不矛盾。' },
      { type: 'keypoint', label: '重点·波粒二象性', text: '<strong>光既具有波动性（干涉、衍射），又具有粒子性（光子、光电效应），称为光的波粒二象性。</strong>光子的能量 ε = hν，动量 p = h/λ，把"粒子量"和"波动量"联系了起来。' },
      { type: 'list', items: ['波动性表现：干涉、衍射，光像水波一样叠加、绕弯', '粒子性表现：光电效应，光像一份份光子把能量交给电子', '大量光子的行为统计出波动规律，单个光子的行为表现出粒子性', '频率越高（波长越短），光的粒子性越明显；频率越低，波动性越明显'] },
      { type: 'heading', text: '二、光子也带动量' },
      { type: 'paragraph', text: '既然光有粒子性，光子就该像粒子一样带有动量。关系式是 p = h/λ，即光子动量等于普朗克常量 h 除以光的波长 λ。波长越短（频率越高），光子动量越大，粒子性越强。这个动量不是凭空猜的，光压（光照射在物体上产生的压力）正是光子动量传递的结果。' },
      { type: 'keypoint', label: '重点·光子动量', text: '<strong>光子动量 p = h / λ（也可写 p = hν / c）。</strong>它把粒子量（动量 p）和波动量（波长 λ）直接联系起来，是光具有波粒二象性的数学体现。' },
      { type: 'example', label: '例题·光子波长与动量', text: '波长 λ = 500 nm（5.0×10⁻⁷ m）的绿光光子，普朗克常量 h = 6.6×10⁻³⁴ J·s。求其动量 p。<br><br><strong>解析</strong>：<br>p = h / λ = 6.6×10⁻³⁴ / (5.0×10⁻⁷) = 1.32×10⁻²⁷ kg·m/s。<br>可见单个光子动量极小，所以日常感觉不到光在"推"我们。' },
      { type: 'warn', label: '易错', text: '<strong>不要以为"波动性"和"粒子性"会同时在一个实验里平分秋色。</strong>具体实验往往突出一面：看干涉衍射时波动性为主，看光电效应时粒子性为主。波长越长波动性越显著，波长越短（如X射线、γ射线）粒子性越显著。波粒二象性不是说光同时是两种东西，而是说它集两种性质于一身。' },
      { type: 'heading', text: '三、德布罗意物质波：实物粒子也有波长' },
      { type: 'paragraph', text: '法国物理学家德布罗意大胆猜想：不仅光有波粒二象性，连电子、质子乃至我们身边的宏观物体，也都同时具有波动性。他给出实物粒子的波长公式 λ = h / p，其中 p 是粒子的动量（对运动粒子 p = m v）。这个波长叫德布罗意波长。因为 h 极小（约 10⁻³⁴），宏观物体的波长小到根本测不出，所以只看得到粒子性；而电子质量小、波长可达原子尺度，波动性能被观察到。' },
      { type: 'keypoint', label: '重点·德布罗意波长', text: '<strong>任何运动粒子都有波长 λ = h / p = h / (m v)，这叫物质波或德布罗意波。</strong>粒子动量越大（运动越快、质量越大），波长越短，波动性越不明显；反之波长越长，波动性越显著。' },
      { type: 'table', headers: ['对象', '波动性是否明显', '原因'], rows: [['可见光（λ≈几百nm）', '非常明显', '波长与日常尺度相当，易干涉衍射'], ['电子（高速）', '明显', '质量小、动量少，λ可达原子尺度'], ['子弹（宏观）', '几乎看不出', '质量大、动量大，λ≈10⁻³⁴ m，无法观测'], ['质子', '明显（需恰当条件）', '质量比电子大，λ比电子短但仍可测']] },
      { type: 'tip', label: '提示', text: '<strong>记忆钥匙：λ = h / p 和 p = h / λ 是同一公式的正反写。</strong>对光子用 p = h/λ（因为光子没有静止质量）；对电子等实物粒子用 λ = h/(m v)。两式都体现"h 把波和粒子连起来"这一核心思想。' },
      { type: 'heading', text: '四、电子衍射——物质波被证实' },
      { type: 'paragraph', text: '1927年，人们让电子束穿过极薄的晶体或细小狭缝，结果在屏上得到了和光衍射一模一样的明暗条纹。这说明电子确实像波一样会发生干涉衍射，德布罗意的大胆猜想被实验证实。从此我们知道：电子、中子、原子等微观粒子都有物质波，波粒二象性是一切物质的共同属性。' },
      { type: 'keypoint', label: '重点·电子衍射的意义', text: '<strong>电子衍射实验观察到电子的明暗条纹，直接证实了实物粒子具有波动性（物质波真实存在）。</strong>这是德布罗意假设的关键证据，也是现代电子显微镜的理论基础。' },
      { type: 'list', items: ['电子束通过晶体或狭缝产生衍射条纹，证明电子有波动性', '物质波波长 λ = h/(m v)，电子质量小故波长可与原子尺度相比', '电子显微镜利用电子波长短、分辨率高的特点观察微小结构', '波粒二象性不是光的专利，而是所有物质共有的性质'] },
      { type: 'example', label: '例题·电子波长比较', text: '两个电子 A、B 以速度 vA < vB 运动。比较它们的德布罗意波长 λA 和 λB。<br><br><strong>解析</strong>：<br>由 λ = h/(m v)，动量 p = m v 越大波长越短。<br>B 速度大，动量 pB > pA，所以 λB < λA。<br>即运动越快的电子波长越短，波动性越不明显。' },
      { type: 'warn', label: '易错', text: '<strong>宏观物体也有物质波，只是波长太小测不到，不代表"没有"。</strong>跑步的人、飞行的子弹都满足 λ = h/(m v)，但因为 m 很大，λ 约 10⁻³⁴ 米量级，远远小于任何仪器分辨能力，所以只表现出粒子性。不能据此说"只有微观粒子才有波动性"。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">光的波粒二象性：两种面貌在不同实验显现</text><rect x="40" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="180" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">波动性</text><path d="M 70 150 q 20 -30 40 0 q 20 30 40 0 q 20 -30 40 0 q 20 30 40 0" stroke="#4fb3a5" stroke-width="3" fill="none"/><text x="180" y="210" font-size="12" fill="#234b45" text-anchor="middle">干涉、衍射</text><text x="180" y="235" font-size="12" fill="#4fb3a5" text-anchor="middle">像水波一样叠加</text><rect x="360" y="60" width="280" height="190" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="500" y="88" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">粒子性</text><circle cx="470" cy="150" r="10" fill="#4fb3a5"/><circle cx="510" cy="150" r="10" fill="#4fb3a5"/><circle cx="550" cy="150" r="10" fill="#4fb3a5"/><text x="500" y="210" font-size="12" fill="#234b45" text-anchor="middle">光电效应</text><text x="500" y="235" font-size="12" fill="#4fb3a5" text-anchor="middle">一份份光子打电子</text></svg>', caption: '图1　光在不同实验里分别显现波动性（干涉衍射）和粒子性（光电效应），这就是波粒二象性。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">德布罗意波长 λ = h / p</text><circle cx="200" cy="150" r="30" fill="#4fb3a5"/><text x="200" y="155" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">电子</text><path d="M 260 150 q 30 -40 60 0 q 30 40 60 0 q 30 -40 60 0 q 30 40 60 0" stroke="#2e9e8f" stroke-width="3" fill="none"/><text x="440" y="100" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">λ = h / (m v)</text><text x="440" y="215" font-size="13" fill="#234b45" text-anchor="middle">动量 p 越大 → 波长 λ 越短</text><text x="440" y="245" font-size="12" fill="#4fb3a5" text-anchor="middle">运动越快，波动性越不明显</text></svg>', caption: '图2　运动的实物粒子（如电子）伴随物质波，波长 λ = h/(m v)；速度越大波长越短，波动性越弱。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电子衍射：物质波存在的实验证据</text><rect x="60" y="70" width="180" height="150" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="150" y1="80" x2="150" y2="210" stroke="#234b45" stroke-width="2"/><line x1="120" y1="95" x2="120" y2="195" stroke="#234b45" stroke-width="2" stroke-dasharray="3,3"/><line x1="180" y1="95" x2="180" y2="195" stroke="#234b45" stroke-width="2" stroke-dasharray="3,3"/><text x="150" y="245" font-size="12" fill="#234b45" text-anchor="middle">晶体薄片</text><rect x="420" y="70" width="200" height="160" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="520" y="100" font-size="12" fill="#234b45" text-anchor="middle">衍射环纹</text><circle cx="520" cy="160" r="10" fill="none" stroke="#4fb3a5" stroke-width="2"/><circle cx="520" cy="160" r="22" fill="none" stroke="#4fb3a5" stroke-width="2"/><circle cx="520" cy="160" r="34" fill="none" stroke="#4fb3a5" stroke-width="2"/><text x="340" y="265" font-size="13" fill="#234b45" text-anchor="middle">电子束穿过晶体后形成明暗环纹，证明电子有波动性</text></svg>', caption: '图3　电子束通过晶体薄片产生环状衍射条纹，与光衍射类似，直接证实了电子的物质波。' }
    ],
    exercises: [
      { type: 'choice', question: '关于光的波粒二象性，下列说法正确的是？', options: ['光要么纯粹是波，要么纯粹是粒子', '光同时具有波动性和粒子性', '干涉现象说明光只有粒子性', '光电效应说明光只有波动性'], answer: '光同时具有波动性和粒子性', explanation: '光具有波粒二象性，即同时具备波动性和粒子性，不是非此即彼。干涉、衍射体现波动性，光电效应、光子能量体现粒子性，两者在不同实验中分别显现。频率越高的光粒子性越明显，频率越低波动性越明显，但二象性始终共存。' },
      { type: 'choice', question: '根据德布罗意波长公式 λ = h / p，下列说法正确的是？', options: ['电子速度越大，波长越长', '电子动量越大，波长越短', '宏观物体的波长比电子长', '物质波只存在于光子中'], answer: '电子动量越大，波长越短', explanation: '由 λ = h / p 可知，波长与动量成反比。电子速度越大，动量 p = m v 越大，波长越短，波动性越不明显，A错B对。宏观物体质量巨大，动量很大，波长极短到无法观测，C错。物质波是一切运动粒子共有的，不光是光子，D错。' },
      { type: 'choice', question: '电子衍射实验的重要意义是？', options: ['证明电子带负电', '证实了电子等实物粒子具有波动性（物质波）', '证明电子质量为零', '说明电子速度可以超过光速'], answer: '证实了电子等实物粒子具有波动性（物质波）', explanation: '电子束通过晶体或狭缝后出现明暗衍射条纹，这与光衍射完全相同，直接证明电子这类实物粒子也具有波动性，即德布罗意物质波真实存在。它并不涉及电荷正负、质量是否为零或超光速等问题。' },
      { type: 'fill', question: '德布罗意给出实物粒子的物质波波长公式 λ = ___（用 h 和动量 p 表示）。', answer: 'h/p', explanation: '德布罗意假设任何运动粒子都有波动性，其波长 λ = h / p，其中 h 是普朗克常量，p 是粒子动量（对实物粒子 p = m v）。波长越短波动性越弱，电子因质量小而波长可达原子尺度，故波动性可观测。' },
      { type: 'fill', question: '光子动量与波长的关系为 p = ___（用 h 和波长 λ 表示），该式把粒子的动量同波动的波长联系了起来。', answer: 'h/λ', explanation: '光子动量 p = h / λ（也可写为 p = hν / c），它与德布罗意公式 λ = h / p 是同一关系。这个式子把"粒子量"动量和"波动量"波长直接挂钩，是光具有波粒二象性的数学体现。' }
    ]
  });
})();
