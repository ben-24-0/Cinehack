import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const linkStyle = {
    color: "#cbd5e1",
    textDecoration: "none",
    fontSize: 14,
    opacity: 0.9,
  };

  return (
    <footer
      style={{
        background: "linear-gradient(180deg,#071028,#000)",
        color: "#cbd5e1",
        padding: "20px 16px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <div style={{ fontWeight: 700, fontSize: 16 }}>CineHack.ai</div>

        <nav style={{ display: "flex", gap: 18 }}>
          <a href="#home" style={linkStyle}>
            Home
          </a>
          <a href="#about" style={linkStyle}>
            About
          </a>
          <a href="#prizes" style={linkStyle}>
            Prizes
          </a>
          <a href="#timeline" style={linkStyle}>
            Timeline
          </a>
          <a href="#contact" style={linkStyle}>
            Contact
          </a>
        </nav>

        <div style={{ fontSize: 14, color: "#94a3b8" }}>
          © {year} CineHack.ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
