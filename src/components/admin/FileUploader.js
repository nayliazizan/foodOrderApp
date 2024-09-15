import { CloudUpload } from "@mui/icons-material";
import { Button, styled, Box } from "@mui/material";
import { useRef } from "react";
import PropTypes from "prop-types";

const HiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1
});

function FileUploader({handleFileChange, ...props}){
    const uploadRef = useRef(null);

    function handleUpload(e){
        if(e.key === "Enter" || e.key === " "){
            if(uploadRef.current !== null){
                uploadRef.current.click();
            }
        }
    }

    return(
        <Box {...props}>
            <Button
                component="label"
                variant="contained"
                startIcon={<CloudUpload sx={{display: {xs:"none", sm:"block"}}}/>}
                onKeyDown={handleUpload}
            >
                Upload File
                <HiddenInput
                    ref={uploadRef}
                    hidden
                    type="file"
                    accept="image/*"
                    name="upload-image-input"
                    onChange={handleFileChange}
                />
            </Button>
        </Box>
    );
}

FileUploader.propTypes = {
    handleFileChange: PropTypes.func.isRequired
}

export default FileUploader;