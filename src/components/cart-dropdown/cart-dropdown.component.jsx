
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

const CartDropDown=({cartItems,DecreaseItemQuantity,IncreaseItemQuantity})=>{

   

    return(
      
        <Zoom><div className="cart-dropdown ">
        <ul className="cart-items">
        {cartItems.length>0?cartItems.map(({...cartData},index)=>{
            return <CartItem  key={index} DecreaseItemQuantity={DecreaseItemQuantity} IncreaseItemQuantity={IncreaseItemQuantity}    {...cartData}></CartItem>
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


const mapStateToProps=({cartReducer})=>({
    showCart: cartReducer.showCart,
    cartItems: cartReducer.cartItems
});
const mapDispatchToProps=(dispatch)=>({
    DecreaseItemQuantity:(itemId)=>dispatch(DecreaseItemQuantity(itemId)),
    IncreaseItemQuantity:(itemId)=>dispatch(IncreaseItemQuantity(itemId)),
    ToggleCartDropDown:()=>dispatch(ToggleCartDropDown()),
});


export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropDown));