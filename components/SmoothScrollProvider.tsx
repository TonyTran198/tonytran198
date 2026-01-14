'use client'

import { useEffect } from 'react'
import { initSmoothScroll } from '@/lib/smooth-scroll'

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const cleanup = initSmoothScroll()
    return cleanup
  }, [])

  return <>{children}</>
}
