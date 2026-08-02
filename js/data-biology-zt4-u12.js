/* 生物学 · 高三复习 · 生物与环境 · 第3章 · 课时：能量流动（二）计算与实践 */
(function () {
  var v = gzGetVolume('biology', 'zt4');
  if (!v) return;
  v.points.push({
    id: 'zt4-u12',
    name: '第2节 能量流动（二）计算与实践',
    chapter: '生物与环境 · 第3章 生态系统及其稳定性',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、某一营养级同化量的去向' },
      { type: 'paragraph', text: '某一营养级同化的能量，有四个主要去向：一部分用于呼吸作用以热能散失；一部分被下一营养级同化；一部分被分解者分解利用；还有一部分既未被下一营养级利用、也未被分解者利用，称为未利用部分（最终也会自然死亡后被分解）。' },
      { type: 'keypoint', text: '某营养级同化量 = 呼吸消耗 + 流向下一营养级 + 流向分解者 + 未利用。这四个去向加起来正好等于该营养级的同化总量，是能量流动计算的核心关系。' },
      { type: 'paragraph', text: '理解“同化量”要区分摄入量和同化量：摄入量中有一部分以粪便形式排出，未被同化，粪便中的能量属于上一营养级流向分解者的部分，不计入本营养级同化量。' },
      { type: 'warn', text: '易错辨析：某营养级的摄入量不等于同化量。摄入量减去粪便量才是同化量；粪便中的能量归上一营养级，不能算作本营养级获得的能量。' },
      { type: 'heading', text: '二、能量金字塔' },
      { type: 'paragraph', text: '如果把各营养级的能量数值由低到高画成图，会得到一个上窄下宽的金字塔形，称为能量金字塔。它直观反映出能量沿营养级逐级递减的规律。' },
      { type: 'list', items: [
        '能量金字塔永远是正金字塔形（下宽上窄），不会出现倒置。',
        '营养级越低，所占能量越多；营养级越高，能量越少。',
        '由于能量递减，高营养级生物数量一般较少，但个数金字塔可能倒置（如树与虫）。'
      ] },
      { type: 'tip', text: '高三复习提醒：能量金字塔一定正立；数量金字塔可能倒置（如一棵树上有许多虫）；生物量金字塔一般正立，但在某些水域也可能倒置。区分三种金字塔很常考。' },
      { type: 'heading', text: '三、能量流动的实践意义' },
      { type: 'paragraph', text: '研究能量流动，可以帮助人们科学利用能量，使能量更多流向对人类有益的部分。实践中主要有两条思路：一是实现能量的多级利用，提高能量利用率；二是调整能量流动关系，使能量持续高效地流向对人类最有益的方向。' },
      { type: 'list', items: [
        '多级利用：如建立沼气池，把秸秆、粪便中的能量通过发酵产生沼气供人使用，残渣作肥料，实现层层利用。',
        '调整关系：如合理确定草场载畜量，避免过度放牧导致生产者被破坏，维持畜产品产量稳定。',
        '除草、治虫：减少能量流向杂草和害虫，让更多能量流向农作物和家禽家畜。'
      ] },
      { type: 'table', caption: '三种金字塔的对比', headers: ['金字塔类型', '是否可能倒置', '说明'], rows: [
        ['能量金字塔', '一定正立', '能量逐级递减，永不倒置'],
        ['数量金字塔', '可能倒置', '如一棵大树上有许多虫'],
        ['生物量金字塔', '一般正立，水域可能倒置', '反映各营养级总生物量']
      ] },
      { type: 'example', text: '例题：某草原生态系统，生产者同化量为 1000，初级消费者同化量为 120，次级消费者同化量为 18。① 第一到第二营养级传递效率 = 120 ÷ 1000 × 100% = 12%；② 第二到第三营养级传递效率 = 18 ÷ 120 × 100% = 15%；③ 两效率均在 10%～20% 范围内，符合逐级递减规律。' },
      { type: 'tip', text: '高频考点：传递效率计算时，分子是“下一营养级同化量”，分母是“上一营养级同化量”，注意用同化量而非摄入量或生产量。' },
      { type: 'paragraph', text: '能量利用率和传递效率不同。人类可以通过设计农业生态系统（如桑基鱼塘、沼气池）提高能量的利用率，让原本散失的能量被重新收集利用，但相邻营养级之间的传递效率仍由生物学规律决定，不会因此改变。' },
      { type: 'warn', text: '易错辨析：人类提高的是能量利用率（总输入中被人类利用的比例），不是相邻营养级的传递效率。说“建沼气池提高了传递效率”是错误的，沼气池提高的是利用率。' },
      { type: 'heading', text: '四、综合练习' },
      { type: 'list', items: [
        '同化量四去向必须记牢：呼吸、下一营养级、分解者、未利用。',
        '能量金字塔正立，数量金字塔可能倒置，二者不要混淆。',
        '实践上抓两条：多级利用提利用率、调整关系利人类。'
      ] },
      { type: 'svg', caption: '某一营养级同化量的四个去向：呼吸散失、流向下一营养级、流向分解者、未利用，四者之和等于同化总量。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">同化量的四个去向</text><rect x="270" y="70" width="140" height="46" rx="8" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="99" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">同化量</text><rect x="40" y="200" width="130" height="46" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="105" y="229" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">呼吸消耗</text><rect x="200" y="200" width="130" height="46" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="265" y="229" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">下一营养级</text><rect x="360" y="200" width="130" height="46" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="425" y="229" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">流向分解者</text><rect x="520" y="200" width="130" height="46" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="585" y="229" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">未利用</text><line x1="300" y1="116" x2="105" y2="198" stroke="#3f7d1e" stroke-width="2"/><polygon points="105,198 121,194 117,210" fill="#3f7d1e"/><line x1="320" y1="116" x2="265" y2="198" stroke="#3f7d1e" stroke-width="2"/><polygon points="265,198 281,194 277,210" fill="#3f7d1e"/><line x1="350" y1="116" x2="425" y2="198" stroke="#3f7d1e" stroke-width="2"/><polygon points="425,198 409,194 413,210" fill="#3f7d1e"/><line x1="370" y1="116" x2="585" y2="198" stroke="#3f7d1e" stroke-width="2"/><polygon points="585,198 569,194 573,210" fill="#3f7d1e"/></svg>' },
      { type: 'svg', caption: '能量金字塔：各营养级能量由低到高呈上窄下宽的正金字塔，直观反映逐级递减。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">能量金字塔</text><polygon points="120,310 560,310 470,220 210,220" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><polygon points="210,210 470,210 400,120 280,120" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><polygon points="280,110 400,110 360,50 320,50" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="270" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">生产者</text><text x="340" y="180" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">初级消费者</text><text x="340" y="90" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">次级消费者</text><text x="340" y="340" font-size="13" text-anchor="middle" fill="#5aa832" font-family="sans-serif">永远正立，下宽上窄</text></svg>' },
      { type: 'svg', caption: '实践意义：通过多级利用（如沼气池）提高能量利用率，通过调整载畜量等关系使能量流向对人类有益部分。', svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 360"><rect x="0" y="0" width="680" height="360" fill="#eef6e4"/><text x="340" y="40" font-size="22" text-anchor="middle" fill="#3f7d1e" font-family="sans-serif">能量流动的实践应用</text><rect x="60" y="100" width="240" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="180" y="125" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">途径一：多级利用</text><text x="180" y="146" font-size="12" text-anchor="middle" fill="#5aa832" font-family="sans-serif">沼气池提高利用率</text><rect x="380" y="100" width="240" height="56" rx="8" fill="#d6eac4" stroke="#3f7d1e"/><text x="500" y="125" font-size="15" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">途径二：调整关系</text><text x="500" y="146" font-size="12" text-anchor="middle" fill="#5aa832" font-family="sans-serif">合理载畜利人类</text><line x1="180" y1="180" x2="500" y2="230" stroke="#3f7d1e" stroke-width="2"/><polygon points="500,230 484,226 488,242" fill="#3f7d1e"/><text x="340" y="320" font-size="14" text-anchor="middle" fill="#2e3a22" font-family="sans-serif">目标：能量更多流向对人类有益的方向</text></svg>' }
    ],
    exercises: [
      { type: 'choice', question: '某一营养级同化量的去向不包括', options: ['呼吸消耗', '流向下一营养级', '流向分解者', '光合作用固定'], answer: '光合作用固定', explanation: '同化量有四个去向：呼吸消耗、流向下一营养级、流向分解者、未利用。光合作用是生产者输入能量的方式，不是某一营养级同化量的去向。' },
      { type: 'choice', question: '关于能量金字塔，正确的是', options: ['可能倒置', '永远正立（下宽上窄）', '与数量金字塔相同', '反映数量关系'], answer: '永远正立（下宽上窄）', explanation: '能量沿营养级逐级递减，能量金字塔始终是正立的下宽上窄形状，不会倒置；它反映的是能量而非数量关系。' },
      { type: 'choice', question: '建立沼气池主要体现了能量流动的哪一实践意义', options: ['提高能量传递效率', '实现能量多级利用提高利用率', '增加生产者数量', '缩短食物链'], answer: '实现能量多级利用提高利用率', explanation: '沼气池把废弃物中的能量通过发酵再利用，提高了能量利用率；传递效率由生物学规律决定，人类不能改变，因此说提高传递效率是错误的。' },
      { type: 'fill', question: '某营养级同化量 = 呼吸消耗 + 流向下一营养级 + 流向分解者 + ________。', answer: '未利用', explanation: '同化量有四个去向，除呼吸消耗、流向下一营养级、流向分解者外，剩余未被利用的部分称为未利用，四者之和等于该营养级同化总量。' },
      { type: 'fill', question: '合理确定草场载畜量，是为了调整能量流动关系，使能量持续高效地流向对________最有益的方向。', answer: '人类', explanation: '研究能量流动的实践意义之一，是调整能量流动关系，使能量持续高效地流向对人类最有益的部分，合理确定载畜量正是这一思路的体现。' }
    ]
  });
})();
