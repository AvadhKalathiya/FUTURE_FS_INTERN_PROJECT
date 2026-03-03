'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import Link from 'next/link'

export default function ResumeSection() {
  const downloadResume = () => {
    // Replace with your actual resume URL
    const resumeUrl = '/resume.pdf'
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Your_Name_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resume" className="py-20 px-4 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Resume</h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        {/* Resume Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground">Experience</h3>

            {[
              {
                title: 'Web Developer',
                company: 'Future Interns · Internship',
                period: 'February 2026 - Present',
                location: 'Bengaluru, Karnataka, India · Remote',
                description: 'Building responsive user-friendly web interfaces and integrating frontend with backend systems',
              },
              {
                title: 'Full Stack Developer Intern',
                company: 'BioTechTrek · Internship',
                period: 'February 2026 - Present (7 months)',
                location: 'Indore, Madhya Pradesh, India · Remote',
                description: 'Developing responsive and user-friendly web interfaces using React.js, HTML5, CSS3, and JavaScript. Building full-stack features using Node.js, Express.js, and RESTful APIs. Integrating frontend and backend systems for seamless data flow. Working with MongoDB and MySQL for database design and data management. Optimizing application performance, scalability, and security. Exploring AI-powered API integrations to enhance application functionality.',
              },
              {
                title: 'Digital Growth & Video Content Engineer',
                company: 'Self-Employed · Part-time',
                period: 'September 2025 - Present (7 months)',
                location: 'Remote',
                description: 'Designing a scalable content pipeline powered by technology and AI tools. Integrating AI bots, automation, and generative models for content research, scripting, video optimization, and SEO tuning across YouTube and Instagram Reels/Shorts. Leveraging AI agents and algorithm intelligence to improve retention, engagement, and performance insights while building smarter, automated, and data-driven content systems.',
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="p-4 border-l-2 border-blue-500 pl-4 space-y-2"
              >
                <h4 className="font-semibold text-foreground">{job.title}</h4>
                <p className="text-sm text-blue-500 font-medium">{job.company}</p>
                <p className="text-xs text-foreground/60">{job.location}</p>
                <p className="text-sm text-foreground/60">{job.period}</p>
                <p className="text-foreground/70 text-sm">{job.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground">Education</h3>

            {[
              {
                degree: 'Bachelor of Technology (BTech) - Computer Engineering',
                school: 'MBIT-CVM University',
                year: 'June 2023 - June 2027',
                details: 'Currently in 3rd year, focusing on DSA, backend systems, and AI technologies',
              },
              {
                degree: 'Prompt Engineering Certification',
                school: 'Self-Learning',
                year: '2025',
                details: 'Mastering AI-powered chat and generative AI integration techniques',
              },
              {
                degree: 'JPMorganChase Software Engineering Job Simulation',
                school: 'JPMorganChase',
                year: '2025',
                details: 'Certificate of Participation in Software Engineering Virtual Internship',
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="p-4 border-l-2 border-blue-500 pl-4 space-y-2"
              >
                <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                <p className="text-sm text-blue-500 font-medium">{edu.school}</p>
                <p className="text-sm text-foreground/60">{edu.year}</p>
                <p className="text-foreground/70">{edu.details}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <motion.button
            onClick={downloadResume}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/50"
          >
            <Download className="w-5 h-5" />
            Download Full Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
