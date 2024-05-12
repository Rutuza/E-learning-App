import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar";

function Dashboard() {
  return (
    <>
      <Outlet />
      <Sidebar />
    </>
  );
}

export default Dashboard;
