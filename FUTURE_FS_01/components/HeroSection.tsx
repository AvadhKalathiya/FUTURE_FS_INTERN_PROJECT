'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="inline-block">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-500 text-sm font-semibold">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground"
        >
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
            Avadh Kalathiya
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-foreground/70 max-w-2xl mx-auto">
          Full Stack Developer &amp; Computer Engineering Student passionate about building scalable web applications and exploring AI in technology. Python • Java • React • Node.js
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Link
            href="#projects"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/50"
          >
            View My Projects
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border border-foreground/20 hover:border-blue-500 text-foreground hover:text-blue-500 font-semibold rounded-lg transition-all hover:bg-blue-500/5"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6 pt-6">
          <Link
            href="https://github.com/avadhkalathiya"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:bg-accent rounded-lg transition-colors hover:text-blue-500"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/avadhkalathiya-506154276"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 hover:bg-accent rounded-lg transition-colors hover:text-blue-500"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link
            href="mailto:avadhkalathiya219@gmail.com"
            className="p-3 hover:bg-accent rounded-lg transition-colors hover:text-blue-500"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="pt-8"
        >
          <ArrowDown className="w-6 h-6 mx-auto text-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
