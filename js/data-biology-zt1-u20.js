/* 生物学 · 高三复习 · 分子与细胞 · 第6章 · 课时：第3节 细胞的衰老和凋亡 */
(function () {
  var v = gzGetVolume('biology', 'zt1');
  if (!v) return;
  v.points.push({
    id: 'zt1-u20',
    name: '第3节 细胞的衰老和凋亡',
    chapter: '分子与细胞 · 第6章 细胞的生命历程',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、细胞的衰老' },
      { type: 'paragraph', text: '细胞衰老是细胞的生理状态和化学反应发生复杂变化的过程。对于单细胞生物，细胞的衰老就是个体的衰老；对于多细胞生物，个体衰老的过程是组成个体的细胞普遍衰老的过程，但幼年个体中也有衰老细胞。' },
      { type: 'list', items: [
        '细胞内水分减少，细胞萎缩，体积变小，代谢减慢。',
        '多种酶活性降低，如头发变白与酪氨酸酶活性降低有关。',
        '色素积累，如老年斑是脂褐素积累。',
        '呼吸速率减慢，细胞核体积增大、染色质收缩。',
        '细胞膜通透性改变，物质运输功能降低。'
      ] },
      { type: 'keypoint', text: '细胞衰老的主要特征可记为“一小（体积）、一多（色素）、一少（水分）、两低（酶活性低、运输能力低）”。这些特征是代谢水平整体下降的表现。' },
      { type: 'warn', text: '易错：个体衰老不等于体内所有细胞都衰老，年幼个体也有衰老细胞；单细胞生物细胞衰老即个体衰老，多细胞生物则不成立。不要把“个体衰老”和“细胞衰老”完全等同。' },
      { type: 'tip', text: '高考高频考点：常给一组特征判断属于衰老还是癌变。衰老是体积变小、酶活性降、色素积；癌变是无限增殖、形态改变、表面糖蛋白减少易扩散。二者相反，对比记忆不易混。' },
      { type: 'table', headers: ['项目', '细胞衰老表现', '所属层面'], rows: [
        ['水分', '减少，细胞萎缩', '形态结构'],
        ['酶', '活性降低', '化学反应'],
        ['色素', '脂褐素积累（老年斑）', '物质积累'],
        ['膜', '通透性改变、运输降低', '功能'],
        ['核', '体积增大、染色质收缩', '结构']
      ] },
      { type: 'heading', text: '二、细胞的凋亡与坏死' },
      { type: 'paragraph', text: '细胞凋亡是由基因决定的细胞自动结束生命的过程，又称细胞编程性死亡。它受到严格的基因调控，对机体是有利的，如蝌蚪尾的消失、胎儿手指间细胞的清除、被病原体感染细胞的清除都属于凋亡。' },
      { type: 'keypoint', text: '细胞凋亡的意义：清除多余、受损或有害的细胞，维持内环境稳定，保障多细胞生物正常发育。凋亡是主动的、对机体有利的过程，受基因控制。' },
      { type: 'table', headers: ['比较项目', '细胞凋亡', '细胞坏死'], rows: [
        ['发生机制', '基因控制的编程性死亡', '外界不利因素引起的被动死亡'],
        ['对机体影响', '有利、维持稳态', '有害、引起炎症'],
        ['细胞膜变化', '内陷、形成凋亡小体', '破裂、内容物外溢'],
        ['是否耗能', '是（主动）', '否（被动）']
      ] },
      { type: 'warn', text: '易错：细胞凋亡不是细胞坏死。凋亡是基因决定的、对机体有利的主动过程；坏死是由烫伤、缺氧、中毒等外界因素引起的被动死亡，常导致炎症。二者本质完全不同。' },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360" width="680" height="360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="42" text-anchor="middle" font-size="22" fill="#3f7d1e" font-weight="bold">图1 衰老细胞的主要特征</text><circle cx="130" cy="170" r="48" fill="#d6eac4" stroke="#3f7d1e" stroke-width="3"/><circle cx="130" cy="170" r="10" fill="#5aa832"/><text x="130" y="250" text-anchor="middle" font-size="13" fill="#2e3a22">核大、皱缩</text><rect x="260" y="130" width="100" height="80" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><circle cx="290" cy="160" r="8" fill="#5aa832"/><circle cx="320" cy="180" r="8" fill="#5aa832"/><text x="310" y="250" text-anchor="middle" font-size="13" fill="#2e3a22">色素积累</text><line x1="430" y1="130" x2="430" y2="210" stroke="#5aa832" stroke-width="6"/><text x="470" y="175" text-anchor="middle" font-size="13" fill="#2e3a22">酶活性降</text><polygon points="560,250 600,250 580,230" fill="#3f7d1e"/></svg>', caption: '衰老细胞体积变小、色素积累、酶活性降低。' },
      { type: 'example', text: '例题：下列关于细胞凋亡的叙述，错误的是（  ）\n思路：凋亡由基因决定、对机体有利、是主动过程；被病原体感染细胞的清除也属凋亡。错误项常把凋亡说成“被动、有害”或等同于坏死。答案要点：凋亡对机体有利。' },
      { type: 'list', items: [
        '人胚胎发育时，指间细胞凋亡使手指彼此分开。',
        '蝌蚪发育成蛙时，尾部细胞凋亡使尾消失。',
        '免疫系统清除被病原体感染的细胞也属于凋亡。'
      ] },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360" width="680" height="360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="42" text-anchor="middle" font-size="22" fill="#3f7d1e" font-weight="bold">图2 凋亡与坏死的区别</text><rect x="60" y="100" width="240" height="200" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="180" y="130" text-anchor="middle" font-size="15" fill="#3f7d1e">细胞凋亡</text><circle cx="130" cy="200" r="20" fill="#5aa832"/><circle cx="180" cy="180" r="14" fill="#5aa832"/><circle cx="220" cy="210" r="16" fill="#5aa832"/><text x="180" y="270" text-anchor="middle" font-size="13" fill="#2e3a22">形成凋亡小体、有利</text><rect x="380" y="100" width="240" height="200" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="500" y="130" text-anchor="middle" font-size="15" fill="#3f7d1e">细胞坏死</text><circle cx="470" cy="200" r="42" fill="#5aa832"/><path d="M450,170 l20,-20 M500,230 l20,20" stroke="#3f7d1e" stroke-width="3"/><text x="500" y="270" text-anchor="middle" font-size="13" fill="#2e3a22">膜破裂、有害发炎</text><polygon points="320,200 380,200 350,180" fill="#3f7d1e"/></svg>', caption: '凋亡与坏死在机制和结局上不同。' },
      { type: 'paragraph', text: '在多细胞生物发育中，凋亡普遍存在：人胚胎发育时指间组织凋亡使手指分开；蝌蚪发育成蛙时尾部细胞凋亡使尾消失；免疫细胞清除被病毒感染的细胞也属于凋亡。凋亡是正常发育和稳态维持所必需的。' },
      { type: 'tip', text: '解题技巧：题干出现“清除多余细胞、尾消失、指间细胞消失、清除病变细胞”一律答细胞凋亡；出现“烫伤、冻伤、缺氧、中毒导致细胞死亡”答细胞坏死。区分主动受控与被动受损是关键。' },
      { type: 'svg', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360" width="680" height="360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="42" text-anchor="middle" font-size="22" fill="#3f7d1e" font-weight="bold">图3 细胞凋亡的生理意义</text><rect x="60" y="110" width="150" height="180" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="135" y="200" text-anchor="middle" font-size="13" fill="#2e3a22">多余细胞</text><rect x="265" y="110" width="150" height="180" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="340" y="200" text-anchor="middle" font-size="13" fill="#2e3a22">受损细胞</text><rect x="470" y="110" width="150" height="180" rx="10" fill="#d6eac4" stroke="#3f7d1e"/><text x="545" y="200" text-anchor="middle" font-size="13" fill="#2e3a22">有害细胞</text><text x="340" y="320" text-anchor="middle" font-size="14" fill="#2e3a22">凋亡清除三类细胞，维持内环境稳定</text><polygon points="135,90 135,70 120,80" fill="#3f7d1e"/><polygon points="340,90 340,70 325,80" fill="#3f7d1e"/><polygon points="545,90 545,70 530,80" fill="#3f7d1e"/></svg>', caption: '凋亡清除多余、受损、有害细胞。' },
      { type: 'paragraph', text: '细胞衰老、凋亡与癌变共同构成细胞的生命历程。衰老和凋亡是正常生理过程，受基因调控；它们与细胞分裂、分化一起，保证多细胞生物个体的发生、发育和稳态。' }
    ],
    exercises: [
      { type: 'choice', question: '下列现象中，不属于细胞衰老特征的是（  ）', options: ['细胞内水分减少、体积变小', '多种酶活性降低', '色素积累形成老年斑', '细胞内水分增多、代谢旺盛'], answer: '细胞内水分增多、代谢旺盛', explanation: '细胞衰老时水分减少、体积变小、代谢减慢、酶活性降低、色素积累，而不是水分增多、代谢旺盛。后者与衰老特征相反，故不属于衰老表现。本题选D。' },
      { type: 'choice', question: '细胞凋亡是指（  ）', options: ['细胞被动坏死', '由基因决定的细胞编程性死亡', '细胞癌变', '外界因素引起的细胞破裂'], answer: '由基因决定的细胞编程性死亡', explanation: '细胞凋亡是由基因决定的细胞自动结束生命的过程，又称细胞编程性死亡，是主动、对机体有利的过程；被动死亡属于坏死而非凋亡。本题选B。' },
      { type: 'choice', question: '关于细胞凋亡与细胞坏死的区别，叙述正确的是（  ）', options: ['二者都对机体有利', '凋亡被动、坏死主动', '凋亡对机体有利、坏死常引起炎症', '二者都不受基因控制'], answer: '凋亡对机体有利、坏死常引起炎症', explanation: '细胞凋亡受基因控制、对机体有利；细胞坏死由外界不利因素引起、细胞膜破裂内容物外溢常引发炎症，对机体有害。二者机制和结局均不同。本题选C。' },
      { type: 'fill', question: '细胞凋亡是由______决定的细胞编程性死亡。', answer: '基因', explanation: '细胞凋亡又称编程性死亡，是受基因严格调控的主动过程，用于清除多余或有害细胞以维持稳态。与被动的细胞坏死不同，凋亡的根本控制因素是基因。' },
      { type: 'fill', question: '对于多细胞生物，个体衰老的过程是组成个体的细胞普遍______的过程。', answer: '衰老', explanation: '多细胞生物个体衰老并不是所有细胞同时衰老，而是体内细胞普遍处于衰老状态的体现；与此同时体内仍有新生细胞。这是个体与细胞衰老关系的核心结论。' }
    ]
  });
})();
