import { Routes, Route } from "react-router-dom";
import {
  Login,
  Signup,
  Dashboard,
  People,
  Courses,
  Report,
  Content,
} from "./pages/importPages.js";
import { Sidebar } from "./components/importComponents.js";

function App() {
  return (
    <div className="flex">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 h-screen w-64 z-50">
        <Sidebar />
      </div>

      {/* Main content with left margin to accommodate sidebar */}
      <main className="ml-64 flex-1 min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/people" element={<People />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/report" element={<Report />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
