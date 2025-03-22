import { ReactNode } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div id="base-layout">
        <SideBar>
          <Nav />
        </SideBar>
      </div>
    </>
  );
}

const SideBar = ({ children }: { children: ReactNode }) => {
  return (
    <div id="sideBar">
      <div id="sideBarHeader">
        <a href="" id="sideBarLogo"></a>
        <p id="sideBarTitle">Dashboard</p>
      </div>
      {children}
    </div>
  );
};

const Nav = () => {
  return (
    <nav id="sideBarNav">
      <a href="" id="homePage">
        Home
      </a>
      <a href="" id="profilePage">
        Profile
      </a>
      <a href="" id="settingsPage">
        Settings
      </a>
      <a href="" id="supportPage">
        Support
      </a>
      <a href="" id="privacyPage">
        Privacy
      </a>
    </nav>
  );
};
export default App;
