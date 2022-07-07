import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main-page/main-page";
import DetailsPage from "./pages/details-page/details-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/details/:id" element={<DetailsPage />}></Route>
        <Route path="*" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
