import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";
import { useCartContext } from "../../others/cartContext";
import { useItemsContext } from "../../others/itemsContext";
import PropTypes from "prop-types";

function DeletePopUp({open, setOpen, itemId, setDeleteItemId}){
    const {removeItem: removeMenuItem, itemsData} = useItemsContext();
    const {removeItem: removeCartItem} = useCartContext();
    const title = itemsData.find((item)=> item.id === itemId)?.name || itemId;

    function handleClose(_event, reason){
        if(reason === "backdropClick" || reason === "escapeKeyDown") return;
        setDeleteItemId(null);
        setOpen(false);
    }

    function handleDelete(){
        removeCartItem(itemId);
        removeMenuItem(itemId);
        setDeleteItemId(null);
        setOpen(false);
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby={`delete-menu-tem-${title}`}
                aria-describedby={`confirmation-dialog-to-delete-${title}`}
            >
                <DialogTitle id={`delete-menu-item-${title}`}>
                    {`Are you sure you want to delete ${title}?`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id={`confirmation-dialog-to-delete-${title}`}>
                        This action cannot be undone. This will permanently delete {title}{" "}
                        from the menu and user&apos;s cart.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button variant="outlined" color="error" onClick={handleDelete} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

DeletePopUp.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
    itemId: PropTypes.string,
    setDeleteItemId: PropTypes.func
}

export default DeletePopUp;