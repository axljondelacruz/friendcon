import Image from 'next/image'

import BlueBlobSrc from '../../../public/images/blue-blob.png'

export default function BlueBlob() {
  return (
    <div className="blue-blob floating-2">
      <div className="blue-blob-content">
        <div className="blue-blob-planes">
          <div className="blue-blob-planes-wrapper">
            <div className="blue-blob-plane">
              <Image src={BlueBlobSrc} alt="Blue Blob" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
