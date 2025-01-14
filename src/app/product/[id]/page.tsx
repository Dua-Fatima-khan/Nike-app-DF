"use client";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import Image from "next/image";
import { shoesize } from "@/data/size";
import { Button } from "@/components/ui/button";
import { products } from "@/data/productDetails";
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
  inStock: boolean; // Add inStock property to Product type
};

interface ProductPageProps {
  params: Promise<{ id: string }>; // Params is a Promise
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null); // Track selected size
  const { addToCart } = useCart(); // Use the addToCart function from CartContext
  const { addToWishlist, wishlistItems } = useWishlist(); // Use the addToWishlist function from WishlistContext

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

  // Handle size selection
  const handleSizeSelection = (size: string) => {
    setSelectedSize(size);
  };

  // Add to cart or wishlist based on stock availability
  const handleAddToCartOrWishlist = (product: Product) => {
    console.log("Adding product:", product); // Debugging
    if (!selectedSize) {
      alert("Please select a size before adding to cart or wishlist.");
      return;
    }

    if (product.inStock) {
      // Add to cart if the product is in stock
      addToCart(product);
      alert(`${product.name} (Size: ${selectedSize}) added to cart!`);
    } else {
      // Add to wishlist if the product is out of stock
      addToWishlist(product);
      alert(`${product.name} (Size: ${selectedSize}) added to wishlist!`);
    }
  };

  // Check if the product is already in the wishlist
  const isProductInWishlist = product ? wishlistItems.some((item) => item.id === product.id) : false;

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
              {product.inStock ? (
                // Show "Add to Bag" button if the product is in stock
                <Button
                  onClick={() => handleAddToCartOrWishlist(product)}
                  className="rounded-full w-full"
                >
                  Add to Bag
                </Button>
              ) : (
                // Show "Add to Wishlist" button if the product is out of stock
                <Button
                  onClick={() => handleAddToCartOrWishlist(product)}
                  className="rounded-full w-full bg-gray-200 text-black"
                  disabled={isProductInWishlist} // Disable if already in wishlist
                >
                  {isProductInWishlist ? "Added to Wishlist" : "Add to Wishlist"}
                </Button>
              )}
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
          </div>
        </main>
      </section>
    </>
  );
}