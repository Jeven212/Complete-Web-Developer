import React from "react";

const Register = ({ onRouteChange }) => {
    return (
        <div className="">
            <article className="br3 ba bw1 dark-gray  b--black mv4 w-100 w-50-m w-25-l mw5 center">
                <main className="pa4 black-80">
                    <form className="measure">
                        <fieldset className="ba b--transparent ph0 mh0" id="sign_up" >
                            <legend className="f4 fw6 ph0 mh0 underline">Register</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" for="name">Name</label>
                                    <input className="pa2 input-reset ba bw1 b--black bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="name"  
                                    id="name" />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                                    <input className="pa2 input-reset ba bw1 b--black bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address" />
                                </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" for="password">Password</label>
                                <input className="b pa2 input-reset ba bw1 b--black bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            onClick={ () => onRouteChange("home") }
                            type="submit" 
                            value="Register & LogIn" />
                        </div>
                    </form>
                </main>
            </article>
        </div>
    );
}

export default Register;