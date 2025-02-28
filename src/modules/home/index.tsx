"use client"

import React from 'react';

export default function HomeClient() {
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden" // Prevents outer scrollbars
    }}>
      <iframe
        src={"https://slm-bench-leaderboard.vercel.app/"}
        title="embedded"
        frameBorder="0"
        style={{
          width: "100%",
          height: "100vh",
          border: "none", // Explicitly remove border
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE and Edge
        }}
      />
      {/* CSS to hide webkit scrollbars (Chrome, Safari) */}
      <style jsx global>{`
        iframe::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}