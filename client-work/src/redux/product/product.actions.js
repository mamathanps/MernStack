import axios from "axios";
// import { response } from "express";

const UPLOAD_REQUEST = "UPLOAD_REQUEST";
const UPLOAD_SUCCESS = "UPLOAD_SUCCESS";
const UPLOAD_FAILURE = "UPLOAD_FAILURE";

let uploadAction = (product, history) => {
    return async (dispatch) => {
        try {
            dispatch({ type: UPLOAD_REQUEST });
            let config = {
                headers: {
                    "content-type": "application/json",
                },
            };
            let response = await axios.post(`http://localhost:8000/product/upload`, JSON.stringify(product), config );
            dispatch({ type: UPLOAD_SUCCESS, payload: response.data });
            history.push("/");
        } catch (err) {
            dispatch({ type: UPLOAD_SUCCESS, payload: err });
        }
    };
};

export { uploadAction, UPLOAD_REQUEST, UPLOAD_SUCCESS, UPLOAD_FAILURE };