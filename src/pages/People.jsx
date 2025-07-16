import React from "react";

const People = () => {
  const Peoples = [
    {
      name: "Emma Johnson",
      email: "emma.johnson@school.edu",
      id: "STU001247",
      grade: "Grade 11",
      status: "Active",
      gpa: 3.85,
    },
    {
      name: "Michael Chen",
      email: "michael.chen@school.edu",
      id: "STU001248",
      grade: "Grade 12",
      status: "Active",
      gpa: 3.92,
    },
    {
      name: "Sarah Williams",
      email: "sarah.williams@school.edu",
      id: "STU001249",
      grade: "Grade 10",
      status: "Pending",
      gpa: 3.67,
    },
  ];

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">People</h1>
        <button className="w-36 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-md text-sm">
          + Add People
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 px-2">
        {[
          {
            label: "Total Peoples",
            value: "1,247",
            change: "+12%",
            note: "from last month",
            color: "text-green-500",
          },
          {
            label: "Active Peoples",
            value: "1,189",
            change: "+8%",
            note: "from last month",
            color: "text-green-500",
          },
          {
            label: "New Enrollments",
            value: "58",
            change: "+24%",
            note: "from last month",
            color: "text-green-500",
          },
          {
            label: "Graduation Rate",
            value: "94.2%",
            change: "+2.1%",
            note: "from last year",
            color: "text-green-500",
          },
        ].map((card, i) => (
          <div key={i} className="p-4 bg-white shadow rounded-xl">
            <p className="text-gray-500">{card.label}</p>
            <h2 className="text-xl font-semibold">{card.value}</h2>
            <p className={`text-sm ${card.color}`}>
              {card.change} <span className="text-gray-400">{card.note}</span>
            </p>
          </div>
        ))}
      </div>

      {/* People Directory Table */}
      <div className="bg-white rounded-xl shadow overflow-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold">People Directory</h2>
          <input
            type="text"
            placeholder="Search Peoples..."
            className="border px-3 py-1 rounded"
          />
        </div>
        <table className="w-full text-left table-auto">
          <thead className="bg-gray-100 text-sm text-gray-700">
            <tr>
              <th className="p-3">People</th>
              <th className="p-3">People ID</th>
              <th className="p-3">Grade</th>
              <th className="p-3">Status</th>
              <th className="p-3">GPA</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Peoples.map((s, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="p-3">
                  <div>
                    <div className="font-medium">{s.name}</div>
                    <div className="text-sm text-gray-500">{s.email}</div>
                  </div>
                </td>
                <td className="p-3">{s.id}</td>
                <td className="p-3">{s.grade}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      s.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {s.status}
                  </span>
                </td>
                <td className="p-3">{s.gpa}</td>
                <td className="p-3 flex space-x-2">
                  <button className="text-blue-600 hover:underline">✏</button>
                  <button className="text-green-600 hover:underline">👁</button>
                  <button className="text-red-600 hover:underline">🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 border-t text-sm text-gray-600">
          <p>Showing 1 to 10 of 1,247 Peoples</p>
          <div className="space-x-1">
            <button className="px-2 py-1 border rounded">Previous</button>
            <button className="px-2 py-1 border rounded bg-blue-600 text-white">
              1
            </button>
            <button className="px-2 py-1 border rounded">2</button>
            <button className="px-2 py-1 border rounded">3</button>
            <button className="px-2 py-1 border rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
