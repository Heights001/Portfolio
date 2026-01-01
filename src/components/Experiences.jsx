const skills = [
  {
    title: "HTML",
    icon: "logo-html5",
    description:
      "I build well-structured and accessible web pages using semantic HTML, focusing on clarity, usability, and clean markup."
  },
  {
    title: "CSS & Tailwind CSS",
    icon: "logo-css3",
    description:
      "I design responsive user interfaces using CSS and Tailwind CSS, translating designs into clean, mobile-friendly layouts."
  },
  {
    title: "JavaScript (ES6+)",
    icon: "logo-javascript",
    description:
      "I use modern JavaScript features such as modules, arrow functions, and async/await to add interactivity and handle application logic."
  },
  {
    title: "React",
    icon: "logo-react",
    description:
      "I build component-based applications with React, using hooks like useState and useEffect to manage state and understand application flow."
  },
  {
    title: "Firebase",
    icon: "flame",
    description:
      "I use Firebase for authentication, basic database operations with Firestore, and hosting small projects while learning backend concepts."
  },
  {
    title: "Git & GitHub",
    icon: "logo-github",
    description:
      "I use Git and GitHub to track code changes, collaborate on team projects, and follow version control best practices."
  },
  {
    title: "Vite & Development Tools",
    icon: "build",
    description:
      "I use Vite for fast development, npm for managing dependencies, and browser dev tools for debugging and improving code quality."
  },
  {
    title: "Linux & Command Line",
    icon: "code-slash",
    description:
      "I am comfortable using the Linux command line for development tasks such as file navigation, running scripts, and managing projects."
  }
];

function Experiences() {
  return (
    <section className="p-6 max-w-7xl bg-gray-20 mx-auto">
      <div className="flex items-center">
        <div className="h-12 w-2 bg-green-500"></div>
        <h2 className="font-bold text-2xl sm:text-4xl ml-5">
          What I do
        </h2>
      </div>

      <p className="mt-5 text-lg text-gray-700 max-w-3xl">
        I am currently a software development student at Codetrain Africa,
        gaining hands-on experience through structured coursework, projects,
        and continuous practice. I am actively seeking internship
        opportunities to learn, grow, and contribute to real-world products.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {skills.map(skill => (
          <div key={skill.title}>
            <ion-icon
              name={skill.icon}
              class="text-white bg-green-500 w-8 h-8 rounded-md"
            ></ion-icon>

            <h3 className="font-bold text-xl mt-2 mb-2">
              {skill.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
