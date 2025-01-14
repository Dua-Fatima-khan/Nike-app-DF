import { StaticImageData } from "next/image";

export type Product = {
  id: string; // Changed to string to match usage
  name: string;
  category: string;
  price: number;
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  image4: StaticImageData;
};

export type CartItem = {
  product: Product;
  quantity: number;
};