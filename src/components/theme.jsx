import { Button} from "./ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const Theme = () =>{
const { setTheme, theme } = useTheme();
    return(
        <Button 
            variant="outline"
            size="icon"
            onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
            }}
        >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </Button>
    )
}

export default Theme;