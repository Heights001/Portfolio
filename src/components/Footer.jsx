function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">
            Daniel Okoh Yeboah
          </h3>
          <p className="text-sm leading-relaxed">
            Junior Software Developer passionate about building responsive and
            user-friendly web applications. Currently seeking internship
            opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-green-400">About</a></li>
            <li><a href="#experience" className="hover:text-green-400">Experience</a></li>
            <li><a href="#projects" className="hover:text-green-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Connect
          </h4>

          <div className="flex gap-4 text-xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>

            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>

            <a
              href="mailto:youremail@example.com"
              className="hover:text-green-400"
            >
              <ion-icon name="mail-outline"></ion-icon>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Daniel Okoh Yeboah. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
