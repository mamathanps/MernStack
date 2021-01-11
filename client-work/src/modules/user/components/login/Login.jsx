import React from "react";

let Login = () => {
    return (
        <React.Fragment>
            <section className="p-2 bg-success text-center">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>
                            <i class="fas fa-sign-in-alt">
                            <i class="icon-upload">
                                   &nbsp; &nbsp; Welcome to Login Page....!!
                            </i>       
                            </i>   
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <br/>
            <br/>
            <br/>
            <section className="mt-5 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            <div className="card">
                                <div className="card-header bg-warning disabled">
                                    <h3><b> Login-Form </b></h3>
                                </div>
                                <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Enter E-Mail Id"/>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Enter Password"/>
                                    </div>
                                    <br/>
                                    <div className="form-group">
                                        {/* <button type="button" className="btn btn-info btn-lg btn-block" disabled> SignIn </button> */}
                                        <input type="Submit" className="btn btn-info btn-lg btn-block"/>
                                    </div>
                                </form>
                                <small>
                                   <u> Create your account? </u> 
                                   <a href="/user/Signup">
                                   &nbsp; &nbsp; <i class="fas fa-user-plus"> <u> SignUp </u> </i>
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

export default Login;