export default function BookingList({ bookings }) {
  return (
    <div className="mt-4">
      <h2 className="font-bold">Bookings</h2>
      {bookings.map((b, i) => (
        <p key={i}>
          {b.name} booked {b.event}
        </p>
      ))}
    </div>
  );
}