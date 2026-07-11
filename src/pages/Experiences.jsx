const skills = [
  {
    title: "React & React Native",
    icon: "logo-react",
    description:
      "I build production-grade SPAs and cross-platform mobile apps with React and React Native, using hooks, context, and component-driven architecture to ship scalable UIs."
  },
  {
    title: "TypeScript",
    icon: "code-slash",
    description:
      "I write type-safe, maintainable code across frontend and backend with TypeScript — interfaces, generics, and strict configs to catch bugs before they reach production."
  },
  {
    title: "Python & FastAPI",
    icon: "logo-python",
    description:
      "I build high-performance REST APIs and async backends with FastAPI — background tasks, WebSockets, Pydantic validation, and auto-generated OpenAPI docs."
  },
  {
    title: "Node.js & Express",
    icon: "logo-nodejs",
    description:
      "I build RESTful APIs and middleware pipelines with Node.js and Express — routing, authentication, error handling, and integration with third-party services."
  },
  {
    title: "AI/ML & LLM Integration",
    icon: "hardware-chip",
    description:
      "I integrate LLMs (Gemini, OpenAI), build RAG pipelines with vector stores (ChromaDB), implement tool-calling agents, and train time-series models (SARIMA) for forecasting."
  },
  {
    title: "PostgreSQL, SQLite & Firebase",
    icon: "analytics",
    description:
      "I design schemas and queries for PostgreSQL and SQLite, and use Firebase Auth, Firestore, and Storage for rapid full-stack prototyping and real-time data."
  },
  {
    title: "Tailwind CSS & NativeWind",
    icon: "logo-css3",
    description:
      "I build responsive, design-system-driven UIs with Tailwind CSS on web and NativeWind on mobile — utility-first styling with dark mode and custom themes."
  },
  {
    title: "Networking & Systems",
    icon: "globe",
    description:
      "I build low-level network tools — asyncio DNS resolvers, connection collectors, and launchd daemons — with process attribution, SQLite telemetry, and WebSocket live feeds."
  },
  {
    title: "Cloud & CI/CD",
    icon: "cloud-upload",
    description:
      "I deploy and automate with Vercel, Railway, Render, and GitHub Actions — preview deploys, nightly cron jobs, and protected retraining pipelines."
  },
  {
    title: "Async Architecture & WebSockets",
    icon: "pulse",
    description:
      "I design concurrent systems with Python asyncio and Node.js event loops — background workers, real-time WebSocket streams, and SQLite WAL for non-blocking I/O."
  }
];

function Experiences() {
  return (
    <section id="experience" className="p-6 max-w-7xl bg-gray-20 mx-auto">
      <div className="flex items-center">
        <div className="h-12 w-2 bg-green-500"></div>
        <h2 className="font-bold text-2xl sm:text-4xl ml-5">
          What I do
        </h2>
      </div>

      <p className="mt-5 text-lg text-gray-700 max-w-3xl">
        Entry level engineer passionate about building responsive, secured and scalable web applications. With experience in front-end and back-end technologies, as well as a keen interest in artificial intelligence and machine learning. I am eager to contribute my skills and knowledge to innovative projects and collaborate with like-minded professionals.
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
