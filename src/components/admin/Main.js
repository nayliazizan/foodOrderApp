import { Box, Button, Divider, Typography } from "@mui/material";
import { useState } from "react";
import Meals from "../Meals";
import DeleteDialog from "./DeleteDialog";
import CartProvider from "../../others/CartProvider";
import FoodForm from "./FoodForm";

function Main(){
    const [openAddItemForm, setOpenItemForm] = useState(false);
    const [editItemId, setEditItemId] = useState(null);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState(null);
    const [isOrderModalOpen, setOpenOrderModal] = useState(false);

    function handleClickOpenItemForm(){
        setOpenItemForm(true);
        setEditItemId(null);
    }

    function handleEditItem(itemId){
        setOpenItemForm(true);
        setEditItemId(itemId);
    }

    function handleDeleteItem(itemId){
        setOpenDeleteDialog(true);
        setDeleteItemId(itemId);
    }

    function openOrderModal(){
        setOpenOrderModal(true);
    }

    function closeOrderModal(){
        setOpenOrderModal(false);
    }

    return(
        <Box sx={{flex: 4}} paddingY={2} height={"100%"}>
            <Box display="flex" flexDirections="column">
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    paddingX={{xs: 2, sm: 3, md: 4}}
                >
                    <Box
                        display={"flex"}
                        justifyContent={"space-between"}
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
                                xs: "h6.fontSize",
                                sm: "h6.fontSize",
                                md: "h3.fontSize"
                            }}
                        >
                            Available Foods
                        </Typography>
                    </Box>

                    <Box 
                        flexGrow={2}
                        flexShrink={2}
                        sx={{
                            display: "flex",
                            justifyContent: "space-evenly"
                        }}
                        width={"100%"}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                paddingX: {xs: 0, sm: 1}
                            }}
                        >
                            <Button
                                variant="contained"
                                onClick={openOrderModal}
                                size="large"
                                fullWidth
                                sx={{ 
                                    fontSize: {xs: "0.8rem", sm: "1rem"}
                                }}
                            >
                                View Order
                            </Button>
                        </Box>

                        <Box 
                            width={"100%"}
                            sx={{ width: "100%", display: "flex", justifyContent: "center", paddingX: 1}}
                        >
                            <Button
                                variant="contained"
                                onClick={handleClickOpenItemForm}
                                size="large"
                                fullWidth
                                sx={{
                                    fontSize: {xs: "0.8rem", sm: "1rem"}
                                }}
                            >
                                Add Food
                            </Button>
                        </Box>
                    </Box>
                </Box>

                <Divider orientation="horizontal" sx={{ borderBottomWidth: 2, marginY: 2}}/>

                <CartProvider>
                    <Meals handleEditItem={handleEditItem} handleDeleteItem={handleDeleteItem}/>
                    <DeleteDialog
                        open={openDeleteDialog}
                        setOpen={setOpenDeleteDialog}
                        itemId={deleteItemId}
                        setDeleteItemId={setDeleteItemId}
                    />
                </CartProvider>
            </Box>

            <FoodForm
                key={`${editItemId}-${openAddItemForm}-${editItemId !== null}`}
                open={openAddItemForm}
                setOpenItemForm={setOpenItemForm}
                isEdit={editItemId !== null}
                editItemId={editItemId}
            />

            <OrderDialog open={isOrderModalOpen} onClose={closeOrderModal}/>
        </Box>
    )
}

export default Main;