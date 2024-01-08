import "./Product.css";
import Data from "../DB/data";
import Card from "../Components/Card";
import Sidebar from "../Sidebar/Sidebar";
export default function Product() {
  return (
    <>
      <Sidebar />
      <section className="card-container">
        {Data.map(({ img, title, star, reviews, newPrice, prevPrice }) => (
          <Card
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            newPrice={newPrice}
            prevPrice={prevPrice}
          />
        ))}
      </section>
    </>
  );
}
