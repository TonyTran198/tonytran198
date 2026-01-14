'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
  className?: string
  bgGray?: boolean
}

export default function Section({ id, title, children, className = '', bgGray = false }: SectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id={id}
      className={`section-container ${bgGray ? 'bg-gray-50 dark:bg-gray-900/50' : ''} ${className}`}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">{title}</span>
        </h2>
        {children}
      </motion.div>
    </section>
  )
}
