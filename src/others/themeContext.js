import { createContext, useContext } from "react";
import { createTheme } from "@mui/material";

const ThemeContext = createContext({
    theme: createTheme(),
    mode: "light",
    toggleColorMode: () => {}
});

export default ThemeContext;

export const useThemeContext = () => useContext(ThemeContext);