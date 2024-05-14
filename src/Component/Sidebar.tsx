import React from "react";
import { Button } from "./ui/button";

import { RxDashboard } from "react-icons/rx";
import { IoBookOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { BsCameraVideo } from "react-icons/bs";
import { LuUserCheck2 } from "react-icons/lu";

export default function Sidebar() {
  const Navlinks = [
    {
      title: "Dashboard",
      icon: <RxDashboard />,
    },
    {
      title: "My Courses",
      icon: <IoBookOutline />,
    },
    {
      title: "Assignments",
      icon: <TfiWrite />,
    },
    {
      title: "Discussions",
      icon: <BsCameraVideo />,
    },
    {
      title: "Attendance",
      icon: <LuUserCheck2 />,
    },
  ];

  return (
    <>
      <div className="w-60 h-screen bg-darkprimary flex flex-col overflow-hidden justify-between items-center fixed border-grey border-r-2">
        <h1 className="text-2xl font-medium text-white">Study<span className="text-reddishpink">Room</span></h1>
        <ul className="w-full">
          {Navlinks.map((item, index) => (
            <li key={index} className="p-2 hover:bg-reddishpink w-full">
              <div className="flex items-center justify-center gap-4 font-normal text-base hover:text-white text-slateblue">
                {item.icon}
                {item.title}
              </div>
            </li>
          ))}
        </ul>
        <Button className="bg-pastelblue w-[70%]">Create Session</Button>
      </div>
    </>
  );
}

