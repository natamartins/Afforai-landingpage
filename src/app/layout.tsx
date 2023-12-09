import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/styles/styles.scss'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Afforai - Reseaech anything with an AI assistent',
  description: 'Your second brain for maximizing productivity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
