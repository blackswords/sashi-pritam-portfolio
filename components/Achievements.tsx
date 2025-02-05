"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Award, FileText, Star } from "lucide-react"

const achievements = [
  { title: "National Championship in Karate (2018)", icon: Trophy },
  { title: "HackNova Mini Hackathon Winner", icon: Award },
  { title: "Published Research Paper on LED - LIGHTS", icon: FileText },
  { title: "Completed Abacus till level 7", icon: Star },
]

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Achievements & Accomplishments
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="flex items-center p-6">
                  <achievement.icon className="h-8 w-8 mr-4 text-primary" />
                  <span>{achievement.title}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

