


export default function PriceCalculator({days, pricePerNight}: {days: number, pricePerNight: number}) {
  const total = days * pricePerNight;
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Price Calculator</h2>
      <p className="text-gray-600 mb-2">Calculate the total price for your stay.</p>
      <p className="text-xl font-bold">${total.toFixed(2)}</p>
    </div>
  );
}