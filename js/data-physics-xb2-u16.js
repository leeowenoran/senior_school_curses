/* ============================================================
 * 高二物理 · 选择性必修第二册 · 第四章 电磁振荡与电磁波
 * 课时16：电磁波谱
 * 数据注入：physics.xb2.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('physics', 'xb2');
  if (!v) return;

  v.points.push({
    id: 'xb2-u16',
    name: '电磁波谱',
    chapter: '选择性必修第二册 · 第四章 电磁振荡与电磁波',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是电磁波谱' },
      { type: 'paragraph', text: '前几节我们知道了电磁波是一家人。既然它们本质相同，区别就只在波长和频率。把形形色色的电磁波按波长（或者按频率）从大到小排成一列，得到的一张"全家福"，就叫作电磁波谱。它像一把尺子，帮我们给每种电磁波找到位置。' },
      { type: 'keypoint', label: '重点·波谱顺序', text: '<strong>电磁波谱按波长从长到短排列为：无线电波 → 微波 → 红外线 → 可见光 → 紫外线 → X射线 → γ射线。</strong>对应频率则从低到高，波长越短频率越高。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">电磁波谱：波长从长到短排列</text><rect x="20" y="90" width="90" height="120" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="65" y="150" font-size="12" fill="#234b45" text-anchor="middle">无线电波</text><rect x="118" y="90" width="80" height="120" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="158" y="150" font-size="12" fill="#234b45" text-anchor="middle">微波</text><rect x="206" y="90" width="70" height="120" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="241" y="150" font-size="12" fill="#234b45" text-anchor="middle">红外线</text><rect x="284" y="90" width="60" height="120" rx="8" fill="#4fb3a5" stroke="#2e9e8f" stroke-width="2"/><text x="314" y="150" font-size="12" fill="#234b45" text-anchor="middle">可见光</text><rect x="352" y="90" width="60" height="120" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="382" y="150" font-size="12" fill="#234b45" text-anchor="middle">紫外线</text><rect x="420" y="90" width="55" height="120" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="447" y="150" font-size="12" fill="#234b45" text-anchor="middle">X射线</text><rect x="483" y="90" width="50" height="120" rx="8" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="508" y="150" font-size="12" fill="#234b45" text-anchor="middle">γ射线</text><text x="20" y="245" font-size="13" fill="#234b45">波长长</text><text x="660" y="245" font-size="13" fill="#234b45" text-anchor="end">波长短</text><text x="340" y="280" font-size="13" fill="#234b45" text-anchor="middle">从左到右波长变短、频率变高（可见光只是中间一小段）</text></svg>', caption: '图1　电磁波谱按波长从长到短排列，可见光只占中间很窄一段。' },
      { type: 'list', items: ['波长越短，频率越高；波长越长，频率越低', '频率越高，单个光子的能量越大，穿透或电离能力通常越强', '不同电磁波本质相同，只是波长和频率不同，所以用途差别很大'] },
      { type: 'heading', text: '二、各类电磁波的特点与应用' },
      { type: 'paragraph', text: '无线电波波长最长、频率最低，最容易绕过障碍物，用来传递广播、电视和手机信号。微波波长较短、能像手电筒一样集中定向发射，常用于微波炉加热、雷达测距和卫星通信。' },
      { type: 'paragraph', text: '红外线摸起来发热，热效应明显，所以体温、地温这些"热"信息都能被它携带，夜视仪、红外测温枪、电视遥控器都用它。可见光是我们眼睛能直接看见的一段，用于照明和显示。' },
      { type: 'table', headers: ['种类', '主要特性', '常见应用'], rows: [['无线电波', '波长最长、频率最低', '广播、电视、手机通信'], ['微波', '波长较短，能集中定向', '微波炉、雷达、卫星通信'], ['红外线', '热效应明显', '遥控、夜视仪、红外测温'], ['可见光', '人眼能看见', '照明、显示、光合作用'], ['紫外线', '能量较高，有荧光和杀菌作用', '消毒、验钞、诱杀害虫'], ['X射线', '穿透力强', '医院透视、安检'], ['γ射线', '能量最高、穿透力极强', '工业探伤、医疗放疗']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">不同电磁波在生活中的应用</text><rect x="40" y="80" width="180" height="140" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="130" y="110" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">微波</text><text x="130" y="140" font-size="13" fill="#234b45" text-anchor="middle">微波炉加热</text><text x="130" y="165" font-size="13" fill="#234b45" text-anchor="middle">雷达测距</text><rect x="250" y="80" width="180" height="140" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="340" y="110" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">红外线</text><text x="340" y="140" font-size="13" fill="#234b45" text-anchor="middle">遥控</text><text x="340" y="165" font-size="13" fill="#234b45" text-anchor="middle">夜视仪</text><rect x="460" y="80" width="180" height="140" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="550" y="110" font-size="14" fill="#234b45" text-anchor="middle" font-weight="bold">X射线</text><text x="550" y="140" font-size="13" fill="#234b45" text-anchor="middle">医院透视</text><text x="550" y="165" font-size="13" fill="#234b45" text-anchor="middle">安检</text></svg>', caption: '图2　微波、红外线、X射线在生活中的典型应用。' },
      { type: 'keypoint', label: '重点·各类本领', text: '<strong>红外线热效应强（遥控、夜视）；紫外线能杀菌和使荧光物质发光（消毒、验钞）；X射线穿透力强（透视）；γ射线能量最高（放疗、探伤）。</strong>本领大小大体随频率升高而增强。' },
      { type: 'warn', label: '易错', text: '<strong>紫外线、X射线、γ射线都具有一定的伤害性。</strong>适量紫外线有助健康，但过量会晒伤皮肤、损害眼睛；X射线和 γ射线属于电离辐射，频繁或过量照射可能损伤细胞，因此不能滥用，医疗检查也要控制在安全剂量内。' },
      { type: 'list', items: ['手机、Wi-Fi 用的是无线电波或微波', '电视遥控器用的是红外线', '晒太阳时皮肤被晒黑、细菌被紫外线杀死，都和紫外线有关', '医院拍胸片、机场安检用到的都是 X 射线'] },
      { type: 'tip', label: '提示', text: '<strong>可见光只是电磁波谱中非常窄的一段。</strong>在可见光里，红光波长最长、紫光波长最短，中间依次是橙黄绿蓝靛。我们看到的"七色光"其实都是电磁波，只是波长落在人眼能感受的小范围内。' },
      { type: 'example', label: '例题·透视用哪种', text: '医院给病人做胸部透视、检查骨折，通常利用的是哪一种电磁波？<br><br><strong>解析</strong>：<br>胸部透视需要看清骨骼等内部结构，要求电磁波有较强的穿透能力。在电磁波谱中，<strong>X 射线</strong>穿透力较强，能穿过肌肉而把骨骼影像留在底片上，所以医院透视用的是 X 射线。无线电波、可见光穿透力不够，γ射线虽更强但主要用于放疗而非常规透视。' },
      { type: 'tip', label: '提示', text: '微波炉用微波加热食物，<strong>微波属于电磁波，并不是放射性射线</strong>，不会让食物带辐射。它靠水分子吸收微波能量发热来加热，和 X射线、γ射线的电离辐射性质完全不同，正常使用是安全的。' },
      { type: 'heading', text: '三、波长与频率的关系' },
      { type: 'paragraph', text: '既然所有电磁波在真空中跑得一样快（都是光速 c），那波长和频率之间就绑在了一起：波越长，单位时间里能"颠"的次数（频率）就越少；波越短，颠得越密、频率越高。它们由一条简单的关系式连起来。' },
      { type: 'keypoint', label: '重点·c = λ × f', text: '<strong>所有电磁波在真空中的速度都等于 c，满足 c = λ × f（波速 = 波长 × 频率），c 约 3.0×10⁸ m/s。</strong>因为 c 不变，波长 λ 越短则频率 f 越高，波长越长则频率越低。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e6f4f1"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#1f7a6e" text-anchor="middle">c = λ × f：波长越短，频率越高</text><rect x="60" y="70" width="260" height="60" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="190" y="108" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">长波长 → 低频率</text><path d="M 80 200 q 40 -40 80 0 q 40 40 80 0 q 40 -40 80 0" fill="none" stroke="#2e9e8f" stroke-width="3"/><rect x="360" y="70" width="260" height="60" rx="10" fill="#d6ece8" stroke="#2e9e8f" stroke-width="2"/><text x="490" y="108" font-size="15" fill="#234b45" text-anchor="middle" font-weight="bold">短波长 → 高频率</text><path d="M 380 200 q 15 -40 30 0 q 15 40 30 0 q 15 -40 30 0 q 15 40 30 0 q 15 -40 30 0 q 15 40 30 0 q 15 -40 30 0 q 15 40 30 0" fill="none" stroke="#4fb3a5" stroke-width="3"/><text x="340" y="270" font-size="13" fill="#234b45" text-anchor="middle">速度 c 相同，波长与频率"此消彼长"</text></svg>', caption: '图3　速度 c 相同，波长越短则频率越高，两者成反比。' },
      { type: 'warn', label: '易错', text: '<strong>不同种类的电磁波在真空中的速度完全相同，都是 c，区别只在于波长和频率，而不是速度。</strong>有些同学误以为"频率高的波跑得更快"，这是错的。它们速度一样，只是波长越短、频率越高、能量通常越大。' }
    ],
    exercises: [
      { type: 'choice', question: '把电磁波按波长从长到短排列，下列顺序正确的是？', options: ['无线电波、微波、红外线、可见光、紫外线、X射线、γ射线', 'γ射线、X射线、紫外线、可见光、红外线、微波、无线电波', '可见光、红外线、微波、无线电波、紫外线、X射线、γ射线', '微波、无线电波、可见光、红外线、紫外线、γ射线、X射线'], answer: '无线电波、微波、红外线、可见光、紫外线、X射线、γ射线', explanation: '电磁波谱按照波长从长到短（频率从低到高）的固定顺序是：无线电波、微波、红外线、可见光、紫外线、X射线、γ射线。波长最长的是无线电波，最短的是 γ 射线。记住这个顺序，就能判断其它排列都是错乱的。' },
      { type: 'choice', question: '医院里用来给病人做透视、检查骨骼的电磁波通常是？', options: ['X射线', '无线电波', '可见光', '红外线'], answer: 'X射线', explanation: '医院透视需要电磁波能穿透肌肉和软组织、把骨骼显影。X 射线穿透力较强，正适合做透视和拍片；无线电波和可见光穿透力不够，红外线主要用于热成像而非骨骼透视，因此选 X 射线。' },
      { type: 'choice', question: '在真空中，所有电磁波的？', options: ['速度都相同，都是 c', '波长越长速度越快', '频率越高速度越慢', '速度各不相同'], answer: '速度都相同，都是 c', explanation: '无论波长频率如何，真空中所有电磁波的传播速度都等于 c（约 3.0×10⁸ m/s）。它们并不是波长越长越快或频率越高越慢，速度都一样，区别仅在波长和频率。这是电磁波的重要性质。' },
      { type: 'fill', question: '在可见光中，红光的波长比紫光___（填"长"或"短"）。', answer: '长', explanation: '可见光里红橙黄绿蓝靛紫，波长依次变短。红光位于可见光波长最长的一端，紫光位于最短的一端，所以红光的波长比紫光长。这也是红光衍射更明显、散射较少（天空偏蓝）的原因。' },
      { type: 'fill', question: '由关系 c = λ × f 可知，在真空中波长越短的电磁波，其频率越___（填"高"或"低"）。', answer: '高', explanation: '真空中 c 恒定，关系式 c = λ × f 表明波长 λ 和频率 f 成反比。因此波长越短的电磁波，频率就越高。例如 γ 射线波长最短、频率最高，能量也最大；无线电波波长最长、频率最低。' }
    ]
  });
})();
