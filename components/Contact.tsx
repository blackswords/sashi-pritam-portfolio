"use client"
import { Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-teal-900/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-4 md:mb-6">
            Let's Connect
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to discuss opportunities, collaborations, or innovative projects? Let's build something amazing
            together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 lg:col-span-1"
          >
            <Card className="border-0 bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900/20 dark:to-teal-900/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 md:mb-6">
                  Contact Information
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <a
                    href="mailto:sashipritam@gmail.com"
                    className="flex items-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                  >
                    <Mail className="h-5 w-5 mr-3 text-blue-600 group-hover:text-blue-700 transition-colors" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        Email
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        sashipritam@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+919343934320"
                    className="flex items-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                  >
                    <Phone className="h-5 w-5 mr-3 text-green-600 group-hover:text-green-700 transition-colors" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        Phone
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        +91 9343934320
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                    <MapPin className="h-5 w-5 mr-3 text-red-600" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Location</p>
                      <p className="text-gray-600 dark:text-gray-400">Bengaluru, Karnataka, India</p>
                    </div>
                  </div>

                  <a
                    href="https://linkedin.com/in/sashipritam-ma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                  >
                    <Linkedin className="h-5 w-5 mr-3 text-blue-600 group-hover:text-blue-700 transition-colors" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        LinkedIn
                      </p>
                      <p className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors hover:underline">
                        /in/sashipritam-ma
                      </p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 md:mb-4">Response Time</h3>
                <div className="space-y-3 md:space-y-3">
                  <div className="flex items-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                    <Clock className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-600 dark:text-gray-400">Usually responds within 24 hours</span>
                  </div>
                  <div className="flex items-center p-3 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-gray-600 dark:text-gray-400">Available for immediate opportunities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
