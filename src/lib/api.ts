import client from '@/sanity/lib/client';

export async function getProducts() { // ✅ Export the function
  try {
    const products = await client.fetch(
      `*[_type == "product"]{
        _id,
        name,
        description,
        price,
        discountPercentage,
        priceWithoutDiscount,
        rating,
        ratingCount,
        tags,
        sizes,
        "imageUrl": image.asset->url
      }[0...12]`
    );
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}