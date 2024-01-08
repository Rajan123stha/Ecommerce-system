import "./Sidebar.css";
import Price from "./Price/Price";
import Category from "./Category/Category";
export default function Sidebar() {
  //console.log(handleChange);
  return (
    <>
      <section className="sidebar">
        <Category />
        <Price />
      </section>
    </>
  );
}
