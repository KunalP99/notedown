"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss'

export default function Home() {
  // Redirect user to /notes route
  const { push } = useRouter();
  useEffect(() => {
    push('/notes');
  });

  return (
    <main className={styles.main}>
    </main>
  )
}