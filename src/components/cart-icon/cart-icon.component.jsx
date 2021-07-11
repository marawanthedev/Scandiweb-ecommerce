import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/svg/shopping-cart.svg";

class CartIcon extends React.PureComponent {
  render() {
    const { ToggleCartDropDown, itemCount } = this.props;
    return (
      <div className={`cart-icon`} onClick={() => ToggleCartDropDown()}>
        <ShoppingIcon className="shopping-icon"></ShoppingIcon>
        {itemCount !== 0 ? (
          <div className="item-count-circle">
            <span className="item-count ">{itemCount}</span>
          </div>
        ) : null}
      </div>
    );
  }
}
export default CartIcon;
