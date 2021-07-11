import client from "../../graphQl/server";
import {
  GET_PORDUCTS,
  GET_CLOTHES_PRODUCTS,
  GET_TECH_PRODUCTS
} from "../../graphQl/Category/category_queries";
import { CategoryActionTypes } from "./category_types";

export const getProducts = () => {
  return dispatch => {
    client
      .query({
        query: GET_PORDUCTS
      })
      .then(result => {
        dispatch(productsLoaded(result.data));
      });
  };
};

export const updateCategory = category => {
  let queryName;
  switch (category) {
    case "clothes":
      queryName = GET_CLOTHES_PRODUCTS;

      break;
    case "tech":
      queryName = GET_TECH_PRODUCTS;
      break;

    case "all":
      queryName = GET_PORDUCTS;

    default:
      break;
  }
  return dispatch => {
    client
      .query({
        query: queryName
      })
      .then(result => {
        dispatch(
          productsLoaded(result.data),
          dispatch(updateCategorySelection(category))
        );
      });
  };
};

export const updateCategorySelection = category => ({
  type: CategoryActionTypes.UPDATE_CATEGORY_SELECTION,
  category
});
export const productsLoaded = productsData => ({
  type: CategoryActionTypes.PRODCUTS_LOADED,
  payload: productsData
});
