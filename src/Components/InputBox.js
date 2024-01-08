export default function Input({ label, type, placeholder }) {
  return (
    <div>
      <div className="login-label">{label}</div>
      <input type={type} className="input-section" placeholder={placeholder} />
    </div>
  );
}
