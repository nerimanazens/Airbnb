
export default function BookingHistory() {
    const bookings = [
        { id: 1, city: "New York", checkIn: "2024-01-15", checkOut: "2024-01-18", price: 450 },
        { id: 2, city: "Los Angeles", checkIn: "2024-02-20", checkOut: "2024-02-25", price: 1250 },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Booking History</h1>
            {bookings.map((booking) => (
                <div key={booking.id} className="border rounded-lg p-4 mb-4">
                    <p className="font-bold">{booking.city}</p>
                    <p>Check-in: {booking.checkIn}</p>
                    <p>Check-out: {booking.checkOut}</p>
                    <p>Total: ${booking.price}</p>
                </div>
            ))}
        </div>
    );
}