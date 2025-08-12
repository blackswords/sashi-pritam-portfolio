"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, FileText, ArrowRight, Sparkles, Code, Zap } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const Hero = () => {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  const roleIndexRef = useRef(0)
  const charIndexRef = useRef(0)
  const isDeletingRef = useRef(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const roles = [
  "AI Engineer",
  "Generative AI Specialist",
  "Technology Innovator",
  "Full-Stack Developer",
  "ML Engineer",
  "Research Enthusiast",
  "Blockchain Explorer",
  "Hackathon Leader",
  "Project Manager",
  "Community Builder",
  "Data Scientist",
  "Technical Writer",
  "Event Organizer",
  "Marketing Strategist",
  "Lifelong Learner",
  "Social Impact Advocate",
];

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      const isSmallScreen = window.innerWidth < 768
      setIsMobile(isMobileDevice || isSmallScreen)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Typewriter effect using refs to avoid dependency issues
  useEffect(() => {
    const typeSpeed = isMobile ? 100 : 80
    const deleteSpeed = isMobile ? 50 : 40
    const pauseTime = isMobile ? 1500 : 1200
    const deleteDelay = isMobile ? 300 : 200

    const typeWriter = () => {
      const currentRole = roles[roleIndexRef.current]
      const isDeleting = isDeletingRef.current
      const charIndex = charIndexRef.current

      if (!isDeleting && charIndex < currentRole.length) {
        // Typing
        setDisplayText(currentRole.substring(0, charIndex + 1))
        charIndexRef.current++
        timeoutRef.current = setTimeout(typeWriter, typeSpeed)
      } else if (!isDeleting && charIndex === currentRole.length) {
        // Finished typing, wait then start deleting
        timeoutRef.current = setTimeout(() => {
          isDeletingRef.current = true
          typeWriter()
        }, pauseTime)
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setDisplayText(currentRole.substring(0, charIndex - 1))
        charIndexRef.current--
        timeoutRef.current = setTimeout(typeWriter, deleteSpeed)
      } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next role
        isDeletingRef.current = false
        roleIndexRef.current = (roleIndexRef.current + 1) % roles.length
        timeoutRef.current = setTimeout(typeWriter, deleteDelay)
      }
    }

    // Start the typewriter effect
    typeWriter()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isMobile]) // Only depend on isMobile

  // Cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-teal-900/20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 ${isMobile ? "" : "animate-float"}`}
        ></div>
        <div
          className={`absolute top-3/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 ${isMobile ? "" : "animate-float animation-delay-2000"}`}
        ></div>
        <div
          className={`absolute bottom-1/4 left-1/3 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 ${isMobile ? "" : "animate-float animation-delay-4000"}`}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className={`absolute inset-0 bg-grid-pattern ${isMobile ? "opacity-3" : "opacity-5"} dark:opacity-10`}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-3/5 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 md:mb-6"
          >
            <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 rounded-full text-blue-700 dark:text-blue-300 text-xs md:text-sm font-medium mb-4 md:mb-6 border border-blue-200/50 dark:border-blue-700/50">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-1.5 md:mr-2" />
              Available for New Opportunities
              <Zap className="w-3 h-3 md:w-4 md:h-4 ml-1.5 md:ml-2" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
                Sashi Pritam
              </span>
              <br />
              <span className="text-gray-700 dark:text-gray-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal">
                Manandi Anand
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 md:mb-8"
          >
            <div className="flex items-center justify-center lg:justify-start mb-3 md:mb-4">
              <Code className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-blue-600 mr-2 flex-shrink-0" />
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                <span className="text-gray-700 dark:text-gray-300">I am a </span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent relative inline-block">
                  <span
                    className="inline-block min-w-[200px] sm:min-w-[250px] md:min-w-[300px] lg:min-w-[350px] text-left"
                    style={{ minHeight: "1.5em" }}
                  >
                    {displayText}
                    <span
                      className={`inline-block w-0.5 h-5 sm:h-6 md:h-7 lg:h-8 bg-gradient-to-b from-blue-600 to-purple-500 ml-1 ${
                        showCursor ? "opacity-100" : "opacity-0"
                      } transition-opacity duration-100`}
                      style={{ verticalAlign: "text-bottom" }}
                    />
                  </span>
                </span>
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed px-2 lg:px-0">
              Passionate technology innovator with expertise in AI/ML, full-stack development, and leadership. Proven
              track record at leading companies including{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">NTT DATA</span>,
              <span className="font-semibold text-teal-600 dark:text-teal-400"> Intel</span>, and
              <span className="font-semibold text-emerald-600 dark:text-emerald-400"> Corizo</span>. Committed to
              creating impactful solutions and driving technological advancement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-2 md:space-x-3 lg:space-x-4 mb-6 md:mb-8 px-2 lg:px-0"
          >
            <Button
              size={isMobile ? "default" : "lg"}
              className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base"
              asChild
            >
              <a href="/resume.pdf" download="Sashi_Pritam_Resume.pdf">
                <Download className="mr-1 sm:mr-1.5 md:mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                Download Resume
              </a>
            </Button>
            <Button
              size={isMobile ? "default" : "lg"}
              variant="outline"
              className="border-2 border-blue-300 dark:border-blue-600 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-xl transition-all duration-300 transform hover:scale-105 bg-transparent text-xs sm:text-sm md:text-base"
              asChild
            >
              <a href="/cover-letter.pdf" download="Sashi_Pritam_Cover_Letter.pdf">
                <FileText className="mr-1 sm:mr-1.5 md:mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                Cover Letter
              </a>
            </Button>
            <Button
              size={isMobile ? "default" : "lg"}
              variant="ghost"
              asChild
              className="font-semibold group text-xs sm:text-sm md:text-base"
            >
              <a href="#contact" className="flex items-center">
                Let's Connect
                <ArrowRight className="ml-1 sm:ml-1.5 md:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 md:space-x-6"
          >
            <a
              href="https://linkedin.com/in/sashipritam-ma"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 md:p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              title="Connect on LinkedIn"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </a>
            <a
              href="https://github.com/blackswords"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 md:p-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              title="View GitHub Profile"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </a>
            <a
              href="mailto:sashipritam@gmail.com"
              className="p-2 sm:p-2.5 md:p-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              title="Send Email"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:w-2/5 mt-6 sm:mt-8 md:mt-12 lg:mt-0 flex justify-center"
        >
          <div className="relative">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl bg-gradient-to-br from-blue-400 via-teal-400 to-emerald-400 p-1 shadow-2xl">
              <img
                src="/profile-photo.jpg"
                alt="Sashi Pritam Manandi Anand"
                className="w-full h-full rounded-3xl object-cover"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  // Fallback to PNG if JPG doesn't exist
                  const target = e.target as HTMLImageElement
                  if (target.src.includes(".jpg")) {
                    target.src = "/profile-photo.png"
                  } else {
                    // If both fail, use a placeholder
                    target.src = "/placeholder.svg?height=400&width=400&text=Profile+Photo"
                  }
                }}
              />
            </div>
            <div
              className={`absolute -top-3 sm:-top-4 md:-top-6 -right-3 sm:-right-4 md:-right-6 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl p-2 sm:p-3 md:p-4 shadow-lg ${isMobile ? "" : "animate-bounce"}`}
            >
              <div className="flex items-center space-x-1 sm:space-x-1.5 md:space-x-2 text-white">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-xs md:text-sm font-semibold">Available</span>
              </div>
            </div>
            <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 -left-3 sm:-left-4 md:-left-6 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl p-2 sm:p-3 md:p-4 shadow-lg">
              <div className="flex items-center space-x-1 sm:space-x-1.5 md:space-x-2 text-white">
                <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                <span className="text-xs sm:text-xs md:text-sm font-semibold">Innovating</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
