import Reacr from "react";
import { assets, footer_data } from "../assets/assets";

const Footer = () => {
    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
<div className="flex flex-col md:flex-row justify-between items-start gap-10 py-10 border-b border-gray-500/30 text-gray-500">
<div>
    <img src={assets.logo} alt="Blogify Logo" className="w-32 sm:w-44" /> 
    <p className="max-w-[410px] mt-6">
        Blogify is your go-to platform for sharing and discovering insightful blogs on a wide range of topics. Join our community of writers and readers today!
    </p>
</div>

<div className="flex flex-wrap jsutify-between w-full md:w-[45%] gap-5">

    {footer_data.map((section, index) => (
        <div key={index}>
            <h3 className="text-base md:mb-5 mb-2 font-semibold text-gray-900">
                {section.title }

            </h3>
            <ul className="text-sm text-gray-500 space-y-1">
                {section.links.map((link, i) => (
                    <li key={i} className="mt-2">
                        <a href= "#" className="hover: underline transition">
                            {link}
                        </a>
                    </li>
                ))}
            </ul>


            </div>
    
    ))}


    
</div>

</div>

<p className="py-4 text-center text-gray-500 text-sm md:text-base">
    © 2025 Blogify. All rights reserved.
</p>
        </div>
    )
}

export default Footer;