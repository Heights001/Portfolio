const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built to showcase my skills, projects, and experience as a software developer.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/Heights001/Portfolio",
    live: "https://heights-portfolio.vercel.app/"
  },
  {
    title: "TrueTrace — Image Detection Platform",
    description:
      "A full-stack web application that detects whether images are AI-generated or real.",
    tech: ["React", "Node.js", "Express", "Firebase (Auth, Firestore, Storage)", "Sightengine AI API", "Tailwind CSS", "Vite", "Deployments: Vercel (Frontend), Render (Backend)"],
    github: "https://github.com/Heights001/True-Trace-App",
    live: "https://true-trace-app.vercel.app/"
  },
  {
    title: "Round-Up Digital Piggy Bank",
    description:
      "A fullstack fintech web application that automatically saves spare change from digital transactions by rounding up each purchase to the nearest whole amount number and sweeping the difference into a virtual savings wallet — bringing the familiar susu and piggy bank experience to mobile money and debit card spending.",
    tech: ["React", "Javascript", "Vite", "Firebase", "Node.js", "Express", "Firestore", "Tailwind CSS"],
    github: "https://github.com/Heights001/Round-Up",
    live: "https://round-up-change.vercel.app/login"
  },
  {
    title: "Reflections Detector App",
    description:
      "A small project which uses device camera or flash to try and detect reflections. A beginner project of hidden camera detection.",
    tech: ["React", "Javascript", "Vite"],
    github: "https://github.com/Heights001/Reflections-Detector",
    live: ""
  }
];

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
            <h3 className="text-xl font-bold mb-2">
              {project.title}
            </h3>

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
