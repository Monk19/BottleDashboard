import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import DashBoard from "./DashBoard/DashBoard";
import Configuration from "./Management/Management";
import Help from "./Help/Help";
import "./SideNavBar.modules.css";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import LiveHelpOutlinedIcon from "@material-ui/icons/LiveHelpOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
function SideNavBar() {
  return (
    <>
      <Router className="container-fluid main">
        <div className="row nav-div">
          <nav className="col-md-3">
            <ul className="side-nav-elements">
              <li className="row">
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

          <Switch className="col-xl-7 main-disp">
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
