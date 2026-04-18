import { useState } from "react";

type ToastProps = {
  message: string;
}

export default function Toast({ message }: ToastProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded shadow-lg">
      <p>{message}</p>
      <button onClick={() => setVisible(false)} className="ml-4 font-bold">✕</button>
    </div>
  );
}