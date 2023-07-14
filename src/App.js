import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import AboutUsPage from "./components/pages/AboutUs/AboutUs";
import Homepage from "./components/pages/HomePage/HomePage";
import CountryStats from "./components/pages/CountryStats/countrystats";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main style={{ minHeight: "85vh", backgroundColor: "white" }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/country-stats" element={<CountryStats/>}></Route>
            <Route path={"/about-us"} element={<AboutUsPage />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
