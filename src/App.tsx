import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Music from "./pages/music/Music";
import Sounds from "./pages/sounds/Sounds";
import UrlVault from "./pages/urls/Urls";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/sfx" element={<Sounds />} />
          <Route path="/urls" element={<UrlVault />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
