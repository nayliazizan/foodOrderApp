import { Box, Button, Divider, Typography, Fab } from "@mui/material";
import { useState } from "react";
import Meals from "../Meals";
import DeletePopUp from "./DeletePopUp";
import CartProvider from "../../others/CartProvider";
import FoodForm from "./FoodForm";
import OrderPopUp from "./OrderPopUp";
import { AddCircleOutline } from "@mui/icons-material";

function Main(){
    const [openAddItemForm, setOpenItemForm] = useState(false);
    const [editItemId, setEditItemId] = useState(null);
    const [openDeletePopUp, setOpenDeletePopUp] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState(null);

    //open the form to add new bagel
    function handleClickOpenItemForm(){
        setOpenItemForm(true);
        setEditItemId(null);
    }

    //open the form to edit existing bagel
    function handleEditItem(itemId){
        setOpenItemForm(true);
        setEditItemId(itemId);
    }

    //open the confirmation card of the bagel
    function handleDeleteItem(itemId){
        setOpenDeletePopUp(true);
        setDeleteItemId(itemId);
    }

    return(
        <Box sx={{flex: 4}} paddingY={2} height={"100%"}>
            <Box display="flex" flexDirection="column">
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    paddingX={{xs: 2, sm: 3, md: 4}}
                >
                    <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        height="100%"
                        flexGrow={1}
                        flexShrink={1}
                    >
                        <Typography
                            variant="h4"
                            component={"h1"}
                            textTransform={"uppercase"}
                            fontSize={{
                                xs: "0.75rem",
                                sm: "1rem",
                                md: "1.5rem"
                            }}
                            noWrap
                        >
                            Available Bagels
                        </Typography>
                    </Box>
                </Box>

                <Divider orientation="horizontal" sx={{ borderBottomWidth: 2, marginY: 2}}/>

                <CartProvider>
                    <Meals handleEditItem={handleEditItem} handleDeleteItem={handleDeleteItem}/>
                    <DeletePopUp
                        open={openDeletePopUp}
                        setOpen={setOpenDeletePopUp}
                        itemId={deleteItemId}
                        setDeleteItemId={setDeleteItemId}
                    />
                </CartProvider>
            </Box>

            <Fab 
                variant="extended"
                color="primary"
                sx={{
                    position: "fixed",
                    top: "30px",
                    right: "30px",
                    backgroundColor: "rgba(0,123,255, 0.7)"
                }}
                onClick={handleClickOpenItemForm}
            >
                <AddCircleOutline sx={{mr: 1}}/>
                Add Food
            </Fab>

            <FoodForm
                key={`${editItemId}-${openAddItemForm}-${editItemId !== null}`}
                open={openAddItemForm}
                setOpenItemForm={setOpenItemForm}
                isEdit={editItemId !== null}
                editItemId={editItemId}
            />
        </Box>
    )
}

export default Main;