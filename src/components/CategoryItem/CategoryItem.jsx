import React from "react";
import "./CategoryItem.scss"
import cart from "../../assets/svg/customizableShoppingCart.svg"

class CategoryItem extends React.Component{


    constructor (props) {
        
        super(props);
        

            this.state = {
                
            }
        
    }

    render() {
        const { gallery, name, prices, margin, inStock, selectedCurrency, selectedCurrencySymbol } = this.props;
        return (
            
                 <div className="category-item" style={{margin:`${margin}`}}>
                   {inStock==false? <div className="category-item__out-of-stock-overlay"><span className="category-item__out-of-stock-overlay__text">Out of stock</span> </div>:null}
                <div className="category-item__img" style={{backgroundImage:`url(${gallery[0]})`}} ></div>
                <div className="category-item__text">
                    <div className="category-item__text__description">{name}</div>
                    <div className="category-item__text__price">{selectedCurrencySymbol}{prices.filter((price)=>price.currency==selectedCurrency)[0]['amount']}</div>
                </div>
                    <div className="category-item__add-to-cart-btn">
                <img className="category-item__add-to-cart-btn__cart-icon"src={cart} alt=""/>
                </div>
            </div>
        )


    }


}
export default CategoryItem;