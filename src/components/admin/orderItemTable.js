import { IconButton, TableBody, TableCell, TableHead, TableRow, Paper, Table, TableContainer } from "@mui/material";
import { useOrderedItemsContext } from "../../others/orderedItemsContext";
import { Check } from "@mui/icons-material";
import React from "react";

function OrderItemTable(){
    const {orderedItems, removeOrderItem} = useOrderedItemsContext();

    return(
        <TableContainer component={Paper} sx={{border: "3px solid #28282B"}}>
            <Table sx={{minWidth: 500}} stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell>No</TableCell>
                        <TableCell align="left">Food Ordered</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">Total Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orderedItems.map((customer)=> (
                        <React.Fragment key={customer.customerId}>
                            {customer.orderedItems.map((orderedItem, index)=> (
                                <TableRow key={orderedItem.id} sx={{"&:last-child td, &:last-child th": {border: 0}}}>
                                    {index === 0 ? (
                                        <TableCell rowSpan={customer.orderedItems.length}>
                                            {index + 1}
                                        </TableCell>
                                    ): null}
                                    <TableCell>{orderedItem.name}</TableCell>
                                    <TableCell align="center">{orderedItem.price}</TableCell>
                                    <TableCell align="center">{orderedItem.quantity}</TableCell>
                                    <TableCell align="center">{orderedItem.price * orderedItem.quantity}</TableCell>
                                    
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell align="right" colSpan={4}>Total Amount:</TableCell>
                                <TableCell align="center" colSpan={1}>{customer.totalPriceForAllItems}</TableCell>
                            </TableRow>
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default OrderItemTable;