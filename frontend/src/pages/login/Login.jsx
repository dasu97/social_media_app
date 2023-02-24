import { useContext } from "react";
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContex";
import "./login.scss"

const Login = () => {

  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
            <h1>MediaBook</h1>
            <p>Media book helps you to connect with your friends and share your memories</p>
            <span>Don't you have an account?</span>
            <Link to="/register">
            <button>Register</button>
            </Link>

        </div>
        <div className="right">
        <form>
            <h1>Login</h1>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button onClick={handleLogin}>Login</button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login
