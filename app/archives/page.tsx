import Link from 'next/link'

export const metadata = {
  title: 'FriendCon Archives',
  description: 'Collection of past FriendCon events',
}

export default function ArchiveIndexPage() {
  const archivedYears = [
    {
      year: '2017',
      theme: 'San Diego - Geo & Steffy',
      googlePhotos: 'https://photos.app.goo.gl/i1UGJt6AKk2cpuaZA',
      noSite: true,
    },
    {
      year: '2018',
      theme: 'Torrance - Crystal & Eric',
      googlePhotos: 'https://photos.app.goo.gl/wmb1dpgAPKCKUAq48',
      noSite: true,
    },
    {
      year: '2019',
      theme: 'San Diego - Lara & Darryl',
      googlePhotos: 'https://photos.app.goo.gl/CpkkFQ41hMeyUqtp7',
      noSite: true,
    },
    {
      year: '2020',
      theme: 'Big Bear',
      googlePhotos: 'https://photos.app.goo.gl/F2T7ShT4Wf38eYGfA',
      noSite: true,
    },
    {
      year: '2021',
      theme: 'Las Vegas',
      googlePhotos: 'https://photos.app.goo.gl/4qXj4FdK7V9FoEc4A',
      noSite: true,
    },
    {
      year: '2022',
      theme: 'Not a Friendsmas - Axl & Laura',
      googlePhotos: 'https://photos.app.goo.gl/WtCKTDWGpYXipvdv5',
      noSite: true,
    },
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
        {archivedYears.map(({ year, theme, googlePhotos, noSite }) => (
          <li key={year} className="mb-3">
            <h4 className="h4">
              {year}: {theme}
            </h4>
            <ul className="list-disc pl-8">
              {!noSite && (
                <li>
                  <Link
                    href={`/archives/${year}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    [Website]
                  </Link>
                </li>
              )}
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
