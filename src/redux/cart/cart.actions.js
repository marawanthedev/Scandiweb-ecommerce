import { CartActionTypes } from "./cart.types";
export const ToggleCartDropDown = () => ({
    type: CartActionTypes.TOGGLE_CART_DROP_DOWN,
    payload: null,
});



export const AddCartItem = (cartItem) => ({
    type: CartActionTypes.ADD_CART_ITEM,
    payload: cartItem,
});

export const IncreaseItemQuantity = (itemName) => ({
    type: CartActionTypes.INCREASE_ITEM_QUANTITY,
    payload: itemName,
});

export const DecreaseItemQuantity = (itemName) => ({
    type: CartActionTypes.DECREASE_ITEM_QUANTITY,
    payload: itemName,
});

export const RemoveItem = (itemName) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: itemName
});