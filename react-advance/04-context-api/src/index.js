import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeContext  from './component/themeContext';


console.log("render");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

  <ThemeContext.Provider  value ={"Light"}>
      <App />
  </ThemeContext.Provider>
   
  </>
);

