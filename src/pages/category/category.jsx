import React from "react"
import  CategoryItem from "../../components/CategoryItem/CategoryItem"
import "./Category.scss";
import { connect } from "react-redux"
import { AddCartItem, IncreaseItemQuantity, DecreaseItemQuantity, RemoveItem } from "../../redux/cart/cart.actions"
import {getProducts} from "../../redux/category/category_action"

class CategoryPage extends React.Component{


    
    constructor (props) {
        
        super(props);

       
    }
  componentWillMount() {
    this.props.getProducts()
    }
 
    render() {
      const {products, selectedCurrency, selectedCurrencySymbol,AddCartItem,IncreaseItemQuantity,DecreaseItemQuantity,RemoveItem , activeCategory} = this.props;
      const cartReduxCallBacks = { AddCartItem, IncreaseItemQuantity, DecreaseItemQuantity, RemoveItem }
    
      return (
         <div className="categoryPage" >
            <div className="categoryPage__header">
               {activeCategory}
          </div>
 <div className="categoryPage__items-container">
         {   products?products[activeCategory].map((item) =>
                  <CategoryItem item={item}  cartReduxCallBacks={cartReduxCallBacks}
                  selectedCurrencySymbol={selectedCurrencySymbol}
                  selectedCurrency={selectedCurrency} margin="2rem 1rem"></CategoryItem>
                  ):null}
          
                  </div>
           
        </div>
      )
    }

}

const mapStatToProps = ({ categoryReducer, currencyReducer }) => ({
  
  products: categoryReducer.products,
  selectedCurrency: currencyReducer.selectedCurrency,
  selectedCurrencySymbol: currencyReducer.selectedCurrencySymbol,
   activeCategory:categoryReducer.activeCategory
})
const mapDispatchToProps = (dispatch) => ({
  
  AddCartItem:(cartItem)=>(dispatch(AddCartItem(cartItem))),
  IncreaseItemQuantity:()=>(dispatch(IncreaseItemQuantity())),
  DecreaseItemQuantity:()=>(dispatch(DecreaseItemQuantity())),
  RemoveItem: () => (dispatch(RemoveItem())),
  getProducts: ()=>  (dispatch(getProducts()))
})

export default connect(mapStatToProps,mapDispatchToProps)(CategoryPage);