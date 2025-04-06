import { ReactNode } from "react";
import {
  faBars,
  faUser,
  faGear,
  faHouse,
  faComments,
  faGhost,
  faMagnifyingGlass,
  faBell,
  faShareFromSquare,
  faBookmark,
  faArrowsUpDownLeftRight,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

// links do not go anywhere and are just placeholders (except github link).
function App() {
  return (
    <>
      <div id="base-layout">
        <Sidebar>
          <Nav />
        </Sidebar>
        <Header>
          <Searchbar />
          <HeaderBtns />
          <HeaderNotifications />
        </Header>
        <MainContent>
          <ProjectSection />
          <Announcements>
            <Trending />
          </Announcements>
        </MainContent>
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

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <div id="header">
      <image id="profile-pic-1"></image>
      <p className="profile-text-small">Hey,</p>
      <p className="profile-text-large">User Name (@username)</p>
      <image id="profile-pic-2"></image>
      <p className="profile-text-medium">User Name</p>
      {children}
    </div>
  );
};

const Searchbar = () => {
  return (
    <div id="search-bar">
      <label htmlFor="search-field"></label>
      <input id="search-field" type="text" placeholder="Search Here..."></input>
      <button id="search-btn">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
};

const HeaderBtns = () => {
  return (
    <div id="header-btns">
      <button id="new-btn">New</button>
      <button id="upload-btn">Upload</button>
      <button id="share-btn">Share</button>
    </div>
  );
};

const HeaderNotifications = () => {
  return (
    <button id="notification-btn">
      <FontAwesomeIcon icon={faBell} />
    </button>
  );
};

const MainContent = ({ children }: { children: ReactNode }) => {
  return <div id="main-content">{children}</div>;
};

const ProjectSection = () => {
  const projectsList = [
    {
      title: "Project 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a reiciendis ducimus!",
      key: "1",
    },
    {
      title: "Project 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a reiciendis ducimus!",
      key: "2",
    },
    {
      title: "Project 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a reiciendis ducimus!",
      key: "3",
    },
    {
      title: "Project 4",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a reiciendis ducimus!",
      key: "4",
    },
    {
      title: "Project 5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a reiciendis ducimus!",
      key: "5",
    },
    {
      title: "Project 6",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a reiciendis ducimus!",
      key: "6",
    },
    {
      title: "Project 7",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a reiciendis ducimus!",
      key: "7",
    },
    {
      title: "Project 8",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a reiciendis ducimus!",
      key: "8",
    },
    {
      title: "Project 9",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a reiciendis ducimus!",
      key: "9",
    },
    {
      title: "Project 10",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a reiciendis ducimus!",
      key: "10",
    },
  ];

  return (
    <div id="projects">
      <div id="projects-header">Your Projects</div>
      <div id="projects-grid">
        {projectsList.map((project) => (
          <div
            className={`${project.title.replace(" ", "-").toLowerCase()} card`}
            key={project.key}
          >
            <div
              className={`${project.title.replace(" ", "-").toLowerCase()}-title card-title`}
            >
              {project.title}
            </div>
            <div
              className={`${project.title.replace(" ", "-").toLowerCase()}-content card-content`}
            >
              {project.content}
            </div>
            <div
              className={`${project.title.replace(" ", "-").toLowerCase()}-btns card-btns`}
            >
              <a href="" id="bookmark">
                <FontAwesomeIcon icon={faBookmark} />
              </a>
              <a href="" id="share">
                <FontAwesomeIcon icon={faShareFromSquare} />
              </a>
              <a href="" id="fullscreen">
                <FontAwesomeIcon icon={faArrowsUpDownLeftRight} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Announcements = ({ children }: { children: ReactNode }) => {
  const announcementsList = [
    {
      title: "Announcement 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a reiciendis ducimus!",
      key: "1",
    },
    {
      title: "Announcement 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a reiciendis ducimus!",
      key: "2",
    },
    {
      title: "Announcement 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis a reiciendis ducimus!",
      key: "3",
    },
  ];

  return (
    <div id="main-sidebar">
      <div id="announcements-header">Announcements</div>
      <div id="announcement-card">
        {announcementsList.map((announcement) => (
          <div
            className={`${announcement.title.toLowerCase()}`}
            key={announcement.key}
          >
            <div
              className={`${announcement.title.replace(" ", "-").toLowerCase()}-title a-card-title`}
            >
              {announcement.title}
            </div>
            <div
              className={`${announcement.title.replace(" ", "-").toLowerCase()}-content a-card-content`}
            >
              {announcement.content}
            </div>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

const Trending = () => {
  const trendingList = [
    {
      title: "Trending 1",
      username: "@tom",
      profilePic: "",
      key: "1",
    },
    {
      title: "Trending 2",
      username: "@tim",
      profilePic: "",
      key: "2",
    },
    {
      title: "Trending 3",
      username: "@matt",
      profilePic: " ",
      key: "3",
    },
  ];
  return (
    <>
      <div id="trending-header">Trending</div>
      <div id="trending-card">
        {trendingList.map((item) => (
          <>
            <div
              className={`${item.title.replace(" ", "-").toLowerCase()}-title b-card-title`}
            >
              {item.title}
            </div>
            <div
              className={`${item.title.replace(" ", "-").toLowerCase()}-username b-card-username`}
            >
              {item.username}
            </div>
            <FontAwesomeIcon
              icon={faUser}
              className={`${item.key}-icon user-icon`}
            />
          </>
        ))}
      </div>
    </>
  );
};
export default App;
