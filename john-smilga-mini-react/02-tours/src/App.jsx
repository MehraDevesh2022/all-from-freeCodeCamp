import "./component/style.css";
import React, { useState, useEffect } from "react";
import Loading from "./component/Loding";
import Tours from "./component/Tours";

function App() {
  const [loading, setLoading] = useState(true);
  const [tourData, setTourData] = useState([]);

  function removeCard(id) {
    const newData = tourData.filter((data) => {
      return data.id != id;
    });
    setTourData((prvData) => [...newData]);
  }

  function fetchApi() {
    setLoading(true);
    fetch("https://course-api.com/react-tours-project")
      .then((res) => res.json())
      .then((data) => {
        setTourData([...data]);
        setLoading(false);
      });
  }

  useEffect(function () {
    fetchApi();
  }, []);



  // when all cards are wiped out(delted) and fecthing or in inital state when card array ==0
  if (loading === true) {
    return <Loading />;
  }

 // when all cards are deleted then show button to refrece again( load cards )
  if (tourData.length == 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button onClick={() => fetchApi()} className="btn">
            refresh
          </button>
        </div>
      </main>
    );
  }
  // when all other condition fails then show cards
  return (
    <main>
      <Tours tours={tourData} deleteHandler={removeCard} />
    </main>
  );
}

export default App;
