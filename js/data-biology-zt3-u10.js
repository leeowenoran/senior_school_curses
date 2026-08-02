/* 生物学 · 高三复习 · 稳态与调节 · 第3章 · 课时：第2节 激素调节的过程（一）血糖平衡调节 */
(function () {
  var v = gzGetVolume('biology', 'zt3');
  if (!v) return;
  v.points.push({
    id: 'zt3-u10',
    name: '第2节 激素调节的过程（一）血糖平衡调节',
    chapter: '稳态与调节 · 第3章 体液调节',
    difficulty: '基础',
    content: [
      { type: 'heading', text: '一、血糖的来源与去路' },
      { type: 'paragraph', text: '<strong>血糖</strong>指的是血液中的葡萄糖，正常人在空腹时血糖浓度约为 3.9—6.1 mmol/L。血糖是细胞的主要能源物质，必须维持在一个相对稳定的范围。就像水池要保持水位，血糖既有「进水口」（来源），也有「出水口」（去路），身体通过神经和激素把两者平衡住。' },
      { type: 'list', items: ['来源：食物中糖类消化吸收（主要）、肝糖原分解、非糖物质转化', '去路：氧化分解供能（主要）、合成糖原（肝糖原、肌糖原）、转化为非糖物质（脂肪、氨基酸）'] },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">血糖的来源与去路</text><rect x="40" y="130" width="180" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="130" y="165" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">血糖来源</text><rect x="260" y="120" width="160" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="165" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">血糖（3.9—6.1）</text><rect x="460" y="130" width="180" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="550" y="165" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">血糖去路</text><polygon points="221,165 198,155 198,175" fill="#3f7d1e"/><polygon points="419,165 442,155 442,175" fill="#3f7d1e"/><text x="340" y="280" font-size="13" fill="#2e3a22" text-anchor="middle">来源与去路动态平衡，使血糖浓度维持稳定。</text></svg>', caption: '图1　血糖的来源与去路保持动态平衡。' },
      { type: 'keypoint', label: '重点·血糖平衡', text: '血糖平衡是指血糖的<strong>来源和去路保持动态平衡</strong>，使血糖浓度维持在 3.9—6.1 mmol/L 左右。主要来源是食物糖类消化吸收，主要去路是氧化分解供能。调节血糖平衡的核心激素是胰岛素和胰高血糖素，二者作用相反、相互配合。' },
      { type: 'heading', text: '二、参与血糖调节的激素' },
      { type: 'table', headers: ['激素', '分泌细胞', '作用', '相互关系'], rows: [['胰岛素', '胰岛B细胞', '促进血糖去路、抑制来源，降低血糖', '与胰高血糖素拮抗'], ['胰高血糖素', '胰岛A细胞', '促进肝糖原分解和非糖转化，升高血糖', '与胰岛素拮抗'], ['肾上腺素', '肾上腺髓质', '促进肝糖原分解，升高血糖', '与胰高血糖素协同']] },
      { type: 'paragraph', text: '<strong>胰岛素</strong>由胰岛B细胞分泌，是唯一能降低血糖的激素。它像「收纳工」：促进葡萄糖进入细胞氧化分解、促进合成糖原和转化为脂肪，同时抑制肝糖原分解和非糖物质转化，从而把血糖降下来。' },
      { type: 'paragraph', text: '<strong>胰高血糖素</strong>由胰岛A细胞分泌，作用是升高血糖。它主要促进肝糖原分解成葡萄糖、促进非糖物质转化为糖，从而增加血糖来源。注意它不能促进肌糖原分解（肌糖原只供肌肉自身用）。' },
      { type: 'paragraph', text: '<strong>肾上腺素</strong>由肾上腺髓质分泌，在应急、饥饿、运动时释放，能促进肝糖原分解使血糖升高，为身体快速供能。它与胰高血糖素都能升血糖，二者作用方向一致，属于协同关系。' },
      { type: 'tip', label: '高频考点·血糖调节模型', text: '血糖调节是高考曲线题常客。核心模型：血糖升高→胰岛B细胞分泌胰岛素→血糖下降；血糖降低→胰岛A细胞分泌胰高血糖素（及肾上腺分泌肾上腺素）→血糖回升。记住「胰岛素是唯一的降血糖激素」，升血糖的有胰高血糖素和肾上腺素。选择题出现「唯一」字眼，多半考胰岛素。' },
      { type: 'list', items: ['拮抗关系：胰岛素（降血糖）与胰高血糖素（升血糖）作用相反，相互拮抗', '协同关系：肾上腺素（升血糖）与胰高血糖素（升血糖）作用相同，相互协同', '血糖平衡正是靠拮抗与协同的配合来维持稳定'] },
      { type: 'keypoint', label: '重点·拮抗与协同', text: '在血糖调节中，<strong>胰岛素与胰高血糖素拮抗</strong>（前者降、后者升，方向相反）；<strong>肾上腺素与胰高血糖素协同</strong>（二者都升血糖，方向相同）。拮抗使血糖不偏高也不偏低，协同在应急时快速升糖，二者共同维持血糖稳态。' },
      { type: 'warn', label: '易错·胰岛素不等于胰高血糖素', text: '易错点：胰岛素和胰高血糖素都来自胰岛，但分泌细胞、作用完全相反，别搞混。胰岛素由<strong>胰岛B细胞</strong>分泌、<strong>降血糖</strong>；胰高血糖素由<strong>胰岛A细胞</strong>分泌、<strong>升血糖</strong>。考试常把「B/A细胞」「降/升血糖」错配，答题前先在草稿纸上分清楚「B降A升」。另外，唯一能降血糖的激素是胰岛素，胰高血糖素和肾上腺素都升血糖。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">血糖相关激素的关系</text><rect x="50" y="90" width="170" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="135" y="130" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">胰岛素（降）</text><polygon points="221,125 198,115 198,135" fill="#3f7d1e"/><rect x="240" y="90" width="170" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="325" y="130" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">胰高血糖素（升）</text><polygon points="360,125 383,115 383,135" fill="#3f7d1e"/><rect x="430" y="200" width="200" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="530" y="240" font-size="14" fill="#2e3a22" text-anchor="middle" font-weight="bold">肾上腺素（升）</text><text x="135" y="200" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">与胰高血糖素拮抗</text><text x="530" y="120" font-size="13" fill="#5aa832" text-anchor="middle" font-weight="bold">与胰高血糖素协同</text><text x="340" y="290" font-size="13" fill="#2e3a22" text-anchor="middle">胰岛素与胰高血糖素拮抗，肾上腺素与胰高血糖素协同。</text></svg>', caption: '图2　胰岛素与胰高血糖素拮抗，肾上腺素与胰高血糖素协同。' },
      { type: 'heading', text: '三、血糖平衡的调节过程' },
      { type: 'paragraph', text: '当血糖浓度升高（如进食后），胰岛B细胞受刺激分泌胰岛素，使血糖下降；当血糖浓度降低（如饥饿时），胰岛A细胞分泌胰高血糖素、肾上腺分泌肾上腺素，使血糖回升。一旦血糖回到正常，相关激素分泌就减少，这种「产物增多反向抑制源头」的机制叫<strong>负反馈</strong>，它是维持稳态的核心机制。' },
      { type: 'example', label: '例题·血糖调节', text: '题目：进食后血糖浓度升高，此时体内分泌量明显增加的激素是？<br>A. 胰岛素　B. 胰高血糖素　C. 肾上腺素　D. 甲状腺激素<br>解析：进食后血糖升高，机体需要把血糖降下来。胰岛B细胞会分泌胰岛素促进葡萄糖的摄取、利用和储存，使血糖下降，因此胰岛素分泌量明显增加。胰高血糖素和肾上腺素都是升血糖激素，在血糖低时才增加；甲状腺激素主要调节代谢速率，与餐后降糖无关。故选 A（胰岛素）。' },
      { type: 'svg', svg: '<svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="320" fill="#eef6e4"/><text x="340" y="34" font-size="17" font-weight="bold" fill="#3f7d1e" text-anchor="middle">血糖平衡的负反馈调节</text><rect x="40" y="130" width="170" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="125" y="170" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">血糖升高</text><polygon points="211,165 188,155 188,175" fill="#3f7d1e"/><rect x="250" y="130" width="180" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="340" y="165" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">胰岛素分泌增加</text><polygon points="431,165 408,155 408,175" fill="#3f7d1e"/><rect x="450" y="130" width="180" height="70" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/><text x="540" y="165" font-size="13" fill="#2e3a22" text-anchor="middle" font-weight="bold">血糖回正常</text><polygon points="500,205 480,225 520,225" fill="#3f7d1e"/><text x="340" y="280" font-size="13" fill="#2e3a22" text-anchor="middle">血糖升高→胰岛素增加→血糖下降（负反馈），维持稳态。</text></svg>', caption: '图3　血糖升高触发胰岛素分泌，经负反馈使血糖回稳。' },
      { type: 'tip', label: '提示·负反馈答题', text: '「负反馈」是调节类大题的万能关键词。凡是问「如何维持稳态」「为什么不会一直升高/降低」，标准思路都是：某一指标偏离正常→相应激素/神经调节使其回正常→指标恢复正常后调节减弱，即负反馈。血糖、体温、水盐、甲状腺激素调节通通适用这一模板。' },
      { type: 'paragraph', text: '总结：血糖平衡靠多种激素协同与拮抗共同维持，其中胰岛素是唯一的降血糖激素，胰高血糖素和肾上腺素升血糖。整个调节以负反馈为基础，使血糖浓度始终稳定在 3.9—6.1 mmol/L 左右，为细胞供能提供可靠保障。' }
    ],
    exercises: [
      { type: 'choice', question: '下列关于血糖调节激素的叙述，正确的是？', options: ['胰岛素由胰岛A细胞分泌', '胰高血糖素能降低血糖', '胰岛素是唯一的降血糖激素', '肾上腺素能降低血糖'], answer: '胰岛素是唯一的降血糖激素', explanation: '胰岛素由胰岛B细胞分泌，是唯一能够降低血糖的激素，该项正确。胰高血糖素由胰岛A细胞分泌，作用是升高血糖，不是降低；肾上腺素在应急时促进肝糖原分解，也是升高血糖。因此正确的叙述是胰岛素是唯一的降血糖激素。' },
      { type: 'choice', question: '在血糖调节中，胰岛素与胰高血糖素的关系是？', options: ['协同，都升血糖', '协同，都降血糖', '拮抗，作用相反', '无关，互不影响'], answer: '拮抗，作用相反', explanation: '胰岛素促进血糖进入细胞并转化为糖原和脂肪，从而降低血糖；胰高血糖素促进肝糖原分解和非糖物质转化，从而升高血糖。二者作用方向相反，相互配合维持血糖稳定，这种关系称为拮抗。因此胰岛素与胰高血糖素是拮抗关系，作用相反。故选该项。' },
      { type: 'choice', question: '进食后血糖浓度升高，此时分泌量明显增加、使血糖下降的激素是？', options: ['胰岛素', '胰高血糖素', '肾上腺素', '甲状腺激素'], answer: '胰岛素', explanation: '进食后血糖升高，胰岛B细胞受到高血糖刺激，分泌胰岛素增加。胰岛素促进全身细胞摄取、利用和储存葡萄糖，使血糖浓度下降，从而恢复正常。胰高血糖素和肾上腺素在血糖偏低时才升高分泌，甲状腺激素主要调节基础代谢，不直接降糖。因此进食后使血糖下降的激素是胰岛素。' },
      { type: 'fill', question: '胰岛素由胰岛___细胞分泌，其作用是降低血糖。', answer: 'B', explanation: '胰岛中有两种关键细胞：胰岛B细胞分泌胰岛素，胰岛A细胞分泌胰高血糖素。胰岛素是唯一降血糖的激素，它促进葡萄糖进入细胞氧化分解、促进合成糖原和转化为脂肪，同时抑制肝糖原分解。因此分泌胰岛素的是胰岛B细胞，填空为B。' },
      { type: 'fill', question: '血糖平衡的调节方式属于___反馈调节（填「正」或「负」），即血糖恢复正常后相关激素分泌减少。', answer: '负', explanation: '当血糖偏离正常时，机体通过激素调节使其回到正常水平，而一旦血糖恢复正常，相关激素的分泌就会减少，这种「偏离→调节→回稳→调节减弱」的机制就是负反馈。负反馈是维持内环境稳态的核心机制，不仅血糖，体温、水盐、甲状腺激素等调节也都依赖负反馈。因此填负。' }
    ]
  });
})();
