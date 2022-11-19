import React, { Component } from "react";

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            passwort: ""
        };
    }

    onNameChange = event => {
        this.setState({name: event.target.value})
    }

    onEmailChange = event => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = event => {
        this.setState({passwort: event.target.value})
    }

    onSubmitRegister = () => {
        console.log(this.state);

        fetch("http://localhost:3000/register", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.passwort
            })
        })
        .then(response => response.json())
        .then(response => {
            if(response.message === "You are registered!" && response.user){
                this.props.onRouteChange("home");
                this.props.updateUser(response.user);
            }
        })

    }

    render() {
        return (
            <div className="">
                <article className="br3 ba bw1 dark-gray  b--black mv4 w-100 w-50-m w-25-l mw5 center">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset className="ba b--transparent ph0 mh0" id="sign_up" >
                                <legend className="f4 fw6 ph0 mh0 underline">Register</legend>
                                    <div className="mt3">
                                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                        <input className="pa2 input-reset ba bw1 b--black bg-transparent hover-bg-black hover-white w-100" 
                                        type="text" 
                                        name="name"  
                                        id="name" 
                                        onChange={ this.onNameChange } />
                                    </div>
                                    <div className="mt3">
                                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                        <input className="pa2 input-reset ba bw1 b--black bg-transparent hover-bg-black hover-white w-100" 
                                        type="email" 
                                        name="email-address"  
                                        id="email-address" 
                                        onChange={ this.onEmailChange } />
                                    </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input className="b pa2 input-reset ba bw1 b--black bg-transparent hover-bg-black hover-white w-100" 
                                    type="password" 
                                    name="password"  
                                    id="password" 
                                    onChange={ this.onPasswordChange } />
                                </div>
                            </fieldset>
                            <div className="">
                                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                onClick={ this.onSubmitRegister }
                                type="submit" 
                                value="Register & LogIn" />
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        );
    }
}

export default Register;