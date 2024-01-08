import Input from "../../Components/Input";
import "./Category.css";

export default function Category() {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container sidebar-items">
          <input type="radio" value="" name="test1" />
          <span className="checkmark"></span>
          All
        </label>

        <Input
          //handleChange={handleChange}
          value="quiling"
          name="test1"
          title="Quilling"
        />
        <Input
          //handleChange={handleChange}
          value="stone"
          name="test1"
          title="Stone Art"
        />
        <Input
          //handleChange={handleChange}
          value="painting"
          name="test1"
          title="Painting"
        />
        <Input
          //handleChange={handleChange}
          value="bottle"
          name="test1"
          title="Bottle Art"
        />
        <Input
          //handleChange={handleChange}
          value="mandala"
          name="test1"
          title="Mandala"
        />
      </div>
    </div>
  );
}
/*
<label className="sidebar-label-container sidebar-items">
          <input type="radio" name="test" />
          <span className="checkmark"></span>All
        </label>

        <label className="sidebar-label-container sidebar-items">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Quiling
        </label>

        <label className="sidebar-label-container sidebar-items">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Stone art
        </label>
        <label className="sidebar-label-container sidebar-items">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Bottle art
        </label>
        <label className="sidebar-label-container sidebar-items">
          <input type="radio" name="test" />
          <span className="checkmark"></span>Painting
        </label>
      </div>
      */
