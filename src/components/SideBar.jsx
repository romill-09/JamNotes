import '../css/sidebar.css';
import NavBar from './NavBar';
import List from './List';
import { AnimatePresence, motion } from "framer-motion";
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const SideBar = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [openedByClick, setOpenedByClick] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setOpenedByClick(!isSidebarOpen); 

  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!openedByClick) {
      setIsHovered(false);
    }
  };

  return (
    <>
      <div className = "container">
        <NavBar 
          handleSidebarToggle = {handleSidebarToggle}
        />
        <motion.div 
          animate = {{
            width: isSidebarOpen || isHovered ? "300px" : " 75px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 11
          },
        }}
          className = {`drawer-container ${isSidebarOpen || isHovered ? 'open' : 'closed'}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className = "listitems">
            <List 
              isSidebarOpen={isSidebarOpen || isHovered}
            />
          </div>
        </motion.div>

        <main>
          {children}
        </main>
      </div>
      <Outlet />
    </>  
  );
};

export default SideBar;
