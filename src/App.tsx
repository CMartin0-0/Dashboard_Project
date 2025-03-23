import { ReactNode } from "react";
import {
  faBars,
  faUser,
  faGear,
  faHouse,
  faComments,
  faGhost,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

function App() {
  return (
    <>
      <div id="base-layout">
        <Sidebar>
          <Nav />
        </Sidebar>
      </div>
    </>
  );
}

const Sidebar = ({ children }: { children: ReactNode }) => {
  return (
    <div id="sidebar">
      <div id="sidebar-header">
        <FontAwesomeIcon icon={faBars} id="sidebar-icon" />
        <p id="sidebar-title">Dashboard</p>
      </div>
      {children}
      <p id="gh-link">
        <FontAwesomeIcon icon={faGithub} id="gh-icon" />
        <a href="https://github.com/CMartin0-0">Caleb Martin</a>
      </p>
    </div>
  );
};

const Nav = () => {
  return (
    <nav id="sidebar-nav">
      <FontAwesomeIcon icon={faHouse} id="home-icon" className="nav-icon" />
      <a href="" id="home-page">
        Home
      </a>
      <FontAwesomeIcon icon={faUser} id="profile-icon" className="nav-icon" />
      <a href="" id="profile-page">
        Profile
      </a>
      <FontAwesomeIcon icon={faGear} id="settings-icon" className="nav-icon" />
      <a href="" id="settings-page">
        Settings
      </a>
      <FontAwesomeIcon
        icon={faComments}
        id="support-icon"
        className="nav-icon"
      />
      <a href="" id="support-page">
        Support
      </a>
      <FontAwesomeIcon icon={faGhost} id="privacy-icon" className="nav-icon" />
      <a href="" id="privacy-page">
        Privacy
      </a>
    </nav>
  );
};
export default App;
