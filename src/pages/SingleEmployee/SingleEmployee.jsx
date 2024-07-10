import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDate } from "../../utils/formatFunctions";
import "./SingleEmployee.scss";
import { faCircleQuestion, faPencil } from "@fortawesome/free-solid-svg-icons";
import userImg from "../../assets/images/user.avif";

export default function SingleEmployee({ employeeDetails }) {
  const date = formatDate(new Date());

  return (
    <>
      <div className="home-user">
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
            <div className="single-employee-breadcrumb__text single-employee-breadcrumb__text--employees">
              Employees
            </div>
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
        <div className="single-employee-container single-employee-personal">
          <div className="single-employee-profile">
            <div className="single-employee-profile__avi">
              <img
                src={userImg}
                alt="user image"
                className="single-employee-profile__img"
              />
            </div>
            <div className="single-employee-profile__data">
              <div className="single-employee-profile__name">Employee Name</div>
              <div className="single-employee-profile__role">Role</div>
            </div>
          </div>

          <div className="single-employee-wrapper single-employee-bio">
            <div className="single-employee-item">
              <div className="single-employee-label single-employee-bio__label"></div>
              <div className="single-employee-data single-employee-bio__firstname"></div>
            </div>
          </div>
          <div className="single-employee-container single-employee-biodata"></div>
        </div>
      </div>
    </>
  );
}
