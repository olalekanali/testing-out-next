import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { getUser } from '../lib/auth'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const user = getUser()
    router.push(user ? '/dashboard' : '/login')
  }, [])

  return <p>Redirecting...</p>
}