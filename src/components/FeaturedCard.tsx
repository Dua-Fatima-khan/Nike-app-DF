import Image from "next/image";
import Link from "next/link";
import { feature } from "@/data/detail";

export function FeaturedCard() {
  return (
    <div className="flex flex-wrap gap-y-10">
      {feature.map((item) => (
        <div key={item.id} className=" md:basis-1/3 lg:basis-1/8">
          <Link href={""}>
            <div className="p-1">
              <div>
                <div className=" bg-[#F5F5F5] aspect-square group p-0">
                  <Image
                    src={item.img}
                    alt={"shoes"}
                    width={440}
                    height={440}
                  />
                </div>
              </div>
            </div>
            <div className=" mx-2 mt-2">
              <h4 className="font-semibold text-[#9E3500] text-sm">Just In</h4>
              <h1 className="font-semibold text-sm mt-2">{item.title}</h1>
              <h3 className=" text-sm text-[#757575]">{item.title2}</h3>
              <h4 className="text-sm text-[#757575]">1 Colour</h4>
              <h2 className="font-medium text-sm mt-2">MRP : {item.price}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
