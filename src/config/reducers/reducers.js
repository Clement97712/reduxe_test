import { ADD_PRODUCT } from "../action/action";

export const isreducers = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.text];

    default:
      return state;
  }
};

//En fonction des differents actions (Ajout,Suppression)
