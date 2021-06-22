import React from "react"
import Fade from 'react-reveal/Fade'
import "./CurrencySwitcher.scss"
class CurrencySwitcher extends React.Component{
    constructor (props) {
        
        super(props);
        this.state = {
            
        }
    }
    render() {
        
        const { currencies, currencySelectionUpdateCallBack } = this.props;
        
        return (
            
            <Fade>
                <div className="currency-switcher-container">
                {currencies.map((currency,index) => {
                    
                    return <div key={index} className="currency-switcher-container__item" onClick={() => currencySelectionUpdateCallBack({
                        name: currency.text,
                        symbol:currency.symbol
                    })}>

                       <img src={currency.icon}className="currency-switcher-container__item__icon"></img>
                        <span className="currency-switcher-container__item__text">{currency.text}</span>
                    </div>
                })}
            </div>
            </Fade>
        )
    }

}

export default CurrencySwitcher;