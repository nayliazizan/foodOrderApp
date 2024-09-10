import { createContext, useContext } from "react";

const OrderedItemsContext = createContext({
    orderedItems: [],
    totalAmount: 0,
    addOrderItem: (newItem) => {},
    removeOrderItem: (customerId, itemId) => {},
    clearOrderedItems: () => {}
});

export default OrderedItemsContext;

export const useOrderedItemsContext = () => useContext(OrderedItemsContext);