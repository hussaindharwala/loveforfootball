interface ScoreboardProps {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  competition: string;
}

export default function Scoreboard({ homeTeam, awayTeam, homeScore, awayScore, competition }: ScoreboardProps) {
  return (
    <div className="bg-zinc-900 border border-white/10 rounded-lg p-8 mb-12 text-center">
      <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">
        {competition}
      </div>
      <div className="flex items-center justify-center gap-8 md:gap-16">
        
        {/* Home Team */}
        <div className="flex-1 text-right">
          <h2 className="text-xl md:text-3xl font-black text-white uppercase leading-none">
            {homeTeam}
          </h2>
        </div>

        {/* Score */}
        <div className="bg-black px-6 py-3 rounded border border-white/10">
          <span className="text-3xl md:text-5xl font-mono font-bold text-arsenal-red tracking-widest">
            {homeScore} - {awayScore}
          </span>
        </div>

        {/* Away Team */}
        <div className="flex-1 text-left">
          <h2 className="text-xl md:text-3xl font-black text-white uppercase leading-none">
            {awayTeam}
          </h2>
        </div>
        
      </div>
    </div>
  );
}
