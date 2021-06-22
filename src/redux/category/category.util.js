export const CategorizeProducts = (data) => {
    let categorizedArrayOfProducts = [];
    let savedCategories = [];

    data.forEach((product) => {
        if (savedCategories.indexOf(product.category) === -1) {
            categorizedArrayOfProducts[product.category] = []
            categorizedArrayOfProducts[product.category].push(product)
            savedCategories.push(product.category);
        } else {
            categorizedArrayOfProducts[product.category].push(product)
        }
    })

    return categorizedArrayOfProducts;
}
export const divideCategories = (products) => {

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    let categories = []

    products.forEach((product) => {
        categories.push(product.category)
    })
    categories = categories.filter(onlyUnique);
    return categories
}