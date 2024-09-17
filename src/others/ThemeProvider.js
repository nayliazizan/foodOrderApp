import themeContext from "./themeContext";
import PropTypes from "prop-types";
import { useColorTheme } from "./useColorTheme";

function ThemeProvider({children}){
    const value = useColorTheme();
    return(
        <themeContext.Provider value={value}>{children}</themeContext.Provider>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default ThemeProvider;