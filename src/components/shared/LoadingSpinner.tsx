export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
    </div>
  );
}