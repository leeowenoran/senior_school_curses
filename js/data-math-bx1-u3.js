/* ============================================================
 * 高一数学 · 必修 第一册 · 第一章 集合与常用逻辑用语
 * 第5课时：全称量词与存在量词（人教A版 §1.5）
 * 数据注入：math.bx1.points
 * ============================================================ */
(function () {
  var v = gzGetVolume('math', 'bx1');
  if (!v) return;
  v.points.push(

    /* ---------------- 第5课时 全称量词与存在量词 ---------------- */
    {
      id: 'bx1-u3-l1',
      name: '全称量词与存在量词',
      chapter: '第一章 集合与常用逻辑用语 · 1.5',
      difficulty: '中等',
      content: [
        { type: 'heading', text: '一、全称量词' },
        { type: 'paragraph', text: '表示整体范围的词语叫量词。当我们说“所有的”“任意的”“一切的”时，就是在用全称量词，它刻画命题对某个集合中的“每一个”元素都成立。' },
        { type: 'keypoint', label: '重点·全称量词', text: '短语“<strong>所有的</strong>”“<strong>任意一个</strong>”在逻辑中叫做<strong>全称量词</strong>，用符号 <strong>∀</strong> 表示。含有全称量词的命题叫<strong>全称量词命题</strong>，形式为 <strong>“∀x ∈ M, p(x)”</strong>，读作“对任意 x 属于 M，p(x) 成立”。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#eef4fc"/><ellipse cx="340" cy="100" rx="200" ry="70" fill="#7eb0e6" stroke="#2b5b9e" stroke-width="2.5"/><text x="340" y="48" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">∀x ∈ M，p(x) 恒成立</text><text x="340" y="106" font-size="16" fill="#1a3a5c" text-anchor="middle">集合 M 中每一个元素都满足 p</text><text x="340" y="185" font-size="14" fill="#33536e" text-anchor="middle">全称：整个区域都“点亮”</text></svg>', caption: '图1　全称量词命题：集合 M 内所有元素都满足性质 p。' },
        { type: 'list', items: ['“所有矩形的对角线都相等”是全称量词命题', '“任意实数 x，都有 x² ≥ 0”记作 ∀x ∈ R, x² ≥ 0', '判定全称命题为假，只需举出一个反例'] },
        { type: 'heading', text: '二、存在量词' },
        { type: 'keypoint', label: '重点·存在量词', text: '短语“<strong>存在一个</strong>”“<strong>至少有一个</strong>”叫做<strong>存在量词</strong>，用符号 <strong>∃</strong> 表示。含有存在量词的命题叫<strong>存在量词命题</strong>，形式为 <strong>“∃x ∈ M, p(x)”</strong>，读作“存在 x 属于 M，使 p(x) 成立”。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 210" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="210" fill="#eef4fc"/><ellipse cx="340" cy="100" rx="200" ry="70" fill="#eef4fc" stroke="#2b5b9e" stroke-width="2.5"/><circle cx="340" cy="100" r="10" fill="#e05d44"/><text x="340" y="48" font-size="17" fill="#2b5b9e" font-weight="bold" text-anchor="middle">∃x ∈ M，p(x) 成立</text><text x="340" y="106" font-size="16" fill="#1a3a5c" text-anchor="middle">M 中至少有一个元素（红点）满足 p</text><text x="340" y="185" font-size="14" fill="#33536e" text-anchor="middle">存在：至少一个点“点亮”</text></svg>', caption: '图2　存在量词命题：集合 M 中至少有一个元素满足性质 p。' },
        { type: 'example', label: '例题1', text: '判断命题“∃x ∈ R, x² = 1”的真假。<br><br><strong>解</strong>：取 x = 1（或 x = -1），都有 x² = 1 成立，说明<strong>至少存在一个</strong>实数满足条件，故该<strong>存在命题为真</strong>。' },
        { type: 'heading', text: '三、命题的否定' },
        { type: 'keypoint', label: '重点·量词互换', text: '命题的否定要<strong>同时改变量词和结论</strong>：<br>① 全称命题“∀x ∈ M, p(x)”的否定是<strong>存在命题</strong>“<strong>∃x ∈ M, ¬p(x)</strong>”；<br>② 存在命题“∃x ∈ M, p(x)”的否定是<strong>全称命题</strong>“<strong>∀x ∈ M, ¬p(x)</strong>”。<br>即<strong>“全称”与“存在”在否定时互换</strong>。' },
        { type: 'svg', svg: '<svg viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg"><rect width="680" height="180" fill="#eef4fc"/><rect x="90" y="72" width="150" height="52" rx="8" fill="#2b5b9e"/><text x="165" y="105" font-size="17" fill="#fff" font-weight="bold" text-anchor="middle">∀ 命题</text><rect x="440" y="72" width="150" height="52" rx="8" fill="#e05d44"/><text x="515" y="105" font-size="17" fill="#fff" font-weight="bold" text-anchor="middle">∃ 命题</text><path d="M250 98 L428 98" stroke="#2b5b9e" stroke-width="3"/><polygon points="428,98 413,91 413,105" fill="#2b5b9e"/><path d="M428 82 L250 82" stroke="#e05d44" stroke-width="3"/><polygon points="250,82 265,75 265,89" fill="#e05d44"/><text x="340" y="50" font-size="15" fill="#2b5b9e" font-weight="bold" text-anchor="middle">命题的否定 ⇄ 量词互换</text><text x="340" y="158" font-size="14" fill="#33536e" text-anchor="middle">全称命题的否定是存在命题，反之亦然</text></svg>', caption: '图3　命题的否定：全称量词与存在量词互换，同时否定结论。' },
        { type: 'example', label: '例题2', text: '写出命题“∀x ∈ R, x² ≥ 0”的否定。<br><br><strong>解</strong>：量词 ∀ 改为 ∃，结论“x² ≥ 0”否定为“x² &lt; 0”，故否定为 <strong>“∃x ∈ R, x² &lt; 0”</strong>。注意“≥”的否定是“&lt;”（不是“≤”）。' },
        { type: 'heading', text: '四、常见形式对照' },
        { type: 'table', headers: ['原命题', '量词', '否定命题', '量词'], rows: [['∀x ∈ M, p(x)', '∀（全称）', '∃x ∈ M, ¬p(x)', '∃（存在）'], ['∃x ∈ M, p(x)', '∃（存在）', '∀x ∈ M, ¬p(x)', '∀（全称）']] },
        { type: 'warn', label: '易错', text: '写命题否定时两类失误最高发：①<strong>只改结论不改量词</strong>，如把“∀x, p(x)”的否定写成“∀x, ¬p(x)”（仍为全称，错误）；②<strong>不等号否定写错</strong>，牢记“&gt;↔≤”“&lt;↔≥”“≥↔&lt;”“≤↔&gt;”，即带等号的取反后要换不等号并去掉等号。' },
        { type: 'tip', label: '记忆', text: '否定命题记住八字诀：<strong>“量词互换，结论取反”</strong>。先换 ∀↔∃，再把结论整体否定（注意不等号方向）。遇到“都有”“全都”这类隐含全称量词的语句，也要按全称命题处理其否定。' },
        { type: 'reading', text: '<strong>隐含量词的识别</strong>：日常与数学表述中常省略量词却仍含量词含义。如“实数的平方都非负”省略了“任意”，实为全称命题 ∀x∈R, x²≥0；“有人缺席了”省略了“存在”，实为存在命题。识别时抓关键词：<strong>“都、全部、一切、任意”→∀</strong>；<strong>“有、存在、至少有一个、某个”→∃</strong>。否定这类语句同样遵循“量词互换、结论取反”。' },
        { type: 'heading', text: '五、本课小结' },
        { type: 'list', items: ['全称量词 ∀：∀x∈M, p(x) 对每个元素成立', '存在量词 ∃：∃x∈M, p(x) 至少对一个元素成立', '全称命题的否定是存在命题，存在命题的否定是全称命题', '否定口诀：“量词互换，结论取反”', '不等号否定：≥↔<、≤↔>、>↔≤、<↔≥'] }
      ],
      exercises: [
        { type: 'choice', question: '命题“∀x ∈ R, x² ≥ 0”的否定是？', options: ['∃x ∈ R, x² < 0', '∀x ∈ R, x² < 0', '∃x ∈ R, x² ≥ 0', '∀x ∈ R, x² ≤ 0'], answer: '∃x ∈ R, x² < 0', explanation: '全称命题的否定是存在命题：量词 ∀ 改为 ∃，结论 x² ≥ 0 的否定为 x² < 0（注意“≥”的否定是“<”，不是“≤”）。故否定为 ∃x ∈ R, x² < 0。' },
        { type: 'fill', question: '命题“∃x ∈ R, x² = 1”的否定是 ______。', answer: '∀x∈R, x²≠1|∀x ∈ R, x²≠1', explanation: '存在命题的否定是全称命题：量词 ∃ 改为 ∀，结论 x² = 1 否定为 x² ≠ 1。故否定为 ∀x ∈ R, x² ≠ 1。' },
        { type: 'choice', question: '下列语句中使用全称量词的是？', options: ['有的三角形是等腰的', '存在一个实数 x 使 x + 1 = 0', '任意实数的平方都非负', '至少有一个正整数'], answer: '任意实数的平方都非负', explanation: '“任意”对应全称量词 ∀。其余“有的”“存在一个”“至少有一个”都对应存在量词 ∃。故选“任意实数的平方都非负”。' },
        { type: 'fill', question: '命题“∀x ∈ N, x ≥ 0”是______命题（填“真”或“假”）。', answer: '真', explanation: 'N 为自然数集（含 0 与正整数），任意自然数 x 都满足 x ≥ 0，故该全称命题为真。' },
        { type: 'choice', question: '命题“∃x ∈ R, x² + 1 = 0”的真假及其否定分别是？', options: ['真；∀x ∈ R, x² + 1 ≠ 0', '假；∀x ∈ R, x² + 1 ≠ 0', '假；∃x ∈ R, x² + 1 ≠ 0', '真；∃x ∈ R, x² + 1 ≠ 0'], answer: '假；∀x ∈ R, x² + 1 ≠ 0', explanation: '对任意实数 x 都有 x² ≥ 0，故 x² + 1 ≥ 1 > 0，不存在实数使 x² + 1 = 0，原命题为假。其否定为全称命题 ∀x ∈ R, x² + 1 ≠ 0（该否定为真）。故选“假；∀x ∈ R, x² + 1 ≠ 0”。' }
      ]
    }

  );
})();
