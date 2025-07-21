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

import Theme from "./theme";

export default function Navbar() {
    return (
        <NavigationMenu>

            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-2 p-4 w-48">
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
                        <div className="p-4 w-48">
                            <NavigationMenuLink href="/about">
                                About us
                            </NavigationMenuLink>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                
                <Theme/>
                
            </NavigationMenuList>

            <NavigationMenuIndicator /> 
            <NavigationMenuViewport />

        </NavigationMenu>
    );
}
