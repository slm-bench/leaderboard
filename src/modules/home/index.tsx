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
      justifyContent: "center"
    }}>
      <iframe
        src={"https://slm-bench-leaderboard.vercel.app/"}
        title="embedded"
        style={{
          width: "100%",
          height: "100vh"
        }}
      />
    </div>
  )
}