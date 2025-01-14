import Link from 'next/link'

export default function FcFooter() {
  return (
    <footer className="bg-gray-800 text-white py-4 fc-footer">
      <div className="container mx-auto flex justify-center space-x-8">
        <Link href="/archives" className="hover:underline fc-footer-link">
          Archives
        </Link>
        <Link href="/" className="hover:underline fc-footer-link">
          Current
        </Link>
      </div>
    </footer>
  )
}
