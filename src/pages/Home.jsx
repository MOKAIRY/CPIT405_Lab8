import { useState } from "react";

export default function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [shortCode, setShortCode] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  // Mini database stored in memory
  const urlDatabase = {};

  const handleShorten = () => {
    if (!longUrl || !shortCode) {
      alert("Please enter both fields!");
      return;
    }

    urlDatabase[shortCode] = longUrl;

    const newShort = `https://cpt405.co/${shortCode}`;
    setShortUrl(newShort);
  };

  return (
    <div className="container">
      <h1>Link Shrinker</h1>

      <label>Long URL:</label>
      <input
        type="text"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="Enter long URL"
      />

      <label>Enter short code:</label>
      <input
        type="text"
        value={shortCode}
        onChange={(e) => setShortCode(e.target.value)}
        placeholder="custom-short-code"
      />

      <button onClick={handleShorten}>Shorten</button>

      {shortUrl && (
        <div className="short-box">
          <p>
            <b>Short URL</b>
          </p>
          <a href={longUrl} target="_blank">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}
