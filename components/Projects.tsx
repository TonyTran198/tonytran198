'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt, FaCode, FaUsers } from 'react-icons/fa'
import { projects } from '@/constants/data'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="section-container bg-gray-50 dark:bg-gray-900/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Featured Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="card group hover:border-primary-500 border-2 border-transparent transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>

              <div className="mb-3">
                <span className="inline-flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium mb-2">
                  <FaCode className="mr-1" />
                  {project.platform}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.period}</p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

              <div className="space-y-2 mb-4">
                {project.features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 mb-1">
                  <FaUsers className="mr-1" />
                  <span>{project.team}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-500">Role: {project.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
