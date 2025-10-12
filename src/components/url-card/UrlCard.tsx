import "./UrlCard.css";

export default function UrlCard({ title, description, url }: {title: string; description: string; url: string;}) {
  const handleOpen = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        {description && <p className="card-description">{description}</p>}
      </div>

      <div className="card-footer">
        <button className="card-button" onClick={handleOpen}>
          Go
        </button>
      </div>
    </div>
  );
}
