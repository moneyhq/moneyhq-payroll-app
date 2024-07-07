import { useModal } from "../../contexts/ModalContext";
import "./AddEmployees.scss";

Modal.setAppElement("#root");

export default function AddEmployees() {
  const { isAddEmployeesOpen, openAddEmployees, closeAddEmployees } =
    useModal();

  return (
    <Modal
      isOpen={isAddEmployeesOpen}
      onRequestClose={closeAddEmployees}
      contentLabel="Add Employees"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <h2>Form</h2>
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
