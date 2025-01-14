import Image from 'next/image'

import GreenBlobSrc from '../../../public/images/green-blob.png'

export default function GreenBlob() {
  return (
    <div className="green-blob floating">
      <div className="green-blob-content">
        <div className="green-blob-planes">
          <div className="green-blob-planes-wrapper">
            <div className="green-blob-plane">
              <Image src={GreenBlobSrc} alt="Green Blob" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
