import { Card, CardTitle, CardContent, CardHeader, CardAction} from "../../../components/ui/card";
import { BriefcaseBusiness } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
export function About(){
    
    const action = false;
    const link = "/profile";

    return(
        <Card className="py-4 h-full">
            <CardHeader>
                <CardTitle className="m-0">
                    <div className="flex items-center text-xl">
                        <BriefcaseBusiness className="h-4 w-4 mr-1 flex items-end text-muted-foreground"/> About
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
                <p>
                    I&apos;m a full-stack software engineer specializing in developing solutions with JavaScript, Python, and PHP. I work on projects including building modern websites, web applications, mobile apps, search engine optimization, digital marketing, and making code tutorials.
                </p>
                <br />
                <p>
                    I&apos;ve helped startups and MSMEs grow and streamline their processes through software solutions. I&apos;ve also built a community of over 200,000 developers sharing knowledge and mentorship.
                    
                </p>
                <br />
                <p>
                    Lately, I&apos;ve been diving deeper into the world of artificial intelligence, focusing on integrating AI tools and techniques into modern applications. My work now includes developing AI-powered solutions, creating intelligent applications, and leveraging generative AI to optimize development workflows and deliver cutting-edge technology.
                </p>
            </CardContent>
        </Card>
    )
}