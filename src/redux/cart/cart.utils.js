export const addCartItemUtil = (previousItems, newItem) => {
  const exisitingItem = previousItems.find(
    prevItem => prevItem.cartId === newItem.cartId
  );
  if (exisitingItem) {
    return previousItems.map((prevItem, index) => {
      return prevItem.cartId === newItem.cartId
        ? { ...prevItem, quantity: prevItem.quantity + 1 }
        : prevItem;
    });
  } else {
    return [...previousItems, { ...newItem, quantity: 1 }];
  }
};

export const compareAttributes = (previousItems, newItem) => {
  const exisitingItem = previousItems.find(
    prevItem => prevItem.name === newItem.name
  );

  let equality = {
    status: false,
    index: null
  };

  if (exisitingItem) {
    for (let i = 0; i < exisitingItem.attributes.length; i++) {
      console.log(JSON.stringify(exisitingItem.attributes[i].items));
      console.log(JSON.stringify(newItem.attributes[i].items));
      if (
        JSON.stringify(exisitingItem.attributes[i].items) ===
        JSON.stringify(newItem.attributes[i].items)
      ) {
        equality.status = true;
        equality.index = i;
      }
    }
  }

  return equality;
};
export const increaseCartItemQuantityUtil = (previousItems, newItem) => {
  const targetItem = previousItems.find(
    prevItem => prevItem.cartId === newItem.cartId
  );

  if (targetItem) {
    return previousItems.map(prevItem => {
      return prevItem.cartId === newItem.cartId
        ? { ...prevItem, quantity: prevItem.quantity + 1 }
        : prevItem;
    });
  }
};
export const decreaseCartItemQuantityUtil = (previousItems, newItem) => {
  const targetItem = previousItems.find(
    prevItem => prevItem.cartId === newItem.cartId
  );

  if (targetItem) {
    if (newItem.quantity > 1) {
      return previousItems.map(prevItem => {
        return prevItem.cartId === newItem.cartId
          ? { ...prevItem, quantity: prevItem.quantity - 1 }
          : prevItem;
      });
    } else {
      return previousItems.filter(
        prevItem => prevItem.cartId !== newItem.cartId
      );
    }
  }
};

export const removeCartItemUtil = (previousItems, targetItemName) => {
  var updatedCartItems = [];
  previousItems.forEach(prevItem => {
    if (prevItem.name !== targetItemName) {
      updatedCartItems.push(prevItem);
    }
  });
  return updatedCartItems;
};

export const addAttributeSelections = (
  cartItems,
  item,
  attributeIndexes,
  attributeSelectionIndexes
) => {
  cartItems = JSON.parse(JSON.stringify(cartItems));
  const targetItem = JSON.parse(
    JSON.stringify(cartItems.filter(_item => _item.cartId === item.cartId))
  );

  if (targetItem) {
    targetItem[targetItem.length - 1].attributes.forEach(
      (attribute, outerIndex) => {
        if (attributeIndexes.indexOf(outerIndex) !== -1) {
          attribute.items.forEach((item, innerIndex) => {
            if (innerIndex == attributeSelectionIndexes[outerIndex]) {
              item.selected = true;
            } else {
              item.selected = false;
            }
          });
        }
      }
    );
  }

  cartItems.filter(item => item.name == item.name)[
    cartItems.length - 1
  ].attributes = targetItem[0].attributes;

  return cartItems;
};
