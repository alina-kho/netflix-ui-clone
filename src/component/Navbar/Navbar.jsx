import React, { useState } from "react";
import "./navbar.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { Avatar } from "@mui/material";
import { ArrowDropDownRounded } from "@mui/icons-material";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset > 0 ? true : false);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix logo"
          />
          <span>Home</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New</span>
          <span>My list</span>
        </div>
        <div className="right">
          <SearchRoundedIcon className="icon" />
          <span>KID</span>
          <NotificationsRoundedIcon className="icon" />
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/8/87/David_Beckham_UNICEF_%28cropped%29.jpg"
            alt="avatar image"
            className="icon"
          />
          <div className="profile-menu">
            <ArrowDropDownRounded className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
