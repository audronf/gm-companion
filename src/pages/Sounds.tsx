import sound1 from "../assets/sounds/sound1.mp3";
import sound2 from "../assets/sounds/sound2.mp3";
import sound3 from "../assets/sounds/sound3.mp3";
import SoundCard from "../components/Sound";
import "./Sounds.css";

export default function Sounds() {
  const sounds = [
    { title: "Sound 1", audioSrc: sound1 },
    { title: "Sound 2", audioSrc: sound2 },
    { title: "Sound 3", audioSrc: sound3 },
  ];

  return (
    <div className="sounds-page">
      <h1 className="sounds-title">🎵 Sounds</h1>
      <div className="sounds-grid">
        {sounds.map((sound, index) => (
          <SoundCard
            key={index}
            title={sound.title}
            audioSrc={sound.audioSrc}
          />
        ))}
      </div>
    </div>
  );
}
