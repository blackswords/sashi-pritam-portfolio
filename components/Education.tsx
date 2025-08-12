"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const educationData = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Manipal Institute of Technology Bengaluru",
    year: "2022 - 2026",
    details: "Data Science",
  },
  {
    degree: "Class XII",
    institution: "Sri Chaitanya Techno School",
    year: "2022",
    details: "CBSE Board",
  },
]

const Education = () => {
  return (
    <section id="education" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{edu.degree}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{edu.institution}</p>
                  <p>{edu.year}</p>
                  <p>{edu.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
