import { createContext, useContext } from "react";

const cartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    incrementItem: (id) => {},
    decrementItem: (id) => {},
    clearCart: () => {}
});

export default cartContext;

export const useCartContext = () => useContext(cartContext);