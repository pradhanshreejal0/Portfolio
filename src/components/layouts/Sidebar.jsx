export default function Sidebar() {
  return (
    <>
      <aside
        id="sidebar"
        className="w-full md:w-64 bg-slate-800 border-r border-slate-700 flex flex-col justify-between p-6 hidden md:flex h-screen sticky top-0"
      >
        <div>
          {/* Profile Info */}
          <div className="text-center mb-8">
            <img
              src="https://placeholder.com"
              alt="Avatar"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-indigo-500 object-cover"
            />
            <h2 className="text-xl font-bold text-slate-100">
              Shreejal Pradhan
            </h2>
            <p className="text-sm text-slate-400 mt-1">Mern-Stack Developer</p>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            <a
              href="#about"
              className="block px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="block px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Social Links / Footer */}
        <div className="mt-8 pt-6 border-t border-slate-700">
          <div className="flex justify-center space-x-4 text-slate-400">
            <a
              href="https://github.com/pradhanshreejal0?tab=repositories"
              target="_blank"
              className="hover:text-indigo-400 transition"
            >
              GitHub
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              Twitter
            </a>
          </div>
          <p className="text-xs text-center text-slate-500 mt-4">
            &copy; {new Date().getFullYear()} Shreejal Pradhan
          </p>
        </div>
      </aside>
    </>
  );
}
