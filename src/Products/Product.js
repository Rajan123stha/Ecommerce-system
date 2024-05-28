import "./Product.css";
import Data from "../DB/data";
import Card from "../Components/Card";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
export default function Product() {
  return (
    <>
      <Sidebar />
      <section className="card-container">
        {Data.map(({ img, title, star, reviews, newPrice, prevPrice }) => (
          <Link to="/product-details">
            {" "}
            <Card
              img={img}
              title={title}
              star={star}
              reviews={reviews}
              newPrice={newPrice}
              prevPrice={prevPrice}
            />
          </Link>
        ))}
      </section>
    </>
  );
}
