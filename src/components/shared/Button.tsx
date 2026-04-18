import React from "react";

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({ onClick, children, variant = "primary" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={variant === "primary" ? "bg-green-500 text-white px-4 py-2 rounded" : "bg-gray-500 text-white px-4 py-2 rounded"}
    >
      {children}
    </button>
  );
}