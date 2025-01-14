import { StaticImageData } from "next/image";
export type Product = {
   id: string;
   name: string;
   category: string;
   price: number;
   image1: StaticImageData;
   image2: StaticImageData;
   image3: StaticImageData;
   image4: StaticImageData;
  };
  
  export type CartItem = {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    product: Product;
    quantity: number;
  };