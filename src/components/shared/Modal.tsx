"use client";
import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <button onClick={onClose} className="float-right font-bold">✕</button>
        {children}
      </div>
    </div>
  );
}