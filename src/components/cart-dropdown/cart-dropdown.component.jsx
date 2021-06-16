
import React from "react";
import "./cart-dropdown.styles.scss";
import {connect} from "react-redux";
import {CartItem} from "../cart-drop-down-items/cart-drop-down-items.component"
import {DecreaseItemQuantity,IncreaseItemQuantity,ToggleCartDropDown} from "../../redux/cart/cart.actions";
import {withRouter} from "react-router-dom";
// dynamically added components 
// can not not start a new redux connection
// so we need to pass the method to the dynamic component
import Zoom from 'react-reveal/Zoom'

const CartDropDown=({cartItems,DecreaseItemQuantity,IncreaseItemQuantity,selectedCurrency,selectedCurrencySymbol,itemCount})=>{

    return(
      
        <Zoom><div className="cart-dropdown ">
            <div className="cart-dropdown__items-count-container">
                My Bag. <span className="cart-dropdown__items-count">{itemCount} items</span>
            </div>
        <ul className="cart-items">
        {cartItems.length>0?cartItems.map(({...cartData},index)=>{
            return <CartItem   key={index} selectedCurrency={selectedCurrency} selectedCurrencySymbol={selectedCurrencySymbol} DecreaseItemQuantity={DecreaseItemQuantity} IncreaseItemQuantity={IncreaseItemQuantity}    {...cartData}></CartItem>
        }):null}
        </ul>
            <div className="buttons-container">
          
                <button className="buttons-container__button buttons-container__button__viewbag">
                    View Bag
        </button>
                 <button className="buttons-container__button buttons-container__button__checkout">
                    Checkout
        </button>
        </div>
        </div></Zoom>
        
    );
}


const mapStateToProps=({cartReducer,currencyReducer})=>({
    showCart: cartReducer.showCart,
    cartItems: cartReducer.cartItems,
     selectedCurrency: currencyReducer.selectedCurrency,
    selectedCurrencySymbol: currencyReducer.selectedCurrencySymbol,

});
const mapDispatchToProps=(dispatch)=>({
    DecreaseItemQuantity:(itemName)=>dispatch(DecreaseItemQuantity(itemName)),
    IncreaseItemQuantity:(itemName)=>dispatch(IncreaseItemQuantity(itemName)),
    ToggleCartDropDown:()=>dispatch(ToggleCartDropDown()),
});


export default  connect(mapStateToProps,mapDispatchToProps)(CartDropDown);