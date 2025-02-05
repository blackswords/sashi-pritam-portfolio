"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Sentiment Analysis using Python",
    description: "Developed a sentiment analysis tool using Python and Natural Language Processing techniques.",
    techStack: "Python, NLTK, Scikit-learn",
    github: "https://github.com/sashipritam/sentiment-analysis",
  },
  {
    title: "Online Fire Management System",
    description: "Created a web-based system for managing fire incidents and resources.",
    techStack: "React, Node.js, Express, MongoDB",
    github: "https://github.com/sashipritam/fire-management-system",
  },
  {
    title: "Facial Recognition Project",
    description: "Implemented a facial recognition system using deep learning algorithms.",
    techStack: "Python, TensorFlow, OpenCV",
    github: "https://github.com/sashipritam/facial-recognition",
  },
  {
    title: "Smart Backpack using IoT",
    description: "Designed and built a smart backpack with IoT capabilities for enhanced security and convenience.",
    techStack: "Arduino, Raspberry Pi, MQTT",
    github: "https://github.com/sashipritam/smart-backpack",
  },
  {
    title: "AI-powered Threat Detection Model",
    description: "Developed an AI model for detecting potential security threats in real-time.",
    techStack: "Python, TensorFlow, Keras",
    github: "https://github.com/sashipritam/threat-detection",
  },
  {
    title: "ML Spotify Song Genre Prediction Main",
    description: "Model-Based Approach to Music Genre Assignment",
    techStack: "Python, TensorFlow, Keras",
    github: "https://github.com/sashipritam/threat-detection",
  },
  {
    title: "Pharma Supply Chain System Using Smart Contracts",
    description: "A supply chain for the safe distribution of medicines using Blockchain and AI.",
    techStack: "JavaScript, Solidity, CSS, HTML",
    github: "https://github.com/sashipritam/threat-detection",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-4">{project.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">Tech Stack: {project.techStack}</p>
                  <Button asChild variant="outline" className="w-full">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View on GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

