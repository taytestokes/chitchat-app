//Initial State
const initialState = {
    roomId: null
};

//Action Types
const UPDATE_ROOM_ID = 'UPDATE_ROOM_ID';

//Action Creators
export function updateRoomId(id){
    return {
        type: UPDATE_ROOM_ID,
        payload: id
    };
};

//Reducer
export default function conversationReducer(state = initialState, action){
    switch(action.type){
        case UPDATE_ROOM_ID:
            return Object.assign({}, state, {roomId: action.payload});
        default:
            return state;
    };
};