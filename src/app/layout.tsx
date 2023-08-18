import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}
        bg-slate-800
        text-slate-100
        container
        mx-auto
        p-4
        lg:w-1/2`}>
        {children}
      </body>
    </html>
  )
}
