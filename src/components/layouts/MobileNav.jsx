import { useState } from "react";
import {
  Menu,
  X,
  User,
  FolderGit2,
  Wrench,
  Mail,
  Terminal,
  Sparkles
} from "lucide-react";
import { GithubIcon } from "../ui/BrandIcons";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Overview", href: "#hero", icon: Terminal },
    { label: "About", href: "#about", icon: User },
    { label: "Projects", href: "#projects", icon: FolderGit2 },
    { label: "Skills", href: "#skills", icon: Wrench },
    { label: "Contact", href: "#contact", icon: Mail }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="md:hidden sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
      <div className="flex items-center justify-between px-5 py-4">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 p-0.5">
            <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center text-white font-bold text-xs">
              SP
            </div>
          </div>
          <div>
            <div className="text-sm font-bold text-white leading-none">
              Shreejal Pradhan
            </div>
            <div className="text-[10px] text-indigo-400 font-semibold uppercase tracking-wider mt-0.5">
              MERN Developer
            </div>
          </div>
        </a>

        {/* Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="px-5 py-4 border-t border-slate-800 bg-slate-900 space-y-3 animate-in fade-in duration-200">
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition"
                >
                  <Icon className="w-4 h-4 text-indigo-400" />
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-800 space-y-3">
            <a
              href="https://foundry-ruby.vercel.app"
              target="_blank"
              rel="noreferrer"
              onClick={handleLinkClick}
              className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-800/80 border border-amber-500/30 text-xs text-amber-300 font-medium"
            >
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Foundry Multi-Vendor Store
              </span>
              <span className="text-[10px] bg-amber-950 px-1.5 py-0.5 rounded">
                Live
              </span>
            </a>

            <div className="flex items-center justify-between px-1 text-slate-400 text-xs">
              <span>Connect</span>
              <div className="flex gap-4">
                <a
                  href="https://github.com/pradhanshreejal0"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:pradhanshreejal0@gmail.com"
                  className="hover:text-white"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
