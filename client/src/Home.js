import React from "react";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/"); // Redirect to Login page after logout
  };

  return (
    <div>
      <h2>Welcome to Home Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
