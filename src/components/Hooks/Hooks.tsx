import CustomHooks from "./CustomHooks";
import UseCallback from "./UseCallback";
import UseContext from "./UseContext";
import UseEffect from "./UseEffect";
import UseMemo from "./UseMemo";
import UseReducer from "./UseReducer";
import UseRef from "./UseRef";
import UseState from "./UseState";

export const tabs = [
  {
    id: 1,
    name: "useState",
    element: <UseState />,
  },
  {
    id: 2,
    name: "useEffect",
    element: <UseEffect />,
  },
  {
    id: 3,
    name: "useRef",
    element: <UseRef />,
  },
  {
    id: 4,
    name: "useContext",
    element: <UseContext />,
  },
  {
    id: 5,
    name: "useCallback",
    element: <UseCallback />,
  },
  {
    id: 6,
    name: "useMemo",
    element: <UseMemo />,
  },
  {
    id: 7,
    name: "useReducer",
    element: <UseReducer />,
  },
  {
    id: 8,
    name: "CustomHooks",
    element: <CustomHooks />,
  },
];
