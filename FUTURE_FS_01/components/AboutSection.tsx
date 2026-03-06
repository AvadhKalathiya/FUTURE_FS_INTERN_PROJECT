'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  const highlights = [
    'Full-stack development with React, Node.js &amp; Express',
    'Database design &amp; management (MongoDB, MySQL)',
    'RESTful API integration &amp; backend systems',
    'AI-powered API integrations &amp; automation',
    'Clean coding practices &amp; problem-solving',
    'Responsive web design &amp; performance optimization',
  ]

  return (
    <section id="about" className="py-20 px-4 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg text-foreground/80 leading-relaxed">
              I&apos;m a 3rd-year Computer Engineering student at MBIT-CVM University, passionate about building scalable, real-world software solutions and continuously growing as a developer in the modern tech ecosystem. Currently strengthening my foundation in Python, Java, SQL, and Data Structures &amp; Algorithms while developing practical full-stack development and backend system skills.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-foreground/80 leading-relaxed">
              My focus is on understanding how real applications are designed, optimized, and scaled to solve real-world problems. Moving toward the next era of technology, I&apos;m actively exploring Artificial Intelligence, modern backend architectures, and emerging technologies to build impactful, scalable products that create real value.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">What I Do Best</h3>
              <div className="grid grid-cols-1 gap-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-foreground/80">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {[
              { number: '2+', label: 'Years Learning' },
              { number: '10+', label: 'Projects Built' },
              { number: '15+', label: 'Tech Skills' },
              { number: '3', label: 'Current Roles' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 bg-background border border-border rounded-2xl hover:border-blue-500/50 transition-colors"
              >
                <div className="text-3xl font-bold text-blue-500 mb-2">{stat.number}</div>
                <div className="text-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
