import { Link2, Music, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>GM Companion</h1>
        <p>Quickly access your essential tools and resources.</p>
      </div>
      <div className="home-grid">
        <Link to="/music" className="home-card">
          <Music size={28} />
          <h3>Music</h3>
          <p>Find playlists and tracks to set the mood for your sessions.</p>
        </Link>

        <Link to="/sounds" className="home-card">
          <Volume2 size={28} />
          <h3>Sounds</h3>
          <p>Play sound effects to bring your scenes to life.</p>
        </Link>

        <Link to="/url-vault" className="home-card">
          <Link2 size={28} />
          <h3>URL Vault</h3>
          <p>Store and access all your important links in one place.</p>
        </Link>
      </div>
    </div>
  );
}
