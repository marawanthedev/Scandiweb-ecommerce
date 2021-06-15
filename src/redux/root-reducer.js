import cartReducer from "./cart/cart.reducer";
import categoryReducer from "./category/category_reducer"
import currencyReducer from "./currency/currency_reducer"
import { combineReducers } from "redux";

export default combineReducers({
    cartReducer,
    categoryReducer,
    currencyReducer
});