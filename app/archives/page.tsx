import Link from 'next/link'

export const metadata = {
  title: 'FriendCon Archives',
  description: 'Collection of past FriendCon events',
}

export default function ArchiveIndexPage() {
  const archivedYears = [
    {
      year: '2023',
      theme: 'F23 SUMMIT',
    },
    {
      year: '2024',
      theme: 'Babychella',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-4 sm:px-6 relative text-black">
      <h4 className="h4">Previous years</h4>
      <ul className="list-disc pl-8">
        {archivedYears.map(({ year, theme }) => (
          <li key={year} className="font-black">
            <Link href={`/archives/${year}`}>
              {year}: {theme}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
