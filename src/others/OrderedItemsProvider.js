import PropTypes from "prop-types"; //provide type-checking for component props
import { useEffect, useState, useMemo } from "react";
import { ORDER_ITEMS_LOCAL_STORAGE_KEY } from "../constant"; //constant key for storing ordered items in local storage
import OrderedItemsContext from "./orderedItemsContext";

function OrderedItemsProvider({children}){
    //initialize ordered items from local storage or go to empty array if none are found
    const initialOrderedItems = JSON.parse(localStorage.getItem(ORDER_ITEMS_LOCAL_STORAGE_KEY)) || [];
    const [orderedItems, setOrderedItems] = useState(initialOrderedItems);

    //calculate total price using useMemo to enhance preformance
    const totalAmount = useMemo(() => {
        if(orderedItems.length < 1){
            return 0;
        }

        return orderedItems.reduce(
            (acc, curr) => acc + curr.totalPriceForAllItems, 0
        );
    }, [orderedItems]);

    //store ordered items in local storage everytime its state changes
    useEffect(() => {
        localStorage.setItem(ORDER_ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(orderedItems))
    }, [orderedItems]);

    function addOrderItem(newItem){
        setOrderedItems((prevData) => [...prevData, newItem]);
    }

    function clearOrderedItems(){
        setOrderedItems([]);
    }

    //object that contains state n functions to give to all children components
    const value = {
        orderedItems,
        totalAmount,
        addOrderItem,
        clearOrderedItems
    }

    return (
        <OrderedItemsContext.Provider value={value}>
            {children}
        </OrderedItemsContext.Provider>
    );
}

//component expects that children will pass in
OrderedItemsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default OrderedItemsProvider;