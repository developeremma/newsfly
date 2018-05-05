import React from "react";

const Login = () => (
    <div className="container" id="loginForm">
        <div className="row">
            <div className="col-md-4"> </div>
            <div className="col-md-4"> 
                <form method="post" action="/login" className="form-signin">
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <label htmlFor="login_username" className="sr-only">Username</label>
                    <input type="text" name="username" id="login_username" className="form-control" placeholder="Username" />
                    <label htmlFor="login_password" className="sr-only">Password</label>
                    <input type="password" name="password" id="login_password" className="form-control" placeholder="Password" />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div>
            <div className="col-md-4"> </div>
        </div>
    </div> //<!-- /container -->
)

export default Login
