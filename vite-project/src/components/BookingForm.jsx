import { useState } from "react";
import Button from "./Button";

export default function BookingForm({ selectedEvent, onAdd }) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!name || !selectedEvent) return;

    onAdd({
      event: selectedEvent.title,
      name: name,
    });

    setName("");
  };

  if (!selectedEvent) return null;

  return (
    <div className="mt-4">
      <h2 className="font-bold mb-2">
        Book: {selectedEvent.title}
      </h2>

      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
      />

      <Button text="Confirm" onClick={handleSubmit} />
    </div>
  );
}