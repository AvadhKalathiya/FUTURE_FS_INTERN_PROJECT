'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md space-y-6"
      >
        {/* 404 Text */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-7xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"
        >
          404
        </motion.div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Page Not Found</h1>
          <p className="text-foreground/70">
            Sorry, the page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>
        </div>

        {/* CTA */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/50"
          >
            Back to Home
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
