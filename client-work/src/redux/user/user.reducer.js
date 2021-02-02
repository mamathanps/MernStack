// Reducer is a Pure Function 
// Reducer contains two arguments (state, action)

import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./user.actions";

let initialState = {
    user: null,
    loading: false,
    token: null,
    errorMessage: null,
};

let userReducer = (state = initialState, action) => {
    let { payload } = action;
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true };
        case LOGIN_SUCCESS:
            return { ...state, loading: false, token: payload };
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload,
            };
        case REGISTER_REQUEST:
            return { ...state, loading: true };
        case REGISTER_SUCCESS:
            return { ...state, loading: false };
        case REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload,
            };
        default:
            return state;            
    }
};

export default userReducer;

/*
1. View - Button Event -> dispatch the action (Redux actions)
2. Redux action - consume the backend api. it invokes the reducers
   dispatch({ type, payload })
3. Reducer is a Pure function (state = initial state, action)
   Reducer is updating/creating new store based on action types. 
*/