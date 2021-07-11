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
