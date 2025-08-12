"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Heart, MessageCircle, Share2, ArrowLeft, User, Tag, Eye } from "lucide-react"
import Link from "next/link"
import type { BlogPost as BlogPostType } from "@/lib/blog-data"

interface BlogPostProps {
  post: BlogPostType
}

// Simple markdown-like content renderer
const ContentRenderer = ({ content }: { content: string }) => {
  const renderContent = (text: string) => {
    // Split content into sections
    const sections = text.split("\n\n")

    return sections
      .map((section, index) => {
        const trimmedSection = section.trim()

        if (!trimmedSection) return null

        // Handle headers
        if (trimmedSection.startsWith("# ")) {
          return (
            <h1 key={index} className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
              {trimmedSection.substring(2)}
            </h1>
          )
        }

        if (trimmedSection.startsWith("## ")) {
          return (
            <h2 key={index} className="text-2xl font-semibold mt-10 mb-4 text-gray-900 dark:text-white">
              {trimmedSection.substring(3)}
            </h2>
          )
        }

        if (trimmedSection.startsWith("### ")) {
          return (
            <h3 key={index} className="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-white">
              {trimmedSection.substring(4)}
            </h3>
          )
        }

        // Handle code blocks
        if (trimmedSection.startsWith("```") && trimmedSection.endsWith("```")) {
          const codeContent = trimmedSection.slice(3, -3).trim()
          const lines = codeContent.split("\n")
          const language = lines[0] || "text"
          const code = lines.slice(1).join("\n")

          return (
            <div key={index} className="my-6">
              <div className="bg-gray-900 rounded-t-lg px-4 py-2">
                <span className="text-gray-400 text-sm">{language}</span>
              </div>
              <pre className="bg-gray-800 text-gray-100 p-4 rounded-b-lg overflow-x-auto">
                <code>{code}</code>
              </pre>
            </div>
          )
        }

        // Handle lists
        if (trimmedSection.includes("\n- ") || trimmedSection.startsWith("- ")) {
          const listItems = trimmedSection.split("\n").filter((line) => line.trim().startsWith("- "))
          return (
            <ul key={index} className="mb-6 space-y-2 text-gray-700 dark:text-gray-300">
              {listItems.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{item.substring(2)}</span>
                </li>
              ))}
            </ul>
          )
        }

        // Handle numbered lists
        if (trimmedSection.includes("\n1. ") || /^\d+\. /.test(trimmedSection)) {
          const listItems = trimmedSection.split("\n").filter((line) => /^\d+\. /.test(line.trim()))
          return (
            <ol key={index} className="mb-6 space-y-2 text-gray-700 dark:text-gray-300 list-decimal list-inside">
              {listItems.map((item, itemIndex) => (
                <li key={itemIndex} className="ml-4">
                  {item.replace(/^\d+\. /, "")}
                </li>
              ))}
            </ol>
          )
        }

        // Handle blockquotes
        if (trimmedSection.startsWith("> ")) {
          return (
            <blockquote
              key={index}
              className="border-l-4 border-blue-500 pl-6 py-2 my-6 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg"
            >
              <p className="text-gray-700 dark:text-gray-300 italic">{trimmedSection.substring(2)}</p>
            </blockquote>
          )
        }

        // Handle regular paragraphs with inline formatting
        const formatInlineText = (text: string) => {
          // Handle bold text
          text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          // Handle italic text
          text = text.replace(/\*(.*?)\*/g, "<em>$1</em>")
          // Handle inline code
          text = text.replace(
            /`(.*?)`/g,
            '<code class="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">$1</code>',
          )
          // Handle links
          text = text.replace(
            /\[([^\]]+)\]$$([^)]+)$$/g,
            '<a href="$2" class="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">$1</a>',
          )

          return text
        }

        return (
          <p
            key={index}
            className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formatInlineText(trimmedSection) }}
          />
        )
      })
      .filter(Boolean)
  }

  return <div>{renderContent(content)}</div>
}

const BlogPost = ({ post }: BlogPostProps) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-700/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/#blogs">
            <Button variant="ghost" className="group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          {/* Featured Image */}
          <div className="relative overflow-hidden rounded-2xl mb-8">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = `/placeholder.svg?height=400&width=800&text=${encodeURIComponent(post.title)}`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          {/* Title and Meta */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-sm">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">{post.excerpt}</p>

            {/* Author and Meta Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-xl">
              <div className="flex items-center space-x-4">
                <img
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <User className="h-4 w-4 mr-1" />
                    <span className="font-medium">{post.author.name}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-1" />
                    {post.likes}
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    {post.comments}
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {Math.floor(Math.random() * 1000) + 500}
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <ContentRenderer content={post.content} />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Enjoyed this article?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Connect with me to discuss more about AI, technology, and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-blue-600 to-teal-500">
                  <Link href="/#contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/#blogs">Read More Posts</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </article>
    </div>
  )
}

export default BlogPost
