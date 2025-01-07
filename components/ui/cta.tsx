import Link from 'next/link'

export default function Cta({
  children,
  className,
  id,
  linkUrl,
}: {
  children?: React.ReactNode
  className?: string
  id?: string
  linkUrl: string
}) {
  return (
    <div className="cta-container">
      <div className="cta">
        <Link href={linkUrl} target="_blank" rel="noopener noreferrer">
          {children}
        </Link>
      </div>
    </div>
  )
}
