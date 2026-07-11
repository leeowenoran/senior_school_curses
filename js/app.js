// ===== 全局状态 =====
let currentSemester = null;
let currentLesson = null;
let currentChapterIdx = -1;
let currentLessonIdx = -1;

// 合并上册和下册数据
const allData = {
    up: typeof mathDataUp !== 'undefined' ? mathDataUp : null,
    down: typeof mathDataDown !== 'undefined' ? mathDataDown : null
};

// ===== 进度管理 =====
function getProgress() {
    try {
        return JSON.parse(localStorage.getItem('mathProgress') || '{}');
    } catch(e) { return {}; }
}

function saveProgress(progress) {
    localStorage.setItem('mathProgress', JSON.stringify(progress));
}

function markLessonComplete(lessonId) {
    const progress = getProgress();
    if (!progress.completed) progress.completed = [];
    if (!progress.completed.includes(lessonId)) {
        progress.completed.push(lessonId);
        saveProgress(progress);
    }
    updateProgressRing();
}

function isLessonCompleted(lessonId) {
    const progress = getProgress();
    return progress.completed && progress.completed.includes(lessonId);
}

function getTotalLessons() {
    let total = 0;
    for (const key in allData) {
        if (allData[key]) {
            allData[key].chapters.forEach(ch => total += ch.lessons.length);
        }
    }
    return total;
}

function getCompletedCount() {
    const progress = getProgress();
    return progress.completed ? progress.completed.length : 0;
}

function updateProgressRing() {
    const total = getTotalLessons();
    const completed = getCompletedCount();
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    const circle = document.getElementById('progressCircle');
    const text = document.getElementById('progressText');
    if (circle) {
        const circumference = 2 * Math.PI * 18;
        circle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
    }
    if (text) text.textContent = percent + '%';
}

// ===== 视图切换 =====
function switchView(viewName) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view' + viewName.charAt(0).toUpperCase() + viewName.slice(1)).classList.add('active');
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === viewName);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome() {
    switchView('home');
}

function goBackToSemester() {
    if (currentSemester) showSemester(currentSemester);
}

// ===== 学期视图 =====
function showSemester(semester) {
    currentSemester = semester;
    const data = allData[semester];
    if (!data) return;

    const headerEl = document.getElementById('semesterHeader');
    headerEl.innerHTML = `
        <h1>${data.icon} ${data.title}</h1>
        <p>${data.description}</p>
    `;

    const listEl = document.getElementById('chapterList');
    listEl.innerHTML = data.chapters.map((ch, idx) => {
        const completedCount = ch.lessons.filter(l => isLessonCompleted(l.id)).length;
        return `
        <div class="chapter-card" id="chapter-${idx}">
            <div class="chapter-header" onclick="toggleChapter(${idx})">
                <div class="chapter-icon" style="background: ${ch.color}22; color: ${ch.color};">
                    ${ch.icon}
                </div>
                <div class="chapter-title">
                    <h3>${ch.title}</h3>
                    <p>${ch.lessons.length} 个课时 · 已完成 ${completedCount}/${ch.lessons.length}</p>
                </div>
                <span class="chapter-arrow">▼</span>
            </div>
            <div class="lesson-list">
                ${ch.lessons.map((lesson, lidx) => `
                    <div class="lesson-item ${isLessonCompleted(lesson.id) ? 'completed' : ''}"
                         onclick="showLesson('${semester}', ${idx}, ${lidx})">
                        <div class="lesson-check">✓</div>
                        <span class="lesson-name">${lesson.title}</span>
                        ${lesson.difficulty ? `<span class="lesson-badge">${lesson.difficulty}</span>` : ''}
                    </div>
                `).join('')}
            </div>
        </div>`;
    }).join('');

    // 自动展开第一个未完成的章节
    const firstUncompleted = data.chapters.findIndex(ch =>
        ch.lessons.some(l => !isLessonCompleted(l.id))
    );
    const expandIdx = firstUncompleted >= 0 ? firstUncompleted : 0;
    setTimeout(() => toggleChapter(expandIdx), 100);

    switchView('semester');
}

function toggleChapter(idx) {
    const card = document.getElementById('chapter-' + idx);
    if (card) card.classList.toggle('expanded');
}

// ===== 课时视图 =====
function showLesson(semester, chapterIdx, lessonIdx) {
    currentSemester = semester;
    currentChapterIdx = chapterIdx;
    currentLessonIdx = lessonIdx;

    const data = allData[semester];
    const chapter = data.chapters[chapterIdx];
    const lesson = chapter.lessons[lessonIdx];
    currentLesson = lesson;

    const contentEl = document.getElementById('lessonContent');
    let html = `
        <div class="lesson-breadcrumb">${data.title} > ${chapter.title}</div>
        <h1 class="lesson-title">${lesson.icon || '📘'} ${lesson.title}</h1>
    `;

    // 渲染内容块
    if (lesson.content) {
        lesson.content.forEach(block => {
            html += renderContentBlock(block);
        });
    }

    // 渲染练习题
    if (lesson.exercises && lesson.exercises.length > 0) {
        html += `
            <div class="exercise-section">
                <h2 class="exercise-title">
                    <span class="exercise-title-icon">✏️</span>
                    课后练习（共 ${lesson.exercises.length} 题）
                </h2>
                ${lesson.exercises.map((ex, idx) => renderExercise(ex, idx)).join('')}
            </div>
        `;
    }

    // 完成提示
    html += `<div class="lesson-complete-banner" id="completeBanner">
        <h4>🎉 恭喜完成本课时！</h4>
        <p>你已经完成了本课时的学习，继续加油！</p>
    </div>`;

    contentEl.innerHTML = html;

    // 绑定练习题事件
    bindExerciseEvents();

    // 上/下课时按钮
    const prevBtn = document.getElementById('btnPrevLesson');
    const nextBtn = document.getElementById('btnNextLesson');
    const hasPrev = lessonIdx > 0 || chapterIdx > 0;
    const hasNext = lessonIdx < chapter.lessons.length - 1 || chapterIdx < data.chapters.length - 1;
    prevBtn.style.display = hasPrev ? '' : 'none';
    nextBtn.style.display = hasNext ? '' : 'none';

    // 渲染数学公式
    if (typeof renderMathInElement !== 'undefined') {
        renderMathInElement(contentEl, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false}
            ],
            throwOnError: false
        });
    }

    // 检查是否所有题都已做对
    checkAllExercisesDone();

    switchView('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderContentBlock(block) {
    switch(block.type) {
        case 'heading':
            return `<h2 class="lesson-section-title">${block.text}</h2>`;
        case 'paragraph':
            return `<p class="lesson-paragraph">${block.text}</p>`;
        case 'list':
            return `<ul class="lesson-list-ul">${block.items.map(item =>
                `<li>${item}</li>`).join('')}</ul>`;
        case 'keypoint':
            return `<div class="keypoint-box" data-label="${block.label || '重点'}">
                <p>${block.text}</p>
            </div>`;
        case 'tip':
            return `<div class="tip-box" data-label="${block.label || '提示'}">
                <p>${block.text}</p>
            </div>`;
        case 'warn':
            return `<div class="warn-box" data-label="${block.label || '注意'}">
                <p>${block.text}</p>
            </div>`;
        case 'formula':
            return `<div class="formula-block">${block.text}</div>`;
        case 'svg':
            return `<div class="svg-figure">
                ${block.svg}
                ${block.caption ? `<p class="figure-caption">图 ${block.caption}</p>` : ''}
            </div>`;
        case 'example':
            return `<div class="example-box">
                <h4>💡 ${block.title || '例题'}</h4>
                <p class="lesson-paragraph">${block.question}</p>
                ${block.solution ? `<div class="example-solution"><strong>解：</strong>${block.solution}</div>` : ''}
            </div>`;
        case 'table':
            return `<table class="lesson-table">
                <thead><tr>${block.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
                <tbody>${block.rows.map(row =>
                    `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`
                ).join('')}</tbody>
            </table>`;
        default:
            return `<p class="lesson-paragraph">${block.text || ''}</p>`;
    }
}

function renderExercise(ex, idx) {
    if (ex.type === 'fill') {
        return `
            <div class="exercise-card" data-exercise-idx="${idx}" data-answer="${ex.answer}">
                <div class="exercise-header">
                    <div class="exercise-number">${idx + 1}</div>
                    <div class="exercise-question">${ex.question}</div>
                </div>
                <div class="exercise-actions">
                    <input type="text" class="fill-input" placeholder="在此输入你的答案..."
                        style="padding:6px 16px;border:1px solid var(--border-color);border-radius:8px;font-size:15px;font-family:inherit;width:200px;">
                    <button class="btn-check" onclick="checkFillAnswer(${idx})">提交答案</button>
                    <button class="btn-show-answer" onclick="toggleExplanation(${idx})">查看解析</button>
                </div>
                <div class="explanation-box" id="explanation-${idx}">
                    <span class="answer-tag">正确答案：${ex.answer}</span>
                    <p>${ex.explanation}</p>
                </div>
            </div>
        `;
    }
    return `
        <div class="exercise-card" data-exercise-idx="${idx}" data-answer="${ex.answer}">
            <div class="exercise-header">
                <div class="exercise-number">${idx + 1}</div>
                <div class="exercise-question">${ex.question}</div>
            </div>
            <div class="exercise-options">
                ${ex.options.map((opt, oi) => {
                    const label = String.fromCharCode(65 + oi);
                    return `<div class="exercise-option" data-option="${label}" onclick="selectOption(${idx}, '${label}')">
                        <span class="option-label">${label}</span>
                        <span>${opt}</span>
                    </div>`;
                }).join('')}
            </div>
            <div class="exercise-actions">
                <button class="btn-check" onclick="checkAnswer(${idx})">提交答案</button>
                <button class="btn-show-answer" onclick="toggleExplanation(${idx})">查看解析</button>
            </div>
            <div class="explanation-box" id="explanation-${idx}">
                <span class="answer-tag">正确答案：${ex.answer}</span>
                <p>${ex.explanation}</p>
            </div>
        </div>
    `;
}

function bindExerciseEvents() {
    // 练习题事件通过 onclick 内联绑定
}

function selectOption(exIdx, label) {
    const card = document.querySelector(`[data-exercise-idx="${exIdx}"]`);
    if (!card) return;
    // 如果已经答对了，不再允许修改
    if (card.classList.contains('answered-correct')) return;

    card.querySelectorAll('.exercise-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    card.querySelector(`[data-option="${label}"]`).classList.add('selected');
}

function checkAnswer(exIdx) {
    const card = document.querySelector(`[data-exercise-idx="${exIdx}"]`);
    if (!card) return;
    const selected = card.querySelector('.exercise-option.selected');
    if (!selected) {
        alert('请先选择一个答案');
        return;
    }
    const selectedLabel = selected.dataset.option;
    const correctAnswer = card.dataset.answer;

    card.querySelectorAll('.exercise-option').forEach(opt => {
        const optLabel = opt.dataset.option;
        opt.classList.remove('correct', 'wrong');
        if (optLabel === correctAnswer) {
            opt.classList.add('correct');
        } else if (optLabel === selectedLabel && selectedLabel !== correctAnswer) {
            opt.classList.add('wrong');
        }
    });

    if (selectedLabel === correctAnswer) {
        card.classList.add('answered-correct');
        card.querySelector('.btn-check').textContent = '✓ 答对了';
        card.querySelector('.btn-check').disabled = true;
    } else {
        card.querySelector('.btn-check').textContent = '再试一次';
    }

    checkAllExercisesDone();
}

function checkFillAnswer(exIdx) {
    const card = document.querySelector(`[data-exercise-idx="${exIdx}"]`);
    if (!card) return;
    const input = card.querySelector('.fill-input');
    const userAnswer = input.value.trim();
    const correctAnswer = card.dataset.answer;

    if (!userAnswer) {
        alert('请先输入答案');
        return;
    }

    if (userAnswer === correctAnswer || userAnswer === correctAnswer.replace(/\s/g, '')) {
        card.classList.add('answered-correct');
        input.style.borderColor = 'var(--accent-green)';
        input.style.backgroundColor = '#E8F5E9';
        card.querySelector('.btn-check').textContent = '✓ 答对了';
        card.querySelector('.btn-check').disabled = true;
    } else {
        input.style.borderColor = 'var(--accent-pink)';
        input.style.backgroundColor = '#FFEBEE';
        card.querySelector('.btn-check').textContent = '再试一次';
    }

    checkAllExercisesDone();
}

function toggleExplanation(exIdx) {
    const el = document.getElementById('explanation-' + exIdx);
    if (el) {
        el.classList.toggle('show');
        if (el.classList.contains('show') && el.parentElement.classList.contains('answered-correct')) {
            el.querySelector('.answer-tag')?.classList.remove('wrong-tag');
        }
    }
}

function checkAllExercisesDone() {
    if (!currentLesson) return;
    const cards = document.querySelectorAll('.exercise-card');
    if (cards.length === 0) {
        // 没有练习题，直接标记完成
        markLessonComplete(currentLesson.id);
        document.getElementById('completeBanner')?.classList.add('show');
        return;
    }
    const allCorrect = Array.from(cards).every(c => c.classList.contains('answered-correct'));
    if (allCorrect) {
        markLessonComplete(currentLesson.id);
        document.getElementById('completeBanner')?.classList.add('show');
    }
}

function goPrevLesson() {
    const data = allData[currentSemester];
    if (currentLessonIdx > 0) {
        showLesson(currentSemester, currentChapterIdx, currentLessonIdx - 1);
    } else if (currentChapterIdx > 0) {
        const prevCh = data.chapters[currentChapterIdx - 1];
        showLesson(currentSemester, currentChapterIdx - 1, prevCh.lessons.length - 1);
    }
}

function goNextLesson() {
    const data = allData[currentSemester];
    const chapter = data.chapters[currentChapterIdx];
    if (currentLessonIdx < chapter.lessons.length - 1) {
        showLesson(currentSemester, currentChapterIdx, currentLessonIdx + 1);
    } else if (currentChapterIdx < data.chapters.length - 1) {
        showLesson(currentSemester, currentChapterIdx + 1, 0);
    }
}

// ===== 进度页面 =====
function showProgress() {
    const total = getTotalLessons();
    const completed = getCompletedCount();
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

    const overviewEl = document.getElementById('progressOverview');
    overviewEl.innerHTML = `
        <div class="progress-stat-card">
            <div class="stat-value">${completed}</div>
            <div class="stat-label">已完成课时</div>
        </div>
        <div class="progress-stat-card">
            <div class="stat-value">${total - completed}</div>
            <div class="stat-label">未完成课时</div>
        </div>
        <div class="progress-stat-card">
            <div class="stat-value">${total}</div>
            <div class="stat-label">总课时数</div>
        </div>
        <div class="progress-stat-card">
            <div class="stat-value">${percent}%</div>
            <div class="stat-label">完成进度</div>
        </div>
    `;

    const detailsEl = document.getElementById('progressDetails');
    let html = '';
    for (const key in allData) {
        if (!allData[key]) continue;
        const data = allData[key];
        html += `<h3 style="margin-bottom:16px;color:var(--text-primary);">${data.icon} ${data.title}</h3>`;
        data.chapters.forEach(ch => {
            const chCompleted = ch.lessons.filter(l => isLessonCompleted(l.id)).length;
            const chPercent = ch.lessons.length > 0 ? Math.round((chCompleted / ch.lessons.length) * 100) : 0;
            html += `
                <div class="progress-chapter">
                    <div class="progress-chapter-header">
                        <span class="progress-chapter-title">${ch.icon} ${ch.title}</span>
                        <span style="font-size:14px;color:var(--text-secondary);">${chCompleted}/${ch.lessons.length} (${chPercent}%)</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-bar-fill" style="width: ${chPercent}%; background: ${ch.color};"></div>
                    </div>
                </div>
            `;
        });
    }
    detailsEl.innerHTML = html;

    switchView('progress');
}

// ===== 返回顶部 =====
window.addEventListener('scroll', function() {
    const btn = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== 初始化 =====
window.addEventListener('DOMContentLoaded', function() {
    updateProgressRing();
    // 更新首页统计数字
    const upData = allData.up;
    const downData = allData.down;
    if (upData) {
        let upLessons = 0, upExercises = 0;
        upData.chapters.forEach(ch => {
            upLessons += ch.lessons.length;
            ch.lessons.forEach(l => {
                upExercises += (l.exercises ? l.exercises.length : 0);
            });
        });
        const el1 = document.getElementById('upLessonCount');
        const el2 = document.getElementById('upExerciseCount');
        if (el1) el1.textContent = upLessons;
        if (el2) el2.textContent = upExercises;
    }
    if (downData) {
        let downLessons = 0, downExercises = 0;
        downData.chapters.forEach(ch => {
            downLessons += ch.lessons.length;
            ch.lessons.forEach(l => {
                downExercises += (l.exercises ? l.exercises.length : 0);
            });
        });
        const el1 = document.getElementById('downLessonCount');
        const el2 = document.getElementById('downExerciseCount');
        if (el1) el1.textContent = downLessons;
        if (el2) el2.textContent = downExercises;
    }
});
