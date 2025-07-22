"use client"
import React from "react";

import { 
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
    NavigationMenuIndicator,
    NavigationMenuViewport
} from "./ui/navigation-menu";


export default function Navbar() {
    return (
        <NavigationMenu>

            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-2 w-48">
                            <li>
                                <NavigationMenuLink href="/product/1">
                                    Product 1
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink href="/product/2">
                                    Product 2
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>About</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className=" w-48">
                            <NavigationMenuLink href="/about">
                                About us
                            </NavigationMenuLink>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>      
            </NavigationMenuList>

            <NavigationMenuIndicator /> 
            <NavigationMenuViewport />

        </NavigationMenu>
    );
}
