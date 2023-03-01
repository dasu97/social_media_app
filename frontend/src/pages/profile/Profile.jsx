import "./profile.scss"
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/4491508/pexels-photo-4491508.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="cover"/>
        <img src="https://images.pexels.com/photos/9374416/pexels-photo-9374416.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="profilePic"/>
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://www.facebook.com/">
              <FacebookTwoToneIcon />
            </a>
            <a href="https://www.facebook.com/">
              <InstagramIcon  />
            </a>
            <a href="https://www.facebook.com/">
              <TwitterIcon  />
            </a>
            <a href="https://www.facebook.com/">
              <LinkedInIcon  />
            </a>
            <a href="https://www.facebook.com/">
              <PinterestIcon  />
            </a>
          </div>
          <div className="center">
            <span>Dasuni Siriwardhana</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>Sri Lanka</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>sachi97</span>
              </div>
              
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailIcon/>
            <MoreVertIcon/>
          </div>
        </div>
        <Posts />
      </div>
    </div>
  )
}

export default Profile