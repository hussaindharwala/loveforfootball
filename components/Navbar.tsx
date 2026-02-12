import Link from "next/link";
import { Menu, Search, X } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-arsenal-red rounded-sm flex items-center justify-center font-bold text-white group-hover:bg-white group-hover:text-arsenal-red transition-colors">
            A
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            THE ARSENAL <span className="text-arsenal-red">ANALYST</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="/" className="hover:text-white transition-colors">Latest News</Link>
          <Link href="/matches" className="hover:text-white transition-colors">Match Reports</Link>
          <Link href="/tactics" className="hover:text-white transition-colors">Tactical Analysis</Link>
          <Link href="/academy" className="hover:text-white transition-colors">Hale End Watch</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-zinc-400 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <button className="md:hidden p-2 text-white">
            <Menu size={24} />
          </button>
          <Link 
            href="/subscribe" 
            className="hidden md:block bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-arsenal-red hover:text-white transition-colors"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </nav>
  );
}
