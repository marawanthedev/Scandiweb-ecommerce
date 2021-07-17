import { CategoryActionTypes } from "./category_types";
import { divideCategories, extractCurrencies } from "./category.util";
const initState = {
  products: null,
  activeCategory: "all",
  categories: [],
  currencies: []
};
const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case CategoryActionTypes.PRODCUTS_LOADED: {
      return {
        ...state,
        products: action.payload.category.products,
        categories:
          state.categories.length === 0
            ? divideCategories(action.payload.category.products)
            : state.categories,
        currencies: extractCurrencies(action.payload.category.products[0])
      };
    }
    case CategoryActionTypes.UPDATE_CATEGORY_SELECTION: {
      return {
        ...state,
        activeCategory: action.category
      };
    }
    default: {
      return {
        ...state
      }
    }
  }
};

export default categoryReducer;
