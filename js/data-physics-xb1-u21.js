/* ============================================================
 * 高二物理 · 选择性必修第一册 · 第四章 光
 * 课时21：光的衍射和偏振
 * 数据注入：physics.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u21',
    name: '光的衍射和偏振',
    chapter: '选择性必修第一册 · 第四章 光',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、光也会"绕弯"——衍射' },
      { type: 'paragraph', text: '我们常说"光沿直线传播"，但那只是在障碍物比光的波长大很多时才近似成立。当光遇到尺寸很小的孔或障碍物时，会"绕"到障碍物后面去，偏离原来的直线路径，这种现象叫作光的衍射。衍射同样是光具有波动性的重要证据。' },
      { type: 'keypoint', label: '重点·明显衍射的条件', text: '<strong>只有当障碍物或孔的尺寸与光的波长差不多，甚至比波长还小时，衍射现象才明显。</strong>光的波长很短（几百纳米），所以日常里大东西挡住光几乎看不到绕弯；但把缝或孔缩到很窄，衍射就出现了。' },
      { type: 'list', items: ['衍射是波绕过障碍物继续传播的现象', '明显衍射要求障碍尺寸 ≈ 或 < 光的波长', '光有衍射，说明光是一种波', '缝越窄，衍射越明显，中央亮区越宽'] },
      { type: 'heading', text: '二、单缝衍射与圆孔衍射' },
      { type: 'paragraph', text: '让一束光穿过一条很窄的单缝，后面屏上不是一条亮线，而是中间一条又宽又亮的明纹，两侧对称排着几条越来越窄、越来越暗的明纹，中间夹着暗纹。如果光穿过一个很小的圆孔，屏上会出现中央一个亮斑，外面套着一圈圈明暗相间的同心圆环。' },
      { type: 'keypoint', label: '重点·单缝衍射条纹特点', text: '<strong>单缝衍射的中央明纹最宽、最亮；两侧明纹逐渐变窄、变暗，且各条明纹的间距并不相等。</strong>这和双缝干涉"等间距、一样宽"的条纹明显不同，是区分两者的关键。' },
      { type: 'example', label: '例题·缝宽的影响', text: '用同一束单色光做单缝衍射，逐渐把缝调窄，屏上的中央明纹会怎样变化？<br><br><strong>解析</strong>：<br>缝越窄，光越容易"绕"出去，衍射越明显，中央明纹反而越宽，两侧条纹也铺得更开。所以把缝调窄时，中央亮区变宽、整体图样被"撑大"。这与直觉相反：缝小了亮区却更大。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">单缝衍射条纹（中央最宽最亮）</text><rect x="90" y="70" width="500" height="110" fill="#2e9e8f"/><rect x="255" y="70" width="110" height="110" fill="#f0fbf9"/><rect x="170" y="70" width="44" height="110" fill="#f0fbf9"/><rect x="466" y="70" width="44" height="110" fill="#f0fbf9"/><rect x="130" y="70" width="22" height="110" fill="#f0fbf9"/><rect x="528" y="70" width="22" height="110" fill="#f0fbf9"/><line x1="255" y1="50" x2="365" y2="50" stroke="#4fb3a5" stroke-width="2"/><polygon points="255,46 261,58 249,58" fill="#4fb3a5"/><polygon points="365,46 371,58 359,58" fill="#4fb3a5"/><text x="310" y="205" font-size="13" fill="#234b45" text-anchor="middle">中央明纹最宽</text><text x="340" y="248" font-size="13" fill="#234b45" text-anchor="middle">两侧明纹逐渐变窄变暗，间距不相等</text></svg>', caption: '图1　单缝衍射条纹：中央明纹最宽最亮，两侧依次变窄变暗（与双缝干涉不同）。' },
      { type: 'warn', label: '易错', text: '<strong>第一，衍射不是"影子边缘模糊"，而是光真的绕到了几何阴影区里，是波的本性。</strong><br><strong>第二，别把"单缝衍射条纹"和"双缝干涉条纹"记混：前者中央最宽、间距不等；后者明暗等间距、一样宽。</strong><br><strong>第三，光永远有衍射，只是障碍很大时太弱看不见，并非"没有衍射"。</strong>' },
      { type: 'table', headers: ['对比项', '单缝衍射条纹', '双缝干涉条纹'], rows: [['中央明纹', '最宽最亮', '与其他明纹宽度相近'], ['条纹间距', '不相等（越往外越密）', '相等（等间距）'], ['亮度分布', '中央亮，向两侧迅速变暗', '各明纹亮度较均匀'], ['本质', '同一束光自身叠加', '两束相干光叠加']] },
      { type: 'tip', label: '提示', text: '<strong>圆孔衍射里有个著名故事：理论上在小圆片阴影中央应有一个亮斑（泊松亮斑），后来真的被观察到，反而成了证明波动说的有力证据。</strong>所以看到"圆板阴影中心竟有亮点"，别惊讶，那就是衍射。' },
      { type: 'heading', text: '三、光的偏振——光是横波' },
      { type: 'paragraph', text: '绳子上下抖，波沿绳子传，但绳上各点的振动方向都垂直于传播方向，这种波叫横波；声音那种空气疏密前后挤的叫纵波。横波有一个特殊本领：它的振动方向可以被"筛选"。让横波穿过一条只允许某一方向振动通过的窄缝，就能把其他方向挡掉——这个现象叫偏振。光能够发生偏振，说明光的振动方向垂直于传播方向，即光是横波。' },
      { type: 'keypoint', label: '重点·偏振证明光是横波', text: '<strong>只有横波才有偏振现象，纵波（如声波）没有。</strong>光通过偏振片后，只剩下沿某一方向振动的成分，说明光的振动有特定方向、且垂直于传播方向，从而证明光是横波。' },
      { type: 'example', label: '例题·偏振片的应用', text: '把两块偏振片叠在一起，让一束自然光先过第一块，再过第二块，慢慢转动第二块，透过的光强会有什么变化？<br><br><strong>解析</strong>：<br>第一块把自然光变成只沿一个方向振动的偏振光。第二块也有自己的透光方向：当两片透光方向平行时，光最亮；当互相垂直时，第一块过来的振动全被挡掉，光最暗（几乎全黑）。转动第二块，亮度就在最亮和最暗之间周期变化。' },
      { type: 'list', items: ['偏振片只让某一方向的振动通过，其余挡掉', '自然光过一块偏振片后变成线偏振光', '两片偏振片方向平行时最亮，垂直时最暗', '应用：偏光太阳镜、3D 电影眼镜、液晶显示'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">偏振片把自然光变成线偏振光</text><circle cx="90" cy="150" r="34" fill="#4fb3a5"/><line x1="66" y1="135" x2="114" y2="165" stroke="#fff" stroke-width="3"/><line x1="66" y1="165" x2="114" y2="135" stroke="#fff" stroke-width="3"/><line x1="90" y1="120" x2="90" y2="180" stroke="#fff" stroke-width="3"/><text x="90" y="210" font-size="12" fill="#234b45" text-anchor="middle">自然光</text><rect x="200" y="118" width="20" height="64" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="210" y1="124" x2="210" y2="176" stroke="#2e9e8f" stroke-width="3"/><text x="210" y="210" font-size="12" fill="#234b45" text-anchor="middle">偏振片</text><rect x="320" y="135" width="14" height="30" fill="#4fb3a5"/><line x1="327" y1="135" x2="327" y2="165" stroke="#fff" stroke-width="3"/><text x="327" y="210" font-size="12" fill="#234b45" text-anchor="middle">线偏振光</text><rect x="430" y="118" width="20" height="64" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><line x1="440" y1="124" x2="440" y2="176" stroke="#2e9e8f" stroke-width="3" transform="rotate(40 440 150)"/><text x="440" y="210" font-size="12" fill="#234b45" text-anchor="middle">第二片</text><rect x="560" y="135" width="14" height="30" fill="#4fb3a5" opacity="0.4"/><text x="567" y="210" font-size="12" fill="#234b45" text-anchor="middle">输出变暗</text><line x1="124" y1="150" x2="200" y2="150" stroke="#234b45" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="220" y1="150" x2="320" y2="150" stroke="#234b45" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="334" y1="150" x2="430" y2="150" stroke="#234b45" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="450" y1="150" x2="560" y2="150" stroke="#234b45" stroke-width="1.5" stroke-dasharray="4,3"/></svg>', caption: '图2　自然光（各方向振动）经偏振片后只剩一个方向振动，成为线偏振光；第二片方向不平行时输出变暗。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">圆孔衍射：中央亮斑加同心圆环</text><circle cx="230" cy="155" r="74" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="230" cy="155" r="30" fill="#4fb3a5"/><circle cx="230" cy="155" r="52" fill="none" stroke="#2e9e8f" stroke-width="3"/><text x="230" y="250" font-size="12" fill="#234b45" text-anchor="middle">圆孔衍射图样</text><circle cx="500" cy="155" r="60" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><circle cx="500" cy="155" r="26" fill="#4fb3a5"/><text x="500" y="250" font-size="12" fill="#234b45" text-anchor="middle">小圆板阴影中央的泊松亮斑</text><text x="340" y="278" font-size="13" fill="#234b45" text-anchor="middle">孔或板很小时，光绕到几何阴影区，形成明暗同心环</text></svg>', caption: '图3　圆孔衍射呈中央亮斑加同心圆环；小圆板阴影中心也会因衍射出现亮斑（泊松亮斑）。' },
      { type: 'paragraph', text: '总结一下：衍射告诉我们光会"绕弯"、是波；偏振告诉我们光的振动垂直于传播方向、是横波。两者一起，把光的波动图像描绘得更完整。日常中的偏光太阳镜能削掉水面反光，正是利用了偏振——反射光多半是水平方向振动的偏振光，把镜片透光方向做成竖直，就把刺眼反光挡掉了。' }
    ],
    exercises: [
      { type: 'choice', question: '光要发生明显的衍射现象，障碍物或孔的尺寸应当满足什么条件？', options: ['远大于光的波长', '与光的波长差不多或更小', '必须是正方形', '必须是金属材质'], answer: '与光的波长差不多或更小', explanation: '衍射是否明显，关键看障碍物或孔的尺寸和光波长谁大。光的波长极短（几百纳米），只有当孔或障碍的尺寸与波长差不多甚至更小时，光才能明显地绕到几何阴影区，衍射图样才看得清。尺寸远大于波长时衍射极弱，看起来就像沿直线传播。因此选"与波长差不多或更小"。' },
      { type: 'choice', question: '关于单缝衍射条纹，下列说法正确的是？', options: ['各条明纹一样宽一样亮', '中央明纹最宽最亮，两侧逐渐变窄变暗', '只有一条亮纹其余全黑', '条纹间距随距离越来越大且等宽'], answer: '中央明纹最宽最亮，两侧逐渐变窄变暗', explanation: '单缝衍射的图样是中央一条最宽最亮的明纹，两侧对称排着几条越来越窄、越来越暗的明纹，明纹间距也不相等。这与双缝干涉"明暗等间距、宽度相近"的特征完全不同。所以"中央最宽最亮、两侧变窄变暗"是唯一正确的描述。' },
      { type: 'choice', question: '光能够发生偏振现象，这说明了什么？', options: ['光是纵波', '光是横波', '光沿直线传播', '光没有能量'], answer: '光是横波', explanation: '偏振是横波特有的性质：只有振动方向垂直于传播方向的波，才能被偏振片"筛选"出某一方向的振动；纵波的振动就在传播方向上，无法被这样筛选，所以没有偏振。光能被偏振，说明光的振动方向垂直于传播方向，即光是横波。这是证明光为横波的关键证据。' },
      { type: 'fill', question: '光在传播中遇到尺寸很小的孔或障碍物时，会绕到障碍物后面继续传播，这种现象叫作光的___。', answer: '衍射', explanation: '衍射是波的重要特性之一，指波在传播途中遇到尺寸与波长相近或更小的障碍物、小孔时，会偏离直线路径绕到几何阴影区域继续传播。光也能发生衍射，这是光具有波动性的直接证据，著名例子有单缝衍射条纹和圆孔衍射环。' },
      { type: 'fill', question: '让一束光先后通过两块偏振片，当两块偏振片的透光方向互相___（填"平行"或"垂直"）时，透射过去的的光最弱、几乎全黑。', answer: '垂直', explanation: '第一块偏振片把自然光变成沿某一方向振动的线偏振光。第二块偏振片只允许与自己透光方向平行的振动分量通过：当两片透光方向平行时全部通过、最亮；当互相垂直时，第一片过来的振动方向恰好被第二片完全挡住，透射光最弱，几乎全黑。转动第二片就能看到明暗周期变化。' }
    ]
  });
})();
