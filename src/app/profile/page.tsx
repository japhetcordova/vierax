import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardAction, CardFooter } from "@/components/ui/card"
const Page = () => {
    return(
        <>
            <Card className="p-0">
                <CardHeader>
                    <CardTitle>
                        First Card
                    </CardTitle>
                    <CardDescription>
                        This is my first ever using a card in shadcn using next js without really coding anything.
                    </CardDescription>
                    <CardAction>
                        this is a card action
                    </CardAction>
                </CardHeader>
                <CardContent>
                    This is the body or like the content part
                </CardContent>
                <CardFooter>
                    this is the footr part
                </CardFooter>
            </Card>
        </>
    )
}
export default Page; 