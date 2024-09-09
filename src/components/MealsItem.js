import { CardMedia, Typography, CardContent, Card, Box, CardActions, Button } from "@mui/material"; 
import PropTypes from "prop-types";
import {useItemsContext} from "../others/itemsContext"
import { useCartContext } from "../others/cartContext";

function MealsItem({
    id,
    name,
    description,
    price,
    image,
    handleEditItem,
    handleDeleteItem
}){
    const {switchPage} = useItemsContext();
    const {addItem} = useCartContext();

    function addItemToCart(){
        const cartItemToAdd = {id, name, price, quantity: 1};
        addItem(cartItemToAdd);
    }

    return (
        <Box display={"flex"} justifyContent={"center"}>
            <Card sx={{maxWidth: 345, borderRadius: 3, width: "100%"}}>
                <CardMedia
                    sx={{height: 250}}
                    image={image.display_url || image.raw.display_url || image.preview}
                    title={name}
                />
                <CardContent sx={{height: 250, flexDirection: "column"}}>
                    <Box sx={{display: "flex", justifyContent: "space-between", maxWidth: 345, width: "100%"}}>
                        <Typography gutterBottom variant="h5" component={"div"} noWrap>
                            {name}
                        </Typography>
                        <Typography variant="h6" noWrap>
                            RM {price}
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    {switchPage ? (
                        <Button variant="contained" color="info" onClick={addItemToCart}>
                            Add To Cart
                        </Button>
                    ) : (
                        <>
                            <Button variant="contained" color="success" onClick={()=> handleEditItem(id)}>
                                Edit
                            </Button>
                            <Button variant="outlined" color="warning" onClick={()=> handleDeleteItem(id)}>
                                Delete
                            </Button>
                        </>
                    )}
                </CardActions>
            </Card>
        </Box>
    )
}

MealsItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.object.isRequired,
    handleEditItem: PropTypes.func,
    handleDeleteItem: PropTypes.func
}

export default MealsItem;