import React from "react";

const Register = () => (

    <div className="container" id="registerForm">
       <div className="row"> 
       <div className="col-md-2"> </div>
       <div className="col-md-8">
        <form method="post" action="/register" className="form-horizontal" role="form">
                    <h2 id="h2Reg">Registration Form</h2>
                    <div className="form-group">
                        <label htmlFor="firstName" className="col-sm-3 control-label">Username</label>
                        <div className="col-sm-9">
                            <input type="text" id="username" placeholder="Username" name="username" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="col-sm-3 control-label">Password</label>
                        <div className="col-sm-9">
                            <input type="password" id="password" placeholder="Password" name="password" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="col-sm-3 control-label">Confirm Password</label>
                        <div className="col-sm-9">
                            <input type="password" id="password_confirm" placeholder="Password" name="conf_password" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-9 col-sm-offset-3">
                            <button type="submit" className="btn btn-primary btn-block">Register</button>
                        </div>
                    </div>
            </form> 
        </div>
        <div className="col-md-2"> </div>          
        </div> 
    </div>
)

export default Register
