import React, { useContext } from "react";

export const ThemeContext = React.createContext(false);
export const TwikThemeContext = React.createContext();

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function useTwikThemeContext() {
  return useContext(TwikThemeContext);
}

export default function Theme({ children }) {
  const [darkMode, setDarkMode] = React.useState(false);

  //Pass custome hook to handle

  function toggleDarkMode() {
    setDarkMode((darkMode) => !darkMode);
  }

  return (
    <ThemeContext.Provider value={darkMode}>
      <TwikThemeContext.Provider value={toggleDarkMode}>
        {children}
      </TwikThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
