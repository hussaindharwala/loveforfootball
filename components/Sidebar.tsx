import { Mail } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="space-y-8">
      
      {/* Newsletter Widget */}
      <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-sm">
        <h3 className="text-white font-bold mb-2 flex items-center gap-2">
          <Mail size={16} className="text-arsenal-red" />
          The Monday Briefing
        </h3>
        <p className="text-zinc-500 text-sm mb-4">
          Get tactical analysis in your inbox every week.
        </p>
        <input 
          type="email" 
          placeholder="Email address" 
          className="w-full bg-black border border-white/10 text-white px-3 py-2 text-sm mb-2 focus:border-arsenal-red focus:outline-none"
        />
        <button className="w-full bg-white text-black font-bold text-sm py-2 hover:bg-arsenal-red hover:text-white transition-colors">
          Subscribe
        </button>
      </div>

      {/* Mini League Table (Static for now) */}
      <div className="border border-white/10 rounded-sm overflow-hidden">
        <div className="bg-zinc-900 px-4 py-3 border-b border-white/10">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Premier League</h3>
        </div>
        <table className="w-full text-sm text-left">
          <thead className="text-zinc-500 bg-black text-xs uppercase">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Team</th>
              <th className="px-4 py-2">Pts</th>
            </tr>
          </thead>
          <tbody className="text-zinc-300 divide-y divide-white/5 bg-black">
            <tr className="bg-arsenal-dark/20">
              <td className="px-4 py-2 text-arsenal-red font-bold">1</td>
              <td className="px-4 py-2 font-bold text-white">Arsenal</td>
              <td className="px-4 py-2">64</td>
            </tr>
            <tr>
              <td className="px-4 py-2">2</td>
              <td className="px-4 py-2">Liverpool</td>
              <td className="px-4 py-2">62</td>
            </tr>
            <tr>
              <td className="px-4 py-2">3</td>
              <td className="px-4 py-2">Man City</td>
              <td className="px-4 py-2">60</td>
            </tr>
            <tr>
              <td className="px-4 py-2">4</td>
              <td className="px-4 py-2">Aston Villa</td>
              <td className="px-4 py-2">52</td>
            </tr>
          </tbody>
        </table>
      </div>

    </aside>
  );
}
