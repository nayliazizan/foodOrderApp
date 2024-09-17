import { useCallback, useEffect, useMemo, useState } from "react";
import { MODE_LOCAL_STORAGE_KEY } from "../constant";
import { createTheme } from "@mui/material";
import {getDesignTokens} from "../others/themeColor";

export function useColorTheme(){
    const [mode, setMode] = useState(getUserDefaultTheme());

    useEffect(()=> {
        localStorage.setItem(MODE_LOCAL_STORAGE_KEY, mode);
    }, [mode]);

    const switchTheme = useCallback(()=> {
        setMode((currentMode)=> {
            return currentMode === "light" ? "dark" : "light";
        });
    }, []);

    const modifiedTheme = useMemo(()=> {
        return createTheme(getDesignTokens(mode));
    }, [mode]);

    return {
        theme: modifiedTheme,
        mode,
        toggleTheme
    }
}

function getUserDefaultTheme(){
    const localStorageMode = localStorage.getItem(MODE_LOCAL_STORAGE_KEY);

    if(localStorageMode !== null && (localStorageMode === "dark" || localStorageMode === "light")){
        return localStorageMode;
    }

    const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-schema: dark)").matches;

    if(prefersDarkMode === true){
        return "dark";
    }

    return "light";
}