export default function Topbar({ title }: { title?: string }) {
  return (
    <div className="bg-white shadow p-4">
      <h1 className="text-xl">{title}</h1>
    </div>
  )
}