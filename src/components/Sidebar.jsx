import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  GraduationCap,
  LayoutDashboard,
  Users,
  BookOpen,
  FileText,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  // Helper to apply active class
  const getLinkClasses = (path) =>
    `flex items-center gap-3 p-2 rounded-lg ${
      location.pathname === path
        ? "bg-blue-100 text-blue-700 font-medium"
        : "hover:bg-blue-100 text-gray-700"
    }`;

  return (
<<<<<<< HEAD
    <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-md z-50">
=======
    <div className="h-screen w-64 bg-white shadow-md">
>>>>>>> 487334e09331b82a216e0279c426f53145d33c82
      <div className="flex items-center gap-2 p-5 border-b">
        <GraduationCap className="text-blue-600" />
        <div className="text-xl font-semibold text-gray-800">DEMO_CMS</div>
      </div>
      <nav className="mt-6">
        <ul className="space-y-2 px-4">
          <li>
            <Link to="/dashboard" className={getLinkClasses("/dashboard")}>
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/courses" className={getLinkClasses("/courses")}>
              <BookOpen className="w-5 h-5" />
              Courses
            </Link>
          </li>
          <li>
            <Link to="/content" className={getLinkClasses("/content")}>
              <FileText className="w-5 h-5" />
              Content
            </Link>
          </li>
          <li>
            <Link to="/people" className={getLinkClasses("/people")}>
              <Users className="w-5 h-5" />
              People
            </Link>
          </li>
          <li>
            <Link to="/report" className={getLinkClasses("/report")}>
              <FileText className="w-5 h-5" />
              Report
            </Link>
          </li>
          {/* <li>
            <Link to="/settings" className={getLinkClasses("/settings")}>
              <Settings className="w-5 h-5" />
              Settings
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;