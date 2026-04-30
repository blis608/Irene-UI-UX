import Button from "./Button";

export default function EventCard({ event, onBook }) {
  return (
    <div className="border p-4 rounded mb-2">
      <h2 className="font-bold">{event.title}</h2>
      <p>{event.date}</p>
      <Button text="Book" onClick={() => onBook(event)} />
    </div>
  );
}