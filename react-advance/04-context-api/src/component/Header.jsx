import React from 'react'
import ThemeContext from './themeContext';

export default function Header() {

 
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <header className="light-theme">
          <h2>{theme} theme</h2>
        </header>
      )}
    </ThemeContext.Consumer>
  );
}
