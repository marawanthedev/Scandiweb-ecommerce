import React from "react";
import "./Cart.scss";
import { connect } from "react-redux";
import ItemAttribues from "../../components/ItemAttributes/ItemAttribues";
import IconButton from "../../components/IconButton/IconButton";
import Plus from "../../assets/svg/Plus.svg";
import Minus from "../../assets/svg/Minus.svg";
import CartPageItemGallery from "../../components/cartPageItemGallery/cartPageItemGallery";
import {
  DecreaseItemQuantity,
  IncreaseItemQuantity
} from "../../redux/cart/cart.actions";
import Fade from "react-reveal/Fade";

class CartPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      attributeIndex: [],
      attributeSelectionIndex: []
    };
  }

  intializeImageSelections = itemsCount => {
    let mockImageSelections = [];
    for (let i = 0; i < itemsCount; i++) {
      mockImageSelections[i] = 0;
    }
  };

  render() {
    const {
      selectedCurrency,
      selectedCurrencySymbol,
      DecreaseItemQuantity,
      IncreaseItemQuantity
    } = this.props;
    const { attributeSelectionIndex } = this.state;
    const cartItems = JSON.parse(JSON.stringify(this.props.cartItems));
    this.intializeImageSelections(cartItems.length);

    return (
      <div className="cart">
        <div className="cart__header">Cart</div>
        <div className="cart__items-container">
          {cartItems.map((cartItem, index) => {
            return (
              <div className="cart__item" key={index}>
                <div className="cart__item__left-side">
                  <Fade left>
                    <div className="cart__item__name">{cartItem.name}</div>
                    <div className="cart__item__price">
                      {selectedCurrencySymbol}
                      {
                        cartItem.prices.filter(
                          price => (price.currency = selectedCurrency)
                        )[0].amount
                      }
                    </div>
                  </Fade>
                  <div className="cart__item__attributes">
                    {cartItem.attributes.map((attribute, index) => {
                      const attributeSelection = attribute.items.filter(
                        item => item.selected == true
                      )[0];
                      if (attributeSelection) {
                        return (
                          <ItemAttribues
                            key={index}
                            hideAttributeName={false}
                            attribute={attribute}
                            attributeIndex={index}
                            toggleButtons={false}
                            attributeSelectionIndex={
                              attributeSelectionIndex[
                                attributeSelectionIndex.length - 1
                              ]
                            }
                            item={cartItem}
                            onClickCallBack={() => {}}
                          ></ItemAttribues>
                        );
                      }
                    })}
                  </div>
                </div>
                <div className="cart__item__right-side">
                  <div className="cart__item__right-side__quantity-control">
                    <IconButton
                      callBack={IncreaseItemQuantity}
                      Icon={Plus}
                      callBackParam={cartItem}
                    >
                      {" "}
                    </IconButton>
                    <div className="cart__item__right-side__quantity-control__amount">
                      {cartItem.quantity}
                    </div>
                    <IconButton
                      callBack={DecreaseItemQuantity}
                      Icon={Minus}
                      callBackParam={cartItem}
                    >
                      {" "}
                    </IconButton>
                  </div>
                  <CartPageItemGallery
                    gallery={cartItem.gallery}
                  ></CartPageItemGallery>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStatToProps = ({ cartReducer, currencyReducer }) => ({
  cartItems: cartReducer.cartItems,
  selectedCurrency: currencyReducer.selectedCurrency,
  selectedCurrencySymbol: currencyReducer.selectedCurrencySymbol,
  attributeSelectionIndexes: cartReducer.attributeSelectionIndexes
});

const mapDispatchToProps = dispatch => ({
  DecreaseItemQuantity: itemName => dispatch(DecreaseItemQuantity(itemName)),
  IncreaseItemQuantity: itemName => dispatch(IncreaseItemQuantity(itemName))
});

export default connect(mapStatToProps, mapDispatchToProps)(CartPage);
