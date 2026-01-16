import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/services/blosServices";

interface BlogCardProps {
 blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
 return (
 <Link href={`/blog/${blog.slug}`}>
 <div className="group overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
 {/* Image Container */}
 {blog.image ? (
 <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
 <Image
 src={blog.image}
 alt={blog.title}
 fill
 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
 className="object-cover transition-transform duration-300 group-hover:scale-105"
 />
 </div>
 ) : (
 <div className="flex h-48 w-full items-center justify-center bg-zinc-100 dark:bg-zinc-800">
 <svg
 className="h-12 w-12 text-zinc-400"
 fill="none"
 stroke="currentColor"
 viewBox="0 0 24 24"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth={2}
 d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
 />
 </svg>
 </div>
 )}

 {/* Content */}
 <div className="p-4">
 <h2 className="mb-2 text-xl font-semibold text-zinc-900 line-clamp-2 dark:text-zinc-50">
 {blog.title}
 </h2>

 <p className="mb-3 text-sm text-zinc-600 line-clamp-3 dark:text-zinc-400">
 {blog.description}
 </p>

 {/* Footer */}
 <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-500">
 <time dateTime={blog.created_at}>
 {new Date(blog.created_at).toLocaleDateString("en-US", {
 year: "numeric",
 month: "short",
 day: "numeric",
 })}
 </time>

 <span className="text-blue-600 dark:text-blue-400 group-hover:underline">
 Read more →
 </span>
 </div>
 </div>
 </div>
 </Link>
 );
}