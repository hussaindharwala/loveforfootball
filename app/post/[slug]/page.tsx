import { client } from "@/sanity/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { ChevronLeft, Calendar, User } from "lucide-react";
import Scoreboard from "@/components/Scoreboard";
import StatBar from "@/components/StatBar";

export const revalidate = 60;

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  const post = await client.fetch(query, { slug });
  return post;
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-4xl font-bold text-arsenal-red mb-4">404 - Post Not Found</h1>
        <p className="text-zinc-400 mb-8">Could not find article with slug: {slug}</p>
        <Link href="/" className="bg-white text-black px-4 py-2 rounded font-bold hover:bg-arsenal-red hover:text-white transition-colors">
          Return Home
        </Link>
      </div>
    );
  }

  // Determine if this is a match report based on the title
  const isMatchReport = post.title.toLowerCase().includes("vs");

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-24">
      <article className="max-w-3xl mx-auto px-6">
        
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-arsenal-red mb-8 transition-colors text-sm font-medium">
          <ChevronLeft size={16} /> Back to Analysis
        </Link>

        {/* Title Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight uppercase">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-zinc-400 text-sm">
             <span className="flex items-center gap-2"><Calendar size={14}/> {new Date(post.publishedAt).toDateString()}</span>
             <span className="flex items-center gap-2"><User size={14}/> {post.author || "The Arsenal Analyst"}</span>
          </div>
        </header>

        {/* Match Stats (Only shows if title has 'vs') */}
        {isMatchReport && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Scoreboard 
              homeTeam="Brentford" 
              awayTeam="Arsenal" 
              homeScore={0} 
              awayScore={3} 
              competition="Premier League" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
               <div className="bg-zinc-900/50 p-6 rounded border border-white/5">
                  <h3 className="text-arsenal-red font-bold uppercase tracking-widest text-xs mb-6">Match Stats</h3>
                  <StatBar label="Possession" homeValue={42} awayValue={58} isPercentage={true} />
                  <StatBar label="xG" homeValue={0.4} awayValue={2.1} />
                  <StatBar label="Shots" homeValue={6} awayValue={14} />
               </div>
               
               <div className="flex items-center justify-center p-6 border-l-2 border-arsenal-red bg-zinc-900/30">
                  <p className="text-lg font-medium text-zinc-300 italic">
                    "Arsenal's control of the midfield transition was the difference maker today."
                  </p>
               </div>
            </div>
          </div>
        )}

        {/* Article Text */}
        <div className="prose prose-invert prose-lg prose-red max-w-none">
          <PortableText value={post.body} />
        </div>

      </article>
    </main>
  );
}
