import React from "react";
import { Button } from "./ui/button";

import { RxDashboard } from "react-icons/rx";
import { IoBookOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { BsCameraVideo } from "react-icons/bs";
import { LuUserCheck2 } from "react-icons/lu";

function Sidebar() {
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
      title: "Discussions",
      icon: <LuUserCheck2 />,
    },
  ];

  return (
    <>
      <div className="w-60 h-screen bg-darkprimary flex flex-col overflow-hidden text-white justify-between items-center fixed">
        <h1 className="text-2xl font-medium">Codeaffix</h1>
        <ul className="w-full">
          {Navlinks.map((item, index) => (
            <li key={index} className="p-2 hover:bg-pink-600 w-full">
              <div className="flex items-center">
                {item.icon}
                {item.title}
              </div>
            </li>
          ))}
        </ul>
        <Button className="bg-pastelblue w-[80%] m-4">Create Session</Button>
      </div>
    </>
  );
}

 Sidebar;
