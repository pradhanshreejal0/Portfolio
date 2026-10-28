import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row antialiased">
      {/* Mobile Top Navigation */}
      <MobileNav />

      {/* Desktop Sticky Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-14">
          {children}
        </div>
      </main>
    </div>
  );
}
