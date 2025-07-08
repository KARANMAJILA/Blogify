import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
    return (
        <div >
<NavLink end = {true} to={"/admin"} className={({isActive})=>`flex items-center gap-3 px-3 py-3.5 md:px-9 md:min-w-64 cursor-pointer`}>
    <img src={assets.home_icon} alt=" " className='w-5 min-w-4' />

    <p className="hidden md:inline-block">Dashboard</p>
</NavLink>

        </div>

    )
}
export default Sidebar;