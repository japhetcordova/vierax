import JaphCard from "./japhcard"
export const ProfileBody = () =>{
    return(
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
    )
}