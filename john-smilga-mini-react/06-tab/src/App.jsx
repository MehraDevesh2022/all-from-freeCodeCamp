import React from "react";
import "./component/style.css";
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

  React.useEffect(() => {
    fetchData();
  }, []);

  //  while data is fething
  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>

      {/* job buttons */}
      <div className="job-center">
        <div className="btn-container">
           {data.map((job ,index) =>{
            // console.log(job);
                 return (
                   <button
                   key={job.id}
                     className={`job-btn ${index ===jobIdx && 'acive-btn' }`}
                     onClick={() => setJobIdx(index)}
                   >
                     {job.company}
                   </button>
                 );
           })}
         
        </div>
        {/* job-info */}
        <article className="job-info">
          <h3>title</h3>
          <h4>company</h4>
          <p className="job-date">Date</p>
          <div className="job-desc">
            <div className="job-icon">{"==>"}</div>
            <p>duty</p>
            <p>duty</p>
            <p>duty</p>
          </div>
        </article>
      </div>

      <button type=" button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
