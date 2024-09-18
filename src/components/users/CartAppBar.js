import { Badge, Typography, useMediaQuery, Chip, Fab, Box } from "@mui/material";
import {ShoppingCart} from "@mui/icons-material";
import { useCartContext } from "../../others/cartContext";
import PropTypes from "prop-types";

function CartAppBar({handleClick}){
    const {items: cartItems} = useCartContext();
    const isSmallScreen = useMediaQuery((theme)=> theme.breakpoints.down("sm"));
    const itemsCount = cartItems ? cartItems.length : 0;

    return(
        <Fab
            variant="extended"
            aria-label="food-cart"
            onClick={handleClick}
            sx={{position: "fixed", top: "30px", right: "30px", backgroundColor: "rgba(3, 138, 255, 0.7)"}}
            color="primary"
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 1
                }}
            >
                {isSmallScreen ? (
                    <Badge badgeContent={itemsCount} color="info">
                        <ShoppingCart/>
                    </Badge>
                ) : (
                    <>
                        <ShoppingCart sx={{mr: 1}} color="secondary"/>
                        <Typography 
                            align="center" 
                            sx={{flexGrow: 1, mr: 1.5}}
                        >
                            Your Cart
                        </Typography>
                        <Chip color="secondary" label={itemsCount}/>
                    </>
                )}
            </Box>
        </Fab>
    )
}

CartAppBar.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default CartAppBar;