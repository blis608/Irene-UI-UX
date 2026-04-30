import EventCard from "./EventCard";

export default function EventList({ events, onBook }) {
  return (
    <div>
      {events.map((event) => (
        <EventCard key={event.id} event={event} onBook={onBook} />
      ))}
    </div>
  );
}