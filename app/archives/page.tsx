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
      googlePhotos: 'https://photos.app.goo.gl/ZNaToCv1mFW4zJJp6',
    },
    {
      year: '2024',
      theme: 'Babychella',
      googlePhotos: 'https://photos.app.goo.gl/FUAbzTVtdzAC9X5FA',
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-4 sm:px-6 relative text-black">
      <h3 className="h3 mb-3">Previous years</h3>
      <ul className="list-none pl-8">
        {archivedYears.map(({ year, theme, googlePhotos }) => (
          <li key={year} className="mb-3">
            <h4 className="h4">
              {year}: {theme}
            </h4>
            <ul className="list-disc pl-8">
              <li>
                <Link
                  href={`/archives/${year}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  [Website]
                </Link>
              </li>
              <li>
                <Link
                  href={googlePhotos}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  [Photo Album]
                </Link>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
