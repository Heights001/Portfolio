import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-lg tracking-tight">
          Daniel<span className="text-emerald-400">.</span>dev
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a
            href="/resume/Daniel_Okoh_Yeboah_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-zinc-300 border border-zinc-700 hover:border-emerald-500 hover:text-emerald-400 px-4 py-2 rounded-lg transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            Curriculum Vitae
          </a>
        </div>

        <button
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-zinc-300 hover:text-white py-2.5 text-sm font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-800 mt-3">
            <a
              href="/resume/Daniel_Okoh_Yeboah_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-zinc-300 border border-zinc-700 hover:border-emerald-500 hover:text-emerald-400 px-4 py-2 rounded-lg transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Curriculum Vitae
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
