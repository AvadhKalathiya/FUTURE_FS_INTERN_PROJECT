'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectsSection() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with product catalog, shopping cart, and secure payment integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full Stack',
      github: 'https://github.com/AvadhKalathiya',
      live: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and user authentication.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=300&fit=crop',
      tags: ['React', 'Firebase', 'Tailwind'],
      category: 'Frontend',
      github: 'https://github.com/AvadhKalathiya',
      live: 'https://example.com',
    },
    {
      title: 'Social Media Analytics',
      description: 'Dashboard for analyzing social media metrics with data visualization and insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['Next.js', 'Chart.js', 'PostgreSQL', 'TypeScript'],
      category: 'Full Stack',
      github: 'https://github.com/AvadhKalathiya',
      live: 'https://example.com',
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather application with location-based forecasts and interactive maps.',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&h=300&fit=crop',
      tags: ['React', 'OpenWeather API', 'Tailwind'],
      category: 'Frontend',
      github: 'https://github.com/AvadhKalathiya',
      live: 'https://example.com',
    },
    {
      title: 'Blog Platform',
      description: 'Content management system with markdown support, user authentication, and comment system.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop',
      tags: ['Next.js', 'Prisma', 'PostgreSQL'],
      category: 'Full Stack',
      github: 'https://github.com/AvadhKalathiya',
      live: 'https://example.com',
    },
    {
      title: 'Fitness Tracker',
      description: 'Mobile-responsive fitness tracking application with workout logging and progress visualization.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop',
      tags: ['React Native', 'Firebase', 'Redux'],
      category: 'Frontend',
      github: 'https://github.com/AvadhKalathiya',
      live: 'https://example.com',
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
    <section id="projects" className="py-20 px-4 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-accent">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Category Badge */}
                <div className="inline-block">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground group-hover:text-blue-500 transition-colors line-clamp-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/70 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-accent/80 text-foreground/80 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground/70 hover:text-blue-500 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground/70 hover:text-blue-500 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
