"use client"

import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './reset.scss'
import './global.scss'
import { GoogleOAuthProvider } from '@react-oauth/google';
import UserProvider from './components/context/UserContext'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {

  return (
    <html lang="en">
      <script src="https://accounts.google.com/gsi/client" async defer></script>
      <UserProvider>
        <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}>
          <body className={inter.className}>{children}</body>
        </GoogleOAuthProvider>
      </UserProvider>
    </html>
  )
}
