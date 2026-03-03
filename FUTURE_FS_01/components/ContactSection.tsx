'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Linkedin, Github, Twitter, Instagram } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        toast.error('Please enter a valid email address')
        setIsLoading(false)
        return
      }

      // Simulate API call (replace with your actual backend)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast.success('Message sent successfully! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'avadhkalathiya219@gmail.com',
      href: 'mailto:avadhkalathiya219@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9023477456',
      href: 'tel:+919023477456',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Surat, Gujarat, India',
      href: '#',
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
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            I&apos;m always open to new opportunities and interesting projects. Feel free to reach out!
          </p>
          <div className="w-12 h-1 bg-blue-500 rounded-full mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-accent/50 border border-border hover:border-blue-500/50 transition-all group cursor-pointer"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/20 text-blue-500 group-hover:bg-blue-500/30 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                    <p className="text-foreground/70 group-hover:text-blue-500 transition-colors">{info.value}</p>
                  </div>
                </motion.a>
              )
            })}

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-6">
              <h3 className="font-semibold text-foreground mb-4">Follow Me & Contact</h3>
              <div className="flex gap-4 flex-wrap">
                <motion.a
                  href="https://www.linkedin.com/in/avadh-kalathiya-506154276/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 rounded-lg bg-accent hover:bg-blue-500/20 border border-border hover:border-blue-500/50 flex items-center justify-center transition-all text-foreground/70 hover:text-blue-500"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/AvadhKalathiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 rounded-lg bg-accent hover:bg-blue-500/20 border border-border hover:border-blue-500/50 flex items-center justify-center transition-all text-foreground/70 hover:text-blue-500"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://x.com/avadhk21"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 rounded-lg bg-accent hover:bg-blue-500/20 border border-border hover:border-blue-500/50 flex items-center justify-center transition-all text-foreground/70 hover:text-blue-500"
                  title="X (Twitter)"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/avadh_kalathiya21?igsh=OW1pZDFxazg1NWJt"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-10 h-10 rounded-lg bg-accent hover:bg-blue-500/20 border border-border hover:border-blue-500/50 flex items-center justify-center transition-all text-foreground/70 hover:text-blue-500"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 p-8 rounded-2xl bg-accent/30 border border-border"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-foreground placeholder-foreground/40"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-foreground placeholder-foreground/40"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-foreground placeholder-foreground/40 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/50"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
