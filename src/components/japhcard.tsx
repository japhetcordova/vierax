"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const JaphCard = () =>{
    return(
        <Card className="py-4 h-full">
            <CardHeader>
                <CardTitle>
                    First Card
                </CardTitle>
                <CardDescription>
                    This is my first ever using a card in shadcn using next js without really coding anything.
                </CardDescription>
            </CardHeader>
            <CardContent>
                This is the body or like the content part
            </CardContent>
            <CardFooter>
                this is the footr part
            </CardFooter>
        </Card>
    )
}

export default JaphCard;