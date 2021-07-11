import React from "react";
import "./CategoryItem.scss";
import cart from "../../assets/svg/customizableShoppingCart.svg";
import { Link } from "react-router-dom";

class CategoryItem extends React.PureComponent {
  handleCartAddition = item => {
    const { cartReduxCallBacks } = this.props;

    item.cartId = Math.floor(Math.random() * 10000);

    if (item.attributes.length == 0) {
      cartReduxCallBacks.AddCartItem(item);
    } else {
      this.redirectLink.click();
    }
  };
  render() {
    const { selectedCurrency, selectedCurrencySymbol } = this.props;
    let item = JSON.parse(JSON.stringify(this.props.item));
    const { gallery, name, prices, inStock } = item;

    const redirectionInfo = {
      pathname: "/product_display_page",
      state: {
        item: item
      }
    };

    return (
      <div className="category-item">
        {inStock === false ? (
          <div className="category-item__out-of-stock-overlay">
            <span className="category-item__out-of-stock-overlay__text">
              Out of stock
            </span>
          </div>
        ) : null}

        <Link
          ref={link => (this.redirectLink = link)}
          className="category-item__link"
          to={redirectionInfo}
        >
          <div className="category-item__overlay"></div>
        </Link>
        <div
          className="category-item__img"
          style={{ backgroundImage: `url(${gallery[0]})` }}
        ></div>

        <div className="category-item__text">
          <div className="category-item__text__description">{name}</div>
          <div className="category-item__text__price">
            {selectedCurrencySymbol}
            {
              prices.filter(price => price.currency === selectedCurrency)[0][
                "amount"
              ]
            }
          </div>
        </div>

        {inStock ? (
          <div
            className="category-item__add-to-cart-btn"
            onClick={() => this.handleCartAddition(item)}
          >
            <img
              className="category-item__add-to-cart-btn__cart-icon"
              src={cart}
              alt=""
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default CategoryItem;
