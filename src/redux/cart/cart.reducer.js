import { CartActionTypes } from "./cart.types";
import { addCartItemUtil, decreaseCartItemQuantityUtil, increaseCartItemQuantityUtil, removeCartItemUtil } from "./cart.utils";

const INITIAL_STATE = {
    showCart: false,
    cartItems: [],

};
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_DROP_DOWN:
            return {
                ...state,
                showCart: !state.showCart,
            };

        case CartActionTypes.ADD_CART_ITEM:
            {
                return {
                    ...state,

                    cartItems: addCartItemUtil(state.cartItems, action.payload),
                };
            }
        case CartActionTypes.INCREASE_ITEM_QUANTITY:
            {
                return {
                    ...state,
                    cartItems: increaseCartItemQuantityUtil(
                        state.cartItems,
                        action.payload
                    ),
                };
            }
        case CartActionTypes.DECREASE_ITEM_QUANTITY:
            {
                return {
                    ...state,
                    cartItems: decreaseCartItemQuantityUtil(
                        state.cartItems,
                        action.payload,
                    )
                };
            }
        case CartActionTypes.REMOVE_ITEM:
            {

                return {

                    ...state,
                    cartItems: removeCartItemUtil(state.cartItems, action.payload)
                }
            }

        default:
            return state;
    }
};

export default cartReducer;