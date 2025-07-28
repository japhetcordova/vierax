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
                        <BriefcaseBusiness className="h-4 w-4 mr-2 flex items-end text-muted-foreground"/> About
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
                    I&apos;m a Full-stack developer specializing in Next.js, with additional experience in Flutter. I&apos;ve worked on a variety of projects, including modern websites, web applications, mobile apps, SEO, digital marketing, and educational tutorials.
                </p>
                <br />
                <p>
                    I&apos;ve helped startups and agencies streamline their operations through tailored software solutions, and I&apos;ve built a developer community of over 50 members focused on knowledge sharing and mentorship.
                    
                </p>
                <br />
                <p>
                    Recently, I&apos;ve become increasingly immersed in the field of artificial intelligence. My current focus is on integrating AI tools and techniques into modern applications—developing intelligent solutions, building AI-powered products, and leveraging generative AI to enhance development workflows and deliver cutting-edge technology.
                </p>
            </CardContent>
        </Card>
    )
}