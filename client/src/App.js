import logo from "./logo.svg";
import "./App.css";
import HomePage from "./views/HomePage";
import DetailPage from "./views/DetailPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
