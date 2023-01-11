import React from 'react'
import {ThemeContextConsumer} from './themeContext';

export default function Header() {

 
  return (
    <ThemeContextConsumer>
      {({theme}) => (
        <header className={`${theme}-theme`}>
          <h2>{theme} theme </h2>
        </header>
      )}
    </ThemeContextConsumer>
  );
}
