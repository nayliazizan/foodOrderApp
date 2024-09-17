import { useEffect, useState } from "react";
import { MENU_ITEMS_LOCAL_STORAGE_KEY } from "../constant";
import PropTypes from "prop-types";
import itemsContext from "./itemsContext";

function ItemsProvider({children}){
    const [switchPage, setSwitchPage] = useState(true);
    let initialMenuItems = JSON.parse(localStorage.getItem(MENU_ITEMS_LOCAL_STORAGE_KEY));

    if(!initialMenuItems || initialMenuItems.legth === 0){
        initialMenuItems = [];
    }

    const [menuItemsData, setMenuItemsData] = useState(initialMenuItems);

    function addNewItem(newItem){
        setMenuItemsData((prevData) => [...prevData, newItem]);
    }

    useEffect(()=> {
        localStorage.setItem(MENU_ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(menuItemsData));
    }, [menuItemsData]);

    function removeItem(id){
        const newMenuItems = menuItemsData.filter((menuItems)=> menuItems.id !== id);
        setMenuItemsData(newMenuItems);
    }

    function updateItem(id, updatedItem){
        const updatedMenuItems = menuItemsData.map((menuItem)=> {
            if(menuItem.id === id){
                return updatedItem;
            } else {
                return menuItem;
            }
        });
        setMenuItemsData(updatedMenuItems);
    }

    function togglePage(){
        setSwitchPage((prevPage)=> !prevPage);
    }

    const value = {
        itemsData: menuItemsData,
        switchPage,
        addNewItem,
        removeItem,
        updateItem,
        togglePage
    }

    return (
        <itemsContext.Provider value={value}>{children}</itemsContext.Provider>
    )
}

ItemsProvider.propTypes= {
    children: PropTypes.node.isRequired
}

export default ItemsProvider;