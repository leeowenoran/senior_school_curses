/* 地理 · 选择性必修1 · 第4章 · 课时：陆地水体及其相互关系 */
(function () {
  var v = gzGetVolume('geography', 'xb1');
  if (!v) return;
  v.points.push({
    id: 'xb1-u9',
    name: '第1节 陆地水体及其相互关系',
    chapter: '选择性必修1 · 第4章 水的运动',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、陆地水体的类型' },
      { type: 'paragraph', text: '陆地水体包括河流、湖泊、冰川、沼泽、地下水等。它们在形态、补给和更新速度上各不相同。其中冰川是地球淡水资源的主体，约占全球淡水总量的三分之二；河流是最活跃、与人类关系最密切的陆地水体，是连接各类水体的纽带。' },
      { type: 'list', items: ['河流：最活跃，联系其他水体', '湖泊：调蓄径流、补给河流', '冰川：淡水主体，多年更新一次', '地下水：埋藏地下，与河流互补'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">陆地水体的相互关系</text><rect x="100" y="110" width="160" height="90" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="180" y="155" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">冰川</text><rect x="300" y="110" width="160" height="90" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="380" y="155" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">河流</text><rect x="500" y="110" width="160" height="90" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="580" y="155" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">湖泊</text><text x="340" y="250" font-size="12" fill="#1f3a4d" text-anchor="middle">河流是纽带，补给湖泊、地下水，也受冰川融水补给。</text></svg>', caption: '图1　河流是陆地水体的纽带，与冰川、湖泊、地下水相互补给。' },
      { type: 'keypoint', label: '重点·河流的补给类型', text: '<strong>河流补给主要有五种：</strong>雨水补给（最普遍，季风区为主）、冰雪融水补给（高山冰川/积雪，西北内陆常见）、湖泊水补给、地下水补给、沼泽水补给。不同补给使河流水量变化规律不同：雨水补给夏丰，冰雪融水补给夏汛、冬季可能断流。' },
      { type: 'heading', text: '二、河流与湖泊的互补关系' },
      { type: 'paragraph', text: '河流与湖泊之间存在着互补关系。在丰水期，河流水位高于湖泊，河水补给湖泊，湖泊起到削减洪峰的作用；在枯水期，湖泊水位高于河流，湖泊水补给河流，维持河流基本流量。因此湖泊被称为河流的「天然调节器」。' },
      { type: 'list', items: ['丰水期：河水位高于湖，河补湖（削峰）', '枯水期：湖水位高于河，湖补河（补枯）', '湖泊调节径流、削减洪峰', '中下游湖泊对河流调蓄作用显著'] },
      { type: 'table', headers: ['时期', '水位高低', '补给方向'], rows: [['丰水期', '河高于湖', '河流补给湖泊'], ['枯水期', '湖高于河', '湖泊补给河流'], ['平水期', '接近', '交换微弱']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">河流与湖泊的互补</text><rect x="80" y="100" width="200" height="60" fill="#3d6fb5" stroke="#2a6fa8" stroke-width="2"/><text x="180" y="135" font-size="13" fill="#fff" text-anchor="middle" font-weight="bold">河流</text><rect x="420" y="100" width="180" height="60" fill="#7fd0d8" stroke="#2a6fa8" stroke-width="2"/><text x="510" y="135" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">湖泊</text><line x1="280" y1="120" x2="420" y2="120" stroke="#c1583b" stroke-width="2" marker-end="url(#f)"/><text x="350" y="110" font-size="12" fill="#1f3a4d">丰水期：河→湖</text><line x1="420" y1="150" x2="280" y2="150" stroke="#3d6fb5" stroke-width="2" marker-end="url(#f2)"/><text x="350" y="170" font-size="12" fill="#1f3a4d">枯水期：湖→河</text></svg>', caption: '图2　丰水期河流补给湖泊削峰，枯水期湖泊补给河流补枯。' },
      { type: 'example', label: '例题·判读补给', text: '题目：某河主要靠高山冰雪融水补给，则该河径流量最大的季节是？<br>A. 春季　B. 夏季　C. 秋季　D. 冬季<br>解析：高山冰雪融水补给量取决于气温，气温越高融化越多。夏季气温最高，冰川积雪融化最旺盛，河流径流量达到最大；冬季气温低、融水少，西北内流河甚至可能断流。所以该河汛期在夏季，选 B。' },
      { type: 'heading', text: '三、河流与地下水的互补' },
      { type: 'paragraph', text: '河流与地下水也存在互补。当河流水位高于地下水位时，河水补给地下水；当河流水位低于地下水位时，地下水补给河流。在山前冲积扇地区，河流常下渗补给地下水，形成丰富的地下水；而在下游，地下水又可能回补河流。' },
      { type: 'warn', label: '易错·黄河下游的「地上河」', text: '通常河与地下水是相互补给的，但黄河下游是「地上河」，河床高于两岸地面，全年都是河水补给地下水，几乎没有地下水补给河流的情况。这是特殊案例，考试常考，不要套用「相互补给」的常规结论。' },
      { type: 'tip', label: '提示·读流量过程线', text: '判断补给类型可看河流流量过程线：雨水补给者汛期与降水一致、变化陡；冰雪融水补给者夏季单峰、与气温对应；湖泊地下水补给者流量平稳。抓住「峰值出现在什么季节、变化是否剧烈」两个要点即可。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">河流与地下水的互补</text><rect x="80" y="160" width="520" height="70" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="200" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">地下水（含水层）</text><path d="M 120 130 Q 220 100 320 130 T 520 130" fill="none" stroke="#3d6fb5" stroke-width="3"/><text x="320" y="90" font-size="12" fill="#1f3a4d" text-anchor="middle">河流</text><text x="340" y="265" font-size="12" fill="#1f3a4d" text-anchor="middle">河水位高于地下水位时河补地下，反之地下补河。</text></svg>', caption: '图3　河流与地下水按水位高低相互补给，上游常河补地下。' },
      { type: 'heading', text: '四、陆地水体的综合意义' },
      { type: 'paragraph', text: '各类陆地水体通过水循环相互联系、相互转化。河流作为纽带，把冰川、湖泊、地下水、大气降水连成整体。认识这种关系，有助于合理开发水资源、防治洪涝和干旱，也是理解水循环的基础。' },
      { type: 'list', items: ['河流是连接各水体的纽带', '湖泊、地下水调节河流径流', '冰川是重要淡水储备', '合理利用需统筹各类水体'] },
      { type: 'keypoint', label: '重点·本课时核心结论', text: '<strong>陆地水体「你中有我」：</strong>河流受雨水、冰雪融水、湖泊、地下水等多源补给；丰水期河补湖、枯水期湖补河；河与地下水按水位高低互补（地上河除外）。掌握补给关系和季节变化，是分析河流水文特征的关键。' }
    ],
    exercises: [
      { type: 'choice', question: '关于河流与湖泊互补关系的叙述，正确的是？', options: ['丰水期湖泊补给河流', '枯水期河流补给湖泊', '丰水期河流补给湖泊', '二者从不相互补给'], answer: '丰水期河流补给湖泊', explanation: '丰水期河流水量大、水位高，高于湖泊水位，此时河水注入湖泊，湖泊起到削减洪峰的作用；枯水期河流水位下降，湖泊水位相对较高，转为湖泊补给河流，维持河道流量。因此正确的说法是丰水期河流补给湖泊。' },
      { type: 'choice', question: '主要靠高山冰雪融水补给的河流，汛期一般出现在？', options: ['春季', '夏季', '秋季', '冬季'], answer: '夏季', explanation: '高山冰雪融水的多少取决于气温，气温越高融化越旺盛。夏季是一年中气温最高的季节，冰川和季节性积雪融化量最大，河流径流量达到峰值，形成夏汛；冬季气温低，融水很少，部分西北内流河甚至会断流。所以汛期在夏季。' },
      { type: 'choice', question: '黄河下游「地上河」与地下水的补给关系是？', options: ['相互补给', '全年河水补给地下水', '全年地下水补给河水', '互不补给'], answer: '全年河水补给地下水', explanation: '黄河下游河床因泥沙淤积而高于两岸地面，成为「地上河」。由于河水位始终高于两岸地下水位，全年都是河水下渗补给地下水，几乎不存在地下水回补河流的情况。这是河流与地下水补给的特殊范例，不同于一般河段的相互补给。' },
      { type: 'fill', question: '地球上淡水的主体是___，约占全球淡水总量的三分之二。', answer: '冰川', explanation: '在地球各种陆地水体中，冰川储存的淡水量最大，占全球淡水总量的约三分之二，主要分布于南极、格陵兰和高中山地区。虽然冰川更新缓慢、直接利用少，但它是重要的淡水储备，对全球海平面和径流有深远影响。' },
      { type: 'fill', question: '湖泊被称为河流的「天然___」，丰水期河流补给湖泊以削减___。', answer: '调节器；洪峰', explanation: '湖泊与河流相通时，在丰水期蓄积部分河水、削减洪峰，在枯水期放水补给河流、维持基流，因此被称为河流的天然调节器。这种调蓄功能对防洪和抗旱都十分重要，中下游湖泊（如洞庭湖）的作用尤为突出。' }
    ]
  });
})();
