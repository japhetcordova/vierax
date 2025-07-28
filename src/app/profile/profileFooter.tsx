"use client";

export const ProfileFooter = () =>{
    return(
        <footer className="border-t mt-8 mb-4 border-accent flex justify-between"  role="contentinfo">
            <p className="text-xs p-2">© 2025 Japhet Cordova. All rights reserved.</p>
            <button className="text-xs p-2 hover:font-semibold hover:cursor-pointer" aria-label="Provide feedback">Feedback</button>
        </footer>
    )
}