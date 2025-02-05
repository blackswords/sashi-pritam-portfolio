"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const leadershipRoles = [
  {
    title: "NSS Media Head",
    description: "Led media initiatives for National Service Scheme activities.",
  },
  
  {
    title: "ACM Student Chapter General Secretary",
    description: "Organized technical events and workshops for the ACM student community.",
  },
  {
    title: "Editorial Head of Avalokana",
    description: "Managed content creation and editing for the college magazine.",
  },
  {
    title: "Marketing Lead for College Fest",
    description: "Developed and executed marketing strategies for the annual college festival.",
  },
  {
    title: "Electorial Literacy Club Vice President",
    description: "The Electoral Literacy Club of Manipal Bengaluru educates and raises awareness about electoral processes, voter rights, and democratic participation through events and workshops.",
  },
   {
    title: "MBOSC Student Chapter Vice Chair",
    description: "MBOSC fosters open-source culture by empowering students through collaboration, mentorship, and real-world contributions.",
  },
]

const Leadership = () => {
  return (
    <section id="leadership" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Leadership & Extracurriculars
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{role.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{role.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership

