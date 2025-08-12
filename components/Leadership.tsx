"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, Target, Award, BookOpen, Lightbulb, Heart, Megaphone } from "lucide-react"

const leadershipRoles = [
  {
    title: "General Secretary",
    organization: "ACM Student Chapter",
    duration: "2024 - Present",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    description: "Leading technical initiatives and coordinating member engagement activities.",
    activities: [
      "Organized 15+ technical workshops and coding competitions",
      "Increased chapter membership by 40% through strategic outreach",
      "Coordinated with industry professionals for guest lectures",
      "Managed a team of 25+ active members across different committees",
    ],
    impact: "Enhanced technical skills of 200+ students through various programs",
  },
  {
    title: "Vice President",
    organization: "Tech Fest 2025",
    duration: "2024 - 2025",
    icon: Award,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    description: "Overseeing planning and execution of the institute's major technical festival.",
    activities: [
      "Leading a team of 100+ volunteers across multiple departments",
      "Coordinating with 50+ sponsors and industry partners",
      "Managing budget allocation and resource distribution",
      "Organizing 20+ technical events and competitions",
    ],
    impact: "Expected participation of 5000+ students from 100+ colleges",
  },
  {
    title: "Media Head",
    organization: "National Service Scheme (NSS)",
    duration: "2023 - Present",
    icon: Megaphone,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    description: "Leading media outreach and event coverage for social service activities.",
    activities: [
      "Created digital content for 30+ social service campaigns",
      "Managed social media presence with 10K+ followers",
      "Documented community service activities and impact stories",
      "Coordinated with local media for event coverage",
    ],
    impact: "Increased NSS visibility and volunteer participation by 60%",
  },
  {
    title: "Educator & Volunteer",
    organization: "Volunteer Service Organization (VSO)",
    duration: "2022 - Present",
    icon: Heart,
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    description: "Teaching underprivileged students and organizing volunteer initiatives.",
    activities: [
      "Taught 50+ underprivileged children in mathematics and science",
      "Organized educational material distribution drives",
      "Conducted career guidance sessions for rural students",
      "Led weekend teaching programs in nearby villages",
    ],
    impact: "Improved academic performance of 80+ students from disadvantaged backgrounds",
  },
  {
    title: "Vice Chair",
    organization: "MIT Bengaluru Open Source Community (MBOSC)",
    duration: "2024 - Present",
    icon: Lightbulb,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    description: "Fostering open-source culture through collaboration, mentorship, and contributions.",
    activities: [
      "Mentored 30+ students in open-source contributions",
      "Organized hackathons and coding bootcamps",
      "Facilitated collaboration on 15+ open-source projects",
      "Conducted Git/GitHub workshops for beginners",
    ],
    impact: "Helped students make 200+ contributions to open-source projects",
  },
  {
    title: "Vice President",
    organization: "Electoral Literacy Club (ELC)",
    duration: "2023 - 2024",
    icon: Target,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    description: "Educating and raising awareness about electoral processes and democratic participation.",
    activities: [
      "Organized voter registration drives for 500+ students",
      "Conducted workshops on electoral processes and voter rights",
      "Collaborated with Election Commission for awareness campaigns",
      "Led mock election simulations and debates",
    ],
    impact: "Achieved 85% voter registration rate among eligible students",
  },
  {
    title: "Editor-in-Chief",
    organization: "Avalokana (MIT-BLR's Official Magazine)",
    duration: "2024 - Present",
    icon: BookOpen,
    color: "text-teal-600",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
    description: "Managing editorial team and content for the official campus publication.",
    activities: [
      "Led editorial team of 20+ writers and designers",
      "Published 2 annual issues with 50+ articles each",
      "Established content guidelines and quality standards",
      "Coordinated with faculty and administration for institutional content",
    ],
    impact: "Increased magazine readership by 150% and digital engagement by 200%",
  },
]

const Leadership = () => {
  return (
    <section
      id="leadership"
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
            Leadership & Community Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Driving positive change through leadership roles in technical, social, and academic organizations
          </p>
        </motion.div>

        <div className="space-y-8">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-2xl transition-all duration-500 border-l-4 border-l-transparent hover:border-l-blue-500 group">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`p-3 rounded-full ${role.bgColor} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <role.icon className={`h-6 w-6 ${role.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                          {role.title}
                        </CardTitle>
                        <div className="flex items-center mt-2">
                          <span className={`font-semibold ${role.color}`}>{role.organization}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">{role.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{role.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Target className="h-4 w-4 mr-2 text-blue-600" />
                        Key Activities
                      </h4>
                      <ul className="space-y-2">
                        {role.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-green-600" />
                        Impact & Results
                      </h4>
                      <div
                        className={`p-4 rounded-lg ${role.bgColor} border-l-4 ${role.color.replace("text-", "border-l-")}`}
                      >
                        <p className="text-gray-700 dark:text-gray-300 font-medium">{role.impact}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Leadership Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "7+", label: "Leadership Roles", icon: Users },
            { number: "500+", label: "Students Impacted", icon: Heart },
            { number: "50+", label: "Events Organized", icon: Calendar },
            { number: "3+", label: "Years Experience", icon: Award },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Leadership
