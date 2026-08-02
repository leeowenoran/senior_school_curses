/* 化学 · 高三复习 · 有机化学 · 专题二 · 课时：炔烃与乙炔实验室制法 */
(function () {
  var v = gzGetVolume('chemistry', 'zt3');
  if (!v) return;
  v.points.push({
    id: 'zt3-u6',
    name: '炔烃与乙炔实验室制法',
    chapter: '有机化学 · 专题二 烃',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、炔烃：含有碳碳三键的烃' },
      { type: 'paragraph', text: '炔烃是烃家族里含<strong>碳碳三键（C≡C）</strong>的一类，不饱和程度比烯烃还高。最简单的炔烃是乙炔 C₂H₂，它的通式是 <strong>CₙH₂ₙ₋₂（n≥2）</strong>，比同碳数烷烃少了四个氢。可以把碳碳三键想象成两个碳原子之间紧紧牵了三只手，这让它能"加"进更多的原子。乙炔俗称电石气，因为工业上用电石（碳化钙）和水反应制得。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">乙炔 C2H2 的直线形结构</text><line x1="200" y1="160" x2="270" y2="160" stroke="#b5651d" stroke-width="2"/><line x1="270" y1="155" x2="410" y2="155" stroke="#b5651d" stroke-width="2"/><line x1="270" y1="160" x2="410" y2="160" stroke="#b5651d" stroke-width="2"/><line x1="270" y1="165" x2="410" y2="165" stroke="#b5651d" stroke-width="2"/><line x1="410" y1="160" x2="480" y2="160" stroke="#b5651d" stroke-width="2"/><circle cx="200" cy="160" r="15" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="200" y="164" font-size="12" fill="#4a3724" text-anchor="middle">HC</text><circle cx="480" cy="160" r="15" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="480" y="164" font-size="12" fill="#4a3724" text-anchor="middle">CH</text><text x="340" y="110" font-size="13" fill="#d98e3a" text-anchor="middle" font-weight="bold">C≡C 三键</text><text x="340" y="240" font-size="13" fill="#4a3724" text-anchor="middle">四个原子共直线，键角 180°</text><text x="340" y="268" font-size="13" fill="#4a3724" text-anchor="middle">三键不能旋转，分子呈直线形</text></svg>', caption: '图1　乙炔分子中四个原子共直线，碳碳三键不能旋转，键角为180度。' },
      { type: 'heading', text: '二、乙炔的分子结构' },
      { type: 'paragraph', text: '碳碳三键由一个σ键和两个π键组成。<strong>三键同样不能旋转</strong>，而且两个碳原子和各自相连的氢（或基团）全都排在一条直线上，呈直线形。乙炔里 H—C≡C—H 四个原子共线，键角是 <strong>180°</strong>。这是判断含三键分子空间构型的关键：直线形，比烯烃的平面形更"扁"。' },
      { type: 'list', items: ['含 C≡C 三键，属于不饱和烃，通式 CₙH₂ₙ₋₂（n≥2）', '三键不能旋转，含三键碳的四个原子共直线', '三键有两个 π 键，比双键更易断裂、更活泼', '同系物相差 CH₂，如乙炔、丙炔'] },
      { type: 'heading', text: '三、乙炔的物理性质' },
      { type: 'paragraph', text: '纯净的乙炔是无色、无味的气体，<strong>微溶于水，易溶于有机溶剂</strong>。实验室用电石制得的乙炔常带有一股难闻的臭味，那是因为电石里混有硫化钙、磷化钙等杂质，和水反应放出了硫化氢、磷化氢等气体，并非乙炔本身的气味。乙炔比空气稍轻，点燃前也要验纯，防止爆炸。' },
      { type: 'list', items: ['纯乙炔：无色、无味气体，微溶于水', '电石气有臭味是因含 H₂S、PH₃ 等杂质', '点燃前必须验纯，防止与空气混合爆炸'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">乙炔的加成反应</text><rect x="30" y="80" width="290" height="90" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="175" y="118" font-size="15" fill="#4a3724" text-anchor="middle">CH≡CH + 2Br2</text><text x="175" y="148" font-size="13" fill="#4a3724" text-anchor="middle">溴水（橙红色）</text><polygon points="340,125 328,137 352,137" fill="#b5651d"/><rect x="360" y="80" width="290" height="90" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="505" y="118" font-size="15" fill="#4a3724" text-anchor="middle">CHBr2—CHBr2</text><text x="505" y="148" font-size="13" fill="#4a3724" text-anchor="middle">1,1,2,2-四溴乙烷（无色）</text><text x="340" y="220" font-size="13" fill="#4a3724" text-anchor="middle">三键可加两份溴，先加一成 CHBr=CHBr</text><text x="340" y="250" font-size="13" fill="#d98e3a" text-anchor="middle" font-weight="bold">也能与 H2、HCl 加成，使溴水褪色</text></svg>', caption: '图2　乙炔三键可加两份溴，溴水橙红色褪去，生成四溴乙烷。' },
      { type: 'heading', text: '四、乙炔的化学性质' },
      { type: 'paragraph', text: '乙炔比乙烯更活泼，因为它有三键、不饱和程度更高。①<strong>加成</strong>：能加两份卤素，例如 <strong>CH≡CH + 2Br₂ → CHBr₂—CHBr₂</strong>（溴水褪色），也能和 H₂、HCl 加成制氯乙烯。②<strong>氧化</strong>：能在空气中燃烧，火焰比乙烯更明亮、黑烟更浓（因为含碳量更高）；也能被酸性 KMnO₄ 氧化使其褪色。注意乙炔和卤素也是加成不是取代。' },
      { type: 'table', headers: ['反应类型', '代表方程式', '说明'], rows: [['加成（与 Br₂）', 'CH≡CH + 2Br₂ → CHBr₂—CHBr₂', '三键加两份溴，溴水褪色'], ['加成（与 HCl）', 'CH≡CH + HCl →（催化剂）CH₂=CHCl', '制氯乙烯，再聚成聚氯乙烯'], ['氧化（燃烧）', '2C₂H₂ + 5O₂ →（点燃）4CO₂ + 2H₂O', '火焰明亮、黑烟浓'], ['氧化（被 KMnO₄）', 'C₂H₂ 使酸性 KMnO₄ 褪色', '检验三键']] },
      { type: 'keypoint', label: '重点·乙炔的燃烧与鉴别', text: '<strong>乙炔含碳量高达 92%，燃烧时火焰明亮并伴有浓烈黑烟</strong>，这是它和甲烷、乙烯火焰明显不同的地方。鉴别不饱和烃可用溴水或酸性 KMnO₄：乙烯、乙炔都能使两者褪色；若要进一步区分二者，可看加成量——乙炔能加两份溴。但最稳妥的常规检验仍是溴水或 KMnO₄ 褪色证明有不饱和键。' },
      { type: 'heading', text: '五、乙炔的实验室制法' },
      { type: 'paragraph', text: '实验室用电石（碳化钙 CaC₂）和水反应制取乙炔：<strong>CaC₂ + 2H₂O → C₂H₂↑ + Ca(OH)₂</strong>。这个反应非常剧烈、放出大量热，所以不能直接用大量水猛冲。为了控制反应速率，实际用<strong>饱和食盐水</strong>代替纯水（食盐水浓度大、水少，反应慢一点、平稳一点）。生成的乙炔通常先通过 CuSO₄ 溶液，除去混在里面的 H₂S、PH₃ 等恶臭且有干扰的杂质。' },
      { type: 'list', items: ['原料：电石 CaC₂ 与饱和食盐水（控速，不用纯水猛冲）', '原理：CaC₂ + 2H₂O → C₂H₂↑ + Ca(OH)₂', '除杂：通过 CuSO₄ 溶液除去 H₂S、PH₃ 等杂质', '收集：用排水法收集，不能用启普发生器'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 340" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="340" fill="#f7ecdc"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#b5651d" text-anchor="middle">乙炔实验室制法装置示意</text><rect x="250" y="70" width="180" height="120" rx="10" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="110" font-size="14" fill="#4a3724" text-anchor="middle">圆底烧瓶</text><text x="340" y="138" font-size="13" fill="#4a3724" text-anchor="middle">电石 CaC2</text><text x="340" y="165" font-size="13" fill="#4a3724" text-anchor="middle">滴入饱和食盐水</text><line x1="340" y1="190" x2="340" y2="225" stroke="#b5651d" stroke-width="2"/><rect x="250" y="225" width="180" height="60" rx="8" fill="#ecd9bf" stroke="#b5651d" stroke-width="2"/><text x="340" y="260" font-size="13" fill="#4a3724" text-anchor="middle">CuSO4 除杂</text><line x1="340" y1="285" x2="340" y2="305" stroke="#b5651d" stroke-width="2"/><text x="340" y="325" font-size="13" fill="#d98e3a" text-anchor="middle" font-weight="bold">排水法收集 C2H2</text></svg>', caption: '图3　电石与饱和食盐水在烧瓶反应，经硫酸铜除杂后用排水法收集乙炔。' },
      { type: 'warn', label: '易错·为何不能用启普发生器', text: '<strong>制取乙炔不能用启普发生器。</strong>原因有两点：一是电石（CaC₂）遇水剧烈反应、放出大量热，启普发生器不耐这种剧烈放热；二是电石本身是块状脆性固体，反应后很快就粉化成泥状，会从启普发生器的孔隙漏下去，无法控制。所以实验室改用圆底烧瓶加分液漏斗滴加饱和食盐水的方式。' },
      { type: 'example', label: '例题·制法的试剂选择', text: '实验室制取乙炔时，为什么通常用饱和食盐水代替纯水，且不用启普发生器？<br><br><strong>解析</strong>：电石 CaC₂ 与水反应极其剧烈并放出大量热，若用纯水直接反应，速率太快、难以控制且危险。饱和食盐水含水量比纯水少，滴加时能平缓控制反应速率，使气流稳定。启普发生器要求固体块状且不溶于水，而电石反应后迅速粉化漏出，且剧烈放热会损坏仪器，因此不可用。装置上应采用圆底烧瓶配分液漏斗，产物用排水法收集。' },
      { type: 'tip', label: '提示·制法三字诀', text: '记乙炔制法：<strong>"电石加水冒气泡，食盐代水慢又好；硫酸铜里除臭气，排水收集莫用启。"</strong>核心就是 CaC₂ + 2H₂O → C₂H₂↑ + Ca(OH)₂，控速用饱和食盐水、除杂用 CuSO₄、收集用排水法、装置别用启普发生器。' }
    ],
    exercises: [
      { type: 'choice', question: '炔烃的通式是下列哪一个？', options: ['CₙH₂ₙ₊₂', 'CₙH₂ₙ', 'CₙH₂ₙ₋₂', 'CₙH₂ₙ₋₆'], answer: 'CₙH₂ₙ₋₂', explanation: '炔烃分子中含有碳碳三键，不饱和程度比烯烃更高，比同碳数烷烃少四个氢，所以通式为 CₙH₂ₙ₋₂（n≥2）。CₙH₂ₙ₊₂ 是烷烃，CₙH₂ₙ 是烯烃，CₙH₂ₙ₋₆ 是苯及其同系物。因此选 CₙH₂ₙ₋₂。' },
      { type: 'choice', question: '实验室制取乙炔的原理方程式是哪一组？', options: ['CH₄ + Cl₂ →（光照）CH₃Cl + HCl', 'CaC₂ + 2H₂O → C₂H₂↑ + Ca(OH)₂', 'C₂H₅OH →（浓硫酸，170℃）CH₂=CH₂↑ + H₂O', 'C₆H₆ + Br₂ →（FeBr₃）C₆H₅Br + HBr'], answer: 'CaC₂ + 2H₂O → C₂H₂↑ + Ca(OH)₂', explanation: '实验室用电石（碳化钙 CaC₂）和水反应制取乙炔，方程式为 CaC₂ + 2H₂O → C₂H₂↑ + Ca(OH)₂，生成的氢氧化钙微溶。第一项是甲烷取代，第三项是乙醇消去制乙烯，第四项是苯的卤代，均不是乙炔制法。所以选 CaC₂ 与水的反应。' },
      { type: 'choice', question: '实验室制乙炔时，通常不用下列哪种做法？', options: ['用饱和食盐水代替纯水', '用 CuSO₄ 溶液除去杂质', '用排水法收集', '用启普发生器作发生装置'], answer: '用启普发生器作发生装置', explanation: '电石与水反应剧烈放热，且电石很快粉化，会从启普发生器的缝隙漏出无法控制，所以不能用启普发生器。实际用圆底烧瓶加饱和食盐水控速，用 CuSO₄ 除去 H₂S 等杂质，用排水法收集乙炔。因此"用启普发生器作发生装置"是不恰当的做法。' },
      { type: 'fill', question: '乙炔分子呈___形，碳碳三键的键角为 180°。', answer: '直线', explanation: '乙炔 H—C≡C—H 中，两个碳原子和各自相连的氢原子全部排在一条直线上，四个原子共线，分子呈直线形，键角为 180°。这是由于碳碳三键不能旋转、且 sp 杂化决定的。判断分子空间构型时，含三键的原子团通常为直线形，和烯烃的平面形、烷烃的四面体形区分开。' },
      { type: 'fill', question: '实验室制乙炔时，为控制反应速率，通常用___代替纯水缓慢滴加。', answer: '饱和食盐水', explanation: '电石 CaC₂ 与水反应非常剧烈并放出大量热，若直接加纯水速率过快、难以控制。饱和食盐水含水量比纯水少，滴加速度可控，能使反应平稳进行、气流稳定，便于收集。这是乙炔制法中控制反应速率的常用技巧，也是考试常考的实验细节。' }
    ]
  });
})();
