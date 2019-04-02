import axios from 'axios';

//Initial State
const initialState = {
    userSession: {}
};

//Action Types
const LOGIN = 'LOGIN_USER';

//Action Creators
export function login(userCredentials){
    //get user
    const user = axios.post('/auth/login', userCredentials).then(response => {
        return response.data;
    });
    //return user to reducer
    return {
        type: LOGIN,
        payload: user
    };
}

//User reducer
export default function userReducer(state = initialState, action){
    switch(action.type){
        case LOGIN + '_FULFILLED':
            return Object.assign({}, state, {userSession: action.payload});
        default:
            return state;
    }
};