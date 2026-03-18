/* ══════════════════════════════════════════════════════════════
   app.js — Generic study app renderer.
   Reads SA_META, FLASHCARD_SECTIONS, EXERCISE_GROUPS from data.js
   and DIAGRAM_REGISTRY from diagrams.js.
   ══════════════════════════════════════════════════════════════ */

// ─── Shorthand tag expansion ──────────────────────────────────
// <f>...</f>   -> formula block in card answers
// <sf>...</sf>  -> inline formula in exercise steps
// <fr>n|d</fr> -> vertical fraction (numerator | denominator)
function expandTags(html) {
  return html
    .replace(/<fr>([\s\S]*?)\|([\s\S]*?)<\/fr>/g,
      '<span class="frac"><span class="frac-num">$1</span><span class="frac-den">$2</span></span>')
    .replace(/<f>([\s\S]*?)<\/f>/g,  '<span class="formula">$1</span>')
    .replace(/<sf>([\s\S]*?)<\/sf>/g, '<span class="step-formula">$1</span>');
}

// ─── Populate page header from SA_META ────────────────────────
function initHeader() {
  const badge = document.querySelector('#page-lernkarten .badge');
  if (badge) badge.textContent = SA_META.title + ' \u00b7 ' + SA_META.date;
  const brand = document.querySelector('.topbar-brand');
  if (brand) brand.innerHTML = SA_META.subject + '<span>\u00b7</span>' + SA_META.className;
}

// ─── Tab switching ────────────────────────────────────────────
function switchTab(pageId, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + pageId).classList.add('active');
  btn.classList.add('active');
  document.getElementById('nav-score').style.display =
    pageId === 'uebungen' ? 'inline-block' : 'none';
  const isOpen = document.getElementById('toc-sidebar').classList.contains('open');
  document.querySelectorAll('.page').forEach(p =>
    p.classList.toggle('toc-open', isOpen && p.classList.contains('active')));
  closeToc();
}

// ─── TOC ──────────────────────────────────────────────────────
let tocOpen = false;
function toggleToc() {
  tocOpen = !tocOpen;
  document.getElementById('toc-sidebar').classList.toggle('open', tocOpen);
  document.getElementById('toc-toggle-btn').classList.toggle('open', tocOpen);
  document.querySelectorAll('.page.active').forEach(p =>
    p.classList.toggle('toc-open', tocOpen));
}
function closeToc() {
  tocOpen = false;
  document.getElementById('toc-sidebar').classList.remove('open');
  document.getElementById('toc-toggle-btn').classList.remove('open');
  document.querySelectorAll('.page').forEach(p => p.classList.remove('toc-open'));
}
function jumpTo(pageId, anchorId) {
  const btn = [...document.querySelectorAll('.tab-btn')]
    .find(b => b.getAttribute('onclick').includes(pageId));
  if (btn) switchTab(pageId, btn);
  setTimeout(() => {
    const el = document.getElementById(anchorId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);
}

// ─── Build TOC from data ──────────────────────────────────────
function buildToc() {
  const toc = document.getElementById('toc-inner');

  // Lernkarten group
  toc.innerHTML += `<div class="toc-group-label">
    <div class="toc-dot" style="background:#4a9b6f"></div>Lernkarten</div>`;
  FLASHCARD_SECTIONS.forEach(sec => {
    toc.innerHTML += `<button class="toc-item"
      onclick="jumpTo('lernkarten','${sec.id}')">${sec.label}</button>`;
  });

  // Übungen group — build from exercise group data
  if (EXERCISE_GROUPS.length > 0) {
    toc.innerHTML += `<div class="toc-group-label" style="margin-top:.5rem">
      <div class="toc-dot" style="background:#e8522a"></div>Übungen</div>`;
    let exNum = 1;
    EXERCISE_GROUPS.forEach(grp => {
      const last = exNum + grp.exercises.length - 1;
      toc.innerHTML += `<button class="toc-item"
        onclick="jumpTo('uebungen','${grp.id}')">${grp.label} (${exNum}\u2013${last})</button>`;
      exNum = last + 1;
    });
  }
}

// ─── Build flashcard sections ─────────────────────────────────
let flippedSet = new Set(), totalCards = 0;

function buildFlashcards() {
  const container = document.getElementById('flashcard-sections');

  FLASHCARD_SECTIONS.forEach(sec => {
    const section = document.createElement('div');
    section.className = 'fc-section';
    section.id = sec.id;
    section.innerHTML = `
      <div class="section-title">
        <div class="dot" style="background:${sec.color}"></div>${sec.label}
      </div>
      <div class="cards" id="cards-${sec.id}"></div>`;
    container.appendChild(section);

    const grid = section.querySelector('.cards');

    sec.cards.forEach((card, i) => {
      const id = `${sec.id}-${i}`;
      totalCards++;
      const wrap = document.createElement('div');
      wrap.className = 'card-wrap';
      wrap.dataset.id = id;

      wrap.innerHTML = `
        <div class="card-inner">
          <div class="card-front" style="background:${sec.cardColor}">
            <div class="card-tag">${sec.label}</div>
            <div class="card-question">${card.q}</div>
            <div class="card-hint">\u21a9 zum Umdrehen</div>
          </div>
          <div class="card-back">
            <div class="card-answer-label" style="color:${sec.color}">Antwort</div>
            <div class="card-answer">${expandTags(card.a)}</div>
          </div>
        </div>`;

      // Style formula border colour to match section
      wrap.querySelectorAll('.formula').forEach(f => {
        f.style.borderLeftColor = sec.color;
      });

      wrap.addEventListener('click', () => {
        wrap.classList.toggle('flipped');
        const front = wrap.querySelector('.card-front');
        const back  = wrap.querySelector('.card-back');
        if (wrap.classList.contains('flipped')) {
          const backH = back.scrollHeight, frontH = front.offsetHeight;
          wrap.querySelector('.card-inner').style.minHeight =
            Math.max(frontH, backH) + 'px';
          flippedSet.add(id);
        } else {
          wrap.querySelector('.card-inner').style.minHeight = '';
          flippedSet.delete(id);
        }
        updateProgress();
      });

      grid.appendChild(wrap);
    });

    // "Übungen →" link if matching exercise groups exist
    const prefix = sec.id.replace('sec-', 'ex-');
    const matchingGroup = EXERCISE_GROUPS.find(g => g.id.startsWith(prefix));
    if (matchingGroup) {
      const link = document.createElement('a');
      link.className = 'fc-exercise-link';
      link.href = '#';
      link.innerHTML = '\u00dcbungen \u2192';
      link.onclick = (e) => {
        e.preventDefault();
        const btn = [...document.querySelectorAll('.tab-btn')]
          .find(b => b.getAttribute('onclick').includes('uebungen'));
        if (btn) switchTab('uebungen', btn);
        setTimeout(() => {
          const el = document.getElementById(matchingGroup.id);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
      };
      section.appendChild(link);
    }
  });

  document.getElementById('total-count').textContent = totalCards;
}

function updateProgress() {
  const pct = Math.round((flippedSet.size / totalCards) * 100);
  document.getElementById('flip-count').textContent = flippedSet.size;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-label').textContent = pct + ' %';
}

// ─── Build exercises ──────────────────────────────────────────
let exCorrect = 0, globalExIndex = 0;

function fmtV(v) { return Number.isInteger(v) ? String(v) : String(v).replace('.', ','); }

function buildExercises() {
  const container = document.getElementById('exercise-groups');
  if (!container) return;

  // Build exercise header from SA meta
  const exHeader = document.querySelector('#page-uebungen .page-header');
  if (exHeader && EXERCISE_GROUPS.length > 0) {
    exHeader.querySelector('.badge').textContent = SA_META.title + ' \u00b7 ' + SA_META.date;
    exHeader.querySelector('h2').innerHTML = '\u00dcbungs<span>aufgaben</span>';
    const desc = exHeader.querySelector('p');
    if (desc) desc.textContent = 'Finde die gesuchte Gr\u00f6\u00dfe';
  }

  let totalEx = 0;

  EXERCISE_GROUPS.forEach(grp => {
    const groupEl = document.createElement('div');
    groupEl.className = 'ex-group';
    groupEl.id = grp.id;
    groupEl.dataset.color = grp.color;
    groupEl.dataset.label = grp.label;
    groupEl.innerHTML = `<div class="section-title" style="margin-bottom:1rem; border-bottom-color:${grp.color}">
      <div class="dot" style="background:${grp.color}"></div>${grp.label}</div>`;
    container.appendChild(groupEl);

    // Get variables and build a unit lookup from group definition
    const vars = grp.variables;
    const varNames = vars.map(v => v.name);
    const unitMap = {};
    vars.forEach(v => { unitMap[v.name] = v.unit; });

    grp.exercises.forEach(ex => {
      const idx = globalExIndex++;
      totalEx++;

      const hasGiven = Object.keys(ex.given).length > 0;
      const hasDiagram = grp.diagram && DIAGRAM_REGISTRY[grp.diagram];
      const hasPrompt = !!ex.prompt;
      const isPromptMode = hasPrompt && !hasDiagram;

      // Build given pills from variables definition
      let pillsHTML = '';
      if (hasGiven) {
        varNames.forEach(v => {
          if (v === ex.find) {
            pillsHTML += `<span class="ex-given-pill unknown">${v} = ? ${unitMap[v]}</span>`;
          } else if (ex.given[v] !== undefined) {
            pillsHTML += `<span class="ex-given-pill">${v} = ${fmtV(ex.given[v])} ${unitMap[v]}</span>`;
          }
        });
      }

      // Diagram from registry
      let diagramHTML = '';
      if (hasDiagram) {
        diagramHTML = DIAGRAM_REGISTRY[grp.diagram](ex.given, ex.find);
      }

      const answerUnit = unitMap[ex.find] || '';
      const unitHTML = answerUnit ? `<span class="ex-unit">${answerUnit}</span>` : '';
      const stepsHTML = ex.steps.map(s => `<div>\u25b8 ${expandTags(s)}</div>`).join('');

      // Prompt-based layout (no diagram) vs diagram layout
      let bodyHTML;
      if (isPromptMode) {
        bodyHTML = `
          <div class="ex-body ex-body-prompt">
            <div>
              <div class="ex-prompt">${expandTags(ex.prompt)}</div>
              <div class="ex-input-row">
                <span class="ex-input-label">${ex.find} =</span>
                <input class="ex-input" type="text" inputmode="decimal"
                  placeholder="?" id="input-${idx}">
                ${unitHTML}
                <button class="ex-check-btn" onclick="checkAnswer(${idx})">Pr\u00fcfen</button>
              </div>
              <div class="ex-feedback" id="feedback-${idx}"></div>
              <button class="ex-show-solution" id="sol-btn-${idx}"
                onclick="toggleSolution(${idx})">L\u00f6sung anzeigen</button>
            </div>
          </div>`;
      } else {
        bodyHTML = `
          <div class="ex-body">
            <div class="ex-diagram">${diagramHTML}</div>
            <div>
              <div class="ex-givens">${pillsHTML}</div>
              <div class="ex-input-row">
                <span class="ex-input-label">${ex.find} =</span>
                <input class="ex-input" type="text" inputmode="decimal"
                  placeholder="?" id="input-${idx}">
                ${unitHTML}
                <button class="ex-check-btn" onclick="checkAnswer(${idx})">Pr\u00fcfen</button>
              </div>
              <div class="ex-feedback" id="feedback-${idx}"></div>
              <button class="ex-show-solution" id="sol-btn-${idx}"
                onclick="toggleSolution(${idx})">L\u00f6sung anzeigen</button>
            </div>
          </div>`;
      }

      const card = document.createElement('div');
      card.className = 'ex-card';
      card.style.borderLeftColor = grp.color;
      card.innerHTML = `
        <div class="ex-header">
          <div class="ex-num" style="color:${grp.color}">${idx + 1}</div>
          <div class="ex-title">Aufgabe ${idx + 1} \u2013 ${ex.label}</div>
          <div class="ex-find">${ex.find} gesucht</div>
        </div>
        ${bodyHTML}
        <div class="ex-solution" id="solution-${idx}">
          <div class="ex-solution-title">L\u00f6sungsweg</div>
          <div class="ex-steps">${stepsHTML}</div>
        </div>`;

      groupEl.appendChild(card);
    });
  });

  document.getElementById('ex-total').textContent  = totalEx;
  document.getElementById('nav-total').textContent = totalEx;
}

// Flatten all exercises into a lookup array for checkAnswer
function getAllExercises() {
  const all = [];
  EXERCISE_GROUPS.forEach(grp => {
    const unitMap = {};
    grp.variables.forEach(v => { unitMap[v.name] = v.unit; });
    grp.exercises.forEach(ex => all.push({ ...ex, _unitMap: unitMap }));
  });
  return all;
}

let _allExercises;

function parseInput(raw) {
  raw = raw.trim().replace(',', '.');
  if (raw.includes('/')) {
    const parts = raw.split('/');
    if (parts.length === 2) return parseFloat(parts[0]) / parseFloat(parts[1]);
  }
  return parseFloat(raw);
}

function checkAnswer(idx) {
  if (!_allExercises) _allExercises = getAllExercises();
  const ex = _allExercises[idx];
  const input    = document.getElementById(`input-${idx}`);
  const feedback = document.getElementById(`feedback-${idx}`);
  const val = parseInput(input.value);

  if (isNaN(val)) {
    feedback.textContent = 'Bitte eine Zahl eingeben (z.B. 5 oder 3/4).';
    feedback.className = 'ex-feedback err';
    return;
  }
  const answerUnit = ex._unitMap[ex.find] || '';
  const displayAnswer = ex.answerDisplay || fmtV(ex.answer);
  const unitSuffix = answerUnit ? ' ' + answerUnit : '';
  if (Math.abs(val - ex.answer) <= 0.05) {
    input.className = 'ex-input correct';
    feedback.textContent = `\u2713 Richtig! ${ex.find} = ${displayAnswer}${unitSuffix}`;
    feedback.className = 'ex-feedback ok';
    document.getElementById(`solution-${idx}`).classList.add('visible');
    if (!input.dataset.counted) {
      input.dataset.counted = '1';
      exCorrect++;
      document.getElementById('ex-correct').textContent  = exCorrect;
      document.getElementById('nav-correct').textContent = exCorrect;
    }
  } else {
    input.className = 'ex-input wrong';
    feedback.textContent = `\u2717 Nicht ganz \u2013 versuch\u2019s nochmal!`;
    feedback.className = 'ex-feedback err';
  }
}

function toggleSolution(idx) {
  const sol = document.getElementById(`solution-${idx}`);
  const btn = document.getElementById(`sol-btn-${idx}`);
  sol.classList.toggle('visible');
  btn.textContent = sol.classList.contains('visible') ? 'L\u00f6sung ausblenden' : 'L\u00f6sung anzeigen';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Enter' && e.target.classList.contains('ex-input')) {
    checkAnswer(parseInt(e.target.id.replace('input-', '')));
  }
});

// ─── Sticky section indicator ─────────────────────────────────
function initSectionIndicator() {
  const indicator = document.getElementById('ex-section-indicator');
  if (!indicator) return;
  const dot = indicator.querySelector('.dot');
  const label = indicator.querySelector('.indicator-label');
  const groups = document.querySelectorAll('.ex-group');
  if (groups.length === 0) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const grp = entry.target;
        dot.style.background = grp.dataset.color;
        label.textContent = grp.dataset.label;
      }
    });
  }, {
    rootMargin: '-' + (56 + 34 + 20) + 'px 0px -70% 0px',
    threshold: 0,
  });

  groups.forEach(g => observer.observe(g));

  // Show/hide indicator based on which tab is active + scroll position
  function updateVisibility() {
    const exPage = document.getElementById('page-uebungen');
    const isExTab = exPage && exPage.classList.contains('active');
    indicator.classList.toggle('visible', isExTab && window.scrollY > 200);
  }
  window.addEventListener('scroll', updateVisibility, { passive: true });

  // Also update on tab switch
  const origSwitchTab = window.switchTab;
  window.switchTab = function(pageId, btn) {
    origSwitchTab(pageId, btn);
    updateVisibility();
  };
}

// ─── Init ─────────────────────────────────────────────────────
initHeader();
buildToc();
buildFlashcards();
buildExercises();
initSectionIndicator();
