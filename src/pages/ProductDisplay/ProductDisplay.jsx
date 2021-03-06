import React from 'react'
import './ProductDisplay.scss'
import ItemAttribues from '../../components/ItemAttributes/ItemAttribues'
import { connect } from 'react-redux'
import WarningIcon from '../../assets/svg/warning.svg'
import CloseIcon from '../../assets/svg/close.svg'
import Zoom from 'react-reveal/Zoom'
import {
  AddCartItem,
  addAttributeSelectionsIndex
} from '../../redux/cart/cart.actions'

class ProductDisplayPage extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      selectedImageIndex: 0,
      attributeIndex: [],
      attributeSelectionIndex: [],
      showAttributeSelectionAlert: false,
      item: null
    }
  }

  handleAttributeSelection = (
    newAttributeIndex,
    newAttributeSelectionIndex
  ) => {
    let { attributeIndex, attributeSelectionIndex } = this.state

    if (attributeIndex.indexOf(newAttributeIndex) === -1) {
      attributeIndex.push(newAttributeIndex)
      attributeSelectionIndex.push(newAttributeSelectionIndex)
    } else {
      attributeSelectionIndex = this.checkForAttributeExisitingSelection(
        attributeSelectionIndex,
        attributeIndex,
        newAttributeIndex,
        newAttributeSelectionIndex
      )
    }

    this.updateAttributeSelections(attributeIndex, attributeSelectionIndex)
  }

  checkForAttributeExisitingSelection = (
    attributeSelectionIndex,
    attributeIndex,
    newAttributeIndex,
    newAttributeSelectionIndex
  ) => {
    let exisitngIndex = attributeIndex.indexOf(
      attributeIndex.find(item => item === newAttributeIndex)
    )
    if (attributeSelectionIndex[exisitngIndex] !== newAttributeSelectionIndex) {
      attributeSelectionIndex[exisitngIndex] = newAttributeSelectionIndex
    } else {
      attributeSelectionIndex[exisitngIndex] = undefined
    }
    return attributeSelectionIndex
  }

  updateAttributeSelections = (attributeIndex, attributeSelectionIndex) => {
    this.setState({
      attributeIndex: attributeIndex,
      attributeSelectionIndex: attributeSelectionIndex
    })
  }
  confirmAttributeSelections = (
    attributes,
    attributeIndex,
    attributeSelectionIndex
  ) => {
    let allowAdditon = true

    if (attributeIndex.length === attributes.length) {
      attributeIndex.forEach(item =>
        item === undefined ? (allowAdditon = false) : null
      )
      attributeSelectionIndex.forEach(item =>
        item === undefined ? (allowAdditon = false) : null
      )
    } else {
      allowAdditon = false
    }
    return allowAdditon
  }

  handleAddToCartAction = (item, attributeIndex, attributeSelectionIndex) => {
    const { AddCartItem, addAttributeSelectionsIndex } = this.props
    item.cartId = Math.floor(Math.random() * 10000)

    if (
      this.confirmAttributeSelections(
        item.attributes,
        attributeIndex,
        attributeSelectionIndex
      )
    ) {
      AddCartItem(item, attributeIndex, attributeSelectionIndex)
      addAttributeSelectionsIndex(item, attributeIndex, attributeSelectionIndex)
    } else {
      this.showAttributeAlert()
      setTimeout(this.resetAttributeAlert, 2500)
    }
  }

  showAttributeAlert = () => {
    this.setState({ showAttributeSelectionAlert: true })
  }
  resetAttributeAlert = () => {
    this.setState({ showAttributeSelectionAlert: false })
  }

  closeAlertPopUp = () => {
    this.setState({
      showAttributeSelectionAlert: false
    })
  }

  componentWillMount () {
    this.setState({ item: { ...this.props.location.state.item } })
  }

  render () {
    const { item } = this.state
    const {
      selectedImageIndex,
      attributeSelectionIndex,
      attributeIndex,
      showAttributeSelectionAlert
    } = this.state
    const { selectedCurrency, selectedCurrencySymbol } = this.props
    const itemPrice = item.prices.filter(
      price => price.currency === selectedCurrency
    )[0].amount

    return (
      <div className='productDisplayPage'>
        {showAttributeSelectionAlert ? (
          <Zoom>
            <div className='productDisplayPage__alert-box'>
              <div
                className='productDisplayPage__alert-box__closeIcon'
                onClick={this.closeAlertPopUp}
                style={{ backgroundImage: `url(${CloseIcon})` }}
              />
              <div
                className='productDisplayPage__alert-box__warningIcon'
                style={{ backgroundImage: `url(${WarningIcon})` }}
              />
              <div className='productDisplayPage__alert-box__text'>
                <div className='productDisplayPage__alert-box__text__header'>
                  Error
                </div>
                <div>Please select all attributes</div>
              </div>
            </div>
          </Zoom>
        ) : null}

        <div className='productDisplayPage__left-side'>
          <div className='productDisplayPage__left-side__images-gallery'>
            {item.gallery.map((galleryItem, index) => (
              <div
                className='productDisplayPage__left-side__images-gallery__item'
                key={index}
                onClick={() => this.setState({ selectedImageIndex: index })}
                style={{ backgroundImage: `url(${galleryItem})` }}
              />
            ))}
          </div>
          <div
            className='productDisplayPage__left-side__selected-image-container'
            style={{
              backgroundImage: `url(${item.gallery[selectedImageIndex]})`
            }}
          />
        </div>

        <div className='productDisplayPage__product__info'>
          <div className='productDisplayPage__product__info__name'>
            {item.name}
          </div>
          <div className='productDisplayPage__product__info__item-attributes__container'>
            {item.attributes.map((attribute, index) => (
              <div className='productDisplayPage__product__info__item-attributes__container__item'>
                <ItemAttribues
                  key={index}
                  attribute={attribute}
                  attributeIndex={index}
                  attributeSelectionIndex={
                    attributeSelectionIndex[attributeSelectionIndex.length - 1]
                  }
                  toggleButtons={true}
                  item={item}
                  onClickCallBack={this.handleAttributeSelection}
                />
              </div>
            ))}
          </div>
          <div className='productDisplayPage__product__info__price'>
            <div>Price:</div>
            <div className='productDisplayPage__product__info__price__amount'>
              {selectedCurrencySymbol}
              {itemPrice}
            </div>
          </div>
          {item.inStock ? (
            <button
              className='productDisplayPage__product__info__btn'
              onClick={() =>
                this.handleAddToCartAction(
                  item,
                  attributeIndex,
                  attributeSelectionIndex
                )
              }
            >
              Add to Cart
            </button>
          ) : null}
          <p></p>
          <div className='productDisplayPage__product__info__description'>
            {item.description.split(/[>,<,/,p]+/).join('')}
          </div>
        </div>
      </div>
    )
  }
}
const mapStatToProps = ({ currencyReducer, cartReducer }) => ({
  selectedCurrency: currencyReducer.selectedCurrency,
  selectedCurrencySymbol: currencyReducer.selectedCurrencySymbol,
  attributeSelectionIndexes: cartReducer.attributeSelectionIndexes
})

const mapDispatchToProps = dispatch => ({
  AddCartItem: (item, attributeIndex, attributeSelectionIndex) =>
    dispatch(AddCartItem(item, attributeIndex, attributeSelectionIndex)),

  addAttributeSelectionsIndex: (
    item,
    attributeIndex,
    attributeSelectionIndex
  ) =>
    dispatch(
      addAttributeSelectionsIndex(item, attributeIndex, attributeSelectionIndex)
    )
})

export default connect(mapStatToProps, mapDispatchToProps)(ProductDisplayPage)
