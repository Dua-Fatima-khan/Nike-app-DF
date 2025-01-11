import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-gray-100 py-6">
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center gap-5 flex-wrap w-[80%]">
          {/* Icons Section */}
          <div className="flex flex-col w-[15%] max-md:w-full">
            <span className="text-lg font-semibold text-gray-900 mb-3">Icons</span>
            <ul className="space-y-6 text-base text-gray-500">
              <li>
                <Link
                  href="#"
                  className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Air Force 1
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Huarache
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Air Max 90
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Air Max 95
                </Link>
              </li>
            </ul>
          </div>

          {/* Shoes Section */}
          <div className="flex flex-col w-[18%] max-md:w-full">
            <span className="text-lg font-semibold text-gray-900 mb-3">Shoes</span>
            <ul className="space-y-6 text-base text-gray-500">
              <li>
                <Link
                  href="#"
                  className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  All Shoes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Custom Shoes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Jordan Shoes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Running Shoes
                </Link>
              </li>
            </ul>
          </div>

          {/* Clothing Section */}
          <div className="flex flex-col w-[18%] max-md:w-full">
            <span className="text-lg font-semibold text-gray-900 mb-3">Clothing</span>
            <ul className="space-y-6 text-base text-gray-500">
              <li>
                <Link
                  href="#"
                  className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  All Clothing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Modest Wear
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Hoodies & Pullovers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Shirts & Tops
                </Link>
              </li>
            </ul>
          </div>

          {/* Kids Section */}
          <div className="flex flex-col w-[33%] max-md:w-full">
            <span className="text-sm font-semibold text-gray-900 mb-3">Kid&apos;s</span>
            <ul className="space-y-6 text-base text-gray-500">
              <li>
                <Link
                  href="#"
                  className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Infant & Toddler Shoes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Kid&apos;s Shoes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Kid&apos;s Jordan Shoes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Kid&apos;s Basketball Shoes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
