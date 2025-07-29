"use client"
import Image from "next/image";
import { Button } from "../../components/ui/button"
import { ThemeButton } from "../../components/theme-button";
import { CalendarDays, Mail, TrophyIcon, MapPin, ChevronRight } from "lucide-react"

interface ProfileHeadProps {
    name: string,
    location: string,
    role: string,
    profileImage: string,
}

const ProfileHead = ({ name, location, role, profileImage }: ProfileHeadProps) => {
    return (
        <div className="flex flex-col md:flex-row">
            {/* Profile Image */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden flex-shrink-0">
                <Image
                    src={profileImage}
                    alt="Profile Photo"
                    fill
                    sizes="(max-width: 768px) 100vw, 200px"
                    loading="eager"
                    className="object-cover"
                />
            </div>

            {/* Info Section */}
            <div className="flex-1 md:ml-4 mt-4 md:mt-0">
                <div className="flex flex-col w-full">
                    {/* Name and Theme Button */}
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-baseline">
                            <h1 className="text-xl md:text-2xl font-bold">{name}</h1>
                            <Image
                                src="/verified.svg"
                                alt="verified-logo"
                                width={24}
                                height={24}
                                className="ml-2"
                            />
                        </div>
                        <ThemeButton />
                    </div>

                    {/* Location */}
                    <div className="flex mb-4">
                        <p className="text-sm md:text-base flex items-center font-semibold">
                            <MapPin className="h-4 w-4 mr-1" />
                            {location}
                        </p>
                    </div>

                    {/* Role */}
                    <p className="text-sm md:text-base font-semibold">{role}</p>

                    {/* Buttons (except Champion) */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        <Button size="sm">
                            <CalendarDays className="h-4 w-4 mr-1" />
                            Schedule a Call
                            <ChevronRight className="ml-1" />
                        </Button>
                        <Button size="sm" variant="outline">
                            <Mail className="h-4 w-4 mr-1" />
                            Send Email
                        </Button>

                        {/* Champion Button (shown inline only on md+) */}
                        <div className="hidden md:block">
                            <Button variant="champion_orange" size="sm">
                                <TrophyIcon className="mr-1" />
                                UMTC Hackathon 2025 Champion
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Champion Button (on mobile: shown below photo) */}
            <div className="block md:hidden mt-4">
                <Button variant="champion_orange" className="w-full">
                    <TrophyIcon className="mr-1" />
                    UMTC Hackathon 2025 Champion
                </Button>
            </div>
        </div>
    );
};

export default ProfileHead;
