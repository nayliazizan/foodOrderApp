import { Grid, Typography } from "@mui/material";

function Banner({handleClick}){
    return(
        <Box
            sx={{
                backgroundImage: `url(${bannerImage})`,
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
                </Grid>
            </Grid>
        </Box>
    );
}