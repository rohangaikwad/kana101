import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./routes/Characters";
import Study from "./routes/Study";
import Write from "./routes/Write";
import Home from "./routes/Home";
import { MainContextProvider } from "./contexts/MainContext";
import './styles/style.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hiragana" element={<Characters type="hiragana" />} />
        <Route path="/katakana" element={<Characters type="katakana" />} />
        <Route path="/write-hiragana" element={<Write type="hiragana" />} />
        <Route path="/write-katakana" element={<Write type="katakana" />} />
        <Route path="/study-hiragana" element={<Study type="hiragana" />} />
        <Route path="/study-katakana" element={<Study type="katakana" />} />
      </Routes>
    </BrowserRouter>
  </MainContextProvider>
);
