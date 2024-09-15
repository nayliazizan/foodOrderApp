import { DarkMode, LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useThemeContext } from "./themeContext";

function ThemeSwitcher(props){
    const {mode, switchTheme} = useThemeContext();

    return(
        <IconButton {...props} aria-label={mode === "dark" ? "dark mode" : "light mode"} onClick={switchTheme}>
            {mode === "dark" ? <LightMode/> : <DarkMode/>}
        </IconButton>
    )
}

export default ThemeSwitcher;