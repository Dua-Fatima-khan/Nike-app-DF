"use client";
import { useState, useEffect } from "react";
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
import { StaticImageData } from "next/image";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  image4: StaticImageData;
};

interface ProductPageProps {
  params: Promise<{ id: string }>; // Params is a Promise
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { id } = await params; // Await the promise
        const fetchedProduct = products.find((prod) => prod.id === id);
        if (fetchedProduct) {
          setProduct(fetchedProduct);
        } else {
          setError("Product not found");
        }
      } catch (err: unknown) {
        setError("Error resolving params or fetching product");
        console.error(err);
      }
    };

    fetchProduct();
  }, [params]);

  if (error) return <h1>{error}</h1>;
  if (!product) return <h1>Loading...</h1>;

  return (
    <>
      <section>
        <main className="py-10 flex gap-10 flex-wrap justify-center items-start">
          {/* Left: Product Images */}
          <div className="flex justify-center items-center flex-wrap gap-5 w-[60%]">
            {[product.image1, product.image2, product.image3, product.image4].map(
              (image, index) => (
                <Image
                  key={index}
                  className="shadow-md"
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  width={300}
                  height={300}
                />
              )
            )}
          </div>

          {/* Right: Product Details */}
          <div className="w-full p-10 lg:w-[35%] xl:w-[35%]">
            <div>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-sm font-semibold">{product.category}</p>
              <p className="text-sm mt-4 font-semibold">MRP : ₹ {product.price}</p>
              <div className="text-xs">
                <p>incl. of taxes</p>
                <p>(Also includes all applicable duties)</p>
              </div>
            </div>

            {/* Size Selection */}
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

            {/* Add to Bag & Favourite Buttons */}
            <div className="w-full flex justify-center items-center flex-col  py-5 gap-3">
              <Button className="rounded-full w-full">Add to Bag</Button>
              <Button className="rounded-full w-full bg-white text-black border">
                Favourite
              </Button>
              <p className="text-sm text-neutral-700 text-center max-w-80">
                This product is excluded from site promotions and discounts.
              </p>
            </div>

            {/* Shipping Details */}
            <div className="mt-5">
              <h3 className="font-semibold">Shipping</h3>
              <p className="text-sm text-gray-700">
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

            {/* Accordion */}
            <div className="mt-7">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold">
                    Shipping & Returns
                  </AccordionTrigger>
                  <AccordionContent>
                    Free standard shipping on orders $50+ and free 60-day returns
                    for Nike Members. Learn more. Return policy exclusions apply.
                    Pick-up available at select Nike Stores.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-semibold">
                    <span>Reviews</span>
                    <div className="flex gap-1 justify-end items-center w-full">
                      {[...Array(5)].map((_, i) => (
                        <IoStarSharp key={i} />
                      ))}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <div>
                      <div className="w-full flex items-center justify-between">
                        <div className="flex gap-1 justify-center items-center">
                          {[...Array(5)].map((_, i) => (
                            <IoStarSharp key={i} />
                          ))}
                        </div>
                        <div className="text-xs text-gray-700">Antb1989 - Dec 24, 2024</div>
                      </div>
                      <p className="text-gray-700 text-sm mt-2">
                        Great deal exactly what they was described as, definitely worth the price.
                      </p>
                    </div>

                    <div>
                      <div className="w-full flex items-center justify-between">
                        <div className="flex gap-1 justify-center items-center">
                          {[...Array(5)].map((_, i) => (
                            <IoStarSharp key={i} />
                          ))}
                        </div>
                        <div className="text-xs text-gray-700">Ameer - Dec 20, 2024</div>
                      </div>
                      <p className="text-gray-700 text-sm mt-2">
                        I love my shoes and they came earlier than I expected. Thank you so much!
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </main>

        <div className="p-10">
          <h3 className="text-xl text-neutral-800 font-bold py-4">Explore more</h3>
          <FeaturedCarousel />
        </div>
      </section>
    </>
  );
}
