import React from "react";
import "./component/style.css";
import { FaAngleDoubleRight } from "react-icons/fa";
let url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);
  const [jobIdx, setJobIdx] = React.useState(0);

  async function fetchData() {
    try {
      let res = await fetch(url);
      let jobData = await res.json();
      console.log(jobData);
      setData(jobData);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      return err;
    }
  }


  // side effect
  React.useEffect(() => {
    fetchData();
  }, []);

  //  while data is fething loading.. will shows
  if (loading) {
  return (
    <section className="section loading">
      <h1>Loading...</h1>
    </section>
  );
  }




  return (
    <section className="section">
      {/* heading */}
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        {/* job buttons */}
        <div className="btn-container">
          {data.map((job, index) => {
            // console.log(job);
            return (
              <button
                key={job.id}
                onClick={() => setJobIdx(index)}
                className={`job-btn ${index === jobIdx && "active-btn"}`}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        {/* job-info */}
        <article className="job-info">
          <h3>{data[jobIdx].title}</h3>
          <h4>{data[jobIdx].company}</h4>
          <p className="job-date">{data[jobIdx].dates}</p>
           
             {/* job desc */}
            {data[jobIdx].duties.map((duite, index) => {
              return( <div key={index} className="job-desc">
                 <FaAngleDoubleRight className="job-icon" />
                 <p>{duite}</p>
               </div>)
            })}
          
        </article>
      </div>
       {/* more btn */}
      <button type=" button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
