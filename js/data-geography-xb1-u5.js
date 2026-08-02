/* 地理 · 选择性必修1 · 第2章 · 课时：河流地貌的发育 */
(function () {
  var v = gzGetVolume('geography', 'xb1');
  if (!v) return;
  v.points.push({
    id: 'xb1-u5',
    name: '第3节 河流地貌的发育',
    chapter: '选择性必修1 · 第2章 地表形态的塑造',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、河流侵蚀地貌：河谷的发育' },
      { type: 'paragraph', text: '河流对地表形态的影响贯穿其全程。在上游山区，水流急、下切强，形成「V」形谷；到了中游，侧蚀增强，河谷展宽呈「U」形；下游地势平缓，以侧蚀和堆积为主，河谷更宽浅。河流侵蚀有下蚀、侧蚀和溯源侵蚀三种方式。' },
      { type: 'list', items: ['下蚀：向下切割河床，使河谷加深', '侧蚀：向两侧侵蚀，使河谷展宽', '溯源侵蚀：向源头方向延伸，使河流变长', '上游下蚀为主，下游侧蚀为主'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">河谷发育：从 V 形到 U 形</text><path d="M 60 120 L 140 260 L 220 120 Z" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="140" y="285" font-size="12" fill="#1f3a4d" text-anchor="middle">上游 V 形谷</text><path d="M 280 150 Q 360 270 440 150 Z" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="360" y="285" font-size="12" fill="#1f3a4d" text-anchor="middle">中游 U 形谷</text><path d="M 480 200 Q 580 250 680 200" fill="none" stroke="#2a6fa8" stroke-width="3"/><text x="580" y="285" font-size="12" fill="#1f3a4d" text-anchor="middle">下游宽浅河谷</text></svg>', caption: '图1　河流上游下切成 V 形谷，中游侧蚀展宽为 U 形，下游更宽浅。' },
      { type: 'keypoint', label: '重点·三种侵蚀方式', text: '<strong>下蚀、侧蚀、溯源侵蚀三者分工不同：</strong>下蚀垂直向下，加深河床，在上游最明显；侧蚀平行河岸，加宽河谷，在中下游显著；溯源侵蚀向河流源头方向推进，使河流不断延长，如瀑布后退就是溯源侵蚀的结果。' },
      { type: 'heading', text: '二、河流堆积地貌：冲积扇与冲积平原' },
      { type: 'paragraph', text: '当河流流出山口、流速骤减，或进入平原、河道变宽，携带的泥沙便会堆积下来，形成堆积地貌。山口处形成冲积扇，多条冲积扇联结成冲积平原；在河流中下游的凹岸、河漫滩以及入海口处，还会发育河漫滩平原与三角洲。' },
      { type: 'list', items: ['冲积扇：河流出山口，泥沙堆积成扇状', '河漫滩：洪水期被淹没、枯水期出露的滩地', '冲积平原：大面积河流堆积形成的平原', '三角洲：河流入海口泥沙堆积形成的三角形平原'] },
      { type: 'table', headers: ['堆积地貌', '位置', '成因'], rows: [['冲积扇', '山口处', '出山口流速骤减，泥沙堆积'], ['河漫滩', '河谷两岸', '洪水期泥沙堆积于滩地'], ['冲积平原', '中下游', '长期堆积连片成平原'], ['三角洲', '入海口', '海潮顶托、流速减慢堆积']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">冲积扇的形成</text><path d="M 120 80 L 60 260 L 260 260 Z" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><line x1="120" y1="80" x2="120" y2="260" stroke="#2a6fa8" stroke-width="3"/><text x="120" y="70" font-size="12" fill="#1f3a4d" text-anchor="middle">河流出山口</text><text x="160" y="200" font-size="12" fill="#1f3a4d" text-anchor="middle">冲积扇</text><text x="340" y="300" font-size="12" fill="#1f3a4d" text-anchor="middle">出山口后地形变缓，泥沙快速堆积成扇状。</text></svg>', caption: '图2　河流流出山口流速骤减，泥沙堆积形成冲积扇。' },
      { type: 'example', label: '例题·分析堆积位置', text: '题目：黄河下游形成「地上河」，主要与哪种作用有关？<br>A. 上游下蚀　B. 中游侧蚀　C. 下游堆积　D. 溯源侵蚀<br>解析：黄河中游流经黄土高原，携带大量泥沙，进入下游华北平原后流速减慢，泥沙大量堆积于河床，使河床高于两岸地面，形成地上河。这正是下游堆积作用的结果。所以选 C。' },
      { type: 'heading', text: '三、三角洲与河口地貌' },
      { type: 'paragraph', text: '当河流注入海洋或湖泊时，由于地形变平坦、流速减慢，加以海潮（或湖水）的顶托作用，河流携带的泥沙在河口堆积，形成河口三角洲。三角洲地势低平、土壤肥沃、河网密布，往往是重要的农业区和人口聚居地。' },
      { type: 'warn', label: '易错·凹岸与凸岸', text: '河流弯曲处，凹岸（河道凹进一侧）受水流冲刷，以侵蚀为主，水深适合建港；凸岸（河道凸出一侧）流速慢，以堆积为主，泥沙淤积形成浅滩。常见题考「港口选凹岸、农田聚落选凸岸」，别把凹岸凸岸记反。' },
      { type: 'tip', label: '提示·读图判读', text: '看到「山口扇状堆积」想冲积扇；看到「河流入海处的三角形平原」想三角洲；看到「河流弯曲、一岸陡一岸缓」想凹岸侵蚀、凸岸堆积。抓住位置和形态两个关键词，河流地貌题型基本都能对应。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">河流弯曲处：凹岸侵蚀、凸岸堆积</text><path d="M 80 200 Q 200 100 340 200 Q 480 300 600 200" fill="none" stroke="#2a6fa8" stroke-width="3"/><text x="200" y="130" font-size="12" fill="#1f3a4d" text-anchor="middle">凹岸（侵蚀）</text><text x="450" y="270" font-size="12" fill="#1f3a4d" text-anchor="middle">凸岸（堆积）</text><line x1="200" y1="155" x2="200" y2="180" stroke="#c1583b" stroke-width="2"/><ellipse cx="450" cy="255" rx="26" ry="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1"/><text x="340" y="320" font-size="12" fill="#1f3a4d" text-anchor="middle">凹岸宜建港，凸岸宜农耕与聚落。</text></svg>', caption: '图3　弯曲河道凹岸受蚀、凸岸堆积，分别适合建港与耕作。' },
      { type: 'heading', text: '四、河流地貌与人类活动' },
      { type: 'paragraph', text: '河流地貌深刻影响聚落与农业分布。冲积平原、河漫滩、三角洲土壤肥沃、水源充足、地形平坦，是世界人口最密集、农耕最发达的地区；而山区 V 形谷耕地少、交通不便，聚落稀疏。认识河流地貌有助于合理规划城市和农业。' },
      { type: 'list', items: ['平原、三角洲：地势平、土肥、水足，人口稠密', '冲积扇扇缘：地下水出露，宜灌溉农业', '凹岸：水深，建港口；凸岸：淤积，建聚落农田', '山区河谷：聚落多分布在阶地，避开洪泛区'] },
      { type: 'keypoint', label: '重点·本课时核心结论', text: '<strong>河流地貌可概括为「蚀」与「积」：</strong>侵蚀塑造 V 形谷、U 形谷和曲流（凹岸蚀）；堆积塑造冲积扇、河漫滩、冲积平原和三角洲。发育阶段上游以蚀为主、下游以积为主。人类聚落和农业多选择堆积形成的平坦肥沃之地。' }
    ],
    exercises: [
      { type: 'choice', question: '河流上游山区河谷多呈什么形状？', options: ['U 形', 'V 形', '三角洲', '冲积扇'], answer: 'V 形', explanation: '河流上游流经山区，水流速度快、能量集中，以下蚀作用为主，强烈向下切割河床，使河谷深而窄，横剖面呈字母 V 的形状，称为 V 形谷。到了中下游侧蚀增强，河谷才逐渐展宽成 U 形。三角洲和冲积扇属于堆积地貌。' },
      { type: 'choice', question: '河流弯曲处的凹岸，主要表现为？', options: ['堆积作用', '侵蚀作用', '风化作用', '变质作用'], answer: '侵蚀作用', explanation: '在弯曲河道中，凹岸是河道凹进的一侧，水流速度快、冲刷力强，以侵蚀为主，河岸较陡、水深较大，适合建设港口；凸岸流速慢、以堆积为主，形成浅滩，适合农耕和聚落。因此凹岸主要表现为侵蚀作用。' },
      { type: 'choice', question: '三角洲一般形成于？', options: ['河流源头', '山口处', '河流入海口', '峡谷中'], answer: '河流入海口', explanation: '河流注入海洋（或湖泊）时，地形变平坦、流速突然减慢，加上海潮的顶托作用，大量泥沙在河口堆积，形成平面呈三角形的河口三角洲。山口处形成的是冲积扇，河流源头以侵蚀为主，峡谷中以下蚀为主，均不形成三角洲。' },
      { type: 'fill', question: '河流流出山口，因流速骤减而堆积形成的扇状地貌称为___。', answer: '冲积扇', explanation: '山区河流流出山口进入平原时，地形突然变平缓，河道展宽、流速急剧下降，携带的砾石和泥沙迅速堆积，在平面上呈扇形展开，称为冲积扇。多个冲积扇相连可形成山前冲积平原，扇缘常有地下水出露。' },
      { type: 'fill', question: '使河流不断向源头方向延伸、长度增加的侵蚀方式是___侵蚀。', answer: '溯源', explanation: '溯源侵蚀是指流水向河流源头方向侵蚀、使河谷不断向源头伸长的作用，它使河流长度增加。瀑布因溯源侵蚀而后退、河流向分水岭方向延伸都是典型表现。下蚀使河谷加深，侧蚀使河谷加宽，三者分工不同。' }
    ]
  });
})();
