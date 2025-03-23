import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;


// import React, { useEffect, useState } from "react";
// import { fetchBackendMessage } from "./api";

// function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     fetchBackendMessage().then(setMessage);
//   }, []);

//   return <h1>{message}</h1>;
// }

// export default App;
