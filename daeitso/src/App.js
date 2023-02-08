import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Startpage from "./page/Startpage/Startpage";
import Header from "./components/Header/Header";
import Main from "./page/Mainpage/Mainpage";
import Uploadpage from "./page/Uploadpage/Uploadpage";
import AuthLoadingPage from "./page/AuthLoadingpage";
import Mypage from "./page/Mypage/Mypage";
import Postpage from "./page/Postpage/Postpage";
//import AuthLoadingPage from "./page/AuthLoadingpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="/callback" element={<AuthLoadingPage />} />
        <Route path="/main" element={<Main />} />
        <Route path="/upload" element={<Uploadpage />} />
        <Route path="/post/:postId" element={<Postpage />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
