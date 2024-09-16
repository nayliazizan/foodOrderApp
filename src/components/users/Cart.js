import { Box, Button, Dialog, DialogContent, Divider, IconButton, Typography, DialogTitle, Stack, DialogActions } from "@mui/material";
import { Remove, Delete, Add } from "@mui/icons-material";
import { useCartContext } from "../../others/cartContext";
import { useOrderedItemsContext } from "../../others/orderedItemsContext";
import PropTypes from "prop-types"

function Cart({open, handleClose, handleSnackbarOpen}){
    const {addOrderItem} = useOrderedItemsContext();
    const {
        items: cartItems,
        totalAmount,
        removeItem,
        incrementItem,
        decrementItem,
        clearCart
    } = useCartContext();

    function handleOrderClick(){
        if(cartItems.length < 1){
            return;
        }

        addOrderItem({
            customerId: crypto.randomUUID(),
            totalPriceForAllItems: totalAmount,
            orderedItems: [...cartItems]
        });

        handleSnackbarOpen();
        clearCart();
        handleClose();
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            disableEscapeKeyDown={true}
            PaperProps={{sx: {borderRadius: "20px"}}}
            fullWidth
        >
            <DialogTitle 
                sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: {xs: "1rem", sm: "1.5rem"},
                    paddingY: 1
                }}
            >
                Food Cart
            </DialogTitle>

            <Divider/>

            <DialogContent sx={{paddingY: 0}}>
                <Box>
                    {cartItems.length > 0 ? (
                        <ul style={{listStyleType: "none", padding: 0}}>
                            {cartItems.map((item) => (
                                <li key={item.id}>
                                    <Box 
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            width: "100%",
                                            marginBottom: 1,
                                            borderBottom: "1px solid #e0e0e0"
                                        }}
                                    >
                                        <Box>
                                            <Typography fontWeight={"500"}>{item.name}</Typography>
                                            <Typography variant="subtitle2">RM {item.price}</Typography>
                                        </Box>

                                        <Box>
                                            <Stack direction="row" alignItems={"center"} gap={0.5}>
                                                <Box sx={{border: 1.5, borderRadius: 1, paddingX: 1}}>
                                                    <Typography sx={{userSelect: "none"}}>{item.quantity}</Typography>
                                                </Box>

                                                <IconButton
                                                    aria-label="decrement menu item amount by 1"
                                                    onClick={() => {
                                                        if(item.quantity > 1){
                                                            decrementItem(item.id);
                                                        }
                                                    }}
                                                >
                                                    <Remove/>
                                                </IconButton>

                                                <IconButton
                                                    aria-label="add menu item amount by 1"
                                                    onClick={() => {
                                                        if(item.quantity > 1){
                                                            incrementItem(item.id);
                                                        }
                                                    }}
                                                >
                                                    <Add/>
                                                </IconButton>

                                                <IconButton
                                                    aria-label="remove item from cart"
                                                    onClick={() => { removeItem(item.id)}}
                                                >
                                                    <Delete/>
                                                </IconButton>
                                            </Stack>
                                        </Box>
                                    </Box>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <Box paddingY={1}>
                            <Typography variant="h5">No items in the cart</Typography>
                        </Box>
                    )}
                </Box>

                <Box marginTop={1}>
                    {cartItems.length > 0 ? (
                        <Typography fontWeight={"bold"} fontSize={{xs: "1rem", sm: "1.25rem"}}>
                            Total Price: RM {totalAmount}
                        </Typography>
                    ) : (
                        <Typography variant="body1">Add food to the cart</Typography>
                    )}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button color="info" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="contained" onClick={handleOrderClick} disabled={cartItems.length < 1}>
                    Order
                </Button>
            </DialogActions>
        </Dialog>
    )
}

Cart.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleSnackbarOpen: PropTypes.func.isRequired
}

export default Cart;