import { createSelector } from "reselect";

export const selectCollection = (state) => state.collection;

// Object.values(state.category.collection.paintings);

// Object.values(collection.paintings);

// export const selectCollectionArray = createSelector(
//   [selectCollection],
//   (selectCollection) => Object.values(selectCollection)
// );

export const selectCategory = createSelector(
  [selectCollection],
  (collection) => collection.category
);

// export const selectCategory = (params) =>
//   createSelector([selectCollection], (collection) => {
//     console.log(collection);
//     return Object.values(collection);
//   });

// export const convertCollectionToCategory = (category) => {
//   return Object.values(collection[category]);
// };

// export const convertCollectionToCategory = (category) => {
//   return Object.values(data[category]);
// };
