import { ArrowRight, ChevronDown } from "lucide-react";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center px-4 sm:px-6 overflow-hidden pt-36 sm:pt-44 pb-24"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />
      {/* Radial emerald glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(16,185,129,0.07), transparent)",
        }}
      />

      <div className="relative w-full max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
          Full-Stack Engineer building{" "}
          <span className="text-emerald-400">high-performance</span> web apps
          that scale.
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          I bridge the gap between seamless user experiences (React) and
          powerful backend architectures — turning complex ideas into
          production-ready software.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#work"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25 hover:scale-[1.02]"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:scale-[1.02]"
          >
            Let's Discuss Your Project
          </a>
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-12 pt-8 border-t border-zinc-800/50">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">4+</p>
            <p className="text-zinc-500 text-sm">Projects Shipped</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-zinc-800" />
          <div className="text-center">
            <p className="text-2xl font-bold text-white">Full-Stack</p>
          </div>
          <div className="hidden sm:block w-px h-8 bg-zinc-800" />
          <div className="text-center">
            <p className="text-2xl font-bold text-white">Codetrain</p>
            <p className="text-zinc-500 text-sm">Africa · Software Dev</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 animate-bounce">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}

export default Hero;
