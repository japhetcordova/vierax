"use client"

import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";
const ThemeToggle = () =>{
    const {theme, setTheme} = useTheme();

    const isLight = theme === "light";
    const handleCheckedChange = (checked: boolean) =>{
        setTheme(checked ? "light" : "dark");
    }

    return(
        <Switch
            aria-label="Toggle theme"
            checked={isLight}
            onCheckedChange={handleCheckedChange}
        />
    )
}

export default ThemeToggle;