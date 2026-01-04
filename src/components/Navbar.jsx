import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-green-400 p-4 fixed top-0 left-0 z-50 w-full shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <a href="#personal">Heights</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {menuItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:bg-green-700 px-4 py-2 rounded"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-400">
          {menuItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="block text-white px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
