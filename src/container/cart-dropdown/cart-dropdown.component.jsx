import React from 'react'
import './cart-dropdown.styles.scss'
import { connect } from 'react-redux'
import CartItem from '../../components/cart-drop-down-items/cart-drop-down-items.component'
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom'

import {
  DecreaseItemQuantity,
  IncreaseItemQuantity,
  ToggleCartDropDown,
} from '../../redux/cart/cart.actions'

class CartDropDown extends React.PureComponent {
  render() {
    const {
      cartItems,
      DecreaseItemQuantity,
      IncreaseItemQuantity,
      selectedCurrency,
      selectedCurrencySymbol,
      itemCount,
      totalPrice,
      ToggleCartDropDown,
    } = this.props

    return (
      <Zoom>
        <div className="cart-dropdown ">
          <div className="cart-dropdown__items-count-container">
            My Bag.{' '}
            <span className="cart-dropdown__items-count">
              {itemCount} items
            </span>
          </div>
          <ul className="cart-items">
            {cartItems.length > 0
              ? cartItems.map(({ ...cartData }, index) => {
                  return (
                    <CartItem
                      key={index}
                      selectedCurrency={selectedCurrency}
                      ToggleCartDropDownCallBack={ToggleCartDropDown}
                      selectedCurrencySymbol={selectedCurrencySymbol}
                      DecreaseItemQuantity={DecreaseItemQuantity}
                      IncreaseItemQuantity={IncreaseItemQuantity}
                      {...cartData}
                      item={cartData}
                    />
                  )
                })
              : null}
          </ul>
          <div className="cart-dropdown__total-price">
            <span>Total</span>
            <span>
              {selectedCurrencySymbol}
              {totalPrice.toFixed(2)}
            </span>
          </div>
          <div className="buttons-container">
            <Link
              className="buttons-container__link"
              to="/cart"
              onClick={() => ToggleCartDropDown()}
            >
              <button className="buttons-container__button buttons-container__button__viewbag">
                View Bag
              </button>
            </Link>
            <button className="buttons-container__button buttons-container__button__checkout">
              Checkout
            </button>
          </div>
        </div>
      </Zoom>
    )
  }
}

const mapStateToProps = ({ cartReducer, currencyReducer }) => ({
  showCart: cartReducer.showCart,
  cartItems: cartReducer.cartItems,
  selectedCurrency: currencyReducer.selectedCurrency,
  selectedCurrencySymbol: currencyReducer.selectedCurrencySymbol,
  totalPrice:
    cartReducer.cartItems.length > 0
      ? cartReducer.cartItems.reduce(
          (accumaltedPrice, cartItem) =>
            accumaltedPrice +
            cartItem.quantity *
              cartItem.prices.filter(
                (price) => price.currency === currencyReducer.selectedCurrency
              )[0]['amount'],
          0
        )
      : 0,
})

const mapDispatchToProps = (dispatch) => ({
  DecreaseItemQuantity: (itemName) => dispatch(DecreaseItemQuantity(itemName)),
  IncreaseItemQuantity: (itemName) => dispatch(IncreaseItemQuantity(itemName)),
  ToggleCartDropDown: () => dispatch(ToggleCartDropDown()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartDropDown)
