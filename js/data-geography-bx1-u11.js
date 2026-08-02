/* 地理 · 必修 第一册 · 第4章 · 课时：第2节 地貌的观察 */
(function () {
  var v = gzGetVolume('geography', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u11',
    name: '第2节 地貌的观察',
    chapter: '必修 第一册 · 第4章 地貌',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、观察地貌的基本思路' },
      { type: 'paragraph', text: '观察一片地貌，不能一上来就盯着脚下一小块石头看，而要像看一幅画那样先远后近、先大后小。地理学家观察地貌通常分两步：先看宏观格局，弄清这里是山地还是平原、整体朝哪个方向延伸；再进入微观细节，看具体的坡有多陡、谷有多深。这样由面到点，才不会丢掉整体感。' },
      { type: 'list', items: ['先看宏观：分辨大范围的地貌类型与分布', '再看微观：关注具体坡度、坡向和形态细节', '先整体后局部，由面到点层层深入', '借助地形图、遥感影像辅助判断'] },
      { type: 'keypoint', label: '重点·观察的两个顺序', text: '<strong>观察地貌要把握两个顺序：</strong>① 空间上「从宏观到微观」，先认大格局再看小特征；② 内容上「从高度到形态」，先量高度和坡度，再描述形状。抓住这两点，面对任何景观图都能有条理地说出要点，考试时也不容易漏项。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">地貌观察：从宏观到微观</text><rect x="40" y="60" width="300" height="240" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="190" y="92" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">宏观格局</text><text x="190" y="128" font-size="13" fill="#1f3a4d" text-anchor="middle">山地还是平原</text><text x="190" y="158" font-size="13" fill="#1f3a4d" text-anchor="middle">大致延伸方向</text><text x="190" y="188" font-size="13" fill="#1f3a4d" text-anchor="middle">整体分布范围</text><rect x="360" y="60" width="280" height="240" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="500" y="92" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">微观细节</text><text x="500" y="128" font-size="13" fill="#1f3a4d" text-anchor="middle">坡度陡缓</text><text x="500" y="158" font-size="13" fill="#1f3a4d" text-anchor="middle">坡向阴阳</text><text x="500" y="188" font-size="13" fill="#1f3a4d" text-anchor="middle">沟谷深浅</text><polygon points="340,180 360,172 360,188" fill="#2a6fa8"/><text x="340" y="325" font-size="12" fill="#1f3a4d" text-anchor="middle">先认大格局，再看小特征，由面到点。</text></svg>', caption: '图1　观察地貌先把握宏观格局，再进入微观细节。' },
      { type: 'heading', text: '二、观察高度' },
      { type: 'paragraph', text: '高度是描述地貌最基础的信息。绝对高度又叫海拔，指某点高出海平面的垂直距离，地图上通常用它来标注山峰高度。相对高度指一个地点高出另一个地点的垂直距离，比如山脚到山顶的差值。两座山海拔可能差不多，但相对高度差别很大，给人的陡峭感完全不同。' },
      { type: 'list', items: ['绝对高度（海拔）：高出海平面的距离', '相对高度：两地点之间的垂直高差', '海拔决定在地图上的颜色与冷暖', '相对高度影响山体的陡峭程度'] },
      { type: 'table', headers: ['高度类型', '比较对象', '举例说明'], rows: [['绝对高度（海拔）', '海平面', '珠峰海拔约 8849 m'], ['相对高度', '另一地点', '山脚到山顶高差 500 m']] },
      { type: 'heading', text: '三、观察坡度' },
      { type: 'paragraph', text: '坡度指坡面的倾斜程度，通俗说就是「有多陡」。它可以用垂直高度和水平距离的比值来表示：垂直高度相同，水平距离越短，坡越陡；水平距离越长，坡越缓。坡度对生产和生活影响很大，坡陡处水流急、易水土流失，不宜修路耕种；坡缓处较安全，适合人类活动。' },
      { type: 'list', items: ['坡度 = 垂直高度 ÷ 水平距离', '比值越大，坡越陡；比值越小，坡越缓', '陡坡水流急，易滑坡和冲刷', '缓坡利于修路、耕种和居住'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">坡度示意：陡坡与缓坡</text><polygon points="40,300 40,150 220,300" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="120" y="250" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">陡坡</text><line x1="40" y1="150" x2="160" y2="150" stroke="#3389c4" stroke-width="2"/><text x="100" y="140" font-size="11" fill="#1f3a4d" text-anchor="middle">垂直</text><line x1="40" y1="300" x2="220" y2="300" stroke="#3389c4" stroke-width="2"/><text x="130" y="320" font-size="11" fill="#1f3a4d" text-anchor="middle">水平短</text><polygon points="400,300 400,220 640,300" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="520" y="270" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">缓坡</text><line x1="400" y1="220" x2="520" y2="220" stroke="#3389c4" stroke-width="2"/><text x="460" y="210" font-size="11" fill="#1f3a4d" text-anchor="middle">垂直</text><line x1="400" y1="300" x2="640" y2="300" stroke="#3389c4" stroke-width="2"/><text x="520" y="320" font-size="11" fill="#1f3a4d" text-anchor="middle">水平长</text></svg>', caption: '图2　同样垂直高度下，水平距离越短坡越陡，越长坡越缓。' },
      { type: 'heading', text: '四、观察坡向' },
      { type: 'paragraph', text: '坡向指坡面朝向哪个方向。向阳的坡叫阳坡，背光的叫阴坡；迎着风的叫迎风坡，背着风的叫背风坡。阳坡光照足、温度高、植被往往更茂密；阴坡较阴冷潮湿。迎风坡降水多，背风坡降水少，甚至可能形成雨影区。观察坡向能帮我们理解当地气候、植被和耕作的差别。' },
      { type: 'list', items: ['阳坡：朝太阳，光热好，植被较旺', '阴坡：背太阳，较冷湿', '迎风坡：多地形雨，降水丰富', '背风坡：少雨，可能形成雨影区'] },
      { type: 'warn', label: '易错·坡向别弄反', text: '① 阳坡和阴坡是看「朝向太阳还是背对太阳」，在北半球多数山地南坡为阳坡；② 迎风坡和背风坡是看「对着盛行风还是背着风」，和阳坡不是一回事，不能混为一谈；③ 迎风坡降水多不等于迎风坡一定温暖，它的气温还受高度影响。答题先分清是「光热」还是「风向」再下结论。' },
      { type: 'heading', text: '五、观察地貌形态' },
      { type: 'paragraph', text: '在宏观上，我们要能认出基本的地貌形态：连绵高耸的是山地，顶面平缓的高原，起伏和缓的丘陵，广阔平坦的平原，四周高中间低的盆地。在微观上，还要看河谷是「V」形还是宽谷、山顶是尖是平、坡面是直是凹。把形态说清楚，地貌观察才算完整。' },
      { type: 'list', items: ['山地：海拔高、起伏大', '平原：平坦、海拔低', '丘陵：起伏和缓', '高原：顶面平、海拔高', '盆地：四周高、中间低'] },
      { type: 'example', label: '例题·判断坡向影响', text: '题目：关于坡向的说法，正确的是？<br>A. 阳坡一定比阴坡降水多<br>B. 迎风坡多地形雨，降水较丰富<br>C. 阴坡光照比阳坡充足<br>D. 背风坡气温一定最高<br>解析：阳坡只是朝向太阳、光热较好，降水多少取决于是否迎风，二者不能混为一谈，所以A错；迎风坡气流被迫抬升、容易成云致雨，降水确实更丰富，B对；阴坡背太阳，光照应少于阳坡，C错；背风坡气温受多种因素影响，不能一概说最高，D错。故选B。' },
      { type: 'heading', text: '六、借助工具观察地貌' },
      { type: 'paragraph', text: '光用眼睛看还不够，观察地貌常借助工具。地形图用等高线把高度画在平面上，分层设色地形图还用不同颜色表示不同高度，一眼就能看出哪高哪低。遥感影像和无人机航拍能从空中俯视大范围地貌。现代地理观察，往往是「野外看」加上「图上读」再加「空中看」三结合。' },
      { type: 'tip', label: '提示·读图小窍门', text: '拿到分层设色地形图，先找颜色：<strong>通常绿色代表低平平原，黄色代表丘陵高原，棕色白色代表高山积雪</strong>，蓝色是水域。等高线越密，坡越陡；越疏，坡越缓。把颜色和疏密一起看，不用到现场也能判断高度和坡度，这对读图题特别有用。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">分层设色地形图示意</text><rect x="40" y="70" width="180" height="200" fill="#bfe3a8" stroke="#2a6fa8" stroke-width="2"/><text x="130" y="178" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">平原（绿）</text><rect x="240" y="70" width="180" height="200" fill="#f2d98a" stroke="#2a6fa8" stroke-width="2"/><text x="330" y="178" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">丘陵（黄）</text><rect x="440" y="70" width="200" height="200" fill="#d9a06a" stroke="#2a6fa8" stroke-width="2"/><text x="540" y="170" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">山地（棕）</text><text x="540" y="195" font-size="12" fill="#1f3a4d" text-anchor="middle">越高色越深</text><text x="340" y="325" font-size="12" fill="#1f3a4d" text-anchor="middle">颜色由低到高：绿→黄→棕，表示海拔逐渐升高。</text></svg>', caption: '图3　分层设色地形图用颜色表示海拔，绿低棕高。' }
    ],
    exercises: [
      { type: 'choice', question: '关于绝对高度和相对高度，说法正确的是？', options: ['绝对高度是两地点的高差', '相对高度是高出海平面的距离', '绝对高度也叫海拔', '两者没有任何区别'], answer: '绝对高度也叫海拔', explanation: '绝对高度指某点高出海平面的垂直距离，通常就称为海拔，所以绝对高度也叫海拔这一说法正确。相对高度才是两地点之间的垂直高差，不是绝对高度；相对高度是高出另一地点而非海平面；二者含义不同，有明显区别。因此正确选项是绝对高度也叫海拔。' },
      { type: 'choice', question: '在其他条件相同时，坡度的大小主要取决于？', options: ['垂直高度与水平距离的比值', '只与垂直高度有关', '只与水平距离有关', '与高度毫无关系'], answer: '垂直高度与水平距离的比值', explanation: '坡度表示坡面的倾斜程度，用垂直高度除以水平距离来衡量。垂直高度相同，水平距离越短坡越陡；水平距离越长坡越缓。因此坡度不是只由垂直高度或只由水平距离单独决定，而是取决于二者的比值，这一比值才是判断陡缓的关键。' },
      { type: 'choice', question: '迎风坡相比背风坡，通常具有的特点是？', options: ['降水更少', '气温一定最高', '多地形雨、降水较丰富', '光照最充足'], answer: '多地形雨、降水较丰富', explanation: '当湿润气流遇到山坡被迫沿坡爬升，在上升过程中冷却凝结，容易形成地形雨，所以迎风坡降水通常比背风坡丰富。迎风坡并不必然气温最高，降水多少和光照充足与否也不能直接画等号，背风坡反而可能更干热。因此迎风坡的典型特点是多地形雨、降水较丰富。' },
      { type: 'fill', question: '观察地貌要先看___格局，再看___细节；高度分为绝对高度（海拔）和___高度。', answer: '宏观；微观；相对', explanation: '观察地貌讲究顺序：空间上从宏观到微观，先认大范围的地貌类型与分布，再进入坡度、坡向等微观细节；内容上从高度到形态。高度信息包括绝对高度即海拔，以及相对高度即两地点之间的垂直高差。把握这两个顺序和两类高度，观察才有条理。' },
      { type: 'fill', question: '在分层设色地形图上，___色通常表示低平平原，___色通常表示高山。', answer: '绿；棕', explanation: '分层设色地形图用不同颜色表示不同海拔：海拔最低的平原常用绿色，随着高度升高依次变为黄色、棕色，高山顶部有时用白色表示积雪。所以绿色对应低平平原，棕色对应较高的山地。读图时先看颜色渐变，再配合等高线疏密，就能判断地势高低和坡度陡缓。' }
    ]
  });
})();
