import Navigation from "./Navigation/Nav";
import Recomended from "./Rocomended/Recomended";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Login from "./Page/Login/Login";
import Signup from "./Page/Signup/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./Page/Cart/Cart";
import ProductDetails from "./Page/ProductDetails/ProductDetails";
import WishListPage from "./Page/WishList/WishListPage";
import Checkout from "./Page/Checkout/Checkout";

function App() {
  return (
    <>
      <Router basename="/Ecommerce-system">
        <div className="app-container">
          <Navigation />

          <Routes>
            <Route exact path="/" element={<Recomended />} />
            <Route exact path="/Ecommeerce-system" element={<Recomended />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/wishlist" element={<WishListPage />} />

            <Route exact path="/product-details" element={<ProductDetails />} />

            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
