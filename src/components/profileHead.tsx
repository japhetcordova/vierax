import Image from "next/image";
import { Button } from "./ui/button"
import Themetoggle from "./theme-toggle";
const ProfileHead = () =>{
    return(
        <div className="flex">
            <div className="relative w-20 h-20 md:w-40 md:h-40 rounded-2xl overflow-hidden">
            <Image
                src="/Japhet_Helmet.jpg"
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
                        <h1>Japhet Cordova</h1>
                        <div>
                            <Themetoggle/>
                        </div>
                    </div>
                    <div>
                        <p>Davao, Philippines</p>
                    </div>
                    <div>
                        <p>Full-Stack Developer</p>
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