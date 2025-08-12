"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl font-bold mb-4">Sashi Pritam Manandi Anand</h1>
          <h2 className="text-2xl text-primary mb-4"> </h2>
          <p className="mb-6">Passionate about AI, Machine Learning, IoT, Cyber Security, and Software Development</p>
          <div className="flex justify-center md:justify-start space-x-4 mb-6">
            <Button asChild>
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://linkedin.com/in/sashipritam" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/blackswords" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
            </a>
            <a href="mailto:sashipritam@gmail.com">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mt-8 md:mt-0"
        >
          <img
            src="/profile-photo.jpg"
            alt="Sashi Pritam Manandi Anand"
            className="rounded-full w-64 h-64 object-cover mx-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Home
