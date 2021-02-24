import { combineReducers } from 'redux';
import animalReducer from './reducers/reducerAnimal';
import userReducer from './reducers/reducerUser';

export default combineReducers({
  animal: animalReducer,
  user: userReducer
});