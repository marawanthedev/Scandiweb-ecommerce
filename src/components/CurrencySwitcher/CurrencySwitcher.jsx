import React from 'react'
import Fade from 'react-reveal/Fade'
import './CurrencySwitcher.scss'

class CurrencySwitcher extends React.PureComponent {
  render () {
    const { currencies, currencySelectionUpdateCallBack } = this.props

    return (
      <Fade>
        <div className='currency-switcher-container'>
          {currencies.map((currency, index) => {
            return (
              <div
                key={index}
                className='currency-switcher-container__item'
                onClick={() =>
                  currencySelectionUpdateCallBack({
                    name: currency.name,
                    symbol: currency.data.symbol
                  })
                }
              >
                <img
                  src={currency.data.icon}
                  className='currency-switcher-container__item__icon'
                  alt='currency'
                />
                <span className='currency-switcher-container__item__text'>
                  {currency.name}
                </span>
              </div>
            )
          })}
        </div>
      </Fade>
    )
  }
}

export default CurrencySwitcher
