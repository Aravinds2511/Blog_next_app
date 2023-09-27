"use client"
import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState("dark");

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return <ThemeContext.Provider value={{ theme, toggle}}>{children}</ThemeContext.Provider>
}