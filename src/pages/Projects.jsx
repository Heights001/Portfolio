import { ExternalLink, Lock } from "lucide-react";

function GithubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const featuredProjects = [
  {
    badge: "Fintech · Data Science",
    title: "VolForecast",
    subtitle: "Commodity Futures Volume Forecasting",
    businessDesc:
      "Gives traders and analysts a 10-trading-day forward view of market volume for Gold, Crude Oil, Natural Gas, Copper, and Coffee futures — with calibrated confidence bands and honest model-quality scores, so users know exactly how much to trust the forecast.",
    techDesc:
      "Python data pipeline (yfinance → PostgreSQL on Railway) feeds a SARIMA(1,1,1)(1,0,1,5) model trained in log-volume space with weekly seasonality. Rolling-origin backtests compute MASE, MAPE, and RMSE. FastAPI serves pre-computed forecasts; GitHub Actions handles nightly ingest and weekly retraining via protected admin endpoints. React + Recharts PWA on Vercel.",
    tech: ["Python", "FastAPI", "SARIMA", "PostgreSQL", "React", "Recharts", "Tailwind CSS", "Vite", "Railway", "GitHub Actions"],
    github: "https://github.com/Heights001/Nasvols-forecast",
    live: "https://nasvols-forecast.vercel.app",
    isPrivate: false,
  },
  {
    badge: "AI Detection Platform",
    title: "TrueTrace",
    subtitle: "Full-Stack AI-Generated Image Detection",
    businessDesc:
      "Gives content teams and media professionals instant confidence: know whether any image is AI-generated or real in seconds — cutting manual content review time significantly.",
    techDesc:
      "React frontend backed by a Node.js/Express REST API. Integrates the Sightengine AI API for async image classification via Firebase Storage. Firebase Auth secures user sessions; Firestore persists scan history. Deployed on Vercel (frontend) and Render (backend).",
    tech: ["React", "Node.js", "Express", "Firebase", "Sightengine AI", "Tailwind CSS", "Vite"],
    github: "https://github.com/Heights001/True-Trace-App",
    live: "https://true-trace-app.vercel.app/",
    isPrivate: false,
  },
  {
    badge: "Fintech · Mobile-First",
    title: "Round-Up",
    subtitle: "Digital Piggy Bank — Automated Micro-Savings",
    businessDesc:
      "Automates savings for mobile-money users by rounding each transaction up to the nearest whole amount and sweeping the difference into a virtual wallet — bringing the familiar susu culture into the digital era.",
    techDesc:
      "Mobile-first full-stack app built with React Native and TypeScript (NativeWind for styling). Node.js/Express backend handles transaction rounding logic, virtual wallet state management, and RESTful API endpoints. Architected for offline-first UX.",
    tech: ["React Native", "TypeScript", "Node.js", "Express", "NativeWind"],
    github: "https://github.com/Heights001/Round-Up",
    live: "https://round-up-change.vercel.app/",
    isPrivate: true,
  },
];

const otherProjects = [
  {
    title: "Portfolio Website",
    description:
      "This site — a responsive single-page React application with dark-mode-first design, EmailJS integration, and Tailwind CSS v4.",
    tech: ["React", "Tailwind CSS", "Vite", "EmailJS"],
    github: "https://github.com/Heights001/Portfolio",
    live: "https://heights-portfolio.vercel.app/",
    isPrivate: false,
  },
  {
    title: "Reflections Detector",
    description:
      "Computer vision experiment that uses device camera and flash to detect optical reflections — an early exploration of hidden camera detection.",
    tech: ["React", "JavaScript", "Vite"],
    github: "https://github.com/Heights001/Reflections-Detector",
    isPrivate: true,
  },
];

function TechBadge({ label, size = "md" }) {
  return (
    <span
      className={`font-medium text-zinc-400 bg-zinc-800 border border-zinc-700/50 rounded-full ${
        size === "sm" ? "text-xs px-2 py-0.5" : "text-xs px-3 py-1.5"
      }`}
    >
      {label}
    </span>
  );
}

function Projects() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Projects that ship and scale.
          </h2>
        </div>

        {/* Featured projects */}
        <div className="space-y-6 mb-14">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="group bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/10"
            >
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="inline-flex items-center text-xs font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full">
                  {project.badge}
                </span>
                {project.isPrivate && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500 border border-zinc-800 px-2.5 py-1 rounded-full">
                    <Lock className="w-3 h-3" /> Private Repo
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-zinc-500 text-sm mb-7">{project.subtitle}</p>

              {/* Dual-audience descriptions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-7">
                <div className="bg-zinc-800/40 rounded-xl p-5 border border-zinc-700/40">
                  <p className="text-xs font-semibold text-emerald-400/70 uppercase tracking-widest mb-2.5">
                    Business Impact
                  </p>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {project.businessDesc}
                  </p>
                </div>
                <div className="bg-zinc-800/40 rounded-xl p-5 border border-zinc-700/40">
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2.5">
                    Technical Execution
                  </p>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {project.techDesc}
                  </p>
                </div>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-7">
                {project.tech.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  <GithubIcon className="w-4 h-4" />
                  Source Code
                </a>
                {project.live && !project.isPrivate && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Other projects */}
        <div>
          <p className="text-zinc-600 text-xs font-semibold uppercase tracking-widest mb-5">
            More Projects
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherProjects.map((project) => (
              <article
                key={project.title}
                className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl p-6 transition-all duration-200"
              >
                <h4 className="text-white font-semibold mb-2">
                  {project.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <TechBadge key={t} label={t} size="sm" />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" /> Source Code
                  </a>
                  {project.live && !project.isPrivate && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-emerald-400 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  )}
                  {project.isPrivate && (
                    <span className="flex items-center gap-1 text-xs text-zinc-600">
                      <Lock className="w-3 h-3" /> Private
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
