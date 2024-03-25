import React from "react";

function Modal({ children, height }) {
  return (
    <div className="w-full h-full postition absolute top-0 left-0 right-0 bottom-0 bg-[#0a0a0acc] transition-all">
      {children}
    </div>
  );
}

export default Modal;
