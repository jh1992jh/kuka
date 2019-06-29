import React, { Component } from "react";

export class Login extends Component {
    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input className="form-control" id="exampleInputEmail1" type="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Password</label>
                    <input className="form-control" id="exampleInputEmail1" type="password" />
                </div>

            </form>
        );
    }
}