import { Routes, Route, Link } from "react-router-dom";
import {
  Login,
  Signup,
  Dashboard,
  Students,
  Courses,
  Report,
  Content,
} from "./pages/importPages.js";
import { Sidebar } from "./components/importComponents.js";
function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "1rem", flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/report" element={<Report />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
