import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Maps from "./pages/Maps";

function App() {
  return (
    <div className="App font-ourfont">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/maps" element={<Maps />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
