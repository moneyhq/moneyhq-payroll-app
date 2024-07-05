import "./Home.scss";
import { formatDate } from "../../utils/formatFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faHandPointer,
  faPlus,
  faArrowTrendUp,
  faArrowTrendDown,
  faUsers,
  faArrowRight,
  faCalendarDays,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Home() {
  const date = formatDate(new Date());
  return (
    <section className="home">
      <div className="home-top">
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
            <h1 className="home-header__title--text">Home</h1>
          </div>
          <div className="home-header__actions">
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

        <div className="home-box">
          <div className="home-box__currentdata home-box__currentdata--tertiary">
            <div className="home-box__currentdata home-box__currentdata--var1">
              <div className="home-box__currentdata--title">
                Upcoming Salary Amount
              </div>
              <div className="home-box__currentdata--salary-amount">
                $150,000.00
              </div>
            </div>
            <div className="home-box__currentdata home-box__currentdata--var2">
              <div
                className={`home-box__currentdata--arrow ${
                  true
                    ? "home-box__currentdata--arrow-up"
                    : "home-box__currentdata--arrow-down"
                }`}
              >
                <FontAwesomeIcon
                  icon={true ? faArrowTrendUp : faArrowTrendDown}
                />
                <div>8%</div>
              </div>

              <div className="home-box__currentdata--date">
                1 Jul 2024 - 31 Jul 2024
              </div>
            </div>
          </div>
          <div className="home-box__wrapper home-box__wrapper--primary">
            <div className="card card-upcomingdate">
              <div className="card-top">
                <div className="card-top__left">
                  <span className="card-top__left-title">
                    Upcoming Sal Date
                  </span>
                  <h2 className="card-top__left-data">
                    25 Jul <span className="card-top__left-data2">2024</span>
                  </h2>
                </div>
                <div className="card-top__right">
                  <FontAwesomeIcon icon={faCalendarDays} />
                </div>
              </div>
              <Link to="/employees" className="card-bottom">
                Run Payroll
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="card-bottom--icon"
                />
              </Link>
            </div>
            <div className="card card-employees">
              <div className="card-top">
                <div className="card-top__left">
                  <span className="card-top__left-title">Employees</span>
                  <h2 className="card-top__left-data">27</h2>
                </div>
                <div className="card-top__right">
                  <FontAwesomeIcon icon={faUsers} />
                </div>
              </div>
              <Link to="/employees" className="card-bottom">
                View
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="card-bottom--icon"
                />
              </Link>
            </div>
            <div className="card card-compliance">
              <div className="card-events__title">
                <FontAwesomeIcon
                  icon={faGavel}
                  className="card-events__title--icon"
                />
                Compliance
              </div>
              <div className="card-compliance__body">
                <div className="card-compliance__left">
                  <div className="card-compliance__data card-compliance__left-top">
                    <span className="card-compliance__title">Tax (PAYE)</span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="card-compliance__icon"
                    />
                    <span className="card-compliance__value">$8,500</span>
                  </div>
                  <div className="card-compliance__data card-compliance__left-bottom">
                    <span className="card-compliance__title">Pension</span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="card-compliance__icon"
                    />
                    <span className="card-compliance__value">$8,500</span>
                  </div>
                </div>
                {/* <div className="card-top__right">
                  <FontAwesomeIcon icon={faGavel} />
                </div> */}
              </div>
            </div>
            <div className="card card-events">
              <div className="card-events__title">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="card-events__title--icon"
                />
                Upcoming events
              </div>
            </div>
          </div>
          <div className="home-box__wrapper home-box__wrapper--secondary">
            <div className="card card--secondary"></div>
          </div>
        </div>
      </div>
      <div className="home-bottom"></div>
    </section>
  );
}
