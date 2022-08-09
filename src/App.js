import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./routes/Characters";
import Study from "./routes/Study";
import Write from "./routes/Write";
import Home from "./routes/Home";
import { useEffect } from "react";
import useScreen from "./hooks/useScreen";
import usePlatform from "./hooks/usePlatform";

const App = () => {

    const { appHeight, height } = useScreen();
    const { isMobile, isDesktop } = usePlatform();

    useEffect(() => {
        if (isDesktop) {
          document.documentElement.style.setProperty('--app-height', `${height}px`);
        }
    }, [height, isDesktop])

    useEffect(() => {
        if (isMobile) {
          document.documentElement.style.setProperty('--app-height', `${appHeight}px`);
        }
        
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.add("light")
        }
    }, [])



    return <BrowserRouter>
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
}

export default App;