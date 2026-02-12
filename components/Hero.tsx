import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  post: any;
}

export default function Hero({ post }: HeroProps) {
  if (!post) return null;

  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-end overflow-hidden border-b border-white/10">
      
      {/* Background Gradient (Fake Image Placeholder) */}
      <div className="absolute inset-0 bg-gradient-to-t from-arsenal-black via-transparent to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-arsenal-black via-arsenal-black/50 to-transparent z-10" />
      
      {/* Placeholder Image (We will make this dynamic later) */}
      <div className="absolute inset-0 bg-zinc-800 z-0">
         {/* This is where the match image will go */}
         <div className="w-full h-full opacity-30 bg-[url('https://images.unsplash.com/photo-1522778119026-d647f0565c6a?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pb-12 w-full">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-arsenal-red text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
            Featured Match
          </span>
          <span className="text-zinc-300 text-xs font-medium">
            {new Date(post.publishedAt).toDateString()}
          </span>
        </div>

        <Link href={`/post/${post.slug}`} className="group">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight group-hover:text-zinc-200 transition-colors max-w-3xl">
            {post.title}
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mb-6 line-clamp-2">
            Click to read the full tactical breakdown and match analysis.
          </p>
          <div className="inline-flex items-center gap-2 text-arsenal-red font-bold uppercase tracking-wide text-sm group-hover:gap-3 transition-all">
            Read Analysis <ArrowRight size={16} />
          </div>
        </Link>
      </div>
    </section>
  );
}
