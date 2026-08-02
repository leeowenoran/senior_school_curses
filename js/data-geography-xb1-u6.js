/* 地理 · 选择性必修1 · 第3章 · 课时：常见天气系统 */
(function () {
  var v = gzGetVolume('geography', 'xb1');
  if (!v) return;
  v.points.push({
    id: 'xb1-u6',
    name: '第1节 常见天气系统',
    chapter: '选择性必修1 · 第3章 大气的运动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、气团与锋的概念' },
      { type: 'paragraph', text: '气团是水平方向上温度、湿度等物理性质比较均匀的大范围空气。当冷、暖气团相遇时，它们之间形成的交界面叫做锋面，锋面与地面相交的线叫做锋线，锋面和锋线统称锋。锋是冷暖空气激烈交锋的地带，常带来云、雨、大风等天气变化。' },
      { type: 'list', items: ['气团：大范围性质均一的空气块', '冷气团：气温低、密度大、干燥', '暖气团：气温高、密度小、湿润', '锋：冷暖气团交界面，分冷锋、暖锋、准静止锋'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">锋面示意（冷暖气团交锋）</text><line x1="120" y1="120" x2="560" y2="220" stroke="#2a6fa8" stroke-width="3"/><polygon points="120,120 105,135 135,135" fill="#2a6fa8"/><rect x="60" y="220" width="500" height="50" fill="#cfe4f5" opacity="0.7"/><text x="300" y="255" font-size="12" fill="#1f3a4d" text-anchor="middle">冷气团（密度大，在下方）</text><text x="250" y="100" font-size="12" fill="#1f3a4d" text-anchor="middle">暖气团</text><text x="340" y="285" font-size="12" fill="#1f3a4d" text-anchor="middle">锋面倾斜，冷气团楔入暖气团下方。</text></svg>', caption: '图1　冷暖气团相遇形成锋面，冷气团密度大位于下方，锋面倾斜。' },
      { type: 'keypoint', label: '重点·冷锋与暖锋的判别', text: '<strong>看移动方向和符号：</strong>冷锋是冷气团主动向暖气团移动的锋，锋面符号为三角（锯齿）；暖锋是暖气团主动向冷气团移动的锋，符号为半圆（圆齿）。冷锋过境常带来大风、降温、雨雪，暖锋过境多连续性降水。判别关键在「谁主动」。' },
      { type: 'heading', text: '二、冷锋与暖锋的天气' },
      { type: 'paragraph', text: '冷锋过境前，受暖气团控制，气温较高、气压较低、天气晴朗；过境时云层增厚、出现大风、降温和雨雪；过境后冷气团占据，气温下降、气压升高、天气转晴。暖锋过境前受冷气团控制、气温低，过境时连续性降水，过境后暖气团控制、气温升高、天气转晴。' },
      { type: 'list', items: ['冷锋：过境前暖→过境时风雨降温→过境后冷晴', '暖锋：过境前冷→过境时连续降水→过境后暖晴', '冷锋降水主要在锋后，暖锋降水在锋前', '我国冬半年寒潮、北方夏季暴雨多与冷锋有关'] },
      { type: 'table', headers: ['对比项', '冷锋', '暖锋'], rows: [['主动气团', '冷气团', '暖气团'], ['锋面符号', '三角形', '半圆形'], ['降水位置', '锋后', '锋前'], ['天气特点', '大风、降温、雨雪', '连续性降水'], ['过境后气温', '下降', '升高']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">冷锋与暖锋天气变化对比</text><rect x="50" y="80" width="270" height="200" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="185" y="110" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">冷锋</text><text x="185" y="150" font-size="12" fill="#1f3a4d" text-anchor="middle">过境前：暖、晴</text><text x="185" y="180" font-size="12" fill="#1f3a4d" text-anchor="middle">过境时：大风降温雨雪</text><text x="185" y="210" font-size="12" fill="#1f3a4d" text-anchor="middle">过境后：冷、气压升</text><rect x="360" y="80" width="270" height="200" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="495" y="110" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">暖锋</text><text x="495" y="150" font-size="12" fill="#1f3a4d" text-anchor="middle">过境前：冷、晴</text><text x="495" y="180" font-size="12" fill="#1f3a4d" text-anchor="middle">过境时：连续降水</text><text x="495" y="210" font-size="12" fill="#1f3a4d" text-anchor="middle">过境后：暖、气压降</text></svg>', caption: '图2　冷锋过境后降温、暖锋过境后升温，二者天气变化相反。' },
      { type: 'example', label: '例题·判断锋的类型', text: '题目：某地连续几日出现阴雨，随后气温明显升高、气压下降，该地经历的是？<br>A. 冷锋过境　B. 暖锋过境　C. 准静止锋　D. 气旋<br>解析：暖锋过境时产生连续性降水，过境后被暖气团控制，气温升高、气压下降、天气转晴，与题干「阴雨后续升温降压」完全吻合。冷锋过境后应是降温升压。因此该地经历的是暖锋过境。' },
      { type: 'heading', text: '三、准静止锋' },
      { type: 'paragraph', text: '当冷暖气团势力相当、谁也推不动谁时，锋面移动十分缓慢或长期徘徊，形成准静止锋。准静止锋控制下常出现阴雨连绵的天气。我国典型的准静止锋有江淮准静止锋（梅雨）和昆明准静止锋（贵阳「天无三日晴」）。' },
      { type: 'warn', label: '易错·降水位置', text: '冷锋降水主要集中在锋后（冷空气一侧），暖锋降水主要集中在锋前（冷空气一侧）。二者降水都落在冷气团一侧，只是相对锋线的前后不同。做题时先确定锋线，再看冷气团在锋线哪侧，就能判断降水落在锋前还是锋后。' },
      { type: 'tip', label: '提示·生活中的锋', text: '我国冬春的寒潮、沙尘暴，夏秋北方的暴雨，多与冷锋活动有关；长江中下游初夏的「梅雨」是江淮准静止锋造成的连绵阴雨；贵州冬半年阴雨绵绵则和昆明准静止锋有关。联系时事和季节记忆更牢。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">准静止锋与梅雨</text><line x1="120" y1="130" x2="560" y2="150" stroke="#2a6fa8" stroke-width="3"/><polygon points="120,130 105,145 135,145" fill="#2a6fa8"/><polygon points="160,135 145,150 175,150" fill="#2a6fa8"/><polygon points="200,140 185,155 215,155" fill="#2a6fa8"/><text x="340" y="200" font-size="13" fill="#1f3a4d" text-anchor="middle">冷暖气团势均力敌，锋面少动</text><text x="340" y="240" font-size="12" fill="#1f3a4d" text-anchor="middle">江淮地区初夏出现连绵梅雨。</text></svg>', caption: '图3　冷暖气团势均力敌形成准静止锋，造成江淮梅雨等连绵阴雨。' },
      { type: 'heading', text: '四、低压（气旋）与高压（反气旋）' },
      { type: 'paragraph', text: '低压中心气压低，气流由四周向中心辐合上升，北半球逆时针，易成云致雨，对应气旋；高压中心气压高，气流由中心向四周辐散下沉，北半球顺时针，天气晴朗，对应反气旋。锋面常附着在低压系统中，称为锋面气旋，是中学天气系统的综合考点。' },
      { type: 'list', items: ['气旋（低压）：辐合上升，多阴雨', '反气旋（高压）：辐散下沉，多晴朗', '北半球气旋逆时针、反气旋顺时针', '锋面气旋是冷锋与暖锋共存的低压系统'] },
      { type: 'keypoint', label: '重点·本课时核心结论', text: '<strong>天气系统两大族：</strong>锋面系统（冷锋、暖锋、准静止锋）和气压系统（气旋、反气旋）。锋看冷暖「谁主动」，气旋反气旋看垂直气流「升或沉」。记住「气旋雨、反气旋晴」「冷锋过后冷、暖锋过后暖」，天气题基本可解。' }
    ],
    exercises: [
      { type: 'choice', question: '冷锋过境后，当地的天气变化通常是？', options: ['气温升高、气压降低', '气温下降、气压升高', '连续阴雨', '气温不变、气压不变'], answer: '气温下降、气压升高', explanation: '冷锋是冷气团主动向暖气团移动，过境后冷气团取代暖气团控制当地，因此气温下降、气压升高、天气转晴。连续性阴雨多为暖锋或准静止锋的特征。所以冷锋过境后的典型变化是降温、升压、转晴。' },
      { type: 'choice', question: '我国长江中下游地区初夏的「梅雨」主要由哪种锋造成？', options: ['冷锋', '暖锋', '准静止锋', '海锋'], answer: '准静止锋', explanation: '每年初夏，冷暖气团在江淮流域势均力敌，锋面少动，形成江淮准静止锋，带来历时长、范围广的连绵阴雨，即「梅雨」。冷锋移动快、降水短促，暖锋降水在单一方向推进，都不具备梅雨的持续性特征。' },
      { type: 'choice', question: '关于气旋（低压）的叙述，正确的是？', options: ['中心气压高', '气流下沉', '中心气流上升、多阴雨', '天气晴朗'], answer: '中心气流上升、多阴雨', explanation: '气旋是中心气压低的天气系统，水平方向气流由四周向中心辐合，中心气流被迫上升，水汽凝结易成云致雨，所以气旋控制区多阴雨天气。反气旋才对应中心高压、气流下沉、天气晴朗。因此正确项是中心上升、多阴雨。' },
      { type: 'fill', question: '冷锋的锋面符号是___，暖锋的锋面符号是___。', answer: '三角形；半圆形', explanation: '在天气图上，冷锋用一系列三角形（锯齿）表示，指向暖气团一侧；暖锋用一系列半圆形（圆齿）表示，也指向移动方向。符号不同反映主动气团不同：冷锋冷气团主动，暖锋暖气团主动，读图时依此判别锋的类型。' },
      { type: 'fill', question: '冷锋降水主要集中在锋___（前/后），暖锋降水主要集中在锋___（前/后）。', answer: '后；前', explanation: '冷锋中冷气团主动推进，暖气团被迫抬升，降水带主要位于锋面后方（冷气团一侧）；暖锋中暖气团主动爬升，降水带位于锋面前方（冷气团一侧）。两者降水都落在冷气团一侧，只是相对锋线的前后位置不同。' }
    ]
  });
})();
