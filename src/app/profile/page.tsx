"use client"
import ProfileHead from "@/components/profileHead";
import { ProfileBody } from "@/components/profileBody";

const Page = () => {
    return(
        <div>
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