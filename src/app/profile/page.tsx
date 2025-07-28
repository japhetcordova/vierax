"use client"
import ProfileHead from "@/app/profile/profileHead";
import { ProfileBody } from "@/app/profile/profileBody";
import { ProfileFooter } from "./profileFooter";

const Page = () => {
    return(
        <div className="flex flex-col gap-y-4 mt-2 md:mt-8">
            <ProfileHead
                name="Japhet Cordova"
                location="Davao, Philippines"
                role="Full-Stack Developer"
                profileImage="/Japhet_Helmet.jpg"
            />
            <ProfileBody/>
            <ProfileFooter/>
        </div>
    )
}
export default Page; 