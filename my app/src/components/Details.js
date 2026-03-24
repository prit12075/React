import React from "react";

export default function Details({ text = "" }) {
  const trimmedText = text.trim();
  const wordCount = trimmedText ? trimmedText.split(/\s+/).length : 0;
  const characterCount = text.length;
  const minutesToRead = wordCount ? Math.ceil(wordCount / 200) : 0;

  return (
    <div className="container mt-5">
      <h1>Details</h1>
      <p>Words: {wordCount}</p>
      <p>Characters: {characterCount}</p>
      <p>Time to read: {minutesToRead} minutes</p>
    </div>
  );
}
