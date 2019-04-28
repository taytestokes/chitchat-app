//Initial State
const initialState = {
    user: {},
};

//Action Types
const LOGIN = 'LOGIN_USER';
const CREATE_USER = 'CREATE_USER';
const UPDATE_USER = 'UPDATE_USER';

//Action Creators
export function login(userInfo) {
    //return user to reducer
    return {
        type: LOGIN,
        payload: userInfo
    };
};

export function create(userCredentials) {
    //return the new user to the reducer
    return {
        type: CREATE_USER,
        payload: userCredentials
    };
};

export function updateUser(user) {
    //return the user obj with the updated url
    return {
        type: UPDATE_USER,
        payload: user
    };
};

//User reducer
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, { user: action.payload });
        case CREATE_USER:
            return Object.assign({}, state, { user: action.payload });
        case UPDATE_USER:
            return Object.assign({}, state, { user: action.payload })
        default:
            return state;
    }
};