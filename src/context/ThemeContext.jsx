"use client"
import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext();

const theme = "light";

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return <ThemeContext.Provider value={{ theme, toggle}}>{children}</ThemeContext.Provider>
}