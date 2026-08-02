/* 地理 · 必修 第一册 · 第2章 · 课时：第2节 大气受热过程和大气运动 */
(function () {
  var v = gzGetVolume('geography', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u6',
    name: '第2节 大气受热过程和大气运动',
    chapter: '必修 第一册 · 第2章 地球上的大气',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、大气的受热过程' },
      { type: 'paragraph', text: '地球表面的热量归根到底来自太阳。阳光穿过大气到达地面，地面吸收后增温，再把热量传给贴近它的大气，大气再把一部分热量送回地面。可以简单地记成三步：太阳暖地面、地面暖大气、大气又护着地面。' },
      { type: 'list', items: ['第一步：太阳辐射穿过大气到达地面，使地面增温', '第二步：地面向外放出地面辐射，被近地面大气吸收', '第三步：大气向外放出大气辐射，其中向下的部分还给地面', '最终结果：地面和近地面大气都升了温'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">大气的受热过程</text><circle cx="600" cy="60" r="30" fill="#e8a33d" stroke="#b5651d" stroke-width="2"/><text x="600" y="64" font-size="12" fill="#1f3a4d" text-anchor="middle" font-weight="bold">太阳</text><rect x="160" y="250" width="360" height="50" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="280" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">地面</text><polygon points="560,75 360,150 360,165 560,90" fill="#2a6fa8"/><text x="470" y="120" font-size="12" fill="#1f3a4d">太阳辐射</text><polygon points="200,250 200,195 230,195 230,250" fill="#3389c4"/><text x="215" y="190" font-size="11" fill="#1f3a4d">地面辐射</text><polygon points="360,210 560,95 540,95 360,195" fill="#3389c4"/><text x="455" y="150" font-size="11" fill="#1f3a4d">大气吸收</text><polygon points="360,120 200,240 220,250 360,135" fill="#3389c4"/><text x="270" y="175" font-size="11" fill="#1f3a4d">大气逆辐射</text><text x="340" y="325" font-size="12" fill="#1f3a4d" text-anchor="middle">太阳暖地面，地面暖大气，大气又还给地面热量。</text></svg>', caption: '图1　太阳辐射使地面增温，地面辐射被大气吸收，大气逆辐射保温。' },
      { type: 'keypoint', label: '重点·近地面大气的直接热源', text: '<strong>近地面大气的直接热源是地面，而不是太阳。</strong>太阳辐射以可见光为主，大气对可见光吸收很少，所以太阳并没有直接把大气烤热；真正让大气变暖的是地面辐射（红外线），它几乎全部被贴近地面的水汽和二氧化碳吸收。记住「太阳暖地面、地面暖大气」这句话，就抓住了受热过程的要害。' },
      { type: 'heading', text: '二、大气对太阳辐射的削弱作用' },
      { type: 'paragraph', text: '阳光在到达地面之前，要先穿过厚厚的大气层，这一路上有一部分能量被大气「扣下」了，这就是削弱作用。经过削弱，真正到达地面的太阳辐射比太空里少了很多，这也让地表温度不至于过高。' },
      { type: 'list', items: ['吸收：臭氧吸收紫外线，水汽和二氧化碳吸收红外线', '反射：云层和较大尘埃把阳光挡回去，反射最强', '散射：空气分子把阳光向四面八方散开，使天空发亮', '三种方式合在一起，使到达地面的能量减少'] },
      { type: 'table', headers: ['削弱方式', '主要参与者', '结果'], rows: [['吸收', '臭氧、水汽、二氧化碳', '有选择地吸收特定波段'], ['反射', '云层、较大尘埃', '无选择，反射越强越降温'], ['散射', '空气分子、微小尘埃', '使天空明亮、蓝盈盈']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">大气对太阳辐射的削弱作用</text><circle cx="600" cy="170" r="28" fill="#e8a33d" stroke="#b5651d" stroke-width="2"/><text x="600" y="174" font-size="12" fill="#1f3a4d" text-anchor="middle" font-weight="bold">太阳</text><rect x="120" y="235" width="440" height="40" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="260" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">地面</text><polygon points="570,165 180,225 180,245 570,185" fill="#2a6fa8"/><text x="370" y="200" font-size="12" fill="#1f3a4d">太阳辐射穿过大气</text><circle cx="300" cy="210" r="10" fill="#3389c4"/><text x="300" y="195" font-size="11" fill="#1f3a4d">吸收</text><circle cx="360" cy="220" r="10" fill="#3389c4"/><text x="360" y="245" font-size="11" fill="#1f3a4d">反射</text><circle cx="420" cy="210" r="10" fill="#3389c4"/><text x="420" y="195" font-size="11" fill="#1f3a4d">散射</text><text x="340" y="320" font-size="12" fill="#1f3a4d" text-anchor="middle">部分太阳辐射被吸收、反射、散射，到达地面的能量减少。</text></svg>', caption: '图2　太阳辐射穿过大气时被吸收、反射和散射，能量被削弱。' },
      { type: 'warn', label: '易错·削弱和保温不一样', text: '① 削弱作用发生在「太阳→地面」这段，减少到达地面的阳光；保温作用发生在「大气→地面」这段，是把热量还给地面，二者方向相反，别弄混；② 地面辐射是大气吸收的主要对象，大气逆辐射才是还给地面的热量，二者都叫「辐射」但方向相反；③ 多云的白天温度不会太高，是因为反射强、削弱多，而不是因为保温。' },
      { type: 'heading', text: '三、大气的保温作用' },
      { type: 'paragraph', text: '地面把热量以地面辐射的形式放出去，大气吸收后温度上升，再向外放出大气辐射。其中朝向地面那一部分叫大气逆辐射，它像一床被子把热量送回地面，使夜晚的地面不至于降得太冷。这就是大气的保温效应。' },
      { type: 'table', headers: ['时刻', '主要过程', '结果'], rows: [['白天', '削弱作用减少阳光', '地面温度不会过高'], ['夜晚', '大气逆辐射返还热量', '地面温度不会过低'], ['全天', '削弱加保温共同作用', '气温变化比较温和']] },
      { type: 'example', label: '例题·多云夜晚气温高', text: '题目：为什么多云的夜晚通常比晴朗的夜晚暖和一些？<br>A. 云层吸收更多太阳辐射　B. 大气逆辐射更强<br>C. 地面辐射更强　D. 云层反射地面辐射<br>解析：夜晚没有太阳，地面靠自身辐射散热。天空有云时，云层增强了大气逆辐射，把更多热量送回地面，使地面降温变慢，所以多云夜晚更暖。选项 A 说的是白天太阳辐射；C 与天气无关；D 表述不准确。因此答案是大气逆辐射更强。' },
      { type: 'tip', label: '提示·大棚和保温', text: '冬天种菜的<strong>塑料大棚</strong>，道理和大气保温一模一样：塑料薄膜透进太阳光让地面升温，又挡住地面辐射向外散失，使棚内比外面暖。同理，全球大气中二氧化碳增多，就像给地球加厚了被子，大气逆辐射增强，这就是常说的温室效应。理解了「被子原理」，保温作用就不难记。' },
      { type: 'heading', text: '四、热力环流：大气运动的简单形式' },
      { type: 'paragraph', text: '地面受热不均匀，是空气运动的根本原因。受热多的地方空气膨胀上升，冷却的地方空气收缩下沉，这样在水平和垂直方向上就形成了闭合的空气环流，叫做热力环流。它是所有大气运动最简单、最基础的形式。' },
      { type: 'list', items: ['地面冷热不均，是热力环流形成的根本原因', '受热处空气上升，冷却处空气下沉', '高空空气由热的地方流向冷的地方', '近地面空气由冷的地方流向热的地方，形成环流', '海陆风、城市风都是热力环流的具体表现'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">热力环流的形成</text><rect x="60" y="270" width="250" height="50" rx="8" fill="#e8a33d" stroke="#b5651d" stroke-width="2"/><text x="185" y="300" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">受热地区（升温）</text><rect x="370" y="270" width="250" height="50" rx="8" fill="#7fb0d8" stroke="#2a6fa8" stroke-width="2"/><text x="495" y="300" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">冷却地区（降温）</text><polygon points="185,270 185,180 175,200 195,200" fill="#2a6fa8"/><text x="148" y="220" font-size="12" fill="#1f3a4d">空气上升</text><polygon points="495,270 495,180 485,200 505,200" fill="#2a6fa8"/><text x="532" y="220" font-size="12" fill="#1f3a4d">空气下沉</text><polygon points="195,160 485,160 470,150 475,170 470,160" fill="#3389c4"/><text x="340" y="140" font-size="12" fill="#1f3a4d">高空：由热→冷</text><polygon points="475,320 195,320 210,310 205,330 210,320" fill="#3389c4"/><text x="340" y="345" font-size="12" fill="#1f3a4d">近地面：由冷→热</text></svg>', caption: '图3　地面冷热不均形成闭合的热力环流。' },
      { type: 'example', label: '例题·海陆风方向', text: '题目：白天在海边，风通常从哪个方向吹来？<br>A. 从陆地吹向海洋　B. 从海洋吹向陆地<br>C. 风停不动　D. 从高空吹向地面<br>解析：白天太阳照射下，陆地升温比海洋快，近地面陆地空气受热上升，海洋上空气相对冷却下沉，于是近地面的风由气压较高的海洋吹向陆地，这叫海风。夜晚则相反，风从陆地吹向海洋。所以白天海边常吹海风，答案选从海洋吹向陆地。' },
      { type: 'keypoint', label: '重点·热力环流的根本原因', text: '<strong>热力环流形成的根本原因是地表冷热不均。</strong>只要两地受热不一样，热的地方空气上升、冷的地方空气下沉，高空气流从热处流向冷处，近地面气流从冷处流回热处，就形成一个闭合环流。无论是海边的海陆风、山区的山谷风，还是城市与郊区间的城市风，背后都是这一个原理，抓住「冷热不均」四个字就能举一反三。' }
    ],
    exercises: [
      { type: 'choice', question: '近地面大气主要的直接热源是？', options: ['太阳辐射', '地面辐射', '大气辐射', '宇宙空间'], answer: '地面辐射', explanation: '太阳辐射以可见光为主，大气对可见光吸收很少，所以太阳并没有直接把大气烤热。真正使近地面大气升温的是地面向外放出的地面辐射，它几乎全部被贴近地面的水汽和二氧化碳吸收。因此近地面大气的直接热源是地面辐射，而不是太阳。本题应选地面辐射。' },
      { type: 'choice', question: '多云的夜晚通常比晴朗的夜晚气温更高，主要原因是？', options: ['大气吸收太阳辐射多', '大气逆辐射强', '地面辐射增强', '大气反射减弱'], answer: '大气逆辐射强', explanation: '夜晚没有太阳辐射，地面靠自身辐射散热。天空有云时，云层会增强大气逆辐射，把更多热量送回地面，使地面降温变慢，所以多云的夜晚比较暖。这与白天削弱无关，也不是地面辐射本身增强。因此主要原因是大气逆辐射强。' },
      { type: 'choice', question: '热力环流形成的根本原因是？', options: ['地面冷热不均', '摩擦力作用', '地转偏向力', '太阳辐射均匀'], answer: '地面冷热不均', explanation: '热力环流是大气最简单、最基础的运动形式。当地表受热不均匀时，热处空气上升、冷处空气下沉，高空气流和近地面气流连成闭合环流。摩擦力、地转偏向力会影响风向，但不是形成热力环流的根因；若太阳辐射均匀反而没有冷热差异。所以根本原因是地面冷热不均。' },
      { type: 'fill', question: '大气对太阳辐射的削弱作用主要包括吸收、反射和___。', answer: '散射', explanation: '阳光在到达地面前要先穿过大气层，途中会被大气削弱。削弱主要有三种方式：臭氧等吸收紫外线、水汽和二氧化碳吸收红外线；云层和较大尘埃把阳光反射回去；空气分子和微小尘埃把阳光向四面八方散开，这叫散射，正是它让天空显得明亮而蔚蓝。因此第三种方式是散射。' },
      { type: 'fill', question: '由地面冷热不均引起的大气运动，最简单的形式是___；白天陆地升温快，风从___吹向___。', answer: '热力环流；海洋；陆地', explanation: '地面冷热不均会引发空气上升和下沉，进而形成闭合的空气环流，这就是热力环流，是大气运动最简单的形式。在沿海地区，白天陆地比海洋升温快，陆地空气上升、海洋空气下沉，近地面的风便由气压较高的海洋吹向陆地，称为海风。所以依次填热力环流、海洋、陆地。' }
    ]
  });
})();
