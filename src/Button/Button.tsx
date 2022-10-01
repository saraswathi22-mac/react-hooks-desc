import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css"

const hooks = [
  "useState",
  "useEffect",
  "useRef",
  "useContext",
  "useCallback",
  "useMemo",
  "useReducer",
  "customHooks"
];

const Button = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="h1">React Hooks</h1>
      {hooks.map((hook: any) => (
        <button className="btn" key={hook} onClick={() => navigate(`/react-hooks/${hook}`)}>
          {hook}
        </button>
      ))}
    </div>
  );
};

export default Button;
