"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Cpu, Database, Server, Wifi } from "lucide-react"

const skills = [
  { name: "AI & Machine Learning", icon: Brain },
  { name: "Python", icon: Code },
  { name: "IoT", icon: Wifi },
  { name: "Data Science", icon: Database },
  { name: "Cyber Security", icon: Server },
  { name: "Deep Learning", icon: Cpu },
]

const About = () => {
  return (
    <section id="about" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 text-center max-w-2xl mx-auto"
        >
          Detail oriented team player with strong coding skills and organizational capabilities. I have an ability to handle multiple projects with passion by providing outstanding results with accuracy and consistency.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {skills.map((skill, index) => (
            <Card key={index}>
              <CardContent className="flex items-center p-4">
                <skill.icon className="h-6 w-6 mr-2 text-primary" />
                <span>{skill.name}</span>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

