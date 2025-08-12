"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Eye,
  Heart,
  MessageCircle,
  Camera,
  FileText,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog-data"

const galleryImages = [
  {
    title: "HackNova Victory",
    description: "Celebrating our win at the Schneider Electric hackathon with the team",
    image: "/images/gallery/hackathon-victory.jpg",
    category: "Hackathons",
  },
  {
    title: "Tech Fest 2025 Planning",
    description: "Behind the scenes of organizing MIT-BLR's major technical festival",
    image: "/images/gallery/tech-fest-planning.jpg",
    category: "Leadership",
  },
  {
    title: "NTT DATA Internship",
    description: "Working on graph-based RAG systems during my internship",
    image: "/images/gallery/ntt-data-internship.jpg",
    category: "Internships",
  },
  {
    title: "ACM Chapter Events",
    description: "Organizing technical workshops as General Secretary",
    image: "/images/gallery/acm-events.jpg",
    category: "Leadership",
  },
  {
    title: "Research Presentation",
    description: "Presenting at conferences",
    image: "/images/gallery/research-presentation.jpg",
    category: "Research",
  },
  {
    title: "NSS",
    description: "Leading media outreach and event coverage for social service activities.",
    image: "/images/gallery/nss.jpg",
    category: "Outreach",
  },
  {
    title: "Team Collaboration",
    description: "Working with fellow team members on innovative projects",
    image: "/images/gallery/team-collaboration.jpg",
    category: "Projects",
  },
  {
    title: "Educator",
    description: "Teaching at Government School",
    image: "/images/gallery/workshop-teaching.jpg",
    category: "Teaching",
  },
  {
    title: "Award Ceremony",
    description: "Receiving recognition for academic excellence",
    image: "/images/gallery/award-ceremony.jpg",
    category: "Achievements",
  },
  {
    title: "MBOSC Contribution",
    description: "Contributing to open source projects with MBOSC team",
    image: "/images/gallery/open-source.jpg",
    category: "Open Source",
  },
]

// Blog Grid Component - Perfect for 4 posts
const BlogGrid = () => {
  const blogPosts = getAllBlogPosts()

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <FileText className="h-6 w-6 text-blue-600 mr-3" />
          <h3 className="text-2xl font-semibold">Featured Blog Posts</h3>
        </div>
        <div className="text-sm text-gray-500">
          {blogPosts.length} {blogPosts.length === 1 ? "post" : "posts"}
        </div>
      </div>

      {/* Blog Grid - 2x2 layout for 4 posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group"
          >
            <Card className="h-full flex flex-col hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = `/placeholder.svg?height=250&width=400&text=${encodeURIComponent(post.title)}`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-gray-800 font-medium">{post.readTime}</Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">Click to read full article</p>
                </div>
              </div>

              <CardHeader className="flex-grow">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 3).map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{post.tags.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {post.likes}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {post.comments}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                  >
                    <Link href={`/blog/${post.id}`}>
                      <Eye className="h-4 w-4 mr-2" />
                      Read More
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <Card className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 border-0">
          <CardContent className="p-8">
            <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Enjoyed Reading?
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              These posts showcase my journey through AI development, community service, and professional growth.
              Connect with me to discuss technology, innovation, and making a positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-to-r from-blue-600 to-teal-500">
                <Link href="/#contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://linkedin.com/in/sashipritam-ma" target="_blank" rel="noopener noreferrer">
                  Follow on LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

// Gallery Carousel Component (unchanged)
const GalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout>()

  const itemsPerView = 4
  const maxIndex = Math.max(0, galleryImages.length - itemsPerView)

  useEffect(() => {
    if (isPlaying && !isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
      }, 3500)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, isHovered, maxIndex])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Header with controls */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Camera className="h-6 w-6 text-purple-600 mr-3" />
          <h3 className="text-2xl font-semibold">Photo Gallery</h3>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" onClick={togglePlayPause} className="text-gray-600 hover:text-purple-600">
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="sm" onClick={prevSlide} className="text-gray-600 hover:text-purple-600">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={nextSlide} className="text-gray-600 hover:text-purple-600">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `${-currentIndex * (100 / itemsPerView)}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="w-1/4 flex-shrink-0 px-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={image.image || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `/placeholder.svg?height=300&width=400&text=${encodeURIComponent(image.title)}`
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="font-semibold mb-1 text-sm">{image.title}</h4>
                      <p className="text-xs opacity-90 line-clamp-2">{image.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-800 text-xs">{image.category}</Badge>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-purple-600 w-8" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const BlogsAndPics = () => {
  return (
    <section id="blogs" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Blogs & Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My thoughts, experiences, and moments captured through my journey in tech
          </p>
        </motion.div>

        {/* Blog Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <BlogGrid />
        </motion.div>

        {/* Gallery Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <GalleryCarousel />
        </motion.div>
      </div>
    </section>
  )
}

export default BlogsAndPics
