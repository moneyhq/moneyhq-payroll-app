import "./PayrunSuccess.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleMinus,
  faCircleQuestion,
  faDownload,
  faEnvelope,
  faEye,
  faLink,
  faPencil,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../utils/formatFunctions";
import { Link } from "react-router-dom";
import successIcon from "../../assets/images/success.webp";

export default function PayrunSuccess() {
  const date = formatDate(new Date());

  return (
    <section className="ps">
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
          <div className="payrun-progress__step payrun-progress__step--finished">
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
          </div>
          <hr
            className={`payrun-progress__line payrun-progress__line--finished`}
          />
        </div>

        <div className="payrun-progress__wrapper">
          <div className="payrun-progress__step payrun-progress__step--finished">
            <div
              className={`payrun-progress__icon payrun-progress__icon--finished`}
            >
              2
            </div>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className={`payrun-progress__mark payrun-progress__mark--finished`}
            />
            <div
              className={`payrun-progress__text payrun-progress__text--finished`}
            >
              Confirm and Submit
            </div>
          </div>
          <hr
            className={`payrun-progress__line payrun-progress__line--finished`}
          />
        </div>

        <div className="payrun-progress__wrapper">
          <div className="payrun-progress__step payrun-progress__step--finished">
            <div
              className={`payrun-progress__icon payrun-progress__icon--finished`}
            >
              3
            </div>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className={`payrun-progress__mark payrun-progress__mark--finished`}
            />
            <div
              className={`payrun-progress__text payrun-progress__text--finished`}
            >
              Success
            </div>
          </div>
          <hr
            className={`payrun-progress__line payrun-progress__line--finished`}
          />
        </div>
      </div>

      <div className="ps-container">
        <div className="ps-wrapper">
          <div className="ps-success">
            <div className="ps-success__image">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="ps-success__icon"
              />
            </div>
            <div className="ps-success__text">Keep Winning, Before you go</div>
          </div>
          <div className="ps-success__actions">
            <div className="ps-success__actions-title">Don't forget to...</div>
            <div className="ps-success__actions-wrapper">
              <div className="button-secondary ps-success__actions-item">
                <div className="ps-success__actions-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="ps-success__actions-text">Send Payslips</div>
              </div>
              <div className="button-secondary ps-success__actions-item">
                <div className="ps-success__actions-icon">
                  <FontAwesomeIcon icon={faDownload} />
                </div>
                <div className="ps-success__actions-text">
                  Download Pension Schedule(s)
                </div>
              </div>
              <div className="button-secondary ps-success__actions-item">
                <div className="ps-success__actions-icon">
                  <FontAwesomeIcon icon={faDownload} />
                </div>
                <div className="ps-success__actions-text">
                  Download PAYE Schedule(s)
                </div>
              </div>
              <Link
                to="/payroll"
                className="button-secondary ps-success__actions-item"
              >
                <div className="ps-success__actions-icon">
                  <FontAwesomeIcon icon={faEye} />
                </div>
                <div className="ps-success__actions-text">View Payroll</div>
              </Link>
              <Link
                to="/"
                className="button-secondary ps-success__actions-item"
              >
                <div className="ps-success__actions-icon">
                  <FontAwesomeIcon icon={faTableColumns} />
                </div>
                <div className="ps-success__actions-text">Take me home</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
