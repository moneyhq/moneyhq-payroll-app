import React from "react";
import ReactDOM from "react-dom";
import { useModal } from "../../contexts/ModalContext";

export default function Modal({ modalId, children }) {
  const { modals, closeModal } = useModal();

  if (!modals.includes(modalId)) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal">
      {children}
      <button onClick={() => closeModal(modalId)}>Close Modal</button>
    </div>,
    document.getElementById("portal-root")
  );
}
