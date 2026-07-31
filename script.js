// script.js
function renderHero() {
  document.getElementById("heroName").textContent = PROFILE.name;
  document.getElementById("heroRole").textContent = PROFILE.role;
  document.getElementById("heroLocation").textContent = PROFILE.location;
  document.getElementById("heroStatus").firstChild.textContent = PROFILE.status;
  document.getElementById("heroHeadline").textContent = PROFILE.headline;
  document.getElementById("heroSummary").textContent = PROFILE.summary;
  document.title = `${PROFILE.name} — ${PROFILE.role}`;
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = PROJECTS.map(
    (p) => `
    <article class="project-card">
      <div class="project-card__top">
        <span class="project-card__tag">${p.tag}</span>
      </div>
      <h3 class="project-card__title">${p.title}</h3>
      <p class="project-card__desc">${p.description}</p>
      <div class="project-card__stack">
        ${p.stack.map((s) => `<span class="chip">${s}</span>`).join("")}
      </div>
      <a href="${p.link}" class="project-card__link" target="_blank" rel="noopener noreferrer">view repo →</a>
    </article>`
  ).join("");
}

function renderSkills() {
  const grid = document.getElementById("skillsGrid");
  grid.innerHTML = SKILLS.map(
    (g) => `
    <div class="skill-group">
      <h3 class="skill-group__name">${g.group}</h3>
      <ul class="skill-group__list">
        ${g.items.map((i) => `<li>${i}</li>`).join("")}
      </ul>
    </div>`
  ).join("");
}

function renderContact() {
  const row = document.getElementById("contactRow");
  const links = [
    { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s+/g, "")}` },
    { label: "GitHub", value: "github.com/RonashSharma", href: PROFILE.github },
    { label: "LinkedIn", value: "linkedin.com/in/ronash-sharma", href: PROFILE.linkedin },
  ];
  row.innerHTML = links
    .map(
      (l) => `
    <a class="contact-card" href="${l.href}" target="_blank" rel="noopener noreferrer">
      <span class="contact-card__label">${l.label}</span>
      <span class="contact-card__value">${l.value}</span>
    </a>`
    )
    .join("");
}

function renderFooter() {
  document.getElementById("footerYear").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderProjects();
  renderSkills();
  renderContact();
  renderFooter();
});
