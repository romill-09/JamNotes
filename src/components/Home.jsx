import SideBar from './SideBar';
import Notes from "./Notes";
import Archive from "./Archive";
import Trash from "./Trash";
import '../css/home.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
      <Router>
        <div className='container'>
          <SideBar>
            <Routes>
              <Route path="/notes" element={<Notes />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/trash" element={<Trash />} />
            </Routes>
          </SideBar>
        </div>
      </Router>
  )
}

export default Home;
