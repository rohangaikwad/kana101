import ReactDOM from "react-dom/client";
import { MainContextProvider } from "./contexts/MainContext";
import './styles/style.scss';
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainContextProvider>
    <App />
  </MainContextProvider>
);
