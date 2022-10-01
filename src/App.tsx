import Button from "./Button/Button";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import UseState from "./Components/UseState";
import UseEffect from "./Components/UseEffect";
import UseRef from "./Components/UseRef";
import UseContext from "./Components/UseContext";
import UseReducer from "./Components/UseReducer";
import CustomHooks from "./Components/CustomHooks";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/react-hooks' >
          <Route index element={<Button />} />
          <Route path='useState' element={<UseState />} />
          <Route path='useEffect' element={<UseEffect />} />
          <Route path='useRef' element={<UseRef />} />
          <Route path='useContext' element={<UseContext />} />
          {/* <Route path='useCallback' element={<UseState />} />
          <Route path='useMemo' element={<UseState />} /> */}
          <Route path='useReducer' element={<UseReducer />} />
          <Route path='customHooks' element={<CustomHooks />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
