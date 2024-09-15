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
                        "&:hover": {
                            bgcolor: reversedTextColor,
                            color: reversedBgColor
                        }
                    }}
                />
                <Box
                    component="img"
                    sx={{
                        width: 300,
                        height: 300,
                        maxHeight: {xs: 150, md: 250, lg: 300},
                        maxWidth: {xs: 150, md: 250, lg: 300}
                    }}
                    alt="footer logo"
                    src={mode === "light" ? bagelDefault : bagelDark}
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