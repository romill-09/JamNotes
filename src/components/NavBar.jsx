import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SearchBar from "./SearchBar";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ClearIcon from "@mui/icons-material/Clear";
import { signOut, auth } from "../firebase";

const NavBar = ({ handleSidebarToggle }) => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(true);
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setTimeout(async () => {
      try {
        await signOut(auth);
        console.log("User logged out successfully");
        navigate("/signup");
      } catch (error) {
        console.error("Error logging out:", error.message);
      }
    }, 1000);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setIsSearchBarVisible(true);
        setIsMobileSearchActive(false);
      } else {
        setIsSearchBarVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearchIconClick = () => {
    setIsMobileSearchActive(true);
  };

  const handleMobileSearchClose = () => {
    setIsMobileSearchActive(false);
  };

  return (
    <nav className="navbar-container">
      <div
        className="menu"
        aria-expanded="true"
        aria-label="Main Menu"
        role="button"
        tabIndex="0"
        onClick={handleSidebarToggle}
      >
        <MenuIcon />
      </div>

      <div className="logo">
        <p>LOGO</p>
      </div>

      {isSearchBarVisible ? (
        <SearchBar />
      ) : (
        <div className="search-icon" onClick={handleSearchIconClick}>
          <SearchIcon />
        </div>
      )}

      <div className="icons2">
        <div className="profile">
          <PersonOutlineIcon alt="profile" />
        </div>
        <div className="logout">
          <LogoutIcon onClick={handleLogout} />
        </div>
      </div>

      {isMobileSearchActive && (
        <div className="mobile-search-bar">
          <SearchBar />
          <button className="close-search" onClick={handleMobileSearchClose}>
            <ClearIcon />
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
