

import dependecies from  "./helpers/dependcies";



class CartItem extends dependecies.React.Component{

    constructor (props) {
        
        super(props);

        this.state = {}
    }

    render() {
    const {Plus,React,Minus,IconButton,ItemAttribues } = dependecies;
   
        const { gallery, name, quantity, DecreaseItemQuantity, IncreaseItemQuantity, prices, selectedCurrency, selectedCurrencySymbol, attributes, item } = this.props;
        
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
                    <div className="cart-item__content__attributes-container">

                      {
                                
                                attributes.map((attribute)=>{
 
                                    const attributeSelection = attribute.items.filter((item) => item.selected == true)[0]
                                    if (attributeSelection) {
                                            return <div className="cart-item__content__attribute-buttons-container">

                         <ItemAttribues  attribute={attribute} fontSize={".6rem"} onClickCallBack={()=>{}}></ItemAttribues>
                        
                    </div>
                                    }
                                    })
                            }
                            </div>
                   
                    </div>
                    
                    <div className="cart-item__content__quantity-buttons-container">
                    <IconButton callBack={IncreaseItemQuantity}  Icon={Plus} callBackParam={item}> </IconButton>

                    <span className="cart-item__content__quantity">{quantity}</span>

                    <IconButton callBack={DecreaseItemQuantity}  Icon={Minus} callBackParam={item}> </IconButton>
                        
                   
                    </div>
            </div>
            <div className="cart-item__img" style={{backgroundImage:`url(${gallery[0]})`}}></div>

        </div>

    )
    }
}


export default CartItem;

