import { CategoryActionTypes } from "./category_types";
import { CategorizeProducts, divideCategories, } from "./category.util"
const initState = {
    products: null,
    categorizedProducts: null,
    activeCategory: "all",
    categories: [],
}
const categoryReducer = (state = initState, action) => {

    switch (action.type) {

        case CategoryActionTypes.PRODCUTS_LOADED:
            {
                return {
                    ...state,
                    products: action.payload.category.products,
                    categories: divideCategories(action.payload.category.products)
                }
            }
        case CategoryActionTypes.UPDATE_CATEGORY:
            {
                return {

                    ...state,
                    categorizedProducts: CategorizeProducts(state.products, action.payload),
                    activeCategory: action.payload
                }
            }

    }
    return state;
}

export default categoryReducer