import { Box, Typography, Grid } from "@mui/material";
import { useRef, useState } from "react";
import CartProvider from "../others/CartProvider";
import CartAppBar from "../components/users/CartAppBar";
import Cart from "../components/users/Cart";
import Banner from "../components/users/Banner";
import AboutUs from "../components/users/AboutUs";
import Meals from "../components/Meals";
import SuccessAlert from "../components/users/SuccessAlert";

function Users(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const sectionRef = useRef(null);
    const menuItemRef = useRef(null);

    function scrollToSection(){
        if(!sectionRef.current) return;
        sectionRef.current.scrollToView({behavior: "smooth"});
    }

    function scrollToMenuItems(){
        if(!menuItemRef.current) return;
        menuItemRef.current.scrollToView({behavior: "smooth"});
    }

    function handleCartOpen(){
        setIsModalOpen(true);
    }

    function handleCartClose(_event, reason){
        if(reason === "escapeKeyDown" || reason === "backdropClick"){
            return;
        }
        setIsModalOpen(false);
    }

    function handleSnackbarOpen(){
        setOpenSnackbar(true);
    }

    return(
        <CartProvider>
            <Box>
                <CartAppBar handleClick={handleCartOpen}/>

                <Cart
                    open={isModalOpen}
                    handleClose={handleCartClose}
                    handleSnackbarOpen={handleSnackbarOpen}
                />

                <Box sx={{display: "flex", flexDirection: "column"}}>
                    <Banner handleClick={scrollToSection}/>
                    <section ref={sectionRef}>
                        <AboutUs handleClick={scrollToMenuItems}/>

                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                            justifyContent="space-evenly"
                            paddingY={{xs: "1.5rem", sm: "2rem"}}
                            spacing={{xs: 2, sm: 4}}
                            ref={menuItemRef}
                        >
                            <Grid item>
                                <Typography
                                    textTransform={"uppercase"}
                                    variant="h5"
                                    fontSize={{xs: "1.5rem", sm: "2rem"}}
                                >
                                    Available Foods
                                </Typography>
                            </Grid>

                            <Meals/>
                        </Grid>
                    </section>
                </Box>
            </Box>
            <SuccessAlert openSnackbar={openSnackbar} setOpenSnackbar={setOpenSnackbar}/>
        </CartProvider>
    );
}

export default Users;