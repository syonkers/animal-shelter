import axios from 'axios';
import { FETCH_ANIMALS, ADD_ANIMAL, UPDATE_ANIMAL, DELETE_ANIMAL } from '../constants/actions';
import { ANIMAL_URL } from '../constants/services';
import { AnimalType } from '../types/typeAnimal';


export const fetchAnimals = () => async dispatch => {
    try {
        const res = await axios.get(ANIMAL_URL);
        dispatch({ type: FETCH_ANIMALS, payload: res.data });
    } catch (e) {
        throw(e);
    }
};

export const deleteAnimal = (id: string) => async dispatch => {
  try {
      const res = await axios.delete(ANIMAL_URL, { id });
      dispatch({ type: DELETE_ANIMAL, payload: res.data });
  } catch (e) {
      throw(e);
  }
};

export const updateAnimal = (animal: AnimalType) => async dispatch => {
  try {
      const res = await axios.put(ANIMAL_URL, { animal });
      dispatch({ type: UPDATE_ANIMAL, payload: res.data });
  } catch (e) {
      throw(e);
  }
};

export const addAnimal = (animal: AnimalType) => async dispatch => {
  try {
      const res = await axios.post(ANIMAL_URL, { animal });
      dispatch({ type: ADD_ANIMAL, payload: res.data });
  } catch (e) {
      throw(e);
  }
};

