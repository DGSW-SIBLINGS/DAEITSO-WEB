
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Startpage from "./page/Startpage/Startpage";
import Header from "./components/Header/Header";
import Main from "./page/Mainpage/Mainpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="/main" element={<Header />} />
        <Route path="/main2" element={<Main/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

