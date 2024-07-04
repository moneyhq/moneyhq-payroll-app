import { Link, useLocation } from "react-router-dom";
import "./MainNav.scss";
import { useEffect, useState } from "react";
import companyLogo from "../../assets/logos/logoipsum-331.svg";
import home from "../../assets/icons/home.svg";
import payroll from "../../assets/icons/payroll.svg";
import employees from "../../assets/icons/employees.svg";
import reports from "../../assets/icons/reports.svg";

export default function MainNav({ theme }) {
  const [clickedMenu, setClickedMenu] = useState(false);
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  return (
    <nav className="main-nav" aria-label="Main Navigation">
      <div
        className="main-nav__dummy"
        onClick={() => {
          setClickedMenu(!clickedMenu);
        }}
      >
        <p className="main-nav__dummy--text">
          <span className="main-nav__dummy--title">payroll by MoneyHQ</span>
          <span className="main-nav__dummy--desc">
            ...the future of money management for businesses
          </span>
        </p>
      </div>
      {clickedMenu && (
        <ul className="main-nav__list main-nav__list--1">
          <li className="main-nav__item">
            <Link className="main-nav__link" to="/">
              Home
            </Link>
          </li>
          <li className="main-nav__item">
            <Link className="main-nav__link" to="/payroll">
              Payroll
            </Link>
          </li>
          <li className="main-nav__item">
            <Link className="main-nav__link" to="/employees">
              Employees
            </Link>
          </li>
          <li className="main-nav__item">
            <Link className="main-nav__link" to="/reports">
              Reports
            </Link>
          </li>
        </ul>
      )}

      <Link className="main-nav__card">
        <img className="main-nav__logo" src={companyLogo} alt="Company Logo" />
        <p className="main-nav__company">XYZ Limited</p>
      </Link>

      <div className="main-nav__container">
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <Link
              className={`main-nav__link ${
                activePath === "/" ? "main-nav__link--active" : ""
              }`}
              to="/"
            >
              <img
                className={`main-nav__link-icon ${
                  activePath === "/" ? "main-nav__link-icon--active" : ""
                }`}
                src={home}
                alt=""
              />
              <p className="main-nav__link-text">Home</p>
            </Link>
          </li>
          <li className="main-nav__item">
            <Link
              className={`main-nav__link ${
                activePath.startsWith("/payroll")
                  ? "main-nav__link--active"
                  : ""
              }`}
              to="/payroll"
            >
              <img
                className={`main-nav__link-icon ${
                  activePath.startsWith("/payroll")
                    ? "main-nav__link-icon--active"
                    : ""
                }`}
                src={payroll}
                alt=""
              />
              <p className="main-nav__link-text">Payroll</p>
            </Link>
          </li>
          <li className="main-nav__item">
            <Link
              className={`main-nav__link ${
                activePath.startsWith("/employees")
                  ? "main-nav__link--active"
                  : ""
              }`}
              to="/employees"
            >
              <img
                className={`main-nav__link-icon ${
                  activePath.startsWith("/employees")
                    ? "main-nav__link-icon--active"
                    : ""
                }`}
                src={employees}
                alt=""
              />
              <p className="main-nav__link-text">Employees</p>
            </Link>
          </li>
          <li className="main-nav__item">
            <Link
              className={`main-nav__link ${
                activePath.startsWith("/reports")
                  ? "main-nav__link--active"
                  : ""
              }`}
              to="/reports"
            >
              <img
                className={`main-nav__link-icon ${
                  activePath.startsWith("/reports")
                    ? "main-nav__link-icon--active"
                    : ""
                }`}
                src={reports}
                alt=""
              />
              <p className="main-nav__link-text">Reports</p>
            </Link>
          </li>
        </ul>
        <div className="main-nav__bottom">Settings</div>
      </div>
    </nav>
  );
}
