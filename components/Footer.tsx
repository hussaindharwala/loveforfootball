import { Twitter, Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-16 mt-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">THE ARSENAL ANALYST</h3>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Independent, data-driven coverage of Arsenal Football Club. 
            We look beyond the scoreline to explain the 'why'.
          </p>
          <div className="flex gap-4 text-zinc-400">
            <Twitter size={20} className="hover:text-arsenal-red cursor-pointer" />
            <Youtube size={20} className="hover:text-arsenal-red cursor-pointer" />
            <Instagram size={20} className="hover:text-arsenal-red cursor-pointer" />
          </div>
        </div>

        {/* Column 1 */}
        <div>
          <h4 className="text-white font-bold mb-6">Coverage</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li className="hover:text-arsenal-red cursor-pointer">First Team</li>
            <li className="hover:text-arsenal-red cursor-pointer">Women's Team</li>
            <li className="hover:text-arsenal-red cursor-pointer">Academy</li>
            <li className="hover:text-arsenal-red cursor-pointer">Transfers</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-white font-bold mb-6">Data & Stats</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li className="hover:text-arsenal-red cursor-pointer">xG Tables</li>
            <li className="hover:text-arsenal-red cursor-pointer">Player Radars</li>
            <li className="hover:text-arsenal-red cursor-pointer">Tactical Maps</li>
            <li className="hover:text-arsenal-red cursor-pointer">Season History</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold mb-6">Weekly Briefing</h4>
          <p className="text-zinc-500 text-sm mb-4">
            Get the tactical breakdown in your inbox every Monday.
          </p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter email" 
              className="bg-zinc-900 border border-zinc-800 text-white px-4 py-2 w-full text-sm focus:outline-none focus:border-arsenal-red"
            />
            <button className="bg-arsenal-red text-white px-4 py-2 font-bold hover:bg-red-700 transition-colors">
              <Mail size={16} />
            </button>
          </div>
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-zinc-700 text-xs">
        &copy; 2026 The Arsenal Analyst. Unofficial. Not affiliated with Arsenal FC.
      </div>
    </footer>
  );
}
