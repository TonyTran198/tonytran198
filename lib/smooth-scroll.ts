'use client'

import { gsap } from 'gsap'

// Smooth scroll function using GSAP (không cần ScrollToPlugin)
export function initSmoothScroll() {
  if (typeof window === 'undefined') return

  // Smooth scroll for anchor links
  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const link = target.closest('a[href^="#"]') as HTMLAnchorElement
    
    if (link && link.hash) {
      e.preventDefault()
      const targetId = link.hash.substring(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        scrollToElement(targetElement)
      }
    }
  }

  document.addEventListener('click', handleClick)
  
  return () => {
    document.removeEventListener('click', handleClick)
  }
}

function scrollToElement(element: HTMLElement) {
  const offset = 80 // Offset for fixed navigation
  const targetPosition = element.offsetTop - offset
  
  // Dùng GSAP để animate scrollTop của document.documentElement
  gsap.to(document.documentElement, {
    scrollTop: targetPosition,
    duration: 1.5,
    ease: 'power2.inOut',
  })
  
  // Fallback cho các browser khác
  gsap.to(document.body, {
    scrollTop: targetPosition,
    duration: 1.5,
    ease: 'power2.inOut',
  })
}

export function scrollToSection(sectionId: string) {
  if (typeof window === 'undefined') return
  
  const targetElement = document.getElementById(sectionId)
  
  if (targetElement) {
    scrollToElement(targetElement)
  }
}
