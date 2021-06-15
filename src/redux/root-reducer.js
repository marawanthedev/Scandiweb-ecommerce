import cartReducer from "./cart/cart_reducer";

import { combineReducers } from "redux";

export default combineReducers({

    cartReducer: cartReducer,
});