import { Link } from "react-router-dom";
import "./navigation.styles.css";

const NavigationBar = () => {
  return (
    <>
      <header>
        <div className="nav-wrapper">
          <div className="logo-container">
            <Link className="link" to="/home">
              The Gap
            </Link>
          </div>
          <nav>
            <input className="hidden" type="checkbox" id="menuToggle" />
            <label className="menu-btn" htmlFor="menuToggle">
              <div className="menu"></div>
              <div className="menu"></div>
              <div className="menu"></div>
            </label>
            <div className="nav-container">
              <ul className="nav-tabs">
                <li className="nav-tab">
                  <Link className="link" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-tab">
                  <Link className="link" to="attendance">
                    Attendance
                  </Link>
                </li>
                <li className="nav-tab">
                  <Link className="link" to="/result">
                    Result
                  </Link>
                </li>
                <li className="nav-tab">
                  <Link className="link" to="/library">
                    Library
                  </Link>
                </li>
                <li className="nav-tab">
                  <Link className="link" to="/community">
                    Community
                  </Link>
                </li>
                <li className="nav-tab">
                  <Link className="link" to="/profile">
                    <img
                      src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
                      alt="profile_photo"
                      className="profile"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavigationBar;
