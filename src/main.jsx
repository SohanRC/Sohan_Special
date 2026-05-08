import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Birthday from "./Birthday.jsx";
import Photo from "./Photo.jsx";
import Letter from "./Letter.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/birthday" element={<Birthday />} />
      <Route path="/photos" element={<Photo />} />
      <Route path="/letter" element={<Letter />} />
    </Routes>
  </BrowserRouter>,
);
