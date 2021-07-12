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

// export const compareAttributes = (previousItems, newItem) => {
//   let equality = {
//     status: false,
//     indexes: []
//   };

//   const exisitingItems = previousItems.filter((prevItem, index) => {
//     if (prevItem.name === newItem.name) {
//       // equality.index = index;
//       return prevItem;
//     }
//   });

//   previousItems.forEach(prevItem => {
//     for (let i = 0; i < prevItem.attributes.length; i++) {
//       if (
//         JSON.stringify(prevItem.attributes[i].items) ===
//         JSON.stringify(newItem.attributes[i].items)
//       ) {
//         equality.status = true;
//         equality.indexes.push();
//       }
//     }
//   });

//   return equality;
// };

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

export const checkAttributeDuplications = (
  cartItems,
  targetItem,
  targetItemIndex
) => {
  let duplicationInfo = {
    status: false,
    index: null
  };
  
  cartItems.forEach((cartItem, index) => {
    if (
      JSON.stringify(cartItem.attributes) ==
      JSON.stringify(targetItem.attributes)
    ) {
      duplicationInfo.status = true;
      duplicationInfo.index = index;
      console.log(duplicationInfo);
    }
  });

  if (duplicationInfo.status == false) {
    cartItems.filter(item => item.name == item.name)[
      cartItems.length - 1
    ].attributes = targetItem.attributes;
  } else {
    cartItems[duplicationInfo.index].quantity =
      cartItems[duplicationInfo.index].quantity + 1;
    cartItems.splice(targetItemIndex, 1);
  }

  return cartItems;
};

export const addAttributeSelections = (
  cartItems,
  item,
  attributeIndexes,
  attributeSelectionIndexes
) => {
  cartItems = JSON.parse(JSON.stringify(cartItems));

  let targetItemIndex;
  const targetItem = JSON.parse(
    JSON.stringify(
      cartItems.filter((_item, index) => {
        if (_item.cartId === item.cartId) {
          targetItemIndex = index;
          return _item;
        }
      })
    )
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
  cartItems = checkAttributeDuplications(
    cartItems,
    targetItem[0],
    targetItemIndex
  );

  return cartItems;
};
