import React from "react";
import "./styles.css";
import Card from "./components/Card";
import ThemeContext from "./contexts/ThemeContext";

export default function App() {
  return (
    <div className="App">
      <h1>Context API and React Hook</h1>
      <ThemeContext>
        <Card />
      </ThemeContext>
      <h2>Example!</h2>
    </div>
  );
}
