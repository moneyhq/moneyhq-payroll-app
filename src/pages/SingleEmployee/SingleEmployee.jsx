import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDate } from "../../utils/formatFunctions";
import "./SingleEmployee.scss";
import {
  faChevronDown,
  faCircleQuestion,
  faDownload,
  faEye,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import userImg from "../../assets/images/user.png";
import { Link } from "react-router-dom";

export default function SingleEmployee({ employeeDetails }) {
  const date = formatDate(new Date());

  return (
    <>
      <div className="home-user single-employee-user">
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

      <div className="single-employee-header">
        <div className="single-employee-header__left">
          <div className="single-employee-breadcrumb">
            <Link
              to="/employees"
              className="single-employee-breadcrumb__text single-employee-breadcrumb__text--employees"
            >
              Employees
            </Link>
            <div>{` > `}</div>
            <div className="single-employee-breadcrumb__text single-employee-breadcrumb__text--name">
              Employee Name
            </div>
          </div>

          <div className="single-employee-name">Employee Name</div>
        </div>

        <div className="button-secondary single-employee-edit">
          <FontAwesomeIcon icon={faPencil} />
          Edit Details
        </div>
      </div>

      <div className="single-employee-body">
        <div className="single-employee-container">
          <div className="single-employee-subhead">Personal Details</div>
          <div className="single-employee-content single-employee-personal">
            <div className="single-employee-profile">
              <div className="single-employee-profile__avi">
                <img
                  src={userImg}
                  alt="user image"
                  className="single-employee-profile__img"
                />
              </div>
              <div className="single-employee-profile__data">
                <div className="single-employee-profile__name">
                  Employee Name
                </div>
                <div className="single-employee-profile__role">Role</div>
              </div>
            </div>
            <div className="single-employee-wrapper single-employee-bio">
              <div className="single-employee-item">
                <div className="single-employee-label single-employee-bio__label">
                  First Name
                </div>
                <div className="single-employee-data single-employee-bio__firstname">
                  Employee First Name
                </div>
              </div>
              <div className="single-employee-item">
                <div className="single-employee-label single-employee-bio__label">
                  Middle Name
                </div>
                <div className="single-employee-data single-employee-bio__firstname">
                  {"-" || "Middle Name"}
                </div>
              </div>
              <div className="single-employee-item">
                <div className="single-employee-label single-employee-bio__label">
                  Last Name
                </div>
                <div className="single-employee-data single-employee-bio__lastname">
                  Employee Last Name
                </div>
              </div>
              <div className="single-employee-item">
                <div className="single-employee-label single-employee-bio__label">
                  Gender
                </div>
                <div className="single-employee-data single-employee-bio__gender">
                  Male
                </div>
              </div>
            </div>
            <div className="single-employee-wrapper single-employee-biodata">
              <div className="single-employee-item">
                <div className="single-employee-label single-employee-bio__label">
                  Date of Birth
                </div>
                <div className="single-employee-data single-employee-bio__dob">
                  20 Aug 1990
                </div>
              </div>
              <div className="single-employee-item">
                <div className="single-employee-label single-employee-bio__label">
                  Nationality
                </div>
                <div className="single-employee-data single-employee-bio__nationality">
                  Not Set
                </div>
              </div>
              <div className="single-employee-item">
                <div className="single-employee-label single-employee-bio__label">
                  Email Address
                </div>
                <div className="single-employee-data single-employee-bio__email">
                  email@example.com
                </div>
              </div>
              <div className="single-employee-item">
                <div className="single-employee-label single-employee-bio__label">
                  Phone Number
                </div>
                <div className="single-employee-data single-employee-bio__phone">
                  000 0000 0000
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="single-employee-container">
          <div className="single-employee-subhead">
            <div className="single-employee-subhead__title">
              Job & Compliance Details
            </div>
            <div className="single-employee-subhead__icon">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <div className="single-employee-content single-employee-job">
            <div className="single-employee-wrapper single-employee-role">
              <div className="single-employee-item">
                <div className="single-employee-label single-employee-role__label">
                  Job Title
                </div>
                <div className="single-employee-data single-employee-role__job-title">
                  Employee Job Title
                </div>
              </div>
              <div className="single-employee-item">
                <div className="single-employee-label single-employee-role__label">
                  Employment Type
                </div>
                <div className="single-employee-data single-employee-role__job-type">
                  Full Time
                </div>
              </div>
              <div className="single-employee-item">
                <div className="single-employee-label single-employee-role__label">
                  Salary
                </div>
                <div className="single-employee-data single-employee-role__salary">
                  ₦200,000 / mth
                </div>
              </div>
            </div>
            <div className="single-employee-wrapper single-employee-loc">
              <div className="single-employee-item">
                <div className="single-employee-label single-employee-loc__label">
                  Work Email
                </div>
                <div className="single-employee-data single-employee-loc__email">
                  email@company.com
                </div>
              </div>
              <div className="single-employee-item">
                <div className="single-employee-label single-employee-role__label">
                  Manager
                </div>
                <div className="single-employee-data single-employee-role__manager">
                  -
                </div>
              </div>
              <div className="single-employee-item">
                <div className="single-employee-label single-employee-loc__label">
                  Work Location
                </div>
                <div className="single-employee-data single-employee-loc__address">
                  Company/Branch Address
                </div>
              </div>
            </div>
            <div className="single-employee-wrapper single-employee-comply">
              <div className="single-employee-item">
                <div className="single-employee-label single-employee-loc__label">
                  Tax ID / State
                </div>
                <div className="single-employee-data single-employee-loc__email">
                  N-987654 / Lagos
                </div>
              </div>
              <div className="single-employee-item">
                <div className="single-employee-label single-employee-loc__label">
                  Pension ID
                </div>
                <div className="single-employee-data single-employee-loc__email">
                  PEN1234567890
                </div>
              </div>
              <div className="single-employee-item">
                <div className="single-employee-label single-employee-role__label">
                  Pension Fund Administrator
                </div>
                <div className="single-employee-data single-employee-role__manager">
                  Some PFA
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="single-employee-container__wrap">
          <div className="single-employee-container">
            <div className="single-employee-subhead">Payment Details</div>
            <div className="single-employee-content single-employee-content__payment">
              <div className="single-employee-wrapper single-employee-payment">
                <div className="single-employee-item">
                  <div className="single-employee-label single-employee-payment__label">
                    Bank Name
                  </div>
                  <div className="single-employee-data single-employee-payment__firstname">
                    HSBC
                  </div>
                </div>
                <div className="single-employee-item">
                  <div className="single-employee-label single-employee-payment__label">
                    Account Name
                  </div>
                  <div className="single-employee-data single-employee-payment__firstname">
                    Employee Name
                  </div>
                </div>
                <div className="single-employee-item">
                  <div className="single-employee-label single-employee-payment__label">
                    Swift Code
                  </div>
                  <div className="single-employee-data single-employee-payment__lastname">
                    GTBINGLA
                  </div>
                </div>
              </div>
              <div className="single-employee-wrapper single-employee-payment">
                <div className="single-employee-item">
                  <div className="single-employee-label single-employee-payment__label">
                    Sort Code
                  </div>
                  <div className="single-employee-data single-employee-payment__nationality">
                    111111
                  </div>
                </div>
                <div className="single-employee-item">
                  <div className="single-employee-label single-employee-payment__label">
                    Account Number
                  </div>
                  <div className="single-employee-data single-employee-payment__dob">
                    000111222
                  </div>
                </div>
                <div className="single-employee-item">
                  <div className="single-employee-label single-employee-payment__label">
                    IBAN
                  </div>
                  <div className="single-employee-data single-employee-payment__email">
                    ASFGH12345647586980
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-employee-container">
            <div className="single-employee-subhead">Address</div>
            <div className="single-employee-content single-employee-content__address">
              <div className="single-employee-wrapper single-employee-address">
                <div className="single-employee-item">
                  <div className="single-employee-label single-employee-bio__label">
                    Primary Residence
                  </div>
                  <div className="single-employee-data single-employee-bio__firstname">
                    X24 Bricklayer's Arms
                  </div>
                </div>
                <div className="single-employee-item">
                  <div className="single-employee-label single-employee-bio__label">
                    Primary State / County
                  </div>
                  <div className="single-employee-data single-employee-bio__firstname">
                    Some State
                  </div>
                </div>
                <div className="single-employee-item">
                  <div className="single-employee-label single-employee-bio__label">
                    Country
                  </div>
                  <div className="single-employee-data single-employee-bio__lastname">
                    Just a Country
                  </div>
                </div>
              </div>
              <div className="single-employee-wrapper single-employee-address">
                <div className="single-employee-item">
                  <div className="single-employee-label single-employee-bio__label">
                    Tax Residence
                  </div>
                  <div className="single-employee-data single-employee-bio__dob">
                    Same as primary
                  </div>
                </div>
                <div className="single-employee-item">
                  <div className="single-employee-label single-employee-bio__label">
                    Tax State / County
                  </div>
                  <div className="single-employee-data single-employee-bio__nationality">
                    Same as primary
                  </div>
                </div>
                <div className="single-employee-item">
                  <div className="single-employee-label single-employee-bio__label">
                    Tax Country
                  </div>
                  <div className="single-employee-data single-employee-bio__email">
                    Same as primary
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="single-employee-container single-employee-table">
          <div className="single-employee-subhead single-employee-subhead__payslips">
            Payslips
          </div>

          <div className="single-employee-table__header">
            <div className="single-employee-table__header-row">
              <div className="single-employee-table__header-cell">
                Pay Period
              </div>
              <div className="single-employee-table__header-cell">
                Gross Pay
              </div>
              <div className="single-employee-table__header-cell">
                Deductions
              </div>
              <div className="single-employee-table__header-cell">Net Pay</div>
              <div className="single-employee-table__header-cell single-employee-table__header-cell--employer">
                Employer Contributions
              </div>
              <div className="single-employee-table__header-cell single-employee-table__header-cell--actions">
                Actions
              </div>
            </div>
          </div>
          <div className="single-employee-table__body">
            <div className="single-employee-table__body-row">
              <div className="single-employee-table__body-cell">
                01 Jun 2024 - 30 Jun 2024
              </div>
              <div className="single-employee-table__body-cell">
                ₦ 200,000.00
              </div>
              <div className="single-employee-table__body-cell">
                ₦ 20,054.67
              </div>
              <div className="single-employee-table__body-cell">
                ₦ 179,945.33
              </div>
              <div className="single-employee-table__body-cell single-employee-table__body-employer">
                ₦ 10,000.00
              </div>
              <div className="single-employee-table__body-cell single-employee-table__body-actions">
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
            <div className="single-employee-table__body-row">
              <div className="single-employee-table__body-cell">
                01 Jun 2024 - 30 Jun 2024
              </div>
              <div className="single-employee-table__body-cell">
                ₦ 200,000.00
              </div>
              <div className="single-employee-table__body-cell">
                ₦ 20,054.67
              </div>
              <div className="single-employee-table__body-cell">
                ₦ 179,945.33
              </div>
              <div className="single-employee-table__body-cell single-employee-table__body-employer">
                ₦ 10,000.00
              </div>
              <div className="single-employee-table__body-cell single-employee-table__body-actions">
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
    </>
  );
}
