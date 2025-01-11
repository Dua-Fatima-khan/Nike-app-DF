import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";

export default function Sidebar() {
  return (
    <main className=" p-4 h-full">
      <section className="flex flex-col max-w-[250px] space-y-10">
        {/* New Arrivals */}
        <div>
          <h1 className="font-semibold text-lg text-gray-800 mb-4">New (500)</h1>
          <div className="flex flex-col text-sm space-y-2">
            <Link href={""} className="hover:text-blue-500 transition">
              Shoes
            </Link>
            <Link href={""} className="hover:text-blue-500 transition">
              Sports Bras
            </Link>
            <Link href={""} className="hover:text-blue-500 transition">
              Tops & T-Shirts
            </Link>
            <Link href={""} className="hover:text-blue-500 transition">
              Hoodies & Sweatshirts
            </Link>
            <Link href={""} className="hover:text-blue-500 transition">
              Jackets
            </Link>
            <Link href={""} className="hover:text-blue-500 transition">
              Trousers & Tights
            </Link>
            <Link href={""} className="hover:text-blue-500 transition">
              Shorts
            </Link>
            <Link href={""} className="hover:text-blue-500 transition">
              Tracksuits
            </Link>
            <Link href={""} className="hover:text-blue-500 transition">
              Jumpsuits & Rompers
            </Link>
            <Link href={""} className="hover:text-blue-500 transition">
              Skirts & Dresses
            </Link>
            <Link href={""} className="hover:text-blue-500 transition">
              Socks
            </Link>
            <Link href={""} className="hover:text-blue-500 transition">
              Accessories & Equipment
            </Link>
          </div>
        </div>

        {/* Gender */}
        <div>
          <h1 className="font-semibold text-lg flex justify-between items-center">
            Gender
            <IoIosArrowUp className="text-gray-500" />
          </h1>
          <div className="mt-2 text-sm space-y-1">
            <h1 className="flex items-center hover:text-blue-500 cursor-pointer">
              Men
            </h1>
            <h1 className="flex items-center hover:text-blue-500 cursor-pointer">
              Women
            </h1>
            <h1 className="flex items-center hover:text-blue-500 cursor-pointer">
              Unisex
            </h1>
          </div>
        </div>

        {/* Kids */}
        <div>
          <h1 className="font-semibold text-lg flex justify-between items-center">
            Kids
            <IoIosArrowUp className="text-gray-500" />
          </h1>
          <div className="mt-2 text-sm space-y-1">
            <h1 className="hover:text-blue-500 cursor-pointer">Boys</h1>
            <h1 className="hover:text-blue-500 cursor-pointer">Girls</h1>
          </div>
        </div>

        {/* Sort By Price */}
        <div>
          <h1 className="font-semibold text-lg flex justify-between items-center">
            Sort By Price
            <IoIosArrowUp className="text-gray-500" />
          </h1>
          <div className="mt-2 text-sm space-y-1">
            <h1 className="hover:text-blue-500 cursor-pointer">
              Under ₹ 2,500.00
            </h1>
            <h1 className="hover:text-blue-500 cursor-pointer">
              ₹ 2,501.00 - ₹ 7,500.00
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
