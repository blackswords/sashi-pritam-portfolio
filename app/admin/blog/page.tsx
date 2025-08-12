"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Plus, Save, FileText, Copy } from "lucide-react"
import { motion } from "framer-motion"

interface BlogFormData {
  title: string
  excerpt: string
  content: string
  tags: string[]
  image: string
  readTime: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
}

const BlogAdmin = () => {
  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    excerpt: "",
    content: "",
    tags: [],
    image: "",
    readTime: "",
    metaTitle: "",
    metaDescription: "",
    keywords: [],
  })

  const [newTag, setNewTag] = useState("")
  const [newKeyword, setNewKeyword] = useState("")
  const [generatedJSON, setGeneratedJSON] = useState("")

  const handleInputChange = (field: keyof BlogFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()],
      }))
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  const addKeyword = () => {
    if (newKeyword.trim() && !formData.keywords.includes(newKeyword.trim())) {
      setFormData((prev) => ({
        ...prev,
        keywords: [...prev.keywords, newKeyword.trim()],
      }))
      setNewKeyword("")
    }
  }

  const removeKeyword = (keywordToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      keywords: prev.keywords.filter((keyword) => keyword !== keywordToRemove),
    }))
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  const handleSave = () => {
    const blogPost = {
      id: generateSlug(formData.title),
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      date: new Date().toISOString().split("T")[0],
      readTime: formData.readTime,
      tags: formData.tags,
      image: formData.image,
      likes: 0,
      comments: 0,
      author: {
        name: "Sashi Pritam Manandi Anand",
        avatar: "/profile-photo.jpg",
      },
      seo: {
        metaTitle: formData.metaTitle || formData.title,
        metaDescription: formData.metaDescription || formData.excerpt,
        keywords: formData.keywords,
      },
    }

    const jsonString = JSON.stringify(blogPost, null, 2)
    setGeneratedJSON(jsonString)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedJSON)
    alert("JSON copied to clipboard!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Blog Content Management
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">Create and manage your blog posts with ease</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Create New Blog Post
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Basic Info */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      placeholder="Enter blog post title"
                    />
                  </div>

                  <div>
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => handleInputChange("excerpt", e.target.value)}
                      placeholder="Brief description of the blog post"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="readTime">Read Time</Label>
                    <Input
                      id="readTime"
                      value={formData.readTime}
                      onChange={(e) => handleInputChange("readTime", e.target.value)}
                      placeholder="e.g., 5 min read"
                    />
                  </div>

                  <div>
                    <Label htmlFor="image">Image Path</Label>
                    <Input
                      id="image"
                      value={formData.image}
                      onChange={(e) => handleInputChange("image", e.target.value)}
                      placeholder="/images/blog/your-image.jpg"
                    />
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <Label>Tags</Label>
                  <div className="flex items-center space-x-2 mb-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add a tag"
                      onKeyPress={(e) => e.key === "Enter" && addTag()}
                    />
                    <Button onClick={addTag} size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="cursor-pointer">
                        {tag}
                        <button onClick={() => removeTag(tag)} className="ml-2 text-red-500 hover:text-red-700">
                          ×
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* SEO */}
                <div className="space-y-4 border-t pt-4">
                  <h3 className="font-semibold">SEO Settings</h3>

                  <div>
                    <Label htmlFor="metaTitle">Meta Title</Label>
                    <Input
                      id="metaTitle"
                      value={formData.metaTitle}
                      onChange={(e) => handleInputChange("metaTitle", e.target.value)}
                      placeholder="SEO title (optional, defaults to title)"
                    />
                  </div>

                  <div>
                    <Label htmlFor="metaDescription">Meta Description</Label>
                    <Textarea
                      id="metaDescription"
                      value={formData.metaDescription}
                      onChange={(e) => handleInputChange("metaDescription", e.target.value)}
                      placeholder="SEO description (optional, defaults to excerpt)"
                      rows={2}
                    />
                  </div>

                  <div>
                    <Label>SEO Keywords</Label>
                    <div className="flex items-center space-x-2 mb-2">
                      <Input
                        value={newKeyword}
                        onChange={(e) => setNewKeyword(e.target.value)}
                        placeholder="Add a keyword"
                        onKeyPress={(e) => e.key === "Enter" && addKeyword()}
                      />
                      <Button onClick={addKeyword} size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.keywords.map((keyword, index) => (
                        <Badge key={index} variant="outline" className="cursor-pointer">
                          {keyword}
                          <button
                            onClick={() => removeKeyword(keyword)}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2 pt-4">
                  <Button onClick={handleSave} className="flex-1">
                    <Save className="h-4 w-4 mr-2" />
                    Generate JSON
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Content Editor */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Content Editor</CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Write your blog post content in simple markdown format
                </p>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={formData.content}
                  onChange={(e) => handleInputChange("content", e.target.value)}
                  placeholder="Write your blog post content here using simple markdown..."
                  className="min-h-[400px] font-mono text-sm"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Generated JSON Output */}
        {generatedJSON && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8"
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Generated Blog Post JSON</CardTitle>
                  <Button onClick={copyToClipboard} variant="outline" size="sm">
                    <Copy className="h-4 w-4 mr-2" />
                    Copy to Clipboard
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{generatedJSON}</code>
                </pre>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  Copy this JSON and add it to the `blogPosts` array in `lib/blog-data.ts`
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle>How to Use This CMS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">📝 Writing Content</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Use # for main headings</li>
                    <li>• Use ## for subheadings</li>
                    <li>• Use **text** for bold</li>
                    <li>• Use *text* for italic</li>
                    <li>• Use `code` for inline code</li>
                    <li>• Use ```language for code blocks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🚀 Publishing</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Click "Generate JSON" to create blog data</li>
                    <li>• Copy the JSON to lib/blog-data.ts</li>
                    <li>• Upload images to public/images/blog/</li>
                    <li>• Deploy to see your post live</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default BlogAdmin
