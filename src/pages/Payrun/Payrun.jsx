import "./Payrun.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDate } from "../../utils/formatFunctions";
import {
  faCircle,
  faCircleCheck,
  faCircleQuestion,
  faHandPointer,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Payrun() {
  const date = formatDate(new Date());
  const [isProgressCurrent, setIsProgressCurrent] = useState(true);

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

      <div className="payrun-summary"></div>
      <div className="payrun-details"></div>
    </section>
  );
}
