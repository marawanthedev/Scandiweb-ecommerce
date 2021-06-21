import { AddCartItem } from "./helpers/dependencies"
import { addAttributeSelectionsIndex } from "./helpers/dependencies"
import dependecies from "./helpers/dependencies"

class ProductDisplayPage extends dependecies.React.Component{


    constructor (props) {
        super(props);
        this.state = {
            selectedImageIndex: 0,
            attributeIndex: [],
            attributeSelectionIndex:[]
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
        })
        
    }

    render() {
        const item = {...this.props.location.state.item};
        const { selectedImageIndex, attributeSelectionIndex,attributeIndex} = this.state
        const { selectedCurrency, selectedCurrencySymbol, AddCartItem, attributeSelectionIndexes, addAttributeSelectionsIndex } = this.props;
        const { ItemAttribues } = dependecies;
        const itemPrice = item.prices.filter((prices) => prices.currency === selectedCurrency)[0].amount;
        return <div className="productDisplayPage">
            <div className="productDisplayPage__left-side">
                <div className="productDisplayPage__left-side__images-gallery">

                    {item.gallery.map((galleryItem, index) =>
                        <div className="productDisplayPage__left-side__images-gallery__item" key={index} onClick={()=>this.setState({selectedImageIndex:index})} style={{ backgroundImage: `url(${galleryItem})` }}></div>)}
                </div>
                <div className="productDisplayPage__left-side__selected-image-container" style={{backgroundImage:`url(${item.gallery[selectedImageIndex]})`}}></div>

            </div>
            <div className="productDisplayPage__product__info">

                <div className="productDisplayPage__product__info__name">{item.name}</div>
                <div className="productDisplayPage__product__info__item-attributes__container">

                    {
                        item.attributes.map((attribute, index) => <ItemAttribues key={index} attribute={attribute} attributeIndex={index}
                        attributeSelectionIndex={attributeSelectionIndex[attributeSelectionIndex.length-1]}   item={item} onClickCallBack={this.handleAttributeSelection}></ItemAttribues>)
                     } 
               
        
                </div>
                            <div className="productDisplayPage__product__info__price">
                    <div>Price:</div>
                    <div className="productDisplayPage__product__info__price__amount">{selectedCurrencySymbol}{itemPrice}</div>
                </div>
                <button className="productDisplayPage__product__info__btn" onClick={() => {
                    AddCartItem(item)
                addAttributeSelectionsIndex(item.name,attributeIndex,attributeSelectionIndex)}}> Add to Cart</button>
                <div className="productDisplayPage__product__info__description"  dangerouslySetInnerHTML={{__html:item.description }}>
             
                </div>
            </div>

        </div>
    }
}
const mapStatToProps = ({ currencyReducer,cartReducer }) => ({
  
  selectedCurrency: currencyReducer.selectedCurrency,
  selectedCurrencySymbol: currencyReducer.selectedCurrencySymbol,
  attributeSelectionIndexes:cartReducer.attributeSelectionIndexes
})

const mapDispatchToProps = (dispatch) => ({
  
    AddCartItem: (cartItem) => (dispatch(AddCartItem(cartItem))),
    addAttributeSelectionsIndex:(itemName,attributeIndex, attributeSelectionIndex)=>(dispatch(addAttributeSelectionsIndex(itemName,attributeIndex, attributeSelectionIndex)))

})
export default dependecies.connect(mapStatToProps,mapDispatchToProps)(ProductDisplayPage);