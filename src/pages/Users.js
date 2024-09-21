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
    const sectionRef = useRef(null); //refer to AboutUs section for smooth scrolling
    const menuItemRef = useRef(null); //refer to bagels catalogue section for smooth scrolling

    function scrollToSection(){
        if(!sectionRef.current) return;
        sectionRef.current.scrollIntoView({behavior: "smooth"});
    }

    function scrollToMenuItems(){
        if(!menuItemRef.current) return;
        menuItemRef.current.scrollIntoView({behavior: "smooth"});
    }

    //pop up cart card
    function handleCartOpen(){
        setIsModalOpen(true);
    }

    //close cart card
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
                                    Available Bagels
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