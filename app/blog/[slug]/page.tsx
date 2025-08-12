import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import BlogPost from "@/components/BlogPost"
import type { Metadata } from "next"

interface BlogPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.id,
  }))
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords.join(", "),
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      images: [post.image],
    },
  }
}

export default function BlogPage({ params }: BlogPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPost post={post} />
}
