import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Trash } from '@mui/icons-material';
import '../css/list.css';
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

const List = ({ isSidebarOpen}) => {
   
  const Navlist = [
    { id: 1, name: "Notes", icon: <Lightbulb />, path: "/notes" },
    { id: 2, name: "Archive", icon: <Archive />, path: "/archive" },
    { id: 3, name: "Trash", icon: <Trash />, path: "/trash" },
  ];

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: { duration: 0.5 },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="List-container">

      {Navlist.map(list => (
        <NavLink 
          to = {list.path} 
          key={list.id} 
          className = "List-item" 
        >
          
          <div className="List-icon">
            {list.icon}
          </div>
            
            <AnimatePresence>
              {isSidebarOpen && (
                <motion.div
                  className="List-name"
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  {list.name}
                </motion.div>
              )}
            </AnimatePresence>
        
        </NavLink>
      ))}
    
    </section>
  );
};

export default List;
