import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      // Hide when scrolling down (past the top), show again when scrolling up
      if (y > lastY && y > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY = y;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"
        } ${scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-neutral-100"
          : "bg-transparent"
        }`}
    >
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 font-display font-bold text-base sm:text-lg text-neutral-900 shrink-0"
        >
          <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
            <Code2 size={18} />
          </span>
          <span className="hidden sm:inline">
            Armaan<span className="text-indigo-600"></span>
          </span>
        </a>

        {/* Navigation links — always visible, no hamburger menu */}
        <ul className="flex items-center gap-4 sm:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs sm:text-sm font-medium text-neutral-600 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="hidden sm:inline-block text-sm font-medium bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
