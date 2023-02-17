import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Videos from "./pages/Videos";
import Schemes from "./pages/Schemes";
import Blogs from "./pages/Blogs";
import Maps from "./pages/Maps";
import Jobs from "./pages/Jobs";
import Sidebar from "./components/Sidebar/Sidebar";
import Quiz from "./pages/Quiz";
import Donate from "./pages/Donate";
import PensionMgmnt from "./pages/PensionMgmnt";
function App() {
  return (
    <div className="App font-ourfont flex">
      <Router>
        {localStorage.getItem("token") && <Sidebar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/pension" element={<PensionMgmnt />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
