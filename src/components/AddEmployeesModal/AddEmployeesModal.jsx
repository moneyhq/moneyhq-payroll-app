import "./AddEmployeesModal.scss";
import React, { useState } from "react";
import { useModal } from "../../contexts/ModalContext";
import { useForm, Controller } from "react-hook-form";
import Dropdown from "../Dropdown/Dropdown";
import axios from "axios";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

export default function AddEmployeesModal() {
  const { closeModal } = useModal();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    watch,
    trigger,
    setValue,
    formState: { errors },
  } = useForm();

  const selectedState = watch("employeeState");
  const selectedPayFrequency = watch("employeePayFrequency");
  const selectedPfa = watch("employeePensionAdmin");

  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = async () => {
    if (currentPage === 1) {
      const isValid = await trigger([
        "employeeFirstName",
        "employeeLastName",
        "inviteEmployee",
        "employeeEmail",
        "employeeAddress",
        "employeeState",
        "employeeDateOfBirth",
      ]);
      if (isValid) {
        setCurrentPage(2);
      }
    }
  };

  const handleBack = () => {
    setCurrentPage(1);
  };

  const handleViewAllEmployees = () => {
    navigate("/employees");
    closeModal("addEmployeesModal");
  };

  const handleFormSubmit = async (data) => {
    const backendData = {
      first_name: data.employeeFirstName,
      last_name: data.employeeLastName,
      date_of_birth: data.employeeDateOfBirth,
      company_email: data.employeeEmail,
      personal_email: "",
      phone_number: data.employeePhone || "",
      address: data.employeeAddress,
      join_date: data.employeeJoinDate,
      exit_date: "",
      status: "active",
      gross_monthly_salary: parseFloat(data.employeeSalary), //Check this later
      bank_name: "",
      bank_account_number: "",
      bank_sort_code: "",
      BVN: "",
      tax_id: data.employeeTaxId,
      pension_id: data.employeePensionId,
      current_state_id: 1, // Convert to ID later (data.employeeState)
      current_pfa: 1, // Map to backend later (data.employeePensionAdmin)
    };
    console.log(backendData);

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/employees`,
        backendData
      );
      setCurrentPage(3);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-employees-modal">
      {currentPage !== 3 && (
        <div className="add-employees-modal__title">Add Employee</div>
      )}

      {currentPage !== 3 && (
        <form
          className="add-employees-modal__form"
          onSubmit={handleSubmit((data) => {
            handleFormSubmit(data);
          })}
        >
          {currentPage === 1 && (
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
                      className={`add-employees-modal__input ${
                        errors.employeeFirstName
                          ? "add-employees-modal__input--error"
                          : ""
                      }`}
                      type="text"
                      {...register("employeeFirstName", {
                        required: "First name too short",
                        minLength: { value: 2, message: "Min length is 2" },
                        maxLength: 100,
                      })}
                      id="employeeFirstName"
                      placeholder={"First Name"}
                      onBlur={() => trigger("employeeFirstName")}
                    />
                    {errors.employeeFirstName && (
                      <div className="add-employees-modal__error">
                        {errors.employeeFirstName.message}
                      </div>
                    )}
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
                      className={`add-employees-modal__input ${
                        errors.employeeLastName
                          ? "add-employees-modal__input--error"
                          : ""
                      }`}
                      type="text"
                      {...register("employeeLastName", {
                        required: "Last name required",
                        minLength: 1,
                      })}
                      id="employeeLastName"
                      onBlur={() => trigger("employeeLastName")}
                    />
                    {errors.employeeLastName && (
                      <div className="add-employees-modal__error">
                        {errors.employeeLastName.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="add-employees-modal__item add-employees-modal__item-invite">
                  <input
                    className="add-employees-modal__input"
                    type="checkbox"
                    {...register("inviteEmployee")}
                    id="inviteEmployee"
                    onBlur={() => trigger("inviteEmployee")}
                  />
                  <label
                    className="add-employees-modal__label add-employees-modal__label-invite"
                    htmlFor="inviteEmployee"
                  >
                    Invite employee to enter their personal details and view
                    payslips
                  </label>
                </div>

                <div
                  className={`add-employees-modal__item add-employees-modal__item-email ${
                    watch("inviteEmployee")
                      ? "add-employees-modal__item-email--show"
                      : ""
                  }`}
                >
                  <label
                    className="add-employees-modal__label"
                    htmlFor="employeeEmail"
                  >
                    Email
                  </label>
                  <input
                    className={`add-employees-modal__input ${
                      errors.employeeEmail
                        ? "add-employees-modal__input--error"
                        : ""
                    }`}
                    type="email"
                    {...register("employeeEmail", {
                      required: watch("inviteEmployee")
                        ? "Email is required"
                        : false,
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    id="employeeEmail"
                    onBlur={() => trigger("employeeEmail")}
                  />
                  {errors.employeeEmail && (
                    <div className="add-employees-modal__error add-employees-modal__error--email">
                      {errors.employeeEmail.message}
                    </div>
                  )}
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
                        watch("inviteEmployee")
                          ? "add-employees-modal__optional"
                          : "add-employees-modal__required"
                      }
                    >
                      {watch("inviteEmployee") ? " (Optional)" : " *"}
                    </span>
                  </label>
                  <input
                    className={`add-employees-modal__input ${
                      errors.employeeAddress
                        ? "add-employees-modal__input--error"
                        : ""
                    }`}
                    type="text"
                    {...register("employeeAddress", {
                      required: watch("inviteEmployee")
                        ? false
                        : "Address is required",
                    })}
                    id="employeeAddress"
                    onBlur={() => trigger("employeeAddress")}
                  />
                  {errors.employeeAddress && (
                    <div className="add-employees-modal__error">
                      {errors.employeeAddress.message}
                    </div>
                  )}
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
                          watch("inviteEmployee")
                            ? "add-employees-modal__optional"
                            : "add-employees-modal__required"
                        }
                      >
                        {watch("inviteEmployee") ? " (Optional)" : " *"}
                      </span>
                    </div>
                    <Controller
                      name="employeeState"
                      control={control}
                      defaultValue=""
                      rules={{
                        required: watch("inviteEmployee")
                          ? false
                          : "State required",
                      }}
                      render={({ field }) => (
                        <Dropdown
                          options={[
                            { value: "Lagos", label: "Lagos" },
                            { value: "Abuja", label: "Abuja" },
                          ]}
                          defaultLabel={selectedState || "Select State"}
                          onOptionSelected={(selectedOption) => {
                            field.onChange(selectedOption.value);
                            setValue("employeeState", selectedOption.value);
                          }}
                          value={field.value}
                        />
                      )}
                    />
                    {errors.employeeState && (
                      <div className="add-employees-modal__error add-employees-modal__error--state">
                        {errors.employeeState.message}
                      </div>
                    )}
                  </div>
                  {/* 
                TODO
                <select {...register("gender")}>
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select> */}
                  <div className="add-employees-modal__item add-employees-modal__item--dob">
                    <label
                      className="add-employees-modal__label"
                      htmlFor="employeeDateOfBirth"
                    >
                      Date of Birth
                      <span
                        className={
                          watch("inviteEmployee")
                            ? "add-employees-modal__optional"
                            : "add-employees-modal__required"
                        }
                      >
                        {watch("inviteEmployee") ? " (Optional)" : " *"}
                      </span>
                    </label>
                    <input
                      className="add-employees-modal__input"
                      type="date"
                      max={new Date().toISOString().split("T")[0]}
                      {...register("employeeDateOfBirth", {
                        required: watch("inviteEmployee")
                          ? false
                          : "DoB required",
                        validate: (value) => {
                          if (!watch("inviteEmployee") && value) {
                            const dob = new Date(value);
                            const today = new Date();
                            return dob < today || "DoB must be in the past";
                          }
                          return true;
                        },
                      })}
                      id="employeeDateOfBirth"
                      onBlur={() => trigger("employeeDateOfBirth")}
                    />
                    {errors.employeeDateOfBirth && (
                      <div className="add-employees-modal__error add-employees-modal__error--dob">
                        {errors.employeeDateOfBirth.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="add-employees-modal__form-button">
                <div
                  className="button-primary add-employees-modal__form-next"
                  onClick={handleNext}
                >
                  Next
                </div>
              </div>
            </div>
          )}
          {currentPage === 2 && (
            <div className="add-employees-modal__form-box">
              <div className="add-employees-modal__form-container">
                <div className="add-employees-modal__item add-employees-modal__item--joindate">
                  <label
                    className="add-employees-modal__label"
                    htmlFor="employeeJoinDate"
                  >
                    Join Date{" "}
                    <span className="add-employees-modal__required">*</span>
                  </label>
                  <input
                    className={`add-employees-modal__input ${
                      errors.employeeJoinDate
                        ? "add-employees-modal__input--error"
                        : ""
                    }`}
                    type="date"
                    {...register("employeeJoinDate", {
                      required: "Join date required",
                    })}
                    id="employeeJoinDate"
                    onBlur={() => trigger("employeeJoinDate")}
                  />
                  {errors.employeeJoinDate && (
                    <div className="add-employees-modal__error add-employees-modal__error--joindate">
                      {errors.employeeJoinDate.message}
                    </div>
                  )}
                </div>
                <div className="add-employees-modal__form-wrapper add-employee-modal__form-wrapper--salary">
                  <div className="add-employees-modal__item add-employees-modal__item--salary">
                    <label
                      className="add-employees-modal__label"
                      htmlFor="employeeSalary"
                    >
                      Salary{" "}
                      <span className="add-employees-modal__required">*</span>
                    </label>
                    <input
                      className={`add-employees-modal__input ${
                        errors.employeeSalary
                          ? "add-employees-modal__input--error"
                          : ""
                      }`}
                      type="number"
                      step="0.01"
                      {...register("employeeSalary", {
                        required: "Salary is required",
                        min: {
                          value: 50,
                          message: "Salary cannot be negative",
                          validate: (value) =>
                            value > 0 || "Salary must be greater than 0",
                        },
                      })}
                      id="employeeSalary"
                      placeholder="1000"
                      onBlur={() => trigger("employeeSalary")}
                    />
                    {errors.employeeSalary && (
                      <div className="add-employees-modal__error">
                        {errors.employeeSalary.message}
                      </div>
                    )}
                  </div>

                  <div className="add-employees-modal__item add-employees-modal__item--frequency">
                    <div className="add-employees-modal__label">
                      Pay Frequency
                      <span className="add-employees-modal__required">*</span>
                    </div>
                    <Controller
                      name="employeePayFrequency"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Dropdown
                          options={[{ value: "monthly", label: "Monthly" }]}
                          defaultLabel={
                            selectedPayFrequency || "Select Frequency"
                          }
                          onOptionSelected={(selectedOption) => {
                            field.onChange(selectedOption.value);
                            setValue(
                              "employeePayFrequency",
                              selectedOption.value
                            );
                          }}
                          value={field.value}
                        />
                      )}
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
                        watch("inviteEmployee")
                          ? "add-employees-modal__optional"
                          : "add-employees-modal__required"
                      }
                    >
                      {watch("inviteEmployee") ? " (Optional)" : " *"}
                    </span>
                  </label>
                  <input
                    className="add-employees-modal__input"
                    type="text"
                    {...register("employeeTaxId")}
                    id="employeeTaxId"
                    placeholder="N-123456"
                    onBlur={() => trigger("employeeTaxId")}
                  />
                </div>

                <div className="add-employees-modal__item add-employees-modal__item--pfa">
                  <div
                    className="add-employees-modal__label"
                    htmlFor="employeePensionAdmin"
                  >
                    Pension Fund Administrator
                    <span
                      className={
                        watch("inviteEmployee")
                          ? "add-employees-modal__optional"
                          : "add-employees-modal__required"
                      }
                    >
                      {watch("inviteEmployee") ? " (Optional)" : " *"}
                    </span>
                  </div>
                  <Controller
                    name="employeePensionAdmin"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
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
                        defaultLabel={selectedPfa || "Select PFA"}
                        onOptionSelected={(selectedOption) => {
                          field.onChange(selectedOption.value);
                          setValue(
                            "employeePensionAdmin",
                            selectedOption.value
                          );
                        }}
                        value={field.value}
                      />
                    )}
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
                        watch("inviteEmployee")
                          ? "add-employees-modal__optional"
                          : "add-employees-modal__required"
                      }
                    >
                      {watch("inviteEmployee") ? " (Optional)" : " *"}
                    </span>
                  </label>
                  <input
                    className="add-employees-modal__input"
                    type="text"
                    {...register("employeePensionId")}
                    id="employeePensionId"
                    placeholder="PEN111234567890"
                    onBlur={() => trigger("employeePensionId")}
                  />
                </div>
              </div>

              <div className="add-employees-modal__form-button">
                <div
                  className="button-secondary add-employees-modal__form-back"
                  onClick={handleBack}
                >
                  Back
                </div>
                <button
                  type="submit"
                  className="button-primary add-employees-modal__form-next"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      )}
      {currentPage === 3 && (
        <div className="add-employees-modal__success">
          <div className="add-employees-modal__success-wrapper">
            <div className="add-employees-modal__success-top">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="add-employees-modal__success-icon"
              />
              <div className="add-employees-modal__success-title">
                Employee Added
              </div>
            </div>

            <div className="add-employees-modal__success-bottom">
              <button
                onClick={handleBack}
                className="button-secondary add-employees-modal__success-button"
              >
                Add Another Employee
              </button>
              <button
                className="button-primary add-employees-modal__success-button"
                onClick={handleViewAllEmployees}
              >
                View All Employees
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
