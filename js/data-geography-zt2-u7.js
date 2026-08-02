/* 地理 · 高三总复习 · 专题二 人文地理 · 第2章 城镇与乡村 · 第3节 城市化 */
(function () {
  var v = gzGetVolume('geography', 'zt2');
  if (!v) return;
  v.points.push({
    id: 'zt2-u7',
    name: '第3节 城市化',
    chapter: '高三地理复习 · 专题二 人文地理 · 第2章 城镇与乡村',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是城市化' },
      { type: 'paragraph', text: '城市化指人口向城市集聚、城市范围扩大、乡村变为城镇的过程。衡量指标主要是城市人口占总人口比重（城市化水平），此外还有城市人口增加、城市用地规模扩大。城市化是社会经济发展的必然结果，水平高低反映一个国家的经济发展水平。' },
      { type: 'list', items: ['人口向城市集中，城市人口比重上升', '城市数目增多、用地规模扩大', '乡村景观转变为城市景观', '本质是生产方式与生活方式的转变'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">城市化的主要表现</text><rect x="70" y="70" width="160" height="55" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1.5"/><text x="150" y="103" font-size="14" fill="#1f3a4d" text-anchor="middle">人口集中</text><rect x="260" y="70" width="160" height="55" rx="8" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1.5"/><text x="340" y="103" font-size="14" fill="#1f3a4d" text-anchor="middle">用地扩大</text><rect x="450" y="70" width="160" height="55" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1.5"/><text x="530" y="103" font-size="14" fill="#1f3a4d" text-anchor="middle">景观转变</text><text x="340" y="170" font-size="13" fill="#1f3a4d" text-anchor="middle">核心指标：城市人口占总人口比重上升</text><rect x="140" y="200" width="400" height="60" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1.5"/><text x="340" y="225" font-size="13" fill="#1f3a4d" text-anchor="middle">本质：生产方式与生活空间的现代化转变</text><text x="340" y="248" font-size="13" fill="#1f3a4d" text-anchor="middle">水平高低反映区域经济发展程度</text></svg>', caption: '图1　城市化表现为人口集中、用地扩大与景观转变，核心是人口比重上升。' },
      { type: 'keypoint', label: '重点·城市化水平的衡量', text: '<strong>衡量城市化水平最核心的指标是城市人口占总人口的比重，而不是城市人口绝对数量。</strong>一个国家城市化水平高，说明其二三产业发达、经济水平较高。注意城市人口多不等于水平高（如大国总人口基数大），看比重才科学。这是高考常考的易混点。' },
      { type: 'heading', text: '二、城市化的动力与进程' },
      { type: 'paragraph', text: '城市化的根本动力是工业化：工业发展吸引农村人口进城，服务业随之壮大。城市化进程一般经历缓慢、加速、成熟三个阶段（S 形曲线）：初期水平低、发展慢；中期人口向城市快速集聚；后期水平高、速度放缓甚至逆城市化。发达国家已进入后期，发展中国家多在中期。' },
      { type: 'list', items: ['根本动力：工业化与经济发展', '初期：水平低、发展慢', '中期：人口快速向城市集聚', '后期：水平高、速度放缓'] },
      { type: 'table', headers: ['阶段', '水平', '特征'], rows: [['初期', '＜30%', '发展缓慢'], ['中期', '30%–70%', '加速集聚'], ['后期', '＞70%', '成熟放缓']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">城市化进程的 S 形曲线</text><line x1="80" y1="60" x2="80" y2="270" stroke="#1f3a4d" stroke-width="2"/><line x1="80" y1="270" x2="620" y2="270" stroke="#1f3a4d" stroke-width="2"/><text x="350" y="290" font-size="12" fill="#1f3a4d" text-anchor="middle">时间→</text><path d="M80 255 Q200 255 300 180 Q400 110 620 80" fill="none" stroke="#2a6fa8" stroke-width="3"/><circle cx="200" cy="240" r="4" fill="#c1583b"/><text x="150" y="235" font-size="11" fill="#c1583b">初期慢</text><circle cx="360" cy="150" r="4" fill="#c1583b"/><text x="370" y="145" font-size="11" fill="#c1583b">中期快</text><circle cx="520" cy="95" r="4" fill="#c1583b"/><text x="530" y="90" font-size="11" fill="#c1583b">后期缓</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">初期缓慢—中期加速—后期成熟放缓</text></svg>', caption: '图2　城市化沿 S 形曲线推进，经历缓慢、加速、成熟三阶段。' },
      { type: 'warn', label: '易错·城市化误区', text: '① 城市化水平看比重不是看绝对数；② 郊区化、逆城市化不等于城市化水平下降，城市人口比重仍高，只是中心人口向外扩散；③ 发展中国家城市化速度常快于发达国家，但水平仍较低；④ 城市化过快可能超过经济承受力，出现贫民窟、交通拥堵等「虚假城市化」问题。' },
      { type: 'heading', text: '三、城市化对地理环境的影响' },
      { type: 'paragraph', text: '城市化改变下垫面，带来正面和负面效应。正面：集聚效益提高资源利用效率、带动区域经济发展；负面：耕地减少、热岛效应、水质污染、交通拥堵、住房紧张。合理规划可放大正面、抑制负面。理解影响要坚持利弊两面，这也是高考综合题常规考法。' },
      { type: 'example', label: '例题·城市化影响分析', text: '题目：城市快速发展可能带来哪些环境问题？<br>解析：城市硬化地面增加使下渗减少、内涝增多；工业交通排放使大气污染、热岛效应增强；生活污水垃圾若处理不当污染水体和土壤；还占用耕地、破坏生物栖息地。答题从大气、水、土壤、生态、耕地多维度列点，体现「城市是人类活动集中区、环境影响被放大」的思路。' },
      { type: 'tip', label: '提示·影响两面写', text: '城市化影响题同样「一分为二」：利——集聚效益、带动经济、方便生活；弊——热岛、污染、交通住房压力、耕地减少。先总说「城市化是必然趋势」，再分利弊，最后补「合理规划可缓解弊端」，结构完整易得分。' },
      { type: 'heading', text: '四、逆城市化与再城市化' },
      { type: 'paragraph', text: '当市中心环境恶化、交通拥堵，部分人口迁往郊区和卫星城，称为逆城市化（出现在发达国家后期）。随后政府改造旧城、发展第三产业，人口重新回市中心，称为再城市化。两者都不代表城市化倒退，而是城市内部空间的优化调整。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">逆城市化与再城市化</text><rect x="120" y="80" width="180" height="60" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="1.5"/><text x="210" y="115" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">市中心</text><text x="210" y="138" font-size="11" fill="#1f3a4d" text-anchor="middle">环境恶化</text><rect x="380" y="80" width="180" height="60" rx="8" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1.5"/><text x="470" y="115" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">郊区卫星城</text><text x="470" y="138" font-size="11" fill="#1f3a4d" text-anchor="middle">人口迁入</text><path d="M300 115 Q340 70 380 115" fill="none" stroke="#c1583b" stroke-width="3"/><text x="340" y="65" font-size="11" fill="#c1583b" text-anchor="middle">逆城市化</text><text x="340" y="200" font-size="13" fill="#1f3a4d" text-anchor="middle">改造旧城、发展三产 → 人口回流（再城市化）</text><rect x="140" y="225" width="400" height="50" rx="10" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="1.5"/><text x="340" y="255" font-size="13" fill="#1f3a4d" text-anchor="middle">两者都是城市内部优化，不代表城市化倒退</text></svg>', caption: '图3　逆城市化是人口从市中心迁往郊区，再城市化是旧城改造后回流。' },
      { type: 'heading', text: '五、中国的城市化特点' },
      { type: 'paragraph', text: '我国城市化起步晚、速度快，改革开放以来水平从约 18% 提升到 60% 以上，已进入中期加速阶段。特点是以城市群为主体形态（京津冀、长三角、珠三角），注重新型城镇化，强调以人为核心、城乡统筹、生态宜居。未来将由速度型转向质量型。' },
      { type: 'list', items: ['起步晚、速度快、水平持续提高', '以城市群为重要载体', '新型城镇化以人为核心', '由重速度转向重质量'] }
    ],
    exercises: [
      { type: 'choice', question: '衡量城市化水平最核心的指标是？', options: ['城市人口绝对数量', '城市人口占总人口比重', '城市建设用地面积', '城市GDP总量'], answer: '城市人口占总人口比重', explanation: '城市化水平用城市人口占总人口的比重表示，比重越高说明城市化程度越高。城市人口多但总人口也大时比重未必高，所以不能看绝对数量；用地面积和GDP是辅助指标，核心始终是人口比重。' },
      { type: 'choice', question: '关于逆城市化的说法，正确的是？', options: ['城市化水平下降', '城市人口比重仍高只是中心人口外迁', '只发生在发展中国家', '意味着城市化倒退'], answer: '城市人口比重仍高只是中心人口外迁', explanation: '逆城市化出现在发达国家城市化后期，因市中心环境交通问题，人口迁往郊区卫星城，但城市人口比重依然很高，并非城市化倒退或水平下降，而是城市内部空间优化。它主要发生在发达国家而非发展中国家。' },
      { type: 'choice', question: '城市化进程的一般阶段顺序是？', options: ['初期—后期—中期', '中期—初期—后期', '初期—中期—后期', '后期—中期—初期'], answer: '初期—中期—后期', explanation: '城市化沿S形曲线推进：初期水平低发展慢，中期人口加速向城市集聚，后期水平高速度放缓甚至出现逆城市化。顺序是初期到中期再到后期，反映工业化由起步到成熟的过程，发达国家已进入后期。' },
      { type: 'fill', question: '城市化带来的负面环境影响包括耕地减少、___效应增强、水体污染、交通拥堵和住房紧张等。', answer: '热岛', explanation: '城市大量硬化地面、人工发热和建筑物密集使气温高于周边郊区，形成热岛效应；同时城市扩张占用耕地、排放污染物导致水体和大气污染、交通住房压力增大。答题应多维度列举，体现城市对地理环境的综合影响。' },
      { type: 'fill', question: '城市化进程三个阶段中，___阶段人口向城市快速集聚（水平约 30%–70%）；___阶段水平高、速度放缓（水平＞70%）。', answer: '中期；后期', explanation: '城市化S形曲线分三阶段：初期水平低发展慢，中期（约30%–70%）人口快速集聚、城市扩张最快，后期（＞70%）水平高、增速放缓并可能出现逆城市化。判断所处阶段要结合水平和速度两方面。' }
    ]
  });
})();
