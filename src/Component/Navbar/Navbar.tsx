import React, { useEffect, useState, useContext } from "react";
import "./Navbar.css";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";

const Navbar: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [profilePicture, setProfilePicture] = useState<string>("");
 

  useEffect(() => {
    if (sessionStorage.getItem("loggedIn") === "true") {
      setLoggedIn(true);
      setProfilePicture(sessionStorage.getItem("imageUrl") as string);
    }
  }, [sessionStorage.getItem("loggedIn")]);

  return (
    <div className="navbarContainer">
      <div className="left">
        <button id="sidebarToggle" >
          <MenuIcon id="icon" />
        </button>

        <div id="homeBtn" onClick={() => (window.location.pathname = "/")}>
          <YouTubeIcon id="icon" style={{ color: "red" }} />
          <h1>SidTube</h1>
        </div>
      </div>
      <div className="center">
        <input id="searchBar" placeholder="Search" />
        <button id="searchButton">
          <SearchIcon style={{ color: "grey" }} />
        </button>
      </div>
      <div className="right">
        <button
          id="createVideo"
          onClick={() => (window.location.pathname = "/upload")}
        >
          <VideoCallIcon id="icon" />
        </button>
        {loggedIn ? (
          <img
            id="profilePic"
            src={profilePicture}
            onClick={() => (window.location.pathname = "/account")}
          />
        ) : (
          <button
            id="signInButton"
            onClick={() => {
              window.location.pathname = "signin";
            }}
          >
            {" "}
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
