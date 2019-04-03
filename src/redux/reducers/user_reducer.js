import axios from 'axios';

//Initial State
const initialState = {
    user: {}
};

//Action Types
const LOGIN = 'LOGIN_USER';
const CREATE_USER = 'CREATE_USER';

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
};

export function create(userCredentials){
    //get the new user
    const newUser = axios.post('/auth/register', userCredentials).then(response => {
        return response.data;
    });
    //return the new user to the reducer
    return {
        type: CREATE_USER,
        payload: newUser
    };
};

//User reducer
export default function userReducer(state = initialState, action){
    switch(action.type){
        case LOGIN + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload});
        case CREATE_USER + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload});
        default:
            return state;
    }
};