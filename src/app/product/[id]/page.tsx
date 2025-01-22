"use client";
import { useState, useEffect } from "react";
import { IoStarSharp } from "react-icons/io5";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import Image from "next/image";
import { shoesize } from "@/data/size";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { urlFor } from "@/sanity/lib/image";
import ShareProduct from "@/components/Share";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Product = {
  _id: string;
  productName: string;
  category: string;
  price: number;
  image: string; // Updated to match Sanity schema
  inventory: number; // Added inventory field
  description?: string;
  colors?: string[];
  status?: string;
};

interface ProductPageProps {
  params: Promise<{ id: string }>; 
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { addToCart } = useCart();
  const { addToWishlist, wishlistItems } = useWishlist();



  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const resolvedParams = await params;
        const { id } = resolvedParams; 
        const fetchedProduct = await client.fetch(
          `*[_type == "product" && _id == $id][0]{
            _id,
            productName,
            description,
            price,
            category,
            colors,
            status,
            inventory, // Fetch inventory
            "image": image.asset->url // Fetch image URL
          }`,
          { id }
        );

        if (fetchedProduct) {
          setProduct(fetchedProduct);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        setError("Error fetching product");
        console.error(err);
      }
    };

    fetchProduct();
  }, [params]);

  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCartOrWishlist = (product: Product) => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart or wishlist.");
      return;
    }

    if (product.inventory) {
      addToCart(product);
      alert(`${product.productName} (Size: ${selectedSize}) added to cart!`);
    } else {
      addToWishlist(product);
      alert(`${product.productName} (Size: ${selectedSize}) added to wishlist!`);
    }
  };

  const isProductInWishlist = product ? wishlistItems.some((item) => item._id === product._id) : false;

  if (error) return <h1>{error}</h1>;
  if (!product) return <h1>Loading...</h1>;

  return (
    <>
      <section>
        <main className="py-10 flex gap-10 flex-wrap justify-center items-start">
          {/* Left: Product Image */}
          <div className="flex justify-center p-5 flex-wrap gap-5 w-[60%]">
            <Image
              className="shadow-md"
              src={product.image}
              alt={`Product Image`}
              width={400}
              height={380}
            />
          </div>

          {/* Right: Product Details */}
          <div className="w-full p-10 lg:w-[35%] xl:w-[35%]">
            <div>
              <h2 className="text-xl font-semibold">{product.productName}</h2>
              <p className="text-sm font-semibold">{product.category}</p>
              <p className="text-sm mt-4 font-semibold">MRP : ₹ {product.price}</p>
              <div className="text-xs">
                <p>incl. of taxes</p>
                <p>(Also includes all applicable duties)</p>
              </div>
            </div>

            {/* Size Selection */}
            <div className="w-full mt-5">
              <div className="text-sm flex justify-between w-full py-3 lg:w-96">
                <p>Select Size</p>
                <p>Size Guide</p>
              </div>
              <div className="flex flex-wrap justify-start items-start gap-2">
                {shoesize.map((size) => (
                  <Button
                    key={size.id}
                    className={`bg-white text-neutral-600 border hover:bg-white ${
                      selectedSize === size.name ? "bg-gray-200" : ""
                    }`}
                    onClick={() => handleSizeSelection(size.name)}
                  >
                    {size.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Add to Bag & Wishlist Buttons */}
            <div className="w-full flex justify-center items-center flex-col py-5 gap-3">
              {product.inventory > 0 ? (
                <Button
                  onClick={() => handleAddToCartOrWishlist(product)}
                  className="rounded-full w-full"
                >
                  Add to Bag
                </Button>
              ) : (
                <Button
                  onClick={() => handleAddToCartOrWishlist(product)}
                  className="rounded-full w-full bg-gray-200 text-black"
                  disabled={isProductInWishlist}
                >
                  {isProductInWishlist ? "Added to Wishlist" : "Add to Wishlist"}
                </Button>
              )}
            </div>
            <div className="my-5 flex justify-center">
                                <ShareProduct product={{
                                        name: `${product.productName}`,
                                        image: `${urlFor(product.image).width(50).url()}`,
                                        url: `${process.env.NEXT_PUBLIC_BASE_URL}/product/${product._id}`    
                                    }}/>
                                </div>

            {/* Shipping Details */}
            <div className="mt-5">
              <h3 className="font-semibold">Shipping</h3>
              <p className="text-sm text-gray-700">
                You&apos;ll see our shipping options at checkout.
              </p>
              <p className="text-sm text-gray-700 mt-7">
                {product.description}
              </p>
              <div className="mt-5 text-sm">
                <li>Shown: {product.colors?.join(", ")}</li>
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
                {/* reviews */}
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