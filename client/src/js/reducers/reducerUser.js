import { SIGNUP, LOGIN } from '../constants/actions';

const initialState = {
    user: {},
};

export default function userReducer(state = initialState, action){
    switch(action.type) {

        case LOGIN:
            return {
                ...state,
                user: action.payload.user
            };


        case SIGNUP: 
            return {
                ...state,
                user: action.payload.user
            }
        
        
        default:
            return state;
        }
    }

     