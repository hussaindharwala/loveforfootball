import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-800 bg-black sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white tracking-tighter">
          THE <span className="text-red-600">ARSENAL</span> ANALYST
        </Link>
        <div className="flex gap-4 text-sm font-medium text-gray-400">
           {/* Temporary simple links */}
          <Link href="/" className="hover:text-red-500">Latest</Link>
        </div>
      </div>
    </nav>
  );
}
