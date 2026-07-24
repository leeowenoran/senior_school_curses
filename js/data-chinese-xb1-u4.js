/* 高一语文 · 选择性必修 上册 · 第四单元 逻辑的力量 */
(function () {
  var v = gzGetVolume('chinese', 'xb1');
  if (!v) return;
  v.points.push(
    {
        "id": "xb1-u4-l1",
        "name": "一、发现潜藏的逻辑谬误",
        "author": "（逻辑思维）",
        "chapter": "第四单元 逻辑的力量（语言积累、梳理与探究）",
        "difficulty": "中等",
        "content": [
            {
                "type": "heading",
                "text": "一、逻辑基本规律"
            },
            {
                "type": "paragraph",
                "text": "逻辑基本规律是正确思维的必要条件，主要包括同一律、矛盾律、排中律和充足理由律。它们规定了概念、判断在推理过程中必须保持确定、一致、明确和有据，是识别与避免逻辑谬误的理论基础。"
            },
            {
                "type": "keypoint",
                "label": "同一律",
                "text": "同一律要求<strong>在同一思维过程中，概念或论断必须保持自身同一</strong>，不能中途偷换。公式为「A 是 A」。它反对<strong>偷换概念</strong>与<strong>偷换论题</strong>，保证讨论对象前后一致。"
            },
            {
                "type": "keypoint",
                "label": "矛盾律",
                "text": "矛盾律要求<strong>两个互相矛盾的判断不能同真，必有一假</strong>。公式为「A 不是非 A」。它反对<strong>自相矛盾</strong>（说话前后抵触），如「他现在既在又不在会议室」即违反矛盾律。"
            },
            {
                "type": "keypoint",
                "label": "排中律",
                "text": "排中律要求<strong>两个互相矛盾的判断不能同假，必有一真</strong>，须明确表态。公式为「要么 A，要么非 A」。它反对<strong>模棱两可、两不可</strong>，即在是非之间含糊其辞、不置可否。"
            },
            {
                "type": "keypoint",
                "label": "充足理由律",
                "text": "充足理由律要求<strong>任何一个真实的论断都必须有充足的理由支撑</strong>。公式为「A 真，因为 B 真且 B 能推出 A」。它反对<strong>理由虚假、推不出</strong>等谬误，强调言之成理、持之有故。"
            },
            {
                "type": "table",
                "headers": [
                    "规律",
                    "核心要求",
                    "反对的谬误"
                ],
                "rows": [
                    [
                        "同一律",
                        "概念、论断前后保持同一",
                        "偷换概念、偷换论题"
                    ],
                    [
                        "矛盾律",
                        "矛盾判断不能同真",
                        "自相矛盾"
                    ],
                    [
                        "排中律",
                        "矛盾判断不能同假，须明确",
                        "模棱两可、两不可"
                    ],
                    [
                        "充足理由律",
                        "论断须有充足理由支撑",
                        "理由虚假、推不出"
                    ]
                ]
            },
            {
                "type": "svg",
                "svg": "<svg viewBox=\"0 0 680 260\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"680\" height=\"260\" fill=\"#fbf3e3\"/><g font-size=\"13\" text-anchor=\"middle\"><rect x=\"30\" y=\"50\" width=\"140\" height=\"60\" rx=\"8\" fill=\"#e9d9b8\" stroke=\"#b08d4f\" stroke-width=\"2\"/><text x=\"100\" y=\"78\" fill=\"#7a5a2e\">同一律</text><text x=\"100\" y=\"100\" fill=\"#5b4636\" font-size=\"11\">A是A</text><rect x=\"190\" y=\"50\" width=\"140\" height=\"60\" rx=\"8\" fill=\"#a8cdf0\" stroke=\"#4a7de0\" stroke-width=\"2\"/><text x=\"260\" y=\"78\" fill=\"#0f3b5e\">矛盾律</text><text x=\"260\" y=\"100\" fill=\"#33536e\" font-size=\"11\">不能同真</text><rect x=\"350\" y=\"50\" width=\"140\" height=\"60\" rx=\"8\" fill=\"#9b7de0\" stroke=\"#7b4fe0\" stroke-width=\"2\"/><text x=\"420\" y=\"78\" fill=\"#fff\">排中律</text><text x=\"420\" y=\"100\" fill=\"#e8d5f7\" font-size=\"11\">不能同假</text><rect x=\"510\" y=\"50\" width=\"140\" height=\"60\" rx=\"8\" fill=\"#5aa832\" stroke=\"#3e6b2a\" stroke-width=\"2\"/><text x=\"580\" y=\"78\" fill=\"#fff\">充足理由律</text><text x=\"580\" y=\"100\" fill=\"#dff0c8\" font-size=\"11\">持之有故</text></g><path d=\"M100 140 V175 H580\" stroke=\"#8a6d3b\" stroke-width=\"2\" fill=\"none\" stroke-dasharray=\"5 4\"/><circle cx=\"340\" cy=\"215\" r=\"22\" fill=\"#a83c2c\"/><text x=\"340\" y=\"220\" font-size=\"12\" fill=\"#fff\" text-anchor=\"middle\">思维</text><text x=\"340\" y=\"245\" font-size=\"12\" fill=\"#5b4636\" text-anchor=\"middle\">四律共同保障思维的确定、一致、明确与有据</text></svg>",
                "caption": "同一律、矛盾律、排中律、充足理由律构成逻辑基本规律体系。"
            },
            {
                "type": "heading",
                "text": "二、常见逻辑谬误"
            },
            {
                "type": "table",
                "headers": [
                    "谬误名称",
                    "例子",
                    "解析"
                ],
                "rows": [
                    [
                        "偷换概念",
                        "「人是由猿猴进化来的，所以你爸妈是猴子」",
                        "把生物意义上的「人」偷换成具体某个人，混淆概念外延"
                    ],
                    [
                        "自相矛盾",
                        "「我从来不说真话，这句话也是假的」",
                        "既声称不说真话又自指为真，前后抵触"
                    ],
                    [
                        "模棱两可",
                        "「这事既不合法也不违法，你看着办」",
                        "在矛盾二者间含糊回避，违反排中律"
                    ],
                    [
                        "以偏概全",
                        "「我遇见的东北人都豪爽，东北人都豪爽」",
                        "以个别推全体，样本不足而草率概括"
                    ],
                    [
                        "不当预设",
                        "「你什么时候停止打你老婆」",
                        "预设「你打老婆」未经证实，隐含虚假前提"
                    ]
                ]
            },
            {
                "type": "example",
                "label": "分析示范",
                "text": "广告语「大家都说好，你还不买吗」隐含什么逻辑谬误？<br><br><strong>解析</strong>：这是典型的<strong>诉诸大众（以偏概全的变体）</strong>谬误。它用「大家都说好」这一未经证实的群体态度，来代替对产品本身的真实论证，试图以「多数人的选择」迫使他人跟随。逻辑上，「多数人认同」并不等于「事实为真、产品优良」。识别此类谬误的关键，是看论证是否提供了<strong>关于对象本身的充足理由</strong>，而非搬出人数或名气。"
            },
            {
                "type": "svg",
                "svg": "<svg viewBox=\"0 0 680 220\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"680\" height=\"220\" fill=\"#eef6f0\"/><g font-size=\"13\" text-anchor=\"middle\"><rect x=\"40\" y=\"50\" width=\"180\" height=\"60\" rx=\"8\" fill=\"#e05d44\" stroke=\"#a83c2c\" stroke-width=\"2\"/><text x=\"130\" y=\"78\" fill=\"#fff\">偷换概念</text><text x=\"130\" y=\"100\" fill=\"#ffe\" font-size=\"11\">A≠A</text><rect x=\"250\" y=\"50\" width=\"180\" height=\"60\" rx=\"8\" fill=\"#4a7de0\" stroke=\"#2f57a8\" stroke-width=\"2\"/><text x=\"340\" y=\"78\" fill=\"#fff\">自相矛盾</text><text x=\"340\" y=\"100\" fill=\"#dff\" font-size=\"11\">同真冲突</text><rect x=\"460\" y=\"50\" width=\"180\" height=\"60\" rx=\"8\" fill=\"#9b7de0\" stroke=\"#7b4fe0\" stroke-width=\"2\"/><text x=\"550\" y=\"78\" fill=\"#fff\">以偏概全</text><text x=\"550\" y=\"100\" fill=\"#e8d5f7\" font-size=\"11\">个别推全体</text></g><text x=\"340\" y=\"150\" font-size=\"13\" fill=\"#4a2b8a\" text-anchor=\"middle\">常见谬误三型：偷换、自相矛盾、以偏概全</text><text x=\"340\" y=\"185\" font-size=\"12\" fill=\"#5b4636\" text-anchor=\"middle\">识别要点：看概念是否同一、判断是否冲突、样本是否充足</text></svg>",
                "caption": "偷换概念、自相矛盾、以偏概全是最常见的三类逻辑谬误。"
            },
            {
                "type": "heading",
                "text": "三、概念与概念间的关系"
            },
            {
                "type": "keypoint",
                "label": "概念的定义",
                "text": "概念是<strong>反映事物本质属性的思维形式</strong>，由内涵（事物的本质属性）与外延（概念所指的对象范围）两方面构成。明确概念，就是要明确其内涵与外延，避免含糊与混淆。"
            },
            {
                "type": "keypoint",
                "label": "概念间的关系",
                "text": "两个概念的外延关系主要有五种：<strong>同一关系、包含关系、交叉关系、矛盾关系、反对关系</strong>。把握这些关系，是正确运用判断与推理的前提，也是避免「偷换概念」的基础。"
            },
            {
                "type": "svg",
                "svg": "<svg viewBox=\"0 0 680 260\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"680\" height=\"260\" fill=\"#f3f8fb\"/><g font-size=\"12\" text-anchor=\"middle\" fill=\"#33485a\"><g transform=\"translate(60,60)\"><circle cx=\"40\" cy=\"40\" r=\"30\" fill=\"#a8cdf0\" stroke=\"#4a7de0\" stroke-width=\"2\"/><circle cx=\"40\" cy=\"40\" r=\"14\" fill=\"#4a7de0\"/><text x=\"40\" y=\"95\">同一</text></g><g transform=\"translate(170,60)\"><circle cx=\"30\" cy=\"40\" r=\"30\" fill=\"#a8cdf0\" stroke=\"#4a7de0\" stroke-width=\"2\"/><circle cx=\"55\" cy=\"40\" r=\"20\" fill=\"#4a7de0\"/><text x=\"42\" y=\"95\">包含</text></g><g transform=\"translate(285,60)\"><circle cx=\"30\" cy=\"40\" r=\"28\" fill=\"#a8cdf0\" stroke=\"#4a7de0\" stroke-width=\"2\"/><circle cx=\"58\" cy=\"40\" r=\"28\" fill=\"#a8cdf0\" stroke=\"#4a7de0\" stroke-width=\"2\"/><text x=\"44\" y=\"95\">交叉</text></g><g transform=\"translate(405,60)\"><circle cx=\"30\" cy=\"40\" r=\"28\" fill=\"#a8cdf0\" stroke=\"#4a7de0\" stroke-width=\"2\"/><circle cx=\"62\" cy=\"40\" r=\"28\" fill=\"#fff\" stroke=\"#4a7de0\" stroke-width=\"2\"/><text x=\"46\" y=\"95\">矛盾</text></g><g transform=\"translate(525,60)\"><circle cx=\"28\" cy=\"40\" r=\"26\" fill=\"#a8cdf0\" stroke=\"#4a7de0\" stroke-width=\"2\"/><circle cx=\"64\" cy=\"40\" r=\"26\" fill=\"#cfe3a8\" stroke=\"#7a9b3e\" stroke-width=\"2\"/><text x=\"46\" y=\"95\">反对</text></g></g><text x=\"340\" y=\"200\" font-size=\"13\" fill=\"#3e5b6b\" text-anchor=\"middle\">概念外延五关系：同一·包含·交叉·矛盾·反对</text><text x=\"340\" y=\"235\" font-size=\"12\" fill=\"#5b4636\" text-anchor=\"middle\">矛盾关系「非此即彼」，反对关系之外还有第三可能</text></svg>",
                "caption": "以欧拉图示意概念外延的五种关系，是识别偷换概念的工具。"
            },
            {
                "type": "warn",
                "label": "易混·矛盾与反对",
                "text": "「<strong>矛盾关系</strong>」与「<strong>反对关系</strong>」最易混：矛盾关系是<strong>非此即彼</strong>（如「生」与「死」，没有第三态）；反对关系<strong>之外仍有其他可能</strong>（如「黑」与「白」之间还有红、黄等）。排中律只适用于矛盾关系，对反对关系不能强行「二选一」。"
            },
            {
                "type": "list",
                "items": [
                    "同一关系：两概念外延完全重合（如「北京」与「中国首都」）",
                    "包含关系：一概念外延包含另一概念（如「学生」包含「中学生」）",
                    "交叉关系：两概念部分重合（如「青年」与「教师」）",
                    "矛盾关系：外延互斥且相加为全集（如「男」与「女」）",
                    "反对关系：外延互斥但相加不足全集（如「红」与「绿」）"
                ]
            },
            {
                "type": "heading",
                "text": "四、本课小结"
            },
            {
                "type": "tip",
                "label": "拓展",
                "text": "识别逻辑谬误是「批判性思维」的起点。日常阅读新闻、评论与广告时，可带着四个问题审视：概念前后是否同一？判断是否自相矛盾？表态是否模棱两可？理由是否充足真实？养成这种习惯，便不易被似是而非的言辞带偏。"
            },
            {
                "type": "list",
                "items": [
                    "逻辑四律：同一、矛盾、排中、充足理由",
                    "常见谬误：偷换概念、自相矛盾、模棱两可、以偏概全、不当预设",
                    "概念关系：同一、包含、交叉、矛盾、反对五种",
                    "识别方法：概念要同一，判断要一致，理由要充足",
                    "欧拉图：直观呈现概念外延关系，辅助辨谬"
                ]
            }
        ],
        "exercises": [
            {
                "type": "choice",
                "question": "下列对「同一律」的理解，正确的一项是？",
                "options": [
                    "同一律要求判断前后可以随意变化",
                    "同一律要求在同一思维过程中概念或论断保持自身同一",
                    "同一律反对一切变化",
                    "同一律只适用于数学"
                ],
                "answer": "同一律要求在同一思维过程中概念或论断保持自身同一",
                "explanation": "同一律的公式是「A 是 A」，它要求在同一思维过程中，所使用的概念和论断必须保持自身同一，不能中途偷换，从而保证讨论对象前后一致。它反对偷换概念与偷换论题，并非反对一切合理变化，也不局限于数学领域。"
            },
            {
                "type": "choice",
                "question": "「这件事既不合法，也不违法，你看着办吧」违反了哪条逻辑规律？",
                "options": [
                    "同一律",
                    "矛盾律",
                    "排中律",
                    "充足理由律"
                ],
                "answer": "排中律",
                "explanation": "「合法」与「违法」是一对矛盾关系，排中律要求在矛盾判断中不能同假、必须明确表态。这句话在二者之间含糊回避、不置可否，犯了「模棱两可、两不可」的错误，直接违反排中律，而非矛盾律或同一律。"
            },
            {
                "type": "fill",
                "question": "概念的外延关系主要有五种：同一关系、包含关系、交叉关系、______关系和______关系。",
                "answer": "矛盾|反对",
                "explanation": "两个概念的外延关系分为同一、包含、交叉、矛盾、反对五种。矛盾关系非此即彼（如生与死），反对关系之外还有第三可能（如黑与白之间还有他色）。把握这五种关系，是明确概念、避免偷换概念的基础。"
            },
            {
                "type": "choice",
                "question": "广告语「大家都说好，你还不买吗」主要隐含哪种逻辑谬误？",
                "options": [
                    "诉诸大众（以偏概全变体）",
                    "自相矛盾",
                    "偷换概念",
                    "不当预设"
                ],
                "answer": "诉诸大众（以偏概全变体）",
                "explanation": "该广告用「大家都说好」这一未经证实的群体态度，来代替对产品本身的真实论证，试图以多数人的选择迫使他人跟随，属于诉诸大众的谬误。它并未自相矛盾或偷换概念，而是用人数替代理由，在逻辑上「多数认同」不等于「事实为真」。"
            },
            {
                "type": "choice",
                "question": "关于「矛盾关系」与「反对关系」的区别，说法正确的是？",
                "options": [
                    "二者完全相同",
                    "矛盾关系非此即彼，反对关系之外还有第三可能",
                    "反对关系非此即彼",
                    "矛盾关系之外还有第三可能"
                ],
                "answer": "矛盾关系非此即彼，反对关系之外还有第三可能",
                "explanation": "矛盾关系（如「生」与「死」）外延互斥且相加为全集，非此即彼；反对关系（如「红」与「绿」）外延互斥但相加不足全集，之外还有他者。排中律只适用于矛盾关系，对反对关系不能强行二选一，这是二者关键区别。"
            }
        ]
    },
    {
        "id": "xb1-u4-l2",
        "name": "二、运用有效的推理形式",
        "author": "（逻辑思维）",
        "chapter": "第四单元 逻辑的力量（语言积累、梳理与探究）",
        "difficulty": "中等",
        "content": [
            {
                "type": "heading",
                "text": "一、推理概说"
            },
            {
                "type": "keypoint",
                "label": "推理的定义",
                "text": "推理是从<strong>一个或几个已知判断（前提）推出一个新判断（结论）</strong>的思维形式。它由前提、结论和推理形式三部分构成。推理的有效性，取决于<strong>形式是否合乎逻辑规则</strong>，而非仅凭结论看似合理。"
            },
            {
                "type": "paragraph",
                "text": "推理按方向可分为演绎推理（由一般到个别）、归纳推理（由个别到一般）和类比推理（由个别到个别）。本单元重点学习演绎推理中的三段论、假言推理与选言推理，它们是议论性文章最常用的推理工具。"
            },
            {
                "type": "keypoint",
                "label": "演绎推理",
                "text": "演绎推理是<strong>前提真则结论必然真</strong>的推理。只要推理形式有效，由真实前提必能推出真实结论。它是科学论证与法律推理的支柱，典型代表即<strong>三段论</strong>。"
            },
            {
                "type": "table",
                "headers": [
                    "推理类型",
                    "方向",
                    "特点"
                ],
                "rows": [
                    [
                        "演绎推理",
                        "一般→个别",
                        "前提真则结论必真"
                    ],
                    [
                        "归纳推理",
                        "个别→一般",
                        "前提支持结论，未必必真"
                    ],
                    [
                        "类比推理",
                        "个别→个别",
                        "由相似推出相似，或然性强"
                    ]
                ]
            },
            {
                "type": "svg",
                "svg": "<svg viewBox=\"0 0 680 230\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"680\" height=\"230\" fill=\"#fbf3e3\"/><g font-size=\"13\" text-anchor=\"middle\"><rect x=\"40\" y=\"55\" width=\"170\" height=\"60\" rx=\"8\" fill=\"#e9d9b8\" stroke=\"#b08d4f\" stroke-width=\"2\"/><text x=\"125\" y=\"92\" fill=\"#7a5a2e\">演绎推理</text><rect x=\"255\" y=\"55\" width=\"170\" height=\"60\" rx=\"8\" fill=\"#a8cdf0\" stroke=\"#4a7de0\" stroke-width=\"2\"/><text x=\"340\" y=\"92\" fill=\"#0f3b5e\">归纳推理</text><rect x=\"470\" y=\"55\" width=\"170\" height=\"60\" rx=\"8\" fill=\"#9b7de0\" stroke=\"#7b4fe0\" stroke-width=\"2\"/><text x=\"555\" y=\"92\" fill=\"#fff\">类比推理</text></g><text x=\"125\" y=\"150\" font-size=\"12\" fill=\"#5b4636\" text-anchor=\"middle\">一般→个别</text><text x=\"340\" y=\"150\" font-size=\"12\" fill=\"#5b4636\" text-anchor=\"middle\">个别→一般</text><text x=\"555\" y=\"150\" font-size=\"12\" fill=\"#5b4636\" text-anchor=\"middle\">个别→个别</text><path d=\"M125 140 V170 H555\" stroke=\"#8a6d3b\" stroke-width=\"2\" fill=\"none\" stroke-dasharray=\"5 4\"/><text x=\"340\" y=\"200\" font-size=\"13\" fill=\"#4a2b8a\" text-anchor=\"middle\">三类推理以方向区分：演绎保真，归纳与类比提供或然支持</text></svg>",
                "caption": "演绎、归纳、类比三类推理按思维方向区分，效力各不相同。"
            },
            {
                "type": "heading",
                "text": "二、三段论推理"
            },
            {
                "type": "keypoint",
                "label": "结构式",
                "text": "三段论由<strong>大前提（一般原理）、小前提（特殊情况）、结论</strong>组成。经典式：<br>大前提：凡人皆有一死。<br>小前提：苏格拉底是人。<br>结论：苏格拉底会死。<br>其有效关键在于<strong>中项至少周延一次</strong>。"
            },
            {
                "type": "example",
                "label": "分析示范",
                "text": "请用三段论分析「 Plato 是哲学家，因为所有希腊人都是哲学家，Plato 是希腊人」。<br><br><strong>解析</strong>：这是一个标准三段论。大前提「所有希腊人都是哲学家」（一般原理），小前提「Plato 是希腊人」（特殊情况），结论「Plato 是哲学家」。中项「希腊人」在大前提中周延、在小前提中作主项亦周延，推理形式有效；前提若为真，结论必然为真。可见，只要前提真实且形式有效，演绎推理就能保证结论可靠。"
            },
            {
                "type": "warn",
                "label": "重点·三段论规则",
                "text": "三段论常见错误：①<strong>中项不周延</strong>（中项两次都不周延，推不出必然结论）；②<strong>大项/小项不当扩大</strong>；③<strong>四概念</strong>（同一语词实指不同概念，如「群众是真正的英雄，我是群众，所以我是英雄」偷换了「群众」的集合与非集合义）。这些都会使推理无效。"
            },
            {
                "type": "svg",
                "svg": "<svg viewBox=\"0 0 680 230\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"680\" height=\"230\" fill=\"#eef6f0\"/><g font-size=\"13\" text-anchor=\"middle\"><rect x=\"40\" y=\"50\" width=\"180\" height=\"50\" rx=\"8\" fill=\"#e9d9b8\" stroke=\"#b08d4f\" stroke-width=\"2\"/><text x=\"130\" y=\"80\" fill=\"#7a5a2e\">大前提·一般</text><rect x=\"250\" y=\"50\" width=\"180\" height=\"50\" rx=\"8\" fill=\"#a8cdf0\" stroke=\"#4a7de0\" stroke-width=\"2\"/><text x=\"340\" y=\"80\" fill=\"#0f3b5e\">小前提·特殊</text><rect x=\"460\" y=\"50\" width=\"180\" height=\"50\" rx=\"8\" fill=\"#5aa832\" stroke=\"#3e6b2a\" stroke-width=\"2\"/><text x=\"550\" y=\"80\" fill=\"#fff\">结论</text></g><text x=\"130\" y=\"140\" font-size=\"12\" fill=\"#5b4636\" text-anchor=\"middle\">凡人皆死</text><text x=\"340\" y=\"140\" font-size=\"12\" fill=\"#5b4636\" text-anchor=\"middle\">苏是人</text><text x=\"550\" y=\"140\" font-size=\"12\" fill=\"#5b4636\" text-anchor=\"middle\">苏会死</text><path d=\"M130 115 V165 H550\" stroke=\"#8a6d3b\" stroke-width=\"2\" fill=\"none\" stroke-dasharray=\"5 4\"/><text x=\"340\" y=\"200\" font-size=\"13\" fill=\"#4a2b8a\" text-anchor=\"middle\">前提真＋形式有效 → 结论必然真（中项须周延）</text></svg>",
                "caption": "三段论由大前提、小前提推出结论，中项周延是有效性关键。"
            },
            {
                "type": "heading",
                "text": "三、假言推理与选言推理"
            },
            {
                "type": "keypoint",
                "label": "假言推理",
                "text": "假言推理以<strong>条件判断（如果……那么……）</strong>为大前提。常见「充分条件假言推理」：肯定前件则肯定后件（若 P 则 Q，P 真，故 Q 真）；否定后件则否定前件（非 Q，故非 P）。<strong>不可由否定前件推否定后件</strong>，那是谬误。"
            },
            {
                "type": "keypoint",
                "label": "选言推理",
                "text": "选言推理以<strong>选言判断（或者……或者……）</strong>为大前提。若选言支穷尽且否定其一必肯定其余（排除法），则为有效；若选言支未穷尽，则不能由否定部分支推出确定结论，否则犯「不当选言」错误。"
            },
            {
                "type": "table",
                "headers": [
                    "推理形式",
                    "有效式",
                    "易犯错误"
                ],
                "rows": [
                    [
                        "充分条件假言",
                        "肯前推肯后、否后推否前",
                        "否前推否后、肯后推肯前"
                    ],
                    [
                        "选言推理",
                        "排除法（支穷尽时）",
                        "支未穷尽即断定"
                    ]
                ]
            },
            {
                "type": "example",
                "label": "错例与正解",
                "text": "下列推理是否有效？「如果天下雨，地就湿；现在地没湿，所以天没下雨。」<br><br><strong>解析</strong>：这是<strong>有效的充分条件假言推理</strong>，运用「否定后件则否定前件」规则：大前提「若下雨则地湿」，小前提「地没湿」（否定后件），结论「天没下雨」（否定前件），形式有效、结论可靠。若反过来「地湿了，所以下雨了」则无效——地湿也可能是洒水所致，犯了「肯后推肯前」的错误。"
            },
            {
                "type": "svg",
                "svg": "<svg viewBox=\"0 0 680 210\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"680\" height=\"210\" fill=\"#f3f8fb\"/><g font-size=\"13\" text-anchor=\"middle\"><rect x=\"40\" y=\"50\" width=\"280\" height=\"55\" rx=\"8\" fill=\"#e05d44\" stroke=\"#a83c2c\" stroke-width=\"2\"/><text x=\"180\" y=\"83\" fill=\"#fff\">假言推理·如果P则Q</text><rect x=\"360\" y=\"50\" width=\"280\" height=\"55\" rx=\"8\" fill=\"#4a7de0\" stroke=\"#2f57a8\" stroke-width=\"2\"/><text x=\"500\" y=\"83\" fill=\"#fff\">选言推理·或A或B</text></g><text x=\"180\" y=\"140\" font-size=\"12\" fill=\"#5b4636\" text-anchor=\"middle\">肯前推肯后·否后推否前</text><text x=\"500\" y=\"140\" font-size=\"12\" fill=\"#5b4636\" text-anchor=\"middle\">排除法（支须穷尽）</text><text x=\"340\" y=\"185\" font-size=\"13\" fill=\"#3e5b6b\" text-anchor=\"middle\">假言重「条件」，选言重「穷尽」，二者皆忌逆推谬误</text></svg>",
                "caption": "假言推理与选言推理结构对照：条件关系与选言穷尽是有效性核心。"
            },
            {
                "type": "heading",
                "text": "四、本课小结"
            },
            {
                "type": "tip",
                "label": "拓展",
                "text": "在议论文写作中，学会自觉运用推理形式能让论证更严密。比如用三段论确立分论点，用假言推理展开「如果……那么……」的因果链，用选言推理通过排除法确立唯一结论。但务必记住：<strong>形式有效不等于结论真实</strong>，前提还必须为真，否则会陷入「有效的无效论证」。"
            },
            {
                "type": "list",
                "items": [
                    "推理=前提+形式+结论，有效性看形式",
                    "演绎保真、归纳与类比提供或然支持",
                    "三段论：大前提、小前提、结论，中项须周延",
                    "假言推理：肯前推肯后、否后推否前",
                    "选言推理：排除法须选言支穷尽",
                    "警惕四概念、中项不周延等无效推理"
                ]
            },
            {
                "type": "list",
                "items": [
                    "写作中可用三段论立分论点",
                    "可用假言推理铺因果论证链",
                    "可用选言排除法确立结论",
                    "前提真实＋形式有效，论证才可靠"
                ]
            }
        ],
        "exercises": [
            {
                "type": "choice",
                "question": "关于「演绎推理」的特征，正确的是？",
                "options": [
                    "前提真则结论未必真",
                    "前提真且形式有效，则结论必然真",
                    "只能用于文学",
                    "结论是或然的"
                ],
                "answer": "前提真且形式有效，则结论必然真",
                "explanation": "演绎推理是由一般到个别的推理，只要推理形式有效、前提为真，结论就必然为真，这是它与归纳、类比（结论或然）的根本区别。若形式无效或前提虚假，即使结论碰巧正确，也不算有效论证。"
            },
            {
                "type": "choice",
                "question": "「所有希腊人都是哲学家，Plato 是希腊人，所以 Plato 是哲学家」属于？",
                "options": [
                    "归纳推理",
                    "有效的三段论",
                    "类比推理",
                    "无效推理"
                ],
                "answer": "有效的三段论",
                "explanation": "这是标准三段论：大前提「所有希腊人都是哲学家」、小前提「Plato 是希腊人」、结论「Plato 是哲学家」。中项「希腊人」至少周延一次，形式有效；若前提为真则结论必真，是有效的演绎推理，不是归纳或类比。"
            },
            {
                "type": "fill",
                "question": "充分条件假言推理的有效式有两条：肯定前件则肯定后件，以及否定______则否定______。",
                "answer": "后件|前件",
                "explanation": "充分条件假言推理「若 P 则 Q」的有效式为：肯定前件则肯定后件（P 真故 Q 真），否定后件则否定前件（非 Q 故非 P）。「否定前件推否定后件」「肯定后件推肯定前件」均为无效式，是常见推理错误。"
            },
            {
                "type": "choice",
                "question": "「如果天下雨地就湿；地没湿，所以天没下雨」的推理有效性是？",
                "options": [
                    "无效（否前推否后）",
                    "有效（否定后件推否定前件）",
                    "无效（肯后推肯前）",
                    "选言推理"
                ],
                "answer": "有效（否定后件推否定前件）",
                "explanation": "大前提「若下雨则地湿」，小前提「地没湿」否定后件，结论「天没下雨」否定前件，完全符合充分条件假言推理的「否后推否前」有效式，形式有效、结论可靠。若反向「地湿故下雨」才是肯后推肯前的无效式。"
            },
            {
                "type": "choice",
                "question": "「群众是真正的英雄，我是群众，所以我是英雄」犯了什么错误？",
                "options": [
                    "中项不周延",
                    "四概念（偷换集合与非集合义）",
                    "选言支不穷尽",
                    "否定后件"
                ],
                "answer": "四概念（偷换集合与非集合义）",
                "explanation": "大前提中「群众」是集合概念（整体），小前提中「群众」是非集合概念（个体成员），同一语词实指不同概念，构成「四概念」谬误，使三段论无效。这并非中项不周延或选言问题，而是概念偷换导致推理崩塌。"
            }
        ]
    },
    {
        "id": "xb1-u4-l3",
        "name": "三、采用合理的论证方法",
        "author": "（逻辑思维）",
        "chapter": "第四单元 逻辑的力量（语言积累、梳理与探究）",
        "difficulty": "中等",
        "content": [
            {
                "type": "heading",
                "text": "一、论证的要素"
            },
            {
                "type": "keypoint",
                "label": "论点",
                "text": "论点是<strong>作者所要证明的观点或主张</strong>，是论证的核心与归宿。一篇好的议论文，论点应<strong>鲜明、正确、有针对性</strong>，通常出现在标题或开头，并贯穿全文。"
            },
            {
                "type": "keypoint",
                "label": "论据",
                "text": "论据是<strong>用来证明论点的材料</strong>，分为事实论据（事例、数据、史实）与道理论据（名言、原理、定律）。论据必须<strong>真实、典型、充分</strong>，否则「推不出」结论。"
            },
            {
                "type": "keypoint",
                "label": "论证形式",
                "text": "论证形式是<strong>用论据证明论点的推理方式</strong>，即论点与论据之间的逻辑纽带。论证是否有效，取决于论证形式是否合乎推理规则（如前课所学三段论、假言、选言等）。"
            },
            {
                "type": "table",
                "headers": [
                    "要素",
                    "作用",
                    "要求"
                ],
                "rows": [
                    [
                        "论点",
                        "确立主张",
                        "鲜明、正确、有针对性"
                    ],
                    [
                        "论据",
                        "提供支撑",
                        "真实、典型、充分"
                    ],
                    [
                        "论证",
                        "建立逻辑纽带",
                        "合乎推理规则"
                    ]
                ]
            },
            {
                "type": "svg",
                "svg": "<svg viewBox=\"0 0 680 220\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"680\" height=\"220\" fill=\"#fbf3e3\"/><g font-size=\"13\" text-anchor=\"middle\"><rect x=\"40\" y=\"55\" width=\"180\" height=\"55\" rx=\"8\" fill=\"#e05d44\" stroke=\"#a83c2c\" stroke-width=\"2\"/><text x=\"130\" y=\"88\" fill=\"#fff\">论点</text><rect x=\"250\" y=\"55\" width=\"180\" height=\"55\" rx=\"8\" fill=\"#4a7de0\" stroke=\"#2f57a8\" stroke-width=\"2\"/><text x=\"340\" y=\"88\" fill=\"#fff\">论据</text><rect x=\"460\" y=\"55\" width=\"180\" height=\"55\" rx=\"8\" fill=\"#5aa832\" stroke=\"#3e6b2a\" stroke-width=\"2\"/><text x=\"550\" y=\"88\" fill=\"#fff\">论证</text></g><text x=\"130\" y=\"145\" font-size=\"12\" fill=\"#5b4636\" text-anchor=\"middle\">主张</text><text x=\"340\" y=\"145\" font-size=\"12\" fill=\"#5b4636\" text-anchor=\"middle\">材料</text><text x=\"550\" y=\"145\" font-size=\"12\" fill=\"#5b4636\" text-anchor=\"middle\">纽带</text><path d=\"M130 130 V165 H550\" stroke=\"#8a6d3b\" stroke-width=\"2\" fill=\"none\" stroke-dasharray=\"5 4\"/><text x=\"340\" y=\"195\" font-size=\"13\" fill=\"#4a2b8a\" text-anchor=\"middle\">「论点←（论证）←论据」：论据经有效论证支撑论点</text></svg>",
                "caption": "论证三要素——论点、论据、论证形式，构成议论文章的骨架。"
            },
            {
                "type": "heading",
                "text": "二、常见的论证方法"
            },
            {
                "type": "table",
                "headers": [
                    "论证方法",
                    "含义",
                    "例子"
                ],
                "rows": [
                    [
                        "举例论证",
                        "用典型事例证明论点",
                        "以「文王拘而演周易」证「逆境出人才」"
                    ],
                    [
                        "道理论证",
                        "引名言原理说理",
                        "引「业精于勤」证「勤能补拙」"
                    ],
                    [
                        "对比论证",
                        "正反对照突出论点",
                        "贤臣与小人对照论「亲贤远佞」"
                    ],
                    [
                        "比喻论证",
                        "用比喻形象说理",
                        "以「积土成山」喻「积善成德」"
                    ],
                    [
                        "因果论证",
                        "由因推果或由果溯因",
                        "由「奢靡」推「亡身」之果"
                    ]
                ]
            },
            {
                "type": "keypoint",
                "label": "举例论证",
                "text": "举例论证通过<strong>真实、典型的事例</strong>使论点具体化、有说服力。使用时要<strong>叙例精当、紧扣论点分析</strong>，避免「以叙代议」——光堆事例而不点明其与论点的逻辑关联，论证就会落空。"
            },
            {
                "type": "keypoint",
                "label": "道理论证",
                "text": "道理论证借助<strong>经典名言、科学原理、生活常理</strong>进行说理，使论证具有权威性与普遍性。引用须准确、贴切，并说明其与论点的推导关系，不能「引而不析」。"
            },
            {
                "type": "example",
                "label": "分析示范",
                "text": "下面这段文字用了什么论证方法？「骐骥一跃，不能十步；驽马十驾，功在不舍。锲而舍之，朽木不折；锲而不舍，金石可镂。」<br><br><strong>解析</strong>：这是<strong>对比论证与比喻论证结合</strong>。荀子以「骐骥」与「驽马」、「舍之」与「不舍」两两对照，凸显「持之以恒」的重要（对比）；又用「朽木」「金石」作比，将抽象的「坚持」化为可感形象（比喻）。两种手法叠加，使「学贵有恒」的论点既鲜明又生动，比单纯说教更有感染力。"
            },
            {
                "type": "svg",
                "svg": "<svg viewBox=\"0 0 680 220\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"680\" height=\"220\" fill=\"#eef6f0\"/><g font-size=\"12\" text-anchor=\"middle\" fill=\"#33485a\"><rect x=\"20\" y=\"55\" width=\"120\" height=\"55\" rx=\"6\" fill=\"#e9d9b8\" stroke=\"#b08d4f\" stroke-width=\"2\"/><text x=\"80\" y=\"88\">举例</text><rect x=\"150\" y=\"55\" width=\"120\" height=\"55\" rx=\"6\" fill=\"#a8cdf0\" stroke=\"#4a7de0\" stroke-width=\"2\"/><text x=\"210\" y=\"88\">道理</text><rect x=\"280\" y=\"55\" width=\"120\" height=\"55\" rx=\"6\" fill=\"#9b7de0\" stroke=\"#7b4fe0\" stroke-width=\"2\"/><text x=\"340\" y=\"88\" fill=\"#fff\">对比</text><rect x=\"410\" y=\"55\" width=\"120\" height=\"55\" rx=\"6\" fill=\"#5aa832\" stroke=\"#3e6b2a\" stroke-width=\"2\"/><text x=\"470\" y=\"88\" fill=\"#fff\">比喻</text><rect x=\"540\" y=\"55\" width=\"120\" height=\"55\" rx=\"6\" fill=\"#e0862e\" stroke=\"#b5651d\" stroke-width=\"2\"/><text x=\"600\" y=\"88\" fill=\"#fff\">因果</text></g><text x=\"340\" y=\"150\" font-size=\"13\" fill=\"#3e5b6b\" text-anchor=\"middle\">五种论证方法各有所长，常综合运用</text><text x=\"340\" y=\"185\" font-size=\"12\" fill=\"#5b4636\" text-anchor=\"middle\">选方法要看论点性质：抽象说理用比喻，正反分明用对比</text></svg>",
                "caption": "举例、道理、对比、比喻、因果五种论证方法，宜据论点选用。"
            },
            {
                "type": "heading",
                "text": "三、论证评估与驳论文"
            },
            {
                "type": "warn",
                "label": "重点·论证评估",
                "text": "阅读议论性文章时，须评估论证是否合理有效：①<strong>论点是否明确、有无偷换</strong>；②<strong>论据是否真实典型、有无以偏概全</strong>；③<strong>论证形式是否有效、有无推不出</strong>；④<strong>有无逻辑谬误</strong>（如前课所列）。四者皆过关，论证方为可靠。"
            },
            {
                "type": "keypoint",
                "label": "驳论文",
                "text": "驳论文是<strong>以反驳对方谬误来确立自己观点</strong>的议论文。常用策略：<strong>驳论点</strong>（直接证明对方观点错）、<strong>驳论据</strong>（指出对方材料虚假）、<strong>驳论证</strong>（指出对方推理无效）。「破立结合」，破中有立，方能服人。"
            },
            {
                "type": "list",
                "items": [
                    "驳论点：直接证明对方主张为假",
                    "驳论据：揭露对方材料虚假或不足",
                    "驳论证：指出对方推理形式无效",
                    "破立结合：先破后立，立中有破",
                    "语言：有理有据、以理服人，避免人身攻击"
                ]
            },
            {
                "type": "tip",
                "label": "写作任务·写驳论文",
                "text": "本单元写作任务为<strong>「尝试写驳论文」</strong>：先选定一个有争议的话题，梳理对方观点与理由；再运用逻辑知识，抓住其概念偷换、论据失实或推理无效之处予以批驳；最后正面提出并论证自己的主张。注意「对事不对人」，以逻辑取胜而非情绪取胜。"
            },
            {
                "type": "svg",
                "svg": "<svg viewBox=\"0 0 680 210\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"680\" height=\"210\" fill=\"#f3f8fb\"/><g font-size=\"13\" text-anchor=\"middle\"><rect x=\"40\" y=\"50\" width=\"180\" height=\"55\" rx=\"8\" fill=\"#e05d44\" stroke=\"#a83c2c\" stroke-width=\"2\"/><text x=\"130\" y=\"83\" fill=\"#fff\">树靶·对方观点</text><rect x=\"250\" y=\"50\" width=\"180\" height=\"55\" rx=\"8\" fill=\"#9b7de0\" stroke=\"#7b4fe0\" stroke-width=\"2\"/><text x=\"340\" y=\"83\" fill=\"#fff\">批驳·破其谬</text><rect x=\"460\" y=\"50\" width=\"180\" height=\"55\" rx=\"8\" fill=\"#5aa832\" stroke=\"#3e6b2a\" stroke-width=\"2\"/><text x=\"550\" y=\"83\" fill=\"#fff\">立论·建主张</text></g><path d=\"M130 120 V160 H550\" stroke=\"#8a6d3b\" stroke-width=\"2\" fill=\"none\" stroke-dasharray=\"5 4\"/><text x=\"340\" y=\"190\" font-size=\"13\" fill=\"#3e5b6b\" text-anchor=\"middle\">驳论文路径：树靶 → 批驳（驳论点/论据/论证）→ 立论</text></svg>",
                "caption": "驳论文「树靶—批驳—立论」三步走，破立结合方有力量。"
            },
            {
                "type": "heading",
                "text": "四、本课小结"
            },
            {
                "type": "list",
                "items": [
                    "论证三要素：论点鲜明、论据真实、论证有效",
                    "五法：举例、道理、对比、比喻、因果论证",
                    "评估四问：论点明否、论据真否、形式效否、有无谬误",
                    "驳论文：驳论点、驳论据、驳论证三者择一或兼用",
                    "破立结合，以理服人，不人身攻击"
                ]
            },
            {
                "type": "paragraph",
                "text": "逻辑单元至此收束：从发现谬误、到运用推理、再到合理论证，层层递进地训练同学们的批判性思维与说理能力。它既服务于阅读（评估他人论证），也服务于表达（建构自己论证），是高中语文「思维发展与提升」素养的重要落点。"
            }
        ],
        "exercises": [
            {
                "type": "choice",
                "question": "下列关于「论证三要素」的表述，正确的是？",
                "options": [
                    "论点、论据、论证形式",
                    "开头、中间、结尾",
                    "记叙、描写、抒情",
                    "标题、正文、结尾"
                ],
                "answer": "论点、论据、论证形式",
                "explanation": "论证由论点（主张）、论据（材料）、论证形式（论据到论点的逻辑纽带）三要素构成。论点须鲜明正确，论据须真实典型，论证形式须合乎推理规则。开头中间结尾是文章结构，记叙描写抒情是表达方式的划分，均非论证要素。"
            },
            {
                "type": "choice",
                "question": "「以文王拘而演周易证逆境出人才」运用的是？",
                "options": [
                    "道理论证",
                    "举例论证",
                    "比喻论证",
                    "因果论证"
                ],
                "answer": "举例论证",
                "explanation": "作者举周文王被拘禁而推演《周易》这一真实典型的历史事例，来证明「逆境出人才」的论点，属于举例论证。若引用名言原理则为道理论证，用比喻形象说理为比喻论证，此处是以事证理，故为举例论证。"
            },
            {
                "type": "fill",
                "question": "驳论文常用的三种反驳策略是：驳论点、驳______和驳______。",
                "answer": "论据|论证",
                "explanation": "驳论文以反驳对方谬误来确立己见，可从三处入手：驳论点（直接证其主张假）、驳论据（揭其材料虚假或不足）、驳论证（指其推理形式无效）。三者可单独或结合使用，核心都是「破中有立、以理服人」。"
            },
            {
                "type": "choice",
                "question": "评估一篇议论文论证是否合理，不应关注？",
                "options": [
                    "论点是否明确、有无偷换",
                    "论据是否真实典型、有无以偏概全",
                    "论证形式是否有效、有无推不出",
                    "作者外貌是否英俊"
                ],
                "answer": "作者外貌是否英俊",
                "explanation": "论证评估应看四点：论点是否明确无偷换、论据是否真实典型无以偏概全、论证形式是否有效无推不出、有无逻辑谬误。作者外貌与论证的逻辑有效性毫无关系，属明显无关项，这正是评估时应排除的无关因素。"
            },
            {
                "type": "choice",
                "question": "荀子「锲而不舍，金石可镂」的论证手法是？",
                "options": [
                    "仅用举例",
                    "对比论证与比喻论证结合",
                    "仅用因果",
                    "道理论证"
                ],
                "answer": "对比论证与比喻论证结合",
                "explanation": "荀子以「骐骥」与「驽马」、「舍之」与「不舍」两两对照显「持之以恒」之重要（对比），又用「朽木」「金石」作比将抽象坚持化为可感形象（比喻）。两法叠加使「学贵有恒」既鲜明又生动，比单纯说教更具说服力。"
            }
        ]
    }
  );
})();
