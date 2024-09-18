import { Stack, Box, Button } from "@mui/material";
import { useItemsContext } from "../others/itemsContext";
import { useThemeContext } from "../others/themeContext";
import bagelDefault from "../stuffs/bagel-default.svg";
import bagelDark from "../stuffs/bagel-dark.svg";
import ThemeSwitcher from "../others/ThemeSwitcher";

function Footer(){
    const {switchPage, togglePage} = useItemsContext();
    const {theme, mode} = useThemeContext();
    const reversedBgColor = theme.palette.getContrastText(theme.palette.background.default);
    const reversedTextColor = theme.palette.getContrastText(theme.palette.text.primary);

    return(
        <Box width="100%" bgcolor={reversedBgColor} color={reversedTextColor} p={2}>
            <Stack spacing={2} alignItems={"center"}>
                <ThemeSwitcher
                    sx={{
                        color: reversedTextColor,
                        "&:hover": {bgcolor: reversedTextColor, color: reversedBgColor}
                    }}
                />
                <Box
                    component="img"
                    sx={{
                        width: "150px",
                        height: "150px",
                        maxHeight: {xs: 75, md: 125, lg: 150},
                        maxWidth: {xs: 75, md: 125, lg: 150}
                    }}
                    alt="footer logo"
                    src={mode === "light" ? bagelDark : bagelDefault}
                    loading="lazy"
                />
                <Button variant="contained" sx={{width: "30%"}} onClick={togglePage}>
                    {switchPage ? "Admin" : "User"}
                </Button>
            </Stack>
        </Box>
    )
}

export default Footer;