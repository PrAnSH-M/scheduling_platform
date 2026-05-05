import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import { SanityLive } from '@/sanity/lib/live'
import './globals.css'
import { TimezoneDetector } from '@/components/timezone-detector'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Slotify',
  description: 'The ultimate scheduling platform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClerkProvider>
          <main>
            {children}
          </main>
          <SanityLive />
          <TimezoneDetector />
        </ClerkProvider>
      </body>
    </html>
  )
}