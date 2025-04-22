import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Micro-Budget Advisor',
  description: 'AI-powered budgeting assistant that helps you make smarter money decisions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
