import { BrowserRouter, Route, Routes } from "react-router-dom";
import Startpage from "./page/Startpage/Startpage";
import Header from "./components/Header/Header";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="/main" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
