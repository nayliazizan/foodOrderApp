import { Grid, Typography, Box, Button } from "@mui/material";
import PropTypes from "prop-types";
import posterImg from "../../stuffs/poster.jpg"

function Banner({handleClick}){
    return(
        <Box
            sx={{
                backgroundImage: `url(${posterImg})`,
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
        >
            <Grid 
                container 
                direction="column" 
                alignItems="center" 
                justifyContent="center" 
                minHeight="50vh" 
                sx={{textAlign: "center"}}
            >
                <Grid item xs={12} py={2}>
                    <Typography
                        color={"white"}
                        variant="h2"
                        textAlign={"center"}
                        sx={{
                            fontWeight: 400,
                            letterSpacing: 10,
                            fontSize: {xs: "3rem", sm: "5rem"},
                            wordBreak: "break-word",
                            "@media (max-width: 360px)": {fontSize: "2rem"}
                        }}
                    >
                        GRUMPY BAGELS
                    </Typography>
                    <Typography
                        color={"white"}
                        variant="h5"
                        textAlign={"center"}
                        py={1} 
                        sx={{
                            fontWeight: 300,
                            letterSpacing: 5,
                            fontSize: {xs: "1.5rem", sm: "3rem"},
                            "@media (max-width: 300px)": {fontSize: "1rem"}
                        }}
                    >
                        TURNING GRUMPS INTO GRINS
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        sx={{padding: "0.5rem 2rem", borderRadius: 8}}
                        onClick={handleClick}
                        size="large"
                    >
                        DISCOVER
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

Banner.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default Banner;