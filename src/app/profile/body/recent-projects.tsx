import { Card, CardTitle, CardContent, CardHeader, CardAction} from "../../../components/ui/card";
import { Mail } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
export function Projects(){
    
    const action = true;
    const link = "/profile";

    return(
        <Card className="py-4 h-full">
            <CardHeader>
                <CardTitle className="m-0">
                    <div className="flex items-center text-xl">
                        <Mail className="h-4 w-4 mr-2 flex items-end text-muted-foreground"/> Recent Projects
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
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                        <div className="border rounded-lg w-full p-2">
                            <h1 className="text-md font-bold">
                                Title
                            </h1>
                            <p className="text-xs">
                                Description
                            </p>
                            <Badge className="bg-background font-mono text-foreground">
                                url
                            </Badge>
                        </div>
                        <div className="border rounded-lg w-full p-2">
                            <h1 className="text-md font-bold">
                                Title
                            </h1>
                            <p className="text-xs">
                                Description
                            </p>
                            <Badge className="bg-background font-mono text-foreground">
                                url
                            </Badge>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="border rounded-lg w-full p-2">
                            <h1 className="text-md font-bold">
                                Title
                            </h1>
                            <p className="text-xs">
                                Description
                            </p>
                            <Badge className="bg-background font-mono text-foreground">
                                url
                            </Badge>
                        </div>
                        <div className="border rounded-lg w-full p-2">
                            <h1 className="text-md font-bold">
                                Title
                            </h1>
                            <p className="text-xs">
                                Description
                            </p>
                            <Badge className="bg-background font-mono text-foreground">
                                url
                            </Badge>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}