export default function Section({
  noPad,
  children,
  className,
  id,
}: {
  noPad?: boolean
  children?: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={className}>
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
