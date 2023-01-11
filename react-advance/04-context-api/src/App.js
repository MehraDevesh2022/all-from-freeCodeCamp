import Header from "./component/Header";
import Button from "./component/Button";
import "./component/style.css"
import {ThemeContextConsumer} from "./component/themeContext";
function App() {
  return (
    <>
    <Header/>
     {/*2n way context consumer => if we want context value inside our Button component then wrap it insdie consumer*/}
    <ThemeContextConsumer>
        {({ theme, toggleTheme }) =>(
          <Button theme={theme} toggleTheme={toggleTheme}/>
      )}
    </ThemeContextConsumer>

    {/* when i don't wanna effect Button component some where according to context value*/}
    {/* <Button   /> */}
    </>
  );
}

export default App;
