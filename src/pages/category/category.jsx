import React from "react";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import "./category.scss";
import { connect } from "react-redux";
import {
  AddCartItem,
  IncreaseItemQuantity,
  DecreaseItemQuantity,
  RemoveItem
} from "../../redux/cart/cart.actions";
import { getProducts } from "../../redux/category/category_action";

class CategoryPage extends React.PureComponent {
  componentWillMount() {
    this.props.getProducts();
  }

  getProducts = (
    categorizedProducts,
    products,
    activeCategory,
    selectedCurrencySymbol,
    selectedCurrency,
    cartReduxCallBacks,
    CategoryItem
  ) => {
    // if (activeCategory != "all") {
    //   if (categorizedProducts) {
    //     return categorizedProducts[activeCategory]
    //       ? categorizedProducts[activeCategory].map((item, index) => (
    //           <CategoryItem
    //             item={item}
    //             key={index}
    //             cartReduxCallBacks={cartReduxCallBacks}
    //             selectedCurrencySymbol={selectedCurrencySymbol}
    //             selectedCurrency={selectedCurrency}
    //           ></CategoryItem>
    //         ))
    //       : null;
    //   }
    // } else {
    //   return products
    //     ? products.map((item, index) => (
    //         <CategoryItem
    //           item={item}
    //           key={index}
    //           cartReduxCallBacks={cartReduxCallBacks}
    //           selectedCurrencySymbol={selectedCurrencySymbol}
    //           selectedCurrency={selectedCurrency}
    //         ></CategoryItem>
    //       ))
    //     : null;
    // }

    return products
      ? products.map((item, index) => (
          <CategoryItem
            item={item}
            key={index}
            cartReduxCallBacks={cartReduxCallBacks}
            selectedCurrencySymbol={selectedCurrencySymbol}
            selectedCurrency={selectedCurrency}
          ></CategoryItem>
        ))
      : null;
  };

  render() {
    const {
      products,
      selectedCurrency,
      selectedCurrencySymbol,
      AddCartItem,
      IncreaseItemQuantity,
      DecreaseItemQuantity,
      RemoveItem,
      activeCategory,
      categorizedProducts
    } = this.props;
    const cartReduxCallBacks = {
      AddCartItem,
      IncreaseItemQuantity,
      DecreaseItemQuantity,
      RemoveItem
    };
    return (
      <div className="categoryPage">
        <div className="categoryPage__header">{activeCategory}</div>
        <div className="categoryPage__items-container">
          {this.getProducts(
            categorizedProducts,
            products,
            activeCategory,
            selectedCurrencySymbol,
            selectedCurrency,
            cartReduxCallBacks,
            CategoryItem
          )}
        </div>
      </div>
    );
  }
}

const mapStatToProps = ({ categoryReducer, currencyReducer }) => ({
  products: categoryReducer.products,
  selectedCurrency: currencyReducer.selectedCurrency,
  selectedCurrencySymbol: currencyReducer.selectedCurrencySymbol,
  activeCategory: categoryReducer.activeCategory
});

const mapDispatchToProps = dispatch => ({
  AddCartItem: cartItem => dispatch(AddCartItem(cartItem)),
  IncreaseItemQuantity: () => dispatch(IncreaseItemQuantity()),
  DecreaseItemQuantity: () => dispatch(DecreaseItemQuantity()),
  RemoveItem: () => dispatch(RemoveItem()),
  getProducts: () => dispatch(getProducts())
});

export default connect(mapStatToProps, mapDispatchToProps)(CategoryPage);
