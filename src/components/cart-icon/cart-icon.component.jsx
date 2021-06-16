import React from 'react';
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/svg/shopping-cart.svg';
import { connect } from "react-redux";
import {ToggleCartDropDown} from "../../redux/cart/cart.actions"

const CartIcon=({ToggleCartDropDown,itemCount})=>{

        return (    
            <div className={`cart-icon`} onClick={()=> ToggleCartDropDown()}>
                <ShoppingIcon className="shopping-icon"></ShoppingIcon>
                <div className="item-count-circle">
                    <span className="item-count ">{itemCount}</span>
                </div>
            </div>
        )
}


const mapDispatchToProps=(dispatch)=>({
    ToggleCartDropDown:()=>dispatch(ToggleCartDropDown())
});


export default connect(null,mapDispatchToProps)(CartIcon);



    