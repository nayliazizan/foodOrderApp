import { useMediaQuery, Box } from "@mui/material";
import SideBar from "../components/admin/SideBar";
import Main from "../components/admin/Main";

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