import React from "react";

const Alert = ({ message, onClose }) => {
  if (!message) return null; // Don't render anything if there is no message

  return (
    <div
      className="bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md mb-4"
      role="alert"
    >
      <div className="flex">
        <div>
          <p className="font-bold">Warning</p>
          <p className="text-sm">{message}</p>
        </div>
        <button onClick={onClose} className="ml-auto text-red-500 font-bold">
          X
        </button>
      </div>
    </div>
  );
};

export default Alert;
