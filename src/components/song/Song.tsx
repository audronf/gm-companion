import { ExternalLink } from "lucide-react";
import "./Song.css";

export default function Song({
  title,
  description,
  url,
  tag,
}: {
  title: string;
  description: string;
  url: string;
  tag: string;
}) {
  const handleOpen = () => window.open(url, "_blank");

  return (
    <div className="music-card">
      <div className="music-card-header">
        <span className="music-tag">{tag}</span>
        <h3 className="music-card-title">{title}</h3>
      </div>

      <p className="music-card-description">{description}</p>

      <div className="music-card-footer">
        <button className="music-card-button" onClick={handleOpen}>
          <ExternalLink size={18} style={{ marginRight: "6px" }} />
          Abrir
        </button>
      </div>
    </div>
  );
}
