import { createStore, applyMiddleware, combineReducers } from 'redux';
import promise from 'redux-promise-middleware';

//reducers
import userReducer from './reducers/user_reducer';
import conversationReducer from './reducers/conversation_reducer';

//setup
const middleware = applyMiddleware(promise);
const rootReducer = combineReducers({userReducer, conversationReducer});
export default createStore(rootReducer, middleware);