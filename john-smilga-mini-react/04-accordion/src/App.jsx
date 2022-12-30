import React, {useState} from "react";
import data from "./component/data";
import Question from "./component/Question";
import "./component/style.css"
function App() {
  const [questions , setQuestion] = useState(data)
  // console.log(data);
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
