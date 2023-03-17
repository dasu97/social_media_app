import Post from "../post/Post";
import "./posts.scss"

function Posts() {

  //temporary
  const posts = [
    {
      id: 1,
      name: "Dasuni Siriwardhana",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "A flower cannot blossom without sunshine, and a man cannot live without love",
      img: "https://images.pexels.com/photos/894751/pexels-photo-894751.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Dasuni Siriwardhana",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "A flower cannot blossom without sunshine, and a man cannot live without love",
      
    },
    {
      id: 3,
      name: "Dasuni Siriwardhana",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "A flower cannot blossom without sunshine, and a man cannot live without love",
      img: "https://images.pexels.com/photos/894751/pexels-photo-894751.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return <div className="posts">
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))}
    </div>;
  
};

export default Posts;
