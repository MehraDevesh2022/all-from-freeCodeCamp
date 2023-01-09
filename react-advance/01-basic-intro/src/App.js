import React from "react";
import Card from "./component/01-Default-props";
function App() {
  return (
   <>
   <Card cardColor = "red" width ={'26px'} height ={'37px'}/>
   <Card cardColor = "blue" width ={'30px'} height ={'40px'}/>
   <Card cardColor = "orange" />
   <Card width ={'35px'} />
</>
  );
}

export default App;
