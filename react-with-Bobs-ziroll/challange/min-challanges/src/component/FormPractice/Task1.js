import React from "react"
import "../FormPractice/style.css"
export default function Task1() {

    /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */

const [formData , setFromData] = React.useState({
    email : "",
    password : "",
    confirmPassWord : "",
    checked : false
})

const handleChange = (e) =>{
  const {name  , value , type , checked} = e.target
  setFromData(prvData => {
    return{
        ...prvData ,
        [name]: type === "checkbox" ? checked : value
    }
  })
}

    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password !=formData.confirmPassWord){
            alert("passwords to not match");
        }else{
          alert("Successfully signed up");
        }

        if(formData.checked){
          alert("Thanks for signing up for our newsletter!");
        }
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    value={formData.email}
                    name ="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    value={formData.password}
                    name="password"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="form--input"
                    value={formData.confirmPassWord}
                    name="confirmPassWord"
                    onChange={handleChange}
                />

                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="checked"
                        checked ={formData.checked}
                        onChange ={handleChange}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
