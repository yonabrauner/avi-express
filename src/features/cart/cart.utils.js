export const addItemToCart =  (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(item => item.id === itemToAdd.id);
    if (existingItem) {
        return cartItems.map(item =>
            item.id === itemToAdd.id ?
            {...item, quantity: item.quantity + 1}
            : item);
    }
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
    
};

export const decreaseItemInCart = (cartItems, itemToDecrease) => {
    if (itemToDecrease.quantity === 1){
        return removeItemFromCart(cartItems, itemToDecrease);
    }
    return cartItems.map(item =>
        item.id === itemToDecrease.id ?
        {...item, quantity: item.quantity - 1}
        : item);
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
    return cartItems.filter(item => item.id !== itemToRemove.id);
};