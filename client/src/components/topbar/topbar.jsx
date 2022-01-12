import { useContext } from "react"
import {Context} from "../../context/Context"
import './topbar.css'
import { Link } from "react-router-dom";

export default function Topbar() {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"
  
    const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
    };
    return (
        <div className="top">
            <div className='topLeft'>
                <i class="topIcon fab fa-vk"></i>
                <i class="topIcon fab fa-github"></i>
                <i class="topIcon fab fa-instagram"></i>
            </div>

            <div className='topCenter'>
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    {user && <li className="topListItem" onClick={handleLogout}>LOGOUT</li>}
                    </ul>
            </div>

            <div className='topRight'>
                {user ? (
                     <Link className="link" to="/settings"> 
                    <img  className="topImg"
                        src={user.profilePic}
                        alt=""
                    />
                     </Link> 
                 ) : ( 
                <ul className="topList">
                    <li className="topListItem">
                         <Link className="link" to="/login"> LOGIN </Link> 
                    </li>
                    <li className="topListItem">
                         <Link className="link" to="/register"> REGISTER </Link> 
                    </li>
                </ul>
                )} 
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
