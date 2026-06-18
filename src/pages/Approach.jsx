import { Target, MessageSquare, Shield } from "lucide-react";

const principles = [
  {
    Icon: Target,
    number: "01",
    title: "Business-First Mindset",
    description:
      "I don't just write code — I build targeted solutions. Every technical decision is anchored to a business outcome: user engagement, conversion, retention, or operational efficiency.",
  },
  {
    Icon: MessageSquare,
    number: "02",
    title: "Clear Communication",
    description:
      "Regular progress updates via Slack, Loom, or email. Transparent timelines, defined milestones, and zero technical jargon. You're always in the loop.",
  },
  {
    Icon: Shield,
    number: "03",
    title: "Production-Ready Quality",
    description:
      "Clean, scalable architecture, rigorous performance optimization, and strict attention to web security. I ship code that works today and is easy to maintain tomorrow.",
  },
];

function Approach() {
  return (
    <section id="approach" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
            The Approach
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            How I work with you.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map(({ Icon, number, title, description }) => (
            <div
              key={title}
              className="relative group bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
            >
              {/* Large number watermark */}
              <span className="absolute right-5 top-4 text-6xl font-bold text-zinc-800/60 select-none leading-none group-hover:text-emerald-900/40 transition-colors duration-300">
                {number}
              </span>

              <div className="relative">
                <div className="w-10 h-10 bg-emerald-400/10 border border-emerald-400/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-emerald-400/15 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">
                  {title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Approach;
