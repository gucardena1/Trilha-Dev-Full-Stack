// Fonte única de verdade da trilha: cada track vira uma seção no menu lateral.
// path é relativo à raiz do site (onde fica o index.html).
const TRACKS = [
  {
    id: "fundamentos",
    title: "1. Fundamentos & Lógica",
    lessons: [
      { file: "content/fundamentos/o-que-e-programar.html", title: "O que é programar?" },
      { file: "content/fundamentos/variaveis-e-tipos.html", title: "Variáveis, tipos e operadores" },
      { file: "content/fundamentos/condicionais.html", title: "Tomando decisões: if/else" },
      { file: "content/fundamentos/loops.html", title: "Repetição: loops" },
      { file: "content/fundamentos/funcoes.html", title: "Funções" },
      { file: "content/fundamentos/estruturas-de-dados.html", title: "Arrays, listas e objetos" },
      { file: "content/fundamentos/resolvendo-problemas.html", title: "Como pensar como programador" },
    ],
  },
  {
    id: "html-css",
    title: "2. HTML & CSS",
    lessons: [
      { file: "content/html-css/html-basico.html", title: "HTML: a estrutura da página" },
      { file: "content/html-css/html-semantica-formularios.html", title: "Semântica, formulários e acessibilidade" },
      { file: "content/html-css/css-basico.html", title: "CSS: seletores e box model" },
      { file: "content/html-css/css-flexbox-grid.html", title: "Flexbox e Grid" },
      { file: "content/html-css/css-responsivo-animacoes.html", title: "Responsividade e animações" },
    ],
  },
  {
    id: "javascript",
    title: "3. JavaScript",
    lessons: [
      { file: "content/javascript/js-basico.html", title: "JS básico: variáveis, funções e DOM" },
      { file: "content/javascript/js-eventos-assincronia.html", title: "Eventos, Promises e async/await" },
      { file: "content/javascript/js-es6-modulos.html", title: "ES6+ e módulos" },
      { file: "content/javascript/js-avancado.html", title: "Closures, this e padrões avançados" },
    ],
  },
  {
    id: "git-github",
    title: "4. Git & GitHub",
    lessons: [
      { file: "content/git-github/git-o-que-e.html", title: "O que é controle de versão" },
      { file: "content/git-github/git-comandos-basicos.html", title: "Comandos essenciais do dia a dia" },
      { file: "content/git-github/git-branches-merge.html", title: "Branches, merge e conflitos" },
      { file: "content/git-github/github-colaboracao.html", title: "GitHub: pull requests e code review" },
      { file: "content/git-github/git-boas-praticas.html", title: "Boas práticas de commits" },
    ],
  },
  {
    id: "sql",
    title: "5. SQL & Bancos de Dados",
    lessons: [
      { file: "content/sql/bancos-de-dados-o-que-sao.html", title: "O que é um banco relacional" },
      { file: "content/sql/sql-select-insert-update-delete.html", title: "CRUD: SELECT, INSERT, UPDATE, DELETE" },
      { file: "content/sql/sql-joins.html", title: "Relacionando tabelas com JOIN" },
      { file: "content/sql/sql-indices-performance.html", title: "Índices e performance" },
      { file: "content/sql/sql-normalizacao-transacoes.html", title: "Normalização e transações" },
    ],
  },
  {
    id: "php-laravel",
    title: "6. PHP & Laravel",
    lessons: [
      { file: "content/php-laravel/php-basico.html", title: "PHP básico" },
      { file: "content/php-laravel/php-oop.html", title: "Orientação a objetos em PHP" },
      { file: "content/php-laravel/laravel-introducao-mvc.html", title: "Introdução ao Laravel e MVC" },
      { file: "content/php-laravel/laravel-rotas-controllers.html", title: "Rotas, controllers e Blade" },
      { file: "content/php-laravel/laravel-eloquent-migrations.html", title: "Eloquent e migrations" },
      { file: "content/php-laravel/laravel-middleware-auth.html", title: "Middleware, autenticação e validação" },
    ],
  },
  {
    id: "vue",
    title: "7. Vue.js",
    lessons: [
      { file: "content/vue/vue-introducao-reatividade.html", title: "Introdução ao Vue e reatividade" },
      { file: "content/vue/vue-componentes.html", title: "Componentes, props e eventos" },
      { file: "content/vue/vue-composition-api.html", title: "Composition API" },
      { file: "content/vue/vue-router-pinia.html", title: "Vue Router e Pinia" },
      { file: "content/vue/vue-integracao-backend.html", title: "Integrando Vue com uma API" },
    ],
  },
  {
    id: "python",
    title: "8. Python",
    lessons: [
      { file: "content/python/python-basico.html", title: "Python básico" },
      { file: "content/python/python-funcoes-oop.html", title: "Funções e orientação a objetos" },
      { file: "content/python/python-casos-de-uso.html", title: "Scripts, automação e dados" },
    ],
  },
  {
    id: "testes",
    title: "9. Testes",
    lessons: [
      { file: "content/testes/por-que-testar.html", title: "Por que testar seu código?" },
      { file: "content/testes/testes-unitarios.html", title: "Testes unitários" },
      { file: "content/testes/testes-integracao-e2e.html", title: "Integração e end-to-end" },
      { file: "content/testes/tdd.html", title: "TDD: Test-Driven Development" },
    ],
  },
  {
    id: "arquitetura-performance",
    title: "10. Arquitetura & Performance",
    lessons: [
      { file: "content/arquitetura-performance/clean-code.html", title: "Clean Code" },
      { file: "content/arquitetura-performance/solid.html", title: "Princípios SOLID" },
      { file: "content/arquitetura-performance/padroes-de-projeto.html", title: "Padrões de projeto essenciais" },
      { file: "content/arquitetura-performance/arquitetura-em-camadas-api-rest.html", title: "Camadas e API REST" },
      { file: "content/arquitetura-performance/performance-frontend.html", title: "Performance no frontend" },
      { file: "content/arquitetura-performance/performance-backend.html", title: "Performance no backend" },
    ],
  },
  {
    id: "deploy-devtools",
    title: "11. Deploy, DevOps & Debug",
    lessons: [
      { file: "content/deploy-devtools/o-que-e-deploy.html", title: "O que é deploy e ambientes" },
      { file: "content/deploy-devtools/ci-cd.html", title: "CI/CD" },
      { file: "content/deploy-devtools/docker-basico.html", title: "Docker básico" },
      { file: "content/deploy-devtools/devtools-navegador.html", title: "DevTools do navegador" },
      { file: "content/deploy-devtools/metodologia-de-debug.html", title: "Metodologia para caçar bugs" },
    ],
  },
  {
    id: "gestao-softskills",
    title: "12. Gestão & Soft Skills",
    lessons: [
      { file: "content/gestao-softskills/entendendo-demandas.html", title: "Entendendo e quebrando demandas" },
      { file: "content/gestao-softskills/priorizacao-kanban-scrum.html", title: "Priorização, Kanban e Scrum" },
      { file: "content/gestao-softskills/estimativas-prazos.html", title: "Estimativas e prazos" },
      { file: "content/gestao-softskills/comunicacao-trabalho-em-equipe.html", title: "Comunicação e trabalho em equipe" },
      { file: "content/gestao-softskills/feedback-code-review.html", title: "Feedback e code review" },
      { file: "content/gestao-softskills/aprendizado-continuo.html", title: "Síndrome do impostor e aprendizado contínuo" },
    ],
  },
];

function siteRoot() {
  // Descobre quantos níveis de profundidade a página atual está da raiz,
  // olhando quantos "/" existem após o domínio/pasta base do projeto.
  const path = window.location.pathname;
  const marker = "trilha-dev-fullstack/";
  const idx = path.indexOf(marker);
  let rel = idx >= 0 ? path.slice(idx + marker.length) : path.replace(/^\//, "");
  const depth = rel.split("/").length - 1;
  return depth > 0 ? "../".repeat(depth) : "";
}

function currentFile() {
  const path = window.location.pathname;
  const marker = "trilha-dev-fullstack/";
  const idx = path.indexOf(marker);
  return idx >= 0 ? path.slice(idx + marker.length) : path.replace(/^\//, "");
}

function flatLessons() {
  const flat = [];
  TRACKS.forEach((track) => {
    track.lessons.forEach((lesson) => flat.push({ ...lesson, track }));
  });
  return flat;
}

function renderSidebar() {
  const root = document.getElementById("sidebar");
  if (!root) return;
  const base = siteRoot();
  const current = currentFile();

  let html = `
    <a class="sidebar-brand" href="${base}index.html">Trilha Dev Full Stack</a>
    <div class="sidebar-sub">Do zero ao avançado, com calma.</div>
  `;

  TRACKS.forEach((track, i) => {
    const hasActive = track.lessons.some((l) => l.file === current);
    html += `<div class="nav-track ${hasActive ? "open" : ""}" data-track="${track.id}">
      <div class="nav-track-title" onclick="this.parentElement.classList.toggle('open')">
        <span class="chevron">▶</span> ${track.title}
      </div>
      <div class="nav-lessons">`;
    track.lessons.forEach((lesson) => {
      const active = lesson.file === current ? "active" : "";
      html += `<a class="${active}" href="${base}${lesson.file}">${lesson.title}</a>`;
    });
    html += `</div></div>`;
  });

  root.innerHTML = html;
}

function renderFooterNav() {
  const root = document.getElementById("lesson-footer-nav");
  if (!root) return;
  const base = siteRoot();
  const current = currentFile();
  const flat = flatLessons();
  const idx = flat.findIndex((l) => l.file === current);
  if (idx === -1) return;

  const prev = flat[idx - 1];
  const next = flat[idx + 1];

  let html = "";
  if (prev) {
    html += `<a class="prev" href="${base}${prev.file}"><span class="dir">← Anterior</span>${prev.title}</a>`;
  } else {
    html += `<span></span>`;
  }
  if (next) {
    html += `<a class="next" href="${base}${next.file}"><span class="dir">Próximo →</span>${next.title}</a>`;
  } else {
    html += `<a class="next" href="${base}index.html"><span class="dir">Fim da trilha →</span>Voltar ao início</a>`;
  }
  root.innerHTML = html;
}

const TRACK_EMOJI = {
  "fundamentos": "🧩",
  "html-css": "🎨",
  "javascript": "⚡",
  "git-github": "🔀",
  "sql": "🗄️",
  "php-laravel": "🐘",
  "vue": "💚",
  "python": "🐍",
  "testes": "🧪",
  "arquitetura-performance": "🏗️",
  "deploy-devtools": "🚀",
  "gestao-softskills": "🤝",
};

// Duração estimada só para exibição visual (nenhuma lição tem duração real cadastrada ainda).
function estimatedMinutes(title) {
  return 10 + (title.length % 15);
}

function lessonBadge(index) {
  return "0" + String.fromCharCode(97 + (index % 26));
}

function renderDashboard() {
  const root = document.getElementById("dashboard-root");
  if (!root) return;
  const base = siteRoot();
  const flat = flatLessons();
  const total = flat.length;
  const first = flat[0];

  let html = `
    <div class="dash-header">
      <div class="dash-header-left">
        <span class="dash-icon">📘</span>
        <span class="dash-title">Trilha Dev Full Stack</span>
      </div>
      <div class="dash-header-right">
        <div class="dash-progress-mini">
          <span>0/${total}</span>
          <div class="dash-progress-track"><div class="dash-progress-fill" style="width:0%"></div></div>
          <span>0%</span>
        </div>
        <button class="icon-btn" title="Buscar">🔍</button>
        <button class="icon-btn" title="Tema">🌓</button>
      </div>
    </div>

    <div class="stat-cards">
      <div class="stat-card stat-ok">
        <div class="stat-icon">✓</div>
        <div><div class="stat-label">ENTENDI</div><div class="stat-value">0</div></div>
      </div>
      <div class="stat-card stat-progress">
        <div class="stat-icon">⏱</div>
        <div><div class="stat-label">EM ANDAMENTO</div><div class="stat-value">0</div></div>
      </div>
      <div class="stat-card stat-bad">
        <div class="stat-icon">✕</div>
        <div><div class="stat-label">NÃO ENTENDI</div><div class="stat-value">0</div></div>
      </div>
      <div class="stat-card stat-available">
        <div class="stat-icon">☐</div>
        <div><div class="stat-label">DISPONÍVEIS</div><div class="stat-value">${total}</div></div>
      </div>
    </div>
  `;

  if (first) {
    html += `
      <div class="continue-card">
        <div class="continue-label">CONTINUAR ESTUDANDO</div>
        <div class="continue-body">
          <div>
            <div class="continue-title">${first.track.title.replace(/^\d+\.\s*/, "")} — ${first.title}</div>
            <div class="continue-meta">⏱ ${estimatedMinutes(first.title)} min · ${first.track.title}</div>
          </div>
          <a class="continue-btn" href="${base}${first.file}">Abrir lição →</a>
        </div>
      </div>
    `;
  }

  html += `<h2 class="section-title">📖 Trilha de estudo</h2>`;

  TRACKS.forEach((track) => {
    const emoji = TRACK_EMOJI[track.id] || "📂";
    html += `
      <div class="track-section">
        <div class="track-section-header">
          <div class="track-section-name"><span>${emoji}</span> ${track.title}</div>
          <div class="track-section-count">0/${track.lessons.length} concluídas · ${track.lessons.length} no total</div>
        </div>
        <div class="track-progress-track"><div class="track-progress-fill" style="width:0%"></div></div>
        <div class="lesson-grid">
    `;
    track.lessons.forEach((lesson, i) => {
      const isFirst = first && lesson.file === first.file;
      html += `
        <a class="lesson-card ${isFirst ? "status-current" : ""}" href="${base}${lesson.file}">
          <div class="lesson-badge">${lessonBadge(i)}</div>
          <div>
            <div class="lesson-card-title">${lesson.title}</div>
            <div class="lesson-card-time">⏱ ${estimatedMinutes(lesson.title)}min</div>
          </div>
        </a>
      `;
    });
    html += `</div></div>`;
  });

  root.innerHTML = html;
}

function renderFeedbackWidget() {
  const footer = document.getElementById("lesson-footer-nav");
  if (!footer) return;

  const box = document.createElement("div");
  box.className = "feedback-box";
  box.innerHTML = `
    <div class="feedback-question">Antes de seguir, confirme: você entendeu essa lição?</div>
    <div class="feedback-ok-label">OK?</div>
    <div class="feedback-buttons">
      <button type="button" class="fb-btn fb-ok">✓ Entendi</button>
      <button type="button" class="fb-btn fb-mid">~ Mais ou menos</button>
      <button type="button" class="fb-btn fb-bad">✕ Não entendi</button>
    </div>
    <textarea class="feedback-note" placeholder="Anotações, dúvidas, exemplos que ajudaram..."></textarea>
    <div class="feedback-actions">
      <button type="button" class="fa-btn">🔍 Buscar termo</button>
      <button type="button" class="fa-btn">🕐 Revisar em 3 dias</button>
      <button type="button" class="fa-btn">📋 Exportar pra Claude</button>
      <button type="button" class="fa-btn">✓ Marcar como resolvida</button>
    </div>
  `;
  footer.parentElement.insertBefore(box, footer);

  box.querySelectorAll(".fb-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      box.querySelectorAll(".fb-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderSidebar();
  renderFooterNav();
  renderDashboard();
  renderFeedbackWidget();
});
