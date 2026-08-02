/* 地理 · 必修 第一册 · 第5章 · 课时：第1节 植被 */
(function () {
  var v = gzGetVolume('geography', 'bx1');
  if (!v) return;
  v.points.push({
    id: 'bx1-u12',
    name: '第1节 植被',
    chapter: '必修 第一册 · 第5章 植被与土壤',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、什么是植被' },
      { type: 'paragraph', text: '覆盖在地表上的植物群体，叫做植被。单独一棵树、一片草只是个别植物，只有大片连成片的植物群落才叫植被。植被分成天然形成的天然植被和人工种植的人工植被两大类。我们看到的森林、草原、农田、果园，都是植被。植被是地球陆地表面最醒目的一层外衣，它和气候、土壤、地形关系密切。' },
      { type: 'list', items: ['天然植被：自然生长、未受人类明显干扰的森林、草原、荒漠等', '人工植被：人类播种栽培的农田、果园、人工林等', '植被是地理环境的重要组成部分，能反映当地自然环境'] },
      { type: 'keypoint', label: '重点·植被的分类', text: '<strong>植被按起源分为两大类：</strong>① 天然植被，在自然条件下形成，如热带雨林、温带草原；② 人工植被，由人类种植栽培，如水稻田、茶园、人工林。判断时抓住「是不是人种的」这一条，天然与人工就分开了。' },
      { type: 'heading', text: '二、森林植被' },
      { type: 'paragraph', text: '森林是树木密集、树冠互相遮掩的植被类型，主要分布在降水较多的湿润、半湿润地区。由于热量和水分不同，森林又分成热带雨林、亚热带常绿阔叶林、温带落叶阔叶林、亚寒带针叶林等。热带雨林终年高温多雨，树木四季常青；温带落叶阔叶林到了冬天叶子落光，春天再发新芽。' },
      { type: 'list', items: ['热带雨林：终年高温多雨，树种繁多，常绿', '亚热带常绿阔叶林：冬季温和，树叶革质、常绿', '温带落叶阔叶林：四季分明，冬季落叶', '亚寒带针叶林：气候寒冷，以松、杉等针叶树为主'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">森林植被景观（湿润地区）</text><rect x="40" y="80" width="170" height="200" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="125" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">热带雨林</text><text x="125" y="140" font-size="12" fill="#1f3a4d" text-anchor="middle">高温多雨</text><text x="125" y="165" font-size="12" fill="#1f3a4d" text-anchor="middle">树木常绿</text><text x="125" y="190" font-size="12" fill="#1f3a4d" text-anchor="middle">物种繁多</text><rect x="255" y="80" width="170" height="200" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="340" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">常绿阔叶林</text><text x="340" y="140" font-size="12" fill="#1f3a4d" text-anchor="middle">冬季温和</text><text x="340" y="165" font-size="12" fill="#1f3a4d" text-anchor="middle">树叶革质</text><rect x="470" y="80" width="170" height="200" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="555" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">落叶阔叶林</text><text x="555" y="140" font-size="12" fill="#1f3a4d" text-anchor="middle">四季分明</text><text x="555" y="165" font-size="12" fill="#1f3a4d" text-anchor="middle">冬季落叶</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">降水越多、热量越足，森林越茂盛。</text></svg>', caption: '图1　森林主要分布在湿润地区，按热量不同分为雨林、常绿阔叶林、落叶阔叶林等。' },
      { type: 'heading', text: '三、草原与荒漠植被' },
      { type: 'paragraph', text: '在降水较少的半干旱地区，树木长不起来，草本植物占据主导，形成草原。草原又分热带草原和温带草原：热带草原干湿季分明，长着稀疏的伞状树木；温带草原以丛生禾草为主，视野开阔。降水更少、气候极端干旱的地方，植株稀疏、根系发达，就变成荒漠植被，如沙漠里的仙人掌、骆驼刺。' },
      { type: 'list', items: ['热带草原：湿季草木茂盛，干季一片枯黄，间有稀树', '温带草原：以丛生禾草为主，少乔木', '荒漠植被：植株矮小稀疏、耐旱，如仙人掌、骆驼刺', '规律：降水越少，植被越稀疏矮小'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">草原与荒漠植被（干旱地区）</text><rect x="40" y="80" width="280" height="200" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="180" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">草原</text><text x="180" y="145" font-size="12" fill="#1f3a4d" text-anchor="middle">降水较少</text><text x="180" y="170" font-size="12" fill="#1f3a4d" text-anchor="middle">草本为主</text><text x="180" y="195" font-size="12" fill="#1f3a4d" text-anchor="middle">树木稀少</text><rect x="360" y="80" width="280" height="200" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="500" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">荒漠</text><text x="500" y="145" font-size="12" fill="#1f3a4d" text-anchor="middle">极端干旱</text><text x="500" y="170" font-size="12" fill="#1f3a4d" text-anchor="middle">植株稀疏</text><text x="500" y="195" font-size="12" fill="#1f3a4d" text-anchor="middle">根系发达</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">降水越少，植被越稀矮：森林→草原→荒漠。</text></svg>', caption: '图2　降水较少处为草原，极端干旱处为荒漠，植被随降水减少而变稀疏。' },
      { type: 'heading', text: '四、植物与环境的相互关系' },
      { type: 'paragraph', text: '植物和环境是互相影响的。一方面，环境（热量、水分、土壤）决定植被的类型和分布；另一方面，植被也会反作用于环境，比如森林能涵养水源、保持水土、调节气候。温带荒漠里根系极长的骆驼刺，就是为了在干旱中扎到深处吸水，这正是植物适应环境的典型例子。' },
      { type: 'list', items: ['环境影响植被：热量水分不同，植被类型随之变化', '植被适应环境：干旱区长根、叶片变小减少蒸发', '植被影响环境：森林保水、防风、改善气候', '植被是自然环境的一面镜子'] },
      { type: 'table', headers: ['环境因子', '对植被的影响', '植被的适应表现'], rows: [['降水丰富', '树木生长茂密', '形成森林'], ['降水较少', '草本为主', '形成草原'], ['极端干旱', '植株稀疏', '荒漠植被、根系发达'], ['寒冷地区', '生长季短', '针叶林、落叶灌丛']] },
      { type: 'warn', label: '易错·植被与气候对应', text: '① 森林不只出现在热带，温带、寒带也有森林，只是树种不同；② 荒漠不一定全在沙漠，高寒山区因低温少雨也可能出现荒漠植被；③ 同一种气候下天然植被和人工植被可以完全不同，不要混淆「气候带的天然植被」和「人类种的庄稼」。' },
      { type: 'example', label: '例题·判断植被类型', text: '题目：某地区终年高温多雨，树木四季常绿、种类繁多，这里的天然植被最可能是？<br>A. 温带落叶阔叶林　B. 热带雨林　C. 温带草原　D. 荒漠<br>解析：终年高温多雨是热带雨林气候的典型特征，对应的天然植被是热带雨林，树木终年常绿且种类极多。温带落叶阔叶林冬季落叶，草原和荒漠都出现在较干地区，所以选热带雨林。' },
      { type: 'heading', text: '五、植被的垂直变化' },
      { type: 'paragraph', text: '在山地，随着海拔升高，气温下降、降水也会变化，植被像给大山穿了多层衣服：山脚可能是常绿阔叶林，山腰变成落叶林，再往上是针叶林，山顶则是灌丛或草甸。这种随海拔出现的植被分层，叫植被的垂直地带性，它本质上是热量和水分随高度变化的反映。' },
      { type: 'tip', label: '提示·植被记忆诀窍', text: '记植被分布，抓住<strong>「降水定稀密，热量定种类」</strong>八字：降水多→森林，降水少→草原，再少→荒漠；热量高→雨林常绿，热量低→落叶针叶。看到气候描述，先想降水再想热量，植被类型就八九不离十了。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="32" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">植物对环境的适应（骆驼刺深根）</text><rect x="40" y="80" width="290" height="200" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="185" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">地上部分矮小</text><text x="185" y="145" font-size="12" fill="#1f3a4d" text-anchor="middle">减少水分蒸发</text><text x="185" y="170" font-size="12" fill="#1f3a4d" text-anchor="middle">叶片小或退化</text><rect x="350" y="80" width="290" height="200" rx="8" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="495" y="110" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">地下根系极长</text><text x="495" y="145" font-size="12" fill="#1f3a4d" text-anchor="middle">扎入深处吸水</text><text x="495" y="170" font-size="12" fill="#1f3a4d" text-anchor="middle">适应干旱环境</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">环境塑造植物，植物也以形态适应环境。</text></svg>', caption: '图3　干旱区的骆驼刺地上矮小、地下根系极长，是植物适应环境的典型表现。' }
    ],
    exercises: [
      { type: 'choice', question: '植被按起源可以分为下列哪两大类？', options: ['天然植被和人工植被', '森林植被和草原植被', '乔木和灌木', '热带植被和寒带植被'], answer: '天然植被和人工植被', explanation: '植被按起源（也就是怎么来的）分为天然植被和人工植被。天然植被是自然条件下生长形成的，如森林、草原；人工植被由人类播种栽培，如农田、果园。森林与草原是按外貌划分，乔木与灌木是按体型划分，都不属于按起源的分类，所以正确选项是天然植被和人工植被。' },
      { type: 'choice', question: '终年高温多雨、树木四季常绿且种类繁多的地区，天然植被最可能是？', options: ['温带落叶阔叶林', '热带雨林', '温带草原', '荒漠'], answer: '热带雨林', explanation: '终年高温多雨是热带雨林气候的特征，对应的天然植被是热带雨林，树木终年常绿、物种极其丰富。温带落叶阔叶林冬季会落叶，草原以草本为主，荒漠出现在极端干旱处，都不符合终年高温多雨且常绿繁茂的描述，因此选热带雨林。' },
      { type: 'choice', question: '温带荒漠中骆驼刺的根系极长，主要是为了？', options: ['吸收深处水分', '进行光合作用', '抵抗大风', '吸引昆虫'], answer: '吸收深处水分', explanation: '骆驼刺生长在极端干旱的荒漠，表层土壤水分极少。它把根系扎到很深的地下，目的是吸收深层土壤里的水分以维持生存，这是植物适应干旱环境的典型表现。根系长不是为了光合作用，也不是主要为了抗风或吸引昆虫，所以选吸收深处水分。' },
      { type: 'fill', question: '降水丰富的地区天然植被以___为主；降水极端稀少的地区则形成___。', answer: '森林；荒漠', explanation: '植被类型随降水量变化明显：降水丰富、气候湿润的地方树木能够茂密生长，形成森林；降水较少的地方草本植物占优势，形成草原；当降水极端稀少、气候极端干旱时，植株稀疏，就形成荒漠植被。因此两空依次填森林和荒漠。' },
      { type: 'fill', question: '山地随海拔升高，气温和水分改变，植被出现分层现象，这称为植被的___地带性。', answer: '垂直', explanation: '在山地，海拔越高气温越低，降水也会随高度变化，导致植被像分层一样更替，山脚可能是常绿阔叶林，向上变为落叶林、针叶林，山顶为灌丛草甸。这种随海拔出现的植被分带现象，叫做植被的垂直地带性，它本质上是水热条件随高度变化的反映。' }
    ]
  });
})();
