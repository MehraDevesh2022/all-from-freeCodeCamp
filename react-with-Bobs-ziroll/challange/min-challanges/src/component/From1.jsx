import React from "react";

export default function Form1() {
 let [formData  , setFormData] = React.useState({
    firstName : "",
    lastName : ""
 });

const handleChange =(e)=>{
// e.target.name => this will render if firstname enters else lastName
    setFormData(prvData =>{
        return{
        ...prvData ,
       [ e.target.name] : e.target.value
        }
    })
}
    return (
      <form>
        {/* use a proprty name for identify terget */}
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
        />
      </form>
    );
}
