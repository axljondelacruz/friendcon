import Link from 'next/link'

export default function ArchiveIndexPage() {
  const archivedYears = ['2023']

  return (
    <div>
      <h1>Previous years</h1>
      <ul>
        {archivedYears.map((year) => (
          <li key={year}>
            <Link href={`/archived/${year}`}>{year}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
