function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} Daniel Okoh Yeboah. All rights reserved.
        </p>
        <p className="text-zinc-700 text-sm">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

export default Footer;
