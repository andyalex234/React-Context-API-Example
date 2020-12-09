import React from "react";
import { useThemeContext, useTwikThemeContext } from "../contexts/ThemeContext";

export default function Card() {
  const dark = useThemeContext();
  const toggleTheme = useTwikThemeContext();

  const themeData = {
    backgroundColor: dark ? "black" : "gray",
    color: dark ? "gray" : "black",
    margin: "1rem",
    padding: "1rem"
  };

  return (
    <>
      <button onClick={toggleTheme}>Change Theme</button>
      <div style={themeData}>Card</div>
    </>
  );
}
