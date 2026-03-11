const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built to showcase my skills, projects, and experience as a software developer.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/Heights001/Portfolio",
    live: "https://heights-portfolio.vercel.app/",
    private: false
  },
  {
    title: "TrueTrace — Image Detection Platform",
    description:
      "A full-stack web application that detects whether images are AI-generated or real.",
    tech: ["React", "Node.js", "Express", "Firebase (Auth, Firestore, Storage)", "Sightengine AI API", "Tailwind CSS", "Deployments: Vercel (Frontend), Render (Backend)","Vite"],
    github: "https://github.com/Heights001/True-Trace-App",
    live: "https://true-trace-app.vercel.app/",
    private: false
  },
  {
    title: "Round-Up Digital Piggy Bank",
    description:
      "A fullstack fintech web application that automatically saves spare change from digital transactions by rounding up each purchase to the nearest whole amount number and sweeping the difference into a virtual savings wallet — bringing the familiar susu and piggy bank experience to mobile money and debit card spending.",
    tech: ["React", "Javascript", "Vite", "Firebase", "Node.js", "Express", "Firestore", "Tailwind CSS"],
    github: "https://github.com/Heights001/Round-Up",
    live: "https://round-up-change.vercel.app/",
    private: true
  },
  {
    title: "Reflections Detector App",
    description:
      "A small project which uses device camera or flash to try and detect reflections. A beginner project of hidden camera detection.",
    tech: ["React", "Javascript", "Vite"],
    github: "https://github.com/Heights001/Reflections-Detector",
    private: true
  }
];

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 8h-1V6A5 5 0 0 0 7 6v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zm-6 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.1-9H8.9V6a3.1 3.1 0 0 1 6.2 0v2z" />
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
);

function Projects() {
  return (
    <section id="projects" className="p-6 max-w-7xl mx-auto bg-gray-100">
      <div className="flex items-center mb-6">
        <div className="h-12 w-2 bg-green-500"></div>
        <h2 className="font-bold text-2xl sm:text-4xl ml-5">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(project => (
          <div
            key={project.title}
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <span
                className={`shrink-0 flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border ${
                  project.private
                    ? "bg-gray-100 text-gray-500 border-gray-200"
                    : "bg-green-50 text-green-700 border-green-200"
                }`}
              >
                {project.private ? <LockIcon /> : <GlobeIcon />}
                {project.private ? "Private" : "Public"}
              </span>
            </div>

            <p className="text-gray-600 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(t => (
                <span
                  key={t}
                  className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                className="text-green-600 font-medium hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              {project.live && (
                <a
                  href={project.live}
                  className="text-green-600 font-medium hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;