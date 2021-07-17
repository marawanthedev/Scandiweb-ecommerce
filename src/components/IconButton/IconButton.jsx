import React from "react";
import "./IconButton.scss";

class IconButton extends React.PureComponent {
  render() {
    const { callBack, callBackParam, Icon } = this.props;
    return (
      <button className="icon__button" onClick={() => callBack(callBackParam)}>
        <div
          className="cart-item__content__btn__icon"
          style={{
            backgroundImage: `url(${Icon})`
          }}
        ></div>
      </button>
    );
  }
}

export default IconButton;
