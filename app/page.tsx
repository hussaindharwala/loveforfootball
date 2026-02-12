export const revalidate = 0; // Disable caching for instant updates
import { client } from "@/sanity/client";
import Link from "next/link";

// This function gets the data from Sanity
async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    publishedAt,
    "slug": slug.current
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-black text-white p-8 lg:p-24">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16">
        <h1 className="text-5xl font-bold text-red-600 mb-4">
          The Arsenal Analyst
        </h1>
        <p className="text-gray-400 text-xl">
          Data. Tactics. Hale End.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-2">
        {posts.length > 0 ? (
          posts.map((post: any) => (
            <div 
              key={post._id} 
              className="border border-gray-800 p-6 rounded-xl hover:border-red-600 transition-colors bg-gray-900/50"
            >
              <p className="text-sm text-gray-500 mb-2">
                {new Date(post.publishedAt).toDateString()}
              </p>
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <div className="text-red-500 font-mono text-sm mt-4">
                Read Analysis &rarr;
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No matches analyzed yet.</p>
        )}
      </div>
    </main>
  );
}