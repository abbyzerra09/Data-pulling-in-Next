import { getBlogs } from "@/services/blosServices";
import BlogCard from "../components/BlogCard";

export default async function BlogPage() {
 const data = await getBlogs();

 return (
 <div className="min-h-screen bg-zinc-50 dark:bg-black">
 <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
 {/* Header */}
 <div className="mb-8">
 <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
 Blog
 </h1>
 <p className="mt-2 text-zinc-600 dark:text-zinc-400">
 {data.count} {data.count === 1 ? "article" : "articles"}
 </p>
 </div>

 {/* Blog Grid */}
 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {data.results.map((blog) => (
 <BlogCard key={blog.id} blog={blog} />
 ))}
 </div>

 {/* Pagination */}
 {(data.next || data.previous) && (
 <div className="mt-12 flex justify-center gap-4">
 {data.previous && (
 <button className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">
 Previous
 </button>
 )}
 {data.next && (
 <button className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">
 Next
 </button>
 )}
 </div>
 )}
 </div>
 </div>
 );
}