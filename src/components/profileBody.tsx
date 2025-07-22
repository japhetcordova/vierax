import JaphCard from "./japhcard"
export const ProfileBody = () =>{
    return(
        <div className="flex flex-col gap-y-2 w-full flex-w mt-4">
            <div className="flex flex-col md:flex-row gap-x-2 w-full">
                <div className="flex flex-col flex-1 gap-y-2 basis-100">
                    <div className="basis-1/2">
                        <JaphCard/>
                    </div>
                    <div>
                        <JaphCard/>
                    </div>
                </div>
                
                <div className="basis-1/3">
                    <JaphCard/>
                </div>                 
            </div>
            <div className="flex flex-col md:flex-row gap-x-2 w-full">
                <div className="flex-2">
                    <JaphCard/>
                </div>  
                
                <div className="flex-3">
                    <JaphCard/>
                </div>                 
            </div>
            <div className="flex flex-col md:flex-row gap-x-2 w-full">
                <div className="flex-1">
                    <JaphCard/>
                </div>  
                
                <div className="flex-1">
                    <JaphCard/>
                </div>                 
            </div>
            <div className="flex flex-col md:flex-row gap-x-2 w-full">
                <div className="flex-2">
                    <JaphCard/>
                </div>  
                
                <div className="flex-3">
                    <JaphCard/>
                </div>                 
            </div>
        </div>
    )
}