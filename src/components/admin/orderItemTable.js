import { TableBody, TableHead, TableRow } from "@mui/material";
import { useOrderedItemsContext } from "../../others/orderedItemsContext";

function OrderItemTable(){
    const {orderedItems, removeOrderItem} = useOrderedItemsContext();

    return(
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell>Customer ID</TableCell>
                        <TableCell align="left">Food Ordered</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Quantity</TableCell>
                        <TableCell align="left">Total Price</TableCell>
                        <TableCell align="left">Order Served</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orderedItems.map((customer)=> (
                        <React.Fragement key={customer.customerId}>
                            {customer.orderedItems.map((orderedItem, index)=> (
                                <TableRow key={orderedItem.id} sx={{"&:last-child td, &:last-child th": {border: 0}}}>
                                    {index === 0 ? (
                                        <TableCell rowSpan={customer.orderedItems.length}>
                                            {customer.customerId}
                                        </TableCell>
                                    ): null}
                                    <TableCell>{orderedItem.name}</TableCell>
                                    <TableCell align="center">{orderedItem.price}</TableCell>
                                    <TableCell align="center">{orderedItem.quantity}</TableCell>
                                    <TableCell align="center">{orderedItem.price * orderedItem.quantity}</TableCell>
                                    <TableCell align="center">
                                        
                                    </TableCell>
                                </TableRow>
                            ))}
                        </React.Fragement>
                    ))}
                </TableBody>

            </Table>
        </TableContainer>
    )
}