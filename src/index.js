import ThemeProvider from "./others/ThemeProvider";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ItemsProvider from "./others/itemsProvider";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider>
            <ItemsProvider>
                <App/>
            </ItemsProvider>
        </ThemeProvider>
    </React.StrictMode>
);