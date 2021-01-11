import React from "react";

let Upload = () => {
    return (
        <React.Fragment>
            <section className="p-2 bg-primary text-center">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>
                            <i class="fas fa-file-upload">
                            <i class="icon-upload">
                                   &nbsp; &nbsp; Welcome to Product Upload Pages....!! 
                            </i> 
                            </i>  
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pl-4.5 mt-5 text-center">
                <div className="row>">
                    <div className="col-md-5 m-auto">
                        <div className="card">
                            <div className="card-header bg-warning">
                                <h3><b> Please Upload Product Form </b></h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter Product Name" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter Brand Name" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="file" placeholder="Enter Image Name" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter the Price" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter the Quantity" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option value=""> --Select Category-- </option>
                                            <option value="Mobiles"> Mobiles </option>
                                            <option value="Laptops"> Laptops </option>
                                            <option value="Watches"> Watches </option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter the Description" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter the Usage" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        {/* <button type="button" className="btn btn-warning btn-lg btn-block" disabled> SendMe </button> */}
                                        <input type="Submit" className="btn btn-primary btn-lg btn-block disabled"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </React.Fragment>
    );
};

export default Upload;