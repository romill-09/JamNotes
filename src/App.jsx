import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Notes from "./components/Notes";
import Archive from "./components/Archive";
import Trash from "./components/Trash";

function App() {

  return (
    <>
    <Router>
      <SideBar>
        <Routes>
          <Route path="/notes" element={<Notes />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/trash" element={<Trash />} />
        </Routes>
      </SideBar>  
    </Router>
    </>
  );
}

export default App;
