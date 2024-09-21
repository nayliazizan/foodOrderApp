import { Typography, Box } from "@mui/material";
import OrderItemTable from "./orderItemTable";
import { useOrderedItemsContext } from "../../others/orderedItemsContext";

function SideBar(){
    const {orderedItems} = useOrderedItemsContext(); //access ordered items
    return(
        <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            sx={{flex: 1.5, padding: 2}}
            bgcolor="background.paper"
            flexDirection={"column"}
        >
            {orderedItems.length > 0 ? (
                <Box sx={{width: "100%"}}>
                    <Typography variant="h6" align="center" marginBottom={2}>
                        CUSTOMER ORDERS
                    </Typography>
                    <OrderItemTable/>
                </Box>
            ) : (
                <Typography variant="body1" align="center">
                    No Orders Available
                </Typography>
            )}
        </Box>
    )
}

export default SideBar;