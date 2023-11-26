import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Product from "./Products/Product";
import Recomended from "./Rocomended/Recomended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./Components/Card";
//data
import products from "./DB/data";
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  // Input filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filtredItems = products.filter(
    (product) =>
      product.title.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );
  //Radio filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //filtering input items
    if (query) {
      filteredProducts = filtredItems;
    }

    //selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, title, newPrice }) =>
          category === selected || title === selected || newPrice === selected
      );
    }
    return filteredProducts.map(
      ({ pId, img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={pId}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }
  const result = filteredData(products, selectedCategory, query);
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recomended />
      <Product result={result} />
    </>
  );
}

export default App;
