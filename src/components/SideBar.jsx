import "../css/sidebar.css";
import NavBar from "./NavBar";
import List from "./List";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const SideBar = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [openedByClick, setOpenedByClick] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 601);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setOpenedByClick(!isSidebarOpen);
  };

  const handleMouseEnter = () => {
    if (!isSmallScreen) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!openedByClick && !isSmallScreen) {
      setIsHovered(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 601) {
        setIsSmallScreen(true);
        setIsSidebarOpen(false);
      } else {
        setIsSmallScreen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="container">
        <NavBar handleSidebarToggle={handleSidebarToggle} />
        {isSmallScreen ? (
          <div
            className={`drawer-container ${isSidebarOpen ? "open" : "closed"}`}
            style={{
              width: isSidebarOpen ? "300px" : "0px",
              transition: "width 0.8s ease-in-out",
            }}
          >
            <div className="listitems">
              <List isSidebarOpen={isSidebarOpen} />
            </div>
          </div>
        ) : (
          <motion.div
            animate={{
              width: isSidebarOpen || isHovered ? "300px" : "75px",
              transition: {
                duration: 0.5,
                type: "spring",
                damping: 11,
              },
            }}
            className={`drawer-container ${
              isSidebarOpen || isHovered ? "open" : "closed"
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="listitems">
              <List isSidebarOpen={isSidebarOpen || isHovered} />
            </div>
          </motion.div>
        )}
        <main className="main-content">{children}</main>
      </div>
      <Outlet />
    </>
  );
};

export default SideBar;
