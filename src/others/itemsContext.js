import { createContext, useContext } from "react";

const itemsContext = createContext({
    itemsData: [],
    switchPage: null,
    addNewItem: (item) => {},
    removeItem: (id) => {},
    updateItem: (id, updatedItem) => {},
    togglePage: () => {}
});

export default itemsContext;

export const useItemsContext = () => useContext(itemsContext);