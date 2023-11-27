import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'

export const metadata: Metadata = {
  title: 'Dashtoon AI Comic Creator',
  description: 'Create your own comics using our awesome Generative AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </Provider>
  )
}
