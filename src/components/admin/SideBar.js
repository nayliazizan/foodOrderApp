import { Typography, Box } from "@mui/material";

function SideBar(){
    return(
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{flex: 1}}
            bgcolor="background.paper"
        >
            <Typography variant="h4" noWrap fontWeight="500">
                <Box sx={{textAlign: "center", m: 1}}>Dashboard</Box>
            </Typography>
        </Box>
    )
}

export default SideBar;