import React from "react"
import Logo from "../../assets/svg/a-logo.svg"
import CartIcon from "../../assets/svg/shopping-cart.svg"
import USD from "../../assets/svg/USD.svg"
import JPY from "../../assets/svg/JPY.svg"
import GBP from "../../assets/svg/GBP.svg"
import ChevronIcon from "../../assets/svg/chevron.svg"
import "./Navbar.scss"
import { connect } from "react-redux"
import CurrencySwitcher from "../../components/CurrencySwitcher/CurrencySwitcher"
import {toggleShowCurrencySwitcher,updateSelectedCurrency} from "../../redux/currency/currency_action"
class Navbar extends React.Component{



    constructor (props) {
        
        super(props);
        this.state = {
            
            
        }
    }

    handleNewCurrencySelection = (newCurrencyInfo) => {
            this.props.updateSelectedCurrency(newCurrencyInfo)
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
        const { showCurrencyswitcher, toggleShowCurrencySwitcher, } = this.props;
        return (
            
            <div className="navbar">

                <div className="navbar__section navbar__section__left">

                        <div className="navbar__item navbar__section__left__item">Women</div>
                        <div className="navbar__item navbar__section__left__item">MEN</div>
                        <div className="navbar__item navbar__section__left__item">KIDS</div>
                </div>  
                <div className="navbar__section navbar__section__middle">
                    <div className="navbar__item navbar__middle-section__logo-container"> <img src={Logo} alt="" className="navbar__middle-section__logo__img"/> </div>
                </div>
                <div className="navbar__section navbar__section__right">

                    {showCurrencyswitcher ? <CurrencySwitcher currencies={currencies}
                    currencySelectionUpdateCallBack={this.handleNewCurrencySelection}></CurrencySwitcher> : null}
                    <div className="navbar__item navbar__section__right__item">
                        <img src={currentCurrency.icon} alt="" className="navbar__icon navbar__icon__currencys" />
                        <img src={ChevronIcon} alt=""
                            
                            className={`navbar__icon 
                          navbar__icon__small navbar__icon__chevron ${showCurrencyswitcher ? "navbar__icon__chevron__rotate" : null}`} onClick={()=>toggleShowCurrencySwitcher()}/>
                    </div>
                      <div className="navbar__item navbar__section__right__item">
                       
                        <img src={CartIcon} alt="" className="navbar__icon navbar__icon__cart"/>
                        
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ currencyReducer}) => ({
    selectedCurrency: currencyReducer.selectedCurrency,
    showCurrencyswitcher:currencyReducer.showCurrencyswitcher
})
const mapDispatchToProps = (dispatch) => ({
    
    toggleShowCurrencySwitcher: () => dispatch(toggleShowCurrencySwitcher()),
    updateSelectedCurrency:(newCurrencySelection)=>dispatch(updateSelectedCurrency(newCurrencySelection))
})
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);