import React from 'react'
import Logo from '../../assets/svg/a-logo.svg'
import ChevronIcon from '../../assets/svg/chevron.svg'
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'
import Slide from 'react-reveal/Slide'
import { connect } from 'react-redux'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import CurrencySwitcher from '../../components/CurrencySwitcher/CurrencySwitcher'
import {
  toggleShowCurrencySwitcher,
  updateSelectedCurrency
} from '../../redux/currency/currency_action'
import { ToggleCartDropDown } from '../../redux/cart/cart.actions'
import {
  getAllProducts,
  updateCategory
} from '../../redux/category/category_action'

class Navbar extends React.PureComponent {
  handleNewCurrencySelection = newCurrencyInfo => {
    this.props.toggleShowCurrencySwitcher()
    this.props.updateSelectedCurrency(newCurrencyInfo)
  }
  manageCurrencySwitcher = currencies => {
    return this.props.showCurrencyswitcher ? (
      <CurrencySwitcher
        currencies={currencies}
        currencySelectionUpdateCallBack={this.handleNewCurrencySelection}
      ></CurrencySwitcher>
    ) : null
  }
  componentWillMount () {
    this.props.getAllProducts()
  }
  render () {
    const { products } = this.props

    const {
      showCurrencyswitcher,
      toggleShowCurrencySwitcher,
      showCart,
      ToggleCartDropDown,
      itemCount,
      categories,
      updateCategory,
      activeCategory,
      currencies
    } = this.props

    let currentCurrency
    if (currencies) {
      currentCurrency = currencies.filter(
        currency => currency.name === this.props.selectedCurrency
      )[0]
    }

    if (products) {
      products.forEach(product => product)
    }
    return (
      <div className='navbar'>
        <Zoom right cascade>
          <div className='navbar__section navbar__section__left'>
            {categories
              ? categories.map((category, index) => (
                  <Link
                    className='navbar__section navbar__section__left__link'
                    to='/'
                    key={index}
                  >
                    <div
                      onClick={() => updateCategory(category)}
                      className={`navbar__item navbar__section__left__item ${
                        activeCategory === category ? 'active' : null
                      }`}
                    >
                      {category}
                    </div>
                  </Link>
                ))
              : null}
          </div>
        </Zoom>

        <Bounce up>
          <div className='navbar__section navbar__section__middle'>
            <Link to='/'>
              <div className='navbar__item navbar__middle-section__logo-container'>
                <img src={Logo} alt='' className='navbar__middle__logo__img' />
              </div>
            </Link>
          </div>
        </Bounce>

        <Slide right>
          <div className='navbar__section navbar__section__right'>
            {this.manageCurrencySwitcher(currencies)}

            {showCart ? (
              <div>
                <div
                  className='cart-overlay'
                  onClick={() => ToggleCartDropDown()}
                />
                <CartDropDown itemCount={itemCount}></CartDropDown>
              </div>
            ) : null}
            <div className='navbar__item navbar__section__right__item'>
              {showCurrencyswitcher ? (
                <div
                  className='currency-overlay'
                  onClick={() => toggleShowCurrencySwitcher()}
                />
              ) : null}
              <img
                src={currentCurrency ? currentCurrency.data.icon : null}
                onClick={toggleShowCurrencySwitcher}
                alt=''
                className='navbar__icon navbar__icon__currency'
              />
              <img
                src={ChevronIcon}
                alt=''
                className={`navbar__icon 
                          navbar__icon__small navbar__icon__chevron ${
                            showCurrencyswitcher
                              ? 'navbar__icon__chevron__rotate'
                              : null
                          }`}
                onClick={() => toggleShowCurrencySwitcher()}
              />
            </div>
            <div className='navbar__item navbar__section__right__item'>
              <CartIcon
                itemCount={itemCount}
                ToggleCartDropDown={ToggleCartDropDown}
              />
            </div>
          </div>
        </Slide>
      </div>
    )
  }
}

const mapStateToProps = ({
  currencyReducer,
  cartReducer,
  categoryReducer
}) => ({
  selectedCurrency: currencyReducer.selectedCurrency,
  showCurrencyswitcher: currencyReducer.showCurrencyswitcher,
  showCart: cartReducer.showCart,
  itemCount:
    cartReducer.cartItems.length > 0
      ? cartReducer.cartItems.reduce(
          (accumaltedQuantity, cartItem) =>
            accumaltedQuantity + cartItem.quantity,
          0
        )
      : 0,
  products: categoryReducer.products,
  categories: categoryReducer.categories,
  activeCategory: categoryReducer.activeCategory,
  currencies: categoryReducer.currencies
})

const mapDispatchToProps = dispatch => ({
  toggleShowCurrencySwitcher: () => dispatch(toggleShowCurrencySwitcher()),
  updateSelectedCurrency: newCurrencySelection =>
    dispatch(updateSelectedCurrency(newCurrencySelection)),
  ToggleCartDropDown: () => dispatch(ToggleCartDropDown()),
  getAllProducts: () => dispatch(getAllProducts()),
  updateCategory: category => dispatch(updateCategory(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
