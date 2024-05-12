import React from "react";

function Sidebar() {
  return (
    <>
      <nav className="bg-blue-300 w-60 h-96 flex flex-col items-center justify-between">
        <div className="text-xl font-bold">Codaffix</div>
        <ul>
          <li>Dashboard</li>
          <li>My courses</li>
          <li>Assignments</li>
          <li>Discussions</li>
          <li>Attendance</li>
        </ul>
        <button type="button">Create Session</button>
      </nav>
    </>
  );
}

export default Sidebar;
