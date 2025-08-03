import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import ProjectActivity from "./components/ProjectActivity";
import CampShare from "./pages/CampShare";
import FindME from "./pages/FindME";
import CodeBrew from "./pages/CodeBrew";
import DevPrep from "./pages/DevPrep";
import TicketON from "./pages/TicketON";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <main className="main-content">
                  <About />
                  <Education />
                  <ProjectActivity />
                </main>
              </>
            }
          />
          <Route path="/campshare" element={<CampShare />} />
          <Route path="/findme" element={<FindME />} />
          <Route path="/codebrew" element={<CodeBrew />} />
          <Route path="/devprep" element={<DevPrep />} />
          <Route path="/ticketon" element={<TicketON />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
