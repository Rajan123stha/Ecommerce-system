import { AiFillStar } from "react-icons/ai";
import Quiling1 from "./Framed Quiling.png";
import Quiling2 from "./Quiling Framed2.png";
import Stone1 from "./Quiling1.jpg";
import Mandala1 from "./Framed Mandala Art1.jpg";
import Mandala2 from "./Mandala Art1.jpg";
import Painting1 from "./Flower painting1.jpg";
import Bottle1 from "./Butterfly_bottle_art.png";
import Bottle2 from "./Flat bottom bottle art.jpg";
import Bottle3 from "./Painted botttle art.jpg";
const data = [
  {
    img: Bottle1,
    pId: "b1",
    title: "Butterfly Bottle Art",
    star: <AiFillStar className="ratings-star" />,
    reviews: "(89 reviews)",
    prevPrice: "500",
    newPrice: "400",
    category: "bottle",
  },
  {
    img: Bottle2,
    pId: "b2",
    title: "Round Bottle Art",
    star: <AiFillStar className="ratings-star" />,
    reviews: "(89 reviews)",
    prevPrice: "500",
    newPrice: "450",
    category: "bottle",
  },
  {
    img: Bottle3,
    pId: "b3",
    title: "Painted Bottle Art",
    star: <AiFillStar className="ratings-star" />,
    reviews: "(89 reviews)",
    prevPrice: "550",
    newPrice: "400",
    category: "bottle",
  },
  {
    img: Quiling1,
    pId: "q1",
    title: "Quiling 1",
    star: <AiFillStar className="ratings-star" />,
    reviews: "(120 reviews)",
    prevPrice: "1000",
    newPrice: "900",
    category: "quiling",
  },
  {
    img: Quiling2,
    pId: "q2",
    title: "Quiling 2",
    star: <AiFillStar className="ratings-star" />,
    reviews: "(129 reviews)",
    prevPrice: "900",
    newPrice: "800",
    category: "quiling",
  },
  {
    img: Stone1,
    pId: "s1",
    title: "Stone 1",
    star: <AiFillStar className="ratings-star" />,
    reviews: "(120 reviews)",
    prevPrice: "1000",
    newPrice: "900",
    category: "stone",
  },
  {
    img: Mandala1,
    pId: "m1",
    title: "Framed mandala art 1",
    star: <AiFillStar className="ratings-star" />,
    reviews: "(121 reviews)",
    prevPrice: "1000",
    newPrice: "900",
    category: "mandala",
  },
  {
    img: Mandala2,
    pId: "m2",
    title: "Mandala Art 2",
    star: <AiFillStar className="ratings-star" />,
    reviews: "(129 reviews)",
    prevPrice: "900",
    newPrice: "800",
    category: "mandala",
  },
  {
    img: Painting1,
    pId: "p1",
    title: "FlowerPainting 1",
    star: <AiFillStar className="ratings-star" />,
    reviews: "(120 reviews)",
    prevPrice: "2000",
    newPrice: "1500",
    category: "painting",
  },
];
export default data;
