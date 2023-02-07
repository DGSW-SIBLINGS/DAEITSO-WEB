
import "./App.css";
import Header from "./components/Header/Header";

function App() {
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Startpage from "./page/Startpage/Startpage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Startpage />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
