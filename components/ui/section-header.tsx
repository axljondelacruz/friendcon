export default function SectionHeader({
  headerText,
  description,
  children,
}: {
  headerText?: string
  description?: string
  children?: React.ReactNode
}) {
  return (
    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
      <h1 className="h2 mb-4 section-header text-black">{headerText}</h1>
      {description ? (
        <p
          className="text-xl text-gray-400 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {description}
        </p>
      ) : null}
      {children}
    </div>
  )
}
