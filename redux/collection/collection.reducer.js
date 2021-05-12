import data from "../../data";
import { collectionTypes } from "./collection.types";

const INITIAL_STATE = { collection: { ...data } };

export const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case collectionTypes.COLLECTION_BY_CATEGORY:
      return {
        ...state,
        category: Object.values({ ...data[action.payload] }),
      };
    default:
      return state;
  }
};

// Object.values(state.category.collection.paintings)
// export const collectionReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case collectionTypes.COLLECTION_BY_CATEGORY:
//       return {
//         ...state,
//         collection: convertCollectionToCategory(action.payload),
//       };
//     default:
//       return state;
//   }
// };
