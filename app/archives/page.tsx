import Link from 'next/link'
import Card from '@/components/ui/fc-card'

export const metadata = {
  title: 'FriendCon Archives',
  description: 'Collection of past FriendCon events',
}

export default function ArchiveIndexPage() {
  const archivedYears = [
    {
      year: '2015',
      theme: 'Impromtu Friendsmas',
      location: 'Moreno Valley, CA',
      host: 'Lara',
      googlePhotos: 'https://photos.app.goo.gl/Con8A5t5dqr9gzeX9',
    },
    {
      year: '2016',
      theme: 'Friendsgiving',
      location: 'Moreno Valley, CA',
      host: 'Axl',
      googlePhotos: 'https://photos.app.goo.gl/4N3GrXse59oh34597',
    },
    {
      year: '2016',
      theme: 'Onesies',
      location: 'Moreno Valley, CA',
      host: 'Randall',
    },
    {
      year: '2017',
      theme: 'Friendsgivingmas',
      location: 'San Diego, CA',
      host: 'Geo & Steffy',
      googlePhotos: 'https://photos.app.goo.gl/i1UGJt6AKk2cpuaZA',
    },
    {
      year: '2018',
      theme: 'Fancy',
      location: 'Torrance, CA',
      host: 'Crystal & Eric',
      googlePhotos: 'https://photos.app.goo.gl/wmb1dpgAPKCKUAq48',
    },
    {
      year: '2019',
      theme: 'Flannel',
      location: 'San Diego, CA',
      host: 'Lara & Darryl',
      googlePhotos: 'https://photos.app.goo.gl/CpkkFQ41hMeyUqtp7',
    },
    {
      year: '2020',
      theme: 'Friendsmas',
      location: 'Big Bear, CA',
      googlePhotos: 'https://photos.app.goo.gl/F2T7ShT4Wf38eYGfA',
    },
    {
      year: '2021',
      theme: 'Friendsmas',
      location: 'Las Vegas, NV',
      googlePhotos: 'https://photos.app.goo.gl/4qXj4FdK7V9FoEc4A',
    },
    {
      year: '2022',
      theme: 'Not a Friendsmas',
      location: 'Las Vegas, NV',
      host: 'Axl & Laura',
      googlePhotos: 'https://photos.app.goo.gl/WtCKTDWGpYXipvdv5',
    },
    {
      year: '2023',
      theme: 'F23 Summit',
      location: 'Julian, CA',
      host: 'FriendCon Committee',
      googlePhotos: 'https://photos.app.goo.gl/ZNaToCv1mFW4zJJp6',
      site: true,
    },
    {
      year: '2024',
      theme: 'Babychella',
      location: 'Desert Hot Springs, CA',
      host: 'FriendCon Committee',
      googlePhotos: 'https://photos.app.goo.gl/FUAbzTVtdzAC9X5FA',
      site: true,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-4 sm:px-6 relative text-black">
      <h3 className="h3 mb-3">Previous years</h3>
      <div className="grid grid-cols-3 gap-4">
        {archivedYears.map(
          ({ year, theme, googlePhotos, site, location, host }) => (
            <Card
              key={year}
              header={
                <>
                  <h4 className="h4">
                    {year}: {theme}
                  </h4>
                  {location && (
                    <p>
                      <strong>{location}</strong> {host && `(${host})`}
                    </p>
                  )}
                </>
              }
            >
              {site || googlePhotos ? (
                <ul className="list-disc pl-8">
                  {site && (
                    <li>
                      <Link
                        href={`/archives/${year}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Website
                      </Link>
                    </li>
                  )}
                  {googlePhotos && (
                    <li>
                      <Link
                        href={googlePhotos}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Photo Album
                      </Link>
                    </li>
                  )}
                </ul>
              ) : (
                <em>No photos available at this time :/</em>
              )}
            </Card>
          )
        )}
      </div>
    </div>
  )
}
