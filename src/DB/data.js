import { AiFillStar } from "react-icons/ai";

import Painting1 from "./Flower painting1.jpg";
import Bottle1 from "./Butterfly bottle art1.jpg";
import Bottle2 from "./Flat bottom bottle art.jpg";
import Bottle3 from "./Painted botttle art.jpg";
import Quiling1 from "./Named frame quiling(Framed) Letter R.jpg";
import Quiling2 from "./Named quiling(Not framed)Letter N.jpg";
import Quiling3 from "./Named quiling(not framed) E.jpg";
import Mandala2 from "./Mandala Art1(Not framed).jpg";
import Mandala3 from "./Mandala Art(Not framed) Yellow.jpg";
import Mandala1 from "./Framed Mandala Art1.jpg";
import Mandala4 from "./Mandala Art(Not framed).jpg";
import Mandala5 from "./mandala art2.jpg";
import Stone1 from "./Quiling1.jpg";

const data = [
  //bottle art
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

  //quilings
  {
    img: Quiling1,
    pId: "q1",
    title: "Quiling Art(Framed) Letter R",
    star: <AiFillStar className="ratings-star" />,
    reviews: "(120 reviews)",
    prevPrice: "1000",
    newPrice: "900",
    category: "quiling",
  },

  {
    img: Quiling3,
    pId: "q3",
    title: "Quiling Art(Not Framed) Letter E",
    star: <AiFillStar className="ratings-star" />,
    reviews: "(169 reviews)",
    prevPrice: "800",
    newPrice: "650",
    category: "quiling",
  },
  {
    img: Quiling2,
    pId: "q2",
    title: "Quiling Art(Not Framed) Letter N",
    star: <AiFillStar className="ratings-star" />,
    reviews: "(129 reviews)",
    prevPrice: "900",
    newPrice: "800",
    category: "quiling",
  },
  //stone art
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
  //mandala
  {
    img: Mandala3,
    pId: "m3",
    title: "Mandala Art(Not framed) yellow",
    star: <AiFillStar className="ratings-star" />,
    reviews: "(12 reviews)",
    prevPrice: "400",
    newPrice: "300",
    category: "mandala",
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
    img: Mandala4,
    pId: "m4",
    title: "Mandala Art(Not framed)",
    star: <AiFillStar className="ratings-star" />,
    reviews: "(120 reviews)",
    prevPrice: "350",
    newPrice: "200",
    category: "mandala",
  },
  {
    img: Mandala5,
    pId: "m5",
    title: "Mandala Art(Not framed) flower",
    star: <AiFillStar className="ratings-star" />,
    reviews: "(100 reviews)",
    prevPrice: "350",
    newPrice: "200",
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
