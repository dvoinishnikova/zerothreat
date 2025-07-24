import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  button: '#34a853',
  border: '#ccc',
};

const darkTheme = {
  background: '#121212',
  text: '#ffffff',
  button: '#1f1f1f',
  border: '#444',
};