import { useState } from "react";
import { Filter } from "lucide-react";
import "./Music.css";
import Song from "../../components/song/Song";

export default function Music() {
  const musicLinks = [
    {
      title: "Eldritch",
      description: "Suspense ambience",
      url: "https://www.youtube.com/watch?v=9QOBpjfZdGQ",
      tag: "Suspense",
    },
    {
      title: "Dark",
      description: "Horror background",
      url: "https://www.youtube.com/watch?v=Z6ylGHfLrdI",
      tag: "Eerie",
    },
    {
      title: "Asylum",
      description: "Dark ambience",
      url: "https://www.youtube.com/watch?v=8_GADiwSm_M",
      tag: "Horror",
    },
    {
      title: "Ominous",
      description: "Creepy music",
      url: "https://www.youtube.com/watch?v=mlLGwW7eHTI&t=56s",
      tag: "Horror",
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
