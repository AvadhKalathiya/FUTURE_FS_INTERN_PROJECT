'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/AvadhKalathiya', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/avadh-kalathiya-506154276/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/avadhk21', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/avadh_kalathiya21?igsh=OW1pZDFxazg1NWJt', label: 'Instagram' },
    { icon: Mail, href: 'mailto:avadhkalathiya219@gmail.com', label: 'Email' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="#" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg">AK</span>
              </div>
              <span className="font-bold text-lg">Avadh Kalathiya</span>
            </Link>
            <p className="text-foreground/70 text-sm leading-relaxed max-w-xs">
              Full Stack Developer &amp; CS Student passionate about building scalable web applications and exploring AI in technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-blue-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    className="w-10 h-10 rounded-lg bg-accent hover:bg-blue-500/20 border border-border hover:border-blue-500/50 flex items-center justify-center transition-all text-foreground/70 hover:text-blue-500"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60"
        >
          <p>&copy; {currentYear} All rights reserved. Built with React, Next.js & Tailwind CSS.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-blue-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
