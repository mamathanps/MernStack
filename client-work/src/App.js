import React from "react";
import Navbar from "./modules/layout/components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./modules/user/components/signup/Signup";
import Login from "./modules/user/components/login/Login";
import Home from "./modules/layout/components/home/Home";
import Profile from "./modules/user/components/profile/Profile";
import Upload from "./modules/product/components/upload/Upload";
import { Provider } from "react-redux";
import store from "./redux/store";


let App = () => {
  return (
      <React.Fragment>
        <Provider store = { store }>
        <Router>
           <Navbar />
           
           <Switch>
             <Route exact path="/" component={Home}></Route>
             <Route exact path="/user/signup" component={Signup}></Route>
             <Route exact path="/user/login" component={Login}></Route>
             <Route exact path="/user/profile" component={Profile}></Route>
             <Route exact path="/product/upload" component={Upload}></Route>
           </Switch>
        </Router>
        </Provider>   
      </React.Fragment>
  );
};

export default App;