"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

const certifications = [
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    category: "Data Science",
  },
  {
    title: "Object-Oriented Hierarchies in Java",
    issuer: "LearnQuest",
    category: "Programming",
  },
  {
    title: "Computer and Peripheral Hardware",
    issuer: "Illinois Tech",
    category: "Hardware",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    category: "Networking",
  },
  {
    title: "Introduction to Software Engineering",
    issuer: "IBM",
    category: "Software Engineering",
  },
  {
    title: "Introduction to HTML, CSS, & JavaScript",
    issuer: "IBM",
    category: "Web Development",
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "IBM",
    category: "Cloud Computing",
  },
]

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and courses completed to enhance my technical skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Award className="h-6 w-6 text-blue-600 group-hover:text-purple-600 transition-colors flex-shrink-0 mt-1" />
                    <Badge variant="outline" className="text-xs ml-2">
                      {cert.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">{cert.issuer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
