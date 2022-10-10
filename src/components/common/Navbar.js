import React from "react";
import "./assets/navbarStyle.scss";

//image
import Logo from "./assets/logo.png";

//Avatar component
import { Avatar } from "@mui/material";

//Icons
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-main">
          <div className="logo">
            <a href="#">
              <img src={Logo} />
            </a>
          </div>

          <div className="menu">
            <a href="#">Campaigns</a>

            <a href="#">Segments</a>

            <a href="#">Coupons</a>

            <a href="#">Designs</a>

            <a href="#">Integrations</a>
          </div>

          <div className="profile">
            <a href="">
              <MailOutlineOutlinedIcon />
            </a>
            <a href="">
              <DateRangeRoundedIcon />
            </a>
            <a href="">
              <NotificationsActiveRoundedIcon />
            </a>
            <Avatar src="">P</Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
