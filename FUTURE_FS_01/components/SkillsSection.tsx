'use client'

import { motion } from 'framer-motion'

export default function SkillsSection() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'HTML5 & CSS3', level: 92 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'REST APIs', level: 88 },
        { name: 'Python', level: 87 },
      ],
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 83 },
        { name: 'SQL', level: 84 },
        { name: 'Database Design', level: 82 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 88 },
        { name: 'JavaScript', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'AI Integration', level: 80 },
      ],
    },
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-foreground group-hover:text-blue-500 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-foreground/60">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-accent rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-4"
        >
          {['Data Structures', 'Algorithms', 'DSA', 'Responsive Design', 'API Integration', 'Generative AI', 'Prompt Engineering', 'Performance Optimization'].map(
            (skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 bg-accent/50 border border-border rounded-xl text-center hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-default"
              >
                <span className="text-foreground/80 font-medium">{skill}</span>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  )
}
