/* 地理 · 高三总复习 · 专题一 自然地理 · 第1章 地球与地图 · 第2节 等高线地形图 */
(function () {
  var v = gzGetVolume('geography', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u2',
    name: '第2节 等高线地形图',
    chapter: '高三地理复习 · 专题一 自然地理 · 第1章 地球与地图',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、等高线的基本原理' },
      { type: 'paragraph', text: '等高线是地形图上把海拔相同的点连接成的闭合曲线。同一条等高线上各点海拔相等；等高线越密，坡度越陡；越疏，坡度越缓。相邻两条等高线之间的海拔差叫等高距，同一幅图中等高距通常相同。通过等高线的弯曲和疏密，就能在平面的纸上「读出」立体的山地、山谷、陡崖等地形。' },
      { type: 'list', items: ['同线等高：一条等高线上海拔处处相等', '同图等距：同一幅图等高距一致', '密陡疏缓：等高线越密坡度越陡，越疏越缓', '闭合曲线：等高线一般闭合，区域性小地形也闭合于图内或图框'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="360" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">等高线地形图常见地形部位</text><circle cx="200" cy="200" r="30" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><circle cx="200" cy="200" r="55" fill="none" stroke="#2a6fa8" stroke-width="1.5"/><circle cx="200" cy="200" r="80" fill="none" stroke="#2a6fa8" stroke-width="1.5"/><text x="200" y="300" font-size="12" fill="#1f3a4d" text-anchor="middle" font-weight="bold">山顶（闭合小圈）</text><path d="M360 150 Q420 200 360 250 Q300 200 360 150" fill="none" stroke="#c1583b" stroke-width="2"/><path d="M360 130 Q440 200 360 270 Q280 200 360 130" fill="none" stroke="#c1583b" stroke-width="1.5" stroke-dasharray="5 4"/><text x="360" y="300" font-size="12" fill="#1f3a4d" text-anchor="middle" font-weight="bold">山谷（等高线凸向高处）</text><path d="M500 250 Q560 200 500 150 Q440 200 500 250" fill="none" stroke="#2a6fa8" stroke-width="2"/><path d="M500 270 Q580 200 500 130 Q420 200 500 270" fill="none" stroke="#2a6fa8" stroke-width="1.5" stroke-dasharray="5 4"/><text x="500" y="300" font-size="12" fill="#1f3a4d" text-anchor="middle" font-weight="bold">山脊（等高线凸向低处）</text><text x="340" y="340" font-size="12" fill="#1f3a4d" text-anchor="middle">口诀：凸高为谷，凸低为脊；重叠处为陡崖。</text></svg>', caption: '图1　山顶、山谷、山脊是等高线地形图中最常见的三种部位，靠弯曲方向区分。' },
      { type: 'keypoint', label: '重点·山谷与山脊的判定', text: '<strong>等高线向海拔高处弯曲是山谷，向海拔低处弯曲是山脊。</strong>记忆为「凸高为谷，凸低为脊」。山谷往往发育河流，山脊是分水岭。做题时先看清等高线上的数值递变方向，再看曲线朝高值还是低值凸起，即可一锤定音。陡崖则表现为多条等高线重合。' },
      { type: 'heading', text: '二、常见地形部位与判读' },
      { type: 'paragraph', text: '在等高线地形图上，不同地形部位有不同形态：山顶是中间高四周低的闭合圈；盆地是中间低四周高的闭合圈；山脊线像分水岭；山谷线常是河流所在地；鞍部是两个山顶之间的低凹处；陡崖是多条等高线重叠的地方。判读时把「弯曲方向 + 疏密 + 闭合」三者结合起来，就能准确还原地形。' },
      { type: 'list', items: ['山顶：闭合等高线，中心海拔高于四周', '盆地：闭合等高线，中心海拔低于四周', '鞍部：两个相邻山顶之间相对低凹的部位', '陡崖：多条等高线重合，常用锯齿符号表示'] },
      { type: 'table', headers: ['地形部位', '等高线特征', '实际意义'], rows: [['山顶', '闭合小圈，内高外低', '山峰', '可计算海拔'], ['山谷', '向高处凸', '易发育河流', '水库坝址常选出口'], ['山脊', '向低处凸', '分水岭', '无河流'], ['陡崖', '多条线重合', '瀑布、攀岩地', '高差 = (n-1)d 到 nd']] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">地形剖面图与坡向判断</text><polyline points="80,260 160,200 240,220 320,140 400,160 480,90 560,120" fill="none" stroke="#2a6fa8" stroke-width="3"/><line x1="80" y1="280" x2="560" y2="280" stroke="#1f3a4d" stroke-width="2"/><text x="80" y="300" font-size="12" fill="#1f3a4d">A</text><text x="555" y="300" font-size="12" fill="#1f3a4d">B</text><text x="320" y="135" font-size="12" fill="#c1583b" font-weight="bold">山顶</text><text x="240" y="212" font-size="12" fill="#1f3a4d">山谷</text><text x="480" y="82" font-size="12" fill="#1f3a4d">陡坡</text><text x="340" y="310" font-size="12" fill="#1f3a4d" text-anchor="middle">剖面图能把某条线的起伏直观画出来，配合等高线判断坡度和通视。</text></svg>', caption: '图2　沿 AB 线作的地形剖面图，可直观看出坡度陡缓与通视关系。' },
      { type: 'example', label: '例题·水库坝址选择', text: '题目：在等高线地形图中，修建水库大坝最适宜选址在何处？<br>解析：大坝应建在河谷、山谷的最窄处（即口袋形洼地的出口），这样工程量小、库容大。因为山谷处等高线向高处凸，河流沿谷地发育，在出口处筑坝即可拦截上游来水形成水库。同时坝址应避开断层、喀斯特地貌等地质不稳定区。因此是「口袋形洼地出口、河谷最窄处」。' },
      { type: 'heading', text: '三、地形剖面图与通视' },
      { type: 'paragraph', text: '地形剖面图是沿一条剖面线切开地形后画出的垂直断面，能直观显示地表起伏。判断两点能否通视，不能只看直线距离，而要看两点之间连线是否会被中间高地挡住。若连线经过的山脊或山峰高于连线高度，则无法直接通视。这在军事、瞭望、通讯塔选址中很常用。' },
      { type: 'warn', label: '易错·通视判断', text: '① 两点间「看起来很近」未必能通视，中间若有山脊阻挡就不行；② 凸坡（从下往上看先缓后陡）容易遮挡，凹坡（先陡后缓）往往能通视；③ 判断通视要用剖面图看连线是否被高地切断，而不是凭直觉。这类题常配剖面图，务必先画剖面再判断。' },
      { type: 'tip', label: '提示·相对高度估算', text: '若某处重叠 n 条等高距为 d 的等高线，其相对高度 H 满足 (n-1)d ≤ H < (n+1)d。例如 4 条等高线重合、等高距 50 米，则陡崖高度在 150 米到 250 米之间。记住这个开区间公式，选择题能快速排除错误选项。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#e8f2fb"/><text x="340" y="30" font-size="17" font-weight="bold" fill="#2a6fa8" text-anchor="middle">等高线疏密与坡度关系</text><rect x="70" y="80" width="240" height="180" rx="12" fill="#cfe4f5" stroke="#2a6fa8" stroke-width="2"/><text x="190" y="105" font-size="13" fill="#1f3a4d" font-weight="bold">缓坡</text><line x1="100" y1="140" x2="280" y2="225" stroke="#2a6fa8" stroke-width="1.5"/><line x1="120" y1="140" x2="290" y2="225" stroke="#2a6fa8" stroke-width="1.5"/><line x1="140" y1="140" x2="300" y2="225" stroke="#2a6fa8" stroke-width="1.5"/><line x1="160" y1="140" x2="310" y2="225" stroke="#2a6fa8" stroke-width="1.5"/><rect x="370" y="80" width="240" height="180" rx="12" fill="#e3f0fa" stroke="#2a6fa8" stroke-width="2"/><text x="490" y="105" font-size="13" fill="#1f3a4d" font-weight="bold">陡坡</text><line x1="390" y1="140" x2="600" y2="225" stroke="#c1583b" stroke-width="2"/><line x1="420" y1="140" x2="590" y2="225" stroke="#c1583b" stroke-width="2"/><line x1="450" y1="140" x2="580" y2="225" stroke="#c1583b" stroke-width="2"/><line x1="480" y1="140" x2="570" y2="225" stroke="#c1583b" stroke-width="2"/><text x="340" y="300" font-size="12" fill="#1f3a4d" text-anchor="middle">同一水平距离内等高线越密，坡度越陡。</text></svg>', caption: '图3　等高线疏密反映坡度陡缓，密陡疏缓是读图基本规律。' },
      { type: 'heading', text: '四、等高线的实际应用' },
      { type: 'paragraph', text: '等高线地形图在选址、修路、农业、旅游中都有用：公路铁路尽量沿等高线延伸以减小坡度；引水渠从高处向低处自流；疗养院宜居向阳、避风、靠近水景的缓坡；宿营地避开河谷、陡崖和山顶。把地形部位与生产生活需求对应起来，是高考常见的综合题切入点。' },
      { type: 'list', items: ['交通线：尽量与等高线平行，降低爬坡难度', '引水：由海拔高处向低处，实现自流', '城镇：多布局在地形平坦、靠近河流的缓坡或河谷', '农业：缓坡可修梯田，陡坡宜林牧，平原宜耕作'] },
      { type: 'example', label: '例题·公路选线', text: '题目：山区修建公路，下列做法合理的是？<br>解析：山区地形起伏大，公路应尽量沿等高线走向修建，使线路坡度小、工程量省、行车更安全；翻越山脊的直线虽然短，但坡度太陡不宜采用。同时线路要避开陡崖、滑坡和泥石流易发区。因此合理做法是「沿等高线延伸、避开地质灾害隐患点」。' }
    ],
    exercises: [
      { type: 'choice', question: '等高线向海拔高处弯曲表示的地形是？', options: ['山脊', '山谷', '山顶', '陡崖'], answer: '山谷', explanation: '等高线向海拔高的方向弯曲，说明该处海拔比两侧低，是山谷，常发育河流；山脊是等高线向低处弯曲。记忆口诀「凸高为谷、凸低为脊」即可区分。山顶是闭合高值圈，陡崖是多条线重合。' },
      { type: 'choice', question: '在等高线地形图中，水库大坝最适宜建在？', options: ['山顶', '山谷最窄处的出口', '鞍部', '陡崖顶部'], answer: '山谷最窄处的出口', explanation: '水库大坝应建在口袋形洼地的出口、即河谷最窄处，这样坝体短、工程量小，又能拦截上游大量来水形成较大库容。山谷因等高线向高处凸、有河流发育，是蓄水的天然场所。山顶、鞍部、陡崖顶部都不具备蓄水条件。' },
      { type: 'choice', question: '关于等高线疏密与坡度的关系，正确的是？', options: ['等高线越密坡度越缓', '等高线越疏坡度越陡', '等高线越密坡度越陡', '二者无关'], answer: '等高线越密坡度越陡', explanation: '在同一幅等高线图中，等高距相同。若单位水平距离内等高线越密集，说明海拔变化越快，坡度越陡；越稀疏则坡度越缓。因此「密陡疏缓」是等高线读图的基本规律，常用于判断攀登难度和通视。' },
      { type: 'fill', question: '若陡崖处重合了 n 条等高距为 d 的等高线，则其相对高度 H 的范围是___ ≤ H < ___。', answer: '(n-1)d；(n+1)d', explanation: '陡崖相对高度的计算采用开区间公式：H 满足 (n-1)d ≤ H < (n+1)d，其中 n 为重合的等高线条数，d 为等高距。例如 4 条线重合、d=50 米，则高度在 150 米到 250 米之间。该公式源于相邻等高线不相交（除陡崖外）的约定。' },
      { type: 'fill', question: '山区修建公路时，线路应尽量与___平行，以减小坡度、降低工程量。', answer: '等高线', explanation: '山区地形起伏大，公路若沿等高线走向修建，线路延伸方向与等高线大致平行，可使道路坡度小、行车平稳、工程量省。若直接翻越山脊，虽然距离短但坡度太陡，既不安全也不经济，故实际选线多沿等高线盘绕。' }
    ]
  });
})();
