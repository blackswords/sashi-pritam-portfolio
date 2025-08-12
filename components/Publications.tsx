"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, Calendar } from "lucide-react"

const publications = [
  {
    title: "Analysis of various cyber security challenges, issues, and counter measures in military application",
    type: "Book Chapter",
    role: "Co-Author",
    description:
      "Comprehensive analysis of cybersecurity challenges in military applications and proposed countermeasures.",
  },
  {
    title: "Analysis of Network Traffic Characteristic in Malicious and Benign Flows",
    type: "Conference Paper",
    role: "Presenter",
    conference: "2nd International Conference on New Frontiers in Communication, Automation, Management and Security",
    date: "July 12-13, 2025",
    venue: "Presidency University",
  },
  {
    title: "Advanced Phishing Using Machine Learning",
    type: "Conference Paper",
    role: "Presenter",
    conference: "2nd International Conference on New Frontiers in Communication, Automation, Management and Security",
    date: "July 12-13, 2025",
    venue: "Presidency University",
  },
  {
    title: "Traffic Volume Analysis and Reduction Strategies in Urban Environments",
    type: "Conference Paper",
    role: "Presenter",
    conference: "2nd International Conference on New Frontiers in Communication, Automation, Management and Security",
    date: "July 12-13, 2025",
    venue: "Presidency University",
  },
  {
    title:
      "Balancing Security and Energy Efficiency for IoT Devices Using Hybrid Cryptographic Schemes Merging Traditional and Post-Quantum Cryptography",
    type: "Poster Presentation",
    role: "Presenter",
    conference: "Indian Symposium on Computer Systems (IndoSys)",
    venue: "MIT-Bengaluru",
  },
]

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Publications & Research
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My contributions to academic research and publications in cybersecurity and technology
          </p>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <FileText className="h-5 w-5 text-blue-600 mr-2" />
                        <Badge variant="outline" className="text-xs">
                          {pub.type}
                        </Badge>
                        <Badge variant="secondary" className="text-xs ml-2">
                          {pub.role}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                        {pub.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {pub.description && <p className="text-gray-600 dark:text-gray-400 mb-4">{pub.description}</p>}
                  {pub.conference && (
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{pub.conference}</span>
                      </div>
                      {pub.date && (
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{pub.date}</span>
                        </div>
                      )}
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-medium">Venue: </span>
                        <span className="ml-1">{pub.venue}</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
