import data from "../../data";

export const convertCollectionToCategory = (category) => {
  return Object.values(data[category]);
};
