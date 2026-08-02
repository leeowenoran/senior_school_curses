/* 地理 · 高三总复习 · 专题一 自然地理 · 第2章 宇宙中的地球 · 第5节 地球公转的地理意义 */
(function () {
  var v = gzGetVolume('geography', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u7',
    name: '第5节 地球公转的地理意义',
    chapter: '高三地理复习 · 专题一 自然地理 · 第2章 宇宙中的地球',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、正午太阳高度的变化' },
      { type: 'paragraph', text: '正午太阳高度是一天中太阳高度的最大值，随纬度和季节变化。总体规律：太阳直射点所在纬度的正午太阳高度最大（为 90°），由直射纬线向南北两侧递减。夏至日北回归线以北地区达一年中最大，冬至日则达最小；南半球相反；回归线之间的地区一年有两次直射。' },
      { type: 'list', items: ['由太阳直射纬线向南北两侧递减', '直射点北移时，北半球正午太阳高度渐增', '北回归线以北：夏至最大、冬至最小', '回归线之间：一年中有两次达 90°（直射）'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">正午太阳高度随纬度分布（夏至示意）</text><line x1="60" y1="300" x2="620" y2="300" stroke="#1f3a4d" stroke-width="2"/><text x="340" y="320" font-size="13" fill="#1f3a4d" text-anchor="middle" font-weight="bold">地表（纬度轴：北←→南）</text><polyline points="60,300 340,60 620,300" fill="none" stroke="#2a6fa8" stroke-width="3"/><text x="340" y="55" font-size="13" fill="#c1583b" font-weight="bold">北回归线（直射，H=90°）</text><text x="120" y="200" font-size="12" fill="#1f3a4d">向北递减</text><text x="540" y="200" font-size="12" fill="#1f3a4d">向南递减</text><text x="340" y="345" font-size="12" fill="#1f3a4d" text-anchor="middle">以直射纬线为顶点向两侧递减，呈对称的「山峰」形分布。</text></svg>', caption: '图1　正午太阳高度由太阳直射纬线向南北两侧递减，直射处达 90°。' },
      { type: 'keypoint', label: '重点·正午太阳高度计算', text: '<strong>公式：H = 90° − 两地纬度差（同半球相减、异半球相加）。</strong>用所在地纬度与直射点纬度求差，再用 90° 减去该差即正午太阳高度。例如夏至北京（40°N）与直射点（23.5°N）差 16.5°，则 H≈73.5°。掌握公式可解楼间距、太阳能板倾角等问题。' },
      { type: 'heading', text: '二、昼夜长短的变化' },
      { type: 'paragraph', text: '昼夜长短随直射点移动而变化。太阳直射哪个半球，该半球就昼长夜短，且纬度越高白昼越长，极点附近出现极昼；另一半球则昼短夜长、高纬极夜。赤道全年昼夜平分。夏至北半球昼最长夜最短，冬至反之；春秋分全球昼夜等长。' },
      { type: 'list', items: ['直射北半球：北半球昼长夜短，纬度越高昼越长', '直射南半球：南半球昼长夜短，北半球昼短夜长', '赤道：全年昼夜平分（各 12 小时）', '夏至北半球昼最长，冬至北半球昼最短'] },
      { type: 'table', headers: ['节气', '直射半球', '北半球昼夜', '极地现象'], rows: [['夏至', '北半球', '昼最长夜最短', '北极圈极昼'], ['冬至', '南半球', '昼最短夜最长', '北极圈极夜'], ['春分/秋分', '赤道', '昼夜平分', '无极昼极夜'], ['全年', '—', '赤道均分', '随直射点变化']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 330" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="330" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">昼夜长短随纬度变化（北半球夏半年）</text><circle cx="340" cy="180" r="120" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><path d="M340 60 A120 120 0 0 1 340 300" fill="#cfe4f5" opacity="0.6"/><text x="260" y="180" font-size="13" fill="#1f3a4d" font-weight="bold">昼（长）</text><text x="430" y="180" font-size="13" fill="#1f3a4d" font-weight="bold">夜（短）</text><line x1="220" y1="120" x2="460" y2="240" stroke="#c1583b" stroke-width="2.5"/><text x="215" y="110" font-size="12" fill="#c1583b" font-weight="bold">晨昏线偏</text><text x="340" y="315" font-size="12" fill="#1f3a4d" text-anchor="middle">夏半年北半球昼弧大于夜弧，纬度越高昼越长，北极圈内极昼。</text></svg>', caption: '图2　夏半年北半球昼弧长于夜弧，纬度越高白昼越长，高纬可出现极昼。' },
      { type: 'example', label: '例题·昼夜长短', text: '题目：北半球冬至日，下列地点白昼最长的是？<br>解析：冬至日太阳直射南半球，南半球各地昼长夜短，且纬度越高白昼越长；北半球则昼短夜长。所以在给定选项中，位于南半球且纬度较高的地点白昼最长。赤道全年平分，北半球此时白昼最短。解题关键是先判断直射半球，再按「直射半球昼长随纬度升高而增长」排序。' },
      { type: 'heading', text: '三、四季与五带的划分' },
      { type: 'paragraph', text: '四季更替是昼夜长短和正午太阳高度季节变化的结果。天文上以正午太阳高度最大、白昼最长的季节为夏季，反之为冬季，春秋为过渡。五带则按获得太阳热量的多少划分：热带（回归线间，有直射）、南北温带（回归线与极圈间，无直射无极昼极夜）、南北寒带（极圈内，有极昼极夜）。' },
      { type: 'warn', label: '易错·四季与五带的依据', text: '① 四季划分的依据是昼夜长短和正午太阳高度的季节变化，不是温度本身；② 五带划分的依据是有无太阳直射和极昼极夜现象，不是气温高低；③ 温带既无直射也无极昼极夜，寒热带各有其一。常考「某地属于哪个带」，按纬度对照回归线、极圈即可。' },
      { type: 'tip', label: '提示·楼间距与太阳能板', text: '利用正午太阳高度可解实际题：住宅楼间距应保证底层冬至日也能见到阳光，需参考冬至日正午太阳高度最小值；太阳能热水器集热板倾角 ≈ 当地纬度与直射点纬度之差，使板面与太阳光线垂直。把公式 H=90°−纬度差用活，这类应用题不难。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">四季更替的形成逻辑</text><rect x="60" y="80" width="240" height="170" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="180" y="110" font-size="14" fill="#1f3a4d" font-weight="bold">自转 + 公转</text><text x="180" y="145" font-size="12" fill="#1f3a4d" text-anchor="middle">地轴倾斜</text><text x="180" y="180" font-size="12" fill="#1f3a4d" text-anchor="middle">→ 直射点移动</text><text x="180" y="215" font-size="12" fill="#1f3a4d" text-anchor="middle">→ 正午太阳高度</text><text x="180" y="238" font-size="12" fill="#1f3a4d" text-anchor="middle">与昼夜长短变化</text><rect x="380" y="80" width="240" height="170" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="500" y="110" font-size="14" fill="#1f3a4d" font-weight="bold">结果</text><text x="500" y="145" font-size="12" fill="#1f3a4d" text-anchor="middle">四季更替</text><text x="500" y="180" font-size="12" fill="#1f3a4d" text-anchor="middle">五带分异</text><text x="500" y="215" font-size="12" fill="#1f3a4d" text-anchor="middle">昼夜长短季节变化</text><text x="340" y="305" font-size="12" fill="#1f3a4d" text-anchor="middle">地球运动（因）→ 太阳辐射时空变化（果）→ 四季五带。</text></svg>', caption: '图3　地球运动导致太阳辐射时空变化，进而形成四季更替与五带分异。' },
      { type: 'heading', text: '四、公转意义的实际应用' },
      { type: 'paragraph', text: '公转意义在生活中的应用很广：根据正午太阳高度确定楼间距和窗户朝向；根据昼夜长短安排农业作息和旅游季节；极地科考选在极昼期；太阳能设施依当地纬度调整倾角。理解直射点移动和太阳高度、昼夜长短的规律，是把自然地理知识用于实际问题的桥梁。' },
      { type: 'list', items: ['楼间距：参考冬至日最小正午太阳高度', '房屋朝向：北半球多朝南以获取更多光照', '极地考察：选极昼季节便于作业', '太阳能板：倾角 ≈ 纬度与直射点纬度之差'] },
      { type: 'example', label: '例题·楼间距', text: '题目：我国北方某小区为保证底层住户冬至日正午有阳光，楼间距主要依据什么确定？<br>解析：冬至日北半球正午太阳高度达到一年最小值，此时前排楼影子最长。要保证后排底层住户冬至日也能采光，楼间距必须按冬至日的正午太阳高度来计算，使影长不超过楼间距。因此楼间距主要依据「冬至日最小正午太阳高度」确定，这也是北方楼间距普遍较大的原因。' }
    ],
    exercises: [
      { type: 'choice', question: '夏至日，下列地区正午太阳高度最大的是？', options: ['北京（40°N）', '北回归线（23.5°N）', '赤道', '悉尼（34°S）'], answer: '北回归线（23.5°N）', explanation: '夏至日太阳直射北回归线（23.5°N），直射点所在纬度正午太阳高度最大，为 90°。其余地点随与北回归线纬度差增大而减小。因此北回归线上正午太阳高度最大，赤道和南半球此时较小。' },
      { type: 'choice', question: '北半球冬至日，北极圈内的现象是？', options: ['极昼', '极夜', '昼夜平分', '正午太阳高度最大'], answer: '极夜', explanation: '冬至日太阳直射南回归线，北半球昼短夜长，且纬度越高白昼越短；北极圈及其以内出现极夜现象。与之相对，夏至日北极圈内为极昼。极昼极夜范围随直射点移动而扩大或缩小。' },
      { type: 'choice', question: '划分地球五带的依据是？', options: ['气温高低', '有无太阳直射和极昼极夜', '降水多少', '海拔高低'], answer: '有无太阳直射和极昼极夜', explanation: '五带按各地获得太阳热量的多少及有无太阳直射、极昼极夜现象划分：热带在回归线之间有直射，寒带在极圈内有极昼极夜，温带介于两者之间二者皆无。划分依据是天文现象而非气温、降水或海拔。' },
      { type: 'fill', question: '计算正午太阳高度的公式是 H = 90° − ___，其中两地纬度差「同半球相___、异半球相___」。', answer: '两地纬度差；减；加', explanation: '正午太阳高度 H = 90° 减去所在地与太阳直射点的纬度差。若两地在同半球，纬度差用大减小（相减）；若分属南北半球，纬度差用两地纬度相加。例如夏至北京（40°N）与直射点（23.5°N）差 16.5°，H≈73.5°。' },
      { type: 'fill', question: '赤道上全年___，即昼长和夜长都约为___小时。', answer: '昼夜平分；12', explanation: '赤道始终被晨昏线平分，不论直射点在哪，赤道上各地都是昼 12 小时、夜 12 小时，全年昼夜平分。这也是晨线与赤道交点为 6 时、昏线与赤道交点为 18 时这一规律的来源，是推算地方时的重要基准。' }
    ]
  });
})();
