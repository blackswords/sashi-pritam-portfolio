"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Research and Developer Intern",
    company: "NTT DATA",
    duration: "May 2025 - Aug 2025",
    location: "Bengaluru,Karnataka",
    description: [
      "Designed and developed a hybrid Retrieval-Augmented Generation (RAG) platform that integrates graph databases, semantic search, and LLMs for advanced enterprise knowledge management.",
      "Automated extraction and representation of entities/relationships from multi-format documents into a dynamic, queryable knowledge graph (Neo4j), enabling multi-hop reasoning and visualization.",
      "Improved enterprise search accuracy and efficiency by delivering context-rich, relationship-driven answers, with modular architecture for scalable future enhancements.",
    ],
    skills: ["Neo4j", "RAG", "LLMs", "Graph Databases", "Python"],
  },
  {
    title: "Project Intern",
    company: "Intel",
    duration: "Dec 2024 - Feb 2025",
    location: "Bengaluru,Karnataka",
    description: [
      "Evaluated Pre-built Retrieval-Augmented Generation pipeline on academic PDFs, analyzing retrieval and LLM response quality.",
      "Contributed to UI/UX discussions and improvements for better user experience.",
      "Worked on optimizing AI model performance for document processing tasks.",
    ],
    skills: ["RAG", "LLMs", "UI/UX", "Document Processing", "Python"],
  },
  {
    title: "Generative AI Specialist Intern",
    company: "Corizo",
    duration: "Aug 2024 - Oct 2024",
    location: "Remote",
    description: [
      "Developed and implemented innovative AI models, enhancing user interaction and optimizing performance across various applications.",
      "Worked on generative AI solutions and contributed to improving model efficiency.",
      "Collaborated with cross-functional teams to deliver AI-powered features.",
    ],
    skills: ["Generative AI", "Machine Learning", "Python", "Model Optimization"],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey through internships at leading tech companies
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</CardTitle>
                      <div className="flex items-center mt-2 text-blue-600 dark:text-blue-400">
                        <Building className="h-4 w-4 mr-2" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 space-y-2">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Experience
