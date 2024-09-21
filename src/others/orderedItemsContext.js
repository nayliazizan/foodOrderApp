import { createContext, useContext } from "react";

const OrderedItemsContext = createContext({
    orderedItems: [], //list of ordered items
    totalAmount: 0, //total price of all ordered items
    addOrderItem: (newItem) => {}, //function to add new order
    clearOrderedItems: () => {} //function to clear all items 
});

export default OrderedItemsContext;

export const useOrderedItemsContext = () => useContext(OrderedItemsContext);