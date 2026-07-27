/* ============================================================
 * 高考复习 · 数学 · 立体几何 · 第 4 专题 第 3 单元
 * 第1课时：三视图
 * 第2课时：直观图（斜二测画法）
 * 数据注入：gzGetVolume('math','zt4').points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'zt4');
  if (!v) return;

  v.points.push(

    /* ---------------- 第1课时 三视图 ---------------- */
    {
      id: 'zt4-u3-l1',
      name: '三视图',
      chapter: '立体几何复习 · 四 三视图',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、三视图的概念与画法' },
        { type: 'paragraph', text: '在生产与工程中，为了在平面图上准确表达物体的形状与大小，常从三个相互垂直的方向对物体进行正投影，得到三张平面图形，合称三视图。掌握三视图，是认识空间几何体、进行表面积与体积计算的重要基础。' },
        { type: 'keypoint', label: '重点·三视图', text: '物体在三投影面（正立投影面、侧立投影面、水平投影面）上的正投影称为三视图。<br><strong>正视图（主视图）</strong>：从前向后看，反映物体的长与高；<br><strong>侧视图（左视图）</strong>：从左向右看，反映物体的宽与高；<br><strong>俯视图</strong>：从上向下看，反映物体的长与宽。' },
        { type: 'list', items: ['正视图：从前向后看，对应物体的长与高', '侧视图：从左向右看，对应物体的宽与高', '俯视图：从上向下看，对应物体的长与宽'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 380" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="380" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">长方体三视图：长对正 · 高平齐 · 宽相等</text><rect x="90" y="90" width="220" height="150" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2.5"/><text x="200" y="175" font-size="16" fill="#2b5b9e" text-anchor="middle">正视图</text><rect x="430" y="90" width="130" height="150" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2.5"/><text x="495" y="175" font-size="16" fill="#2b5b9e" text-anchor="middle">侧视图</text><rect x="90" y="270" width="220" height="130" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2.5"/><text x="200" y="342" font-size="16" fill="#2b5b9e" text-anchor="middle">俯视图</text><line x1="90" y1="240" x2="90" y2="270" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="6 4"/><line x1="310" y1="240" x2="310" y2="270" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="6 4"/><line x1="310" y1="90" x2="430" y2="90" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="6 4"/><line x1="310" y1="240" x2="430" y2="240" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="6 4"/><line x1="310" y1="400" x2="560" y2="150" stroke="#5a7a2a" stroke-width="1.5" stroke-dasharray="6 4"/><text x="360" y="305" font-size="13" fill="#33536e">宽相等</text><text x="200" y="262" font-size="13" fill="#c0392b">长对正</text><text x="370" y="78" font-size="13" fill="#c0392b">高平齐</text></svg>', caption: '图1　长方体的三个视图：正视图与俯视图长对正，正视图与侧视图高平齐，俯视图与侧视图宽相等。' },
        { type: 'paragraph', text: '正视图把物体的前后方向压成平面，看到的轮廓由长和高决定；当物体前后对称时，正视图能清晰显示其正面形状。' },
        { type: 'paragraph', text: '侧视图从左侧观察，刻画物体的宽度与高度；它和正视图共同确定物体的侧面轮廓与凹凸关系。' },
        { type: 'paragraph', text: '俯视图从上方向下投影，显示物体的平面布局与长宽尺寸，是判断底面形状与相对位置的关键视图。' },
        { type: 'heading', text: '二、三视图的对应规律' },
        { type: 'keypoint', label: '重点·对应规律', text: '三视图之间满足三条对应规律：<strong>长对正、高平齐、宽相等</strong>。<br>长对正：正视图与俯视图长度对齐；<br>高平齐：正视图与侧视图高度对齐；<br>宽相等：俯视图与侧视图宽度相等（常借 45° 辅助线转移宽度）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 500" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="500" fill="#eef4fc"/><text x="340" y="36" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">圆柱的三视图：俯视图为圆，正视图与侧视图为矩形</text><rect x="120" y="100" width="160" height="200" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2.5"/><text x="200" y="208" font-size="16" fill="#2b5b9e" text-anchor="middle">正视图</text><rect x="420" y="100" width="160" height="200" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2.5"/><text x="500" y="208" font-size="16" fill="#2b5b9e" text-anchor="middle">侧视图</text><circle cx="200" cy="395" r="85" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2.5"/><text x="200" y="401" font-size="16" fill="#2b5b9e" text-anchor="middle">俯视图</text><line x1="120" y1="300" x2="120" y2="310" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="6 4"/><line x1="280" y1="300" x2="280" y2="310" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="6 4"/><line x1="280" y1="100" x2="420" y2="100" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="6 4"/><line x1="280" y1="300" x2="420" y2="300" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="6 4"/><text x="350" y="80" font-size="13" fill="#c0392b">高平齐</text><text x="200" y="340" font-size="13" fill="#c0392b">长对正</text></svg>', caption: '图2　圆柱的三视图：从上向下看得到圆（俯视图），从前、从左看均得到等高的矩形。' },
        { type: 'table', headers: ['视图', '投影方向', '反映的尺寸'], rows: [['正视图', '从前向后', '长、高'], ['侧视图', '从左向右', '宽、高'], ['俯视图', '从上向下', '长、宽']] },
        { type: 'warn', label: '易错·新高考', text: '新高考已不再要求掌握三视图（相关大题被删除），但小题仍可能出现，需了解基本概念。<br>三视图是<strong>正投影</strong>，还原几何体要靠三个视图综合想象，不能只凭单张视图下结论。' },
        { type: 'tip', label: '提示', text: '读图顺序建议：先看俯视图确定底面形状与长宽，再看正视图确定高与正面轮廓，最后用侧视图核对宽度，三步结合即可在脑中还原立体形状。' },
        { type: 'heading', text: '三、典型例题' },
        { type: 'example', label: '例题1', text: '下列几何体中，正视图为矩形的是：圆柱、圆锥、球、三棱锥。<br><br><strong>分析</strong>：圆柱从前向后看，轮廓是高与底面直径构成的矩形；圆锥正视图是三角形；球正视图是圆；三棱锥正视图一般为三角形或多边形。<br><strong>结论</strong>：正视图为矩形的是圆柱。' },
        { type: 'example', label: '例题2', text: '由组合体的三视图判断其形状：正视图与侧视图均为矩形，俯视图为带圆角的矩形。<br><br><strong>分析</strong>：正、侧视图为矩形说明主体为柱体；俯视图为带圆角矩形提示底面是圆角长方形。综合可知该组合体是一个底面为圆角矩形的直棱柱（或长方体去角）。<br><strong>结论</strong>：先分别识别三视图，再综合想象整体形状，避免凭单张视图误判。' },
        { type: 'example', label: '例题3', text: '数出某长方体三视图中的可见轮廓线条总数。<br><br><strong>分析</strong>：正视图含 4 条边框线，侧视图含 4 条，俯视图含 4 条，共 12 条；若视图间共享的投影对齐线不计入，则每个视图独立计 4 条。<br><strong>结论</strong>：单看三个视图各自轮廓，线条数为 4 + 4 + 4 = 12 条。' },
        { type: 'list', items: ['先定投影方向，分清长、宽、高各自由哪个视图反映', '利用长对正、高平齐、宽相等核对三视图是否自洽', '还原几何体时务必三图综合，避免以偏概全'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">由三视图还原几何体：综合想象得立体图</text><rect x="40" y="70" width="120" height="100" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2.5"/><text x="100" y="126" font-size="15" fill="#2b5b9e" text-anchor="middle">正视图</text><rect x="195" y="70" width="80" height="100" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2.5"/><text x="235" y="126" font-size="15" fill="#2b5b9e" text-anchor="middle">侧视图</text><rect x="40" y="200" width="120" height="80" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2.5"/><text x="100" y="246" font-size="15" fill="#2b5b9e" text-anchor="middle">俯视图</text><polygon points="420,250 560,250 560,150 420,150" fill="#cfe0f7" stroke="#2b5b9e" stroke-width="2.5"/><polygon points="420,150 560,150 600,120 460,120" fill="#dbe9fb" stroke="#2b5b9e" stroke-width="2.5"/><polygon points="560,250 560,150 600,120 600,220" fill="#b8d2f2" stroke="#2b5b9e" stroke-width="2.5"/><line x1="460" y1="220" x2="460" y2="120" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="6 4"/><line x1="420" y1="250" x2="460" y2="220" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="6 4"/><line x1="420" y1="150" x2="460" y2="120" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="6 4"/><text x="500" y="300" font-size="15" fill="#2b5b9e" text-anchor="middle">立体图（还原结果）</text><text x="300" y="180" font-size="13" fill="#33536e">← 综合三视图想象</text></svg>', caption: '图3　左侧三张视图共同决定右侧轴测立体图；红色虚线表示被遮挡的棱。' },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['三视图：正视图（长高）、侧视图（宽高）、俯视图（长宽）', '对应规律：长对正、高平齐、宽相等', '三视图是正投影，还原需三图综合想象', '新高考小题仍可能考查，需了解基本概念与读图方法'] }
      ],
      exercises: [
        { type: 'choice', question: '下列几何体中，正视图为矩形的是？', options: ['圆柱', '圆锥', '球', '三棱锥'], answer: '圆柱', explanation: '圆柱的正视图是从前后方向投影得到的图形，其轮廓为高与底面直径构成的矩形；圆锥正视图是三角形，球正视图是圆，三棱锥正视图一般是三角形或多边形，均不是矩形。故正视图为矩形的是圆柱。' },
        { type: 'choice', question: '三视图规律"长对正、高平齐、宽相等"中，"宽相等"指的是？', options: ['正视图与俯视图宽度相等', '俯视图与侧视图宽度相等', '正视图与侧视图长度相等', '俯视图与侧视图高度相等'], answer: '俯视图与侧视图宽度相等', explanation: '三视图规律中，长对正指正视图与俯视图长度对齐且相等；高平齐指正视图与侧视图高度对齐且相等；宽相等指俯视图的宽度与侧视图的宽度相等，通常借助 45° 辅助线进行宽度转移。故宽相等对应俯视图与侧视图宽度相等。' },
        { type: 'choice', question: '棱长为 a 的正方体，其俯视图是？', options: ['边长为 a 的正方形', '边长为 2a 的正方形', '圆', '边长为 a 的矩形'], answer: '边长为 a 的正方形', explanation: '正方体六个面都是全等的正方形，从上向下看（俯视图）看到的是上表面的正方形，其边长等于正方体的棱长 a，因此俯视图是边长为 a 的正方形，而不是圆或矩形。' },
        { type: 'fill', question: '三视图包括正视图、侧视图和____。', answer: '俯视图', explanation: '工程与立体几何中，物体的三视图由正视图（从前向后看）、侧视图（从左向右看）、俯视图（从上向下看）三部分组成，三者配合可唯一确定简单几何体的形状与尺寸。故第三空填俯视图。' },
        { type: 'fill', question: '三视图的对应规律可概括为：长对正、高平齐、____。', answer: '宽相等', explanation: '由正投影原理，正视图反映长与高、俯视图反映长与宽、侧视图反映宽与高，因此三个视图之间满足：正视图与俯视图长对正、正视图与侧视图高平齐、俯视图与侧视图宽相等。故规律第三项为宽相等。' }
      ]
    },

    /* ---------------- 第2课时 直观图（斜二测画法） ---------------- */
    {
      id: 'zt4-u3-l2',
      name: '直观图（斜二测画法）',
      chapter: '立体几何复习 · 四 直观图（斜二测）',
      difficulty: '基础',
      content: [
        { type: 'heading', text: '一、直观图与斜二测画法' },
        { type: 'paragraph', text: '把空间几何体画在平面上，既要保留一定的立体感，又要便于度量，这种图叫直观图。高中常用斜二测画法绘制水平放置的平面图形与简单几何体的直观图。' },
        { type: 'keypoint', label: '重点·斜二测规则', text: '斜二测画法的四条规则：<br>① 坐标轴夹角改为 <strong>45° 或 135°</strong>；<br>② 平行于 <strong>x 轴</strong>的线段长度不变；<br>③ 平行于 <strong>y 轴</strong>的线段长度减半；<br>④ 平行于 <strong>z 轴</strong>的线段长度不变。' },
        { type: 'list', items: ['建系：在原图形上取互相垂直的 x 轴与 y 轴', '改轴：把 y 轴画成与 x 轴成 45° 或 135°', '缩 y：原平行于 y 轴的线段取原长的一半', '连线：平行于 x 轴的线段保持原长，连成直观图'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">斜二测画法：原图轴 → 45° 轴，y 方向长度减半</text><line x1="120" y1="210" x2="270" y2="210" stroke="#2b5b9e" stroke-width="2.5"/><line x1="120" y1="210" x2="120" y2="80" stroke="#2b5b9e" stroke-width="2.5"/><polygon points="120,210 220,210 220,110 120,110" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="120" y="240" font-size="14" fill="#33536e" text-anchor="middle">原图（正方形）</text><text x="270" y="200" font-size="13" fill="#33536e">x</text><text x="108" y="90" font-size="13" fill="#33536e">y</text><line x1="420" y1="210" x2="570" y2="210" stroke="#2b5b9e" stroke-width="2.5"/><line x1="420" y1="210" x2="490" y2="140" stroke="#2b5b9e" stroke-width="2.5"/><polygon points="420,210 520,210 555,175 455,175" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2"/><text x="470" y="240" font-size="14" fill="#33536e" text-anchor="middle">直观图（平行四边形）</text><text x="500" y="135" font-size="13" fill="#33536e">y′</text><text x="565" y="200" font-size="13" fill="#33536e">x′</text><text x="340" y="290" font-size="13" fill="#c0392b" text-anchor="middle">规则：x 轴平行线段长度不变，y 轴平行线段长度减半，坐标轴夹角取 45°</text></svg>', caption: '图1　斜二测画法步骤：原坐标系的 y 轴改为与 x 轴成 45°，且 y 方向线段长度减半。' },
        { type: 'paragraph', text: '斜二测画法中，x 轴与 z 轴方向保持原长，y 轴方向被压缩，因此正方形在直观图中变成邻边不等长且夹角非直角的平行四边形。' },
        { type: 'paragraph', text: '由于 y 方向压缩为原来的一半，原本均匀的图形在直观图中沿 y 方向变扁，这正是斜二测产生立体感的来源。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">水平放置的正方形 → 斜二测直观图（y 压缩为一半）</text><polygon points="120,210 220,210 220,110 120,110" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="170" y="168" font-size="14" fill="#2b5b9e" text-anchor="middle">a</text><text x="120" y="245" font-size="14" fill="#33536e" text-anchor="middle">原正方形（边长 a）</text><polygon points="420,210 520,210 555,175 455,175" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="470" y="245" font-size="14" fill="#33536e" text-anchor="middle">直观图（平行四边形）</text><text x="490" y="200" font-size="13" fill="#5a7a2a">a/2</text><text x="470" y="160" font-size="13" fill="#2b5b9e">a</text><line x1="490" y1="110" x2="490" y2="175" stroke="#e05d44" stroke-width="1.5" stroke-dasharray="5 4"/><text x="560" y="150" font-size="13" fill="#c0392b">y 减半</text></svg>', caption: '图2　正方形经斜二测画法变为平行四边形：底边保持 a，侧边在 y 方向压缩为 a/2。' },
        { type: 'heading', text: '二、常见图形的直观图' },
        { type: 'keypoint', label: '重点·圆的直观图', text: '水平放置的圆的直观图是<strong>椭圆</strong>：长轴平行于 x 轴方向，短轴平行于 y 轴方向，且短轴长度约为长轴的一半（因 y 方向被压缩）。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#2b5b9e" text-anchor="middle">水平放置的圆的直观图是椭圆（y 方向压缩）</text><circle cx="170" cy="160" r="80" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="170" y="270" font-size="14" fill="#33536e" text-anchor="middle">原图：圆</text><ellipse cx="470" cy="160" rx="80" ry="40" fill="#cfe0f7" stroke="#4a7de0" stroke-width="2.5"/><text x="470" y="270" font-size="14" fill="#33536e" text-anchor="middle">直观图：椭圆（长轴∥x轴，短轴∥y轴）</text><line x1="390" y1="160" x2="550" y2="160" stroke="#2b5b9e" stroke-width="1.2"/><line x1="470" y1="120" x2="470" y2="200" stroke="#2b5b9e" stroke-width="1.2"/></svg>', caption: '图3　圆在斜二测画法下变为椭圆：长轴沿 x 轴，短轴沿 y 轴且长度约为长轴一半。' },
        { type: 'table', headers: ['原图形', '直观图形状', 'y 方向变化'], rows: [['正方形', '平行四边形', '长度减半'], ['圆', '椭圆', '压缩为约一半'], ['正三角形', '斜三角形', '高度减半']] },
        { type: 'warn', label: '易错', text: '初学者常把直观图当作实际图形去度量：直观图中<strong>平行关系保持不变</strong>，但长度（除 x、z 方向外）与夹角一般已改变，不能直接用直尺度量 y 方向尺寸。' },
        { type: 'tip', label: '提示', text: '由直观图还原原图时，逆向使用规则：把 y′ 轴方向的长度<strong>放大为两倍</strong>，并将坐标轴夹角还原为 90°，即可恢复原来的平面图形与真实尺寸。' },
        { type: 'heading', text: '三、典型例题' },
        { type: 'example', label: '例题1', text: '用斜二测画法画出水平放置的边长为 a 的正方形直观图。<br><br><strong>解</strong>：① 建系，取正方形相邻两边为 x 轴、y 轴；② 画 x′ 轴水平、y′ 轴与 x′ 成 45°；③ 在 x′ 上取边长 a，在 y′ 上取 a/2；④ 连成平行四边形即得直观图。' },
        { type: 'example', label: '例题2', text: '画边长为 a 的正三角形的直观图。<br><br><strong>解</strong>：以底边为 x 轴、高所在直线为 y 轴建系；底边在 x′ 上保持长度 a，顶点高度在 y 方向减半，故直观图中三角形变扁。连接三点即得斜三角形直观图。<br><strong>结论</strong>：直观图的高是原高的一半，切不可按原高绘制。' },
        { type: 'example', label: '例题3', text: '已知某图形的斜二测直观图中，y′ 方向一条线段长为 4，求原图中对应线段长。<br><br><strong>解</strong>：斜二测中平行于 y 轴的线段为原长的一半，故原长 = 4 × 2 = 8。<br><strong>结论</strong>：由直观图还原时，y 方向长度要放大为两倍。' },
        { type: 'list', items: ['直观图只保平行关系，不保长度与夹角（x、z 方向除外）', '由直观图还原原图：y 方向放大两倍、轴夹角还原 90°', '画前先建系，明确哪些边平行于 x 轴、哪些平行于 y 轴'] },
        { type: 'heading', text: '四、本课小结' },
        { type: 'list', items: ['斜二测四规则：轴角 45°/135°，x 与 z 不变，y 减半', '正方形直观图为平行四边形，圆直观图为椭圆', '直观图保平行不保长度，还原时 y 放大两倍', '常用于绘制水平放置平面图形与简单几何体直观图'] }
      ],
      exercises: [
        { type: 'choice', question: '斜二测画法中，平行于 x 轴的线段长度如何变化？', options: ['保持不变', '减半', '变为原来两倍', '变为零'], answer: '保持不变', explanation: '斜二测画法规定：平行于 x 轴的线段长度保持不变，平行于 y 轴的线段长度减半，平行于 z 轴的线段长度保持不变，且坐标轴夹角取 45° 或 135°。因此平行于 x 轴的线段长度不变。' },
        { type: 'choice', question: '水平放置的正方形用斜二测画法得到的直观图中，其形状是？', options: ['正方形', '平行四边形', '三角形', '梯形'], answer: '平行四边形', explanation: '斜二测画法中 y 轴方向的线段长度减半且坐标轴夹角为 45°，因此原来互相垂直的相邻边在直观图中不再垂直，正方形被画成邻边不等长且夹角非直角的平行四边形，而不是正方形或梯形。' },
        { type: 'choice', question: '斜二测画法中，原来的直角在直观图中通常变为？', options: ['45° 或 135°', '90°', '60°', '180°'], answer: '45° 或 135°', explanation: '斜二测画法把原坐标系中互相垂直的 x 轴与 y 轴改为夹角 45° 或 135°，因此原来坐标轴方向的直角在直观图中一般变为 45° 或 135°；平行于轴的线段长度按规则伸缩，但夹角随之改变。' },
        { type: 'fill', question: '斜二测画法中，平行于 y 轴的线段长度变为原来的____。', answer: '一半|1/2|二分之一', explanation: '斜二测画法对平行于 y 轴的线段作压缩处理，其长度取原来的一半，而对平行于 x 轴与 z 轴的线段保持原长不变。这一规则是斜二测画法与正等测的主要区别，也是直观图产生立体感的原因。' },
        { type: 'fill', question: '水平放置的圆的直观图是____。', answer: '椭圆', explanation: '圆在斜二测画法中，由于 y 方向被压缩为原来的一半，原本正圆的各个方向均匀半径不再相等，投影后得到一个椭圆，其长轴平行于 x 轴方向、短轴平行于 y 轴方向。故水平放置圆的直观图为椭圆。' }
      ]
    }

  );
})();
