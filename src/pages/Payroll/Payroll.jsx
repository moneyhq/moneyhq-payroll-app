import "./Payroll.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faHandPointer,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../utils/formatFunctions";
import { Link } from "react-router-dom";

export default function Payroll() {
  const date = formatDate(new Date());

  return (
    <section className="payroll">
      <div className="home-user">
        <div className="home-user__left">
          <span className="home-user__left--name">Welcome Sammy!</span>
          <span className="home-user__left--date">{date}</span>
        </div>
        <div className="home-user__right">
          <FontAwesomeIcon
            icon={faCircleQuestion}
            className="home-user__right--icon"
          />
          <div className="home-user__right--avi">
            <img
              className="home-user__right--img"
              src="https://placehold.co/100"
              alt="Profile Picture"
            />
          </div>
        </div>
      </div>

      <div className="home-header">
        <div className="home-header__title">
          <h1 className="home-header__title--text">Payroll</h1>
        </div>
        <div className="home-header__actions payroll-header__actions">
          <Link
            to="/"
            className="button-secondary home-header__btn home-header__btn--secondary"
          >
            <FontAwesomeIcon icon={faPlus} className="home-header__icon" />
            <span>Add Employee</span>
          </Link>
          <Link
            to="/"
            className="button-primary home-header__btn home-header__btn--primary"
          >
            <FontAwesomeIcon
              icon={faHandPointer}
              className="home-header__icon"
            />
            <span>Run Payroll</span>
          </Link>
        </div>
      </div>

      <div className="payroll-nav">
        <div className="payroll-nav__item">Overview</div>
        <div className="payroll-nav__item  payroll-nav__item--disabled">
          Payroll Settings
        </div>
        <div className="payroll-nav__item payroll-nav__item--dummy"></div>
      </div>
    </section>
  );
}
