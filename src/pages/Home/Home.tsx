import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <button className="transition duration-700 ease-in-out" onClick={() => navigate("/react-hooks")}>
      React Hooks
    </button>
  );
};

export default Home;
