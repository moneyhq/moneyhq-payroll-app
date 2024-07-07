import React from "react";
import Modal from "react-modal";
import { useModal } from "../../contexts/ModalContext";
import "./AddEmployees.scss";

export default function AddEmployees() {
  const { openAddEmployees, closeAddEmployees, isAddEmployeesOpen } =
    useModal();
  console.log("AddEmployees rendered:", isAddEmployeesOpen);

  return (
    <Modal
      isOpen={isAddEmployeesOpen}
      onRequestClose={closeAddEmployees}
      contentLabel="Add Employees"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <h2>Add Employees</h2>
      <form>
        <label>
          Name: <input type="text" name="name" />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={closeAddEmployees}>
          Close
        </button>
      </form>
    </Modal>
  );
}
