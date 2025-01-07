import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-transparent sticky top-0 z-50 w-full font-transducer font-bold text-gray-900">
      <nav className="flex items-center">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-[24px] font-chellatype px-4 h-16 flex items-center hover:text-red-100 border-r-[1px] border-b-[1px] border-black hover:bg-red-400 hover:border-red-400"
          >
            BABYCHELLA
          </Link>
          <h1 className="hidden md:flex h5 px-4 h-16 flex items-center border-b-[1px] border-black font-transducer">
            JAN 10-12
          </h1>
        </div>

        <div className="flex-1 h-16 border-b-[1px] border-black"></div>

        <div className="flex">
          <Link
            href="/menu"
            className="h-16 px-4 flex items-center border-b-[1px] border-black hover:text-red-100 hover:bg-red-400 hover:border-red-400"
          >
            Menu
          </Link>
          <Link
            href="/itinerary"
            className="h-16 px-4 flex items-center border-b-[1px] border-black hover:text-red-100 hover:bg-red-400 hover:border-red-400"
          >
            Itinerary
          </Link>
        </div>
      </nav>
    </header>
  )
}
