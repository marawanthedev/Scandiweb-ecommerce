export const addCartItemUtil = (previousItems, newItem) => {
  //    using find
  // this will check if there is a duplicate
  const exisitingItem = previousItems.find(
    (prevItem) => prevItem.id === newItem.id
  );

  if (exisitingItem) {
    return previousItems.map((prevItem) => {
      return prevItem.id === newItem.id
        ? //   if its already there increase quantity
          { ...prevItem, quantity: prevItem.quantity + 1 }
        : // if item doesnt match id return it as is
          prevItem;
    });
  } else {
    //   spreading the prev items and adding new object which spreads some of its data
    // and then we give it a quantity of 1
    return [...previousItems, { ...newItem, quantity: 1 }];
  }
};
export const increaseCartItemQuantityUtil = (previousItems, targetItemId) => {
  const targetItem = previousItems.find(
    (prevItem) => prevItem.id === targetItemId
  );
  if (targetItem) {
    return previousItems.map((prevItem) => {
      return prevItem.id === targetItem.id
        ? { ...prevItem, quantity: prevItem.quantity + 1 }
        : prevItem;
    });
  }
};
export const decreaseCartItemQuantityUtil = (previousItems, targetItemId) => {
  const targetItem = previousItems.find(
    (prevItem) => (prevItem.id = targetItemId)
  );

  var updatedCartItems = [];
  
  previousItems.forEach((prevItem) => {
    if (prevItem.id === targetItemId) {
      if (prevItem.quantity > 1) {
        updatedCartItems.push({ ...prevItem, quantity: prevItem.quantity - 1 });
      } else {
      }
    } else {
      updatedCartItems.push(prevItem);
    }
  });
  return updatedCartItems;
};

export const removeCartItemUtil=(previousItems,targetItemId)=>{
  var updatedCartItems = [];
  previousItems.forEach((prevItem) => {

    if (prevItem.id !== targetItemId) {
      updatedCartItems.push(prevItem);
    } 
    else{
      console.log(prevItem)
    }
  });
  return updatedCartItems;
  
}
