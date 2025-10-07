
import {  BrowserRouter, Routes,  Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Music from './pages/Music';
import Sounds from './pages/Sounds';
import UrlVault from './pages/Urls';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/music" element={<Music />} />
          <Route path="/sfx" element={<Sounds />} />
          <Route path="/urls" element={<UrlVault />} />
        </Routes>
      </main>

    </BrowserRouter>
  );
}
