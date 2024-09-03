export default function InputEl({ label, id, placeholder, value, onChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} placeholder={placeholder} value={value} onChange={onChange} maxLength={50} />
    </div>
  );
};