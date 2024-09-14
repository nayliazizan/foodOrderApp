import { Button, Dialog, DialogActions, DialogContent, Typography, DialogTitle, Box } from "@mui/material";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useOrderedItemsContext } from "../../others/orderedItemsContext";

function OrderPopUp({open, onClose}){
    const {orderedItems, totalAmount, clearOrderedItems} = useOrderedItemsContext();
    const descriptionElementRef = useRef(null);

    useEffect(()=> {
        if(open){
            const {current: descriptionElement} = descriptionElementRef;
            if(descriptionElement !== null){
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Dialog
                open={open}
                onClose={onClose}
                scroll="paper"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                fullWidth
            >
                <DialogTitle id="scroll-dialog-title">Customer Order</DialogTitle>
                <DialogContent dividers>
                    <Box
                        sx={{width: "100%", height: "100%"}}
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        {orderedItems.length < 1 ? (<Typography>No Items</Typography>) : (<OrderItemTable/>)}
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Typography marginRight={2} align="center">Total Sale: RM{totalAmount}</Typography>
                    <Button onClick={clearOrderedItems}>Clear</Button>
                    <Button variant="contained" onClick={onClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

OrderPopUp.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default OrderPopUp;