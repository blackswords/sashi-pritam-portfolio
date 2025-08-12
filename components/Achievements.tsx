"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Medal, Star, Zap, Crown } from "lucide-react"

const achievements = [
  {
    title: "Winner - December Schneider (HackNova) Hackathon",
    description:
      "Developed a smart energy management solution using IoT sensors and real-time analytics for industrial environments, hosted by Schneider Electric",
    icon: Trophy,
    category: "Hackathon Victory",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    date: "December 2024",
    recognition: "1st Place among 200+ teams",
  },
  {
    title: "National Championship in Karate",
    description:
      "Achieved national-level recognition in martial arts, demonstrating discipline, dedication, and competitive excellence",
    icon: Medal,
    category: "Sports Achievement",
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    date: "2018",
    recognition: "National Level Champion",
  },
  {
    title: "Multiple Research Publications",
    description:
      "Co-authored book chapter and presented papers at international conferences on cybersecurity and technology",
    icon: Star,
    category: "Academic Recognition",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    date: "2024-2025",
    recognition: "5 Publications & Presentations",
  },
  {
    title: "Hackathon Participant - HackNite & HackSky",
    description:
      "Consistently participated in competitive hackathons, building innovative solutions in cybersecurity and collaborative platforms",
    icon: Zap,
    category: "Innovation & Competition",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    date: "2024",
    recognition: "Top Performer",
  },
  {
    title: "Abacus Proficiency - Level 7",
    description:
      "Completed advanced level training in mental mathematics and calculation techniques, enhancing cognitive abilities",
    icon: Crown,
    category: "Skill Mastery",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    date: "Early Education",
    recognition: "Advanced Level Certification",
  },
  {
    title: "Technical Excellence Recognition",
    description:
      "Recognized for outstanding performance in multiple internships at leading tech companies including NTT DATA, Intel, and Corizo",
    icon: Award,
    category: "Professional Recognition",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    date: "2024-2025",
    recognition: "Industry Appreciation",
  },
]

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Celebrating milestones and recognition earned through dedication, innovation, and excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/50 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-full ${achievement.bgColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <achievement.icon className={`h-8 w-8 ${achievement.color} group-hover:animate-pulse`} />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {achievement.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-blue-600 transition-colors duration-300">
                    {achievement.title}
                  </CardTitle>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{achievement.date}</span>
                    <Badge variant="secondary" className="text-xs">
                      {achievement.recognition}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Achievement Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "1", label: "National Championship", icon: Medal },
                { number: "1", label: "Hackathon Victory", icon: Trophy },
                { number: "5+", label: "Publications", icon: Star },
                { number: "3", label: "Tech Internships", icon: Award },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
