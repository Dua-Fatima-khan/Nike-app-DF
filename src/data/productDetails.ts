import { StaticImageData } from "next/image";
import airforce1 from "../../public/details/airforce1.png";
import airforce2 from "../../public/details/airforce2.png";
import airforce3 from "../../public/details/airforce3.png";
import airforce4 from "../../public/details/airforce4.png";
import court1 from "../../public/details/court1.png";
import court2 from "../../public/details/court2.png";
import court3 from "../../public/details/court3.png";
import court4 from "../../public/details/court4.png";
import airblue1 from "../../public/details/airblue1.png";
import airblue2 from "../../public/details/airblue2.png";
import airblue3 from "../../public/details/airblue3.png";
import airblue4 from "../../public/details/airblue4.png";
import react1 from "../../public/details/react1.png";
import react2 from "../../public/details/react2.png";
import react3 from "../../public/details/react3.png";
import react4 from "../../public/details/react4.png";
import jordan1 from "../../public/details/jordan1.png";
import jordan2 from "../../public/details/jordan2.png";
import jordan3 from "../../public/details/jordan3.png";
import jordan4 from "../../public/details/jordan4.png";

interface PRODUCTS {
  id: string;
  name: string;
  category: string;
  price: number;
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  image4: StaticImageData;
}

export const products: PRODUCTS[] = [
  {
    id: "1",
    name: "Nike Air Force 1 Mid '07",
    category: "Men's Shoes",
    price: 125,
    image1: airforce1,
    image2: airforce2,
    image3: airforce3,
    image4: airforce4,
  },
  {
    id: "2",
    name: "Nike Court Vision Low Next Nature",
    category: "Men's Shoes",
    price: 4995,
    image1: court1,
    image2: court2,
    image3: court3,
    image4: court4,
  },
  {
    id: "3",
    name: "Nike Air Force 1 PLT.AF.ORM",
    category: "Women's Shoes",
    price: 8995,
    image1: airblue1,
    image2: airblue2,
    image3: airblue3,
    image4: airblue4,
  },
  {
    id: "4",
    name: "Nike Air Force 1 React",
    category: "Men's Shoes",
    price: 97.97,
    image1: react1,
    image2: react2,
    image3: react3,
    image4: react4,
  },
  {
    id: "5",
    name: "Air Jordan 1 Elevate Low",
    category: "Women's Shoes",
    price: 11895,
    image1: jordan1,
    image2: jordan2,
    image3: jordan3,
    image4: jordan4,
  },
];