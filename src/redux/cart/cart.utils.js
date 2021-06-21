export const addCartItemUtil = (previousItems, newItem) => {

    const exisitingItem = previousItems.find(
        (prevItem) => prevItem.name === newItem.name
    );

    if (exisitingItem) {
        return previousItems.map((prevItem) => {
            return prevItem.name === newItem.name ? //   if its already there increase quantity
                {...prevItem, quantity: prevItem.quantity + 1 } : // if item doesnt match id return it as is
                prevItem;
        });
    } else {

        return [...previousItems, {...newItem, quantity: 1 }];
    }
};
export const increaseCartItemQuantityUtil = (previousItems, targetItemName) => {
    const targetItem = previousItems.find(
        (prevItem) => prevItem.name === targetItemName
    );
    if (targetItem) {
        return previousItems.map((prevItem) => {
            return prevItem.name === targetItemName ? {...prevItem, quantity: prevItem.quantity + 1 } :
                prevItem;
        });
    }
};
export const decreaseCartItemQuantityUtil = (previousItems, targetItemName) => {
    const targetItem = previousItems.find(
        (prevItem) => (prevItem.name === targetItemName)
    );
    if (targetItem) {

        if (targetItem.quantity > 1) {
            return previousItems.map((prevItem) => {
                return prevItem.name === targetItem.name ? {...prevItem, quantity: prevItem.quantity - 1 } :
                    prevItem;
            });
        } else {
            return previousItems.filter((prevItem) => prevItem.name !== targetItem.name);
        }
    }
}

export const removeCartItemUtil = (previousItems, targetItemName) => {
    var updatedCartItems = [];
    previousItems.forEach((prevItem) => {

        if (prevItem.name !== targetItemName) {
            updatedCartItems.push(prevItem);
        }
    });
    return updatedCartItems;

}

export const addAttributeSelections = (cartItems, itemName, attributeIndexs, attributeSelectionIndexs) => {

    //making it extensible
    cartItems = JSON.parse(JSON.stringify(cartItems))
    const targetAttributes = JSON.parse(JSON.stringify(cartItems.filter((item) => item.name == itemName)[0].attributes))

    //I have tried finding a way to make in a one loop instead of nested loops
    // to avoid having O(N^2) but unfourtantely i have not found it
    // since that i need to loop through attrb items list to reset unselected attrs to be false
    targetAttributes.forEach((attribute, outerIndex) => {

        if (attributeIndexs.indexOf(outerIndex) !== -1) {
            attribute.items.forEach((item, innerIndex) => {
                innerIndex == attributeSelectionIndexs[outerIndex] ? item.selected = true : item.selected = false
            })
        }
    })

    cartItems.filter((item) => item.name == itemName)[0].attributes = targetAttributes;

    return cartItems;
}