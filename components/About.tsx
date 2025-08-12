"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Server, Smartphone, Monitor, Brain, Cloud, Palette, Zap, Star } from "lucide-react"

const skills = [
  { name: "Python", icon: Code, category: "Languages", level: 95, color: "from-blue-400 via-purple-500 to-pink-500" },
  { name: "Java", icon: Code, category: "Languages", level: 85, color: "from-purple-500 via-pink-500 to-red-500" },
  {
    name: "JavaScript",
    icon: Code,
    category: "Languages",
    level: 90,
    color: "from-blue-400 via-teal-500 to-emerald-500",
  },
  { name: "SQL", icon: Database, category: "Languages", level: 88, color: "from-teal-500 via-cyan-500 to-blue-500" },
  {
    name: "FastAPI",
    icon: Server,
    category: "Frameworks",
    level: 92,
    color: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    name: "Next.js",
    icon: Monitor,
    category: "Frameworks",
    level: 87,
    color: "from-gray-600 via-purple-600 to-pink-600",
  },
  {
    name: "React",
    icon: Monitor,
    category: "Frameworks",
    level: 90,
    color: "from-cyan-400 via-blue-500 to-purple-500",
  },
  {
    name: "Flutter",
    icon: Smartphone,
    category: "Frameworks",
    level: 75,
    color: "from-blue-500 via-indigo-500 to-purple-500",
  },
  {
    name: "Machine Learning",
    icon: Brain,
    category: "Technologies",
    level: 93,
    color: "from-pink-500 via-purple-500 to-indigo-500",
  },
  {
    name: "Neo4j",
    icon: Database,
    category: "Technologies",
    level: 80,
    color: "from-teal-500 via-emerald-500 to-green-500",
  },
  {
    name: "MongoDB",
    icon: Database,
    category: "Technologies",
    level: 85,
    color: "from-green-500 via-teal-500 to-cyan-500",
  },
  {
    name: "Cloud Computing",
    icon: Cloud,
    category: "Technologies",
    level: 82,
    color: "from-sky-400 via-cyan-500 to-teal-500",
  },
]

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-teal-900/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Professional Overview
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Technology professional with comprehensive experience in AI/ML engineering, full-stack development, and
            technical leadership. Currently pursuing B.Tech in Information Technology with specialization in Data
            Analytics at{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              Manipal Institute of Technology, Bengaluru
            </span>
            .
          </p>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="w-full"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-500 border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm group">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <skill.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{skill.category}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Attributes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <Card className="border-0 bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900/20 dark:to-teal-900/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Zap className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Professional Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Strategic Thinking",
                  "Team Leadership",
                  "Project Management",
                  "Technical Architecture",
                  "Problem Solving",
                  "Communication",
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Palette className="h-6 w-6 text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Languages</h3>
              </div>
              <div className="space-y-4">
                {[
                  { lang: "English", level: "Native/Fluent", color: "from-blue-500 to-blue-600" },
                  { lang: "Hindi", level: "Native", color: "from-green-500 to-green-600" },
                  { lang: "Telugu", level: "Native", color: "from-purple-500 to-purple-600" },
                  { lang: "Kannada", level: "Conversational", color: "from-orange-500 to-orange-600" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex justify-between items-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg"
                  >
                    <div className="flex items-center">
                      <div className={`w-3 h-3 bg-gradient-to-r ${item.color} rounded-full mr-3`}></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item.lang}</span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{item.level}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default About
