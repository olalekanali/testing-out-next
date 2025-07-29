export function login(email: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', email)
  }
}

export function getUser() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('user')
  }
  return null
}