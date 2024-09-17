import ThemeProvider from "../src/others/ThemeProvider";
import React from "react";
import { ReactDOM } from "react-dom/client";
import App from "./App";
import ItemsProvider from "./others/itemsProvider";
import "@fontsourse"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider>
            <ItemsProvider>
                <App/>
            </ItemsProvider>
        </ThemeProvider>
    </React.StrictMode>
);