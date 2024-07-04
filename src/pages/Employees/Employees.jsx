import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Employees.scss";
import { BeatLoader } from "react-spinners";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faPencil,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../../components/Dropdown/Dropdown";
import { formatDate, formatNumber } from "../../utils/formatFunctions";
import { generateLabeledMultiples } from "../../utils/generateMultiples";

export default function Employees() {
  const [employees, setEmployees] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [limit, setLimit] = useState(10);

  const navigate = useNavigate();
  // const limit = 25;
  // const page = selectedOption.label / limit;

  const fetchEmployees = async (page, limit) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/employees`,
        {
          params: { page, limit },
        }
      );
      setEmployees(data.employees);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching data", error.message);
    }
  };

  useEffect(() => {
    fetchEmployees(currentPage, limit);
  }, [currentPage, limit]);

  if (!employees) {
    return <BeatLoader color="#2997ff" />;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  console.log(employees);

  const departments = [
    { value: "", label: "Departments" },
    { value: "hr", label: "HR" },
    { value: "engineering", label: "Engineering" },
  ];

  const statuses = [
    { value: "", label: "Status" },
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const handleRowClick = (id) => {
    navigate(`/employees/${id}`);
  };

  const paginationDropdown = [
    { value: 10, label: 10 },
    { value: 25, label: 25 },
    { value: 50, label: 50 },
  ];

  const handleOptionSelected = (option) => {
    console.log(option);
    setSelectedOption(option);
    console.log("Selected option:", option);
  };
  const handleLimit = (option) => {
    setLimit(option.value);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="employees">
      <div className="employees__header">
        <div className="employees__title">
          <h1 className="employees__title--text">Employees</h1>
        </div>
        <div className="employees__actions">
          <Link
            to="/"
            className="button-secondary employees__btn employees__btn--secondary"
          >
            Upload from CSV
          </Link>
          <Link
            to="/"
            className="button-primary employees__btn employees__btn--primary"
          >
            Add Employee
          </Link>
        </div>
      </div>

      <div className="employees__body">
        <div className="employees__subheader">
          <div className="employees__search">
            <FontAwesomeIcon
              icon={faSearch}
              className="employees__search--icon-search"
            />
            <input
              className="employees__search--input"
              type="search"
              placeholder="Search..."
            />
          </div>
          <div className="employees__filter">
            <Dropdown options={departments} defaultLabel="Department" />
            <Dropdown options={statuses} defaultLabel="Status" />
          </div>
        </div>

        <div className="employees__list employees__list--mobile">
          {employees.map((employee) => (
            <article key={employee.id} className="employee-card">
              <div className="employee-card__info">
                <Link className="employee-card__name">
                  {`${employee.first_name} ${employee.last_name}`}
                </Link>
                <p className="employee-card__email">{employee.company_email}</p>
                <p className="employee-card__status">{employee.status}</p>
              </div>
              <div className="employee-card__action">
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="employee-card__action--icon"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="employees__list employees__list--desktop">
          <table className="em-table">
            <thead className="em-table__header">
              <tr className="em-table__header-row">
                <th className="em-table__header-cell em-table__header-cell--name">
                  Name
                </th>
                <th className="em-table__header-cell em-table__header-cell--contact">
                  Contact
                </th>
                <th className="em-table__header-cell em-table__header-cell--joindate">
                  Join Date
                </th>
                <th className="em-table__header-cell em-table__header-cell--salary">
                  Salary (pcm)
                </th>
                <th className="em-table__header-cell em-table__header-cell--status">
                  Status
                </th>
                <th className="em-table__header-cell em-table__header-cell--actions">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="em-table__body">
              {employees.map((employee) => (
                <tr
                  className="em-table__body-row"
                  key={employee.id}
                  onClick={() => handleRowClick(employee.id)}
                >
                  <td className="em-table__body-cell em-table__body-cell--name">
                    {employee.first_name} {employee.last_name}
                  </td>
                  <td className="em-table__body-cell em-table__body-cell--contact">
                    <span className="em-table__body-span em-table__body-span--email">
                      {employee.company_email}
                    </span>
                    <span className="em-table__body-span em-table__body-span--phone">
                      {employee.phone_number}
                    </span>
                  </td>
                  <td className="em-table__body-cell em-table__body-cell--joindate">
                    {formatDate(employee.join_date)}
                  </td>
                  <td className="em-table__body-cell em-table__body-cell--salary">
                    {formatNumber(employee.gross_monthly_salary, "₦")}
                  </td>
                  <td className="em-table__body-cell em-table__body-cell--status">
                    {employee.status}
                  </td>
                  <td className="em-table__body-cell em-table__body-cell--actions">
                    <div className="em-table__body-cell--wrapper">
                      <Link to="/">
                        {/* To-do - Link to edit modal*/}
                        <FontAwesomeIcon
                          icon={faPencil}
                          className="em-table__body-icon em-table__body-icon--edit"
                        />
                      </Link>
                      <Link to="/">
                        {/* To-do - Link to archive modal or archive fn*/}
                        <FontAwesomeIcon
                          icon={faArchive}
                          className="em-table__body-icon em-table__body-icon--archive"
                        />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="employees__pagination">
          <div className="employees__pagination--dropdown">
            <span>Show</span>
            <div>
              <Dropdown
                options={paginationDropdown}
                defaultLabel={paginationDropdown[0].label}
                onOptionSelected={handleLimit}
              />
            </div>
            <span>per page</span>
          </div>

          <div className="employees__pagination--pagecount">
            <p className="employees__pagination--text">
              {`Page ${currentPage} of ${totalPages}`}
            </p>
            <div className="employees__pagination--control">
              <div
                className={`employees__pagination--button employees__pagination--prev ${
                  currentPage === 1 ? "is-disabled" : ""
                }`}
                onClick={handlePrevPage}
              >
                <FontAwesomeIcon
                  icon={faCaretLeft}
                  className="employees__pagination--icon"
                />
              </div>
              <div
                className={`employees__pagination--button employees__pagination--next ${
                  currentPage === totalPages ? "is-disabled" : ""
                }`}
                onClick={handleNextPage}
              >
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="employees__pagination--icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
