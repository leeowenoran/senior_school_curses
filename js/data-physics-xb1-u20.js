/* ============================================================
 * 高二物理 · 选择性必修第一册 · 第四章 光
 * 课时20：光的干涉
 * 数据注入：physics.xb1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb1');
  if (!v) return;

  v.points.push({
    id: 'xb1-u20',
    name: '光的干涉',
    chapter: '选择性必修第一册 · 第四章 光',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、光的干涉是怎么回事' },
      { type: 'paragraph', text: '把两块石头同时扔进平静的水塘，两圈水波相遇后，有的地方浪更高、有的地方反而平静，这就是"波的叠加"。光也是一种波，两束光相遇也会叠加：在某些位置始终加强变亮，在某些位置始终减弱变暗，形成稳定的明暗条纹，这种现象就叫作光的干涉。干涉是光具有波动性的最有力证据。' },
      { type: 'keypoint', label: '重点·相干光源', text: '<strong>要产生稳定的干涉条纹，两束光必须来自"相干光源"：频率相同、相位差保持恒定、振动方向相同。</strong>只有满足这三点，叠加后的加强区和减弱区才不会乱跑，才能看到稳定的条纹。' },
      { type: 'paragraph', text: '普通的电灯、太阳发出的是无数原子各自独立发光，频率、相位都乱七八糟，彼此不相干，相遇后只能混在一起变亮，看不到干涉条纹。所以想做光的干涉实验，必须想办法造出两束"步调一致"的光，最经典的办法就是杨氏双缝实验。' },
      { type: 'list', items: ['频率相同：两束光颜色（波长）要一样', '相位差恒定：两束光的"步调差"始终不变', '振动方向相同：光的电场振动方向大体一致', '三个条件缺一不可，否则条纹会乱闪甚至消失'] },
      { type: 'heading', text: '二、杨氏双缝干涉实验' },
      { type: 'paragraph', text: '实验这样安排：先让一束单色光（比如红色激光）穿过一条窄缝，再让它穿过靠得很近的两条平行窄缝（双缝）。两条缝相当于从同一束光里分出来的两个相干光源，它们发出的光在后面的屏上相遇，就形成了明暗相间的干涉条纹。' },
      { type: 'keypoint', label: '重点·条纹间距公式', text: '<strong>相邻两条明纹（或相邻两条暗纹）之间的距离 Δx 满足：Δx = l × λ / d。</strong>其中 l 是双缝到屏的距离，d 是两条缝之间的距离，λ 是光的波长。这个公式告诉我们条纹间距和哪些因素有关。' },
      { type: 'example', label: '例题·计算条纹间距', text: '用波长 λ = 500 纳米的红光做双缝干涉，双缝间距 d = 0.5 毫米，缝到屏的距离 l = 1 米，求相邻明纹间距 Δx。<br><br><strong>解析</strong>：<br>先把单位统一成米：d = 0.5 毫米 = 0.0005 米，λ = 500 纳米 = 5×10⁻⁷ 米，l = 1 米。代入公式 Δx = l × λ / d = 1 × (5×10⁻⁷) / 0.0005 = 1×10⁻³ 米 = 1 毫米。所以相邻明纹间距约为 1 毫米。' },
      { type: 'warn', label: '易错', text: '<strong>第一，公式里 d 是"双缝之间的距离"，不是缝的宽度，别搞混。</strong><br><strong>第二，代入计算前必须把 l、d、λ 统一成同一长度单位（都化米），否则数量级会错。</strong><br><strong>第三，双缝干涉的条纹是"等间距"的，明暗条纹一样宽；这点和后面学的单缝衍射条纹（中间宽、两边窄）完全不同。</strong>' },
      { type: 'table', headers: ['改变的物理量', '条纹间距 Δx 如何变化', '原因'], rows: [['双缝间距 d 增大', '变小（条纹更密）', 'Δx 与 d 成反比'], ['屏距 l 增大', '变大（条纹更疏）', 'Δx 与 l 成正比'], ['光波长 λ 增大（如红换绿）', '变大', 'Δx 与 λ 成正比'], ['光波长 λ 减小（如绿换紫）', '变小', 'Δx 与 λ 成正比']] },
      { type: 'tip', label: '提示', text: '<strong>用白光代替单色光做双缝干涉，屏中央是一条白色亮纹，两侧则是彩色条纹（紫在内、红在外）。</strong>因为白光含各种波长，不同颜色光的条纹间距不同，叠在一起就分成了彩带。记住"中央白、两边彩"，考试常考。' },
      { type: 'list', items: ['条纹明暗相间，且相邻明纹、相邻暗纹间距都相等', '中央一定是亮纹（两束光到中央路程差为零）', '波长越长，条纹越疏；双缝越近，条纹越疏', '用白光时中央白、两侧彩色，红光条纹比紫光疏'] },
      { type: 'heading', text: '三、薄膜干涉' },
      { type: 'paragraph', text: '一束光照到很薄的透明膜（比如肥皂泡、水面油膜）上时，会在膜的前表面和后表面分别反射出两束光。这两束反射光来自同一束入射光，自然满足相干条件，它们叠加后也会产生干涉，叫做薄膜干涉。我们看到的肥皂泡五颜六色，就是薄膜干涉的结果。' },
      { type: 'keypoint', label: '重点·薄膜干涉的应用', text: '<strong>薄膜干涉在生活和技术中很有用：</strong>① 照相机镜头镀"增透膜"，让反射光干涉相消，更多光透过去，照片更亮；② 用一块标准平面和待测面夹出极薄空气层，看干涉条纹是否平直，就能检查平面平不平。' },
      { type: 'example', label: '例题·肥皂膜的彩色', text: '为什么阳光下吹出的肥皂泡会呈现彩色，而用清水吹出的同样大小的泡泡却没有颜色？<br><br><strong>解析</strong>：<br>肥皂膜有一定厚度，前、后表面反射的光发生薄膜干涉，不同厚度处加强的波长不同，于是呈现彩色。清水吹的泡太薄，膜前后表面反射光的光程差太小，各色光都几乎同时加强或减弱，看起来就是透明的，没有明显的彩色条纹。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">杨氏双缝干涉实验装置</text><rect x="40" y="125" width="50" height="50" rx="6" fill="#4fb3a5"/><text x="65" y="205" font-size="12" fill="#234b45" text-anchor="middle">光源</text><rect x="150" y="142" width="8" height="26" fill="#2e9e8f"/><text x="154" y="205" font-size="12" fill="#234b45" text-anchor="middle">单缝</text><rect x="262" y="134" width="6" height="14" fill="#2e9e8f"/><rect x="262" y="162" width="6" height="14" fill="#2e9e8f"/><text x="265" y="205" font-size="12" fill="#234b45" text-anchor="middle">双缝</text><rect x="600" y="55" width="12" height="190" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="606" y="42" font-size="12" fill="#234b45" text-anchor="middle">屏</text><line x1="90" y1="150" x2="262" y2="141" stroke="#234b45" stroke-width="2"/><line x1="90" y1="150" x2="262" y2="169" stroke="#234b45" stroke-width="2"/><line x1="268" y1="141" x2="600" y2="105" stroke="#234b45" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="268" y1="169" x2="600" y2="195" stroke="#234b45" stroke-width="1.5" stroke-dasharray="4,3"/><text x="340" y="278" font-size="13" fill="#234b45" text-anchor="middle">同一束光分出两束相干光，在屏上形成稳定明暗条纹</text></svg>', caption: '图1　杨氏双缝干涉：单色光经单缝、双缝后分成两束相干光，在屏上形成明暗条纹。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="260" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">双缝干涉条纹（明暗相间、等间距）</text><rect x="110" y="70" width="440" height="110" fill="#f0fbf9" stroke="#2e9e8f" stroke-width="2"/><rect x="110" y="70" width="40" height="110" fill="#2e9e8f"/><rect x="190" y="70" width="40" height="110" fill="#2e9e8f"/><rect x="270" y="70" width="40" height="110" fill="#2e9e8f"/><rect x="350" y="70" width="40" height="110" fill="#2e9e8f"/><rect x="430" y="70" width="40" height="110" fill="#2e9e8f"/><rect x="510" y="70" width="40" height="110" fill="#2e9e8f"/><line x1="190" y1="50" x2="190" y2="200" stroke="#4fb3a5" stroke-width="2"/><line x1="350" y1="50" x2="350" y2="200" stroke="#4fb3a5" stroke-width="2"/><polygon points="190,46 184,58 196,58" fill="#4fb3a5"/><polygon points="350,46 344,58 356,58" fill="#4fb3a5"/><text x="270" y="225" font-size="13" fill="#234b45" text-anchor="middle">暗纹</text><text x="310" y="225" font-size="13" fill="#234b45" text-anchor="middle">明纹</text><text x="340" y="248" font-size="13" fill="#234b45" text-anchor="middle">箭头所指间距 Δx = l × λ / d，明暗条纹一样宽</text></svg>', caption: '图2　双缝干涉条纹明暗相间且等间距，相邻明（或暗）纹间距 Δx 由公式给出。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="280" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">薄膜干涉——肥皂膜与水面的彩色</text><rect x="60" y="90" width="240" height="120" rx="14" fill="#4fb3a5" opacity="0.85"/><rect x="90" y="120" width="40" height="60" fill="#d6ece8" opacity="0.7"/><rect x="150" y="110" width="40" height="70" fill="#d6ece8" opacity="0.7"/><rect x="210" y="125" width="40" height="55" fill="#d6ece8" opacity="0.7"/><text x="180" y="240" font-size="13" fill="#234b45" text-anchor="middle">肥皂膜前后表面反射光干涉成彩色</text><polygon points="400,210 660,210 660,150 400,150" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><polygon points="400,210 400,150 410,150 410,210" fill="#4fb3a5"/><text x="530" y="135" font-size="12" fill="#234b45" text-anchor="middle">空气劈尖</text><line x1="420" y1="180" x2="640" y2="180" stroke="#234b45" stroke-width="2" stroke-dasharray="5,4"/><text x="530" y="250" font-size="13" fill="#234b45" text-anchor="middle">楔形空气膜也能产生干涉条纹</text></svg>', caption: '图3　薄膜（左，如肥皂膜）和楔形空气层（右）的前后表面反射光叠加，都会产生干涉。' }
    ],
    exercises: [
      { type: 'choice', question: '要产生稳定的光的干涉条纹，两束光必须是相干光。下列属于相干光条件的是？', options: ['频率相同、相位差恒定、振动方向相同', '频率不同、强度相同', '只要都是可见光即可', '只要光强足够大即可'], answer: '频率相同、相位差恒定、振动方向相同', explanation: '只有两束光频率相同（波长一样）、相位差保持恒定、振动方向相同，叠加后加强区和减弱区才不会随时间乱变，才能看到稳定条纹，这样的两束光叫相干光。普通光源各自独立发光，相位乱跳，所以一般不直接相干。因此正确条件是三点同时具备。' },
      { type: 'choice', question: '在杨氏双缝干涉中，若其他条件不变，只把双缝之间的距离 d 增大，屏上相邻明纹的间距会怎样？', options: ['变大', '变小', '不变', '先变大后变小'], answer: '变小', explanation: '由条纹间距公式 Δx = l × λ / d 可知，Δx 与双缝间距 d 成反比。当 d 增大时，分母变大，算出的 Δx 变小，也就是相邻明纹靠得更近、条纹更密。这与实验现象一致：双缝分得越开，条纹越密集。因此选"变小"。' },
      { type: 'choice', question: '用白光做双缝干涉实验，在屏上观察到的条纹是？', options: ['全部是黑白相间的条纹', '中央为白色条纹，两侧为彩色条纹', '全部是彩色条纹且中央最暗', '只有一条白色亮纹，其余全黑'], answer: '中央为白色条纹，两侧为彩色条纹', explanation: '白光由多种波长混合而成。屏正中央两束光路程差为零，各种颜色都加强，合起来是白色亮纹；偏离中央后，不同波长光的明纹位置不同（红光间距大、紫光间距小），于是分开成彩色条纹，且紫光靠近中央、红光在外侧。所以观察到"中央白、两侧彩"。' },
      { type: 'fill', question: '杨氏双缝干涉中，相邻两条明纹（或相邻两条暗纹）的间距用公式表示为 Δx = ___（用 l、λ、d 表示，其中 l 为屏距、d 为双缝间距、λ 为波长）。', answer: 'l × λ / d', explanation: '双缝干涉条纹间距公式为 Δx = l × λ / d，其中 l 是双缝到屏的距离，d 是两条缝中心之间的距离，λ 是光的波长。该式说明条纹间距与屏距、波长成正比，与双缝间距成反比。代入计算前要把三个量统一成同一长度单位。' },
      { type: 'fill', question: '照相机的镜头常镀一层"增透膜"，利用薄膜干涉使反射光相互___（填"加强"或"减弱"），从而让更多光透过镜头。', answer: '减弱', explanation: '增透膜是一层厚度恰当的透明薄膜。当反射光在膜的前后表面发生干涉时，让反射光因为光程差恰好为半波长的奇数倍而"相消"，即相互减弱，反射回去的光变少，透射进镜头的光就变多，照片更明亮、清晰。这是薄膜干涉的一项重要应用。' }
    ]
  });
})();
