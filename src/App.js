// import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import TopBar from "./Components/topbar/TopBar";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,

  Route,
 
  Routes
} from "react-router-dom";
import Singlepost from "./Components/singlepost/Singlepost";

function App() {
  const User = true;
  return (
    <Router>
        <TopBar />
       

        <Routes>
          <Route path="/" exact element={<Home/>}></Route> 

          <Route path="/register" element={User ? <Home/> : <Register />} ></Route>

          <Route path="/login" element={User ? <Home/> : <Login />} ></Route>

          <Route path="/write" element={User ? <Write /> : <Register />} ></Route>

          <Route path="/settings" element={User ? <Settings /> : <Register/>} ></Route>

          <Route path="/Singlepost" element={<Singlepost/>} ></Route>

          <Route path="/post/:postId" element={<Single />} ></Route> 

          

        </Routes>
      </Router>
  );
}

export default App;
