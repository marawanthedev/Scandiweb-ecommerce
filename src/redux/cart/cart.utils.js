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