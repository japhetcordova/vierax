"use client"
import Image from "next/image";
import { Button } from "../../components/ui/button"
import {ThemeButton} from "../../components/theme-button";
import { CalendarDays, Mail, TrophyIcon, MapPin, ChevronRight } from "lucide-react"

interface ProfileHeadProps {
    name: string,
    location: string,
    role: string, 
    profileImage: string, 
}

const ProfileHead = ({ name, location, role, profileImage }: ProfileHeadProps) => {
    return (
        <div className="flex">
            <div className="relative w-20 h-20 md:w-40 md:h-40 rounded-2xl overflow-hidden flex-shrink-0">
                <Image
                    src={profileImage}
                    alt="Profile Photo"
                    fill
                    sizes="(max-width: 768px) 100vw, 200px"
                    loading="eager"
                    className="object-cover"
                />
            </div>
            <div className="flex-1 ml-4">
                <div className="flex flex-col w-full">
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-baseline">
                            <h1 className="text-xl md:text-2xl font-bold"> {name} </h1>
                        <Image 
                            src="/verified.svg"
                            alt="verified-logo"
                            width="24"
                            height="24"
                            className="ml-2"
                        ></Image>
                        </div>
                        
                        <ThemeButton />
                    </div>
                    <div className="flex mb-4">
                        <p className="text-sm md:text-base flex items-center font-semibold">
                            <MapPin className="h-4 w-4" />
                            {location}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm md:text-base font-semibold">{role}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <Button size="sm">
                            <CalendarDays className="h-4 w-4" />Schedule a Call <ChevronRight/>
                        </Button>
                        <Button size="sm" variant="outline">
                            <Mail className="h-4 w-4" />Send Email 
                        </Button>
                        <Button variant="champion_orange" size="sm">
                            <TrophyIcon/> UMTC Hackathon 2025 Champion
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHead;