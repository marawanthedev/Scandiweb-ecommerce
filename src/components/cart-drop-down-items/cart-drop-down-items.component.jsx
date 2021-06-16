import React from "react";
import "./cart-drop-down-items.styles.scss";

import Plus from "../../assets/svg/Plus.svg";
import Minus from "../../assets/svg/Minus.svg"
// make sure that you are destructing the right props names
// typescript is needed :)
// fucking action has to be included as  a prop
// fuck off once again    
export const CartItem=({gallery,name,quantity,DecreaseItemQuantity,IncreaseItemQuantity,prices,selectedCurrency,selectedCurrencySymbol})=>{

    const sizes=['S','M','L']
  
    return(

        <div className="cart-item" key={name} >
            <div className="cart-item__content">
                <div className="cart-item__content__main">
                    <div className="cart-item__content__main__text">
                         <div className="cart-item__content__header">{name}</div>
                <div className="cart-item__content__price">
                    
                  
                    {selectedCurrencySymbol}
                        {prices.filter((price) => price.currency == selectedCurrency)[0]['amount']} </div>
                    </div>
                    
                    <div className="cart-item__content__size-buttons-container">

                        {
                            sizes.map((size) => {
                            
                                return(<button className="cart-item__content__btn cart-item__content-size-button">
                            {size}
                        </button>)
                            })
                        }
                        
                    </div>
               </div>
                
                <div className="cart-item__content__quantity-buttons-container">
                    <button className="cart-item__content__btn cart-item__content__btn__plus" onClick={()=>IncreaseItemQuantity(name)}>
                        <img src={Plus} alt=""/>
                    </button>
                    <span className="cart-item__content__quantity">{quantity}</span>
                    <button className="cart-item__content__btn cart-item__content__btn__plus" onClick={() => DecreaseItemQuantity(name)}>
                        <img src={Minus} alt="" />
                    </button>
                    </div>
            </div>
            <div className="cart-item__img" style={{backgroundImage:`url(${gallery[0]})`}}></div>

        </div>

    )
}





export default CartItem;

