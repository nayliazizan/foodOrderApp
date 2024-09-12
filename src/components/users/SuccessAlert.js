import { CheckCircleOutline } from "@mui/icons-material";
import { Snackbar, Alert } from "@mui/material";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function SuccessAlert({openSnackbar, setOpenSnackbar}){
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        if(openSnackbar){
            setOpen(true);
        }
    }, [openSnackbar]);

    function handleClose(_event, reason){
        if(reason === "clickAway"){
            return;
        }
        setOpenSnackbar(false);
        setOpen(false);
    }

    return(
        <div>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Your order has been placed successdully!"
                anchorOrigin={{vertical: "bottom", horizontal: "center"}}
            >
                <Alert
                    onClose={{handleClose}}
                    severity="success"
                    sx={{width: "100%"}}
                    iconMapping={{
                        success: <CheckCircleOutline fontsize="inherit"/>
                    }}
                >
                    Your order has been placed successdully!
                </Alert>
            </Snackbar>
        </div>
    );
}

SuccessAlert.propTypes = {
    openSnackbar: PropTypes.bool.isRequired,
    setOpenSnackbar: PropTypes.func.isRequired
}