import {addAttributeSelectionsIndex} from "./helpers/dependencies"
import {DecreaseItemQuantity,IncreaseItemQuantity,} from "./helpers/dependencies";
import dependecies from "./helpers/dependencies"


class CartPage extends dependecies.React.Component{


    constructor (props) {
        super(props);
        this.state = {
            attributeIndex: [],
            attributeSelectionIndex: [],
        }
    }
      handleAttributeSelection=(newAttributeIndex,newAttributeSelectionIndex,item) =>{

          const { attributeIndex, attributeSelectionIndex } = this.state;
          
        //attributeIndex and attribute selection index are always corrosponding
        // meaning that selectionIndex[0] is at attribute selectionArray[0] and so on

        if (attributeIndex.indexOf(newAttributeIndex) === -1) {
            attributeIndex.push(newAttributeIndex)
            attributeSelectionIndex.push(newAttributeSelectionIndex)
        }
        else {
            
            attributeSelectionIndex[newAttributeIndex] = newAttributeSelectionIndex;
        }

        this.setState({
           attributeIndex: attributeIndex,
           attributeSelectionIndex:attributeSelectionIndex
        },()=>this.props.addAttributeSelectionsIndex(item.name,attributeIndex,attributeSelectionIndex))
        
    }
    intializeImageSelections = (itemsCount) => {
        let mockImageSelections = []
        for (let i = 0; i < itemsCount; i++){
            mockImageSelections[i] = 0;
        }
       
        
    }
   
    render() {
        const {selectedCurrency, selectedCurrencySymbol,DecreaseItemQuantity,IncreaseItemQuantity } = this.props;
        const {  attributeSelectionIndex } = this.state
        const { React,IconButton, Plus, Minus, CartPageItemGallery, ItemAttribues, connect } = dependecies
        
        const cartItems = JSON.parse(JSON.stringify(this.props.cartItems))
        
        this.intializeImageSelections(cartItems.length);
        
        cartItems.forEach((cartItem)=>console.log(cartItem))
        return (
            <div className="cart">
                <div className="cart__header">
                    Cart
                </div>
                <div className="cart__items-container">
                    {
                     cartItems.map((cartItem,index) => {
                        return    <div className="cart__item">
                                <div className="cart__item__left-side">
                                <div className="cart__item__name">{cartItem.name}</div>
                                <div className="cart__item__price">{selectedCurrencySymbol}{cartItem.prices.filter((price) => price.currency = selectedCurrency)[0].amount}</div>
                                <div className="cart__item__attributes">
      {
                        cartItem.attributes.map((attribute, index) => <ItemAttribues key={index} minHeight={"5rem"} hideAttributeName={true} attribute={attribute} attributeIndex={index}
                        attributeSelectionIndex={attributeSelectionIndex[attributeSelectionIndex.length-1]}   item={cartItem} onClickCallBack={this.handleAttributeSelection}></ItemAttribues>)
                     }
                                </div>
                          
                            </div>
                            <div className="cart__item__right-side">
                                <div className="cart__item__right-side__quantity-control">
                    <IconButton callBack={IncreaseItemQuantity} width={"3.5rem"} height={"3.5rem"} Icon={Plus} callBackParam={cartItem.name}> </IconButton>
                                    <div className="cart__item__right-side__quantity-control__amount">{cartItem.quantity}</div>
                    <IconButton callBack={DecreaseItemQuantity} width={"3.5rem"} height={"3.5rem"}  Icon={Minus} callBackParam={cartItem.name}> </IconButton>
                                    
                                </div>

                                <CartPageItemGallery gallery={cartItem.gallery} ></CartPageItemGallery>

                            
                            </div>
                    </div>
                            
                        })
                    }

                </div>
            </div>
        )
    }

}
const mapStatToProps = ({ cartReducer,currencyReducer }) => ({
  
    cartItems: cartReducer.cartItems,
    selectedCurrency: currencyReducer.selectedCurrency,
    selectedCurrencySymbol: currencyReducer.selectedCurrencySymbol,
    attributeSelectionIndexes:cartReducer.attributeSelectionIndexes
  
})

const mapDispatchToProps = (dispatch) => ({
  
    addAttributeSelectionsIndex: (itemName, attributeIndex, attributeSelectionIndex) => (dispatch(addAttributeSelectionsIndex(itemName, attributeIndex, attributeSelectionIndex))),
    DecreaseItemQuantity:(itemName)=>dispatch(DecreaseItemQuantity(itemName)),
    IncreaseItemQuantity:(itemName)=>dispatch(IncreaseItemQuantity(itemName)),

})
export default dependecies.connect(mapStatToProps,mapDispatchToProps)(CartPage);