import { useState } from 'react';

interface ModalButtonProps {
  title: string;
  modalContent: React.ReactNode;
}

export function ModalButton({ title, modalContent }: ModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full px-6 py-2 rounded-xl text-black bg-zinc-900 hover:bg-yellow-500 transition duration-200 ease-in-out shadow-lg shadow-yellow-500/50 font-bold border-none"
      >
        <span>{title}</span>
      </button>

      {/* Modal */}
      <div className="text-white w-full">
        {isOpen ? (
          <div className="bg-gray-300 text-white rounded-b-xl shadow-lg transform transition-all ease-in-out">
            {modalContent}
          </div>
        ) : null}
      </div>
    </div>
  );
}
