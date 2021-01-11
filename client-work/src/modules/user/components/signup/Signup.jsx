import React, { useState } from "react";

let Signup = () => {
    let [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
    });

    let inputHandler = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };
    let SignUpHandler = (e) => {
        console.log(user);
        e.preventDefault();
    };

    return (
        <React.Fragment>
            <section className="p-2 bg-info text-center">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {/* <div className="">
                                <p> Welcome to our Registration (SignUp) Page....!! </p>
                            </div> */}
                            <h2>
                            <i class="fas fa-user-plus">
                            <i class="icon-upload">
                                   &nbsp; &nbsp; Welcome to Registration (SignUp) Page....!!
                            </i>       
                            </i>   
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <br/>
            <br/>
            <section className="mt-5 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            <div className="card">
                                <div className="card-header bg-warning">
                                    <h3><b> SignUp-Form </b></h3>
                                </div>
                                <div className="card-body">
                                <form onSubmit={SignUpHandler}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Enter User Name" value = { user.name } name = "name" onChange={inputHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Enter E-Mail Id" value = { user.email } name = "email" onChange={inputHandler} />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Enter Password" value = { user.password } name = "password" onChange={inputHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="Submit" className="btn btn-success btn-lg btn-block disabled"/>
                                    </div>
                                </form>
                                <small>
                                   <u> Already i have an account? </u> 
                                   <a href="/user/login">
                                   &nbsp; &nbsp; <i class="fas fa-sign"> <u> SignIn </u> </i>
                                   </a>
                                </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </React.Fragment>
    );
};

export default Signup;