import type { Metadata } from 'next'
import { Dosis } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dashtoon AI Comic Creator',
  description: 'Create your own comics using our awesome Generative AI',
}

const dosis = Dosis({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dosis.className}>{children}</body>
    </html>
  )
}
