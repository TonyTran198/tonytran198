import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Dat Tran Quang (TonyTran) - Frontend Developer',
    template: '%s | TonyTran Portfolio',
  },
  description: 'Experienced Frontend Developer specializing in Shopify, WordPress, and Flutter development. 8+ years of professional experience.',
  keywords: ['Frontend Developer', 'Shopify', 'WordPress', 'Flutter', 'Vue.js', 'React', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Dat Tran Quang' }],
  creator: 'Dat Tran Quang',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tonytran.dev',
    title: 'Dat Tran Quang - Frontend Developer Portfolio',
    description: 'Experienced Frontend Developer with 8+ years of experience in Shopify, WordPress, and Flutter',
    siteName: 'TonyTran Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dat Tran Quang - Frontend Developer',
    description: 'Experienced Frontend Developer with 8+ years of experience',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
