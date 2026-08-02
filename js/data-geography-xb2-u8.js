/* 地理 · 选择性必修2 · 第3章 · 课时：地区产业结构变化 */
(function () {
  var v = gzGetVolume('geography', 'xb2');
  if (!v) return;
  v.points.push({
    id: 'xb2-u8',
    name: '地区产业结构变化',
    chapter: '选择性必修2 · 第3章 城市、产业与区域发展',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是产业结构' },
      { type: 'paragraph', text: '产业结构是指一个国家或地区各类产业之间的比例关系和组合状态，通常用三大产业占经济总量的比重来表示。第一产业是农业，第二产业是工业和建筑业，第三产业是服务业。产业结构反映了区域经济发展的水平和阶段，是观察区域经济的一把尺子。' },
      { type: 'list', items: ['第一产业：农业（农、林、牧、渔）', '第二产业：工业（采掘、制造、电力）和建筑业', '第三产业：服务业（交通、商贸、金融、文旅）', '常用各产业占 GDP 比重衡量结构'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">三大产业的构成</text><rect x="60" y="80" width="160" height="200" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="140" y="130" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">第一产业</text><text x="140" y="175" font-size="12" fill="#1f3a4d" text-anchor="middle">农业</text><rect x="260" y="80" width="160" height="200" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="130" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">第二产业</text><text x="340" y="175" font-size="12" fill="#1f3a4d" text-anchor="middle">工业建筑</text><rect x="460" y="80" width="160" height="200" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="540" y="130" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">第三产业</text><text x="540" y="175" font-size="12" fill="#1f3a4d" text-anchor="middle">服务业</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">三大产业的比例关系，就是产业结构。</text></svg>', caption: '图1　产业结构由第一、第二、第三产业的比重和组合构成。' },
      { type: 'keypoint', label: '重点·产业结构的演进规律', text: '<strong>产业结构演进有普遍规律：</strong>随经济发展，第一产业比重持续下降，第二产业先升后稳再降，第三产业比重持续上升并最终成为主体。即由「一、二、三」走向「三、二、一」。劳动力也随之从农业转向工业再转向服务业。这是判断一个地区处于什么发展阶段的依据。' },
      { type: 'heading', text: '二、产业结构变化的规律' },
      { type: 'paragraph', text: '从时间看，区域产业结构会随人均收入提高而升级：低收入阶段以农业为主；工业化阶段第二产业迅速扩张；高收入阶段服务业成为主导。从空间看，发达地区与欠发达地区结构差异明显，发达地区三产比重大，欠发达地区一产比重高。' },
      { type: 'list', items: ['低收入阶段：一产为主，农业比重大', '工业化阶段：二产快速上升，成为主力', '高收入阶段：三产为主导，服务业主宰', '区域差异：发达区三产高、欠发达区一产高'] },
      { type: 'table', headers: ['发展阶段', '主导产业', '结构特征'], rows: [['低收入', '农业', '一产比重高'], ['工业化', '工业', '二产比重升'], ['高收入', '服务业', '三产占主体'], ['后工业', '信息文创', '三产高端化']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">产业结构随发展水平的演进</text><rect x="50" y="70" width="160" height="170" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="130" y="115" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">低收入</text><text x="130" y="160" font-size="12" fill="#1f3a4d" text-anchor="middle">一产高</text><rect x="260" y="70" width="160" height="170" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="115" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">工业化</text><text x="340" y="160" font-size="12" fill="#1f3a4d" text-anchor="middle">二产升</text><rect x="470" y="70" width="160" height="170" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="550" y="115" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">高收入</text><text x="550" y="160" font-size="12" fill="#1f3a4d" text-anchor="middle">三产主</text><text x="340" y="285" font-size="12" fill="#1f3a4d" text-anchor="middle">一降、二稳、三升，是产业结构升级的主线。</text></svg>', caption: '图2　随经济发展水平提高，产业结构由一产主导走向三产主导。' },
      { type: 'example', label: '例题·阶段判断', text: '题目：某地区农业比重已低于百分之十，服务业超过百分之六十，说明它处于什么阶段？<br>解析：第一产业比重很低、第三产业占据绝对主体，这正是高收入阶段（后工业化）的典型结构特征，说明该地区已完成工业化、进入服务业主导期。若二产最高则是工业化阶段，若一产最高则是低收入阶段。题目给出三产超六成、一产不足一成，显然属于高收入阶段。' },
      { type: 'heading', text: '三、产业结构变化的原因' },
      { type: 'paragraph', text: '推动产业结构升级的力量包括：科技进步提高生产率，使农业、工业释放劳动力流向服务业；需求变化（人们更多消费服务）；资源环境约束倒逼高耗能产业退出；政策引导产业转移与培育。区域通过比较优势参与分工，也会重塑本地产业结构。' },
      { type: 'warn', label: '易错·升级不等于放弃工业', text: '① 产业结构升级是「三产比重上升、二产内部高端化」，不等于把工业全砍掉——先进制造业仍是根基；② 不同地区升级路径不同，资源型城市要先「补替代产业」再升级，不能盲目追服务业。考题常把「第三产业比重提高」等同于「工业不重要」，要注意表述严谨。' },
      { type: 'tip', label: '提示·分析成因四角度', text: '分析某地产业结构变化原因，从四方面入手：科技（生产率提升释放劳动力）、需求（消费结构升级）、政策（规划与环保倒逼）、区际（产业转移与分工）。把这四点对应到具体变化，答案既全面又有条理。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">产业结构变化的驱动因素</text><rect x="40" y="60" width="140" height="190" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="110" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">科技</text><text x="110" y="155" font-size="12" fill="#1f3a4d" text-anchor="middle">提生产率</text><rect x="200" y="60" width="140" height="190" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="270" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">需求</text><text x="270" y="155" font-size="12" fill="#1f3a4d" text-anchor="middle">消费升级</text><rect x="360" y="60" width="140" height="190" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="430" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">政策</text><text x="430" y="155" font-size="12" fill="#1f3a4d" text-anchor="middle">引导倒逼</text><rect x="520" y="60" width="140" height="190" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="590" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">区际</text><text x="590" y="155" font-size="12" fill="#1f3a4d" text-anchor="middle">转移分工</text><text x="340" y="285" font-size="12" fill="#1f3a4d" text-anchor="middle">科技、需求、政策、区际四力共推结构升级。</text></svg>', caption: '图3　科技、需求、政策与区际联系共同驱动产业结构变化。' },
      { type: 'heading', text: '四、优化产业结构的意义与方向' },
      { type: 'paragraph', text: '优化产业结构能提升经济质量、增加就业、减轻资源环境压力。方向是：巩固农业基础，做强先进制造业，壮大现代服务业，培育战略性新兴产业。区域应立足比较优势，避免产业同质化，形成错位协同的格局。' },
      { type: 'list', items: ['巩固农业基础，保障粮食安全', '做强先进制造业，提升竞争力', '壮大现代服务业，吸纳就业', '培育新兴产业，避免同质竞争'] },
      { type: 'example', label: '例题·优化方向', text: '题目：某市制造业传统、服务业偏弱，应如何优化产业结构？<br>解析：应双线推进：一方面用新技术改造传统制造，向智能制造、绿色制造升级，做强先进制造这一根基；另一方面补齐服务业短板，发展物流、金融、文旅等现代服务业以吸纳就业、提升效益；同时结合自身优势培育新能源、数字经济等新兴产业，避免与周边城市同质化。通过「强二、优三、育新」，实现结构优化升级。' }
    ],
    exercises: [
      { type: 'choice', question: '衡量一个地区产业结构最常用的指标是？', options: ['三大产业占 GDP 的比重', '人口总数', '年降水量', '行政区面积'], answer: '三大产业占 GDP 的比重', explanation: '产业结构指各类产业之间的比例关系，实践中通常用第一、第二、第三产业各自占国内生产总值的比重来表示，据此判断区域所处的经济发展阶段。人口、降水、面积都不能反映产业间的比例关系，因此不是衡量产业结构的指标。正确选项是三大产业占GDP的比重。' },
      { type: 'choice', question: '随经济发展水平提高，产业结构演进的一般趋势是？', options: ['一产升、二产降、三产稳', '一产降、二产先升后稳、三产升', '三产业都同比例上升', '二产始终最高'], answer: '一产降、二产先升后稳、三产升', explanation: '产业结构演进的普遍规律是：第一产业比重随经济发展持续下降，第二产业比重在工业化阶段上升、之后趋稳或略降，第三产业比重持续上升并最终成为主体，整体由「一二三」走向「三二一」。其他选项不符合这一规律，如二产并非始终最高，三产也并非稳定不变。因此选一产降、二产先升后稳、三产升。' },
      { type: 'choice', question: '关于产业结构升级，下列说法正确的是？', options: ['升级就是砍掉全部工业', '升级是三产比重上升且二产内部高端化', '资源型城市无需升级', '农业比重越高越发达'], answer: '升级是三产比重上升且二产内部高端化', explanation: '产业结构升级表现为第三产业比重上升、第二产业向先进制造业和高端环节迈进，农业比重下降但基础地位不变，并非砍掉工业。资源型城市更需要通过培育替代产业来升级，农业比重高通常是欠发达阶段特征而非发达标志。因此正确说法是三产比重上升且二产内部高端化。' },
      { type: 'fill', question: '第一产业包括农业（农、林、牧、渔），第二产业包括工业和___，第三产业是服务业。', answer: '建筑业', explanation: '按我国产业划分，第一产业是农业，第二产业包括工业和建筑业，第三产业即服务业（交通、商贸、金融、文旅、信息等）。产业结构就是这三大产业的比例关系和组合状态，常用各产业占GDP比重来衡量，借此判断区域的发展阶段与水平。' },
      { type: 'fill', question: '推动产业结构变化的四大驱动力是科技进步、消费需求变化、___引导和区际产业转移与分工。', answer: '政策', explanation: '区域产业结构变化受多重力量推动：科技提高生产率、释放劳动力流向服务业；消费需求升级拉动服务发展；政策通过规划、环保标准引导或倒逼产业调整；区际联系带来产业转移与分工重塑本地结构。分析成因时从科技、需求、政策、区际四个角度切入，既能全面又一目了然。' }
    ]
  });
})();
