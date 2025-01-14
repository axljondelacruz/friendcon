export default function FeaturedContentContainer({
  children,
  className,
  id,
}: {
  children?: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section
      id={id}
      className={`featured-content-container max-w-6xl mx-auto px-4 sm:px-6 relative ${className}`}
    >
      <div className="flex flex-col md:flex-row md:space-x-4">{children}</div>
    </section>
  )
}
