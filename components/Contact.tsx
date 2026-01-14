'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { contactInfo } from '@/constants/data'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Contact Me</span>
        </h2>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            🚀 Let&apos;s build something amazing together!
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 italic">
            &quot;Code is poetry written in logic&quot;
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card text-center group hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${contact.color} text-white mb-4 group-hover:shadow-lg transition-shadow`}>
                  <Icon size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {contact.label}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 break-all">
                  {contact.value}
                </p>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-600 dark:text-gray-400">
            ⭐ <strong>Feel free to reach out if you&apos;d like to collaborate!</strong>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
