import Image, { StaticImageData } from 'next/image'

import Cta from '@/components/ui/cta'

export default function FeaturedContentLeft({
  children,
  className,
  header,
  body,
  id,
  imageSrc,
  imageAlt,
  linkUrl1,
  cta1,
  linkUrl2,
  cta2,
}: {
  children?: React.ReactNode
  className?: string
  header?: string
  body?: string | TrustedHTML
  id?: string
  imageSrc?: StaticImageData
  imageAlt?: string
  linkUrl1?: string
  cta1?: string
  linkUrl2?: string
  cta2?: string
}) {
  const order = imageSrc ? 'order-1 md:order-2' : 'order-2 md:order-2'

  return (
    <div
      id={id}
      className={`featured-content-left p-4 flex-1 ${order} ${className}`}
    >
      {imageSrc && imageAlt ? (
        <Image className="rounded-full" src={imageSrc} alt={imageAlt} />
      ) : (
        <>
          <h2 className="h3 text-black">{header}</h2>
          <div className="featured-content-body mt-4">
            {body && (
              <p
                className="text-black"
                dangerouslySetInnerHTML={{ __html: body }}
              />
            )}
          </div>
          <div className="flex flex-row space-x-2 justify-center">
            {linkUrl1 && cta1 && <Cta linkUrl={linkUrl1}>{cta1}</Cta>}
            {linkUrl2 && cta2 && <Cta linkUrl={linkUrl2}>{cta2}</Cta>}
          </div>
        </>
      )}
    </div>
  )
}
