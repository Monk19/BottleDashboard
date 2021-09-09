import React, { useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard";
import Configuration from "./Management/Management";
import Help from "./Help/Help";
import "./SideNavBar.modules.css";

import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import LiveHelpOutlinedIcon from "@material-ui/icons/LiveHelpOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import HorizontalSplitIcon from "@material-ui/icons/HorizontalSplit";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
function SideNavBar() {
  const [sideBarActive, setBarStatus] = useState(false);
  const sideBarHandeler = () => {
    setBarStatus(!sideBarActive);
  };
  return (
    <>
      <Router>
        <div className="nav-disp">
          {sideBarActive ? (
            <nav className="Side-bar-overlay" onClick={sideBarHandeler}>
              <ul className="sidebar-list">
                <li>
                  <ClearOutlinedIcon />
                </li>
                <li>
                  <DashboardOutlinedIcon />
                  <Link exact to="/">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <TuneOutlinedIcon />
                  <Link to="/Configuration">Configuration</Link>
                </li>
                <li>
                  <LiveHelpOutlinedIcon />
                  <Link to="/Help">Help</Link>
                </li>
                <li>
                  <SettingsOutlinedIcon />
                  <Link to="/Settings">Settings</Link>
                </li>
              </ul>
            </nav>
          ) : (
            ""
          )}
          <div className="sidbar-toggle">
            <HorizontalSplitIcon
              className="activate-Sidebar"
              onClick={sideBarHandeler}
            />
          </div>
          <Switch className="col-md-7 main-disp">
            <Route exact path="/">
              <DashBoard />
            </Route>
            <Route exact path="/Configuration">
              <Configuration />
            </Route>
            <Route exact path="/Help">
              <Help />
            </Route>
            <Route exact path="/Settings">
              <DashBoard />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default SideNavBar;
