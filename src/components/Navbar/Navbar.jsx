import React from "react"
import Logo from "../../assets/svg/a-logo.svg"

import USD from "../../assets/svg/USD.svg"
import JPY from "../../assets/svg/JPY.svg"
import GBP from "../../assets/svg/GBP.svg"
import ChevronIcon from "../../assets/svg/chevron.svg"
import "./Navbar.scss"
import { connect } from "react-redux"
import CurrencySwitcher from "../../components/CurrencySwitcher/CurrencySwitcher"
import  CartIcon from"../cart-icon/cart-icon.component"
import { toggleShowCurrencySwitcher, updateSelectedCurrency } from "../../redux/currency/currency_action"
import { ToggleCartDropDown } from "../../redux/cart/cart.actions";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'
class Navbar extends React.Component{



    constructor (props) {
        
        super(props);
        this.state = {
            
            
        }
    }

    handleNewCurrencySelection = (newCurrencyInfo) => {
            this.props.updateSelectedCurrency(newCurrencyInfo)
    }
    manageCurrencySwitcher = (currencies) => {
        return this.props.showCurrencyswitcher ? <CurrencySwitcher currencies={currencies}
                        currencySelectionUpdateCallBack={this.handleNewCurrencySelection}></CurrencySwitcher> : null
    }
    render() {
        const currencies = [
            {
            icon: USD,
                text: "USD",
                symbol:"$"
            
            },
            {
                icon: JPY,
                text: "JPY",
                symbol:"¥"
            },
            {
                icon: GBP
                ,text: "GBP",
                symbol:"£"
            }
        ];  
        const currentCurrency = currencies.filter((currency) => currency.text == this.props.selectedCurrency)[0];
        const { showCurrencyswitcher, toggleShowCurrencySwitcher, showCart,ToggleCartDropDown } = this.props;
        return (
            
            <div className="navbar">
            

                <Zoom right cascade>
                <div className="navbar__section navbar__section__left">

                        <div className="navbar__item navbar__section__left__item">Women</div>
                        <div className="navbar__item navbar__section__left__item">MEN</div>
                        <div className="navbar__item navbar__section__left__item">KIDS</div>
                    </div>
                </Zoom>
                    
                <Bounce up >
                     <div className="navbar__section navbar__section__middle">
                    <div className="navbar__item navbar__middle-section__logo-container"> <img src={Logo} alt="" className="navbar__middle-section__logo__img"/> </div>
                </div>
               </Bounce>
                       <div className="navbar__section navbar__section__right">

                    {
                        this.manageCurrencySwitcher(currencies)
                    }
                    
                    {showCart ? <div>
                        <div className="cart-overlay" onClick={()=>ToggleCartDropDown()}></div>
                        <CartDropDown></CartDropDown> 
                        </div>: null}

                    
                  <div className="navbar__item navbar__section__right__item">
                        <img src={currentCurrency.icon} alt="" className="navbar__icon navbar__icon__currencys" />
                        <img src={ChevronIcon} alt=""
                            
                            className={`navbar__icon 
                          navbar__icon__small navbar__icon__chevron ${showCurrencyswitcher ? "navbar__icon__chevron__rotate" : null}`} onClick={()=>toggleShowCurrencySwitcher()}/>
                    </div>
                      <div className="navbar__item navbar__section__right__item">
                       
                     < CartIcon></CartIcon>
                        
                    </div>
                      

                </div>
             
            </div>
        )
    }
}
const mapStateToProps = ({ currencyReducer,cartReducer}) => ({
    selectedCurrency: currencyReducer.selectedCurrency,
    showCurrencyswitcher: currencyReducer.showCurrencyswitcher,
    showCart:cartReducer.showCart
})
const mapDispatchToProps = (dispatch) => ({
    
    toggleShowCurrencySwitcher: () => dispatch(toggleShowCurrencySwitcher()),
    updateSelectedCurrency: (newCurrencySelection) => dispatch(updateSelectedCurrency(newCurrencySelection)),
    ToggleCartDropDown:()=>dispatch(ToggleCartDropDown())
})
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);