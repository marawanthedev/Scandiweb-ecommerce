import dependecies from  "./helpers/dependecies";


class CategoryItem extends dependecies.React.Component{


    constructor (props) {
        super(props);
        this.state = {}
    }

    render() {
    const { cart } = dependecies;

        const { selectedCurrency, selectedCurrencySymbol, cartReduxCallBacks, item } = this.props;
        const { gallery, name, prices, margin, inStock } = item;
        return (
            
                 <div className="category-item" style={{margin:`${margin}`}}>
                   {inStock==false? <div className="category-item__out-of-stock-overlay"><span className="category-item__out-of-stock-overlay__text">Out of stock</span> </div>:null}
                <div className="category-item__img" style={{backgroundImage:`url(${gallery[0]})`}} ></div>
                <div className="category-item__text">
                    <div className="category-item__text__description">{name}</div>
                    <div className="category-item__text__price">{selectedCurrencySymbol}{prices.filter((price)=>price.currency==selectedCurrency)[0]['amount']}</div>
                </div>
                {inStock ? <div className="category-item__add-to-cart-btn" onClick={() => {
                    console.log(item)
                    cartReduxCallBacks.AddCartItem(item)
                    }}>
                <img className="category-item__add-to-cart-btn__cart-icon"src={cart} alt=""/>
                </div>:null}
            </div>
        )


    }


}
export default CategoryItem;