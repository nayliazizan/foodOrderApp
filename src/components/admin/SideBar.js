import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

function SideBar(){
    return(
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{flex: 1}}
            bgcolor="background.paper"
        >
            <Typography variant="h4" noWrap fonrWeight="500">
                <Box sx={{textAlign: "center", m: 1}}>Dashboard</Box>
            </Typography>
        </Box>
    )
}

export default SideBar;