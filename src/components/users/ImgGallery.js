import {Grid, Box} from "@mui/material";
import PropTypes from "prop-types";

function ImgGallery({images}){
    return (
        <Grid container spacing={2}>
            {images.slice(0, 5).map((image, index)=> (
                <Grid item sx={12} sm={6} md={4} key={index}>
                    <Box
                        component={"img"}
                        src={image.url}
                        alt={`Image ${index}`}
                        sx={{
                            width: "100%",
                            height: 250,
                            objectFit: "cover",
                            borderRadius: "8px",
                            border: "3px solid #28282B"
                        }}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

ImgGallery.propTypes = {
    images: PropTypes.array.isRequired
};

export default ImgGallery;