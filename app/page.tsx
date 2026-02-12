export const revalidate = 0;
import { client } from "@/sanity/client";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    publishedAt,
    "slug": slug.current,
    "excerpt": array::join(string::split(pt::text(body), "")[0..120], "") + "..."
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const posts = await getPosts();
  // Separate the first post as "Featured"
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main className="min-h-screen bg-black pt-24 pb-12">
      
      {/* Hero Section (Latest Post) */}
      {featured && (
        <section className="max-w-7xl mx-auto px-6 mb-20">
          <div className="border-l-2 border-arsenal-red pl-6 mb-6">
            <span className="text-arsenal-red font-bold tracking-widest text-xs uppercase">
              Featured Analysis
            </span>
          </div>
          
          <Link href={`/post/${featured.slug}`} className="group block">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 group-hover:text-zinc-300 transition-colors leading-tight">
              {featured.title}
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mb-8 leading-relaxed">
              {featured.excerpt || "Read our latest tactical breakdown and data analysis on the recent Arsenal performance."}
            </p>
            <div className="flex items-center gap-4 text-sm font-medium text-white">
              <span className="bg-arsenal-red px-3 py-1">READ NOW</span>
              <span className="text-zinc-500 flex items-center gap-2">
                <Clock size={16} /> {new Date(featured.publishedAt).toDateString()}
              </span>
            </div>
          </Link>
        </section>
      )}

      {/* Grid Layout for Other Posts */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 bg-arsenal-red rounded-full"></span>
            Latest Reports
          </h2>
          <Link href="/matches" className="text-sm text-zinc-500 hover:text-white flex items-center gap-1">
            View Archive <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.length > 0 ? (
            rest.map((post: any) => (
              <Link 
                href={`/post/${post.slug}`} 
                key={post._id} 
                className="group border border-white/10 bg-zinc-900/30 p-6 hover:border-arsenal-red/50 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 text-xs text-arsenal-red font-bold mb-4 uppercase tracking-wider">
                  Analysis
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zinc-300 transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                  <span className="text-xs text-zinc-600">
                    {new Date(post.publishedAt).toDateString()}
                  </span>
                  <ArrowRight size={16} className="text-zinc-600 group-hover:text-arsenal-red transition-colors" />
                </div>
              </Link>
            ))
          ) : (
             <div className="col-span-3 text-zinc-600 italic">No other articles yet. Time to publish more!</div>
          )}
        </div>
      </section>
    </main>
  );
}
