import "./PayrunReview.scss";
import {
  faCircleCheck,
  faCircleMinus,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "../Dropdown/Dropdown.jsx";
import caution from "../../assets/images/caution.gif";

export default function PayrunReview() {
  const currPayPeriod = [
    {
      value: "1 Jul 2024 - 31 Jul 2024",
      label: "1 Jul 2024 - 31 Jul 2024",
    },
  ];

  return (
    <section className="pr">
      <div className="payrun-progress">
        <div className="payrun-progress__wrapper">
          <div className="payrun-progress__step payrun-progress__step--current">
            <div
              className={`payrun-progress__icon payrun-progress__icon--current`}
            >
              1
            </div>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className={`payrun-progress__mark payrun-progress__mark--current`}
            />
            <div
              className={`payrun-progress__text payrun-progress__text--current`}
            >
              Review Payroll
            </div>
          </div>
          <hr
            className={`payrun-progress__line payrun-progress__line--current`}
          />
        </div>

        <div className="payrun-progress__wrapper">
          <div className="payrun-progress__step">
            <div className={`payrun-progress__icon`}>2</div>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className={`payrun-progress__mark`}
            />
            <div className={`payrun-progress__text`}>Confirm and Submit</div>
          </div>
          <hr className={`payrun-progress__line`} />
        </div>

        <div className="payrun-progress__wrapper">
          <div className="payrun-progress__step">
            <div className="payrun-progress__icon">3</div>
            <div className="payrun-progress__text">Success</div>
          </div>
          <hr className="payrun-progress__line" />
        </div>
      </div>

      <div className="pr-summary">
        <div className="pr-summary__wrapper">
          <div className="pr-summary__cost">
            <div className="pr-summary__breakdown">
              <div className="pr-summary__item pr-summary__tcost">
                <div className="pr-summary__item-label pr-summary__tcost-label">
                  Total Payroll Cost
                </div>
                <div className="pr-summary__item-amount pr-summary__tcost-amount">
                  $150,000.00
                </div>
              </div>
              <div className="pr-summary__item">
                <div className="pr-summary__item-label">Gross Pay</div>
                <div className="pr-summary__item-amount">$136,500.00</div>
              </div>
              <div className="pr-summary__item">
                <div className="pr-summary__item-label">
                  Employer Taxes & Contributions
                </div>
                <div className="pr-summary__item-amount">$13,500.00</div>
              </div>
            </div>
          </div>
          <div className="pr-summary__caution">
            <div className="pr-summary__caution-picture">
              <img
                src={caution}
                alt="Caution gif"
                className="pr-summary__caution-img"
              />
            </div>
            <div className="pr-summary__caution-text">
              Exercise caution
              <span>Important financial information</span>
            </div>
          </div>
          <div className="pr-summary__date">
            <div className="pr-summary__date-details">
              <div className="pr-summary__date-period">
                <Dropdown
                  className="pr-summary__date-dropdown"
                  options={currPayPeriod}
                  defaultLabel={currPayPeriod[0].value}
                />
                <div className="pr-summary__date-label">Pay Period</div>
              </div>
              <div className="pr-summary__pay-day">
                <div className="pr-summary__text">25 Jul 2024</div>
                <div className="pr-summary__date-label">Pay Date</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pr-details">
        <div className="pr-details__wrapper">
          <div className="pr-details__top">
            <div className="pr-details__title">Any Payroll Changes?</div>
            <div className="button-primary pr-details__button">
              Add an Employee
            </div>
          </div>
          <div className="pr-details__bottom">
            <div className="pr-details__period"></div>
            <div className="pr-details__table">
              <div className="pr-details__table-header">
                <div className="pr-details__table-row">
                  <div className="pr-details__table-cell pr-details__table-name">
                    Name
                  </div>
                  <div className="pr-details__table-cell">Gross Pay</div>
                  <div className="pr-details__table-cell">
                    Employee Taxes <span>& Deductions</span>
                  </div>
                  <div className="pr-details__table-cell">Net Pay</div>
                  <div className="pr-details__table-cell">
                    Employer Taxes
                    <span>& Contributions</span>
                  </div>
                  <div className="pr-details__table-cell pr-details__table-actions">
                    Actions
                  </div>
                </div>
              </div>
              <div className="pr-details__table-body">
                <div className="pr-details__table-row">
                  <div className="pr-details__table-cell pr-details__table-name">
                    Jane Doe
                  </div>
                  <div className="pr-details__table-cell">$15,000.00</div>
                  <div className="pr-details__table-cell">$6,950.10</div>
                  <div className="pr-details__table-cell">$8,049.90</div>
                  <div className="pr-details__table-cell">$1,040.5</div>
                  <div className="pr-details__table-cell pr-details__table-actions">
                    <div className="pr-details__table-actions--content pr-details__table-actions--edit">
                      <FontAwesomeIcon
                        icon={faPencil}
                        className="pr-details__table-actions--icon"
                      />
                      <div className="pr-details__table-actions--icon">
                        Edit
                      </div>
                    </div>
                    <div className="pr-details__table-actions--content pr-details__table-actions--remove">
                      <FontAwesomeIcon
                        icon={faCircleMinus}
                        className="pr-details__table-actions--icon"
                      />
                      <div className="pr-details__table-actions--icon">
                        Remove
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pr-details__table-row">
                  <div className="pr-details__table-cell pr-details__table-name">
                    Jane Doe
                  </div>
                  <div className="pr-details__table-cell">$15,000.00</div>
                  <div className="pr-details__table-cell">$6,950.10</div>
                  <div className="pr-details__table-cell">$8,049.90</div>
                  <div className="pr-details__table-cell">$1,040.5</div>
                  <div className="pr-details__table-cell pr-details__table-actions">
                    <div className="pr-details__table-actions--content pr-details__table-actions--edit">
                      <FontAwesomeIcon
                        icon={faPencil}
                        className="pr-details__table-actions--icon"
                      />
                      <div className="pr-details__table-actions--icon">
                        Edit
                      </div>
                    </div>
                    <div className="pr-details__table-actions--content pr-details__table-actions--remove">
                      <FontAwesomeIcon
                        icon={faCircleMinus}
                        className="pr-details__table-actions--icon"
                      />
                      <div className="pr-details__table-actions--icon">
                        Remove
                      </div>
                    </div>
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
