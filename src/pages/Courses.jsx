import React from "react";
import { Search, BookOpen, CheckCircle, Pencil, Users } from "lucide-react"; // <-- Lucide search icon

const cards = [
  {
    label: "Total Courses",
    value: "24",
    icon: <BookOpen className="w-5 h-5 text-blue-600" />,
    bg: "bg-blue-100",
  },
  {
    label: "Published",
    value: "18",
    icon: <CheckCircle className="w-5 h-5 text-green-600" />,
    bg: "bg-green-100",
  },
  {
    label: "Draft",
    value: "6",
    icon: <Pencil className="w-5 h-5 text-yellow-600" />,
    bg: "bg-yellow-100",
  },
  {
    label: "Total Students",
    value: "1,247",
    icon: <Users className="w-5 h-5 text-purple-600" />,
    bg: "bg-purple-100",
  },
];

const courseList = [
  {
    image: "/src/images/coding.png",
    tags: ["Programming", "Published"],
    title: "Modern Web Development",
    desc: "Learn HTML, CSS, JavaScript and modern frameworks to build responsive websites",
    students: 124,
    duration: "8 weeks",
  },
  {
    image: "/src/images/design.png",
    tags: ["Design", "Published"],
    title: "UI/UX Design Fundamentals",
    desc: "Master the principles of user interface and user experience design",
    students: 89,
    duration: "6 weeks",
  },
  {
    image: "/src/images/data.png",
    tags: ["Data Science", "Draft"],
    title: "Data Science with Python",
    desc: "Explore data analysis, visualization, and machine learning using Python",
    students: 0,
    duration: "10 weeks",
  },
];

const Courses = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
        {/* Left Header */}
        <div className="leftHeader">
          <h1 className="text-xl font-semibold text-gray-800">Courses</h1>
          <p className="text-sm text-gray-500">
            Manage and organize your educational content
          </p>
        </div>

        {/* Right Header */}
        <div className="rightHeader flex items-center gap-3">
          {/* Search Input with Lucide Icon */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-4.5 h-4.5 text-gray-400" />{" "}
              {/* Lucide Icon */}
            </span>
            <input
              type="text"
              placeholder="Search courses..."
              className="searchCourses w-72 pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          {/* New Course Button */}
          <button className="newCourse w-36 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md text-sm">
            + New Course
          </button>
        </div>
      </nav>

      {/* filter */}
      <div className="flex justify-start items-left p-4 border-b border-gray-200 bg-white">
        <p className="text-sm p-2">Filter by:</p>
        <input
          type="text"
          className="filterBy w-40 pl-2 pr-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
        />
        <p className="text-sm p-2 pl-4">Status:</p>
        <input
          type="text"
          className="filterStatus w-35 pl-2 pr-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
        />
      </div>

      <div className="bg-gray-50 min-h-[100px]">
        <div className="p-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-xl shadow flex justify-between items-center"
            >
              <div>
                <p className="text-gray-500 text-sm">{card.label}</p>
                <h2 className="text-2xl font-bold">{card.value}</h2>
              </div>
              <div className={`p-2 rounded-xl ${card.bg}`}>{card.icon}</div>
            </div>
          ))}
        </div>

        {/* Course Cards */}
        <div className="px-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
          {courseList.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-md transition-shadow duration-300 max-w-[20rem] w-full"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-4">
                {/* Tags */}
                <div className="flex gap-2 mb-2">
                  {course.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        tag === "Published"
                          ? "bg-green-100 text-green-700"
                          : tag === "Draft"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Title & Description */}
                <h3 className="text-md font-semibold text-gray-800 mb-1">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{course.desc}</p>

                {/* Metadata */}
                <div className="flex justify-between text-xs text-gray-400">
                  <span>👥 {course.students} students</span>
                  <span>🕒 {course.duration}</span>
                  <span>⋮</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
