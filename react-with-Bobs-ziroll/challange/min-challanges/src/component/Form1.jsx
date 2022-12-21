import React from "react";

export default function Form1() {
 let [formData  , setFormData] = React.useState({
    firstName : "",
    lastName : "",
    email : "",
    textArea : "",
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
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
        />
        <input
          type="email"
          placeholder="enter your email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <textArea
          placeholder="enter comments"
          onChange={handleChange}
          name="textArea"
          value ={formData.textArea}
        />
      </form>
    );
}
