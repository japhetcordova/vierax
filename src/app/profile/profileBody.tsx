import { Timeline } from "./body/experience"
import { About } from "./body/about"
import { Beyond } from "./body/beyond"
import { Stack } from "./body/tech-stack"
import { Connect } from "./body/connect"
import { Blog } from "./body/blog"
import { Certifications } from "./body/recent-certifications"
import { Projects } from "./body/recent-projects"
import { Recommendation } from "./body/recommendations"

export const ProfileBody = () =>{
    return(
        <div className="flex flex-col gap-y-2 w-full mt-4">
            <div className="flex flex-col md:flex-row gap-x-2 w-full">
                <div className="flex flex-col flex-1 gap-y-2 basis-1">
                    <div className="basis-1/2">
                        <About/>
                    </div>
                    <div className="basis-1/2">
                        <Stack/>
                    </div>
                </div>
                
                <div className="basis-1/3">
                    <Timeline/>
                </div>                 
            </div>
            <div className="flex flex-col md:flex-row gap-x-2 w-full">
                <div className="flex-2">
                    <Beyond/>
                </div>  
                
                <div className="flex-3">
                    <Projects/>
                </div>                 
            </div>
            <div className="flex flex-col md:flex-row gap-x-2 w-full">
                <div className="flex-1">
                    <Certifications/>
                </div>  
                
                <div className="flex-1">
                    <Recommendation/>
                </div>                 
            </div>
            <div className="flex flex-col md:flex-row gap-x-2 w-full">
                <div className="flex-2">
                    <Connect/>
                </div>  
                
                <div className="flex-3">
                    <Blog/>
                </div>                 
            </div>
        </div>
    )
}