import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-black/90 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white tracking-tighter">
          THE <span className="text-red-600">ARSENAL</span> ANALYST
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="/" className="hover:text-red-500 transition-colors">Latest</Link>
          <Link href="/matches" className="hover:text-red-500 transition-colors">Matches</Link>
          <Link href="/tactics" className="hover:text-red-500 transition-colors">Tactics</Link>
        </div>
      </div>
    </nav>
  );
}