"use client"
import Navbar from "@/components/navbar";
import ProfileHead from "@/components/profileHead";
import { ProfileBody } from "@/components/profileBody";

const Page = () => {
    return(
        <div className="transition-all duration-300">
            <Navbar/>
            <div className="flex flex-col mx-8 gap-y-0 md:shrink-0 md:mx-120 md:gap-y-2 transition-all delay-300">
                <ProfileHead
                    name="Japhet Cordova"
                    location="Davao, Philippines"
                    role="Full-Stack Developer"
                    profileImage="/Japhet_Helmet.jpg"
                />
                <ProfileBody/>
            </div>
        </div>
    )
}
export default Page; 