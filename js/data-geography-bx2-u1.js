/* 地理 · 必修 第二册 · 第1章 · 课时：第1节 人口分布 */
(function () {
  var v = gzGetVolume('geography', 'bx2');
  if (!v) return;
  v.points.push({
    id: 'bx2-u1',
    name: '第1节 人口分布',
    chapter: '必修 第二册 · 第1章 人口',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、我们怎么描述人口分布' },
      { type: 'paragraph', text: '人口分布是指一定时间内人口在地理空间上的集散状况。它是人口地理学研究的基础内容，回答的是「人到底住在哪里、住得密不密」这个问题。描述人口分布最常用的工具是人口密度，也就是单位土地面积上平均住着多少人。' },
      { type: 'list', items: ['人口密度 = 某地区总人口数 ÷ 该地区土地面积', '常用单位是「人/平方千米」，数值越大说明住得越拥挤', '人口密度只反映平均状况，看不出内部的差异'] },
      { type: 'keypoint', label: '重点·人口密度的算法', text: '<strong>人口密度 = 总人口 ÷ 土地面积。</strong>例如某地区有 1000 万人，面积是 10 万平方千米，那么人口密度就是 100 人/平方千米。记住这是「平均值」，山区和城区内部差别很大，不能认为每平方千米都正好住着这么多人。' },
      { type: 'heading', text: '二、世界人口分布的总体规律' },
      { type: 'paragraph', text: '从全球看，人口并不是均匀撒在地球上的，而是明显集中在少数区域。总体规律可以概括成三句话：集中在中低纬度，集中在沿海地带，集中在平原和盆地。气候温暖湿润、地形平坦、靠近海洋的地方，最适宜人类居住和耕作，所以人多。' },
      { type: 'list', items: ['纬度规律：多分布在中低纬度（大约南北纬 60° 之间），高纬度严寒地区人少', '海陆规律：多靠近海岸和河流下游，内陆干旱区人少', '地形规律：多分布在平原、盆地和低丘，高山高原人少'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">世界人口分布示意（颜色越深表示人口越稠密）</text><rect x="60" y="70" width="90" height="60" fill="#3389c4" stroke="#2a6fa8" stroke-width="1.5"/><text x="105" y="105" font-size="12" fill="#1f3a4d" text-anchor="middle">北美东部</text><rect x="200" y="95" width="80" height="55" fill="#2a6fa8" stroke="#2a6fa8" stroke-width="1.5"/><text x="240" y="127" font-size="12" fill="#1f3a4d" text-anchor="middle">欧洲西部</text><rect x="470" y="110" width="70" height="50" fill="#2a6fa8" stroke="#2a6fa8" stroke-width="1.5"/><text x="505" y="140" font-size="12" fill="#1f3a4d" text-anchor="middle">南亚</text><rect x="540" y="90" width="60" height="45" fill="#2a6fa8" stroke="#2a6fa8" stroke-width="1.5"/><text x="570" y="118" font-size="12" fill="#1f3a4d" text-anchor="middle">东亚</text><rect x="120" y="180" width="80" height="40" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1"/><text x="160" y="205" font-size="11" fill="#1f3a4d" text-anchor="middle">沙漠干旱区</text><rect x="300" y="200" width="80" height="40" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1"/><text x="340" y="225" font-size="11" fill="#1f3a4d" text-anchor="middle">雨林湿热区</text><rect x="470" y="210" width="80" height="40" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1"/><text x="510" y="235" font-size="11" fill="#1f3a4d" text-anchor="middle">高纬严寒区</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">深蓝为四大稠密区，浅蓝为人口稀疏区，规律是「中低纬、沿海、平原」。</text></svg>', caption: '图1　世界人口集中在东亚、南亚、欧洲西部和北美东部，其余多为稀疏区。' },
      { type: 'heading', text: '三、世界四大人口稠密区' },
      { type: 'paragraph', text: '地球上人口最密集的四个区域分别是东亚、南亚、欧洲西部和北美东部。它们共同的特点是：地处中低纬度、气候温和、地形平坦、农业开发历史早、工业与城市发达。其中亚洲的东亚和南亚，因人口基数本就庞大，是全球人口最集中的地带。' },
      { type: 'table', headers: ['稠密区', '主要国家/地区', '共同优势'], rows: [['东亚', '中国东部、日本、朝鲜半岛', '中低纬、沿海平原、历史悠久'], ['南亚', '印度、孟加拉国、巴基斯坦', '热带季风、耕地辽阔、人口基数大'], ['欧洲西部', '英、法、德、意等', '温带海洋性气候、经济发达'], ['北美东部', '美国东北部、加拿大东南', '五大湖与沿海、工业城市密集']] },
      { type: 'list', items: ['四大稠密区都位于北半球中低纬度', '都靠近海洋或有大河口，水运与水源便利', '都是人类开发历史早、经济较发达的地方'] },
      { type: 'heading', text: '四、世界人口稀疏区' },
      { type: 'paragraph', text: '与稠密区相对，地球上还有大片人烟稀少的地方，主要有四类：极端干旱的沙漠地区、气候湿热的雨林地区、纬度高而严寒的极地地区，以及地势高峻的高原山地。这些地方或因缺水、或因过热、或因过冷、或因缺氧，都不利于大规模居住。' },
      { type: 'list', items: ['干旱区：撒哈拉沙漠、阿拉伯半岛，缺水难耕作', '湿热区：亚马孙雨林，闷热多病虫，开发难', '高寒区：南极、北冰洋沿岸，气候酷寒', '高山区：青藏高原内部，缺氧且交通不便'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">中国人口分布——胡焕庸线（黑河—腾冲线）</text><polygon points="150,90 250,80 320,150 300,250 200,280 140,200" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="225" y="175" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">中国轮廓示意</text><line x1="170" y1="100" x2="295" y2="250" stroke="#2a6fa8" stroke-width="3"/><text x="175" y="95" font-size="12" fill="#1f3a4d" text-anchor="middle">黑河（东北）</text><text x="300" y="265" font-size="12" fill="#1f3a4d" text-anchor="middle">腾冲（西南）</text><text x="470" y="130" font-size="13" fill="#1f3a4d" font-weight="bold">东南部</text><text x="470" y="152" font-size="12" fill="#1f3a4d">约占国土 43%</text><text x="470" y="172" font-size="12" fill="#1f3a4d">却住着 94% 人口</text><text x="470" y="210" font-size="13" fill="#1f3a4d" font-weight="bold">西北部</text><text x="470" y="232" font-size="12" fill="#1f3a4d">约占国土 57%</text><text x="470" y="252" font-size="12" fill="#1f3a4d">仅住 6% 人口</text><text x="340" y="318" font-size="12" fill="#1f3a4d" text-anchor="middle">胡焕庸线自 1935 年提出至今基本稳定，是中国人口分布的重要分界线。</text></svg>', caption: '图2　胡焕庸线东南侧人口密集、西北侧人口稀疏，比例长期稳定。' },
      { type: 'heading', text: '五、中国的人口分布——胡焕庸线' },
      { type: 'paragraph', text: '我国人口分布最突出的特点是东多西少。地理学家胡焕庸在 1935 年画出一条从黑龙江黑河到云南腾冲的界线，线东南侧面积约占总国土 43%，却聚集了全国约 94% 的人口；线西北侧面积占 57%，人口却只有约 6%。这条线被称为胡焕庸线，至今仍基本成立。' },
      { type: 'warn', label: '易错·胡焕庸线比例常考', text: '① 常考比例是「东南侧约 43% 的面积住着约 94% 的人口」，容易把面积比和人口比记反；② 胡焕庸线是「黑河—腾冲」一线，黑河在黑龙江省、腾冲在云南省，不是北京到昆明，更不是长城；③ 这条线反映的是自然与人文条件差异，不是行政区划边界。' },
      { type: 'tip', label: '提示·快速记忆胡焕庸线', text: '把「黑河在北、腾冲在南」想成一条从东北斜向西南的斜线，线的右下方（东南）又小又挤、人特别多，左上方（西北）又大又空、人很少。记成「东南少地多人、西北多地少人」，比例就不会搞反。' },
      { type: 'heading', text: '六、影响人口分布的因素' },
      { type: 'paragraph', text: '一个地方人多还是人少，是自然条件和人类活动共同决定的。自然因素像地基，提供能不能住的前提；人文因素像加速器，决定住的人会越来越多还是越来越少。两方面叠加，才形成我们看到的人口分布格局。' },
      { type: 'list', items: ['自然因素：气候温暖湿润、地形平坦、水源充足的地方易聚集人口', '人文因素：经济发达、交通便利、开发历史早的地方人口更密', '政策与战争等也会在短期内改变局部人口分布'] },
      { type: 'table', headers: ['因素类别', '具体因素', '对人口分布的影响'], rows: [['自然', '气候', '温和湿润区人口多，干冷湿热区人口少'], ['自然', '地形', '平原盆地人口多，高原山地人口少'], ['自然', '水源', '沿河沿海人口多，干旱内陆人口少'], ['人文', '经济', '工农业发达区吸引大量人口'], ['人文', '交通', '铁路公路枢纽人口聚集'], ['人文', '历史', '开发早的地区人口基数大']] },
      { type: 'example', label: '例题·分析人口分布原因', text: '题目：为什么世界上人口最稠密的地区大多分布在河流下游的平原地带？<br>解析：河流下游的平原通常地势平坦，土壤肥沃，既方便引水灌溉、发展农业，又便于水运和城市建设；再加上气候往往温和、水源充足，非常适宜人类居住，所以历史上容易形成人口密集区。答题时从「地形、水源、土壤、交通」几个角度说明即可。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">影响人口分布的两类因素</text><rect x="40" y="60" width="280" height="240" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="180" y="92" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">自然因素（基础）</text><text x="180" y="128" font-size="13" fill="#1f3a4d" text-anchor="middle">气候：温暖湿润为宜</text><text x="180" y="163" font-size="13" fill="#1f3a4d" text-anchor="middle">地形：平原盆地为宜</text><text x="180" y="198" font-size="13" fill="#1f3a4d" text-anchor="middle">水源：沿河沿海为宜</text><text x="180" y="233" font-size="13" fill="#1f3a4d" text-anchor="middle">决定「能不能住」</text><rect x="360" y="60" width="280" height="240" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="500" y="92" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">人文因素（加速）</text><text x="500" y="128" font-size="13" fill="#1f3a4d" text-anchor="middle">经济：工农业发达</text><text x="500" y="163" font-size="13" fill="#1f3a4d" text-anchor="middle">交通：枢纽便利</text><text x="500" y="198" font-size="13" fill="#1f3a4d" text-anchor="middle">历史：开发早基数大</text><text x="500" y="233" font-size="13" fill="#1f3a4d" text-anchor="middle">决定「住得多不多」</text><text x="340" y="325" font-size="12" fill="#1f3a4d" text-anchor="middle">自然因素是前提，人文因素是放大器，二者叠加形成人口分布格局。</text></svg>', caption: '图3　自然因素决定能否居住，人文因素决定人口聚集程度。' }
    ],
    exercises: [
      { type: 'choice', question: '衡量一个地区人口分布疏密程度最常用的指标是？', options: ['人口总数', '人口密度', '人口自然增长率', '城市人口比重'], answer: '人口密度', explanation: '人口分布疏密看的是单位面积上住了多少人，这正是人口密度的含义，即总人口除以土地面积。人口总数只反映总量，看不出疏密；自然增长率反映增长速度；城市人口比重反映城乡结构。所以描述疏密最常用人口密度。' },
      { type: 'choice', question: '下列关于世界人口分布规律的说法，正确的是？', options: ['高纬度严寒地区人口稠密', '内陆干旱区人口稠密', '中低纬度沿海平原人口稠密', '高山高原人口稠密'], answer: '中低纬度沿海平原人口稠密', explanation: '世界人口主要集中在中低纬度、沿海地带和平原盆地，因为这些地方气候温暖湿润、地形平坦、水源充足，适宜居住和耕作。高纬度严寒、内陆干旱、高山高原都不利于大规模居住，属于人口稀疏区。因此正确说法是中低纬度沿海平原人口稠密。' },
      { type: 'choice', question: '我国著名的人口地理分界线「胡焕庸线」是指？', options: ['黑河—腾冲线', '北京—昆明线', '哈尔滨—广州线', '长城沿线'], answer: '黑河—腾冲线', explanation: '胡焕庸线由地理学家胡焕庸于 1935 年提出，北起黑龙江黑河、南至云南腾冲。该线东南侧面积约占全国 43% 却居住约 94% 的人口，西北侧面积约占 57% 仅居住约 6% 的人口，是中国人口分布的重要分界线。所以正确选项是黑河—腾冲线。' },
      { type: 'fill', question: '世界上人口最稠密的四个地区是东亚、南亚、欧洲西部和___。', answer: '北美东部', explanation: '全球人口最密集的四个区域分别是东亚、南亚、欧洲西部和北美东部。它们都位于北半球中低纬度，气候温和、地形平坦、靠近海洋、开发历史早且经济发达，因此聚集了大量人口。掌握这四大稠密区是学习人口分布的基础。' },
      { type: 'fill', question: '胡焕庸线东南侧面积约占全国 43%，却居住着全国约___% 的人口；西北侧面积约占 57%，仅居住约___% 的人口。', answer: '94；6', explanation: '根据胡焕庸线的统计，我国东南侧约 43% 的国土上聚集了约 94% 的人口，而西北侧约 57% 的国土上只居住着约 6% 的人口。这一巨大反差体现了我国人口东多西少的基本格局，且该比例自 1935 年以来长期保持稳定。' }
    ]
  });
})();
