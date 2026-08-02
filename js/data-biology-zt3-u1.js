/* 生物学 · 高三复习 · 稳态与调节 · 第1章 · 课时：第1节 细胞生活的环境 */
(function () {
  var v = gzGetVolume('biology', 'zt3');
  if (!v) return;
  v.points.push({
    id: 'zt3-u1',
    name: '第1节 细胞生活的环境',
    chapter: '稳态与调节 · 第1章 人体的内环境与稳态',
    difficulty: '基础',
    content: [
      { type:'heading', text:'一、体液：体内液体的总称' },
      { type:'paragraph', text:'人体内的全部液体统称为体液，按照存在位置分为细胞内液和细胞外液。可以把身体想成一栋大楼，细胞是住户，体液就是楼里流动的各种液体，细胞就浸泡在液体中生活。' },
      { type:'list', items:['细胞内液：存在于细胞膜以内的液体，约占体液总量的2/3','细胞外液：存在于细胞膜以外的液体，约占体液总量的1/3','划分界线：以细胞膜为界，膜内为细胞内液，膜外为细胞外液'] },
      { type:'paragraph', text:'细胞外液具体包括血浆、组织液和淋巴液三种成分。血浆是血细胞直接生活的液体环境，组织液是绝大多数组织细胞生活的环境，淋巴液则是淋巴细胞等生活的环境。' },
      { type:'keypoint', text:'内环境是由细胞外液构成的液体环境，是细胞与外界环境进行物质交换的媒介。' },
      { type:'svg', svg:`<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="680" height="360" fill="#eef6e4"/>
  <text x="340" y="40" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="bold" fill="#3f7d1e">体液组成示意图</text>
  <rect x="80" y="90" width="250" height="220" rx="12" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="205" y="200" text-anchor="middle" font-size="18" fill="#2e3a22">细胞内液</text>
  <text x="205" y="228" text-anchor="middle" font-size="18" fill="#2e3a22">约 2/3</text>
  <rect x="360" y="90" width="240" height="220" rx="12" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="480" y="185" text-anchor="middle" font-size="18" fill="#2e3a22">细胞外液</text>
  <text x="480" y="213" text-anchor="middle" font-size="18" fill="#2e3a22">约 1/3</text>
  <text x="480" y="248" text-anchor="middle" font-size="14" fill="#5aa832">血浆/组织液/淋巴液</text>
  <polygon points="330,160 360,145 360,175" fill="#3f7d1e"/>
</svg>`, caption:'体液以细胞膜为界分为细胞内液和细胞外液，细胞外液约占体液总量的1/3。' },
      { type:'table', headers:['成分','存在部位','生活的细胞','说明'], rows:[
        ['血浆','血管腔内','血细胞','血细胞直接生活的液体环境'],
        ['组织液','组织细胞间隙','绝大多数组织细胞','经毛细血管壁与血浆相通'],
        ['淋巴液','淋巴管内','淋巴细胞等','经淋巴循环汇入血浆']
      ] },
      { type:'paragraph', text:'血浆、组织液和淋巴液之间并不是彼此孤立的，物质可以在它们之间相互渗透，共同维持细胞生活的稳定环境。' },
      { type:'svg', svg:`<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="680" height="360" fill="#eef6e4"/>
  <text x="340" y="40" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="bold" fill="#3f7d1e">细胞外液三者关系</text>
  <rect x="60" y="120" width="150" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="135" y="168" text-anchor="middle" font-size="16" fill="#2e3a22">血浆</text>
  <rect x="265" y="120" width="150" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="340" y="168" text-anchor="middle" font-size="16" fill="#2e3a22">组织液</text>
  <rect x="470" y="120" width="150" height="90" rx="10" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="545" y="168" text-anchor="middle" font-size="16" fill="#2e3a22">淋巴液</text>
  <polygon points="210,150 265,140 265,160" fill="#3f7d1e"/>
  <polygon points="225,175 265,165 265,185" fill="#3f7d1e"/>
  <polygon points="415,140 470,130 470,150" fill="#3f7d1e"/>
  <line x1="220" y1="255" x2="440" y2="255" stroke="#3f7d1e" stroke-width="2"/>
  <polygon points="440,255 410,245 410,265" fill="#3f7d1e"/>
  <text x="205" y="112" text-anchor="middle" font-size="12" fill="#5aa832">经毛细血管壁</text>
  <text x="448" y="125" text-anchor="middle" font-size="12" fill="#5aa832">经毛细淋巴管壁</text>
  <text x="330" y="288" text-anchor="middle" font-size="13" fill="#5aa832">淋巴循环回血浆</text>
</svg>`, caption:'血浆与组织液双向渗透，组织液单向进入淋巴液，淋巴液经淋巴循环回到血浆。' },
      { type:'list', items:['血浆和组织液之间可相互渗透（隔着毛细血管壁）','组织液可单向进入淋巴液（隔着毛细淋巴管壁）','淋巴液通过淋巴循环最终重新汇入血浆','三者共同组成细胞生活的内环境'] },
      { type:'warn', text:'易错辨析：单细胞生物（如草履虫）直接生活在外界水环境中，直接与外界交换物质；而多细胞生物（包括人）的细胞必须通过内环境这一媒介才能与外界交换，不能直接与外界接触。' },
      { type:'paragraph', text:'内环境的理化性质主要包括渗透压、酸碱度和温度三个方面，机体通过各种调节使它们保持在相对稳定的范围内。' },
      { type:'list', items:['渗透压：血浆约770 kPa，主要取决于NaCl和血浆蛋白','酸碱度：pH 7.35～7.45，靠缓冲对维持','温度：一般维持在约37℃'] },
      { type:'keypoint', text:'正常血浆pH维持在7.35～7.45，主要依靠H₂CO₃/NaHCO₃等缓冲对中和进入的酸或碱，避免pH剧烈波动。' },
      { type:'svg', svg:`<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="680" height="360" fill="#eef6e4"/>
  <text x="340" y="40" text-anchor="middle" font-size="22" font-family="sans-serif" font-weight="bold" fill="#3f7d1e">血浆 pH 缓冲对</text>
  <rect x="80" y="110" width="220" height="120" rx="12" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="190" y="160" text-anchor="middle" font-size="18" fill="#2e3a22">酸性物质进入</text>
  <text x="190" y="190" text-anchor="middle" font-size="16" fill="#5aa832">NaHCO₃ 中和</text>
  <rect x="380" y="110" width="220" height="120" rx="12" fill="#d6eac4" stroke="#3f7d1e" stroke-width="2"/>
  <text x="490" y="160" text-anchor="middle" font-size="18" fill="#2e3a22">碱性物质进入</text>
  <text x="490" y="190" text-anchor="middle" font-size="16" fill="#5aa832">H₂CO₃ 中和</text>
  <polygon points="300,170 380,160 380,180" fill="#3f7d1e"/>
  <polygon points="380,170 300,160 300,180" fill="#3f7d1e"/>
  <text x="340" y="300" text-anchor="middle" font-size="15" fill="#2e3a22">缓冲对使 pH 稳定在 7.35～7.45</text>
</svg>`, caption:'血浆依靠 H₂CO₃/NaHCO₃ 缓冲对中和进入的酸或碱，维持 pH 稳定。' },
      { type:'example', text:'例题：下列全部属于内环境组成成分的是（ ）。A 血浆、细胞内液、组织液 B 血浆、组织液、淋巴液 C 血液、组织液、淋巴液 D 细胞内液、淋巴液、消化液。思路：内环境等于细胞外液，细胞内液、消化液都不属于内环境，血液还包含血细胞，只有血浆是细胞外液。因此选B。' },
      { type:'tip', text:'高频考点：常考内环境的判断。记忆口诀——细胞内液不算内环境、外分泌液（消化液、汗液、尿液）不算内环境、血浆不等于血液（血液还含血细胞）。遇到成分判断题先问一句：它在细胞外吗、它直接存在于体内液体吗。' },
      { type:'paragraph', text:'本节要抓住一个核心：内环境就是细胞外液，不包括细胞内液；细胞必须通过内环境才能与外界进行物质交换。复习时建议用箭头图记忆三者关系与理化性质。' },
      { type:'heading', text:'二、本节复习框架' },
      { type:'list', items:['体液=细胞内液+细胞外液','细胞外液=血浆+组织液+淋巴液=内环境','内环境是细胞与外界物质交换的媒介','理化性质：渗透压、pH、温度'] }
    ],
    exercises: [
      { type:'choice', question:'下列关于内环境的定义，正确的是（ ）。', options:['由细胞内液构成的液体环境','由细胞外液构成的液体环境','由血浆和组织液构成的液体环境','由淋巴液构成的液体环境'], answer:'由细胞外液构成的液体环境', explanation:'内环境是由细胞外液构成的液体环境，包括血浆、组织液和淋巴液。细胞内液在细胞膜以内，不属于内环境。本题关键在于区分细胞内液和细胞外液，识记内环境等于细胞外液即可正确作答。' },
      { type:'choice', question:'体液以细胞膜为界分为细胞内液和细胞外液，其中约占体液总量2/3的是（ ）。', options:['细胞内液','细胞外液','血浆','组织液'], answer:'细胞内液', explanation:'体液以细胞膜为界分为细胞内液和细胞外液，其中细胞内液约占体液总量的2/3，细胞外液约占1/3。记忆时可联想细胞内液占大多数，是细胞自身内部的液体，复习时结合饼图记忆比例。' },
      { type:'choice', question:'正常人血浆的pH通常稳定保持在（ ）。', options:['6.9～7.1','7.35～7.45','7.8～8.0','8.5～9.0'], answer:'7.35～7.45', explanation:'正常人血浆pH通常稳定在7.35～7.45的弱碱性范围，主要依靠H₂CO₃/NaHCO₃等缓冲对调节。若pH大幅偏离此范围会影响酶的活性，进而危害健康，因此缓冲对是高频考点。' },
      { type:'fill', question:'细胞外液包括血浆、组织液和______。', answer:'淋巴液', explanation:'细胞外液包括血浆、组织液和淋巴液三种具体成分，它们共同构成内环境。注意血液包含血细胞和血浆，血浆才是细胞外液的一部分，做题时不要把血液等同于血浆。' },
      { type:'fill', question:'维持血浆pH相对稳定的重要缓冲对是H₂CO₃和______。', answer:'NaHCO₃', explanation:'血浆pH能保持相对稳定，主要依靠缓冲物质，最重要的是碳酸和碳酸氢钠这一缓冲对，即H₂CO₃/NaHCO₃，能中和进入血浆的多余酸或碱，使pH维持在正常范围。' }
    ]
  });
})();
