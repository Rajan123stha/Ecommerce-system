export default function Input({ value, title, name }) {
  return (
    <label className="sidebar-label-container sidebar-items">
      <input type="radio" value={value} name={name} />
      <span className="checkmark"></span>
      {title}
    </label>
  );
}
