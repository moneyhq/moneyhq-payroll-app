import React, { createContext, useState, useContext, useCallback } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState([]);

  const openModal = useCallback((modalId) => {
    setModals((prevModals) => [...prevModals, modalId]);
  }, []);

  const closeModal = useCallback((modalId) => {
    setModals((prevModals) => prevModals.filter((id) => id !== modalId));
  }, []);

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
