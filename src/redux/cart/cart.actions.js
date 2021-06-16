import { CartActionTypes } from "./cart.types";
export const ToggleCartDropDown = () => ({
    // **returning action object
    type: CartActionTypes.TOGGLE_CART_DROP_DOWN,
    payload: null,
});

// needed actions for cart feature

// 1-add item to cart
// 2- remove item from cart
// 3-increase item quantity
// 4-decrease item quantity

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