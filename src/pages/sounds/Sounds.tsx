import SoundCard from "../../components/sound/Sound";
import iphoneRing from "../../assets/sounds/iphone_ring.mp3";
import faucet from "../../assets/sounds/faucet.mp3";
import shower from "../../assets/sounds/shower.mp3";
import door from "../../assets/sounds/door.mp3";
import footsteps from "../../assets/sounds/footsteps.mp3";
import sinister from "../../assets/sounds/sinister.mp3";

import "./Sounds.css";

export default function Sounds() {
  const sounds = [
    { title: "Iphone Ringing", audioSrc: iphoneRing },
    { title: "Faucet", audioSrc: faucet },
    { title: "Shower", audioSrc: shower },
    { title: "Door Slam", audioSrc: door },
    { title: "Footsteps", audioSrc: footsteps },
    { title: "Sinister", audioSrc: sinister },
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
