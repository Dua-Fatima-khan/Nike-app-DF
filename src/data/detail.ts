import { StaticImageData } from "next/image";

export interface Items {
  id: number;
  img: StaticImageData;
  title: string;
  title2: string;
  price: string;
  inStock: boolean;
}

import Best1 from "../../public/Best/b1.png";
import Best2 from "../../public/Best/b2.png";
import Best3 from "../../public/Best/b3.png";
import g1 from "../../public/gear/g1.png";
import g2 from "../../public/gear/g2.png";
import g3 from "../../public/gear/g3.png";
import g4 from "../../public/gear/g4.png";
import f1 from "../../public/featured/shoe1.png";
import f2 from "../../public/featured/shoe2.png";
import f3 from "../../public/featured/shoe3.png";
import f4 from "../../public/featured/shoe4.png";
import f5 from "../../public/featured/shoe5.png";
import f6 from "../../public/featured/shoe6.png";
import f7 from "../../public/featured/shoe7.png";
import f8 from "../../public/featured/shoe8.png";
import f9 from "../../public/featured/shoe9.png";
import f10 from "../../public/featured/shoe10.png";

export const airMax: Items[] = [
  {
    id: 1,
    img: Best1,
    title: "Nike Air Max Pulse",
    title2: "Women's Shoes",
    price: "₹ 13 995",
    inStock: true,
  },
  {
    id: 2,
    img: Best2,
    title: "Nike Air Max Pulse",
    title2: "Men's Shoes",
    price: "₹ 13 995",
    inStock: false,
  },
  {
    id: 3,
    img: Best3,
    title: "Nike Air Max 97 SE",
    title2: "Men's Shoes",
    price: "₹ 13 995",
    inStock: true,
  },
  {
    id: 4,
    img: Best1,
    title: "Nike Air Max Pulse",
    title2: "Women's Shoes",
    price: "₹ 13 995",
    inStock: false,
  },
  {
    id: 5,
    img: Best2,
    title: "Nike Air Max Pulse",
    title2: "Men's Shoes",
    price: "₹ 13 995",
    inStock: true,
  },
  {
    id: 6,
    img: Best3,
    title: "Nike Air Max 97 SE",
    title2: "Men's Shoes",
    price: "₹ 13 995",
    inStock: true,
  },
  {
    id: 7,
    img: Best3,
    title: "Nike Air Max 97 SE",
    title2: "Men's Shoes",
    price: "₹ 13 995",
    inStock: false,
  },
];

export const gear1: Items[] = [
  {
    id: 1,
    img: g1,
    title: "Nike Air Max Pulse",
    title2: "Women's Shoes",
    price: "₹ 13 995",
    inStock: true,
  },
  {
    id: 2,
    img: g2,
    title: "Nike Air Max Pulse",
    title2: "Men's Shoes",
    price: "₹ 13 995",
    inStock: false,
  },
  {
    id: 3,
    img: g1,
    title: "Nike Air Max 97 SE",
    title2: "Men's Shoes",
    price: "₹ 13 995",
    inStock: true,
  },
  {
    id: 4,
    img: g2,
    title: "Nike Air Max 97 SE",
    title2: "Men's Shoes",
    price: "₹ 13 995",
    inStock: false,
  },
];

export const gear2: Items[] = [
  {
    id: 1,
    img: g3,
    title: "Nike Air Max Pulse",
    title2: "Women's Shoes",
    price: "₹ 13 995",
    inStock: true,
  },
  {
    id: 2,
    img: g4,
    title: "Nike Air Max Pulse",
    title2: "Men's Shoes",
    price: "₹ 13 995",
    inStock: true,
  },
  {
    id: 3,
    img: g3,
    title: "Nike Air Max 97 SE",
    title2: "Men's Shoes",
    price: "₹ 13 995",
    inStock: false,
  },
  {
    id: 4,
    img: g4,
    title: "Nike Air Max 97 SE",
    title2: "Men's Shoes",
    price: "₹ 13 995",
    inStock: true,
  },
];

export const feature: Items[] = [
  {
    id: 1,
    img: f1,
    title: "Nike Air Force 1 Mid '07",
    title2: "Men's Shoes",
    price: "₹ 10 995",
    inStock: true,
  },
  {
    id: 2,
    img: f2,
    title: "Nike Court Vision Low Next Nature",
    title2: "Men's Shoes",
    price: "₹ 4 995",
    inStock: false,
  },
  {
    id: 3,
    img: f3,
    title: "Nike Air Force 1 PLT.AF.ORM",
    title2: "Women's Shoes",
    price: "₹ 8 995",
    inStock: true,
  },
  {
    id: 4,
    img: f4,
    title: "Nike Air Force 1 React",
    title2: "Men's Shoes",
    price: "₹ 13 295",
    inStock: false,
  },
  {
    id: 5,
    img: f5,
    title: "Air Jordan 1 Elevate Low",
    title2: "Women's Shoes",
    price: "₹ 11 895",
    inStock: true,
  },
  {
    id: 6,
    img: f6,
    title: "Nike Court Vision Low",
    title2: "Men's Shoes",
    price: "₹ 5 695",
    inStock: true,
  },
  {
    id: 7,
    img: f7,
    title: "Nike Dunk Low Retro SE",
    title2: "Men's Shoes",
    price: "₹ 9 695",
    inStock: false,
  },
  {
    id: 8,
    img: f8,
    title: "Nike Air Max SC",
    title2: "Men's Shoes",
    price: "₹ 12 695",
    inStock: true,
  },
  {
    id: 9,
    img: f9,
    title: "Nike Dunk Low Retro",
    title2: "Men's Shoes",
    price: "₹ 7 695",
    inStock: false,
  },
  {
    id: 10,
    img: f10,
    title: "Nike Air Max SC",
    title2: "Women's Shoes",
    price: "₹ 16 695",
    inStock: true,
  },
  {
    id: 11,
    img: f9,
    title: "Nike Air Force 1 PLT.AF.ORM",
    title2: "Women's Shoes",
    price: "₹ 8 995",
    inStock: true,
  },
  {
    id: 12,
    img: f5,
    title: "Nike Air Force 1 React",
    title2: "Men's Shoes",
    price: "₹ 13 295",
    inStock: false,
  },
  {
    id: 13,
    img: f4,
    title: "Air Jordan 1 Elevate Low",
    title2: "Women's Shoes",
    price: "₹ 11 895",
    inStock: true,
  },
];