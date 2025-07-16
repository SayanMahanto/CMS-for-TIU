import React from "react";
import {
  Users,
  BookOpen,
  UserCircle,
  TrendingUp,
  CheckCircle,
  UploadCloud,
  UserPlus,
} from "lucide-react";

const Dashboard = () => {
  // Dummy dynamic data
  const stats = [
    {
      title: "Total Peoples",
      value: 2847,
      icon: <Users className="text-blue-600" />,
      change: "+12% from last month",
      color: "text-green-500",
      bg: "bg-blue-100",
    },
    {
      title: "Active Courses",
      value: 124,
      icon: <BookOpen className="text-green-600" />,
      change: "+8% from last month",
      color: "text-green-500",
      bg: "bg-green-100",
    },
    {
      title: "Teachers",
      value: 89,
      icon: <UserCircle className="text-purple-600" />,
      change: "+3% from last month",
      color: "text-blue-500",
      bg: "bg-purple-100",
    },
    {
      title: "Completion Rate",
      value: "87%",
      icon: <TrendingUp className="text-orange-600" />,
      change: "+5% from last month",
      color: "text-green-500",
      bg: "bg-orange-100",
    },
  ];

  const activities = [
    {
      user: "John Smith",
      action: 'completed "Advanced Mathematics"',
      time: "2 hours ago",
      icon: <CheckCircle className="text-green-500 w-4 h-4" />,
    },
    {
      user: "Emma Wilson",
      action: "uploaded new course material",
      time: "4 hours ago",
      icon: <UploadCloud className="text-blue-500 w-4 h-4" />,
    },
    {
      user: "Michael Brown",
      action: 'enrolled in "Web Development"',
      time: "6 hours ago",
      icon: <UserPlus className="text-purple-500 w-4 h-4" />,
    },
  ];

  const quickActions = [
    { label: "Add New Course", bg: "bg-blue-100", text: "text-blue-600" },
    { label: "Register People", bg: "bg-green-100", text: "text-green-700" },
    { label: "Schedule Class", bg: "bg-purple-100", text: "text-purple-700" },
    { label: "Generate Report", bg: "bg-orange-100", text: "text-orange-700" },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
        <p className="text-sm text-gray-500">Welcome back, Admin</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-4 rounded-xl bg-white shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-sm text-gray-600">{stat.title}</h4>
              <div className={`text-xl p-2 rounded-xl ${stat.bg}`}>{stat.icon}</div>
            </div>
            <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
            <div className={`text-xs mt-1 ${stat.color}`}>{stat.change}</div>
          </div>
        ))}
      </div>

      {/* Main Graphs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div className="h-64 bg-white  rounded-xl shadow-sm p-4">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            People Enrollment Trends
          </h3>
          {/* Replace this with a real chart component like Recharts/Chart.js */}
          <div className="h-full flex items-center justify-center text-gray-400">
            [ Chart Placeholder ]
          </div>
        </div>
        <div className="h-64 bg-white  rounded-xl shadow-sm p-4">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Course Performance
          </h3>
          <div className="h-full flex items-center justify-center text-gray-400">
            [ Chart Placeholder ]
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Recent Activities */}
        <div className="col-span-2 bg-white  rounded-xl shadow-sm p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-500">
            Recent Activities
          </h3>
          <ul className="space-y-4">
            {activities.map((activity, idx) => (
              <li key={idx} className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-800">
                    <span className="font-semibold">{activity.user}</span>{" "}
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
                <div>{activity.icon}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-white  rounded-xl shadow-sm p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-500">
            Quick Actions
          </h3>
          <ul className="space-y-3">
            {quickActions.map((action, idx) => (
              <li
                key={idx}
                className={`p-2 rounded-md text-center font-medium cursor-pointer transition-transform duration-200 hover:scale-105 ${action.bg} ${action.text}`}
              >
                {action.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;