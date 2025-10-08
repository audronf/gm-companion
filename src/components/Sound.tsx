import "./Sound.css";

export default function SoundCard({
  title,
  audioSrc,
}: {
  title: string;
  audioSrc: string;
}) {
  return (
    <div className="sound-card">
      <h3 className="sound-title">{title}</h3>
      <audio controls className="audio-player">
        <source src={audioSrc} type="audio/mp3" />
        Unsupported browser.
      </audio>
    </div>
  );
}
