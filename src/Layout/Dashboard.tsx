import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar";

export default function Dashboard() {
  return (
    <div className="bg-gray-100 grid md:grid-cols-10">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="h-[200vh]">
        <Outlet />
      </div>
      
      
    </div>
  );
}

