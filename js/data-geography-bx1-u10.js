/* 地理 · 必修 第一册 · 第4章 · 课时：第1节 常见地貌类型 */
(function () {
  var v = gzGetVolume('geography', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u10',
    name: '第1节 常见地貌类型',
    chapter: '必修 第一册 · 第4章 地貌',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是地貌' },
      { type: 'paragraph', text: '地貌就是我们平常说的「地形」，指地球表面各种高低起伏的形态。高山、平原、峡谷、沙丘、溶洞，都是地貌。地貌是地球内力（比如地壳运动、火山）和外力（比如流水、风、海浪）长期共同作用的结果。内力把地表「抬」起来或「压」下去，外力再把它慢慢磨平、搬运、重新堆积。' },
      { type: 'list', items: ['山地：海拔较高、起伏很大的地貌', '平原：地势平坦、海拔较低的地貌', '丘陵：起伏和缓、海拔不高的地貌', '高原：海拔较高、顶面较平的地貌', '盆地：四周高、中间低的地貌'] },
      { type: 'keypoint', label: '重点·地貌的成因分类', text: '<strong>按形成的主导外力，常见地貌分为四类：</strong>① 河流地貌，由流水塑造；② 风沙地貌，由风力塑造；③ 海岸地貌，由海浪塑造；④ 喀斯特地貌，由地下水溶蚀石灰岩塑造。记住「谁在干活，就叫谁的地貌」，分类就不会乱。' },
      { type: 'heading', text: '二、河流侵蚀地貌' },
      { type: 'paragraph', text: '河流在山区流动时，水流急、落差大，像一把刻刀向下切割河床，这叫下蚀；同时河水带动砂石磨刷两岸，这叫侧蚀。长期的下蚀会把河谷刻成深深的「V」形，两侧崖壁陡立，这就是河流侵蚀地貌，典型代表是峡谷，比如长江三峡、雅鲁藏布大峡谷。' },
      { type: 'list', items: ['下蚀：水流向下切河床，使河谷变深', '侧蚀：水流冲刷两岸，使河谷变宽', '溯源侵蚀：向河流源头方向延伸，使河流变长', '结果：形成「V」形谷和峡谷'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">河流侵蚀与堆积地貌示意</text><polygon points="60,300 200,120 340,120 480,300" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="270" y="230" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">V形谷（上游侵蚀）</text><path d="M60 300 Q340 340 620 300" fill="none" stroke="#3389c4" stroke-width="3"/><text x="340" y="330" font-size="12" fill="#1f3a4d" text-anchor="middle">下游水流变缓，泥沙堆积成平原与三角洲</text><polygon points="500,300 560,260 620,300" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="560" y="290" font-size="12" fill="#1f3a4d" text-anchor="middle" font-weight="bold">三角洲</text><text x="270" y="345" font-size="12" fill="#1f3a4d" text-anchor="middle">上蚀下切成谷，下流堆积成洲。</text></svg>', caption: '图1　上游河流下蚀形成V形谷，下游堆积形成冲积平原和三角洲。' },
      { type: 'heading', text: '三、河流堆积地貌' },
      { type: 'paragraph', text: '河流流出山口或流入平原、大海时，地势变平、流速骤减，搬运能力跟不上，泥沙便沉积下来，堆出各种堆积地貌。山口处扇形堆积叫冲积扇；河流中下游两岸的平坦滩地叫河漫滩；河流入海口堆出的三角形堆积体叫三角洲。这些地方土壤肥沃、水源充足，往往是人口稠密、农业发达的区域。' },
      { type: 'list', items: ['冲积扇：河流出山口，泥沙扇形铺开', '河漫滩：河流两侧洪水期才淹没的平地', '三角洲：河流入海口堆积出的三角形平原', '共同特点：地势平坦、土壤肥沃、宜农耕'] },
      { type: 'table', headers: ['堆积地貌', '形成位置', '形状特点'], rows: [['冲积扇', '山口处', '扇形，自扇顶向扇缘倾斜'], ['河漫滩', '河流中下游两岸', '长条状平地'], ['三角洲', '河流入海口', '三角形，河网纵横']] },
      { type: 'heading', text: '四、风沙地貌' },
      { type: 'paragraph', text: '在干旱、半干旱的沙漠地区，风力是「主角」。大风卷着沙粒，像砂纸一样打磨岩石，形成风蚀地貌，比如孤立突兀的风蚀蘑菇、风蚀柱；风把沙粒吹到低洼处或遇到障碍物停下，堆积成风积地貌，最常见的是新月形沙丘，远远看去像一弯月牙。' },
      { type: 'list', items: ['风蚀蘑菇：下部细、上部粗，像蘑菇', '风蚀柱：孤立的石柱', '雅丹地貌：风蚀出的垄槽地形', '新月形沙丘：风吹堆积成的月牙形沙丘'] },
      { type: 'warn', label: '易错·风沙地貌的分布', text: '① 风沙地貌主要出现在干旱、半干旱区，不是到处都有，我国集中分布在西北地区；② 沙丘的迎风坡缓、背风坡陡，判断风向要看缓坡朝向；③ 风蚀地貌和风积地貌都由风造成，但一个是「被吹走」，一个是「被吹来」，不要把二者成因说反。' },
      { type: 'heading', text: '五、海岸地貌' },
      { type: 'paragraph', text: '海浪日夜不停地拍打着岸边，也会雕刻出海岸地貌。海浪冲击岩石，把崖壁掏出凹槽，形成海蚀崖、海蚀穴；被海水隔开的礁石变成海蚀柱；而当海浪把沙砾推回岸边堆积，就形成沙滩、沙坝等海积地貌。海岸地貌记录着海洋与陆地交锋的痕迹。' },
      { type: 'list', items: ['海蚀崖：海浪冲刷出的陡峭崖壁', '海蚀柱：与陆地分离的礁石柱', '海蚀穴：崖脚被掏空的洞穴', '沙滩与沙坝：海浪堆积出的平缓地貌'] },
      { type: 'example', label: '例题·判断地貌类型', text: '题目：下列地貌中，主要由风力堆积形成的是？<br>A. 风蚀蘑菇　B. 新月形沙丘　C. 海蚀崖　D. V形谷<br>解析：风蚀蘑菇是风把岩石「吹走」一部分留下的，属于风蚀地貌；新月形沙丘是风把沙粒吹来堆积成的，属于风积地貌；海蚀崖由海浪侵蚀而成；V形谷由河流下蚀而成。题目问「风力堆积」，对应的就是新月形沙丘，所以选它。' },
      { type: 'heading', text: '六、喀斯特地貌' },
      { type: 'paragraph', text: '在石灰岩分布的地区，雨水吸收空气中的二氧化碳变成弱酸，慢慢溶解岩石，千百万年后雕出奇特的喀斯特地貌（也叫岩溶地貌）。地上常见孤峰、峰林、洼地；地下则是纵横交错的溶洞，洞里有石钟乳、石笋、石柱。我国广西、贵州、云南一带喀斯特地貌最为典型，桂林山水就是代表。' },
      { type: 'list', items: ['峰林：平地上一座座孤立的石灰岩山峰', '洼地：石灰岩被溶蚀出的封闭低地', '溶洞：地下水溶蚀出的地下空洞', '石钟乳：洞顶向下生长的碳酸钙沉积', '石笋：洞底向上生长的碳酸钙沉积'] },
      { type: 'tip', label: '提示·喀斯特记忆法', text: '喀斯特的核心词是「溶」——水把可溶的石灰岩慢慢溶掉。记住 <strong>「地上峰林洼地，地下溶洞奇观」</strong>，再联想桂林山水，就能把地面上和地下的形态一起背下来。答题时看到石灰岩、溶洞、石钟乳，立刻想到喀斯特地貌。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">喀斯特地貌（地上峰林与地下溶洞）</text><polygon points="80,300 130,140 180,300" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="130" y="320" font-size="12" fill="#1f3a4d" text-anchor="middle" font-weight="bold">峰林</text><polygon points="220,300 270,170 320,300" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="270" y="320" font-size="12" fill="#1f3a4d" text-anchor="middle" font-weight="bold">峰林</text><rect x="400" y="120" width="240" height="160" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="520" y="148" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">地下溶洞</text><line x1="520" y1="148" x2="520" y2="200" stroke="#3389c4" stroke-width="3"/><text x="540" y="180" font-size="11" fill="#1f3a4d" text-anchor="middle">石钟乳</text><line x1="520" y1="280" x2="520" y2="228" stroke="#3389c4" stroke-width="3"/><text x="540" y="265" font-size="11" fill="#1f3a4d" text-anchor="middle">石笋</text><text x="340" y="325" font-size="12" fill="#1f3a4d" text-anchor="middle">石灰岩被水溶解，地上成峰林，地下成溶洞。</text></svg>', caption: '图2　喀斯特地貌地上为峰林，地下为溶洞，洞内有石钟乳和石笋。' },
      { type: 'heading', text: '七、四类地貌一眼分清' },
      { type: 'paragraph', text: '复习时把四类常见地貌列成对照，抓住「谁在塑造、长什么样、在哪出现」三句话。河流地貌离不开水，山区成谷、平原成洲；风沙地貌在干旱区，有蘑菇有沙丘；海岸地貌在海边，有崖有滩；喀斯特地貌在石灰岩区，地上峰林地下溶洞。这样考试遇到景观图也能快速判断。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">四类常见地貌快速对照</text><rect x="30" y="60" width="300" height="250" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="180" y="92" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">河流地貌</text><text x="180" y="128" font-size="13" fill="#1f3a4d" text-anchor="middle">流水塑造</text><text x="180" y="158" font-size="13" fill="#1f3a4d" text-anchor="middle">V形谷、三角洲</text><text x="180" y="188" font-size="13" fill="#1f3a4d" text-anchor="middle">湿润区多见</text><rect x="350" y="60" width="300" height="250" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="500" y="92" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">风沙地貌</text><text x="500" y="128" font-size="13" fill="#1f3a4d" text-anchor="middle">风力塑造</text><text x="500" y="158" font-size="13" fill="#1f3a4d" text-anchor="middle">沙丘、风蚀蘑菇</text><text x="500" y="188" font-size="13" fill="#1f3a4d" text-anchor="middle">干旱区多见</text><text x="180" y="228" font-size="12" fill="#1f3a4d" text-anchor="middle">海岸：海浪造崖滩</text><text x="500" y="228" font-size="12" fill="#1f3a4d" text-anchor="middle">喀斯特：溶洞峰林</text></svg>', caption: '图3　河流、风沙、海岸、喀斯特四类地貌按塑造力量区分。' }
    ],
    exercises: [
      { type: 'choice', question: '下列地貌中，主要由河流下蚀作用形成的是？', options: ['V形谷', '新月形沙丘', '海蚀崖', '风蚀蘑菇'], answer: 'V形谷', explanation: '河流在山区流速快、落差大，强烈的下蚀作用把河床向下切割成深深的V形谷，属于河流侵蚀地貌。新月形沙丘由风力堆积形成，海蚀崖由海浪侵蚀形成，风蚀蘑菇由风力侵蚀形成，均与河流下蚀无关，所以正确选项是V形谷。' },
      { type: 'choice', question: '河流流出山口，泥沙扇形堆积形成的地貌是？', options: ['三角洲', '冲积扇', '河漫滩', '沙丘'], answer: '冲积扇', explanation: '当河流流出山口进入平地，流速突然减慢，搬运能力下降，携带的泥沙在山口处呈扇形铺开堆积，形成冲积扇。三角洲形成于河流入海口，河漫滩形成于河流中下游两岸，沙丘由风力堆积形成，因此符合题意的是冲积扇。' },
      { type: 'choice', question: '主要由海水侵蚀形成的海岸地貌是？', options: ['沙滩', '沙坝', '海蚀崖', '三角洲'], answer: '海蚀崖', explanation: '海浪不断冲击岸边岩石，把崖壁底部掏空、上部崩塌，形成陡峭的海蚀崖，属于海蚀地貌。沙滩和沙坝是海浪把泥沙推回岸边堆积形成的海积地貌，三角洲是河流堆积地貌，所以由海水侵蚀形成的是海蚀崖。' },
      { type: 'fill', question: '喀斯特地貌是水对___岩的溶蚀作用形成的，我国以___（写省份）山水最为典型。', answer: '石灰；广西', explanation: '喀斯特地貌发生在石灰岩分布区，雨水吸收二氧化碳变成弱酸，慢慢溶解石灰岩，地上形成峰林洼地，地下形成溶洞。我国广西、贵州、云南一带石灰岩广布，喀斯特地貌发育典型，其中广西桂林山水是最著名的代表，因此两空分别填石灰岩和广西。' },
      { type: 'fill', question: '新月形沙丘的___坡较缓、___坡较陡，据此可判断当地风向。', answer: '迎风；背风', explanation: '风沙地貌中的新月形沙丘，迎着风的一面坡度较缓，沙粒容易顺着缓坡被风吹上丘顶；背风的一面坡度较陡，沙粒在丘顶越过后快速滑落堆积。因此观察沙丘哪侧缓、哪侧陡，就能判断风向来自缓坡一侧，两空填迎风和背风。' }
    ]
  });
})();
