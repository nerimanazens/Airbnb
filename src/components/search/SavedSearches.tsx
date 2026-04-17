
const searches = [
  { id: 1, city: "New York", minPrice: 50, maxPrice: 200 },
  { id: 2, city: "Los Angeles", minPrice: 100, maxPrice: 500 },
];

export default function SavedSearches() {
    return (
        <div>
            <h2>Saved Searches</h2>
            <ul>
                {searches.map(search => (
                    <li key={search.id}>
                        {search.city}: ${search.minPrice} - ${search.maxPrice}
                    </li>
                ))}
            </ul>
        </div>
    );
}