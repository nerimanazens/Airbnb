


export default function PropertyDetails({ homename, description, rooms, maxGuests }: { homename: string, description: string, rooms: number, maxGuests: number }) {
    return (
        <div>
            <h1 className="font-bold text-2xl mt-2.5">Details:</h1>
            <div className="mt-4 text-xl">
                <span className="font-bold">Name:</span> <h1>{homename}</h1>
                <span className="font-bold">Description:</span> <p>{description}</p>
                <p><span className="font-bold">Rooms:</span> {rooms}</p>
                <p><span className="font-bold">Max Guests:</span> {maxGuests}</p>
            </div>
        </div>
    )
}