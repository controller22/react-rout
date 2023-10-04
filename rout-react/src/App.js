import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Temp from "./temp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="temp" element={<Temp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
