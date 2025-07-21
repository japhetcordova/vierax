import Image from "next/image";
import { Button } from "./ui/button"
import Themetoggle from "./theme-toggle";

interface ProfileHeadProps {
    name: string,
    location: string,
    role: string, 
    profileImage: string, 
}

const ProfileHead = ({name, location, role, profileImage}: ProfileHeadProps) =>{
    return(
        <div className="flex">
            <div className="relative w-20 h-20 md:w-40 md:h-40 rounded-2xl overflow-hidden">
            <Image
                src={profileImage}
                alt="Profile Photo"
                fill
                sizes="(max-width: 768px) 100vw, 200px"
                loading="eager"
                className="object-cover"
            />
            </div>

            <div>
                <div className="flex flex-col">
                    <div className="flex">
                        <h1>{name}</h1>
                        <div>
                            <Themetoggle/>
                        </div>
                    </div>
                    <div>
                        <p>{location}</p>
                    </div>
                    <div>
                        <p>{role}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <Button size="sm">Schedule a Call</Button>
                        <Button size="sm" variant="outline">Send Email</Button>
                        <div className="flex flex-col md:flex-row">
                            <Button size="sm">UMTC Hackathon 2025 Champion</Button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProfileHead;