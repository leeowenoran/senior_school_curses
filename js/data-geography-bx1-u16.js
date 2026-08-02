/* 地理 · 必修 第一册 · 第6章 · 课时：第3节 防灾减灾 */
(function () {
  var v = gzGetVolume('geography', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u16',
    name: '第3节 防灾减灾',
    chapter: '必修 第一册 · 第6章 自然灾害',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、防灾减灾为什么重要' },
      { type: 'paragraph', text: '自然灾害难以完全避免，但通过科学的防灾减灾，可以把人员伤亡和财产损失降到最低。防灾减灾不是等灾害来了才行动，而是平时就监测、防御，灾时快速救援、灾后妥善安置，形成一套完整链条。' },
      { type: 'list', items: ['监测预报：早发现、早预警，争取避险时间', '灾害防御：工程和非工程手段，降低风险', '应急救援：灾中搜救、医疗、安置，减少伤亡'] },
      { type: 'heading', text: '二、灾害监测与预报' },
      { type: 'paragraph', text: '现代防灾减灾靠高科技千里眼。气象卫星、雷达监测台风暴雨，地震台网记录地下震动，水文站测量河流水位。这些数据汇集到预警中心，一旦超过阈值就发布预警，提醒公众避险。监测越准，预警越早，损失越小。' },
      { type: 'keypoint', label: '重点·预警信号分四级', text: '<strong>我国预警信号分四级：</strong>由轻到重依次为<strong>蓝色、黄色、橙色、红色</strong>。蓝色表示一般，红色表示特别严重。不同颜色对应不同行动：蓝色要注意，红色要立刻按预案避险、转移。记住「蓝黄橙红，一级比一级急」，看到高级别预警千万别大意。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">灾害预警信号四级（由轻到重）</text><rect x="40" y="70" width="140" height="120" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="110" y="130" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">蓝色</text><text x="110" y="160" font-size="12" fill="#1f3a4d" text-anchor="middle">一般</text><rect x="200" y="70" width="140" height="120" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="270" y="130" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">黄色</text><text x="270" y="160" font-size="12" fill="#1f3a4d" text-anchor="middle">较重</text><rect x="360" y="70" width="140" height="120" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="430" y="130" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">橙色</text><text x="430" y="160" font-size="12" fill="#1f3a4d" text-anchor="middle">严重</text><rect x="520" y="70" width="140" height="120" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="590" y="130" font-size="15" fill="#1f3a4d" text-anchor="middle" font-weight="bold">红色</text><text x="590" y="160" font-size="12" fill="#1f3a4d" text-anchor="middle">特别严重</text><text x="340" y="240" font-size="13" fill="#1f3a4d" text-anchor="middle">预警级别：蓝 → 黄 → 橙 → 红，一级比一级严重。</text><text x="340" y="290" font-size="12" fill="#1f3a4d" text-anchor="middle">看到高级别预警，要立刻按预案采取避险行动。</text></svg>', caption: '图1　预警信号由轻到重为蓝、黄、橙、红四级。' },
      { type: 'heading', text: '三、灾害防御（工程与非工程）' },
      { type: 'list', items: ['防洪工程：修堤坝、水库，调蓄洪水', '生态工程：植树造林、建防护林，固土防风', '抗震工程：房屋加固、设防烈度达标', '避灾工程：危险区搬迁、建避难场所'] },
      { type: 'paragraph', text: '除了修堤坝、建抗震房这些硬工程，防灾减灾还要靠软办法：制定应急预案、定期演练、开展防灾教育、建立灾害保险、储备应急物资。软硬结合，才能让防御真正落地。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">工程防御措施举例</text><rect x="40" y="60" width="180" height="200" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">防洪堤坝</text><text x="130" y="155" font-size="12" fill="#1f3a4d" text-anchor="middle">阻挡洪水</text><rect x="250" y="60" width="180" height="200" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="130" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">防护林带</text><text x="340" y="155" font-size="12" fill="#1f3a4d" text-anchor="middle">固土防风</text><rect x="460" y="60" width="180" height="200" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="550" y="130" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">抗震房屋</text><text x="550" y="155" font-size="12" fill="#1f3a4d" text-anchor="middle">减轻震害</text><text x="340" y="285" font-size="12" fill="#1f3a4d" text-anchor="middle">工程措施从硬件上降低灾害风险。</text></svg>', caption: '图2　堤坝、防护林、抗震房屋都是常见的工程防御。' },
      { type: 'warn', label: '易错·监测与防御', text: '<strong>监测和防御不是一回事：</strong>① <strong>监测预报</strong>是「发现问题」，用仪器和数据提前发现灾害苗头；② <strong>防御</strong>是「解决问题」，用工程和教育降低灾害危害。有人把发布预警当成防御，其实预警只是提醒，真正减少损失靠的是平时的工程建设和应急准备。' },
      { type: 'heading', text: '四、灾害救援与救助' },
      { type: 'paragraph', text: '灾害发生后，救援与救助立即展开：搜救被困人员、抢救伤员、运送物资、安置受灾群众、修复水电路通信。救援讲究黄金72小时，越快越能挽救生命。政府、军队、志愿者和社会力量会协同行动。' },
      { type: 'list', items: ['地震：就地蹲下、护住头颈，躲在结实桌下，不乘电梯', '洪水：向高处转移，远离河道，不喝生水', '台风：远离门窗，储备食物饮水，减少外出', '泥石流：向两侧山坡高处跑，不顺沟谷跑'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="300" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">常见灾害的自救要点</text><rect x="40" y="60" width="270" height="200" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="175" y="120" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">地震</text><text x="175" y="150" font-size="12" fill="#1f3a4d" text-anchor="middle">蹲下、护头、抓牢</text><text x="175" y="175" font-size="12" fill="#1f3a4d" text-anchor="middle">远离窗户和吊灯</text><rect x="370" y="60" width="270" height="200" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="505" y="120" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">洪水</text><text x="505" y="150" font-size="12" fill="#1f3a4d" text-anchor="middle">向高处转移</text><text x="505" y="175" font-size="12" fill="#1f3a4d" text-anchor="middle">不喝生水、不涉急流</text><text x="340" y="285" font-size="12" fill="#1f3a4d" text-anchor="middle">掌握正确自救动作，能显著提高生存机会。</text></svg>', caption: '图3　地震蹲下护头、洪水向高处转移是常见的自救要点。' },
      { type: 'tip', label: '提示·家庭应急包', text: '每家都应准备<strong>家庭应急包</strong>：饮用水、干粮、手电、哨子、急救药品、充电宝、重要证件复印件。放在易拿处，定期检查更换。灾害来时，应急包能支撑最初几天的自救，争取等待救援的时间。' },
      { type: 'keypoint', label: '重点·我国减灾体系', text: '<strong>我国减灾方针：</strong>以防为主、防抗救相结合。强调常态减灾和非常态救灾相统一，平时加强设防和备灾，灾时高效响应，灾后恢复重建。个人也要增强防灾意识，主动学习避险知识，形成全社会共同参与的减灾格局。' },
      { type: 'example', label: '例题·判断措施类型', text: '题目：下列措施中，属于灾害防御工程手段的是？<br>A. 发布台风蓝色预警　B. 修建防洪大堤　C. 开展防灾演练　D. 统计受灾人数<br>解析：工程手段指用实物工程降低灾害风险，修建防洪大堤属于工程防御；发布预警属于监测预报，防灾演练属于非工程措施，统计受灾人数是灾后工作。所以属于工程手段的是修建防洪大堤，选B。' },
      { type: 'table', headers: ['环节', '主要任务', '典型例子'], rows: [['监测预报', '早发现、早预警', '气象卫星监测台风、发布预警'], ['灾害防御', '降低风险、减少损失', '修堤坝、建抗震房、植树造林'], ['应急救援', '灾中救人、安置群众', '搜救、医疗、发放物资']] },
      { type: 'heading', text: '五、人人都是减灾参与者' },
      { type: 'paragraph', text: '防灾减灾人人有责。了解灾害特点、关注预警信息、掌握自救技能、配合政府安排，每个人都能成为减灾的一份子。把防灾意识变成日常习惯，灾害来临时才能临危不乱、化险为夷。' }
    ],
    exercises: [
      { type: 'choice', question: '我国灾害预警信号由轻到重分为？', options: ['蓝、黄、橙、红', '红、橙、黄、蓝', '黄、蓝、红、橙', '绿、黄、橙、红'], answer: '蓝、黄、橙、红', explanation: '我国气象和地质灾害预警信号统一分为四级，由轻到重依次为蓝色、黄色、橙色、红色。蓝色代表一般，红色代表特别严重。记住蓝黄橙红的顺序，看到橙色、红色预警就要高度警惕并立即采取避险行动。其余顺序都不符合国家标准。' },
      { type: 'choice', question: '下列措施中属于工程防御手段的是？', options: ['发布暴雨预警', '修建防洪大堤', '开展防灾演练', '统计受灾人数'], answer: '修建防洪大堤', explanation: '灾害防御分工程和非工程两类。工程手段是用实物建筑降低风险，如防洪大堤、防护林、抗震房屋；发布预警属于监测预报，防灾演练属于非工程措施，统计受灾人数是灾后救助环节。所以只有修建防洪大堤是工程防御手段。' },
      { type: 'choice', question: '地震发生时，下列做法正确的是？', options: ['立刻乘电梯下楼', '就地蹲下、护住头颈躲桌下', '站在窗边观察', '点火查看情况'], answer: '就地蹲下、护住头颈躲桌下', explanation: '地震来临时晃动剧烈，乘电梯可能困住，站窗边易被玻璃伤，点火可能引发火灾，这些都不对。正确做法是就近蹲下、护住头颈、躲到结实家具下方或墙角，等震动暂停再有序撤离，不乘电梯。所以应选就地蹲下护头躲桌下。' },
      { type: 'fill', question: '防灾减灾的三个主要环节是监测预报、___和___。', answer: '灾害防御；应急救援', explanation: '防灾减灾是一项系统工程，主要包括三个环节：一是监测预报，用仪器早发现、早预警；二是灾害防御，通过工程和非工程手段降低风险；三是应急救援，灾中搜救、医疗和安置群众。三者环环相扣，平时防、灾时救，才能有效减轻灾害损失。' },
      { type: 'fill', question: '我国减灾方针强调以___为主，防抗救相结合。', answer: '防', explanation: '我国防灾减灾工作坚持以防为主、防抗救相结合的方针，强调常态减灾和非常态救灾相统一。平时加强设防和备灾，比灾害发生后救灾更经济有效。个人也应增强防灾意识、学习避险知识，全社会共同参与，才能把灾害损失降到最低。' }
    ]
  });
})();
