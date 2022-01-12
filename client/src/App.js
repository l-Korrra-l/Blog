import TopBar from "./components/topbar/topbar";
import Homepage from "./pages/homepage/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import {useContext} from "react"
import {Context} from "./context/Context"

function App() {
  const {currentUser} = useContext(Context);
  return (
    <Router>
    <TopBar/>
    <Routes>
        <Route exact path="/" element={<Homepage />}/>
        <Route path="/posts" element={<Homepage />}/>
        <Route path="/register" element={currentUser ?  <Homepage /> :  <Register />}/>
        <Route path="/login" element={currentUser ? <Homepage /> : <Login />}/>
        <Route path="/post/:id" element={<Single />}/>
        <Route path="/write" element={currentUser ? <Write /> : <Login />}/>
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />}/>
      </Routes>
    </Router>
  );
}

export default App;

//TODO enable path?