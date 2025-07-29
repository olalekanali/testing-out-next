import { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../../components/Layout'

export default function AnalyticsPage() {
  const [data, setData] = useState<{ users: number, views: number, sales: number } | null>(null)

  useEffect(() => {
    axios.get('/api/analytics').then(res => setData(res.data))
  }, [])

  return (
    <Layout title="Analytics">
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      {data ? (
        <div>
          <p>👥 Users: {data.users}</p>
          <p>👁️ Views: {data.views}</p>
          <p>💰 Sales: {data.sales}</p>
        </div>
      ) : <p>Loading...</p>}
    </Layout>
  )
}