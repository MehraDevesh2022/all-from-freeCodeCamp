import React from "react";
import "./fromStyle.css"
export default function Form2() {
  const [formData , setFormData] = React.useState(
    {
       firstName : "",
       lastName  : "",
       email : "",
       comment : "",
        checked : true
    }
  )
  
  const handleChange  = (e) =>{
 const {name  , value ,type , checked } = e.target

  setFormData(prvData  =>{
    return {
      ...prvData,
      [name]: type === "checkbox" ? checked : value,
    };
  })
        //  setFormData(prvData =>{
        //     return{
        //         ...prvData ,
        //         [e.target.name] : e.target.value
        //     }
        //  })
  }


    return (
      <>
        <form>
          {/* first name */}
          <input
            type="text"
            placeholder="first name"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
          />

          {/* last name */}
          <input
            type="text"
            placeholder="last name"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
          />

          {/* email */}
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </form>
        {/* comment box */}
        <textarea
          placeholder="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />

        {/* check box */}
        <input
          type="checkbox"
          id="isCheckBox"
          checked={formData.checked}
          onChange={handleChange}
          name="checked"
        />

        <label htmlFor="isFriendly">Are you friendly?</label>
        <br></br>
      </>
    );
}
