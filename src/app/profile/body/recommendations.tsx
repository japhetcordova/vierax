import { Card, CardTitle, CardContent, CardHeader, CardAction} from "../../../components/ui/card";
import { ChartBar } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export function Recommendation(){
    
    const action = false;
    const link = "/profile";

    const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

    return(
        <Card className="py-4 h-full">
            <CardHeader>
                <CardTitle className="m-0">
                    <div className="flex items-center text-xl">
                        <ChartBar className="h-4 w-4 mr-2 flex items-end text-muted-foreground"/> Recommendations
                    </div>
                    
                </CardTitle>
                { action &&(
                    <Link href={link}>
                        <CardAction className="text-xs ">
                            <div className="flex">
                                <p>See more</p><ChevronRight className="h-4.5 w-4.5"/>
                            </div>
                        </CardAction>
                    </Link>
                )}
                
            </CardHeader>
            <CardContent className="mt-0 pl-3.5">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full max-w-xs"
                    >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <p className="text-4xl font-semibold">{index + 1}</p>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    </Carousel>
            </CardContent>
        </Card>
    )
}