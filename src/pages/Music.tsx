import { useState } from "react";
import { Filter } from "lucide-react";
import "./Music.css";
import Song from "../components/Song";

export default function Music() {
  const musicLinks = [
    {
      title: "Song 1",
      description: "Relaxing song",
      url: "https://google.com",
      tag: "Relax",
    },
    {
      title: "Epic Battle",
      description: "Epic combat music",
      url: "https://google.com",
      tag: "Battle",
    },
    {
      title: "Mistery",
      description: "Tension and suspense",
      url: "https://google.com",
      tag: "Tension",
    },
    {
      title: "Ambient",
      description: "Immersive sounds",
      url: "https:/google.com",
      tag: "Exploration",
    },
  ];

  const [selectedTag, setSelectedTag] = useState("All");
  const tags = ["All", ...new Set(musicLinks.map((m) => m.tag))];

  const filteredLinks =
    selectedTag === "All"
      ? musicLinks
      : musicLinks.filter((m) => m.tag === selectedTag);

  return (
    <div className="music-page">
      <h1 className="music-title-page">🎧 Music</h1>

      <div className="music-filters">
        <Filter size={18} style={{ marginRight: "6px" }} />
        {tags.map((tag) => (
          <button
            key={tag}
            className={`filter-button ${selectedTag === tag ? "active" : ""}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="music-grid">
        {filteredLinks.map((item, index) => (
          <Song
            key={index}
            title={item.title}
            description={item.description}
            url={item.url}
            tag={item.tag}
          />
        ))}
      </div>
    </div>
  );
}
