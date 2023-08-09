import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import './reset.scss'
import './global.scss'
import UserProvider from './components/context/UserContext'
import { GoogleOAuthProvider } from '../lib/googleOAuth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NoteDown',
  description: 'Welcome to NoteDown!',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {

  return (
    <html lang="en">
      <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}>
        <UserProvider>
          <script src="https://accounts.google.com/gsi/client" async defer></script>
          <body className={inter.className}>{children}</body>
        </UserProvider>
      </GoogleOAuthProvider>
    </html>
  )
}
