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
import PayrunReview from "../../components/PayrunReview/PayrunReview";
import PayrunConfirm from "../../components/PayrunConfirm/PayrunConfirm";
import PayrunSuccess from "../../components/PayrunSuccess/PayrunSuccess";

export default function Payrun() {
  const date = formatDate(new Date());
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

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

      <div className="payrun-content">
        {currentStep === 1 && <PayrunReview onNext={handleNext} />}
        {currentStep === 2 && <PayrunConfirm onNext={handleNext} />}
        {currentStep === 3 && <PayrunSuccess />}
      </div>

    </section>
  );
}
