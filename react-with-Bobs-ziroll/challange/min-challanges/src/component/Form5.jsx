import React from "react";
import "./formStyle.css";
export default function Submit() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    comment: "",
    checked: true,
    employement: "",
    favColor: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prvData) => {
      return {
        ...prvData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };


  const submitHandler =(event)=>{
  // event.preventdefault(); 
// sendToapi(formData);
console.log(formData);
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        {/* first name */}
        <input
          type="text"
          placeholder="first name"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
        />

        <textarea
          placeholder="comment"
          value={formData.comment}
          name="comment"
          onChange={handleChange}
        />

        <input
          type="checkbox"
          checked={formData.checked}
          name="checked"
          onChange={handleChange}
        />
        <label htmlFor="isFriendly">Are you friendly?</label>

        <br></br>
        {/* Radiobox */}

        <fieldset>
          <legend>current employement status</legend>
          <input
            type="radio"
            name="employement"
            id="unemployed"
            value="unemployed"
            onChange={handleChange}
            checked={formData.employement === "unemployed"}
          />
          <label>unemployed</label>
          <br></br>
          <input
            type="radio"
            id="part-time"
            value="part-time"
            checked={formData.employement === "part-time"}
            name="employement"
            onChange={handleChange}
          />

          <label>part-time</label>

          <br></br>
          <input
            type="radio"
            id="full-time"
            value="full-time"
            checked={formData.employement === "full-time"}
            name="employement"
            onChange={handleChange}
          />
          <label>full-time</label>
          <br></br>
        </fieldset>

        <br></br>

        <label>Whats your fav color</label>
        <select
          value={formData.favColor}
          name="favColor"
          id="favColor"
          onChange={handleChange}
        >
          <option value="">---choose color---</option>
          <option value="Orrange">Orrange</option>
          <option value="Yellow">Yellow</option>
          <option value="green">green</option>
          <option value="red">red</option>
          <option value="black">black</option>
        </select>

<br></br>
<br></br>
        {/* submit */}
        <button >Submit</button>
      </form>
    </>
  );
}
