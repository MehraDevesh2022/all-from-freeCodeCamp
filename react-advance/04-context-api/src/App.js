import Header from "./component/Header";
import Button from "./component/Button";
import "./component/style.css"
import ThemeContext from "./component/themeContext";
function App() {
  return (
    <>
    <Header/>
     {/*2n way context consumer => if we want context value inside our Button component then wrap it insdie consumer*/}
    <ThemeContext.Consumer>
      {theme =>(
          <Button  theme ={theme}/>
      )}
    </ThemeContext.Consumer>

    {/* when i don't wanna effect Button component some where according to context value*/}
    <Button   />
    </>
  );
}

export default App;
