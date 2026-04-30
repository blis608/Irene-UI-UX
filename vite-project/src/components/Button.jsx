export default function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white px-3 py-1">
      {text}
    </button>
  );
}