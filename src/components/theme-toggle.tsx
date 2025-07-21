"use client"

import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";
const ThemeToggle = () =>{
    const {theme, setTheme} = useTheme();

    const isDark = theme === "dark";
    const handleCheckedChange = (checked: boolean) =>{
        setTheme(checked ? "dark" : "light");
    }

    return(
        <Switch
            aria-label="Toggle theme"
            checked={isDark}
            onCheckedChange={handleCheckedChange}
        />
    )
}

export default ThemeToggle;