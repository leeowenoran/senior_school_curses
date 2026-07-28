/* ============================================================
 * 高一物理 · 必修 第一册 · 第四章 运动和力的关系
 * 课时16：牛顿第一定律
 * 数据注入：physics.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'bx1');
  if (!v) return;

  v.points.push({
    id: 'bx1-u16',
    name: '牛顿第一定律',
    chapter: '必修第一册 · 第四章 运动和力的关系',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、人类对运动和力关系的认识历程' },
      { type: 'paragraph', text: '在牛顿之前，人们凭生活直觉认为：必须一直用力推一个物体，它才会运动；一旦不推了，它就会停下来。古希腊的亚里士多德就持这种观点，他认为"力是维持物体运动的原因"。这种看法流传了两千多年，直到伽利略通过实验和思考，才指出了它的错误。' },
      { type: 'keypoint', label: '重点·两种对立的观点', text: '<strong>亚里士多德：力是维持物体运动的原因。</strong><br><strong>伽利略：运动不需要力来维持，力是改变物体运动状态的原因。</strong>日常看到物体最终停下，是因为受到了摩擦阻力，而不是因为没有力。' },
      { type: 'paragraph', text: '伽利略的想法很巧妙。他观察小球从斜面上滚下，再滚上另一个斜面，发现如果没有摩擦，小球会一直滚到原来那么高。他进一步猜想：如果第二个斜面越来越平，小球为了到达同样高度，就要滚得越来越远；假如第二个斜面完全水平，小球就永远停不下来，会一直匀速运动下去。' },
      { type: 'list', items: ['亚里士多德：受力才运动，不受力就静止（凭直觉，错误）', '伽利略：用斜面理想实验推翻直觉，指出运动不需要力维持', '笛卡尔：补充指出，不受力时物体会沿直线匀速运动', '牛顿：总结前人成果，提出牛顿第一定律'] },
      { type: 'heading', text: '二、牛顿第一定律（惯性定律）' },
      { type: 'paragraph', text: '牛顿在伽利略、笛卡尔等人的基础上，对运动和力的关系做了最完整的总结，提出了三条运动定律，其中第一条就是我们这一节的主角。它直接回答了"如果没有力，物体会怎样"这个根本问题。' },
      { type: 'keypoint', label: '重点·牛顿第一定律内容', text: '<strong>一切物体总保持匀速直线运动状态或静止状态，除非作用在它上面的力迫使它改变这种状态。</strong>换句话说：不受力时，原来运动的物体将永远匀速直线运动，原来静止的物体将永远静止。' },
      { type: 'example', label: '例题·理解定律含义', text: '关于牛顿第一定律，下列说法正确的是？<br>A. 物体不受力时，一定处于静止状态<br>B. 物体不受力时，可能静止，也可能做匀速直线运动<br>C. 力是维持物体运动的原因<br><br><strong>解析</strong>：<br>根据牛顿第一定律，物体不受力时，将保持原来的运动状态不变。原来静止的继续静止，原来运动的继续匀速直线运动，所以"静止"只是其中一种可能，B 正确，A 错误。定律明确指出力是"改变"运动状态的原因，而不是"维持"运动的原因，C 错误。' },
      { type: 'warn', label: '易错', text: '<strong>"惯性"不是力，不能说"物体受到惯性力"或"惯性使物体停下来"。</strong>惯性是物体本身的属性，是它"不愿改变运动状态"的秉性；物体停下是因为受到了阻力，不是因为惯性"消失"或"失效"。正确说法是"物体由于惯性保持原来的运动状态"。' },
      { type: 'table', headers: ['情形', '受力情况', '运动状态'], rows: [['水平面上匀速滑动的冰块', '近似不受力（忽略摩擦）', '保持匀速直线运动'], ['静止在桌上的书', '受重力和支持力，合力为零', '保持静止'], ['突然刹车时的乘客', '受到座椅阻力', '由运动变为静止（状态被改变）'], ['太空中脱离火箭的卫星', '几乎不受力', '近似匀速直线运动']] },
      { type: 'tip', label: '提示', text: '<strong>牛顿第一定律描述的是"理想情况"——完全不受力。</strong>现实中物体总会受到重力、支持力、空气阻力等，但这些力可能相互抵消（合力为零），效果和"不受力"一样，物体同样保持匀速直线运动或静止。' },
      { type: 'list', items: ['牛顿第一定律也叫惯性定律', '它说明力不是维持运动的原因，而是改变运动状态的原因', '定律中的"不受力"可推广为"所受合力为零"', '定律揭示了一切物体都具有惯性这一固有属性'] },
      { type: 'heading', text: '三、惯性：物体固有的属性' },
      { type: 'paragraph', text: '既然不受力时物体要保持原有运动状态，那为什么还要专门提"惯性"？因为惯性是物体与生俱来的性质，不管物体受不受力、是运动还是静止，它都存在。惯性反映了物体"反抗运动状态改变"的本领。' },
      { type: 'keypoint', label: '重点·惯性与质量', text: '<strong>惯性大小只由物体的质量决定，质量越大，惯性越大，越难改变它的运动状态。</strong>惯性与物体是否受力、运动快慢、所处位置都无关。空车比满载的货车容易启动和刹停，就是因为空车质量小、惯性小。' },
      { type: 'paragraph', text: '生活中处处可见惯性。拍打衣服能抖掉灰尘，是因为衣服动了而灰尘由于惯性还留在原地；跳远前要助跑，是利用惯性让身体跳得更远；而开车要系安全带，则是因为急刹车时人由于惯性会继续向前，容易撞伤。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">伽利略的斜面理想实验</text><rect x="40" y="150" width="200" height="110" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="240" y1="150" x2="360" y2="90" stroke="#2e9e8f" stroke-width="3"/><circle cx="300" cy="120" r="10" fill="#4fb3a5"/><text x="140" y="140" font-size="13" fill="#234b45" text-anchor="middle">左斜面</text><rect x="440" y="150" width="200" height="110" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="440" y1="150" x2="560" y2="90" stroke="#2e9e8f" stroke-width="3"/><circle cx="500" cy="120" r="10" fill="#4fb3a5"/><text x="540" y="140" font-size="13" fill="#234b45" text-anchor="middle">右斜面</text><text x="340" y="270" font-size="13" fill="#234b45" text-anchor="middle">若没有摩擦，小球会一直滚到原来的高度，水平时则永远运动</text></svg>', caption: '图1　伽利略通过斜面理想实验推断：若没有摩擦阻力，运动不需要力来维持。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><defs><marker id="a" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="userSpaceOnUse"><path d="M0,0 L11,6 L0,12 Z" fill="#234b45"/></marker></defs><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">急刹车时乘客向前倾——惯性的体现</text><rect x="120" y="180" width="440" height="70" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="220" cy="150" r="22" fill="#4fb3a5"/><line x1="220" y1="172" x2="220" y2="250" stroke="#234b45" stroke-width="3"/><circle cx="340" cy="150" r="22" fill="#4fb3a5"/><line x1="340" y1="172" x2="340" y2="250" stroke="#234b45" stroke-width="3"/><circle cx="460" cy="150" r="22" fill="#4fb3a5"/><line x1="460" y1="172" x2="460" y2="250" stroke="#234b45" stroke-width="3"/><path d="M 350 150 L 420 130" stroke="#234b45" stroke-width="3" marker-end="url(#a)"/><text x="340" y="285" font-size="13" fill="#234b45" text-anchor="middle">车减速，人由于惯性仍要向前，身体前倾</text></svg>', caption: '图2　汽车急刹车时，乘客由于惯性保持原来的向前运动，身体向前倾。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">质量越大惯性越大，越难改变运动状态</text><rect x="60" y="110" width="220" height="130" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="170" y="140" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">小汽车</text><text x="170" y="200" font-size="13" fill="#234b45" text-anchor="middle">质量小·惯性小</text><rect x="400" y="80" width="220" height="160" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="510" y="115" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">满载货车</text><text x="510" y="190" font-size="13" fill="#234b45" text-anchor="middle">质量大·惯性大</text><text x="340" y="285" font-size="13" fill="#234b45" text-anchor="middle">同样的力，货车比小汽车更难启动和刹停</text></svg>', caption: '图3　质量越大惯性越大，满载货车比小汽车更难改变运动状态。' }
    ],
    exercises: [
      { type: 'choice', question: '关于牛顿第一定律，下列说法正确的是？', options: ['物体不受力时一定静止', '物体不受力时可能静止，也可能做匀速直线运动', '力是维持物体运动的原因', '只有运动的物体才有惯性'], answer: '物体不受力时可能静止，也可能做匀速直线运动', explanation: '牛顿第一定律指出，物体不受力时将保持原有运动状态：原来静止的继续静止，原来运动的继续匀速直线运动。因此不受力时静止只是其中一种可能，并非一定静止，A错误，B正确。定律说明力是改变运动状态的原因而非维持运动的原因，C错误。惯性是物体固有属性，与是否运动无关，静止的物体也有惯性，D错误。' },
      { type: 'choice', question: '关于惯性，下列认识正确的是？', options: ['速度越大的物体惯性越大', '受力越大的物体惯性越大', '质量越大的物体惯性越大', '只有运动时物体才有惯性'], answer: '质量越大的物体惯性越大', explanation: '惯性是物体保持原有运动状态的固有属性，其大小只由物体的质量决定，质量越大惯性越大，与物体运动的速度、受力大小、是否运动都无关。因此速度大或受力大都不会让惯性变大，A、B错误；静止的物体同样具有惯性，D错误，只有C正确。' },
      { type: 'choice', question: '下列现象中，能用惯性解释的是？', options: ['苹果熟了从树上落下', '拍打衣服能抖掉灰尘', '水往低处流', '磁铁吸引铁钉'], answer: '拍打衣服能抖掉灰尘', explanation: '拍打衣服时，衣服受力运动起来，而灰尘由于惯性仍保持原来的静止状态，于是与衣服分离被抖掉，这是惯性的典型表现。苹果落下、水往低处流、磁铁吸铁钉都是由于受到重力或磁力作用，与惯性无关，因此只有拍打衣服抖灰尘可用惯性解释。' },
      { type: 'fill', question: '牛顿第一定律表明：力不是维持物体运动的原因，而是___物体运动状态的原因。', answer: '改变', explanation: '牛顿第一定律的核心结论是，物体不受力时会保持原有的静止或匀速直线运动状态，因此运动并不需要力来维持；只有当物体受到力的作用时，它的运动状态（速度大小或方向）才会发生改变。所以力是改变物体运动状态的原因，而不是维持运动的原因。' },
      { type: 'fill', question: '一切物体都有惯性，惯性的大小只由物体的___决定，该物理量越大，惯性越大。', answer: '质量', explanation: '惯性是物体与生俱来的属性，衡量惯性大小的唯一标准是物体的质量。质量越大，物体越难被加速或减速，即越难改变其运动状态，惯性就越大；质量越小，惯性越小。惯性与物体是否受力、运动快慢、所在位置都没有关系。' }
    ]
  });
})();
