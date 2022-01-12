import "./post.css"
import { Link } from "react-router-dom";

export default function Post({post}) {
    return (
        <div className="post">
          {post.photo ? (
        <img className="postImg" src={post.photo} alt="" />)
        :  (<img className="postImg" src="https://i.pinimg.com/564x/d8/6c/ff/d86cfffe02f86626c379cfc38ede363b.jpg" alt="" />
          )}
        <div className="postInfo">
        <div className="postCats">
         {post.categories.map((c) => (
           <span className="postCat">{c.name}</span>
         ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
        <span className="postTitle">
            {post.title}
        </span>
        </Link>
        <hr />
        {post.date &&
        <span className="postDate">{new Date(post.date).toDateString()}</span>}
      </div>    
        <p className="postDesc">
          {post.description}
      </p>
        </div>
    )
}
