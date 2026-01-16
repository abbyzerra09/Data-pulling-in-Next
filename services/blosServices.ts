export interface Blog {
 id: number;
 title: string;
 description: string;
 image: string;
 slug: string;
 created_at: string;
}

export interface BlogResponse {
 count: number;
 next: string | null;
 previous: string | null;
 results: Blog[];
}

export async function getBlogs(): Promise<BlogResponse> {
 const res = await fetch("https://base.skillshikshya.com/api/blog/", {
 cache: "no-store",
 });

 if (!res.ok) {
 throw new Error("Failed to fetch blogs");
 }

 return res.json();
}

export async function getSingleBlog(slug: string): Promise<Blog> {
 const res = await fetch(`https://base.skillshikshya.com/api/blog/${slug}/`, {
 cache: "no-store",
 });

 if (!res.ok) {
 throw new Error("Failed to fetch blog");
 }

 return res.json();
}