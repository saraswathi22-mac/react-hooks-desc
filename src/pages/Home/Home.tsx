import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <button className="btn-home" onClick={() => navigate("/react-hooks")}>
      React Hooks
    </button>
  );
};

export default Home;
