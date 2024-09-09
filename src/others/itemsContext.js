import { createContext, useContext } from "react";

const itemsContext = createContext({
    itemsData: [],
    switchPage: null,
    addNewItem: (item) => {},
    removeItem: (id) => {},
    updateItem: (id, updateItem) => {},
    togglePage: () => {}
});

export default itemsContext;

export const useItemsContext = () => useContext(itemsContext);