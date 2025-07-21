"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
const { setTheme, theme } = useTheme();
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="mx-8 md:mx-80 p-4">

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

      </Card>
    </div>
  );
}
