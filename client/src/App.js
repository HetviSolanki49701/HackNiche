import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Videos from "./pages/Videos";
import Schemes from "./pages/Schemes";
import Blogs from "./pages/Blogs";
import Maps from "./pages/Maps";
import Jobs from "./pages/Jobs";
import Sidebar from "./components/Sidebar/Sidebar";
import PostJobs from "./pages/PostJob";
import Quiz from "./pages/Quiz";
import Donate from "./pages/Donate";
import CardHoverBlur from "./components/CardHoverBlur/CardHoverBlur";
import Relocate from "./pages/Relocate";
import PensionMgmnt from "./pages/PensionMgmnt";
import Consult from "./pages/Consult";
import ChildCare from "./pages/_ChildCare";
import HealthCare from "./pages/HealthCare";
import Schools from "./pages/Schools";
import HousePrice from "./components/HousePrice";
import { useEffect, useState } from "react";
import RelocationPage from "./pages/RelocationPage";
function App() {

  const [me, setMe] = useState(false);

  useEffect(()=>{}, [me])
  return (
    <div className="App font-ourfont flex">
      <Router>
        {(me || localStorage.getItem("token")) && <Sidebar />}
        <Routes>
          <Route path="/login" element={<Login setMe={setMe} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/postjobs" element={<PostJobs />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/relocate" element={<Relocate />} />
          <Route path="/pension" element={<PensionMgmnt />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/houseprice" element={<HousePrice />} />
          <Route path="/relocationpage" element={<RelocationPage />} />
          <Route path="/childcare" element={<ChildCare />} />
          <Route path="/healthcare" element={<HealthCare />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
