import "./Sidebar.css";
import Price from "./Price/Price";
import Category from "./Category/Category";
export default function Sidebar({ handleChange }) {
  console.log(handleChange);
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
      </section>
    </>
  );
}
