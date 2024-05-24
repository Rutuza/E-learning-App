import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar";

import { IoIosNotifications } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";

export default function Dashboard() {
  return (
    <div className="grid md:grid-cols-10 bg-primarybg">
      <div className="">
        <Sidebar />
      </div>
      <div className="h-[200vh]">
        <Outlet />
      </div>
      
      <header className="flex justify-between items-center">
        <div className="text-pastelblue text-xl font-medium">Dashboard</div>
        <input type="search" name="" id="" placeholder="Search for latest Courses, Tutorials, etc... "/>
        
        <div className="flex gap-2">
          <div className="w-12 h-12 bg-red-300 flex justify-center items-center gap-2 rounded-full"><IoIosNotifications /></div>
          <div className="w-12 h-12 bg-red-300 flex justify-center items-center gap-2 rounded-full"><IoSettingsSharp /></div>
          <div className="w-12 h-12 bg-red-300 flex justify-center items-center gap-2 rounded-full"><IoMdHelpCircleOutline /></div>
        </div>
      </header>
      
    </div>
  );
}

