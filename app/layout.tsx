import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"
import './globals.css'

export const metadata: Metadata = {
  title: 'Hamro Sajilo Interior',
  description: 'A company for your desire in your house interior',
  generator: 'Saugat Gautam and Sachnedra Shrestha',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Analytics/>
      <body>{children}</body>
    </html>
  )
}
