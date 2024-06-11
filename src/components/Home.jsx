import SideBar from './SideBar';
import Notes from "./Notes";
import Archive from "./Archive";
import Trash from "./Trash";
import '../css/home.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <div className='container'>
      <Router>
        <SideBar>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/trash" element={<Trash />} />
          </Routes>
        </SideBar>
      </Router>
    </div>

  )
}

export default Home;
