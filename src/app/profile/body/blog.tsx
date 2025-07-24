import { Card, CardTitle, CardContent, CardHeader, CardAction, CardDescription} from "../../../components/ui/card";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";


export function Blog(){
    
    const action = true;
    const link = "/profile";

    return(
        <Card className="py-4 h-full">
            <CardHeader>
                <CardTitle className="m-0">
                    <div className="flex items-center text-xl">
                        Recent Blogs
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
                <Card>
                    <CardHeader>
                        <CardTitle>title</CardTitle>
                        <CardDescription>Date - time to read</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-2">
                            <Badge variant="outline">one</Badge><Badge variant="outline">one</Badge><Badge variant="outline">one</Badge><Badge variant="outline">one</Badge>
                        </div>
                        
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    )
}