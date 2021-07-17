import AUD from "../../assets/svg/AUD.svg"
import USD from "../../assets/svg/USD.svg"
import JPY from "../../assets/svg/JPY.svg"
import GBP from "../../assets/svg/GBP.svg"
import RUB from "../../assets/svg/RUB.svg"

export const divideCategories = products => {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  let categories = [];

  products.forEach(product => {
    categories.push(product.category);
  });
  categories.push("all");
  categories = categories.filter(onlyUnique);
  return categories;
};

export const extractCurrencies = sampleProduct => {



  const currencies = [];

  if (sampleProduct) {
    sampleProduct.prices.forEach((price) => currencies.push({ name: price.currency, data: mapCurrencySymbolData(price.currency) }))
  }


  return currencies;
}
export const mapCurrencySymbolData = currency => {

  switch (currency) {

    case "USD":
      return { symbol: '$', icon: USD }
    case "JPY":
      return { symbol: '¥', icon: JPY }
    case "GBP":
      return { symbol: '£', icon: GBP }
    case "RUB":
      return { symbol: '₽', icon: RUB }
    case "AUD":
      return { symbol: '$', icon: AUD }
    default:
      return null
  }
}
