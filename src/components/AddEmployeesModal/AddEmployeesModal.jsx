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
  const [currentPage, setCurrentPage] = useState(1);
  const [employeeFormData, setEmployeeFormData] = useState({
    employeeFirstName: "",
    employeeLastName: "",
    inviteEmployee: "",
    employeeEmail: "",
    employeeDateOfBirth: "",
    employeeAddress: "",
    employeeState: "",
    employeeJoinDate: "",
    employeeSalary: "",
    employeePayFrequency: "",
    employeePensionAdmin: "",
    employeeTaxId: "",
    employeePensionId: "",
  });

  const {
    employeeFirstName,
    employeeLastName,
    inviteEmployee,
    employeeEmail,
    employeeDateOfBirth,
    employeeAddress,
    employeeState,
    employeeJoinDate,
    employeeSalary,
    employeePayFrequency,
    employeePensionAdmin,
    employeeTaxId,
    employeePensionId,
  } = employeeFormData;

  const handleCheckboxChange = () => {
    setIsInviteChecked(!isInviteChecked);
  };

  const handleInputChange = (event) => {
    const { name, value, checked } = event.target;
    console.log(event.target);
    setEmployeeFormData({ ...employeeFormData, [name]: value });
    console.log(name, value, checked);
  };

  const handleNext = () => {
    if (currentPage === 1) {
      setCurrentPage(2);
    }
  };

  const EmployeeBasicInfo = () => {
    return (
      <div className="add-employees-modal__form-box">
        <div className="add-employees-modal__form-container add-employees-modal__form-container--top">
          <div className="add-employees-modal__form-wrapper add-employee-modal__form-wrapper--name">
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
                onChange={handleInputChange}
                value={employeeFirstName}
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
                value={employeeLastName}
                onChange={handleInputChange}
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
          <div className="add-employees-modal__item add-employees-modal__item--address">
            <label
              className="add-employees-modal__label"
              htmlFor="employeeAddress"
            >
              Address
              <span
                className={
                  isInviteChecked
                    ? "add-employees-modal__optional"
                    : "add-employees-modal__required"
                }
              >
                {isInviteChecked ? " (Optional)" : " *"}
              </span>
            </label>
            <input
              className="add-employees-modal__input
            "
              type="text"
              name="employeeAddress"
              id="employeeAddress"
            />
          </div>
          <div className="add-employees-modal__form-wrapper add-employee-modal__form-wrapper--address">
            <div className="add-employees-modal__item add-employees-modal__item--state">
              <div
                className="add-employees-modal__label"
                htmlFor="employeeState"
              >
                State
                <span
                  className={
                    isInviteChecked
                      ? "add-employees-modal__optional"
                      : "add-employees-modal__required"
                  }
                >
                  {isInviteChecked ? " (Optional)" : " *"}
                </span>
              </div>
              <Dropdown
                options={[
                  { value: "Lagos", label: "Lagos" },
                  { value: "Abuja", label: "Abuja" },
                ]}
                defaultLabel={"Lagos"}
              />
            </div>
            <div className="add-employees-modal__item add-employees-modal__item--dob">
              <label
                className="add-employees-modal__label"
                htmlFor="employeeDateOfBirth"
              >
                Date of Birth
                <span
                  className={
                    isInviteChecked
                      ? "add-employees-modal__optional"
                      : "add-employees-modal__required"
                  }
                >
                  {isInviteChecked ? " (Optional)" : " *"}
                </span>
              </label>
              <input
                className="add-employees-modal__input
          "
                type="date"
                name="employeeDateOfBirth"
                id="employeeDateOfBirth"
              />
            </div>
          </div>
        </div>

        <div className="add-employees-modal__form-button">
          {/* <div className="button-secondary add-employees-modal__form-back">
            Back
          </div> */}
          <div
            className="button-primary add-employees-modal__form-next"
            onClick={handleNext}
          >
            Next
          </div>
        </div>
      </div>
    );
  };

  const EmployeePayDetails = () => {
    return (
      <div className="add-employees-modal__form-box">
        <div className="add-employees-modal__form-container">
          <div className="add-employees-modal__item add-employees-modal__item--joindate">
            <label
              className="add-employees-modal__label"
              htmlFor="employeeJoinDate"
            >
              Join Date <span className="add-employees-modal__required">*</span>
            </label>
            <input
              className="add-employees-modal__input"
              type="date"
              name="employeeJoinDate"
              id="employeeJoinDate"
            />
          </div>
          <div className="add-employees-modal__form-wrapper add-employee-modal__form-wrapper--salary">
            <div className="add-employees-modal__item add-employees-modal__item--salary">
              <label
                className="add-employees-modal__label"
                htmlFor="employeeSalary"
              >
                Salary <span className="add-employees-modal__required">*</span>
              </label>
              <input
                className="add-employees-modal__input
              "
                type="number"
                name="employeeSalary"
                id="employeeSalary"
                min="50"
                placeholder="1000"
              />
            </div>
            <div className="add-employees-modal__item add-employees-modal__item--frequency">
              <div className="add-employees-modal__label">
                Pay Frequency
                <span className="add-employees-modal__required">*</span>
              </div>
              <Dropdown
                options={[{ value: "monthly", label: "Monthly" }]}
                defaultLabel={"Monthly"}
              />
            </div>
          </div>
          <div className="add-employees-modal__item add-employees-modal__item--taxid">
            <label
              className="add-employees-modal__label"
              htmlFor="employeeTaxId"
            >
              Tax ID
              <span
                className={
                  isInviteChecked
                    ? "add-employees-modal__optional"
                    : "add-employees-modal__required"
                }
              >
                {isInviteChecked ? " (Optional)" : " *"}
              </span>
            </label>
            <input
              className="add-employees-modal__input"
              type="text"
              name="employeeTaxId"
              id="employeeTaxId"
              placeholder="N-123456"
            />
          </div>
          <div className="add-employees-modal__item add-employees-modal__item--pfa">
            <div className="add-employees-modal__label" htmlFor="employeePfa">
              Pension Fund Administrator
              <span
                className={
                  isInviteChecked
                    ? "add-employees-modal__optional"
                    : "add-employees-modal__required"
                }
              >
                {isInviteChecked ? " (Optional)" : " *"}
              </span>
            </div>
            <Dropdown
              options={[
                {
                  value: "Stanbic IBTC Pension",
                  label: "Stanbic IBTC Pension",
                },
                {
                  value: "ARM Pensions",
                  label: "ARM Pensions",
                },
                {
                  value: "Leadway Pensure",
                  label: "Leadway Pensure",
                },
              ]}
              defaultLabel={"ARM Pensions"}
            />
          </div>
          <div className="add-employees-modal__item add-employees-modal__item--pensionid">
            <label
              className="add-employees-modal__label"
              htmlFor="employeePensionId"
            >
              Pension ID
              <span
                className={
                  isInviteChecked
                    ? "add-employees-modal__optional"
                    : "add-employees-modal__required"
                }
              >
                {isInviteChecked ? " (Optional)" : " *"}
              </span>
            </label>
            <input
              className="add-employees-modal__input"
              type="text"
              name="employeePensionId"
              id="employeePensionId"
              placeholder="PEN111234567890"
            />
          </div>
        </div>

        <div className="add-employees-modal__form-button">
          <div className="button-secondary add-employees-modal__form-back">
            Back
          </div>
          <div className="button-primary add-employees-modal__form-next">
            Submit
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="add-employees-modal">
      <div className="add-employees-modal__title">Add Employee</div>
      <form className="add-employees-modal__form">
        {currentPage === 1 && <EmployeeBasicInfo />}
        {currentPage === 2 && <EmployeePayDetails />}
      </form>
      {/* <button onClick={() => closeModal("addEmployeesModal")}>Close</button> */}
    </div>
  );
}
