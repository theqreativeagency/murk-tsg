
import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shot By MurkTSG',
  description: 'The offical site for MurkTSG',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Shot By MurkTSG</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
