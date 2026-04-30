import { useState } from "react";
import Navbar from "./components/Navbar";
import EventList from "./components/EventList";
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingList";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [events] = useState([
    { id: 1, title: "Concert", date: "2026-05-01" },
    { id: 2, title: "Football Match", date: "2026-05-05" },
  ]);

  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [bookings, setBookings] = useState([]);

  const filteredEvents = events.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleBook = (event) => {
    setSelectedEvent(event);
  };

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
    setSelectedEvent(null);
  };

  return (
    <div className="p-4">
      <Navbar />

      <SearchBar value={search} onChange={setSearch} />

      <EventList events={filteredEvents} onBook={handleBook} />

      <BookingForm selectedEvent={selectedEvent} onAdd={addBooking} />

      <BookingList bookings={bookings} />
    </div>
  );
}