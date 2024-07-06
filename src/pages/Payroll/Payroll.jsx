import "./Payroll.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faCircleQuestion,
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
          <h2 className="payroll-summary__title">
            Payroll summary for July 2024
          </h2>
          <div className="payroll-summary__actions">
            <Link className="button-secondary payroll-summary__button payroll-summary__button--add">
              Add Employee
            </Link>
            <Link
              to="/"
              className="button-primary payroll-summary__button payroll-summary__button--review"
            >
              Review Payroll
            </Link>
          </div>
        </div>
        <div className="payroll-summary__content">
          <div className="payroll-summary__column payroll-summary__column--left">
            <div className="payroll-summary__sub-column payroll-summary__sub-column--a">
              <div className="payroll-summary__item" payroll-summary__item--top>
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
        <table className="payroll-history__table">
          
          <thead class="payroll-history__header">
            <tr class="payroll-history__header-row">
              <th class="payroll-history__header-cell payroll-history__header-cell--payrun">
                Pay Run
              </th>
              <th class="payroll-history__header-cell payroll-history__header-cell--paydate">
                Pay Date
              </th>
              <th class="payroll-history__header-cell payroll-history__header-cell--employees">
                Employees
              </th>
              <th class="payroll-history__header-cell payroll-history__header-cell--amount">
                Total Amount
              </th>
              <th class="payroll-history__header-cell payroll-history__header-cell--status">
                Status
              </th>
              <th class="payroll-history__header-cell payroll-history__header-cell--approval">
                Approval Date
              </th>
              <th class="payroll-history__header-cell payroll-history__header-cell--actions">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="payroll-history__body">
            <tr class="payroll-history__body-row">
              <td class="payroll-history__body-cell payroll-history__body-cell--payrun">
                Pay Run
              </td>
              <td class="payroll-history__body-cell payroll-history__body-cell--paydate">
                Pay Date
              </td>
              <td class="payroll-history__body-cell payroll-history__body-cell--employees">
                Employees
              </td>
              <td class="payroll-history__body-cell payroll-history__body-cell--amount">
                Total Amount
              </td>
              <td class="payroll-history__body-cell payroll-history__body-cell--status">
                Status
              </td>
              <td class="payroll-history__body-cell payroll-history__body-cell--approval">
                Approval Date
              </td>
              <td class="payroll-history__body-cell payroll-history__body-cell--actions">
                Actions
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
