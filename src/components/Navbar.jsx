import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navLeft">
        <h4 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          React Movie App
        </h4>
      </div>
      <div className="navRight">
        <button className="btn" onClick={() => navigate("login")}>
          Login
        </button>
        <button className="btn" onClick={() => navigate("register")}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
