import UrlCard from "../components/UrlCard";
import "./Urls.css";

export default function UrlVault() {
  const urls = [
    {
      title: "URL 1",
      url: "https://google.com",
      description: "URL 1",
    },
    {
      title: "URL 2",
      url: "https://google.com",
      description: "URL 2",
    },
    {
      title: "URL 3",
      url: "https://google.com",
      description: "URL 3",
    },
    {
      title: "URL 4",
      url: "https://google.com",
      description: "URL 4",
    },
    {
      title: "URL 5",
      url: "https://google.com",
      description: "URL 5",
    },
    {
      title: "URL 6",
      url: "https://google.com",
      description: "URL 6",
    },
  ];

  return (
    <div className="vault-page">
      <h1 className="vault-title">🔐 URL Vault</h1>
      <div className="vault-grid">
        {urls.map((item, index) => (
          <UrlCard
            key={index}
            title={item.title}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
}
