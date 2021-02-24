import { FETCH_ANIMALS } from '../constants/actions';

const initialState = {
    animals: [],
};

export default function animalReducer(state = initialState, action){
    switch(action.type) {


        case FETCH_ANIMALS:
            console.log(action.payload);
            return {
                ...state,
                animals: action.payload
            };

        default:
            return state;
    }
}