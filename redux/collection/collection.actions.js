import { collectionTypes } from "./collection.types";

export const getCollectionByCategory = (category) => ({
  type: collectionTypes.COLLECTION_BY_CATEGORY,
  payload: category,
});
