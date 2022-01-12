import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  const path = useLocation().pathname.split("/")[2];
  const [post, setPost] = useState({})

  useEffect(()=>{
    const getPosts = async ()=>{
       const res = await axios.get("/posts/"+path)
       setPost(res.data)
    }
    getPosts()
})
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      {post.photo ? (
        <img className="singlePostImg" src={PF + post.photo} alt="" />)
        :  (<img className="singlePostImg" src="https://i.pinimg.com/564x/d8/6c/ff/d86cfffe02f86626c379cfc38ede363b.jpg" alt="" />
          )}
        <h1 className="singlePostTitle">
          {post.title}
          {post.username === user.username}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
        <Link className="link" to={`/posts?username=${post.username}`}>
          <span>
            Author:
            <b className="singlePostAuthor">
                {post.username}
            </b>
          </span>
          </Link>
          <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
            {post.description}
        </p>
      </div>
    </div>
  );
}