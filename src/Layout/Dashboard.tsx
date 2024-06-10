import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar";

import { HiBellAlert } from "react-icons/hi2";
import { RiSettings5Fill } from "react-icons/ri";
import { AiFillQuestionCircle } from "react-icons/ai";
import profile from "../assets/images/profile pic.svg";

export default function Dashboard() {
  return (
    <div className="grid md:grid-cols-10 bg-primarybg relative">
      <div className="">
        <Sidebar />
      </div>
      <div className="h-[200vh]">
        <Outlet />
      </div>

      <header className="w-full flex flex-row justify-between relative">
        <div className="text-pastelblue font-medium text-2xl">Dashboard</div>
        <input type="text" placeholder="Search for courses, lectures, tutorials..." className="h-[3%] rounded-full"/>
        <div className="flex gap-4 cursor-pointer">
          <div className="w-12 h-12 bg-darkprimary rounded-full text-white flex justify-center items-center"><HiBellAlert/></div>
          <div className="w-12 h-12 bg-darkprimary rounded-full text-white flex justify-center items-center"><RiSettings5Fill /></div>
          <div className="w-12 h-12 bg-darkprimary rounded-full text-white flex justify-center items-center"><AiFillQuestionCircle /></div>
        </div>
      </header>

      <section className="container">
        <div>
          <div>Welcome back, Ritu</div>
          <div>you are doing great, keep it up...</div>
        </div>
      </section>
      
    </div>
  );
}

