import "./PayrunReview.scss";
import {
  faCircleCheck,
  faCircleMinus,
  faCircleQuestion,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDate } from "../../utils/formatFunctions";
import { Link } from "react-router-dom";
import { useModal } from "../../contexts/ModalContext";

export default function PayrunReview() {
  const date = formatDate(new Date());
  const { openModal } = useModal();

  return (
    <section className="pr">
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
            className="payrun-progress__step payrun-progress__step--current"
          >
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
          </Link>
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

      <div className="pr-details">
        <div className="pr-details__wrapper">
          <div className="pr-details__top">
            <div className="pr-details__title">
              Any Payroll Changes?
              <span className="pr-details__title--caution">
                <i className="fa-solid fa-circle-info"></i> Scroll to the bottom
                to proceed
              </span>
            </div>
            <div
              onClick={() => openModal("addEmployeesModal")}
              className="button-secondary pr-details__button"
            >
              Add an Employee
            </div>
          </div>

          <div className="pr-details__bottom">
            <div className="pr-details__period"></div>
            <div className="pr-details__table">
              <div className="pr-details__table-header">
                <div className="pr-details__table-row">
                  <div className="pr-details__table-cell pr-details__table-cell--header pr-details__table-name">
                    Name
                  </div>
                  <div className="pr-details__table-cell pr-details__table-cell--header">
                    Gross Pay
                  </div>
                  <div className="pr-details__table-cell pr-details__table-cell--header">
                    Employee Taxes <span>& Deductions</span>
                  </div>
                  <div className="pr-details__table-cell pr-details__table-cell--header">
                    Net Pay
                  </div>
                  <div className="pr-details__table-cell pr-details__table-cell--header">
                    Employer Taxes
                    <span>& Contributions</span>
                  </div>
                  <div className="pr-details__table-cell pr-details__table-cell--header pr-details__table-actions--header">
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

          <div className="pr-details__nav">
            <Link
              to="/payroll"
              className="button-secondary pr-details__nav-button"
            >
              Back
            </Link>
            <Link
              to="/payroll/confirm"
              className="button-primary pr-details__nav-button"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
