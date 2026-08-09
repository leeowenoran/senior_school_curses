(function () {
  var v = gzGetVolume('chinese', 'xb2');
  if (!v) return;
  v.points.push(

    /* ============ 第二单元 第1课 ============ */
    {
      id: 'xb2-u2-l1',
      cover: 'assets/cover/chinese/xb2-u2-l1.svg',
      name: '《记念刘和珍君》',
      author: '鲁迅',
      chapter: '第二单元 苦难与新生（中国革命传统作品研习）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、写作背景与文体' },
        { type: 'paragraph', text: '本文写于1926年4月，是为纪念在“三·一八”惨案中遇害的北京女子师范大学学生刘和珍等烈士而作。1926年3月18日，北洋军阀段祺瑞执政府血腥镇压徒手请愿群众，造成四十余人死亡，史称“三·一八”惨案。鲁迅称这一天为“民国以来最黑暗的一天”。' },
        { type: 'keypoint', label: '核心情感', text: '全文贯穿两种交织的情感：对烈士的<strong>沉痛悼念</strong>与对反动势力的<strong>满腔悲愤</strong>。悲与愤交融，是理解本文情感基调的钥匙。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="80" width="130" height="70" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="85" y="112" font-size="14" fill="#1a3c8a" text-anchor="middle">黑暗时局</text><text x="85" y="132" font-size="12" fill="#1a3c8a" text-anchor="middle">段祺瑞执政</text><rect x="190" y="80" width="130" height="70" rx="8" fill="#fef7e0" stroke="#f9ab00" stroke-width="2"/><text x="255" y="112" font-size="14" fill="#8a6d00" text-anchor="middle">民众请愿</text><text x="255" y="132" font-size="12" fill="#8a6d00" text-anchor="middle">三·一八</text><rect x="360" y="80" width="130" height="70" rx="8" fill="#fdecea" stroke="#e05d44" stroke-width="2"/><text x="425" y="112" font-size="14" fill="#a3331f" text-anchor="middle">军阀镇压</text><text x="425" y="132" font-size="12" fill="#a3331f" text-anchor="middle">枪杀徒手</text><rect x="530" y="80" width="130" height="70" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="595" y="112" font-size="14" fill="#1e6b34" text-anchor="middle">鲁迅作文</text><text x="595" y="132" font-size="12" fill="#1e6b34" text-anchor="middle">记念烈士</text><path d="M150 115 L190 115 M320 115 L360 115 M490 115 L530 115" stroke="#333" stroke-width="2" marker-end="url(#l1a)"/><defs><marker id="l1a" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="200" font-size="14" fill="#555" text-anchor="middle">从黑暗时局到血腥镇压，催生了《记念刘和珍君》</text></svg>', caption: '“三·一八”惨案始末：时局黑暗—民众请愿—军阀镇压—鲁迅作文悼念。' },
        { type: 'heading', text: '二、思想内涵：悲愤交织，悼念与批判' },
        { type: 'list', items: [
          '悼念烈士：深情追忆刘和珍温和、毅然的形象，肯定其勇毅。',
          '控诉暴行：揭露段祺瑞执政府枪杀徒手请愿群众的滔天罪行。',
          '批判文人：指斥所谓“学者文人”替屠夫辩饰、散布“流言”的无耻。',
          '呼唤猛士：呼唤敢于直面惨淡人生的真的猛士，奋然前行。'
        ] },
        { type: 'paragraph', text: '鲁迅并未停留于悲哀，而是将悲哀化为愤怒、将愤怒化为力量。他反复申说“有写一点东西的必要”，正是对烈士的负责，也是对谎言的反击。' },
        { type: 'table', headers: ['情感维度', '具体表现', '写作意图'], rows: [
          ['悲（悼念）', '追忆刘和珍的微笑与勇毅', '铭记烈士，褒扬正义'],
          ['愤（控诉）', '直斥执政府与流言家', '揭露黑暗，唤醒民众'],
          ['勇（呼唤）', '呼唤真的猛士奋然前行', '指向未来，鼓舞抗争']
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><circle cx="130" cy="80" r="44" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="130" y="76" font-size="15" fill="#1a3c8a" text-anchor="middle">悲</text><text x="130" y="96" font-size="12" fill="#1a3c8a" text-anchor="middle">悼念烈士</text><circle cx="340" cy="80" r="44" fill="#fdecea" stroke="#e05d44" stroke-width="2"/><text x="340" y="76" font-size="15" fill="#a3331f" text-anchor="middle">愤</text><text x="340" y="96" font-size="12" fill="#a3331f" text-anchor="middle">控诉暴行</text><circle cx="550" cy="80" r="44" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="550" y="76" font-size="15" fill="#1e6b34" text-anchor="middle">勇</text><text x="550" y="96" font-size="12" fill="#1e6b34" text-anchor="middle">呼唤猛士</text><path d="M174 100 L296 100 M384 100 L506 100" stroke="#333" stroke-width="2" marker-end="url(#l1b)"/><defs><marker id="l1b" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><rect x="200" y="160" width="280" height="55" rx="8" fill="#fef7e0" stroke="#f9ab00" stroke-width="2"/><text x="340" y="186" font-size="14" fill="#8a6d00" text-anchor="middle">悲愤交织 → 化成战斗力量</text><path d="M340 124 L340 160" stroke="#333" stroke-width="2" marker-end="url(#l1b)"/><text x="340" y="230" font-size="13" fill="#777" text-anchor="middle">情感三层次最终汇聚为奋然前行的勇气</text></svg>', caption: '本文情感三层次：悲（悼念）—愤（控诉）—勇（呼唤），汇聚为力量。' },
        { type: 'warn', label: '易错提醒', text: '不要把本文简单读作“哀悼文章”。它的核心是<strong>“悲愤”而非单纯的“悲伤”</strong>，更包含对反动派与御用文人的尖锐批判；文中“惊心动魄的伟大”“伟绩”“武功”等均为反语，须按反讽理解。' },
        { type: 'heading', text: '三、艺术特色：夹叙夹议，情理交融' },
        { type: 'paragraph', text: '本文最突出的艺术手法是夹叙夹议：在叙述惨案经过与烈士事迹的同时，随时插入抒情与议论，叙事、抒情、议论三者水乳交融，使文章既有事实根据，又有强烈的情感力量与思想深度。' },
        { type: 'example', label: '夹叙夹议示例', text: '写刘和珍“始终微笑着的和蔼的”与她“在弹雨中互相救助”的叙事之后，鲁迅立即议论：“当三个女子从容地转辗于文明人所发明的枪弹的攒射中的时候，这是怎样的一个惊心动魄的伟大呵！”<strong>叙事铺垫、议论升情</strong>，情理浑然一体。' },
        { type: 'tip', label: '修辞卡片', text: '文中大量使用<strong>反复与排比</strong>强化情感。如“惨象，已使我目不忍视了；流言，尤使我耳不忍闻”“我还有什么话可说呢？我懂得衰亡民族之所以默无声息的缘由了”。反复与排比使悲愤层层加码，气势贯通。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="50" width="150" height="60" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="135" y="86" font-size="15" fill="#1a3c8a" text-anchor="middle">叙事（事实）</text><rect x="265" y="50" width="150" height="60" rx="8" fill="#fef7e0" stroke="#f9ab00" stroke-width="2"/><text x="340" y="86" font-size="15" fill="#8a6d00" text-anchor="middle">抒情（情感）</text><rect x="470" y="50" width="150" height="60" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="545" y="86" font-size="15" fill="#1e6b34" text-anchor="middle">议论（思想）</text><path d="M210 80 L265 80 M415 80 L470 80" stroke="#333" stroke-width="2" marker-end="url(#l1c)"/><defs><marker id="l1c" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><ellipse cx="340" cy="180" rx="220" ry="40" fill="#fdecea" stroke="#e05d44" stroke-width="2"/><text x="340" y="176" font-size="14" fill="#a3331f" text-anchor="middle">三者水乳交融：夹叙夹议，情理交融</text><text x="340" y="196" font-size="13" fill="#a3331f" text-anchor="middle">叙事奠基、抒情贯气、议论升格</text></svg>', caption: '夹叙夹议、情理交融：叙事—抒情—议论三者水乳交融。' },
        { type: 'list', items: [
          '反复：同义语句反复出现，一唱三叹，强化悲愤。',
          '排比：句式整齐铺排，增强语势与节奏感。',
          '反语：用褒词写暴行（如“伟绩”“武功”），讽刺辛辣。',
          '对比：徒手请愿的柔弱与执政府的残酷形成强烈反差。'
        ] },
        { type: 'keypoint', label: '学习重点', text: '把握<strong>“悲愤交织”的情感基调</strong>，理解夹叙夹议、情理交融的手法，体会反复、排比、反语的表达效果，认识鲁迅杂文的战斗性与思想深度。' },
        { type: 'heading', text: '四、名句默写（需背诵）' },
        { type: 'paragraph', text: '文中历来传诵、常入默写题的核心名句，集中体现了鲁迅对“真的猛士”的礼赞，学习中须准确背诵并理解其精神内涵。' },
        { type: 'keypoint', label: '需背诵', text: '“真的猛士，敢于直面惨淡的人生，敢于正视淋漓的鲜血。”<br>这是全文的精神警句：真正的勇士不回避现实的残酷，而是正视它、反抗它。默写时注意“惨淡”“正视”“淋漓”用字准确。' },
        { type: 'reading', text: '延伸：可将本文与《为了忘却的记念》对读，体会鲁迅前后期纪念文章在情感与笔法上的异同。' }
      ],
      exercises: [
        { type: 'choice', question: '下列对“三·一八”惨案及本文背景理解正确的一项是？', options: ['本文纪念的是1926年“三·一八”惨案中的烈士', '本文是纪念左联五烈士柔石等人之作', '惨案发生于抗日战争时期', '鲁迅称这一天为“最光明的一天”'], answer: '本文纪念的是1926年“三·一八”惨案中的烈士', explanation: '本文为纪念1926年“三·一八”惨案中遇害的刘和珍等烈士而作，鲁迅称这一天为“民国以来最黑暗的一天”。B项混淆本文与《为了忘却的记念》；C项时间错误；D项曲解原话。' },
        { type: 'choice', question: '对“真的猛士，敢于直面惨淡的人生，敢于正视淋漓的鲜血”理解正确的是？', options: ['劝人回避现实的残酷', '礼赞直面黑暗、奋勇反抗的勇士', '描写自然景观的壮美', '讽刺烈士的鲁莽'], answer: '礼赞直面黑暗、奋勇反抗的勇士', explanation: '这是全文精神警句，称颂真正勇者不回避现实残酷，而是正视并反抗它。“猛士”指敢于斗争的革命者，而非回避者或鲁莽者，更不是写景。' },
        { type: 'fill', question: '本文融叙事、抒情、议论于一体，手法上称为______（四字），且大量运用反复、排比等修辞。', answer: '夹叙夹议', explanation: '本文最突出的艺术手法是夹叙夹议：在叙述惨案与烈士事迹时随时插入抒情议论，三者交融。填空须抓住“夹叙夹议”这一术语，并联系反复排比等修辞。' },
        { type: 'fill', question: '鲁迅称“三·一八”惨案这一天为“民国以来最______的一天”。', answer: '黑暗', explanation: '鲁迅在文中痛斥段祺瑞政府镇压徒手请愿群众，称1926年3月18日为“民国以来最黑暗的一天”，凸显事件的残酷与作者的悲愤。' },
        { type: 'choice', question: '下列对《记念刘和珍君》艺术特色概括最准确的一项是？', options: ['夹叙夹议、情理交融', '纯客观冷静记事', '以景物描写为主线', '靠对话推动情节'], answer: '夹叙夹议、情理交融', explanation: '本文将叙事、抒情、议论融为一体，悲愤交织、情理交融，并善用反复、排比、反语等修辞，而非纯客观记事或写景对话。' }
      ]
    },

    /* ============ 第二单元 第2课 ============ */
    {
      id: 'xb2-u2-l2',
      cover: 'assets/cover/chinese/xb2-u2-l2.svg',
      name: '《为了忘却的记念》',
      author: '鲁迅',
      chapter: '第二单元 苦难与新生（中国革命传统作品研习）',
      difficulty: '较难',
      content: [
        { type: 'heading', text: '一、写作背景与文体' },
        { type: 'paragraph', text: '1931年，左联五位青年作家柔石、殷夫、胡也频、李伟森、冯铿被国民党反动派秘密杀害。两年后鲁迅写下此文，以“忘却”之名行“记念”之实，将悲愤凝于笔端。' },
        { type: 'keypoint', label: '标题辩证', text: '题目“为了忘却的记念”看似矛盾：忘却是为摆脱悲哀重获战斗力气，记念是永志烈士精神。<strong>忘却是为了更好地记念与战斗</strong>，悲愤转化为力量。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="40" width="120" height="160" rx="8" fill="#fdecea" stroke="#e05d44" stroke-width="2"/><text x="80" y="70" font-size="14" fill="#a3331f" text-anchor="middle">左联五烈士</text><text x="80" y="92" font-size="12" fill="#a3331f" text-anchor="middle">1931 被害</text><text x="80" y="116" font-size="12" fill="#a3331f" text-anchor="middle">柔石</text><text x="80" y="138" font-size="12" fill="#a3331f" text-anchor="middle">殷夫</text><text x="80" y="160" font-size="12" fill="#a3331f" text-anchor="middle">胡也频</text><text x="80" y="182" font-size="12" fill="#a3331f" text-anchor="middle">李伟森</text><text x="80" y="204" font-size="12" fill="#a3331f" text-anchor="middle">冯铿</text><rect x="200" y="90" width="180" height="60" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="290" y="126" font-size="14" fill="#1a3c8a" text-anchor="middle">柔石（中心着墨）</text><rect x="440" y="90" width="200" height="60" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="540" y="120" font-size="14" fill="#1e6b34" text-anchor="middle">其余四烈士</text><text x="540" y="142" font-size="12" fill="#1e6b34" text-anchor="middle">简笔带过</text><path d="M140 120 L200 120 M380 120 L440 120" stroke="#333" stroke-width="2" marker-end="url(#l2a)"/><defs><marker id="l2a" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="210" font-size="13" fill="#555" text-anchor="middle">以柔石为中心的回忆，辐射到四位战友</text></svg>', caption: '左联五烈士：文章以柔石为中心着墨，其余四烈士简笔辐射。' },
        { type: 'heading', text: '二、思想内涵：沉痛悼念与愤怒控诉' },
        { type: 'list', items: [
          '柔石：踏实硬气、损己利人，鲁迅视如“台州式的硬气”的代表。',
          '殷夫（白莽）：从“彼得斐”诗译稿见其革命诗人的赤诚。',
          '胡也频、李伟森、冯铿：同为左联战友，牺牲于秘密杀害。',
          '控诉：揭露反动派“禁锢得比罐头还严密”的白色恐怖。'
        ] },
        { type: 'paragraph', text: '文章以柔石为中心展开回忆，兼顾其余四烈士，于平静叙述中蓄积巨大悲愤，字里行间是对“中国失掉了很好的青年”的深沉痛惜。' },
        { type: 'table', headers: ['烈士', '文中着墨', '精神特质'], rows: [
          ['柔石', '最详，写交往与硬气', '损己利人、台州式硬气'],
          ['殷夫', '译稿、诗与见面', '赤诚、坚毅'],
          ['胡也频', '简笔', '战友、牺牲'],
          ['李伟森', '简笔', '战友、牺牲'],
          ['冯铿', '简笔', '战友、牺牲']
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><circle cx="170" cy="110" r="55" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="170" y="106" font-size="15" fill="#1a3c8a" text-anchor="middle">忘却</text><text x="170" y="126" font-size="12" fill="#1a3c8a" text-anchor="middle">卸下悲哀</text><circle cx="510" cy="110" r="55" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="510" y="106" font-size="15" fill="#1e6b34" text-anchor="middle">记念</text><text x="510" y="126" font-size="12" fill="#1e6b34" text-anchor="middle">永志精神</text><path d="M225 110 L455 110" stroke="#333" stroke-width="2" marker-end="url(#l2b)"/><defs><marker id="l2b" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="80" font-size="13" fill="#333" text-anchor="middle">看似矛盾</text><text x="340" y="200" font-size="14" fill="#555" text-anchor="middle">忘却是为了积蓄力量、更好地记念与战斗</text></svg>', caption: '“忘却”与“记念”的辩证：卸悲蓄力，本质统一于战斗。' },
        { type: 'warn', label: '易错提醒', text: '“忘却”不是真的遗忘。文中说“夜正长，路也正长”，说明记忆与悲愤并未消失；<strong>“忘却”是为卸下悲哀、积蓄力量继续战斗</strong>，与“记念”本质统一。' },
        { type: 'heading', text: '三、艺术特色：白描与含蓄深沉' },
        { type: 'paragraph', text: '本文少用直接抒情，多用白描：以简净平实的笔触勾勒人物言行细节，于克制中见深沉。情感如地火潜行，愈含蓄愈震撼。' },
        { type: 'example', label: '白描示例', text: '写柔石“迂”得可爱：借钱、送书、走路同行的细节，不加渲染。<strong>以平凡细节写尽淳厚品性</strong>，看似平淡，却比浓墨重彩更动人，正是白描的力量。' },
        { type: 'tip', label: '典故卡片', text: '文中引<strong>方孝孺“诛十族”</strong>的典故，以朱棣暴行映衬当下；又用“台州式的硬气”概括柔石。典故使批判与褒扬都获得历史纵深，读时不可跳过注释。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="50" width="170" height="55" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="125" y="83" font-size="14" fill="#1a3c8a" text-anchor="middle">方孝孺典故</text><rect x="255" y="50" width="170" height="55" rx="8" fill="#fef7e0" stroke="#f9ab00" stroke-width="2"/><text x="340" y="83" font-size="14" fill="#8a6d00" text-anchor="middle">台州式硬气</text><rect x="470" y="50" width="170" height="55" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="555" y="83" font-size="14" fill="#1e6b34" text-anchor="middle">柔石形象</text><path d="M210 77 L255 77 M425 77 L470 77" stroke="#333" stroke-width="2" marker-end="url(#l2c)"/><defs><marker id="l2c" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="160" font-size="14" fill="#555" text-anchor="middle">典故为人物与批判提供历史纵深</text><text x="340" y="195" font-size="13" fill="#777" text-anchor="middle">古之暴行映衬今之白色恐怖，硬气精神照亮柔石</text></svg>', caption: '典故的表达作用：以方孝孺、“台州式硬气”照亮柔石与时代。' },
        { type: 'list', items: [
          '白描：简笔勾勒、不事渲染，于平淡中见深情。',
          '含蓄：情感克制内敛，含蓄深沉。',
          '用典：方孝孺、台州硬气，拓展历史纵深。',
          '对比：青年的纯洁与统治者的残暴对照。'
        ] },
        { type: 'keypoint', label: '学习重点', text: '理解<strong>“忘却”与“记念”的辩证</strong>，把握白描与含蓄深沉的语言风格，领会方孝孺、“台州式的硬气”等典故的表达作用，认识鲁迅杂文的史识与深情。' },
        { type: 'heading', text: '四、群文对读与方法' },
        { type: 'paragraph', text: '与《记念刘和珍君》相比，本文情绪更内敛、笔法更含蓄，但战斗精神一以贯之。两文可互为参照，把握鲁迅纪念文章的情感光谱。' },
        { type: 'keypoint', label: '阅读提示', text: '读鲁迅纪念文章要<strong>细察“平静下的悲愤”</strong>：凡看似平淡的细节、简笔的白描，往往藏着最深的痛与怒，须结合时代背景体悟。' },
        { type: 'reading', text: '延伸：可结合《中国无产阶级革命文学和前驱的血》等文，理解左联五烈士牺牲的历史语境与文学意义。' }
      ],
      exercises: [
        { type: 'choice', question: '下列人物中，不属于“左联五烈士”的是？', options: ['柔石', '殷夫', '方孝孺', '冯铿'], answer: '方孝孺', explanation: '左联五烈士指1931年被国民党杀害的五位左翼青年作家：柔石、殷夫、胡也频、李伟森、冯铿。方孝孺是明代被朱棣诛十族的人物，文中仅作典故引用，并非五烈士之一。' },
        { type: 'choice', question: '对标题“为了忘却的记念”理解正确的一项是？', options: ['作者真要彻底遗忘烈士', '忘却是为卸下悲哀、积蓄力量以更好战斗', '“忘却”与“记念”毫无关联', '标题意在讽刺读者健忘'], answer: '忘却是为卸下悲哀、积蓄力量以更好战斗', explanation: '“忘却”并非真遗忘，而是摆脱过度悲哀、重获战斗勇气；记念是永志烈士精神。二者辩证统一：忘却悲哀是为了更好地记念与战斗。' },
        { type: 'fill', question: '文中以______为中心展开回忆，称其具有“台州式的硬气”，并详写二人交往。', answer: '柔石', explanation: '本文以柔石着墨最详，通过借钱、送书、同行等细节写其淳厚与硬气，并以“台州式的硬气”概括其品格，其余四烈士则简笔带过。' },
        { type: 'fill', question: '本文多用简净平实的笔触勾勒人物言行，这种不事渲染、于平淡中见深情的手法称为______（四字）。', answer: '白描', explanation: '白描是本文主要艺术手法：以简笔勾勒人物细节而不加渲染，情感克制内敛却更震撼。填空抓住“白描”即可，它使文章含蓄深沉。' },
        { type: 'choice', question: '文中引用方孝孺“诛十族”典故的主要作用是？', options: ['衬托当下统治者的残暴、拓展历史纵深', '证明方孝孺是左联烈士', '批评柔石过于迂直', '介绍明朝科举制度'], answer: '衬托当下统治者的残暴、拓展历史纵深', explanation: '引方孝孺典故是以古代暴行映衬国民党反动派的白色恐怖，同时为“硬气”精神提供历史纵深；与批评柔石或介绍科举无关。' }
      ]
    },

    /* ============ 第二单元 第3课 ============ */
    {
      id: 'xb2-u2-l3',
      cover: 'assets/cover/chinese/xb2-u2-l3.svg',
      name: '《包身工》',
      author: '夏衍',
      chapter: '第二单元 苦难与新生（中国革命传统作品研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、文体与写作背景' },
        { type: 'paragraph', text: '本文是夏衍于1936年发表的报告文学，作者深入上海日本纱厂实地调查，真实记录包身工的悲惨生活。报告文学兼具新闻的真实性与文学的感染力。' },
        { type: 'keypoint', label: '文体特征', text: '报告文学是<strong>新闻性与文学性的统一</strong>：用真实材料（调查、数据）保证可信，用文学手法（描写、修辞）增强感染力，既“真”又“活”。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="60" width="240" height="70" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="180" y="92" font-size="16" fill="#1a3c8a" text-anchor="middle">新闻性（真实）</text><text x="180" y="114" font-size="12" fill="#1a3c8a" text-anchor="middle">调查·数据·事实</text><rect x="380" y="60" width="240" height="70" rx="8" fill="#fef0e8" stroke="#e05d44" stroke-width="2"/><text x="500" y="92" font-size="16" fill="#a3331f" text-anchor="middle">文学性（生动）</text><text x="500" y="114" font-size="12" fill="#a3331f" text-anchor="middle">描写·修辞·情感</text><path d="M300 95 L380 95" stroke="#333" stroke-width="2" marker-end="url(#l3a)"/><defs><marker id="l3a" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><ellipse cx="340" cy="180" rx="180" ry="38" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="340" y="176" font-size="14" fill="#1e6b34" text-anchor="middle">报告文学＝新闻性＋文学性</text><text x="340" y="196" font-size="12" fill="#1e6b34" text-anchor="middle">既“真”又“活”</text></svg>', caption: '报告文学的双翼：新闻性保证真实，文学性增强感染。' },
        { type: 'heading', text: '二、思想内涵：血泪命运与社会批判' },
        { type: 'list', items: [
          '生存处境：住工房、吃猪食、做苦工，失去人身自由。',
          '制度根源：“包身契”使包身工沦为带工老板的赚钱工具。',
          '社会批判：揭露帝国主义与封建势力合谋对劳工的压榨。',
          '作者立场：以饱含同情的笔触控诉黑暗、呼唤人道。'
        ] },
        { type: 'paragraph', text: '包身工多是穷苦农村少女，以极低“包身费”被骗订约，三年内生死病痛概不负责，实质是养不起就当“赚钱机器”的奴隶式剥削。' },
        { type: 'table', headers: ['维度', '包身工处境', '作者态度'], rows: [
          ['居住', '拥挤工房如猪圈', '同情揭露'],
          ['饮食', '两粥一饭吃不饱', '愤慨控诉'],
          ['劳动', '昼夜劳作无自由', '批判制度'],
          ['人身', '受工头任意打骂', '痛惜呐喊']
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="40" width="140" height="50" rx="8" fill="#fef0e8" stroke="#e05d44"/><text x="90" y="70" font-size="13" fill="#a3331f" text-anchor="middle">凌晨起身</text><rect x="180" y="40" width="140" height="50" rx="8" fill="#fef7e0" stroke="#f9ab00"/><text x="250" y="70" font-size="13" fill="#8a6d00" text-anchor="middle">整日做工</text><rect x="340" y="40" width="140" height="50" rx="8" fill="#fdecea" stroke="#e05d44"/><text x="410" y="70" font-size="13" fill="#a3331f" text-anchor="middle">挨打受饿</text><rect x="500" y="40" width="160" height="50" rx="8" fill="#fdecea" stroke="#e05d44"/><text x="580" y="70" font-size="13" fill="#a3331f" text-anchor="middle">夜宿工房</text><path d="M160 65 L180 65 M320 65 L340 65 M480 65 L500 65" stroke="#333" stroke-width="2" marker-end="url(#l3b)"/><defs><marker id="l3b" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="140" font-size="14" fill="#555" text-anchor="middle">“面”：整体包身工的循环苦役</text><rect x="200" y="165" width="280" height="55" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="340" y="190" font-size="14" fill="#1a3c8a" text-anchor="middle">“点”：芦柴棒等典型个案</text><text x="340" y="210" font-size="12" fill="#1a3c8a" text-anchor="middle">点面互衬，共性个性兼具</text></svg>', caption: '点面结合：群体苦役为“面”，芦柴棒等典型为“点”。' },
        { type: 'warn', label: '易错提醒', text: '报告文学中的“芦柴棒”“小福子”等是<strong>真实存在的典型</strong>，不是虚构人物。点面结合中的“点”是真实个案，“面”是群体概貌，二者都基于调查事实。' },
        { type: 'heading', text: '三、艺术特色：点面结合，夹叙夹议' },
        { type: 'paragraph', text: '文章以群像（整体包身工）为“面”勾勒普遍苦难，以“芦柴棒”等个别人物为“点”精雕细刻，点面互衬，既见共性又见个性，形象而有力地揭露现实。' },
        { type: 'example', label: '点面结合示例', text: '“面”上写清晨工房里群体被驱赶起身；“点”上特写“芦柴棒”骨瘦如柴、挨打生病仍被逼上工。<strong>以个体命运照亮群体悲剧</strong>，点面交织，催人泪下。' },
        { type: 'tip', label: '手法卡片', text: '除点面结合外，本文善用<strong>精确的细节与比喻</strong>：将包身工比作“生物的模型”“没有锁链的奴隶”，以具象喻体强化读者对剥削之酷的感知。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="50" width="260" height="60" rx="8" fill="#fdecea" stroke="#e05d44" stroke-width="2"/><text x="170" y="86" font-size="15" fill="#a3331f" text-anchor="middle">面：群体概貌（普遍苦难）</text><rect x="380" y="50" width="260" height="60" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="510" y="86" font-size="15" fill="#1a3c8a" text-anchor="middle">点：典型个体（芦柴棒）</text><path d="M300 80 L380 80" stroke="#333" stroke-width="2" marker-end="url(#l3c)"/><defs><marker id="l3c" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><rect x="200" y="150" width="280" height="55" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="340" y="184" font-size="14" fill="#1e6b34" text-anchor="middle">互衬→既见共性又见个性</text></svg>', caption: '点面结合的结构：群体与个体互衬，共性与个性统一。' },
        { type: 'list', items: [
          '点面结合：群体概貌+典型个体，互衬有力。',
          '夹叙夹议：在事实叙述中穿插批判议论。',
          '细节描写：以具象细节增强真实与感染力。',
          '修辞比喻：以喻体凸显包身工的非人处境。'
        ] },
        { type: 'keypoint', label: '学习重点', text: '认识<strong>报告文学“新闻性+文学性”的文体特征</strong>，掌握点面结合的写法，理解夹叙夹议如何使真实素材升华为有力批判。' },
        { type: 'heading', text: '四、阅读与拓展' },
        { type: 'paragraph', text: '本文与《记念刘和珍君》虽文体不同，却都以真实苦难叩问社会良知，是“苦难与新生”单元中反思旧中国黑暗的代表文本。' },
        { type: 'keypoint', label: '时代意义', text: '包身工制度是旧中国半殖民地半封建社会的<strong>缩影</strong>。读懂此文，方能理解“新中国”之于普通劳动者的历史意义——它终结了这种制度化奴役。' },
        { type: 'reading', text: '延伸：可对比夏衍《包身工》与当代新闻报道中的劳工题材，思考报告文学“干预现实”传统的延续。' }
      ],
      exercises: [
        { type: 'choice', question: '《包身工》的文体是？', options: ['小说', '报告文学', '诗歌', '戏剧'], answer: '报告文学', explanation: '本文是夏衍1936年发表的报告文学，作者深入纱厂实地调查，真实记录包身工悲惨生活，兼具新闻真实性与文学感染力，不同于虚构的小说。' },
        { type: 'choice', question: '下列对报告文学“新闻性与文学性统一”理解正确的是？', options: ['用真实调查保证可信，用文学手法增强感染', '完全虚构以吸引读者', '只有新闻数据而无文学加工', '只有文学想象而无事实'], answer: '用真实调查保证可信，用文学手法增强感染', explanation: '报告文学以真实材料（调查、数据）保证可信，以文学手法（描写、修辞）增强感染力，二者统一。它既不是纯虚构，也不是干瘪新闻。' },
        { type: 'fill', question: '本文运用______结合手法，以“芦柴棒”等典型个体与整体包身工群像互衬。', answer: '点面', explanation: '文章以整体包身工为“面”写普遍苦难，以“芦柴棒”等个体为“点”精雕细刻，点面互衬，既见共性又见个性，是主要艺术手法。' },
        { type: 'fill', question: '包身工多因签订“______”（契约名）被骗，三年内生死病痛概不负责，实质是被奴役。', answer: '包身契', explanation: '带工老板以极低“包身费”诱骗穷苦少女签下包身契，三年内包身工生死不管，成为赚钱机器。填“包身契”即点出制度根源。' },
        { type: 'choice', question: '下列对文中“芦柴棒”理解正确的一项是？', options: ['真实存在的典型包身工', '完全虚构的小说人物', '作者本人化名', '工厂老板的绰号'], answer: '真实存在的典型包身工', explanation: '“芦柴棒”是作者调查所得的真实包身工典型，骨瘦如柴、受尽压榨，是点面结合中的“点”。报告文学的人物基于事实，并非虚构。' }
      ]
    },

    /* ============ 第二单元 第4课 ============ */
    {
      id: 'xb2-u2-l4',
      cover: 'assets/cover/chinese/xb2-u2-l4.svg',
      name: '《荷花淀》',
      author: '孙犁',
      chapter: '第二单元 苦难与新生（中国革命传统作品研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、文体与作家流派' },
        { type: 'paragraph', text: '本文是孙犁的短篇小说，发表于1945年。孙犁是“荷花淀派”代表作家，其小说擅写冀中水乡军民抗战，风格清新俊逸，被称为“诗化小说”。' },
        { type: 'keypoint', label: '流派风格', text: '“荷花淀派”的特征是<strong>诗化、散文化</strong>：不重激烈情节，而以清新意境、抒情笔调写战争中的人情美、人性美，于硝烟中见诗意。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="50" width="180" height="60" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="130" y="86" font-size="15" fill="#1a3c8a" text-anchor="middle">诗化意境</text><rect x="250" y="50" width="180" height="60" rx="8" fill="#fef7e0" stroke="#f9ab00" stroke-width="2"/><text x="340" y="86" font-size="15" fill="#8a6d00" text-anchor="middle">抒情笔调</text><rect x="460" y="50" width="180" height="60" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="550" y="86" font-size="15" fill="#1e6b34" text-anchor="middle">人性之美</text><path d="M220 80 L250 80 M430 80 L460 80" stroke="#333" stroke-width="2" marker-end="url(#l4a)"/><defs><marker id="l4a" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="160" font-size="14" fill="#555" text-anchor="middle">“荷花淀派”＝诗化小说：于硝烟中写美与希望</text><text x="340" y="195" font-size="13" fill="#777" text-anchor="middle">清新俊逸，重意境人情而非激烈情节</text></svg>', caption: '荷花淀派诗化小说的三重特征：意境、抒情、人性美。' },
        { type: 'heading', text: '二、人物形象：白洋淀女性的温柔与坚毅' },
        { type: 'list', items: [
          '水生嫂：温柔贤惠又深明大义，送夫参军、不甘落后。',
          '中青年妇女群像：探望丈夫、途中遇敌、组队练兵。',
          '共同特质：外表柔美、内心坚韧，于家常中见大义。',
          '成长弧光：从“寻夫”到“成为战士”，女性自觉觉醒。'
        ] },
        { type: 'paragraph', text: '小说没有把女性写成战争的陪衬，而是写出她们在民族危难中的觉醒与担当：她们既顾念家庭，又毅然投身抗日，柔中带刚。' },
        { type: 'table', headers: ['人物', '关键情节', '形象特质'], rows: [
          ['水生嫂', '月下编席、送夫、学射击', '温柔坚韧、深明大义'],
          ['中青年妇女', '探夫、遇敌、成立队伍', '羞涩勇敢、迅速成长'],
          ['水生', '嘱妻、带队、赞妻子', '沉稳刚毅、体贴']
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="90" width="160" height="55" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="120" y="123" font-size="14" fill="#1a3c8a" text-anchor="middle">寻夫探夫</text><rect x="260" y="90" width="160" height="55" rx="8" fill="#fef7e0" stroke="#f9ab00" stroke-width="2"/><text x="340" y="123" font-size="14" fill="#8a6d00" text-anchor="middle">途中遇敌</text><rect x="480" y="90" width="160" height="55" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="560" y="123" font-size="14" fill="#1e6b34" text-anchor="middle">组队从军</text><path d="M200 117 L260 117 M420 117 L480 117" stroke="#333" stroke-width="2" marker-end="url(#l4b)"/><defs><marker id="l4b" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="190" font-size="14" fill="#555" text-anchor="middle">从柔美到坚毅：女性自觉的觉醒弧光</text></svg>', caption: '白洋淀女性的成长弧光：寻夫—遇敌—从军，柔中带刚。' },
        { type: 'warn', label: '易错提醒', text: '不要把《荷花淀》误读为“没有战争的战争小说”。它的<strong>“淡”是艺术上的诗化，不是对战争的淡化</strong>；恰恰在清淡笔触里，藏着对侵略者的仇恨与对人民的礼赞。' },
        { type: 'heading', text: '三、艺术特色：诗化语言与对话细节' },
        { type: 'paragraph', text: '小说语言如散文诗：月下编席的意境、水汽荷香的描写，营造出白洋淀特有的抒情氛围。人物性格主要借对话与细节自然流露，少见直接心理剖析。' },
        { type: 'example', label: '对话刻画示例', text: '水生嫂听丈夫说“明天我就到大部队上去了”，低声问“你总是很积极的”。“总是很积极”<strong>一语双关</strong>：既有嗔怪不舍，更含骄傲支持，柔情与深明大义尽在寻常对话中。' },
        { type: 'tip', label: '鉴赏卡片', text: '读诗化小说要<strong>品“境”与“语”</strong>：留意环境描写如何渲染情绪（如月夜、荷香），以及对话如何“潜台词”式地透露人物心理，这是荷花淀派的看家本领。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="50" width="240" height="60" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="180" y="86" font-size="15" fill="#1a3c8a" text-anchor="middle">对话（潜台词）</text><rect x="380" y="50" width="240" height="60" rx="8" fill="#fef7e0" stroke="#f9ab00" stroke-width="2"/><text x="500" y="86" font-size="15" fill="#8a6d00" text-anchor="middle">心理（性格）</text><path d="M300 80 L380 80" stroke="#333" stroke-width="2" marker-end="url(#l4c)"/><defs><marker id="l4c" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><rect x="200" y="150" width="280" height="55" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="340" y="184" font-size="14" fill="#1e6b34" text-anchor="middle">形象自然流露，少见直剖</text></svg>', caption: '以对话藏潜台词，自然透露人物心理与性格。' },
        { type: 'list', items: [
          '诗化意境：月夜、荷香、水汽，营造抒情氛围。',
          '散文化结构：不以冲突推动，而以情绪流展开。',
          '对话传神：寻常话里藏潜台词与性格。',
          '细节白描：编席、吮指等动作写活人物。'
        ] },
        { type: 'keypoint', label: '学习重点', text: '把握<strong>“荷花淀派”诗化、散文化的艺术风格</strong>，分析水生嫂等女性温柔坚韧、深明大义的形象，体会对话与细节刻画人物的妙处。' },
        { type: 'heading', text: '四、群文与方法拓展' },
        { type: 'paragraph', text: '与《包身工》的沉重不同，《荷花淀》于战争中写出美与希望，二者共同构成“苦难与新生”中“新生”的向度——人民在苦难里生长出力量。' },
        { type: 'keypoint', label: '阅读提示', text: '鉴赏小说人物，可建立<strong>“情节—细节—形象—主题”</strong>链条：由具体对话细节反推性格，再由性格看其承载的人性美与时代精神。' },
        { type: 'reading', text: '延伸：可比较孙犁《荷花淀》与茹志鹃《百合花》，体会革命历史题材中“清新抒情”一脉的共通美学。' }
      ],
      exercises: [
        { type: 'choice', question: '《荷花淀》所属的文学流派是？', options: ['荷花淀派', '山药蛋派', '新月派', '创造社'], answer: '荷花淀派', explanation: '本文是孙犁短篇小说，孙犁为“荷花淀派”代表作家。该派擅写冀中水乡抗战，风格清新俊逸、诗化散文化，与赵树理的山药蛋派不同。' },
        { type: 'choice', question: '下列对水生嫂形象特点概括最准确的是？', options: ['温柔坚韧、深明大义', '凶狠泼辣', '懦弱自私', '冷漠无情'], answer: '温柔坚韧、深明大义', explanation: '水生嫂温柔贤惠又深明大义：月下编席、送夫参军、不甘落后学射击，于家常中见大义，外表柔美内心坚韧，是白洋淀女性的代表。' },
        { type: 'fill', question: '《荷花淀》语言具有______、散文化的特征，被称为“诗化小说”。', answer: '诗化', explanation: '孙犁小说不重激烈情节，而以清新意境与抒情笔调写战争中的人情美，语言诗化、结构散文化，故被称为“诗化小说”。' },
        { type: 'fill', question: '小说中水生嫂听丈夫说要去大部队，低声说“你总是很______的”，一语双关含支持与不舍。', answer: '积极', explanation: '“你总是很积极的”表面似嗔怪，实含骄傲与支持，体现水生嫂深明大义又恋恋不舍的复杂心理，是对话传神的范例。' },
        { type: 'choice', question: '本文刻画人物的主要手法是？', options: ['借对话与细节自然流露', '大段心理独白剖析', '作者直接下断语评判', '借助神话隐喻'], answer: '借对话与细节自然流露', explanation: '小说少用直接心理剖析，人物性格主要借对话（如“你总是很积极的”）与细节（编席、吮指）自然流露，含蓄而传神。' }
      ]
    },

    /* ============ 第二单元 第5课 ============ */
    {
      id: 'xb2-u2-l5',
      cover: 'assets/cover/chinese/xb2-u2-l5.svg',
      name: '《小二黑结婚（节选）》',
      author: '赵树理',
      chapter: '第二单元 苦难与新生（中国革命传统作品研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、文体与作家流派' },
        { type: 'paragraph', text: '本文是赵树理的短篇小说，1943年发表，是“山药蛋派”代表作。小说写太行山区民主政权下青年挣脱封建束缚、争取婚姻自主的故事，语言通俗乡土。' },
        { type: 'keypoint', label: '流派风格', text: '“山药蛋派”以<strong>通俗化、大众化、乡土气</strong>著称：用群众口语写作，写农村日常，幽默风趣又饱含对新生事物的肯定。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="50" width="180" height="60" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="130" y="86" font-size="15" fill="#1a3c8a" text-anchor="middle">通俗化</text><rect x="250" y="50" width="180" height="60" rx="8" fill="#fef7e0" stroke="#f9ab00" stroke-width="2"/><text x="340" y="86" font-size="15" fill="#8a6d00" text-anchor="middle">大众化</text><rect x="460" y="50" width="180" height="60" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="550" y="86" font-size="15" fill="#1e6b34" text-anchor="middle">乡土气</text><path d="M220 80 L250 80 M430 80 L460 80" stroke="#333" stroke-width="2" marker-end="url(#l5a)"/><defs><marker id="l5a" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="160" font-size="14" fill="#555" text-anchor="middle">“山药蛋派”＝用群众口语写农村日常</text><text x="340" y="195" font-size="13" fill="#777" text-anchor="middle">幽默风趣，又饱含对新生事物的肯定</text></svg>', caption: '山药蛋派三特征：通俗化、大众化、乡土气。' },
        { type: 'heading', text: '二、人物形象：新旧两代人的对照' },
        { type: 'list', items: [
          '小二黑：进步青年，聪明能干，敢于同封建势力斗争。',
          '小芹：活泼勇敢，与小二黑真心相爱、争取自由。',
          '二诸葛：小二黑父，迷信“黄道吉日”、包办婚姻，代表旧思想。',
          '三仙姑：小芹母，装神弄鬼、贪财虚荣，落后可笑。'
        ] },
        { type: 'paragraph', text: '小说以两对青年与两对家长的对照结构：新生一代追求自由幸福，老一辈被封建迷信与旧习裹挟，时代新风终战胜陈规陋习。' },
        { type: 'table', headers: ['人物', '身份', '性格与象征'], rows: [
          ['小二黑', '进步青年', '勇敢新派，追求婚姻自主'],
          ['小芹', '进步青年', '活泼坚毅，反抗包办'],
          ['二诸葛', '小二黑父', '迷信包办，旧思想代表'],
          ['三仙姑', '小芹母', '虚荣装神，落后可笑']
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="40" width="240" height="70" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="180" y="72" font-size="15" fill="#1e6b34" text-anchor="middle">新生一代</text><text x="180" y="94" font-size="13" fill="#1e6b34" text-anchor="middle">小二黑·小芹：追求自由</text><rect x="380" y="40" width="240" height="70" rx="8" fill="#fdecea" stroke="#e05d44" stroke-width="2"/><text x="500" y="72" font-size="15" fill="#a3331f" text-anchor="middle">老一辈</text><text x="500" y="94" font-size="13" fill="#a3331f" text-anchor="middle">二诸葛·三仙姑：旧习落后</text><path d="M300 75 L380 75" stroke="#333" stroke-width="2" marker-end="url(#l5b)"/><defs><marker id="l5b" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="160" font-size="14" fill="#555" text-anchor="middle">新旧对照：时代新风终胜陈规陋习</text><text x="340" y="195" font-size="13" fill="#777" text-anchor="middle">喜剧笔调写思想改造，含批判亦含温情</text></svg>', caption: '新旧两代对照：进步青年 vs 落后家长，新风胜旧习。' },
        { type: 'warn', label: '易错提醒', text: '二诸葛、三仙姑是<strong>被善意讽刺的落后群众</strong>，不是敌人。赵树理的幽默含批判也含同情，意在写“思想改造”而非“阶级敌人”，阅读须辨其温情底色。' },
        { type: 'heading', text: '三、艺术特色：通俗语言与乡土幽默' },
        { type: 'paragraph', text: '小说全用群众口语与北方农村俚语，叙述节奏明快，情节带喜剧性。人物绰号（二诸葛、三仙姑）本身即大众化笔法的体现。' },
        { type: 'example', label: '大众化语言示例', text: '二诸葛遇事便掐指算“不宜栽种”，三仙姑“米烂了”还涂脂抹粉。这些<strong>口语化、生活化的细节</strong>既好懂又传神，使人物跃然纸上，正是山药蛋派的通俗魅力。' },
        { type: 'tip', label: '鉴赏卡片', text: '读赵树理要<strong>听“声口”</strong>：不同人物有不同语言习惯（家长迷信啰嗦、青年干脆利落），从说话方式即可辨人物身份与性格，这是大众化写作的诀窍。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="50" width="240" height="60" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="180" y="86" font-size="15" fill="#1a3c8a" text-anchor="middle">群众口语</text><rect x="380" y="50" width="240" height="60" rx="8" fill="#fef7e0" stroke="#f9ab00" stroke-width="2"/><text x="500" y="86" font-size="15" fill="#8a6d00" text-anchor="middle">人物声口</text><path d="M300 80 L380 80" stroke="#333" stroke-width="2" marker-end="url(#l5c)"/><defs><marker id="l5c" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><rect x="200" y="150" width="280" height="55" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="340" y="184" font-size="14" fill="#1e6b34" text-anchor="middle">听声口辨人物，乡土幽默生姿</text></svg>', caption: '大众化语言：以口语写人物声口，乡土幽默跃然纸上。' },
        { type: 'list', items: [
          '大众口语：用群众话说群众事，通俗易懂。',
          '乡土幽默：以喜剧笔调写落后与新生。',
          '绰号艺术：二诸葛、三仙姑，一听即活。',
          '明快结构：情节清晰、善恶分明、结局圆满。'
        ] },
        { type: 'keypoint', label: '学习重点', text: '认识<strong>“山药蛋派”通俗化、大众化、乡土气的风格</strong>，把握小二黑、小芹与二诸葛、三仙姑的形象对照，体会赵树理以口语写农村的独到功力。' },
        { type: 'heading', text: '四、主题与拓展' },
        { type: 'paragraph', text: '小说借婚姻自主故事，折射民主政权下农村新风尚的确立：新一代在进步力量支持下挣脱封建桎梏，旧思想则在笑声中被温和改造。' },
        { type: 'keypoint', label: '主题提示', text: '本文主题可概括为：<strong>讴歌新生政权带来的婚姻自由与思想解放</strong>，以喜剧方式宣告封建包办与迷信的退场、人民当家做主的开始。' },
        { type: 'reading', text: '延伸：可比较《小二黑结婚》与《荷花淀》，一喜剧一抒情，同写抗战根据地人民的新生活，风格各异而精神相通。' }
      ],
      exercises: [
        { type: 'choice', question: '《小二黑结婚（节选）》所属的文学流派是？', options: ['山药蛋派', '荷花淀派', '鸳鸯蝴蝶派', '京派'], answer: '山药蛋派', explanation: '本文是赵树理短篇小说，赵树理为“山药蛋派”代表。该派以通俗化、大众化、乡土气著称，用群众口语写农村日常，与孙犁荷花淀派风格迥异。' },
        { type: 'choice', question: '对二诸葛、三仙姑两个人物理解正确的一项是？', options: ['被善意讽刺的落后群众，含批判也含同情', '穷凶极恶的阶级敌人', '光辉的英雄模范', '作者本人的化身'], answer: '被善意讽刺的落后群众，含批判也含同情', explanation: '二诸葛迷信包办、三仙姑虚荣装神，是受旧思想裹挟的落后群众。赵树理以幽默笔调讽刺其落后，也含改造的温情，并非敌人或英雄。' },
        { type: 'fill', question: '小说中进步青年______与小芹真心相爱，敢于同封建包办婚姻和落后家长作斗争。', answer: '小二黑', explanation: '小二黑是村里的进步青年，聪明能干、追求婚姻自主，与小芹相互支持，共同反抗二诸葛、三仙姑的包办与迷信，代表时代新风。' },
        { type: 'fill', question: '赵树理小说语言通俗化、大众化，具有浓厚______（二字）气息。', answer: '乡土', explanation: '山药蛋派用北方农村口语与俚语写作，充满乡土气息，幽默风趣又贴近群众，这是其大众化风格的重要标志。' },
        { type: 'choice', question: '下列对本文艺术特色概括最准确的是？', options: ['通俗口语、乡土幽默、明快结构', '文言雅致、晦涩难懂', '以神话传说为主', '重心理分析少写对话'], answer: '通俗口语、乡土幽默、明快结构', explanation: '本文全用群众口语，以喜剧笔调写落后与新生，情节明快、善恶分明、结局圆满，而非文言雅致或重心理分析，乡土幽默是其鲜明特色。' }
      ]
    },

    /* ============ 第二单元 第6课 ============ */
    {
      id: 'xb2-u2-l6',
      cover: 'assets/cover/chinese/xb2-u2-l6.svg',
      name: '《党费》',
      author: '王愿坚',
      chapter: '第二单元 苦难与新生（中国革命传统作品研习）',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、文体与写作背景' },
        { type: 'paragraph', text: '本文是王愿坚的短篇小说，写于1954年，取材于第二次国内革命战争时期苏区斗争。小说通过一位女共产党员缴党费的故事，礼赞革命者的信仰与牺牲。' },
        { type: 'keypoint', label: '核心主旨', text: '小说的灵魂是<strong>“咸菜也是党费”</strong>：在极端艰苦中，党员把仅有的咸菜当作党费上交，朴素举动里是至纯的信仰与对党的忠诚。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="50" width="160" height="60" rx="8" fill="#fef0e8" stroke="#e05d44" stroke-width="2"/><text x="140" y="86" font-size="15" fill="#a3331f" text-anchor="middle">咸菜（小）</text><rect x="260" y="50" width="160" height="60" rx="8" fill="#fef7e0" stroke="#f9ab00" stroke-width="2"/><text x="340" y="86" font-size="15" fill="#8a6d00" text-anchor="middle">党费（中）</text><rect x="460" y="50" width="160" height="60" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="540" y="86" font-size="15" fill="#1e6b34" text-anchor="middle">信仰（大）</text><path d="M220 80 L260 80 M420 80 L460 80" stroke="#333" stroke-width="2" marker-end="url(#l6a)"/><defs><marker id="l6a" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="160" font-size="14" fill="#555" text-anchor="middle">以小见大：一筐咸菜照见党员的忠诚</text><text x="340" y="195" font-size="13" fill="#777" text-anchor="middle">物越小，情越重，细节胜过千言</text></svg>', caption: '以小见大：咸菜→党费→信仰，小物见大义。' },
        { type: 'heading', text: '二、思想内涵：信仰的力量与牺牲精神' },
        { type: 'list', items: [
          '忠诚：黄新在白色恐怖下仍坚持缴党费，心向组织。',
          '牺牲：为掩护同志，黄新从容就义，以生命践信仰。',
          '信念：咸菜虽微，却象征党员与党的血肉联系。',
          '传承：党的经费化作革命力量，信仰在苦难中延续。'
        ] },
        { type: 'paragraph', text: '在敌人封锁、物资奇缺的岁月，黄新把舍不得吃的咸菜攒下当党费，又在危急时刻把生的希望让给战友，平凡女性身上闪耀着崇高的党性光辉。' },
        { type: 'table', headers: ['细节', '表层', '深层意蕴'], rows: [
          ['攒咸菜', '省下吃食', '把全部心意交给党'],
          ['交党费', '履行手续', '印证忠诚与信仰'],
          ['护战友', '让出生机', '以牺牲成就大义'],
          ['被杀害', '个人牺牲', '精神化为革命火种']
        ] },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="90" width="130" height="55" rx="8" fill="#e8f0fe" stroke="#4285f4"/><text x="95" y="123" font-size="13" fill="#1a3c8a" text-anchor="middle">攒咸菜</text><rect x="180" y="90" width="130" height="55" rx="8" fill="#fef7e0" stroke="#f9ab00"/><text x="245" y="123" font-size="13" fill="#8a6d00" text-anchor="middle">交党费</text><rect x="330" y="90" width="130" height="55" rx="8" fill="#fdecea" stroke="#e05d44"/><text x="395" y="123" font-size="13" fill="#a3331f" text-anchor="middle">护战友</text><rect x="480" y="90" width="130" height="55" rx="8" fill="#e6f4ea" stroke="#34a853"/><text x="545" y="123" font-size="13" fill="#1e6b34" text-anchor="middle">从容牺牲</text><path d="M160 117 L180 117 M310 117 L330 117 M460 117 L480 117" stroke="#333" stroke-width="2" marker-end="url(#l6b)"/><defs><marker id="l6b" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><text x="340" y="190" font-size="14" fill="#555" text-anchor="middle">一串细节写活黄新：忠诚→牺牲</text></svg>', caption: '黄新的情节链：攒咸菜—交党费—护战友—牺牲。' },
        { type: 'warn', label: '易错提醒', text: '“党费”在这里不只是组织手续，更是<strong>精神象征</strong>。勿把咸菜只看作“食物”，它承载的是党员与党生死与共的纽带，是“以小见大”的题眼。' },
        { type: 'heading', text: '三、艺术特色：以小见大，细节传神' },
        { type: 'paragraph', text: '小说不做宏大铺陈，而是聚焦“咸菜”这一微小物象，以一连串细节（攒、藏、交、护）写活人物，于细微处见精神，是以小见大的典范。' },
        { type: 'example', label: '以小见大示例', text: '黄新把咸菜一粒粒拢进筐里，说“这是给党组织的”。<strong>以“咸菜”这一小物</strong>折射出对党的全部忠诚，物越小、情越重，细节的重量远超千言空喊。' },
        { type: 'tip', label: '写作任务', text: '本单元写作可落为<strong>“学写人物短评或驳论文”</strong>：写短评要抓住一个核心细节（如咸菜）展开评点；写驳论则要针对错误观点（如“党费只是形式”）逐条反驳，小切口、深分析。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="50" width="240" height="60" rx="8" fill="#e8f0fe" stroke="#4285f4" stroke-width="2"/><text x="160" y="86" font-size="15" fill="#1a3c8a" text-anchor="middle">物象（咸菜）</text><rect x="380" y="50" width="240" height="60" rx="8" fill="#fef7e0" stroke="#f9ab00" stroke-width="2"/><text x="500" y="86" font-size="15" fill="#8a6d00" text-anchor="middle">细节（攒藏交护）</text><path d="M280 80 L380 80" stroke="#333" stroke-width="2" marker-end="url(#l6c)"/><defs><marker id="l6c" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#333"/></marker></defs><rect x="200" y="150" width="280" height="55" rx="8" fill="#e6f4ea" stroke="#34a853" stroke-width="2"/><text x="340" y="184" font-size="14" fill="#1e6b34" text-anchor="middle">升华为人物精神（信仰）</text></svg>', caption: '以小见大的写法：物象—细节—精神，层层升华。' },
        { type: 'list', items: [
          '以小见大：以咸菜小物写信仰大主题。',
          '细节传神：攒、藏、交、护串起人物。',
          '留白含蓄：情感不直说，借动作透出。',
          '象征手法：咸菜=党费=忠诚的物化。'
        ] },
        { type: 'keypoint', label: '学习重点', text: '把握<strong>“以小见大”</strong>的写法，理解咸菜这一细节如何凝聚人物精神；认识黄新等革命者坚定信仰与牺牲精神，并尝试写作人物短评或驳论文。' },
        { type: 'heading', text: '四、写作迁移与拓展' },
        { type: 'paragraph', text: '从阅读到表达：以《党费》为范本，可练习“借一个细节写活一个人”的短评，或就“党费是否只是形式”拟写一篇结构清晰的驳论文。' },
        { type: 'keypoint', label: '方法提示', text: '写人物短评宜<strong>“一斑窥豹”</strong>：选定最具代表性的细节，先叙后评、叙评结合，由表及里点出人物精神，避免泛泛而谈、堆砌形容词。' },
        { type: 'reading', text: '延伸：可联系单元写作任务，将《党费》与《为了忘却的记念》并读，一篇小说、一篇杂文，皆以小处见大义，写法各异而深情相通。' }
      ],
      exercises: [
        { type: 'choice', question: '《党费》的文体与作者是？', options: ['王愿坚的短篇小说', '鲁迅的杂文', '赵树理的小说', '孙犁的小说'], answer: '王愿坚的短篇小说', explanation: '《党费》是王愿坚1954年创作的短篇小说，取材于苏区斗争，通过女党员缴党费的故事礼赞信仰，与鲁迅杂文、赵树理孙犁小说均不同。' },
        { type: 'choice', question: '文中“咸菜也是党费”的深层意蕴是？', options: ['象征党员对党的忠诚与信仰', '只是描写普通食物', '讽刺党员生活贫困', '展示烹饪技巧'], answer: '象征党员对党的忠诚与信仰', explanation: '在封锁缺粮的岁月，黄新把舍不得吃的咸菜攒作党费，咸菜已非普通食物，而是党员与党生死与共的纽带，象征至纯的忠诚与信仰。' },
        { type: 'fill', question: '小说女主人公______在白色恐怖下坚持缴党费，危急时刻掩护战友、从容牺牲。', answer: '黄新', explanation: '黄新是小说女主人公，她在敌人封锁中仍坚持缴党费，并把生的希望让给战友，自己从容就义，平凡身影闪耀崇高党性光辉。' },
        { type: 'fill', question: '本文主要运用______（四字）手法，以“咸菜”这一小物写尽革命者的信仰大主题。', answer: '以小见大', explanation: '小说不做宏大铺陈，而是聚焦咸菜这一微小物象，以细节写活人物、折射大主题，是以小见大写法的典范。填空抓住“以小见大”。' },
        { type: 'choice', question: '下列对本文艺术特色概括最准确的是？', options: ['以小见大、细节传神', '宏大铺陈、重场面描写', '以写景抒情为主', '借神话寓言说理'], answer: '以小见大、细节传神', explanation: '本文以咸菜小物见信仰大主题，用攒、藏、交、护等一连串细节写活黄新，于细微处见精神，是以小见大、细节传神的典范。' }
      ]
    }

  );
})();
