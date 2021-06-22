import { CategoryActionTypes } from "./category_types";
import { CategorizeProducts, divideCategories, } from "./category.util"
const initState = {
    products: null,
    activeCategory: "tech",
    categories: [],
}
const categoryReducer = (state = initState, action) => {

    switch (action.type) {

        case CategoryActionTypes.PRODCUTS_LOADED:
            {
                return {
                    ...state,
                    products: CategorizeProducts(action.payload.category.products),
                    categories: divideCategories(action.payload.category.products)
                }
            }
        case CategoryActionTypes.UPDATE_CATEGORY:
            {
                return {

                    ...state,
                    activeCategory: action.payload
                }
            }

    }
    return state;
}

export default categoryReducer