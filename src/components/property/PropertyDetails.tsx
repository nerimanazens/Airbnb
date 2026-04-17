


export default function PropertyDetails({ homename, description, rooms, maxGuests }: { homename: string, description: string, rooms: number, maxGuests: number }) {
    return (
        <div>
            <h1>{homename}</h1>
            <p>{description}</p>
            <p>Rooms: {rooms}</p>
            <p>Max Guests: {maxGuests}</p>
        </div>
    )
}