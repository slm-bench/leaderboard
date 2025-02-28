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
      overflow: "hidden"
    }}>
      <iframe
        src={"https://slm-bench-leaderboard.vercel.app/"}
        title="embedded"
        frameBorder="0"
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      />
      <style jsx global>{`
        iframe::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}