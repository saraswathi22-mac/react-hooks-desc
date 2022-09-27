import Button from "./Button/Button";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import UseState from "./Components/UseState";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/react-hooks' >
          <Route index element={<Button />} />
          <Route path='useState' element={<UseState />} />
          {/* <Route path='useEffect' element={<UseEffect />} />
          <Route path='useRef' element={<UseState />} />
          <Route path='useContext' element={<UseState />} />
          <Route path='useCallback' element={<UseState />} />
          <Route path='useMemo' element={<UseState />} />
          <Route path='useReducer' element={<UseState />} />
          <Route path='useState' element={<UseState />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
