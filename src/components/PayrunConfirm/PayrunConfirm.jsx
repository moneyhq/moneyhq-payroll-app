import "./PayrunConfirm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../utils/formatFunctions";
import Dropdown from "../Dropdown/Dropdown.jsx";
import caution from "../../assets/images/caution.gif";
import { Link } from "react-router-dom";

export default function PayrunConfirm() {
  const date = formatDate(new Date());
  const currPayPeriod = [
    {
      value: "1 Jul 2024 - 31 Jul 2024",
      label: "1 Jul 2024 - 31 Jul 2024",
    },
  ];

  return (
    <section className="pc">
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
          <h1 className="payroll-header__title--text">Run Payroll</h1>
        </div>
      </div>

      <div className="payrun-progress">
        <div className="payrun-progress__wrapper">
          <Link
            to="/payroll/review"
            className="payrun-progress__step payrun-progress__step--finished"
          >
            <div
              className={`payrun-progress__icon payrun-progress__icon--finished`}
            >
              1
            </div>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className={`payrun-progress__mark payrun-progress__mark--finished`}
            />
            <div
              className={`payrun-progress__text payrun-progress__text--finished`}
            >
              Review Payroll
            </div>
          </Link>
          <hr
            className={`payrun-progress__line payrun-progress__line--finished`}
          />
        </div>

        <div className="payrun-progress__wrapper">
          <div className="payrun-progress__step payrun-progress__step--current">
            <div
              className={`payrun-progress__icon payrun-progress__icon--current`}
            >
              2
            </div>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className={`payrun-progress__mark payrun-progress__mark--current`}
            />
            <div
              className={`payrun-progress__text payrun-progress__text--current`}
            >
              Confirm and Submit
            </div>
          </div>
          <hr
            className={`payrun-progress__line payrun-progress__line--current`}
          />
        </div>

        <div className="payrun-progress__wrapper">
          <div className="payrun-progress__step payrun-progress__step--waiting">
            <div className="payrun-progress__icon">3</div>
            <div className="payrun-progress__text">Success</div>
          </div>
          <hr className="payrun-progress__line" />
        </div>
      </div>

      <div className="pc-summary">
        <div className="pc-summary__container">
          <div className="pc-summary__wrapper">
            <div className="pc-summary__cost">
              <div className="pc-summary__breakdown">
                <div className="pc-summary__item pc-summary__tcost">
                  <div className="pc-summary__item-label pc-summary__tcost-label">
                    Total Payroll Cost
                  </div>
                  <div className="pc-summary__item-amount pc-summary__tcost-amount">
                    $150,000.00
                  </div>
                </div>
                <div className="pc-summary__item">
                  <div className="pc-summary__item-label">Gross Pay</div>
                  <div className="pc-summary__item-amount">$136,500.00</div>
                </div>
                <div className="pc-summary__item">
                  <div className="pc-summary__item-label">
                    Employer Taxes & Contributions
                  </div>
                  <div className="pc-summary__item-amount">$13,500.00</div>
                </div>
              </div>
            </div>
            <div className="pc-summary__caution">
              <div className="pc-summary__caution-picture">
                <img
                  src={caution}
                  alt="Caution gif"
                  className="pc-summary__caution-img"
                />
              </div>
              <div className="pc-summary__caution-text">
                Exercise caution
                <span>Important financial information</span>
              </div>
            </div>
            <div className="pc-summary__date">
              <div className="pc-summary__date-details">
                <div className="pc-summary__date-period">
                  <Dropdown
                    className="pc-summary__date-dropdown"
                    options={currPayPeriod}
                    defaultLabel={currPayPeriod[0].value}
                  />
                  <div className="pc-summary__date-label">Pay Period</div>
                </div>
                <div className="pc-summary__pay-day">
                  <div className="pc-summary__text">25 Jul 2024</div>
                  <div className="pc-summary__date-label">Pay Date</div>
                </div>
              </div>
            </div>
          </div>

          <hr className="pc-summary__divider" />

          <div className="pc-summary__wrapper pc-summary__wrapper--base">
            <div className="pc-summary__base">
              <div className="pc-summary__base-value">$150,000.00</div>
              <div className="pc-summary__base-label">Cash Needed</div>
            </div>
            <div className="pc-summary__base">
              <div className="pc-summary__base-value">$120,000.00</div>
              <div className="pc-summary__base-label">Net Pay</div>
            </div>
            <div className="pc-summary__base">
              <div className="pc-summary__base-value">$19,000.00</div>
              <div className="pc-summary__base-label">Tax Due</div>
            </div>
            <div className="pc-summary__base">
              <div className="pc-summary__base-value">$11,000.00</div>
              <div className="pc-summary__base-label">Total Pension Due</div>
            </div>
            <div className="pc-summary__base">
              <div className="pc-summary__base-value">27</div>
              <div className="pc-summary__base-label">Employees</div>
            </div>
          </div>
        </div>
      </div>

      <div className="pc-nav">
        <Link to="/payroll/review" className="button-secondary pc-nav__button">
          Back
        </Link>
        <Link to="/payroll/success" className="button-primary pc-nav__button">
          Approve Payroll
        </Link>
      </div>
    </section>
  );
}
