export default function FcSection({
  children,
  className = '',
  id = '',
  noPad,
}: {
  children?: React.ReactNode
  className?: string
  id?: string
  noPad?: boolean
}) {
  return (
    <section id={id} className={`${className} fc-section`}>
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
