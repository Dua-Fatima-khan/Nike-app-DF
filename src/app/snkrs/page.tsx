import Image from "next/image";
import Link from "next/link";
import { snkrs } from "@/data/snkrs";
import { IoIosArrowDown } from "react-icons/io";

export default function Navigation() {
  return (
  <main>
      <nav
      className="flex justify-between px-5 flex-wrap gap-10 items-center text-base font-medium leading-4 text-center text-neutral-900"
      role="navigation"
      aria-label="Main navigation"
    >
      <Link href="/">
        <Image
          loading="lazy"
          src="/snkrs/logo-snkrs.png"
          alt="Navigation logo"
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.43] w-[50px]"
          width={50}
          height={50}
        />
      </Link>

      <div
        className="flex gap-10 items-center self-stretch text-gray-600"
        role="list"
      >
        <Link href="/feed">Feed</Link>{" "}
        <Link href="/in-stock" className="active underline text-gray-700">
          In stock
        </Link>
        <Link href="/upcoming">Upcoming</Link>
      </div>

      <Link href="/menu">
        <Image
          loading="lazy"
          src="/snkrs/cart.png"
          alt="Navigation menu icon"
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
          width={18}
          height={18}
        />
      </Link>
    </nav>
    {/* snkrs */}
    <section className="w-full h-full flex justify-center items-center gap-5 flex-wrap py-10 ">
   {snkrs.map((snkr)=>(
    <div key={snkr.id}>
 <Image
          loading="lazy"
          src={snkr.image}
          alt="snkr"
          width={200}
          height={200}
          className="rounded-md shadow-md"
        />
    </div>
   ))}
    </section>
    <div className="w-full p-10 flex flex-col justify-center items-center">
     <Link href={"/"}> Load more </Link><IoIosArrowDown />


    </div>
  </main>
  );
}
