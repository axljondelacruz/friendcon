import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-center space-x-8">
        <Link href="/archives" className="hover:underline">
          Archives
        </Link>
        <Link href="/" className="hover:underline">
          Current
        </Link>
      </div>
    </footer>
  )
}
