"use client"

import JaphCard from "@/components/japhcard";
import Navbar from "@/components/navbar";
import ProfileHead from "@/components/profileHead";

const Page = () => {
    return(
        <div className="transition-all duration-300">
            <Navbar/>
            <div className="flex flex-col mx-8 gap-y-0 md:shrink-0 md:mx-120 md:gap-y-2 transition-all delay-300">
                <ProfileHead/>
                <div className="flex flex-col md:flex-row gap-2 gap-y-2 transition-all delay-300">
                    <div className="basis-1/2 transition-all delay-300">
                        <JaphCard/>
                    </div>
                    <div>
                        <JaphCard/>
                    </div>
                    <div>
                        <JaphCard/>
                    </div>
                    <div className="basis-1/3">
                        <JaphCard/>
                    </div>                    
                </div>
            </div>
        </div>
    )
}
export default Page; 