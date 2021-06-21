

import dependecies from  "./helpers/dependcies";



class CartItem extends dependecies.React.Component{


    constructor (props) {
        
        super(props);

        this.state = {
            
        }
    }

    render() {
    const {Plus,React,Minus,IconButton } = dependecies;
    const sizes=['S','M','L']
    const { gallery, name, quantity, DecreaseItemQuantity, IncreaseItemQuantity, prices, selectedCurrency, selectedCurrencySymbol } = this.props;

      
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
                            
                                return(<button className="cart-item__content__btn cart-item__content-size-button cart-item__content__size-buttons-container__btn">
                            {size}
                        </button>)
                            })
                        }
                        
                    </div>
                    </div>
                    
                    <div className="cart-item__content__quantity-buttons-container">
                    <IconButton callBack={IncreaseItemQuantity}  Icon={Plus} callBackParam={name}> </IconButton>

                    <span className="cart-item__content__quantity">{quantity}</span>

                    <IconButton callBack={DecreaseItemQuantity}  Icon={Minus} callBackParam={name}> </IconButton>
                        
                   
                    </div>
            </div>
            <div className="cart-item__img" style={{backgroundImage:`url(${gallery[0]})`}}></div>

        </div>

    )
    }
}



export default CartItem;

