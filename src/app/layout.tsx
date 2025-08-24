import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './global.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space',
})

export const metadata: Metadata = {
  title: 'Richard Karanu - Senior Full Stack Software Engineer',
  description: 'Senior Full Stack Engineer with 6+ years building and shipping products in VC-backed startups. Specializing in AI, scalable systems, and modern web technologies.',
  keywords: 'Full Stack Developer, Software Engineer, React, Python, TypeScript, AI, Machine Learning, Nairobi, Kenya',
  authors: [{ name: 'Richard Karanu' }],
  openGraph: {
    title: 'Richard Karanu - Senior Full Stack Software Engineer',
    description: 'Building the Future, One Line at a Time',
    type: 'website',
    locale: 'en_US',
    siteName: 'Richard Karanu Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Richard Karanu - Senior Full Stack Software Engineer',
    description: 'Building the Future, One Line at a Time',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}