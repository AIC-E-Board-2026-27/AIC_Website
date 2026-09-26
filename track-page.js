const TRACKS = {
  ai4all: {
    title: "AI4ALL",
    lede: "Open, practical AI workshops that help every student understand, question, and apply new technology in the fields they care about.",
    docket: [
      ["Open to all majors", "A welcoming starting point for every college."],
      ["No coding required", "Bring curiosity; leave with practical context."],
      ["Public learning", "Recordings and resources are shared when available."]
    ],
    overview: "AI4ALL makes artificial intelligence approachable without making it shallow. Each session connects real tools and ideas to the questions students are already asking in class, at work, and about their future.",
    note: ["Built for your starting point", "Bring questions, not prerequisites.", "Join live discussions, work through hands-on ideas, and find a way into AI that fits your major and goals."],
    focus: [
      ["01", "See the bigger picture", "Meet the ideas, tools, and decisions shaping how AI is used across industries."],
      ["02", "Make it practical", "Move from headlines to real examples through approachable workshops and guided demos."],
      ["03", "Keep the learning", "Follow up through the archive, future sessions, and a community that keeps asking better questions."]
    ],
    callout: ["AIC track interest form", "Find the AI4ALL sessions that fit your goals.", "Join AI4ALL"] ,
    fall: [
      ["12", "TUE · OCT 06", "5:00 – 6:00 PM", "AI in Finance & Markets", "Forecasting, fraud, risk models, and the limits of algorithmic decision-making."],
      ["13", "THU · OCT 22", "4:00 – 5:30 PM", "Building with LLMs — Hands-On", "Bring a laptop and build a small LLM-backed app end to end; no ML background required."],
      ["14", "TUE · NOV 03", "5:00 – 6:00 PM", "AI & Privacy", "What models retain, what regulation requires, and how to think about personal data."],
      ["15", "TUE · NOV 17", "5:00 – 6:00 PM", "AI in Manufacturing & Mobility", "Predictive maintenance, computer vision, autonomy, and Michigan's AI stack." ]
    ],
    winter: [
      ["16", "TUE · JAN 26", "5:00 – 6:00 PM", "Foundations: How Models Actually Learn", "A clear on-ramp to training, loss, and generalization for the Winter cohort."],
      ["17", "TUE · FEB 09", "5:00 – 6:00 PM", "AI in Law & Public Policy", "Contract review, e-discovery, and the regulation forming around model deployment."],
      ["18", "TUE · MAR 09", "5:00 – 6:00 PM", "AI & Creativity: Generative Media", "Image, audio, and video generation—plus the copyright questions behind them."],
      ["19", "TUE · MAR 23", "5:00 – 6:00 PM", "AI for Career Readiness 2027", "Resumes, portfolios, and interview preparation for AI-adjacent roles."],
      ["20", "TUE · APR 06", "5:00 – 6:00 PM", "What Comes After the Chatbot?", "Agents, embodied systems, and the research directions likely to shape the next few years."]
    ]
  },
  set: {
    title: "SET",
    lede: "A hands-on software engineering track for students who want to build with modern AI tools, learn by making, and turn projects into something they can show.",
    docket: [
      ["Hands-on labs", "Every session is designed around a working starter project."],
      ["Bring a laptop", "Build, test, debug, and leave with visible progress."],
      ["Make it public", "Grow through project pitches, code review, and the AIC GitHub."]
    ],
    overview: "SET is where ideas become working software. We practice the habits behind reliable builds—from choosing the right AI stack to testing, debugging, and collaborating on a real repository.",
    note: ["A build-first format", "Spend your time engineering, not setting up.", "Sessions start with a goal and a working base. Build in pairs, test the result, and leave with an optional stretch challenge."],
    focus: [
      ["01", "Build in pairs", "Work through concrete improvements with a partner and a clear outcome for the session."],
      ["02", "Use real workflows", "Practice Git, code review, APIs, agentic tools, and the engineering judgment that surrounds them."],
      ["03", "Show your work", "Pitch ideas, form teams, publish progress, and work toward the club's project showcase."]
    ],
    callout: ["AIC track interest form", "Bring a laptop. Leave with a project you can keep building.", "Join SET"],
    fall: [
      ["S1", "THU · OCT 01", "4:00 – 5:30 PM", "Using CLI Tools: Claude Code, Codex, Antigravity", "Install and use agentic command-line coding tools on a real repository."],
      ["S2", "THU · OCT 08", "4:00 – 5:30 PM", "Managing AI Workflows & Tooling", "Turn ad-hoc prompting into a repeatable engineering workflow with plugins, skills, and commands."],
      ["S3", "THU · OCT 29", "4:00 – 5:30 PM", "APIs vs. Subscriptions: Choosing Your AI Stack", "Learn when to call an API, when to buy a seat, and how to avoid provider-cost surprises."],
      ["S4", "THU · NOV 12", "4:00 – 5:30 PM", "Efficient Cost & Token Management", "Context windows, caching, and batching for projects with a real budget."],
      ["S5", "THU · DEC 03", "4:00 – 5:30 PM", "Responsible AI Use & Cybersecurity", "Prompt injection, secret handling, and academic-integrity policy for safer tool use."]
    ],
    winter: [
      ["S6", "THU · JAN 21", "4:00 – 5:30 PM", "Local AI: Running Models on Your Machine", "Open-weight models, quantization, runtimes, and when local beats an API."],
      ["S7", "THU · FEB 18", "4:00 – 5:30 PM", "Agentic & Autonomous Models", "Build a tool-using agent that plans, recovers from failure, and uses useful guardrails."],
      ["S8", "THU · MAR 18", "4:00 – 5:30 PM", "Mixture of Experts & Agent Panels", "Route work across specialized models and compare the architecture and cost tradeoffs."],
      ["S9", "THU · APR 08", "4:00 – 6:00 PM", "AI Tooling Certification Cohort", "Guided preparation and a proctored industry AI-tooling certification sitting."]
    ]
  },
  research: {
    title: "Research",
    lede: "A faculty-led reading community for students who want to understand the papers, debates, and open problems that sit underneath today's AI headlines.",
    docket: [
      ["Paper seminars", "Read primary work, not just summaries."],
      ["Shared in advance", "Papers are circulated before every discussion."],
      ["Monthly rhythm", "A focused seminar community through April."]
    ],
    overview: "Research Track is a place to slow down and think carefully. We read foundational and emerging work together, then use the room to test assumptions, ask sharper questions, and imagine what to investigate next.",
    note: ["A seminar, not a lecture", "Come ready to question the paper.", "Faculty select a theme and share the paper ahead of time. Members can volunteer to present a section, debate the methods, or propose a replication idea."],
    focus: [
      ["01", "Read the source", "Trace the core claim back to a paper, its evidence, and the questions it leaves open."],
      ["02", "Think together", "Use a Socratic format for disagreements, connections, and more rigorous discussion."],
      ["03", "Take the next step", "Build a foundation for DAIR exploration, independent projects, and graduate-school preparation."]
    ],
    callout: ["AIC track interest form", "Bring your perspective to the next paper seminar.", "Join Research"],
    fall: [
      ["R2", "FRI · OCT 16", "3:00 – 4:30 PM", "Classical & Statistical Machine Learning", "The pre-deep-learning canon that still wins on tabular data—and why baselines matter."],
      ["R3", "FRI · NOV 13", "3:00 – 4:30 PM", "Large Language Models", "Pretraining, scaling behavior, post-training, and the primary papers behind them."],
      ["R4", "FRI · DEC 11", "3:00 – 4:30 PM", "Architectures Beyond Transformers", "State-space models, recurrent revivals, and hybrids that compete with attention."]
    ],
    winter: [
      ["R5", "FRI · JAN 22", "3:00 – 4:30 PM", "Model Efficiency", "Distillation, sparsity, and quantization research for making large models affordable."],
      ["R6", "FRI · FEB 05", "3:00 – 4:30 PM", "Reinforcement Learning & Agentic AI", "Policy learning, RLHF, and open questions in long-horizon autonomous behavior."],
      ["R7", "FRI · FEB 19", "3:00 – 4:30 PM", "Computer Vision & Generative Diffusion", "From convolutions to diffusion and video models—the lineage of modern visual generation."],
      ["R8", "FRI · MAR 12", "3:00 – 4:30 PM", "AI Security & Adversarial ML", "Adversarial examples, jailbreaks, and data poisoning—how models fail under pressure."],
      ["R9", "FRI · MAR 26", "3:00 – 4:30 PM", "AI/ML Supply Chain & Model Provenance", "Where weights, datasets, and dependencies come from—and how provenance is verified."],
      ["R10", "FRI · APR 09", "3:00 – 4:30 PM", "AI Ethics, Fairness & Safety", "Bias evaluation, alignment research, and the hardest open questions in AI safety."]
    ]
  }
};

const activeTrack = TRACKS[document.body.dataset.track];

let lastNavScrollY = window.scrollY;
let navScrollTravel = 0;
const navList = document.querySelector(".nav-list");
const reducedNavMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let navBlurAnimation;
const setNavCentered = (centered) => {
  if (document.body.classList.contains("nav-scrolled") === centered) return;
  document.body.classList.toggle("nav-scrolled", centered);
  if (reducedNavMotion.matches || !navList) return;
  navBlurAnimation?.cancel();
  navBlurAnimation = navList.animate([
    { filter: "blur(0px)" },
    { filter: "blur(1.7px)", offset: .5 },
    { filter: "blur(0px)" }
  ], { duration: 200, easing: "ease-in-out" });
};
const updateNavPosition = () => {
  const scrollY = window.scrollY;
  const delta = scrollY - lastNavScrollY;

  if (scrollY <= 40) {
    setNavCentered(false);
    navScrollTravel = 0;
  } else if (delta !== 0) {
    if (Math.sign(delta) !== Math.sign(navScrollTravel)) navScrollTravel = 0;
    navScrollTravel += delta;
    if (navScrollTravel > 4) {
      setNavCentered(true);
      navScrollTravel = 0;
    } else if (navScrollTravel < -4) {
      setNavCentered(false);
      navScrollTravel = 0;
    }
  }

  lastNavScrollY = scrollY;
};
const restoreNavPosition = () => {
  navBlurAnimation?.cancel();
  lastNavScrollY = window.scrollY;
  navScrollTravel = 0;
  document.body.classList.toggle("nav-scrolled", lastNavScrollY > 40);
};
window.addEventListener("scroll", updateNavPosition, { passive: true });
window.addEventListener("pageshow", restoreNavPosition);
reducedNavMotion.addEventListener("change", (event) => {
  if (event.matches) navBlurAnimation?.cancel();
});
restoreNavPosition();

if (activeTrack) {
  const text = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  };
  const escapeHTML = (value) => String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[character]);

  text("[data-track-title]", activeTrack.title);
  text("[data-track-lede]", activeTrack.lede);

  const docket = document.querySelector("[data-docket]");
  if (docket) {
    docket.innerHTML = activeTrack.docket.map(([title, copy]) => `
      <div class="docket-item"><strong>${escapeHTML(title)}</strong><span>${escapeHTML(copy)}</span></div>
    `).join("");
  }

  text("[data-overview]", activeTrack.overview);
  text("[data-note-label]", activeTrack.note[0]);
  text("[data-note-title]", activeTrack.note[1]);
  text("[data-note-copy]", activeTrack.note[2]);

  const focusGrid = document.querySelector("[data-focus-grid]");
  if (focusGrid) {
    focusGrid.innerHTML = activeTrack.focus.map(([index, title, copy]) => `
      <article class="focus-card"><span class="focus-index">${escapeHTML(index)}</span><h3>${escapeHTML(title)}</h3><p>${escapeHTML(copy)}</p></article>
    `).join("");
  }

  const eventCard = ([id, date, time, title, copy]) => `
    <article class="event-card">
      <div class="event-top"><span class="event-id">${escapeHTML(id)}</span><span class="event-date">${escapeHTML(date)}</span></div>
      <h4>${escapeHTML(title)}</h4>
      <p>${escapeHTML(copy)}</p>
      <div class="event-meta"><span>${escapeHTML(time)}</span><span>Location TBA</span></div>
    </article>
  `;
  const fallEvents = document.querySelector("[data-fall-events]");
  const winterEvents = document.querySelector("[data-winter-events]");
  if (fallEvents) fallEvents.innerHTML = activeTrack.fall.map(eventCard).join("");
  if (winterEvents) winterEvents.innerHTML = activeTrack.winter.map(eventCard).join("");

  text("[data-callout-label]", activeTrack.callout[0]);
  text("[data-callout-title]", activeTrack.callout[1]);
  text("[data-callout-button]", activeTrack.callout[2]);
}
