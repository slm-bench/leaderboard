"use client"

import React, { useState } from 'react';

export default function HomeClient() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <iframe
        src={"https://www.ieltsviet.edu.vn/"}
        title="embedded"
        className="w-full h-screen"
      />
    </div>
  )
}