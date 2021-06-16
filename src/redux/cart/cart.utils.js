export const addCartItemUtil = (previousItems, newItem) => {

    console.log("new item");

    console.log(newItem)
        //    using find
        // this will check if there is a duplicate
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
        //   spreading the prev items and adding new object which spreads some of its data
        // and then we give it a quantity of 1
        return [...previousItems, {...newItem, quantity: 1 }];
    }
};
export const increaseCartItemQuantityUtil = (previousItems, targetItemName) => {
    const targetItem = previousItems.find(
        (prevItem) => prevItem.name === targetItemName
    );
    if (targetItem) {
        return previousItems.map((prevItem) => {
            return prevItem.id === targetItem.id ? {...prevItem, quantity: prevItem.quantity + 1 } :
                prevItem;
        });
    }
};
export const decreaseCartItemQuantityUtil = (previousItems, targetItemName) => {
    const targetItem = previousItems.find(
        (prevItem) => (prevItem.name = targetItemName)
    );
    console.log(targetItem.name)

    var updatedCartItems = [];

    previousItems.forEach((prevItem) => {
        if (prevItem.name === targetItem.name) {
            if (prevItem.quantity > 1) {
                updatedCartItems.push({...prevItem, quantity: prevItem.quantity - 1 });
            } else {}
        } else {
            updatedCartItems.push(prevItem);
        }
    });
    return updatedCartItems;
};

export const removeCartItemUtil = (previousItems, targetItemId) => {
    var updatedCartItems = [];
    previousItems.forEach((prevItem) => {

        if (prevItem.id !== targetItemId) {
            updatedCartItems.push(prevItem);
        } else {
            console.log(prevItem)
        }
    });
    return updatedCartItems;

}