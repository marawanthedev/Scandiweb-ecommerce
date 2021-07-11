import { CategoryActionTypes } from "./category_types";
import { divideCategories } from "./category.util";
const initState = {
  products: null,
  categorizedProducts: null,
  activeCategory: "all",
  categories: []
};
const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case CategoryActionTypes.PRODCUTS_LOADED: {
      return {
        ...state,
        products: action.payload.category.products,
        categories:
          state.categories.length == 0
            ? divideCategories(action.payload.category.products)
            : state.categories
      };
    }
    case CategoryActionTypes.UPDATE_CATEGORY_SELECTION: {
      return {
        ...state,
        activeCategory: action.category
      };
    }
  }
  return state;
};

export default categoryReducer;
