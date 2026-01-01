const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built to showcase my skills, projects, and experience as a software developer.",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/Heights001/Portfolio",
    live: "https://heights001.github.io/Portfolio/"
  },
  {
    title: "True_Trace (Image analyzer App) ",
    description:
      "A web application that analyzes uploaded images and determines whether they are AI-generated or real — with user history and algorithmic scoring.",
    tech: ["React", "Firebase", "Tailwind CSS", "Vite"],
    github: "https://github.com/Heights001/True-Trace",
    live: ""
  },
  {
    title: "Reflections Detector App",
    description:
      "A small project which uses device camera or flash to try and detect reflections. A beginner project of hidden camera detection.",
    tech: ["React", "Javascript", "Vite"],
    github: "https://github.com/Heights001/Reflections-Detector",
    live: ""
  },
  {
    title: "Pizzeria Platform App",
    description:
      "A small project designed specifically for managing a pizza restaurant's Menu and Ordering. A beginner project of pizza restaurant's operations.",
    tech: ["React", "Javascript", "Vite"],
    github: "https://github.com/Heights001/pizza-website-react",
    live: ""
  }
];

function Projects() {
  return (
    <section className="p-6 max-w-7xl mx-auto bg-gray-100">
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
