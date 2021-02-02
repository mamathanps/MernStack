import axios from "axios";
import AXIOS from "axios";
//Action Types - Registration/SignUp - Form
const REGISTER_REQUEST = "REGISTER_REQUEST";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAILURE = "REGISTER_FAILURE";

//Action Types - Login/SignIn - Form
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";

//Login Actions
let getLoginAction = (user, history) => {
    return async (dispatch) => {
        try {
        dispatch({ type: LOGIN_REQUEST });
        //We need to invoke the Backend - Login API 
        let config = {
            headers: {
                "content-type": "application/json",
            },
        };

        let response = await axios.post(`http://localhost:8000/user/login`, 
        JSON.stringify(user),
        config
        );
        dispatch({ type: LOGIN_SUCCESS, payload: response.data });
        history.push("/");
        } catch (err) {
            dispatch({ type: LOGIN_FAILURE, payload: err });
        }
    };
};

//Registration/SignUp actions
let getSignup = (user, history) => {
    return async (dispatch) => {
        try {
            dispatch({ type: REGISTER_REQUEST });
            console.log("after request");
            //Consume the Backend API: localhost:8000/user/register - POST Method
            //How to Consume/Invoke the API in ReactJS using axios.
            let config = {
                headers: {
                    "content-type": "application/json",
                },
            };
            let response = await  AXIOS.post(`http://localhost:8000/user/register`, JSON.stringify(user), config);
            console.log("after ...axios(API)");
            dispatch({ type: REGISTER_SUCCESS, payload: response.data });
            history.push("/user/login");
        } catch (err) {
            dispatch({ type: REGISTER_FAILURE, payload: err });
        }
    };
};

export { getSignup, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, getLoginAction, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE };