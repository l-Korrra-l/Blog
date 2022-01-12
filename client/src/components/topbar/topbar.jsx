import './topbar.css'
import { Link } from "react-router-dom";

export default function topbar() {
    let user = false;
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
                    {user && <li className="topListItem">LOGOUT</li>}
                    </ul>
            </div>

            <div className='topRight'>
                {user ? (
                     <Link className="link" to="/settings"> 
                    <img  className="topImg"
                        src="https://sun9-60.userapi.com/impf/c851232/v851232450/191c0b/kDZpAOdFxgs.jpg?size=810x1080&quality=96&sign=1b6b282356cb0aef0ecb767bb9ae3c9f&type=album"
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
