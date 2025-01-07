import Link from 'next/link'

export default function Header() {
  return (
    <div className="fixed top-0 w-full header">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <nav className="hidden md:flex md:grow">
          <ul className="flex grow flex-wrap items-center">
            <li>
              <Link
                href="#welcome"
                className="font-medium text-purple-600 hovnav er:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Welcome
              </Link>
            </li>
            <li>
              <Link
                href="#itinerary"
                className="font-medium text-purple-600 hovnav er:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Itinerary
              </Link>
            </li>
            <li>
              <Link
                href="#directions"
                className="font-medium text-purple-600 hovnav er:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Directions
              </Link>
            </li>
            <li>
              <Link
                href="#our-community"
                className="font-medium text-purple-600 hovnav er:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Our Community
              </Link>
            </li>
            <li>
              <Link
                href="#testimonials"
                className="font-medium text-purple-600 hovnav er:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
