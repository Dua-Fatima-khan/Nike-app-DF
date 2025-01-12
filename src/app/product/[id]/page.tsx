import Image from "next/image";
import { shoesize } from "@/data/size";
import { Button } from "@/components/ui/button";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { IoStarSharp } from "react-icons/io5";
import { products } from "@/data/productDetails";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProductPage({ params }: { params: { id: string } }) {
  // Convert params.id to number to match product id (if your product ids are numbers)
  const productId = parseInt(params.id, 10); // Convert id to number
  const product = products.find((product) => product.id === productId); // Find product by ID

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <section>
      <main className="py-10 flex gap-10 flex-wrap justify-center items-start">
        {/* left */}
        <div className="flex justify-center items-center flex-wrap gap-5 w-[60%]">
          <Image
            className=" shadow-md"
            src={product.image1}
            alt=""
            width={300}
            height={300}
          />
          <Image
            className=" shadow-md"
            src={product.image2}
            alt=""
            width={300}
            height={300}
          />
          <Image
            className=" shadow-md"
            src={product.image3}
            alt=""
            width={300}
            height={300}
          />
          <Image
            className=" shadow-md"
            src={product.image4}
            alt=""
            width={300}
            height={300}
          />
        </div>
        {/* right */}
        <div className="w-[35%]">
          {/* top-right */}
          <div>
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-sm font-semibold">{product.category}</p>
            <p className="text-sm mt-4 font-semibold">
              MRP : ₹ {product.price}
            </p>
            <div className="text-xs ">
              {" "}
              <p>incl. of taxes</p>
              <p>(Also includes all applicable duties)</p>
            </div>
          </div>
          {/* sizes */}
          <div className="w-full mt-5">
            <div className="text-sm flex justify-between w-96 py-3">
              <p>Select Size</p>
              <p>Size Guide</p>
            </div>
            <div className="flex flex-wrap justify-start items-start gap-2">
              {shoesize.map((size) => (
                <Button
                  key={size.id}
                  className="bg-white text-neutral-600 border hover:bg-white"
                >
                  {size.name}
                </Button>
              ))}
            </div>
          </div>
          {/* button */}
          <div className="w-full flex justify-center items-center flex-col py-5 gap-3">
            <Button className="rounded-full w-full">Add to Bag</Button>
            <Button className="rounded-full w-full bg-white text-black border">
              Favourite
            </Button>
            <p className="text-sm text-neutral-700 text-center max-w-80">
              This product is excluded from site promotions and discounts.
            </p>
          </div>
          {/* shipping more */}
          <div className="mt-5">
            <h3 className="font-semibold">Shipping</h3>
            <p className="text-sm text-gray-700">
              {" "}
              You&apos;ll see our shipping options at checkout.
            </p>
            <p className="text-sm text-gray-700 mt-7">
              Clean and supreme, the AJ3 returns with all of its classic style
              and grace. Quality leather in the upper—with that luxurious
              elephant print texture—combines with visible Nike Air in the sole
              to make a comfortable, everyday icon.
            </p>
            <div className="mt-5 text-sm">
              <li>Shown: Black/White/Dark Charcoal</li>
              <li>Style: CT8532-001</li>
            </div>
          </div>
          {/* accordion */}
          <div className="mt-7">
            <Accordion type="single" collapsible>
              {/* item-1 */}
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold ">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent>
                  Free standard shipping on orders $50+ and free 60-day returns
                  for Nike Members. Learn more. Return policy exclusions apply.
                  Pick-up available at select Nike Stores.
                </AccordionContent>
              </AccordionItem>
              {/* item-2 */}
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold ">
                  <span>Reviews</span>{" "}
                  <div className="flex gap-1 justify-end items-center w-full">
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <div>
                    <div className="w-full flex items-center justify-between">
                      <div className="flex gap-1 justify-center items-center">
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                      </div>
                      <div className="text-xs text-gray-700">
                        Antb1989 - Dec 24, 2024
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mt-2">
                      Great deal exactly what they was described as,definitely
                      worth the price
                    </p>
                  </div>
                  <div>
                    <div className="w-full flex items-center justify-between">
                      <div className="flex gap-1 justify-center items-center ">
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                      </div>
                      <div className="text-xs text-gray-700">
                        Ameer - Dec 20, 2024
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mt-2">
                      I love my shoes and they came earlier than I accepted
                      thank you so much!!!!
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <div className="p-10">
        <h3 className="text-xl text-neutral-800 text-bold py-4">
          Explore more
        </h3>
        <FeaturedCarousel />
      </div>
    </section>
  );
}
