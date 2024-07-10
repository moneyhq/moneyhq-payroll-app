import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { useModal } from "../../contexts/ModalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function Modal({ modalId, children }) {
  const { modals, closeModal } = useModal();

  const modalRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal(modalId);
      console.log(modalRef);
    }
  };

  if (!modals.includes(modalId)) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content" ref={modalRef}>
        {children}
        <button className="modal-close" onClick={() => closeModal(modalId)}>
          <FontAwesomeIcon
            icon={faCircleXmark}
          />
        </button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
