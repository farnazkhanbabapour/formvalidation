import React, { Component } from 'react'
import "./Form.css";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNameValue: "",
            lastNameValue:"",
            emailValue:"",
            submited: false,
            allValid: true

        }

    }
    firstNameChangeHandler(event) {
        this.setState({
            firstNameValue: event.target.value
        }
        )
    }
    lastNameChangeHandler(e){
        this.setState({
            lastNameValue: e.target.value
        })

    }
    emailChangeHandler(e){
        this.setState({
            emailValue:e.target.value
        })
       

    }

    submitHandler(e){
        e.preventDefault();
        (this.state.firstNameValue !=="" && 
        this.state.lastNameValue !== "" &&
        this.state.emailValue !== "") ?
        this.setState({submited : true}) :
        this.setState({allValid: false})      
        
    }


  render() {
    if(this.state.submited === true){
        setTimeout(() => {window.location.reload();
        },3000)
    }
    
    return (
        <div className="form-container">
        <form onSubmit={(e)=>this.submitHandler(e)} className="register-form" autoComplete="off">

        { (this.state.submited === true ) &&
                <div className="success-message">
                    Success! Thank you for registering
                </div>  
        }

            <input
                id="first-name"
                className="form-field"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={this.state.firstNameValue}
                onChange={(e)=>{this.firstNameChangeHandler(e)}}
            />
            { (this.state.allValid === false && this.state.firstNameValue ==="") &&
                <span id="first-name-error">Please enter a first name</span> }

            <input
                id="last-name"
                className="form-field"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastNameValue}
                onChange={(e)=>{this.lastNameChangeHandler(e)}}
            />
             { (this.state.allValid === false && this.state.lastNameValue ==="") &&
                <span id="first-name-error">Please enter a fast name</span> }
           
            <input
                id="email"
                className="form-field"
                type="text"
                placeholder="Email"
                name="email"
                value={this.state.emailValue}
                onChange={(e)=>{this.emailChangeHandler(e)}}
            />
             { (this.state.allValid === false && this.state.emailValue ==="") &&
                <span id="first-name-error">Please enter an email address</span> }
         
            <button className="form-field" type="submit">
                Register
            </button>
        </form>
    </div>

    )
  }
}
