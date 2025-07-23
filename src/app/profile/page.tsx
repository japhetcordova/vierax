"use client"
import ProfileHead from "@/app/profile/profileHead";
import { ProfileBody } from "@/app/profile/profileBody";

const Page = () => {
    return(
        <div className="flex flex-col gap-y-4 mt-8">
            <ProfileHead
                name="Japhet Cordova"
                location="Davao, Philippines"
                role="Full-Stack Developer"
                profileImage="/Japhet_Helmet.jpg"
            />
            <ProfileBody/>
        </div>
    )
}
export default Page; 