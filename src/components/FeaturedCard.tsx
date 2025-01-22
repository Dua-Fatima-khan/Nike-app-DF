"use client";
import Image from "next/image";
import Link from "next/link";
import  { client }  from "@/sanity/lib/client";
import { useEffect, useState } from 'react';

interface Product {
  _id: string;
  productName: string;
  category: string;
  price: number;
  inventory: number;
  colors: string[];
  status: string;
  imageUrl: string;
  description: string;
}

async function getProducts() {
  try {
    const products = await client.fetch(`
      *[_type == "product"]{
        _id,
        productName,
        description,
        price,
        category,
        colors,
        status,
        "imageUrl": image.asset->url
      }
    `);
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

export default function FeaturedCard() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-y-10">
      {products.map((product) => (
        <div key={product._id} className="md:basis-1/3 lg:basis-1/8">
          <Link href={`/product/${product._id}`}>
            <div className="p-1">
              <div>
                <div className="bg-[#F5F5F5] aspect-square group p-0">
                  <Image
                    src={product.imageUrl}
                    alt={product.productName}
                    width={440}
                    height={440}
                  />
                </div>
              </div>
            </div>
            <div className="mx-2 mt-2">
              <h4
                className={`font-semibold text-sm ${
                  product.status ? "text-[#9E3500]" : "text-red-600"
                }`}
              >
                {product.status ? "In Stock" : "Out of Stock"}
              </h4>
              <h1 className="font-semibold text-sm mt-2">{product.productName}</h1>
              <h3 className="text-sm text-[#757575]">{product.category}</h3>
              <h4 className="text-sm text-[#757575]">{product.colors.join(", ")}</h4>
              <h2 className="font-medium text-sm mt-2">MRP : {product.price}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}