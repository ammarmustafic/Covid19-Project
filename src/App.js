import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Project/LoginForm/login";
import Quotes from "./Project/List of quotes/quotes";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Quotes" element={<Quotes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
