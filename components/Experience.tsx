"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Work Experience
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Generative AI Specialist</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Corizo</p>
              <p>Duration: 6 months</p>
              <p>
                 Worked as a Generative AI Specialist at Corizo for six months, where I developed and implemented innovative AI models,enhancing user interaction and optimizing performance across various applications.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

