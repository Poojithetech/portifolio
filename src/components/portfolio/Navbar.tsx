import { useEffect, useState } from "react";
import { Menu, X, Home, User, Briefcase, FolderGit2, Sparkles, Mail } from "lucide-react";

const links = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#projects", label: "Projects", icon: FolderGit2 },
  { href: "#skills", label: "Skills", icon: Sparkles },
  { href: "#contact", label: "Contact", icon: Mail },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav className="container">
        <div
          className={`glass rounded-full px-5 md:px-7 py-3 flex items-center justify-between transition-all duration-500 ${
            scrolled ? "shadow-[0_10px_40px_-10px_hsl(270_80%_30%/0.4)]" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-serif text-background text-lg shadow-[0_0_20px_hsl(var(--primary)/0.6)]">
              P
            </span>
            <span className="font-serif text-lg tracking-tight hidden sm:inline">
              Poojitha
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group inline-flex items-center gap-1.5 px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full transition-all hover:bg-foreground/5"
                >
                  <l.icon size={14} className="text-accent-glow opacity-80 group-hover:opacity-100 transition-opacity" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary to-accent text-background hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-shadow"
          >
            Let's talk
          </a>

          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 text-foreground/80 hover:text-foreground"
            onClick={() => setOpen((s) => !s)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-3 animate-fade-in">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-foreground rounded-xl hover:bg-foreground/5 transition-colors"
                  >
                    <l.icon size={15} className="text-accent-glow" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};
