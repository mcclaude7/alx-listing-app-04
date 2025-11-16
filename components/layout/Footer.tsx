import React from "react";

const Footer: React.FC = () =>{
    return(
        <footer className="bg-gray-200 mt-8">
            <div className="container mx-auto px-1 py-6 flex flex-col md:flex-row items-center gap-1">
                <div className="text-sm text-gray-600">© {new Date().getFullYear()} ALX Academyp.</div>
                <div className="text-sm text-gray-600"> All rights reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;