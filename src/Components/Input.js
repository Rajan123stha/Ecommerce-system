export default function Input({ handleChange, value, title, name }) {
  return (
    <label className="sidebar-label-container sidebar-items">
      <input type="radio" onChange={handleChange} value={value} name={name} />
      <span className="checkmark"></span>
      {title}
    </label>
  );
}
