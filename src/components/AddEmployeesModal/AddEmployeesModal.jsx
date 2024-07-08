import "./AddEmployeesModal.scss";
import React, { useState } from "react";
import { useModal } from "../../contexts/ModalContext";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

export default function AddEmployeesModal() {
  const { closeModal } = useModal();
  const [isInviteChecked, setIsInviteChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsInviteChecked(!isInviteChecked);
  };

  const EmployeeBasicInfo = () => {
    return (
      <div className="add-employees-modal__form-box">
        <div className="add-employees-modal__form-container add-employees-modal__form-container--top">
          <div className="add-employees-modal__form-wrapper">
            <div className="add-employees-modal__item add-employees-modal__item--firstname">
              <label
                className="add-employees-modal__label"
                htmlFor="employeeFirstName"
              >
                Legal First Name{" "}
                <span className="add-employees-modal__required">*</span>
              </label>
              <input
                className="add-employees-modal__input"
                type="text"
                name="employeeFirstName"
                id="employeeFirstName"
                required
              />
            </div>
            <div className="add-employees-modal__item add-employees-modal__item--lastname">
              <label
                className="add-employees-modal__label"
                htmlFor="employeeLastName"
              >
                Legal Last Name{" "}
                <span className="add-employees-modal__required">*</span>
              </label>
              <input
                className="add-employees-modal__input
              "
                type="text"
                name="employeeLastName"
                id="employeeLastName"
              />
            </div>
          </div>

          <div className="add-employees-modal__item add-employees-modal__item-invite">
            <input
              className="add-employees-modal__input"
              type="checkbox"
              name="inviteEmployee"
              id="inviteEmployee"
              checked={isInviteChecked}
              onChange={handleCheckboxChange}
            />
            <label
              className="add-employees-modal__label add-employees-modal__label-invite"
              htmlFor="inviteEmployee"
            >
              Invite employee to enter their personal details and view payslips
            </label>
          </div>
          <div
            className={`add-employees-modal__item add-employees-modal__item-email ${
              isInviteChecked ? "add-employees-modal__item-email--show" : ""
            }`}
          >
            <label
              className="add-employees-modal__label"
              htmlFor="employeeEmail"
            >
              Email
            </label>
            <input
              className="add-employees-modal__input
          "
              type="email"
              name="employeeEmail"
              id="employeeEmail"
            />
          </div>
        </div>

        <div className="add-employees-modal__form-container add-employees-modal__form-container--bottom">
          <div className="add-employees-modal__item add-employees-modal__item--dob">
            <label
              className="add-employees-modal__label"
              htmlFor="employeeDateOfBirth"
            >
              Date of Birth
            </label>
            <input
              className="add-employees-modal__input
          "
              type="date"
              name="employeeDateOfBirth"
              id="employeeDateOfBirth"
            />
          </div>
          <div className="add-employees-modal__item add-employees-modal__item--address">
            <label
              className="add-employees-modal__label"
              htmlFor="employeeAddress"
            >
              Address
            </label>
            <input
              className="add-employees-modal__input
          "
              type="text"
              name="employeeAddress"
              id="employeeAddress"
            />
          </div>
          <div className="add-employees-modal__item add-employees-modal__item--state">
            <label
              className="add-employees-modal__label"
              htmlFor="employeeState"
            >
              State
            </label>
            <Dropdown
              options={[
                { value: "Lagos", label: "Lagos" },
                { value: "Abuja", label: "Abuja" },
              ]}
              defaultLabel={"State"}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="add-employees-modal">
      <div className="add-employees-modal__title">Add Employee</div>
      <form>{<EmployeeBasicInfo />}</form>
      <button onClick={() => closeModal("addEmployeesModal")}>Close</button>
    </div>
  );
}
