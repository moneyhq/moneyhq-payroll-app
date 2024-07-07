import "./Payroll.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCircle,
  faCircleQuestion,
  faDownload,
  faEye,
  faHandPointer,
  faPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../utils/formatFunctions";
import { Link } from "react-router-dom";

export default function Payroll() {
  const date = formatDate(new Date());

  return (
    <section className="payroll">
      <div className="home-user payroll-user">
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

      <div className="payroll-header">
        <div className="payroll-header__title">
          <h1 className="payroll-header__title--text">Payroll</h1>
        </div>
        <div className="payroll-header__actions">
          <Link
            to="/"
            className="button-secondary payroll-header__btn payroll-header__btn--secondary"
          >
            <FontAwesomeIcon icon={faPlus} className="payroll-header__icon" />
            <span>Add Employee</span>
          </Link>
          <Link
            to="/"
            className="button-primary payroll-header__btn payroll-header__btn--primary"
          >
            <FontAwesomeIcon
              icon={faHandPointer}
              className="payroll-header__icon"
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

      <div className="payroll-summary">
        <div className="payroll-summary__header">
          <div className="payroll-summary__title">
            Payroll summary for July 2024
          </div>
          <div className="payroll-summary__actions">
            <Link className="button-secondary payroll-summary__button payroll-summary__button--add">
              Add Employee
            </Link>
            <Link
              to="/payroll/run"
              className="button-primary payroll-summary__button payroll-summary__button--review"
            >
              Review Payroll
            </Link>
          </div>
        </div>
        <div className="payroll-summary__content">
          <div className="payroll-summary__column payroll-summary__column--left">
            <div className="payroll-summary__sub-column payroll-summary__sub-column--a">
              <div className="payroll-summary__item payroll-summary__item--top">
                <div className="payroll-summary__amount">$150,000</div>
                <div className="payroll-summary__label">Total Payroll Cost</div>
              </div>
              <div className="payroll-summary__item payroll-summary__item--bottom">
                <div className="payroll-summary__amount">$120,000</div>
                <div className="payroll-summary__label">Employees Net Pay</div>
              </div>
            </div>
            <div className="payroll-summary__sub-column payroll-summary__sub-column--b">
              <div className="payroll-summary__deduction-title">
                Deduction Summary
              </div>
              <div className="payroll-summary__deduction-item">
                <div className="payroll-summary__deduction-label">
                  Employee Pension
                </div>
                <div className="payroll-summary__deduction-amount">$15,000</div>
              </div>
              <div className="payroll-summary__deduction-item">
                <div className="payroll-summary__deduction-label">PAYE</div>
                <div className="payroll-summary__deduction-amount">$10,000</div>
              </div>
              <div className="payroll-summary__deduction-item">
                <div className="payroll-summary__deduction-label">
                  Other Deductions
                </div>
                <div className="payroll-summary__deduction-amount">$5,000</div>
              </div>
            </div>
          </div>
          <div className="payroll-summary__column payroll-summary__column--right">
            <div className="payroll-summary__info-item payroll-summary__info-item--payout-date">
              <div className="payroll-summary__info-icon">
                <FontAwesomeIcon icon={faCalendar} />
              </div>
              <div className="payroll-summary__info-content">
                <div className="payroll-summary__info-data">MMM DD, YYYY</div>
                <div className="payroll-summary__info-label">Payout Date</div>
              </div>
            </div>
            <div className="payroll-summary__info-item payroll-summary__info-item--payout-date">
              <div className="payroll-summary__info-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className="payroll-summary__info-content">
                <div className="payroll-summary__info-data">150</div>
                <div className="payroll-summary__info-label">
                  Employees on this pay run
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="payroll-history">
        <div className="payroll-history__caption">Payroll History</div>
        <div className="payroll-history__wrapper">
          <div className="payroll-history__table">
            <div className="payroll-history__header">
              <div className="payroll-history__table-row payroll-history__header-row">
                <div className="payroll-history__header-cell payroll-history__header--payrun">
                  Pay Run
                </div>
                <div className="payroll-history__header-cell payroll-history__header--paydate">
                  Pay Date
                </div>
                <div className="payroll-history__header-cell payroll-history__header--employees">
                  Employees
                </div>
                <div className="payroll-history__header-cell payroll-history__header--amount">
                  Total Amount
                </div>
                <div className="payroll-history__header-cell payroll-history__header--status">
                  Status
                </div>
                <div className="payroll-history__header-cell payroll-history__header--approval">
                  Approval
                </div>
                <div className="payroll-history__header-cell payroll-history__header--actions">
                  Actions
                </div>
              </div>
            </div>
            <div className="payroll-history__body">
              <div className="payroll-history__table-row payroll-history__body-row">
                <div className="payroll-history__body-cell payroll-history__body-cell--1 payroll-history__body-payrun payroll-history__body-payrun--1">
                  Monthly Salary: 01 Jul - 31 Jul 2024
                </div>
                <div className="payroll-history__body-cell payroll-history__body-cell--1  payroll-history__body-paydate payroll-history__body-paydate--1">
                  25 Jul 2024
                </div>
                <div className="payroll-history__body-cell payroll-history__body-cell--1 payroll-history__body-employees payroll-history__body-employees--1">
                  27
                </div>
                <div className="payroll-history__body-cell payroll-history__body-cell--1 payroll-history__body-amount payroll-history__body-amount--1">
                  $150,000.00
                </div>
                <div className="payroll-history__body-cell payroll-history__body-cell--1 payroll-history__body-approval payroll-history__body-approval--1">
                  <div className="payroll-history__child payroll-history__child--pending payroll-history__child-approval">
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="payroll-history__child--icon payroll-history__child-approval--icon"
                    />
                    <span className="payroll-history__child--text payroll-history__child-approval--text">
                      PENDING
                    </span>
                  </div>
                </div>
                <div className="payroll-history__body-cell payroll-history__body-cell--1 payroll-history__body-status payroll-history__body-status--1">
                  <div className="payroll-history__child payroll-history__child--draft payroll-history__child-status">
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="payroll-history__child--icon payroll-history__child-status--icon"
                    />
                    <span className="payroll-history__child--text payroll-history__child-status--text">
                      DRAFT
                    </span>
                  </div>
                </div>
                <div className="payroll-history__body-cell payroll-history__body-cell--1 payroll-history__body-actions payroll-history__body-actions--1">
                  <Link
                    to="/payroll/run"
                    className="payroll-history__body-review"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <span>REVIEW </span>
                  </Link>
                </div>
              </div>
              <div className="payroll-history__table-row payroll-history__body-row">
                <div className="payroll-history__body-cell payroll-history__body-payrun">
                  Monthly Salary: 01 Jun - 31 Jun 2024
                </div>
                <div className="payroll-history__body-cell  payroll-history__body-paydate">
                  25 Jun 2024
                </div>
                <div className="payroll-history__body-cell payroll-history__body-employees">
                  27
                </div>
                <div className="payroll-history__body-cell payroll-history__body-amount">
                  $138,000.00
                </div>
                <div className="payroll-history__body-cell payroll-history__body-approval">
                  24 Jun 2024
                </div>
                <div className="payroll-history__body-cell payroll-history__body-status">
                  <div className="payroll-history__child payroll-history__child--done payroll-history__child-status">
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="payroll-history__child--icon payroll-history__child-status--icon"
                    />
                    <span className="payroll-history__child--text payroll-history__child-status--text">
                      DONE
                    </span>
                  </div>
                </div>
                <div className="payroll-history__body-cell payroll-history__body-actions">
                  <div className="payroll-history__body-actions--item">
                    <FontAwesomeIcon icon={faEye} />
                    View
                  </div>
                  <div className="payroll-history__body-actions--item">
                    <FontAwesomeIcon icon={faDownload} />
                    Download
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
