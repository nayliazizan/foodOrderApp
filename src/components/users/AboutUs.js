import { Grid, Link, Typography, Stack, Box } from "@mui/material";
import PropTypes from "prop-types";
import images from "../users/ImgForSlideshows";
import ImgGallery from "./ImgGallery";

function AboutUs({handleClick}){
    return(
        <Grid
            container
            minHeight="50vh"
            sx={{padding: {xs: "1.5rem 1rem", sm: "2rem 4rem"}}}
            bgcolor="background.paper"
        >
            <Grid item xs={12} marginBottom={2}>
                <Typography
                    textAlign={"center"}
                    variant="h6"
                    fontSize={{xs: "1.5rem", sm: "2rem"}}
                    fontWeight={400}
                    textTransform={"uppercase"}
                    textOverflow={{xs: "ellipsis", sm: "clip"}}
                    gutterBottom
                >
                    Delicious bagels for people
                </Typography>
            </Grid>
            <Grid item xs={12} sm={5} paddingRight={1}>
                <Stack spacing={3}>
                    <Box>
                        <Typography
                            variant="body1"
                            fontWeight={600}
                            textTransform={"uppercase"}
                            fontSize={{xs: "1rem", sm: "1.1rem"}}
                        >
                            Our Story
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            Grumpy Bagels was born out of a passion for crafting delicious, 
                            artisanal bagels. Our bagels are made with the finest ingredients 
                            and baked to perfection.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography
                            variant="body1"
                            fontWeight={600}
                            textTransform={"uppercase"}
                            fontSize={{xs: "1rem", sm: "1.1rem"}}
                        >
                            Our Ingredients
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            We use only the freshest ingredients, sourced locally whenever possible.
                            From our signature sourdough starter to our hand-selected toppings, 
                            every bite is a delight.
                        </Typography>
                    </Box>

                    <Link
                        href="#"
                        target="_blank"
                        rel="noneferrer"
                        variant="body1"
                        underline="hover"
                        aria-label="learn more link that do nothing"
                        onClick={(e)=>{
                            e.preventDefault();
                            handleClick();
                        }}
                    >
                        <Typography color="text.secondary" variant="body1" fontWeight={"bold"}>
                            SEE OUR BAGELS
                        </Typography>
                    </Link>
                </Stack>
            </Grid>

            <Grid item xs={12} sm={7} marginTop={{xs: "1rem", sm: "0"}}>
                <ImgGallery images={images}/>
            </Grid>
        </Grid>
    );
}

AboutUs.propTypes = {
    handleClick: PropTypes.func.isRequired
}

export default AboutUs;