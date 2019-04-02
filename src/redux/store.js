import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';

//reducers
import userReducer from './reducers/user_reducer';

//setup
const middleware = applyMiddleware(promise);
export default createStore(userReducer, middleware);