import { Monitor, Server, Cloud } from "lucide-react";

const stacks = [
  {
    Icon: Monitor,
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    Icon: Server,
    label: "Backend & APIs",
    skills: ["Node.js", "Express", "Firebase", "RESTful APIs", "WebSockets"],
  },
  {
    Icon: Cloud,
    label: "Cloud & Databases",
    skills: ["Firestore", "PostgreSQL", "MongoDB", "Vercel", "Render"],
  },
];

function TechStack() {
  return (
    <section
      id="skills"
      className="py-16 sm:py-24 px-4 sm:px-6"
      style={{ background: "linear-gradient(to bottom, transparent, rgba(24,24,27,0.4), transparent)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 sm:mb-16">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Tech Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Tools I work with.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stacks.map(({ Icon, label, skills }) => (
            <div
              key={label}
              className="group bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30 rounded-2xl p-5 sm:p-7 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 bg-emerald-400/10 border border-emerald-400/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-400/15 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-white font-semibold">{label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-zinc-400 bg-zinc-800/80 border border-zinc-700/50 px-3 py-1.5 rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
