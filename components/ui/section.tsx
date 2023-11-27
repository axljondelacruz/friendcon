export default function Section({
  isAlt,
  noPad,
  children,
}: {
  isAlt?: boolean
  noPad?: boolean
  children?: React.ReactNode
}) {
  return (
    <section className={isAlt ? 'alt-bg' : ''}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {noPad ? (
          <>{children}</>
        ) : (
          <div className="py-12 md:py-20">{children}</div>
        )}
      </div>
    </section>
  )
}
