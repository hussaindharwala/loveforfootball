export const revalidate = 0;
import { client } from "@/sanity/client";
import Link from "next/link";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";

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
  const featured = posts[0]; // First post is Hero
  const rest = posts.slice(1); // Rest are list

  return (
    <main className="min-h-screen bg-black pb-24">
      
      {/* 1. Hero Section */}
      <Hero post={featured} />

      {/* 2. Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Latest Articles (Takes up 2/3 space) */}
        <div className="lg:col-span-2 space-y-12">
          <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-4">
             <div className="w-2 h-2 bg-arsenal-red rounded-full" />
             <h2 className="text-xl font-bold text-white uppercase tracking-wider">Latest Reports</h2>
          </div>

          <div className="grid gap-8">
            {rest.length > 0 ? (
              rest.map((post: any) => (
                <Link 
                  href={`/post/${post.slug}`} 
                  key={post._id} 
                  className="flex flex-col md:flex-row gap-6 group"
                >
                  {/* Image Placeholder */}
                  <div className="w-full md:w-48 h-32 bg-zinc-900 border border-white/10 group-hover:border-arsenal-red/50 transition-colors shrink-0" />
                  
                  <div className="flex-1">
                    <div className="text-arsenal-red text-xs font-bold mb-2 uppercase">Match Report</div>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-zinc-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-zinc-500 text-sm line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                    <span className="text-xs text-zinc-600">
                      {new Date(post.publishedAt).toDateString()}
                    </span>
                  </div>
                </Link>
              ))
            ) : (
               <p className="text-zinc-500">More matches coming soon...</p>
            )}
          </div>
        </div>

        {/* Right Column: Sidebar (Takes up 1/3 space) */}
        <div className="lg:col-span-1">
           <Sidebar />
        </div>

      </div>
    </main>
  );
}
