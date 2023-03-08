import { useContext } from "react";
import "./comments.scss";
import {AuthContext} from "../../context/authContex"

const Comments = () => {
  
    const {currentUser} = useContext(AuthContext)
  //temporary
  const Comments = [
  {
    id: 1,
    desc: "beautifull  ",
    name: "Radheeka Senadheera",
    userId: 2,
    profilePic: "https://images.pexels.com/photos/572463/pexels-photo-572463.jpeg?auto=compress&cs=tinysrgb&w=600",

  },
  {
    id: 1,
    desc: "wow  ",
    name: "Sachi Senadheera",
    userId: 3,
    profilePic: "https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?auto=compress&cs=tinysrgb&w=600",

  },
  ];
  return (
    <div className="comments">
        <div className="write">
             <img src={currentUser.profilePic} alt="" />
             <input type="text" placeholder="write a comment" />
             <button>send</button>
            </div>{
        Comments.map(comment=>(
            <div className="comment">
                <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date"> 1 hour ago</span>
            </div>
        ))}
        </div>
  );
};

export default Comments
