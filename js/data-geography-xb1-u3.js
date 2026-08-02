/* 地理 · 选择性必修1 · 第2章 · 课时：塑造地表形态的力量 */
(function () {
  var v = gzGetVolume('geography', 'xb1');
  if (!v) return;
  v.points.push({
    id: 'xb1-u3',
    name: '第1节 塑造地表形态的力量',
    chapter: '选择性必修1 · 第2章 地表形态的塑造',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、内力作用与外力作用' },
      { type: 'paragraph', text: '地表形态是内力作用和外力作用共同塑造的结果。内力作用来自地球内部，主要表现为地壳运动、岩浆活动和变质作用，它使地表变得高低不平；外力作用来自地球外部（主要是太阳能和重力），表现为风化、侵蚀、搬运、堆积，它把高山削低、把低地填平，使地表趋于平坦。两者方向相反、长期并存。' },
      { type: 'list', items: ['内力作用：能量来自地球内部，使地表高低不平', '外力作用：能量来自太阳辐射和重力，使地表趋于平坦', '内力是基础，外力是修饰', '两者长期共同作用塑造今日地貌'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">内力作用与外力作用的对抗</text><path d="M 60 260 L 200 120 L 340 260 L 480 120 L 620 260" fill="none" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="285" font-size="12" fill="#1f3a4d" text-anchor="middle">地表起伏（内力抬升）</text><line x1="120" y1="160" x2="180" y2="220" stroke="#c1583b" stroke-width="2" marker-end="url(#a)"/><text x="120" y="150" font-size="11" fill="#1f3a4d">外力侵蚀</text><line x1="560" y1="160" x2="500" y2="220" stroke="#c1583b" stroke-width="2"/><text x="560" y="150" font-size="11" fill="#1f3a4d">外力堆积</text><text x="340" y="100" font-size="12" fill="#1f3a4d" text-anchor="middle">内力抬升 ↔ 外力削平</text></svg>', caption: '图1　内力使地表隆起，外力不断侵蚀堆积，两者共同塑造地貌。' },
      { type: 'keypoint', label: '重点·内力作用的三种表现', text: '<strong>内力作用主要有三种：</strong>① 地壳运动（最普遍，使岩层弯曲、断裂、隆起）；② 岩浆活动（岩浆沿薄弱地带上升、喷发或侵入）；③ 变质作用（在高温高压下岩石性质改变）。其中地壳运动是影响地貌最经常、最广泛的力量，分为水平运动和垂直运动。' },
      { type: 'heading', text: '二、内力作用的表现' },
      { type: 'paragraph', text: '地壳运动按运动方向分为水平运动和垂直运动。水平运动使岩层发生水平位移和弯曲，常形成巨大的褶皱山系和裂谷；垂直运动引起地壳的抬升或下沉，造成地势高低变化和海陆变迁。在一定时期和地区，往往以一种运动为主，但两者相伴发生。' },
      { type: 'list', items: ['水平运动：岩层水平位移、弯曲，形成褶皱山和裂谷', '垂直运动：地壳抬升或下沉，造成海陆变迁', '岩浆活动：侵入岩（如花岗岩）与喷出岩（如玄武岩）', '变质作用：石灰岩变大理岩、砂岩变石英岩'] },
      { type: 'table', headers: ['内力作用类型', '形态特征', '实例'], rows: [['水平运动', '岩层弯曲、断裂', '喜马拉雅山、东非裂谷'], ['垂直运动', '地壳抬升或下沉', '华北平原下沉、山地抬升'], ['岩浆活动', '侵入或喷发', '花岗岩侵入体、火山喷发'], ['变质作用', '岩石性质改变', '石灰岩→大理岩']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">外力作用的四个环节</text><rect x="50" y="120" width="130" height="80" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="115" y="160" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">风化</text><rect x="210" y="120" width="130" height="80" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="275" y="160" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">侵蚀</text><rect x="370" y="120" width="130" height="80" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="435" y="160" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">搬运</text><rect x="530" y="120" width="130" height="80" rx="10" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="595" y="160" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">堆积</text><line x1="180" y1="160" x2="210" y2="160" stroke="#2a6fa8" stroke-width="2"/><line x1="340" y1="160" x2="370" y2="160" stroke="#2a6fa8" stroke-width="2"/><line x1="500" y1="160" x2="530" y2="160" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="250" font-size="12" fill="#1f3a4d" text-anchor="middle">风化使岩石破碎，侵蚀搬运走，堆积在低处形成新的地貌。</text></svg>', caption: '图2　外力作用按风化→侵蚀→搬运→堆积依次进行，雕塑地表形态。' },
      { type: 'example', label: '例题·判断作用类型', text: '题目：下列地貌主要由外力作用塑造的是？<br>A. 喜马拉雅山脉　B. 黄土高原的千沟万壑　C. 东非大裂谷　D. 台湾海峡下沉<br>解析：喜马拉雅山由板块挤压（内力）形成，东非裂谷由地壳断裂下陷（内力）形成，台湾海峡下沉是地壳垂直运动（内力）。黄土高原的千沟万壑是流水侵蚀的结果，属于外力作用。所以选 B。' },
      { type: 'heading', text: '三、外力作用的表现' },
      { type: 'paragraph', text: '外力作用通过风化、侵蚀、搬运、堆积四个环节改造地表。风化使岩石破碎，侵蚀将碎屑剥离，搬运把物质带走，堆积在低洼处沉积。不同外力（流水、风、冰川、海浪）塑造出不同的地貌，如河谷、风蚀蘑菇、角峰、沙滩等。' },
      { type: 'warn', label: '易错·风化与侵蚀的区别', text: '风化是岩石在原地因温度变化、水冰胀、植物根劈等而破碎，物质并未被搬走；侵蚀是外力将风化产物剥离、磨蚀并带走。简单说：风化「碎而不走」，侵蚀「又碎又走」。两者常被混淆，做题时看物质是否发生位移即可区分。' },
      { type: 'tip', label: '提示·常见外力对应地貌', text: '流水作用：峡谷、冲积平原、三角洲；风力作用：风蚀蘑菇、沙丘；冰川作用：U 形谷、角峰、冰碛丘陵；海浪作用：海蚀崖、沙滩。记住「谁在作用，就有什么样的貌」，对应记忆效率最高。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">不同外力塑造的典型地貌</text><rect x="50" y="80" width="270" height="220" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="185" y="110" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">流水与风力</text><text x="185" y="150" font-size="12" fill="#1f3a4d" text-anchor="middle">峡谷、冲积扇（流水）</text><text x="185" y="180" font-size="12" fill="#1f3a4d" text-anchor="middle">风蚀蘑菇、沙丘（风）</text><text x="185" y="210" font-size="12" fill="#1f3a4d" text-anchor="middle">三角洲（堆积）</text><rect x="360" y="80" width="270" height="220" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="495" y="110" font-size="14" fill="#1f3a4d" text-anchor="middle" font-weight="bold">冰川与海浪</text><text x="495" y="150" font-size="12" fill="#1f3a4d" text-anchor="middle">U 形谷、角峰（冰川）</text><text x="495" y="180" font-size="12" fill="#1f3a4d" text-anchor="middle">冰碛丘陵（堆积）</text><text x="495" y="210" font-size="12" fill="#1f3a4d" text-anchor="middle">海蚀崖、沙滩（海浪）</text></svg>', caption: '图3　流水、风、冰川、海浪等不同外力分别塑造出各具特色的地貌。' },
      { type: 'heading', text: '四、内外力共同作用塑造地表' },
      { type: 'paragraph', text: '今天的地表形态，没有哪一种纯粹由内力或外力单独完成。内力奠定地表起伏的「骨架」，外力对其进行雕刻和填充。例如，内力抬升出山地，流水和冰川再把山地切割、搬运、堆积，最终形成我们看到的复杂地貌。' },
      { type: 'list', items: ['内力：造山、造盆，决定地势大格局', '外力：削高、填低，细化地表形态', '二者强度对比随地区和时间变化', '研究地貌要先问「谁抬升、谁侵蚀」'] },
      { type: 'keypoint', label: '重点·本课时核心结论', text: '<strong>一句话总结：</strong>内力作用（地壳运动、岩浆活动、变质作用）使地表高低不平；外力作用（风化、侵蚀、搬运、堆积）使地表趋于平坦。内力是「建设者」，外力是「雕塑师」，两者共同塑造千姿百态的地表形态。' }
    ],
    exercises: [
      { type: 'choice', question: '下列主要由内力作用形成的是？', options: ['黄土高原的千沟万壑', '喜马拉雅山脉', '河口三角洲', '风蚀蘑菇'], answer: '喜马拉雅山脉', explanation: '喜马拉雅山脉是板块碰撞挤压、地壳隆起抬升的结果，属于内力作用中的地壳水平运动。黄土高原的千沟万壑是流水侵蚀、河口三角洲是流水堆积、风蚀蘑菇是风力侵蚀，三者都属于外力作用。因此只有喜马拉雅山脉由内力作用主导形成。' },
      { type: 'choice', question: '关于外力作用的环节，顺序正确的是？', options: ['侵蚀→风化→搬运→堆积', '风化→侵蚀→搬运→堆积', '搬运→风化→侵蚀→堆积', '堆积→搬运→侵蚀→风化'], answer: '风化→侵蚀→搬运→堆积', explanation: '外力作用通常先使岩石在原地破碎（风化），再由流水、风等将破碎物剥离带走（侵蚀），随后把物质输送到低处（搬运），最后因流速降低或能量减弱而沉积（堆积）。所以正确顺序是风化、侵蚀、搬运、堆积。' },
      { type: 'choice', question: '岩石在原地破碎但未被搬走，这属于？', options: ['侵蚀', '风化', '搬运', '堆积'], answer: '风化', explanation: '风化是指岩石在地表或接近地表的地方，受温度、水、生物等影响在原地发生破碎瓦解，物质并未发生明显位移。侵蚀则会把物质剥离并带走，搬运是移动过程，堆积是沉积过程。题干强调「原地破碎、未被搬走」，正是风化的特征。' },
      { type: 'fill', question: '内力作用主要表现为___、岩浆活动和___三种形式。', answer: '地壳运动；变质作用', explanation: '内力作用的能量来自地球内部，主要表现为地壳运动、岩浆活动和变质作用三种。其中地壳运动是最普遍、对地貌影响最广泛的形式，分为水平运动和垂直运动。岩浆活动形成侵入岩和喷出岩，变质作用使原有岩石变成变质岩。' },
      { type: 'fill', question: '内力作用使地表变得___（高低不平/趋于平坦），外力作用使地表趋于___。', answer: '高低不平；平坦', explanation: '内力作用来自地球内部，通过地壳运动、岩浆活动等使岩层隆起或凹陷，令地表变得高低不平；外力作用来自太阳辐射和重力，通过风化、侵蚀、搬运、堆积不断削高填低，使地表趋于平坦。二者方向相对、共同作用。' }
    ]
  });
})();
