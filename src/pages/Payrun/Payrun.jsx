import "./Payrun.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDate } from "../../utils/formatFunctions";
import {
  faCircle,
  faCircleQuestion,
  faHandPointer,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Payrun() {
  const date = formatDate(new Date());

  return (
    <section className="payrun">
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
        <hr />
        <div className="payrun-progress__wrapper">
          <div className="payrun-progess__step payrun-progess__step--current">
            <FontAwesomeIcon
              icon={faCircle}
              className="payrun-progress__icon payrun-progress__icon--active"
            />
            <div className="payrun-progess__text">Review Payroll</div>
          </div>
          <div className="payrun-progess__step payrun-progess__step--middle">
            <FontAwesomeIcon
              icon={faCircle}
              className="payrun-progress__icon"
            />
            <div className="payrun-progess__text">Confirm and Submit</div>
          </div>
          <div className="payrun-progess__step">
            <FontAwesomeIcon
              icon={faCircle}
              className="payrun-progress__icon"
            />
            <div className="payrun-progess__text">Success</div>
          </div>
        </div>
      </div>
      <div className="payrun-summary"></div>
      <div className="payrun-details"></div>
    </section>
  );
}
