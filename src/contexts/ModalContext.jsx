import React, { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isAddEmployeesOpen, setIsAddEmployeesOpen] = useState(false);

  const openAddEmployees = () => {
    setIsAddEmployeesOpen(true);
  };

  const closeAddEmployees = () => {
    setIsAddEmployeesOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ isAddEmployeesOpen, openAddEmployees, closeAddEmployees }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
