/* ============================================================
 * 高中预习网站 · 学科数据框架
 * 11 门高中学科，按新课标（2019人教版/统编版等）教材册次组织
 * 每册 points 暂为空数组，内容后续逐科补充
 * ============================================================ */

var GZ_SUBJECTS = [
  {
    id: 'chinese', name: '语文', icon: '📖', color: '#e05d44',
    desc: '统编版高中语文，阅读与写作、古诗文、整本书阅读',
    volumes: [
      { id: 'bx1', name: '必修 上册', desc: '青春激扬、劳动光荣、生命的诗意、我们的家园等单元', points: [] },
      { id: 'bx2', name: '必修 下册', desc: '中华文明之光、良知与悲悯、观察与批判等单元', points: [] },
      { id: 'xb1', name: '选择性必修 上册', desc: '伟大的复兴、百家争鸣、逻辑的力量、古典诗文研习', points: [] },
      { id: 'xb2', name: '选择性必修 中册', desc: '苦难与新生、丰富的心灵、历史的现场', points: [] },
      { id: 'xb3', name: '选择性必修 下册', desc: '诗意的探寻、时代镜像、至情至性', points: [] }
    ]
  },
  {
    id: 'math', name: '数学', icon: '🔢', color: '#4a7de0',
    desc: '人教A版高中数学，函数、几何、代数、概率统计',
    volumes: [
      { id: 'bx1', name: '必修 第一册', desc: '集合与常用逻辑用语、不等式、函数、三角函数', points: [] },
      { id: 'bx2', name: '必修 第二册', desc: '平面向量、复数、立体几何初步、统计与概率', points: [] },
      { id: 'xb1', name: '选择性必修 第一册', desc: '空间向量、直线和圆、圆锥曲线', points: [] },
      { id: 'xb2', name: '选择性必修 第二册', desc: '数列、一元函数的导数及其应用', points: [] },
      { id: 'xb3', name: '选择性必修 第三册', desc: '计数原理、随机变量、成对数据的统计分析', points: [] }
    ]
  },
  {
    id: 'english', name: '英语', icon: '🔤', color: '#9c56d4',
    desc: '人教版高中英语，词汇语法、阅读理解、写作表达',
    volumes: [
      { id: 'bx1', name: '必修 第一册', desc: 'Teenage Life / Travelling Around / Sports 等主题单元', points: [] },
      { id: 'bx2', name: '必修 第二册', desc: 'Cultural Heritage / Wildlife Protection / The Internet 等', points: [] },
      { id: 'bx3', name: '必修 第三册', desc: 'Festivals / Morals and Virtues / Space Exploration 等', points: [] },
      { id: 'xb1', name: '选择性必修 第一册', desc: 'People of Achievement / Looking into the Future 等', points: [] },
      { id: 'xb2', name: '选择性必修 第二册', desc: 'Science and Scientists / Bridging Cultures 等', points: [] },
      { id: 'xb3', name: '选择性必修 第三册', desc: 'Art / Healthy Lifestyle / Environmental Protection 等', points: [] },
      { id: 'xb4', name: '选择性必修 第四册', desc: 'Science Fiction / Sharing / Adversity and Courage 等', points: [] }
    ]
  },
  {
    id: 'physics', name: '物理', icon: '⚛️', color: '#2e9e8f',
    desc: '人教版高中物理，力学、电磁学、热学、近代物理',
    volumes: [
      { id: 'bx1', name: '必修 第一册', desc: '运动的描述、匀变速直线运动、相互作用、运动定律', points: [] },
      { id: 'bx2', name: '必修 第二册', desc: '曲线运动、万有引力、机械能守恒', points: [] },
      { id: 'bx3', name: '必修 第三册', desc: '静电场、电路、电磁场与电磁波初步', points: [] },
      { id: 'xb1', name: '选择性必修 第一册', desc: '动量守恒、机械振动与机械波、光', points: [] },
      { id: 'xb2', name: '选择性必修 第二册', desc: '磁场、电磁感应、交变电流', points: [] },
      { id: 'xb3', name: '选择性必修 第三册', desc: '分子动理论、气体、热力学定律、原子物理', points: [] }
    ]
  },
  {
    id: 'chemistry', name: '化学', icon: '🧪', color: '#e0862e',
    desc: '人教版高中化学，物质结构、化学反应、有机化学',
    volumes: [
      { id: 'bx1', name: '必修 第一册', desc: '物质及其变化、海水中的重要元素、铁 金属材料、物质结构 元素周期律', points: [] },
      { id: 'bx2', name: '必修 第二册', desc: '化工生产中的重要非金属元素、化学反应与能量、有机化合物、化学与可持续发展', points: [] },
      { id: 'xb1', name: '选择性必修1 化学反应原理', desc: '反应热、化学反应速率与平衡、水溶液中的离子反应、电化学', points: [] },
      { id: 'xb2', name: '选择性必修2 物质结构与性质', desc: '原子结构与性质、分子结构与性质、晶体结构与性质', points: [] },
      { id: 'xb3', name: '选择性必修3 有机化学基础', desc: '有机化合物的结构特点、烃、烃的衍生物、生物大分子、合成高分子', points: [] }
    ]
  },
  {
    id: 'biology', name: '生物学', icon: '🧬', color: '#5aa832',
    desc: '人教版高中生物学，细胞、遗传、稳态、生态与工程',
    volumes: [
      { id: 'bx1', name: '必修1 分子与细胞', desc: '细胞的分子组成、结构、代谢、生命历程', points: [] },
      { id: 'bx2', name: '必修2 遗传与进化', desc: '遗传因子的发现、基因和染色体、DNA、生物的进化', points: [] },
      { id: 'xb1', name: '选择性必修1 稳态与调节', desc: '内环境稳态、神经调节、体液调节、免疫调节、植物激素', points: [] },
      { id: 'xb2', name: '选择性必修2 生物与环境', desc: '种群、群落、生态系统、人与环境', points: [] },
      { id: 'xb3', name: '选择性必修3 生物技术与工程', desc: '发酵工程、细胞工程、基因工程、生物技术安全与伦理', points: [] }
    ]
  },
  {
    id: 'politics', name: '思想政治', icon: '⚖️', color: '#d4485a',
    desc: '统编版高中思想政治，经济、政治、法治、哲学与文化',
    volumes: [
      { id: 'bx1', name: '必修1 中国特色社会主义', desc: '社会主义从空想到科学、从理论到实践的发展', points: [] },
      { id: 'bx2', name: '必修2 经济与社会', desc: '基本经济制度、经济发展与社会进步', points: [] },
      { id: 'bx3', name: '必修3 政治与法治', desc: '党的领导、人民当家作主、全面依法治国', points: [] },
      { id: 'bx4', name: '必修4 哲学与文化', desc: '辩证唯物主义、历史唯物主义、文化传承与创新', points: [] },
      { id: 'xb1', name: '选择性必修1 当代国际政治与经济', desc: '国际关系、世界多极化、经济全球化', points: [] },
      { id: 'xb2', name: '选择性必修2 法律与生活', desc: '民事权利与义务、家庭与婚姻、就业与创业', points: [] },
      { id: 'xb3', name: '选择性必修3 逻辑与思维', desc: '科学思维、逻辑思维规则、辩证思维方法', points: [] }
    ]
  },
  {
    id: 'history', name: '历史', icon: '📜', color: '#a0713c',
    desc: '统编版高中历史，中外历史纲要与专题史',
    volumes: [
      { id: 'bx1', name: '必修 中外历史纲要（上）', desc: '中国古代史、近代史、现代史通贯脉络', points: [] },
      { id: 'bx2', name: '必修 中外历史纲要（下）', desc: '世界古代、近代、现代史通贯脉络', points: [] },
      { id: 'xb1', name: '选择性必修1 国家制度与社会治理', desc: '政治制度、官员选拔、法律教化、货币赋税', points: [] },
      { id: 'xb2', name: '选择性必修2 经济与社会生活', desc: '食物生产、生产工具、商业贸易、居住环境', points: [] },
      { id: 'xb3', name: '选择性必修3 文化交流与传播', desc: '多样文化、人口迁徙、商路贸易、战争与文化', points: [] }
    ]
  },
  {
    id: 'geography', name: '地理', icon: '🗺️', color: '#3389c4',
    desc: '人教版高中地理，自然地理、人文地理、区域发展',
    volumes: [
      { id: 'bx1', name: '必修 第一册', desc: '宇宙中的地球、大气、水、地貌、植被与土壤、自然灾害', points: [] },
      { id: 'bx2', name: '必修 第二册', desc: '人口、乡村和城镇、产业区位、交通运输、环境与发展', points: [] },
      { id: 'xb1', name: '选择性必修1 自然地理基础', desc: '地球运动、地表形态、大气环流、水的运动、自然环境整体性', points: [] },
      { id: 'xb2', name: '选择性必修2 区域发展', desc: '区域类型、区域发展、区域联系与区域协调', points: [] },
      { id: 'xb3', name: '选择性必修3 资源、环境与国家安全', desc: '自然资源、环境安全、生态保护与国家安全', points: [] }
    ]
  },
  {
    id: 'it', name: '信息技术', icon: '💻', color: '#6266d9',
    desc: '高中信息技术，数据与计算、信息系统与社会',
    volumes: [
      { id: 'bx1', name: '必修1 数据与计算', desc: '数据与信息、算法与程序实现、数据处理与应用', points: [] },
      { id: 'bx2', name: '必修2 信息系统与社会', desc: '信息社会、信息系统的组成与应用、信息安全', points: [] }
    ]
  },
  {
    id: 'tech', name: '通用技术', icon: '🔧', color: '#2f9e6b',
    desc: '高中通用技术，技术与设计',
    volumes: [
      { id: 'bx1', name: '必修 技术与设计1', desc: '技术及其性质、设计过程、设计的交流与评价', points: [] },
      { id: 'bx2', name: '必修 技术与设计2', desc: '结构与设计、流程与设计、系统与设计、控制与设计', points: [] }
    ]
  }
];

/* ---------- 高三总复习专题 ----------
 * 高三不学新课，以一轮、二轮总复习为主。这里为每科预置若干「复习专题」，
 * 作为 grade:'高三' 的册次接入统一渲染管线，points 暂留空待填。 */
var GZ_REVIEW = {
  chinese:   [['现代文阅读','信息类文本阅读（论述类/实用类：社科论文、新闻、传记）、文学类文本阅读（小说、散文）'],['古诗文阅读','文言文阅读（断句、实词虚词、文意概括、翻译）、古代诗歌鉴赏、名篇名句默写（理解性默写）'],['语言文字运用','字音字形、词语/成语辨析、病句辨析与修改、语句衔接与排序、修辞手法、语言表达'],['写作专题','材料作文、命题/半命题作文、话题作文、任务驱动型作文']],
  math:      [['函数与导数','函数性质、导数应用与压轴突破'],['三角与向量','三角函数、解三角形与平面向量'],['数列专题','等差等比、通项与求和'],['立体几何','空间向量与几何证明'],['解析几何','直线、圆与圆锥曲线'],['概率统计','排列组合、分布列与统计分析']],
  english:   [['词汇与语法','高频词汇、时态语态与从句系统梳理'],['完形与阅读','完形填空、阅读理解与七选五'],['语法填空','语篇型语法填空专练'],['书面表达','应用文与读后续写']],
  physics:   [['力学综合','运动、力、功能关系与动量'],['电磁学综合','电场、磁场、电路与电磁感应'],['热学与近代物理','热学、光学、原子物理'],['实验专题','力电实验设计与数据处理'],['计算压轴','综合计算题突破']],
  chemistry: [['基本概念与原理','物质结构、反应原理与平衡'],['元素化合物','金属、非金属及其化合物'],['有机化学','结构、性质与合成推断'],['化学实验','实验设计、探究与评价'],['化学计算','化学计算综合']],
  biology:   [['分子与细胞','细胞结构、代谢与生命历程'],['遗传与进化','遗传规律、变异与进化'],['稳态与调节','内环境、神经体液与免疫'],['生物与环境','种群、群落与生态系统'],['实验与探究','实验设计与科学探究']],
  politics:  [['经济与社会','生产、分配、市场与经济发展'],['政治与法治','政治制度、法治与国际关系'],['哲学与文化','辩证唯物主义、历史唯物主义与文化'],['时政热点','年度重大时政与热点分析']],
  history:   [['中国古代史','政治、经济、思想文化通史'],['中国近现代史','近代屈辱抗争与现代化进程'],['世界史','世界古代、近代与现代史'],['专题史与素养','制度、经济、文化专题与史学方法']],
  geography: [['自然地理','大气、水、地貌与自然环境'],['人文地理','人口、城市、产业与交通'],['区域地理','区域认知与区域发展'],['图表判读','等值线、统计图与地理实践']],
  it:        [['数据与算法','数据表示、算法与程序设计'],['信息系统与安全','信息系统、网络与信息安全']],
  tech:      [['技术与设计理论','技术性质与设计过程'],['结构流程系统','结构、流程、系统与控制']]
};
GZ_SUBJECTS.forEach(function (s) {
  var list = GZ_REVIEW[s.id] || [];
  list.forEach(function (item, i) {
    s.volumes.push({ id: 'zt' + (i + 1), name: item[0], desc: item[1], points: [], grade: '高三' });
  });
});

/* ---------- 年级标注 ----------
 * 新课标教材不按年级命名，这里按通行教学进度标注大致年级归属：
 * 必修（bx*）→ 高一；选择性必修（xb*）→ 高二；高三为总复习专题（zt*）。
 * 若个别册次需要特殊归属，可直接在上方数据中手写 grade 字段覆盖。 */
GZ_SUBJECTS.forEach(function (s) {
  s.volumes.forEach(function (v) {
    if (!v.grade) v.grade = (v.id.indexOf('xb') === 0) ? '高二' : '高一';
  });
});

/* 按年级分组学科的册次：返回 [{grade, vols}]，只含有册次的年级 */
function gzGradeGroups(subject) {
  var order = ['高一', '高二', '高三'];
  var map = {};
  subject.volumes.forEach(function (v) {
    (map[v.grade] = map[v.grade] || []).push(v);
  });
  var groups = [];
  order.forEach(function (g) { if (map[g]) groups.push({ grade: g, vols: map[g] }); });
  return groups;
}

/* ---------- 辅助函数 ---------- */
function gzGetSubject(id) {
  for (var i = 0; i < GZ_SUBJECTS.length; i++) {
    if (GZ_SUBJECTS[i].id === id) return GZ_SUBJECTS[i];
  }
  return null;
}
function gzGetVolume(subjectId, volumeId) {
  var s = gzGetSubject(subjectId);
  if (!s) return null;
  for (var i = 0; i < s.volumes.length; i++) {
    if (s.volumes[i].id === volumeId) return s.volumes[i];
  }
  return null;
}
/* 站点统计（volumes 仅计教材册数，不含高三专题；topics 为高三专题数） */
function gzStats() {
  var subjects = GZ_SUBJECTS.length, volumes = 0, topics = 0, points = 0;
  GZ_SUBJECTS.forEach(function (s) {
    s.volumes.forEach(function (v) {
      if (v.grade === '高三') topics++; else volumes++;
      // 懒加载下 v.points 可能尚未注入；优先用 v.units（首屏恒有），回退 v.points
      var cnt = (v.units && v.units.length) ? v.units.length : ((v.points && v.points.length) || 0);
      points += cnt;
    });
  });
  return { subjects: subjects, volumes: volumes, topics: topics, points: points };
}
