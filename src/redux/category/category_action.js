import client from "../../graphQl/server";
import {
  GET_PORDUCTS,
  GET_PRODUCTS_Category

} from "../../graphQl/Category/category_queries";
import { CategoryActionTypes } from "./category_types";

export const getAllProducts = () => {
  return dispatch => {
    client
      .query({
        query: GET_PORDUCTS,

      })
      .then(result => {
        dispatch(productsLoaded(result.data));
      });
  };
};

export const updateCategory = category => {

  if (category === "all") {
    return getAllProducts();
  }

  return dispatch => {
    client
      .query({
        query: GET_PRODUCTS_Category,
        variables: {
          title: category
        }
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
