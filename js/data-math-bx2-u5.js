/* ============================================================
 * 高一数学 · 必修 第二册 · 第八章 立体几何初步
 * 第1课时：立体图形的直观图（人教A版 §8.2）
 * 第2课时：简单几何体的表面积与体积（人教A版 §8.3）
 * 数据注入：math.bx2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx2');
  if (!v) return;
  v.points.push(

    /* ---------------- 第1课时 立体图形的直观图 ---------------- */
    {
      id: 'bx2-u5-l1',
      name: '立体图形的直观图',
      chapter: '第八章 立体几何初步 · 8.2',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、直观图与斜二测画法' },
        { type: 'paragraph', text: '把一个空间图形画在平面上，既要看起来有立体感，又要能反映原图形的度量关系，这样的平面图形叫做直观图。画直观图的方法很多，高中主要学习斜二测画法，它简单实用，是观察几何体形状的常用工具。' },
        { type: 'keypoint', label: '重点·直观图', text: '把空间图形画在平面内，表示出图形的<strong>形状、大小与位置关系</strong>的平面图形，称为该空间图形的<strong>直观图</strong>。直观图不是严格按比例的投影，而是兼顾“像”与“便于度量”的画法，其中斜二测画法是最常用的一种。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef4fc"/><circle cx="200" cy="150" r="4" fill="#2b5b9e"/><text x="186" y="172" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">O′</text><line x1="200" y1="150" x2="520" y2="150" stroke="#2b5b9e" stroke-width="2.5"/><text x="528" y="155" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">x′</text><line x1="200" y1="150" x2="430" y2="32" stroke="#4a7de0" stroke-width="2.5"/><text x="438" y="30" font-size="17" fill="#4a7de0" font-weight="bold" text-anchor="middle">y′</text><path d="M250 150 A50 50 0 0 0 235 118" fill="none" stroke="#e05d44" stroke-width="2"/><text x="262" y="132" font-size="15" fill="#e05d44" text-anchor="middle">45°</text><text x="350" y="208" font-size="14" fill="#33536e" text-anchor="middle">斜二测坐标系：x′轴水平，y′轴与 x′轴成 45°（或 135°）</text></svg>', caption: '图1　斜二测坐标系：x′轴水平向右，y′轴与 x′轴成 45°（或 135°）。' },
        { type: 'heading', text: '二、斜二测画法的作图步骤' },
        { type: 'keypoint', label: '重点·斜二测规则', text: '在已知图形中建立直角坐标系：取互相垂直的 <strong>x 轴与 y 轴</strong>，两轴交于点 O。画直观图时，建立对应的 <strong>x′轴与 y′轴</strong>，两轴交于点 O′，并使 <strong>∠x′O′y′ = 45°（或 135°）</strong>。这一步确定了直观图的坐标框架。' },
        { type: 'list', items: ['在已知图形中取互相垂直的 x 轴、y 轴，交于点 O', '画直观图时画 x′轴、y′轴交于点 O′，且 ∠x′O′y′ = 45°（或 135°）', '已知图形中平行于 x 轴的线段，在直观图中保持原长度不变', '已知图形中平行于 y 轴的线段，在直观图中长度变为原来的一半', '平行于坐标轴的线段在直观图中仍平行于对应的轴'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#eef4fc"/><text x="120" y="40" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">原图（正方形）</text><line x1="60" y1="240" x2="200" y2="240" stroke="#2b5b9e" stroke-width="2"/><text x="206" y="245" font-size="15" fill="#2b5b9e" font-weight="bold">x</text><line x1="60" y1="240" x2="60" y2="100" stroke="#4a7de0" stroke-width="2"/><text x="48" y="95" font-size="15" fill="#4a7de0" font-weight="bold">y</text><polygon points="60,240 160,240 160,140 60,140" fill="#4a7de0" fill-opacity="0.35" stroke="#2b5b9e" stroke-width="2.5"/><text x="430" y="40" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">直观图（平行四边形）</text><line x1="320" y1="240" x2="520" y2="240" stroke="#2b5b9e" stroke-width="2"/><text x="526" y="245" font-size="15" fill="#2b5b9e" font-weight="bold">x′</text><line x1="320" y1="240" x2="450" y2="122" stroke="#4a7de0" stroke-width="2"/><text x="456" y="115" font-size="15" fill="#4a7de0" font-weight="bold">y′</text><polygon points="320,240 470,240 505,205 355,205" fill="#4a7de0" fill-opacity="0.55" stroke="#2b5b9e" stroke-width="2.5"/><text x="350" y="285" font-size="14" fill="#33536e" text-anchor="middle">直观图中平行于 y 轴的边长度减半，且沿 45° 方向倾斜</text></svg>', caption: '图2　正方形在斜二测画法下变成平行四边形：平行于 y 轴的边长度减半并倾斜 45°。' },
        { type: 'heading', text: '三、平行线段的长度变化' },
        { type: 'keypoint', label: '重点·长度变化', text: '斜二测画法对平行于轴的线段区别对待：<strong>平行于 x 轴的线段长度不变</strong>，<strong>平行于 y 轴的线段长度减半</strong>。因此一个正方形的直观图会变成邻边不垂直的平行四边形，且竖直方向“压扁”了。' },
        { type: 'example', label: '例题1', text: '用斜二测画法画出边长为 2 的正方形 OABC（O 为原点，OA 在 x 轴上，OC 在 y 轴上）的直观图。<br><br><strong>解</strong>：先画 x′轴水平、y′轴与 x′轴成 45° 相交于 O′。OA 在 x 轴上，长度不变，画出 O′A′ = 2；OC 在 y 轴上，长度减半，沿 y′方向取 O′C′ = 1；过 A′、C′ 分别作轴的平行线交于 B′。所得平行四边形 O′A′B′C′ 即为直观图，其中平行于 y 方向的边长缩短为原来的一半。' },
        { type: 'list', items: ['平行于 x 轴（含 x′轴）的线段：长度不变', '平行于 y 轴（含 y′轴）的线段：长度减半', '原图形中的直角在直观图中一般不再是直角', '原图形中平行的线段，在直观图中仍然平行', '画直观图时先定轴、再定关键点、最后连成图形'] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#eef4fc"/><polygon points="150,200 310,200 310,60 150,60" fill="#4a7de0" fill-opacity="0.35" stroke="#2b5b9e" stroke-width="2.5"/><polygon points="150,60 310,60 360,10 200,10" fill="#4a7de0" fill-opacity="0.6" stroke="#2b5b9e" stroke-width="2.5"/><polygon points="310,60 310,200 360,150 360,10" fill="#fff" stroke="#2b5b9e" stroke-width="2.5"/><text x="250" y="245" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">正方体的斜二测直观图</text><text x="340" y="118" font-size="13" fill="#33536e" text-anchor="middle">纵深方向</text><text x="340" y="136" font-size="13" fill="#33536e" text-anchor="middle">长度减半</text></svg>', caption: '图3　正方体的斜二测直观图：可见三个面，纵深方向的线段长度减半且沿 45° 方向。' },
        { type: 'heading', text: '四、直观图与实物图的相互转化' },
        { type: 'keypoint', label: '重点·还原', text: '由直观图<strong>反向</strong>还原原图形时，要把 y′方向的长度<strong>乘以 2</strong> 并恢复成直角，x 方向长度不变。直观图便于“看”，原图形便于“算”，二者要能互相转化。' },
        { type: 'table', headers: ['对比项', '原图形', '斜二测直观图'], rows: [['平行于 x 轴线段', '长度 L', '长度仍为 L'], ['平行于 y 轴线段', '长度 L', '长度变为 L/2'], ['两轴夹角', '90°', '45°（或 135°）'], ['平行关系', '互相平行', '仍互相平行']] },
        { type: 'example', label: '例题2', text: '判断正误：水平放置的正方形的直观图仍是正方形。<br><br><strong>解</strong>：错误。由斜二测规则，平行于 y 轴的边长度减半且方向变为 45°，所以正方形的直观图是<strong>平行四边形</strong>而非正方形；即便边恰好平行于 x′ 方向保持长度，整体角度也已不再是直角。' },
        { type: 'warn', label: '易错', text: '三个高频错误：①<strong>忘记 y 方向减半</strong>，把正方形画成边长仍相等的图形；②<strong>角度画错</strong>，把 y′轴画成竖直而非 45°；③<strong>混淆轴的方向</strong>，误以为 x 方向也缩短。牢记“x 不变、y 减半、夹角 45°”。' },
        { type: 'tip', label: '记忆', text: '画直观图按“<strong>定轴→定点→连线</strong>”三步走：先画出成 45° 的 x′、y′ 轴，再把原图中关键点按“x 不变、y 减半”搬到新坐标系，最后连接对应点。多练习几个基本图形（正方形、正三角形、圆），手感就出来了。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['直观图是空间图形的平面表示，斜二测画法最常用', 'x′轴与 y′轴夹角为 45°（或 135°）', '平行于 x 轴的线段长度不变', '平行于 y 轴的线段长度减半', '还原时 y′方向长度乘 2、夹角恢复 90°'] }
      ],
      exercises: [
        { type: 'choice', question: '用斜二测画法画水平放置的正方形的直观图，得到的图形是？', options: ['正方形', '矩形', '平行四边形', '梯形'], answer: '平行四边形', explanation: '斜二测画法中，平行于 x 轴的边长度不变，平行于 y 轴的边长度减半且方向倾斜 45°，因此正方形的四个直角不再保持，邻边不再垂直，得到的直观图是平行四边形而非正方形或矩形。故选平行四边形。' },
        { type: 'choice', question: '斜二测画法中，x′轴与 y′轴的夹角应为？', options: ['30°', '45°（或 135°）', '60°', '90°'], answer: '45°（或 135°）', explanation: '根据斜二测画法规则，直观图中 x′轴与 y′轴交于点 O′，且规定 ∠x′O′y′ = 45° 或 135°，这是斜二测画法的核心约定，区别于原图形中两轴互相垂直的 90°。故正确选项为 45°（或 135°）。' },
        { type: 'fill', question: '斜二测画法中，平行于 y 轴的线段，在直观图中长度变为原来的______。', answer: '一半|1/2|二分之一', explanation: '斜二测画法对平行于坐标轴的线段区别对待：平行于 x 轴的线段长度保持不变，而平行于 y 轴的线段在直观图中长度变为原来的一半。这一“压扁”规则是斜二测画法的关键特征，还原时需将 y′方向长度乘 2。' },
        { type: 'fill', question: '由直观图还原原图形时，平行于 y′轴的线段长度应乘以______。', answer: '2|二|两', explanation: '直观图中平行于 y′轴的线段长度是原图形对应线段的一半，因此由直观图还原原图形时，需要把 y′方向的长度乘以 2 并恢复两轴夹角为 90°。x 方向长度在画法与还原中均保持不变。' },
        { type: 'choice', question: '关于斜二测画法，下列说法正确的是？', options: ['平行于 x 轴的线段长度减半', '平行于 y 轴的线段长度不变', '平行于 x 轴的线段长度不变，平行于 y 轴的线段长度减半', '所有线段长度都减半'], answer: '平行于 x 轴的线段长度不变，平行于 y 轴的线段长度减半', explanation: '斜二测画法的规则明确：已知图形中平行于 x 轴的线段在直观图中保持长度不变，平行于 y 轴的线段长度变为原来的一半。其余两项说法把规则颠倒或扩大化，均不正确。只有“x 不变、y 减半”这一表述准确。' }
      ]
    },

    /* ---------------- 第2课时 简单几何体的表面积与体积 ---------------- */
    {
      id: 'bx2-u5-l2',
      name: '简单几何体的表面积与体积',
      chapter: '第八章 立体几何初步 · 8.3',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、多面体的表面积' },
        { type: 'paragraph', text: '几何体的表面积是指围成它的所有面的面积之和。对于棱柱、棱锥、棱台这类多面体，只需把各个面（底面和侧面）的面积逐一算出再相加即可，关键是弄清每个面的形状和尺寸。' },
        { type: 'keypoint', label: '重点·多面体表面积', text: '棱柱、棱锥、棱台的表面积等于<strong>各面面积之和</strong>，即 S = S底 + S侧。求表面积时先分析几何体的构成：棱柱有两个全等的底面和若干个矩形（或平行四边形）侧面；棱锥有一个底面和若干个三角形侧面；棱台有两个相似（或全等）多边形底面和若干个梯形侧面。' },
        { type: 'list', items: ['棱柱：表面积 = 2×底面积 + 各侧面面积之和', '棱锥：表面积 = 底面积 + 各三角形侧面面积之和', '棱台：表面积 = 上底面积 + 下底面积 + 各梯形侧面面积之和', '求表面积先拆面，再按形状选用面积公式', '计算时注意单位统一，结果带平方单位'] },
        { type: 'heading', text: '二、旋转体的表面积' },
        { type: 'keypoint', label: '重点·旋转体表面积', text: '圆柱、圆锥、圆台由平面图形绕轴旋转而成，其表面积 = <strong>侧面积 + 底面积</strong>。圆柱侧面积展开是矩形（S侧 = 2πrh），圆锥侧面积展开是扇形（S侧 = πrl，l 为母线），圆台侧面积可用大扇形减小扇形或公式 S侧 = π(r + R)l。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 220" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="220" fill="#eef4fc"/><rect x="60" y="55" width="90" height="110" fill="#4a7de0" fill-opacity="0.35" stroke="#2b5b9e" stroke-width="2.5"/><ellipse cx="105" cy="55" rx="45" ry="15" fill="#4a7de0" fill-opacity="0.6" stroke="#2b5b9e" stroke-width="2"/><ellipse cx="105" cy="165" rx="45" ry="15" fill="#fff" stroke="#2b5b9e" stroke-width="2"/><text x="105" y="45" font-size="15" fill="#2b5b9e" font-weight="bold" text-anchor="middle">圆柱</text><text x="105" y="200" font-size="13" fill="#33536e" text-anchor="middle">S侧 = 2πrh</text><path d="M280 165 L330 55 L380 165 Z" fill="#4a7de0" fill-opacity="0.5" stroke="#2b5b9e" stroke-width="2.5"/><ellipse cx="330" cy="165" rx="50" ry="14" fill="#fff" stroke="#2b5b9e" stroke-width="2"/><text x="330" y="45" font-size="15" fill="#2b5b9e" font-weight="bold" text-anchor="middle">圆锥</text><text x="330" y="200" font-size="13" fill="#33536e" text-anchor="middle">S侧 = πrl</text><text x="520" y="105" font-size="14" fill="#33536e" text-anchor="middle">圆柱侧面展开为矩形</text><text x="520" y="135" font-size="14" fill="#33536e" text-anchor="middle">圆锥侧面展开为扇形</text></svg>', caption: '图1　圆柱、圆锥的展开图与侧面积：圆柱侧面展开为矩形（S侧 = 2πrh），圆锥侧面展开为扇形（S侧 = πrl）。' },
        { type: 'list', items: ['圆柱：S侧 = 2πrh，S全 = 2πrh + 2πr²', '圆锥：S侧 = πrl，S全 = πrl + πr²', '圆台：S侧 = π(r + R)l，S全 = π(r + R)l + πr² + πR²', 'l 表示母线长，r、R 分别为上、下底面半径', '展开图能帮助理解侧面积的来源'] },
        { type: 'heading', text: '三、球的表面积' },
        { type: 'keypoint', label: '重点·球的表面积', text: '球只用半径 R 就能确定大小，其表面积公式为 <strong>S = 4πR²</strong>。这个公式说明球的表面积与半径的平方成正比，是球独有的简洁表达式。' },
        { type: 'example', label: '例题1', text: '一个球的半径为 3，求其表面积。<br><br><strong>解</strong>：由 S = 4πR²，代入 R = 3 得 S = 4π × 3² = 4π × 9 = <strong>36π</strong>。所以该球的表面积为 36π。' },
        { type: 'heading', text: '四、柱、锥、台的体积' },
        { type: 'keypoint', label: '重点·柱锥台体积', text: '柱体（棱柱、圆柱）体积 V = <strong>Sh</strong>；锥体（棱锥、圆锥）体积 V = <strong>⅓Sh</strong>；台体（棱台、圆台）体积 V = <strong>⅓(S上 + S下 + √(S上S下))h</strong>。注意锥体体积是等底等高柱体的三分之一，台体公式在 S上 = S下 时退化为柱、S上 = 0 时退化为锥。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 230" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="230" fill="#eef4fc"/><rect x="70" y="70" width="80" height="90" fill="#4a7de0" fill-opacity="0.35" stroke="#2b5b9e" stroke-width="2.5"/><text x="110" y="55" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">柱体</text><text x="110" y="185" font-size="15" fill="#33536e" text-anchor="middle">V = Sh</text><polygon points="210,160 290,160 250,55" fill="#4a7de0" fill-opacity="0.5" stroke="#2b5b9e" stroke-width="2.5"/><text x="250" y="48" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">锥体</text><text x="250" y="185" font-size="15" fill="#33536e" text-anchor="middle">V = ⅓Sh</text><polygon points="365,160 475,160 445,70 395,70" fill="#4a7de0" fill-opacity="0.5" stroke="#2b5b9e" stroke-width="2.5"/><text x="420" y="60" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">台体</text><text x="420" y="185" font-size="12" fill="#33536e" text-anchor="middle">V = ⅓(S上+S下+√(S上S下))h</text><text x="340" y="218" font-size="14" fill="#33536e" text-anchor="middle">锥是柱的 1/3，台是上下底与根号项的组合</text></svg>', caption: '图2　柱、锥、台的体积公式对比：锥是柱的三分之一，台是上下底面积与根号项的组合。' },
        { type: 'table', headers: ['几何体', '体积公式', '说明'], rows: [['柱体', 'V = Sh', '底面积×高'], ['锥体', 'V = ⅓Sh', '等底等高柱体的 1/3'], ['台体', 'V = ⅓(S上+S下+√(S上S下))h', 'S上=0 退化为锥'], ['球', 'V = 4/3·πR³', '仅与半径有关']] },
        { type: 'heading', text: '五、球的体积' },
        { type: 'keypoint', label: '重点·球体积', text: '球的体积公式同样只依赖半径：<strong>V = 4/3·πR³</strong>。它与表面积 S = 4πR² 形式相近，记忆时抓住“平方对应面积、立方对应体积”的规律。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="200" fill="#eef4fc"/><circle cx="200" cy="100" r="80" fill="#4a7de0" fill-opacity="0.4" stroke="#2b5b9e" stroke-width="2.5"/><line x1="200" y1="100" x2="280" y2="100" stroke="#c0392b" stroke-width="2"/><text x="238" y="90" font-size="15" fill="#c0392b" text-anchor="middle">R</text><text x="200" y="195" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">球</text><text x="470" y="85" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">S = 4πR²</text><text x="470" y="125" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">V = 4/3·πR³</text><text x="470" y="165" font-size="14" fill="#33536e" text-anchor="middle">表面积与体积都只由半径 R 决定</text></svg>', caption: '图3　球的表面积与体积：都只与半径 R 有关，S = 4πR²，V = 4/3·πR³。' },
        { type: 'example', label: '例题2', text: '一个圆柱底面半径 r = 2，高 h = 5，求其体积与侧面积。<br><br><strong>解</strong>：体积 V = Sh = πr²h = π × 2² × 5 = <strong>20π</strong>；侧面积 S侧 = 2πrh = 2π × 2 × 5 = <strong>20π</strong>。所以该圆柱体积为 20π、侧面积为 20π。' },
        { type: 'heading', text: '六、易错与记忆' },
        { type: 'warn', label: '易错', text: '常见失误：①<strong>混淆侧面积与全面积</strong>，忘记加底面积；②<strong>锥、台公式漏掉 1/3</strong>，误用 V = Sh 算圆锥；③<strong>圆台上下底分不清</strong>，把 r、R 用反；④<strong>球的 R 与直径混淆</strong>，误把直径代入 R。计算前先写明已知量再代公式。' },
        { type: 'tip', label: '记忆', text: '表面积口诀“<strong>多面体拆面加，旋转体侧加底</strong>”；体积口诀“<strong>柱 Sh、锥 ⅓Sh、台 ⅓ 三项加根号</strong>”。把台体公式看作柱与锥的“折中”，能自洽检验：上底为 0 得锥、上下底相等得柱。球单独记 4πR² 与 4/3·πR³。' },
        { type: 'table', headers: ['名称', '表面积', '体积'], rows: [['圆柱', '2πrh + 2πr²', 'πr²h'], ['圆锥', 'πrl + πr²', '⅓πr²h'], ['圆台', 'π(r+R)l + πr² + πR²', '⅓π(r²+R²+rR)h'], ['球', '4πR²', '4/3·πR³']] },
        { type: 'heading', text: '七、本课小结' },
        { type: 'list', items: ['多面体表面积 = 各面面积之和', '旋转体表面积 = 侧面积 + 底面积', 'S球 = 4πR²，V球 = 4/3·πR³', '柱 V=Sh，锥 V=⅓Sh，台 V=⅓(S上+S下+√)h', '计算先写已知、再代公式、注意单位与底面积是否计入'] }
      ],
      exercises: [
        { type: 'choice', question: '球的表面积公式为？', options: ['S = 2πR²', 'S = 4πR²', 'S = πR²', 'S = 4/3·πR³'], answer: 'S = 4πR²', explanation: '球只用半径 R 确定大小，其表面积公式为 S = 4πR²，与半径的平方成正比。S = 4/3·πR³ 是体积公式，另两项系数错误。故选 S = 4πR²。' },
        { type: 'fill', question: '圆锥的体积公式为 V = ______（用底面积 S 与高 h 表示）。', answer: '⅓Sh|1/3Sh|(1/3)Sh', explanation: '锥体（棱锥、圆锥）的体积等于同底等高柱体体积的三分之一，公式为 V = ⅓Sh。注意不要漏掉系数 1/3，也不能与柱体公式 V = Sh 混淆。' },
        { type: 'choice', question: '一个圆柱底面半径 r，高 h，其侧面积 S侧 等于？', options: ['πr²h', '2πrh', '2πr²', 'πrh'], answer: '2πrh', explanation: '圆柱侧面展开是一个矩形，矩形的一边为底面周长 2πr，另一边为高 h，故侧面积 S侧 = 2πrh。πr²h 是体积，2πr² 是两个底面积，πrh 少了系数 2。故选 2πrh。' },
        { type: 'fill', question: '圆台的体积公式为 V = ⅓(S上 + S下 + ______)h（在根号内填 S上 与 S下 的乘积形式）。', answer: '√(S上S下)|√S上S下', explanation: '台体体积公式为 V = ⅓(S上 + S下 + √(S上S下))h，其中根号项 √(S上S下) 是上下底面积乘积的算术平方根。当 S上 = 0 时公式退化为锥体，当 S上 = S下 时退化为柱体，可用此自洽检验记忆。' },
        { type: 'choice', question: '关于几何体表面积与体积，下列说法错误的是？', options: ['棱柱表面积等于各面面积之和', '圆锥表面积 = 侧面积 + 底面积', '球的体积 V = 4πR³', '圆柱体积 V = πr²h'], answer: '球的体积 V = 4πR³', explanation: '球的体积公式是 V = 4/3·πR³，而非 4πR³，后者少了系数 1/3 且指数错误（应为立方）。其余三项均正确：多面体表面积等于各面面积之和，圆锥全面积等于侧面积加底面积，圆柱体积等于底面积乘高。故选“球的体积 V = 4πR³”。' }
      ]
    }

  );
})();
