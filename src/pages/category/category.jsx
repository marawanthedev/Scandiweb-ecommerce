import React from 'react'
import CategoryItem from '../../components/CategoryItem/CategoryItem'
import './category.scss'
import { connect } from 'react-redux'
import { AddCartItem } from '../../redux/cart/cart.actions'
import { getAllProducts } from '../../redux/category/category_action'

class CategoryPage extends React.PureComponent {
  componentWillMount () {
    this.props.getAllProducts()
  }

  getProducts = (
    products,
    selectedCurrencySymbol,
    selectedCurrency,
    cartReduxCallBacks,
    CategoryItem
  ) => {
    return products
      ? products.map((item, index) => (
          <CategoryItem
            item={item}
            key={index}
            cartReduxCallBacks={cartReduxCallBacks}
            selectedCurrencySymbol={selectedCurrencySymbol}
            selectedCurrency={selectedCurrency}
          />
        ))
      : null
  }

  render () {
    const {
      products,
      selectedCurrency,
      selectedCurrencySymbol,
      AddCartItem,
      activeCategory
    } = this.props
    const cartReduxCallBacks = {
      AddCartItem
    }
    return (
      <div className='categoryPage'>
        <div className='categoryPage__header'>{activeCategory}</div>
        <div className='categoryPage__items-container'>
          {this.getProducts(
            products,
            selectedCurrencySymbol,
            selectedCurrency,
            cartReduxCallBacks,
            CategoryItem
          )}
        </div>
      </div>
    )
  }
}

const mapStatToProps = ({ categoryReducer, currencyReducer }) => ({
  products: categoryReducer.products,
  selectedCurrency: currencyReducer.selectedCurrency,
  selectedCurrencySymbol: currencyReducer.selectedCurrencySymbol,
  activeCategory: categoryReducer.activeCategory
})

const mapDispatchToProps = dispatch => ({
  AddCartItem: cartItem => dispatch(AddCartItem(cartItem)),
  getAllProducts: () => dispatch(getAllProducts())
})

export default connect(mapStatToProps, mapDispatchToProps)(CategoryPage)
