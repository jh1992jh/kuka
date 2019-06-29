import React, { Component } from "react";

export class Login extends Component {
    render() {
        return (
            <div className="login">
                <h1 className="pb-3">Login</h1>
                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input className="form-control" id="exampleInputEmail1" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <input className="form-control" id="exampleInputEmail1" type="password" placeholder="Type your password" />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Login"/>
                    </div>
                </form>
            </div>
        );
    }
}