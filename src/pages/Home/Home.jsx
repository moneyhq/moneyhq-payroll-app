import "./Home.scss";
import { formatDate } from "../../utils/formatFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faHandPointer,
  faPlus,
  faArrowTrendUp,
  faArrowTrendDown,
  faUsers,
  faArrowRight,
  faCalendarDays,
  faGavel,
  faChartSimple,
  faCircle,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import alarm from "../../assets/icons/alarm-time.svg";
import graph from "../../assets/images/graph-img.png";
import zenith from "../../assets/images/zenith-bank.svg";
import animation from "../../assets/images/anima.gif";

export default function Home() {
  const date = formatDate(new Date());
  return (
    <section className="home">
      <div className="home-top">
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

        <div className="home-header">
          <div className="home-header__title">
            <h1 className="home-header__title--text">Home</h1>
          </div>
          <div className="home-header__actions">
            <Link
              to="/"
              className="button-secondary home-header__btn home-header__btn--secondary"
            >
              <FontAwesomeIcon icon={faPlus} className="home-header__icon" />
              <span>Add Employee</span>
            </Link>
            <Link
              to="/"
              className="button-primary home-header__btn home-header__btn--primary"
            >
              <FontAwesomeIcon
                icon={faHandPointer}
                className="home-header__icon"
              />
              <span>Run Payroll</span>
            </Link>
          </div>
        </div>

        <div className="home-box">
          <div className="home-box__currentdata home-box__currentdata--tertiary">
            <div className="home-box__currentdata home-box__currentdata--var1">
              <div className="home-box__currentdata--title">
                Upcoming Salary Amount
              </div>
              <div className="home-box__currentdata--salary-amount">
                $150,000.00
              </div>
            </div>
            <div className="home-box__currentdata home-box__currentdata--var2">
              <div
                className={`home-box__currentdata--arrow ${
                  true
                    ? "home-box__currentdata--arrow-up"
                    : "home-box__currentdata--arrow-down"
                }`}
              >
                <FontAwesomeIcon
                  icon={true ? faArrowTrendUp : faArrowTrendDown}
                />
                <div>8%</div>
              </div>

              <div className="home-box__currentdata--date">
                1 Jul 2024 - 31 Jul 2024
              </div>
            </div>
          </div>
          <div className="home-box__wrapper home-box__wrapper--primary">
            <div className="card card-upcomingdate">
              <div className="card-top">
                <div className="card-top__left">
                  <span className="card-top__left-title">
                    Upcoming Sal Date
                  </span>
                  <div className="card-top__left-data">
                    25 Jul <span className="card-top__left-data2">2024</span>
                  </div>
                </div>
                <div className="card-top__right">
                  <FontAwesomeIcon icon={faCalendarDays} />
                </div>
              </div>
              <Link to="/payroll/review" className="card-bottom">
                Run Payroll
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="card-bottom--icon"
                />
              </Link>
            </div>
            <div className="card card-employees">
              <div className="card-top">
                <div className="card-top__left">
                  <span className="card-top__left-title">Employees</span>
                  <div className="card-top__left-data">27</div>
                </div>
                <div className="card-top__right">
                  <FontAwesomeIcon icon={faUsers} />
                </div>
              </div>
              <Link to="/employees" className="card-bottom">
                View
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="card-bottom--icon"
                />
              </Link>
            </div>
            <div className="card card-compliance">
              <div className="card-events__title">
                <FontAwesomeIcon
                  icon={faGavel}
                  className="card-events__title--icon"
                />
                Compliance
              </div>
              <div className="card-compliance__body">
                <div className="card-compliance__left">
                  <div className="card-compliance__data card-compliance__left-top">
                    <span className="card-compliance__title">Tax (PAYE)</span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="card-compliance__icon"
                    />
                    <span className="card-compliance__value">$8,500</span>
                  </div>
                  <div className="card-compliance__data card-compliance__left-bottom">
                    <span className="card-compliance__title">Pension</span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="card-compliance__icon"
                    />
                    <span className="card-compliance__value">$8,500</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-events">
              <div className="card-events__title">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="card-events__title--icon"
                />
                Upcoming events
              </div>
              <div className="card-events__body">
                <div className="card-events__wrap card-events__wrap--primary">
                  <div className="card-events__text">PAYE Filing</div>
                  <div className="card-events__due">
                    <img
                      src={alarm}
                      alt="Item due icon"
                      className="card-events__due--icon card-events__due--icon-1"
                    />
                    <div className="card-events__due-date">
                      <span className="card-events__due-date--datecount">
                        Due in 5 days
                      </span>
                      <span className="card-events__due-date--date">
                        10 Aug 2024
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card-events__wrap card-events__wrap--secondary">
                  <div className="card-events__text">Salary Payment</div>
                  <div className="card-events__due">
                    <img
                      src={alarm}
                      alt="Item due icon"
                      className="card-events__due--icon card-events__due--icon-2"
                    />
                    <div className="card-events__due-date">
                      <span className="card-events__due-date--datecount">
                        Due in 15 days
                      </span>
                      <span className="card-events__due-date--date">
                        20 Aug 2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-bottom">
        <div className="home-bottom__body">
          <div className="home-bottom__body--left">
            <div className="card card-graph">
              <img
                src={graph}
                alt="Payroll History Graph"
                className="card-graph__img"
              />
            </div>
          </div>
          <div className="home-bottom__body--right">
            <div className="card card-prevpayroll">
              <div className="card-prevpayroll__top">
                <div className="card-prevpayroll__top-left">
                  <FontAwesomeIcon
                    icon={faChartSimple}
                    className="card-prevpayroll__top-left--icon"
                  />
                  <span className="card-prevpayroll__top-left--text">
                    Previous Payroll
                  </span>
                </div>
                <div className="card-prevpayroll__top-right">
                  <span className="card-prevpayroll__top-right--text">
                    Jun 2024
                  </span>
                </div>
              </div>
              <div className="card-prevpayroll__bottom">
                <div className="card-prevpayroll__bottom--left">
                  $138,650.00
                </div>
                <div className="card-prevpayroll__bottom--right">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="card-prevpayroll__bottom--right-icon"
                  />
                  <span className="card-prevpayroll__bottom--right-text">
                    PAID
                  </span>
                </div>
              </div>
            </div>
            <div className="card card-gif">
              <div className="card-gif__text">
                Focus on growth, we've got this bit
              </div>
              <div className="card-gif__animation">
                <img
                  src={animation}
                  alt="animation"
                  className="card-gif__img"
                />
              </div>
            </div>
            <div className="card  card-pmtaccount">
              <div className="card-pmtaccount__top card-prevpayroll__top">
                <div className="card-prevpayroll__top-left">
                  <FontAwesomeIcon
                    icon={faBuildingColumns}
                    className="card-prevpayroll__top-left--icon"
                  />
                  <span className="card-prevpayroll__top-left--text">
                    Payment Account
                  </span>
                </div>
                <div className="card-prevpayroll__top-right">
                  <span className="card-prevpayroll__top-right--text"></span>
                </div>
              </div>
              <div className="card-pmtaccount__bottom">
                <div className="card-pmtaccount__bottom-left">
                  <img src={zenith} alt="Bank Logo" />
                </div>
                <div className="card-pmtaccount__bottom-right">
                  <h3>Zenith Bank UK</h3>
                  <p>Verified Bank Account</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
