import "./PayrunConfirm.scss";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PayrunConfirm() {
  return (
    <section className="pc">
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
    </section>
  );
}
