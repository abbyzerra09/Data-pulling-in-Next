import { getSingleBlog } from "@/services/blosServices";
import Image from "next/image";
import Link from "next/link";

interface Props {
 params: Promise<{
 slug: string;
 }>;
}

export default async function BlogDetail({ params }: Props) {
 const { slug } = await params;
 const blog = await getSingleBlog(slug);

 return (
 <div className="min-h-screen bg-zinc-50 dark:bg-black">
 <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
 {/* Back Button */}
 <Link
 href="/blog"
 className="mb-8 inline-flex items-center text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
 >
 ← Back to Blog
 </Link>

 {/* Featured Image */}
 {blog.image && (
 <div className="relative mb-8 h-96 w-full overflow-hidden rounded-lg">
 <Image
 src={blog.image}
 alt={blog.title}
 fill
 sizes="(max-width: 1200px) 100vw, 1200px"
 className="object-cover"
 priority
 />
 </div>
 )}

 {/* Article Header */}
 <article className="prose prose-zinc dark:prose-invert mx-auto max-w-3xl">
 <time
 dateTime={blog.created_at}
 className="text-sm text-zinc-600 dark:text-zinc-400"
 >
 {new Date(blog.created_at).toLocaleDateString("en-US", {
 year: "numeric",
 month: "long",
 day: "numeric",
 })}
 </time>

 <h1 className="mt-2 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
 {blog.title}
 </h1>

 <div className="mt-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
 {blog.description}
 </div>
 </article>
 </div>
 </div>
 );
}