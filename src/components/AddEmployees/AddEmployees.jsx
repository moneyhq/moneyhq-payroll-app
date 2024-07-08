import React from "react";
import { useModal } from "../../contexts/ModalContext";

export default function AddEmployees() {
  const { closeModal } = useModal();

  return (
    <div className="modal-content">
      <h1>Add Employee</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <button type="submit">Add Employee</button>
      </form>
      <button onClick={() => closeModal("addEmployeesModal")}>Close</button>
    </div>
  );
}
