export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Admin</h2>
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/dashboard/analytics">Analytics</a></li>
      </ul>
    </div>
  )
}