import React from "react";

const GifBackground = () => {
  return (
    <div style={{ width: "100%", height: 0, paddingBottom: "45%", position: "relative" }}>
      <iframe
        src="https://giphy.com/embed/NKEt9elQ5cR68"
        width="100%"
        height="100%"
        style={{ position: "absolute" }}
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
        title="GIF Background"
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/art-pixel-city-NKEt9elQ5cR68">via GIPHY</a>
      </p>
    </div>
  );
};

export default GifBackground;
