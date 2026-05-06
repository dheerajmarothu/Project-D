/* ========== Engineering Roadmaps Hub — Application Logic ========== */

const STORAGE_KEY = 'erh_progress';
let currentView = 'home';
let currentBranch = null;

// ── Persistence ──
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch { return {}; }
}
function saveProgress(data) { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }

function getTopicKey(branchId, semIdx, topicIdx) {
  return `${branchId}_${semIdx}_${topicIdx}`;
}

function isTopicDone(branchId, semIdx, topicIdx) {
  return !!loadProgress()[getTopicKey(branchId, semIdx, topicIdx)];
}

function toggleTopic(branchId, semIdx, topicIdx) {
  const data = loadProgress();
  const key = getTopicKey(branchId, semIdx, topicIdx);
  data[key] = !data[key];
  saveProgress(data);
  updateProgressUI(branchId);
}

function getBranchProgress(branchId) {
  const branch = BRANCHES.find(b => b.id === branchId);
  if (!branch) return { done: 0, total: 0, pct: 0 };
  const data = loadProgress();
  let done = 0, total = 0;
  branch.semesters.forEach((sem, si) => {
    sem.topics.forEach((_, ti) => {
      total++;
      if (data[getTopicKey(branchId, si, ti)]) done++;
    });
  });
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
}

// ── Theme ──
function toggleTheme() {
  const html = document.documentElement;
  html.classList.toggle('dark');
  localStorage.setItem('erh_theme', html.classList.contains('dark') ? 'dark' : 'light');
  updateThemeIcons();
}

function updateThemeIcons() {
  const isDark = document.documentElement.classList.contains('dark');
  const sun = document.getElementById('sun-icon');
  const moon = document.getElementById('moon-icon');
  if (sun && moon) {
    sun.style.opacity = isDark ? '1' : '0';
    sun.style.transform = isDark ? 'rotate(0deg)' : 'rotate(90deg)';
    moon.style.opacity = isDark ? '0' : '1';
    moon.style.transform = isDark ? 'rotate(-90deg)' : 'rotate(0deg)';
  }
}

function initTheme() {
  const saved = localStorage.getItem('erh_theme');
  if (saved === 'light') document.documentElement.classList.remove('dark');
  else document.documentElement.classList.add('dark');
  updateThemeIcons();
}

// ── Navigation ──
function navigateTo(view, branchId) {
  currentView = view;
  currentBranch = branchId || null;
  const app = document.getElementById('app');
  const backBtn = document.getElementById('back-home-btn');

  if (view === 'home') {
    backBtn.style.display = 'none';
    app.innerHTML = renderHome();
  } else if (view === 'roadmap' && branchId) {
    backBtn.style.display = 'flex';
    app.innerHTML = renderRoadmap(branchId);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  requestAnimationFrame(() => {
    document.querySelectorAll('.section-animate').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  });
}

// ── Render: Home Page ──
function renderHome() {
  const overallStats = getOverallStats();
  return `
    <!-- Hero Section -->
    <section class="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-20 sm:pb-24">
      <div class="hero-blob blob-1"></div>
      <div class="hero-blob blob-2"></div>
      <div class="hero-blob blob-3"></div>
      <div class="relative max-w-4xl mx-auto text-center section-animate">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-sm font-medium mb-6 border border-brand-500/20">
          <span class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span></span>
          Free &amp; Open Learning Paths
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
          Master Any
          <span class="bg-gradient-to-r from-brand-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent"> Engineering Field</span>
          <br/>For Free
        </h1>
        <p class="mt-6 text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Structured skill-based roadmaps with curated YouTube resources. Track your progress, stay motivated, and build expertise — one topic at a time.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          <div class="glass rounded-xl px-5 py-3 border border-slate-200 dark:border-slate-700/50">
            <span class="text-2xl font-bold bg-gradient-to-r from-brand-500 to-cyan-500 bg-clip-text text-transparent">${BRANCHES.length}</span>
            <span class="block text-slate-500 dark:text-slate-400 mt-0.5">Branches</span>
          </div>
          <div class="glass rounded-xl px-5 py-3 border border-slate-200 dark:border-slate-700/50">
            <span class="text-2xl font-bold bg-gradient-to-r from-brand-500 to-cyan-500 bg-clip-text text-transparent">${overallStats.total}</span>
            <span class="block text-slate-500 dark:text-slate-400 mt-0.5">Topics</span>
          </div>
          <div class="glass rounded-xl px-5 py-3 border border-slate-200 dark:border-slate-700/50">
            <span class="text-2xl font-bold bg-gradient-to-r from-brand-500 to-cyan-500 bg-clip-text text-transparent">${overallStats.pct}%</span>
            <span class="block text-slate-500 dark:text-slate-400 mt-0.5">Completed</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Branch Cards Grid -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <h2 class="text-2xl sm:text-3xl font-bold text-center mb-3 section-animate">Choose Your Engineering Path</h2>
      <p class="text-center text-slate-500 dark:text-slate-400 mb-10 section-animate">Select a branch to explore its complete skill-based roadmap</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        ${BRANCHES.map((b, i) => renderBranchCard(b, i)).join('')}
      </div>
    </section>
  `;
}

function renderBranchCard(branch, index) {
  const { done, total, pct } = getBranchProgress(branch.id);
  const delay = (index % 8) * 100;
  
  let medal = '';
  if (pct === 100) medal = ' 💎';
  else if (pct >= 75) medal = ' 🥇';
  else if (pct >= 50) medal = ' 🥈';
  else if (pct > 0) medal = ' 🥉';

  return `
    <div class="branch-card section-animate rounded-2xl p-5 cursor-pointer bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500/40 dark:hover:border-brand-500/30 group"
         onclick="navigateTo('roadmap','${branch.id}')" style="animation-delay:${delay}ms">
      <div class="flex items-start justify-between mb-3">
        <span class="text-3xl">${branch.icon}</span>
        <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r ${branch.gradient} text-white">${branch.shortName}</span>
      </div>
      <h3 class="font-bold text-lg mb-1.5 group-hover:text-brand-500 transition-colors">${branch.name}</h3>
      <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">${branch.description}</p>
      <div class="space-y-2">
        <div class="flex justify-between text-xs font-medium">
          <span class="text-slate-500 dark:text-slate-400">${done}/${total} topics</span>
          <span class="text-brand-500 font-bold" id="medal-${branch.id}">${pct}%${medal}</span>
        </div>
        <div class="h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div class="h-full rounded-full bg-gradient-to-r ${branch.gradient} progress-bar-fill" style="width:${pct}%"></div>
        </div>
      </div>
    </div>
  `;
}

function getOverallStats() {
  let done = 0, total = 0;
  BRANCHES.forEach(b => {
    const p = getBranchProgress(b.id);
    done += p.done;
    total += p.total;
  });
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
}

// ── Render: Roadmap Page ──
function renderRoadmap(branchId) {
  const branch = BRANCHES.find(b => b.id === branchId);
  if (!branch) return '<p class="text-center py-20">Branch not found.</p>';
  const { done, total, pct } = getBranchProgress(branchId);

  let medal = '';
  if (pct === 100) medal = ' 💎';
  else if (pct >= 75) medal = ' 🥇';
  else if (pct >= 50) medal = ' 🥈';
  else if (pct > 0) medal = ' 🥉';

  return `
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <!-- Header -->
      <div class="section-animate text-center mb-10">
        <span class="text-5xl mb-4 inline-block">${branch.icon}</span>
        <h1 class="text-3xl sm:text-4xl font-black mb-2">${branch.name}</h1>
        <p class="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">${branch.description}</p>
        <!-- Overall Progress -->
        <div id="roadmap-progress" class="mt-6 max-w-md mx-auto">
          <div class="flex justify-between text-sm font-medium mb-1.5">
            <span class="text-slate-600 dark:text-slate-300">${done} of ${total} completed</span>
            <span class="text-brand-500 font-bold" id="roadmap-medal">${pct}%${medal}</span>
          </div>
          <div class="h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div class="h-full rounded-full bg-gradient-to-r ${branch.gradient} transition-all duration-700 progress-bar-fill" style="width:${pct}%"></div>
          </div>
        </div>
      </div>

      <!-- Skills Timeline -->
      <div class="roadmap-timeline space-y-8 pl-4">
        ${branch.semesters.map((sem, si) => renderSemester(branch, sem, si)).join('')}
      </div>
    </section>
  `;
}

function renderSemester(branch, sem, semIdx) {
  const data = loadProgress();
  const semDone = sem.topics.filter((_, ti) => data[getTopicKey(branch.id, semIdx, ti)]).length;
  const semPct = Math.round((semDone / sem.topics.length) * 100);

  return `
    <div class="section-animate">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-full bg-gradient-to-br ${branch.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg z-10 flex-shrink-0">
          ${semIdx + 1}
        </div>
        <div class="flex-1">
          <h2 class="font-bold text-lg">${sem.title}</h2>
          <span class="text-xs text-slate-500 dark:text-slate-400">${semDone}/${sem.topics.length} complete · ${semPct}%</span>
        </div>
      </div>
      <div class="ml-5 pl-8 border-l-0 space-y-3">
        ${sem.topics.map((topic, ti) => renderTopic(branch, semIdx, topic, ti)).join('')}
      </div>
    </div>
  `;
}

function renderTopic(branch, semIdx, topic, topicIdx) {
  const checked = isTopicDone(branch.id, semIdx, topicIdx);
  const checkId = `chk_${branch.id}_${semIdx}_${topicIdx}`;
  return `
    <div class="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-500/30 transition-all group ${checked ? 'opacity-70' : ''}">
      <input type="checkbox" id="${checkId}" class="topic-checkbox"
        ${checked ? 'checked' : ''}
        onchange="toggleTopic('${branch.id}',${semIdx},${topicIdx}); debounceRefresh('${branch.id}');" />
      <label for="${checkId}" class="flex-1 cursor-pointer text-sm sm:text-base font-medium ${checked ? 'line-through text-slate-400 dark:text-slate-600' : ''}">${topic.name}</label>
      <a href="${topic.yt}" target="_blank" rel="noopener noreferrer"
        class="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors flex-shrink-0" title="Watch on YouTube">
        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 00.5 6.19 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.81zM9.54 15.57V8.43L15.82 12l-6.28 3.57z"/></svg>
        YT
      </a>
    </div>
  `;
}

// ── Progress UI Refresh ──
let refreshTimer = null;
function debounceRefresh(branchId) {
  clearTimeout(refreshTimer);
  refreshTimer = setTimeout(() => updateProgressUI(branchId), 50);
}

function updateProgressUI(branchId) {
  const branch = BRANCHES.find(b => b.id === branchId);
  if (!branch) return;
  const { done, total, pct } = getBranchProgress(branchId);
  
  let medal = '';
  if (pct === 100) medal = ' 💎';
  else if (pct >= 75) medal = ' 🥇';
  else if (pct >= 50) medal = ' 🥈';
  else if (pct > 0) medal = ' 🥉';

  const prog = document.getElementById('roadmap-progress');
  if (prog) {
    prog.querySelector('span:first-child').textContent = `${done} of ${total} completed`;
    const medalEl = document.getElementById('roadmap-medal');
    if (medalEl) medalEl.textContent = `${pct}%${medal}`;
    prog.querySelector('div > div').style.width = `${pct}%`;
  }
  
  // Re-render to update line-through styles

  if (currentView === 'roadmap' && currentBranch === branchId) {
    navigateTo('roadmap', branchId);
  }
}

// ── Intersection Observer for Scroll Animations ──
function initObserver() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.section-animate').forEach(el => el.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.section-animate').forEach(el => obs.observe(el));
}

// ── Navbar Scroll Effect ──
function initNavbar() {
  let lastScroll = 0;
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.classList.add('shadow-lg', 'shadow-slate-200/50', 'dark:shadow-slate-900/50');
    } else {
      navbar.classList.remove('shadow-lg', 'shadow-slate-200/50', 'dark:shadow-slate-900/50');
    }
    lastScroll = scrollY;
  }, { passive: true });
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  navigateTo('home');
  setTimeout(initObserver, 100);
});
