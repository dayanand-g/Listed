import { Routes, Route, BrowserRouter } from "react-router-dom"
import LeftBoard from './components/LeftBoard';
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="login" element={<Login/>}/>
            <Route path="/" element={<LeftBoard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
