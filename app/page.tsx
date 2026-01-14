import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'

export const metadata: Metadata = {
  title: 'Dat Tran Quang (TonyTran) - Frontend Developer Portfolio',
  description: 'Experienced Frontend Developer specializing in Shopify, WordPress, and Flutter development. 8+ years of professional experience.',
  keywords: ['Frontend Developer', 'Shopify', 'WordPress', 'Flutter', 'Vue.js', 'React', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Dat Tran Quang' }],
  openGraph: {
    title: 'Dat Tran Quang - Frontend Developer',
    description: 'Experienced Frontend Developer with 8+ years of experience',
    type: 'website',
  },
}

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </SmoothScrollProvider>
  )
}
