import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import SideBar from "../components/admin/SideBar";

function Admin(){
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    return (
        <Box display="flex" flexDirection={isSmallScreen ? "column" : "row"}>
            <SideBar/>
            <Main/>
        </Box>
    );
}

export default Admin;