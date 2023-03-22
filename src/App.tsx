import { Route, Routes } from "react-router-dom";
import Button from "./components/Button/Button";
import Home from "./pages/Home/Home";
import CustomHooks from "./pages/Hooks/CustomHooks";
import UseCallback from "./pages/Hooks/UseCallback";
import UseContext from "./pages/Hooks/UseContext";
import UseEffect from "./pages/Hooks/UseEffect";
import UseMemo from "./pages/Hooks/UseMemo";
import UseReducer from "./pages/Hooks/UseReducer";
import UseRef from "./pages/Hooks/UseRef";
import UseState from "./pages/Hooks/UseState";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Button />} />
        <Route path="useState" element={<UseState />} />
        <Route path="useEffect" element={<UseEffect />} />
        <Route path="useRef" element={<UseRef />} />
        <Route path="useContext" element={<UseContext />} />
        <Route path="useCallback" element={<UseCallback />} />
        <Route path="useMemo" element={<UseMemo />} />
        <Route path="useReducer" element={<UseReducer />} />
        <Route path="customHooks" element={<CustomHooks />} />
      </Route>
    </Routes>
  );
}

export default App;
