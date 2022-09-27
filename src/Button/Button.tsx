import React from "react";
import { useNavigate } from "react-router-dom";

const hooks = [
  "useState",
  "useEffect",
  "useRef",
  "useContext",
  "useCallback",
  "useMemo",
  "useReducer",
];

const Button = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>React Hooks</h1>
      {hooks.map((hook: any) => (
        <button key={hook} onClick={() => navigate(`/react-hooks/${hook}`)}>
          {hook}
        </button>
      ))}
    </div>
  );
};

export default Button;
