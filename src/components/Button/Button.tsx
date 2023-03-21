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
  "customHooks",
];

const Button = () => {
  const navigate = useNavigate();
  return (
    <div className="m-20">
      <div className="text-5xl font-bold text-center font-serif bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-500">
        React Hooks
      </div>
      <div className="flex flex-row justify-center mt-16 text-2xl font-semibold gap-8">
        {hooks.map((hook: any) => (
          <button
            className="btn-primary transition duration-700 ease-in-out"
            key={hook}
            onClick={() => navigate(`/react-hooks/${hook}`)}
          >
            {hook}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Button;
