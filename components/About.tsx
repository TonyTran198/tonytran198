'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personalInfo, aboutHighlights } from '@/constants/data'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">About Me</span>
        </h2>
        
        <div className="max-w-4xl mx-auto mt-12">
          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {personalInfo.about}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {aboutHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-2" />
                  <p className="text-gray-700 dark:text-gray-300">{highlight}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
