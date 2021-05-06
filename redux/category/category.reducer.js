import { categoryTypes } from "./category.types";

const INITIAL_STATE = { category: null };

export const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case categoryTypes.SET_PAINTINGS_CATEGORY:
      return { ...state, category: action.payload };
    case categoryTypes.SET_DRAWINGS_CATEGORY:
      return { ...state, category: action.payload };
    default:
      return state;
  }
};
