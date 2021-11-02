import React from "react";

export default function Header({ text }) {
  return (
    <div
      style={{ backgroundColor: "grey", padding: "5px 10px", marginBottom: 20, textAlign: "center"}}
    >
      <h1>{text}</h1>
    </div>
  );
}
