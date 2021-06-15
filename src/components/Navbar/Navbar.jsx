import React from "react"
import Logo from "../../assets/svg/a-logo.svg"
import CartIcon from "../../assets/svg/shopping-cart.svg"
import DollarIcon from "../../assets/svg/$.svg"
import ChevronIcon from "../../assets/svg/chevron.svg"
import "./Navbar.scss"
class Navbar extends React.Component{



    constructor (props) {
        
        super(props);
        this.state = {
            
        }
    }
    render() {
        

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

                    <div className="navbar__item navbar__section__right__item">
                        <img src={DollarIcon} alt="" className="navbar__icon " />
                        <img src={ChevronIcon} alt="" className="navbar__icon 
                          navbar__icon__small navbar__icon__chevron"/>
                    </div>
                      <div className="navbar__item navbar__section__right__item">
                       
                        <img src={CartIcon} alt="" className="navbar__icon navbar__cart-icon"/>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;