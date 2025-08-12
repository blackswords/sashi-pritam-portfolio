"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Code, Database, Brain, Shield, Music, Truck } from "lucide-react"

const projects = [
  {
    title: "Graph-Based RAG System",
    description:
      "Hybrid Retrieval-Augmented Generation platform integrating graph databases, semantic search, and LLMs for enterprise knowledge management.",
    icon: Database,
    techStack: ["Python", "Neo4j", "LLMs", "FastAPI", "React"],
    github: "https://github.com/sashipritam/graph-rag-system",
    category: "AI/ML",
  },
  {
    title: "AI Stock Market Assistant",
    description:
      "Voice-controlled web platform leveraging LLMs and real-time stock data to democratize financial insights for Indian retail investors.",
    icon: Brain,
    techStack: ["Python", "Llama3", "yfinance", "FastAPI", "React"],
    github: "https://github.com/sashipritam/ai-stock-assistant",
    category: "AI/ML",
  },
  {
    title: "Prompt-to-API Generator",
    description:
      "Natural language interface using FLAN-T5 that generates production-ready FastAPI backend code from plain English prompts.",
    icon: Code,
    techStack: ["Python", "FLAN-T5", "FastAPI", "Next.js", "Tailwind CSS"],
    github: "https://github.com/sashipritam/prompt-to-api",
    category: "AI/ML",
  },
  {
    title: "Pharma Supply Chain System",
    description: "Supply chain for safe distribution of medicines using Blockchain and AI technologies.",
    icon: Truck,
    techStack: ["JavaScript", "Solidity", "CSS", "HTML", "Blockchain"],
    github: "https://github.com/sashipritam/pharma-supply-chain",
    category: "Blockchain",
  },
  {
    title: "Smart Backpack",
    description:
      "Smart backpack integrating RFID technology with Flutter mobile application for automated inventory tracking and real-time notifications.",
    icon: Shield,
    techStack: ["Flutter", "RFID", "Arduino", "Dart", "IoT"],
    github: "https://github.com/sashipritam/smart-backpack",
    category: "IoT",
  },
  {
    title: "Intrusion Detection Hybrid",
    description:
      "Intrusion detection system built using hybrid model approach, combining supervised and unsupervised techniques for enhanced accuracy.",
    icon: Shield,
    techStack: ["Python", "Machine Learning", "Scikit-learn", "TensorFlow"],
    github: "https://github.com/sashipritam/intrusion-detection",
    category: "Cybersecurity",
  },
  {
    title: "Email Phishing Detection",
    description:
      "AI-driven system to enhance threat detection and response through advanced analytics and real-time automated interventions.",
    icon: Shield,
    techStack: ["Python", "NLP", "Machine Learning", "Flask"],
    github: "https://github.com/sashipritam/phishing-detection",
    category: "Cybersecurity",
  },
  {
    title: "FastAPI Generator & Dashboard",
    description:
      "Full-stack AI application that dynamically generates FastAPI endpoints from natural language prompts with interactive dashboards.",
    icon: Code,
    techStack: ["Python", "FastAPI", "React", "MongoDB", "Excel Integration"],
    github: "https://github.com/sashipritam/fastapi-generator",
    category: "Full Stack",
  },
  {
    title: "Spotify Song Genre Prediction",
    description:
      "Applied supervised and unsupervised ML techniques to classify Spotify songs by genre using audio feature data.",
    icon: Music,
    techStack: ["Python", "Scikit-learn", "Pandas", "Spotify API"],
    github: "https://github.com/sashipritam/spotify-genre-prediction",
    category: "AI/ML",
  },
]

const Projects = () => {
  const categories = ["All", "AI/ML", "Blockchain", "IoT", "Cybersecurity", "Full Stack"]

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical projects spanning AI/ML, blockchain, IoT, and cybersecurity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <project.icon className="h-8 w-8 text-blue-600 group-hover:text-purple-600 transition-colors" />
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
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
