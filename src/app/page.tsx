"use client"
import { Card } from "@/components/ui/card";
import {ThemeButton} from "@/components/theme-button";
export default function Home() {

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="mx-8 md:mx-80 p-4">
        <ThemeButton/>
      </Card>
    </div>
  );
}
