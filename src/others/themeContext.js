import { createContext, useContext } from "react";
import { createTheme } from "@mui/material/styles";

const themeContext = createContext({
    theme: createTheme(),
    mode: "light",
    toggleColorMode: () => {}
});

export default themeContext;

export const useThemeContext = () => useContext(themeContext);