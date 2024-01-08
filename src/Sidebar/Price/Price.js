import Input from "../../Components/Input";
import "./Price.css";

export default function Price() {
  return (
    <div>
      <h2 className="sidebar-title price-title">Price</h2>
      <div>
        <label className="sidebar-label-container sidebar-items">
          <input type="radio" value="" name="test2" />
          <span className="checkmark"></span>
          All
        </label>

        <Input
          //handleChange={handleChange}
          value={500}
          name="test2"
          title="0-500"
        />
        <Input
          //handleChange={handleChange}
          value={1000}
          name="test2"
          title="500-1000"
        />
        <Input
          //handleChange={handleChange}
          value={1500}
          name="test2"
          title="1000-1500"
        />
        <Input
          //handleChange={handleChange}
          value={2000}
          name="test2"
          title="1500-2000"
        />
        <Input
          //handleChange={handleChange}
          value={2500}
          name="test2"
          title="Over 2000"
        />
      </div>
    </div>
  );
}

/*
import Input from "../../Components/Input";
import "./Price.css";

export default function Price({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title price-title">Price</h2>
      <div>
        <label className="sidebar-label-container sidebar-items">
          <input type="radio" onChange={handleChange} value="" name="test2" />
          <span className="checkmark"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value={500}
          name="test2"
          title="0-500"
        />
        <Input
          handleChange={handleChange}
          value={1000}
          name="test2"
          title="500-1000"
        />
        <Input
          handleChange={handleChange}
          value={1500}
          name="test2"
          title="1000-1500"
        />
        <Input
          handleChange={handleChange}
          value={2000}
          name="test2"
          title="1500-2000"
        />
        <Input
          handleChange={handleChange}
          value={2500}
          name="test2"
          title="Over 2000"
        />
      </div>
    </div>
  );
}

*/
