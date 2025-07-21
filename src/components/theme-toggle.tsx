"use client"

import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";
const Themetoggle = () =>{
    const {theme, setTheme} = useTheme();
    return(
        <div>
            <Switch
                onClick={() => setTheme( theme === "light" ? "dark" : "light")}
            />
        </div>
    )
}

export default Themetoggle;