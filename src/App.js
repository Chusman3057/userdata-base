import "./scss/main.scss";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "antd/dist/antd.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import CreateUser from "./components/CreateUser";
import AllUsers from "./components/AllUsers";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CreateUser />} />
          <Route path="all-users" element={<AllUsers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
