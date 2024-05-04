import {  SET_USER } from "./actionsType";

const initialState = {
  user: {
    id: '',
    name: '',
    email: '',
  
  },
  plan: {},
  nodes: {}
};

const rootReducer = (state = initialState, { type, payload }) => {
  let newState;

  switch (type) {
    case SET_USER:
      newState = {
        ...state,
        user: payload
      };
      localStorage.setItem('dndState', JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
};

export default rootReducer;