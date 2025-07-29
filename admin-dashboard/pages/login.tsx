import { useRouter } from 'next/router'
import { useState } from 'react'
import { login } from '../lib/auth'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleLogin = () => {
    login(email)
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="border p-2"
        />
        <button onClick={handleLogin} className="ml-2 bg-blue-500 text-white px-4 py-2">
          Login
        </button>
      </div>
    </div>
  )
}