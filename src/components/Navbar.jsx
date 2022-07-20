import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // const currentUser = false;
  return (
    <div className="navbar bg-primary text-light">
      <div className="navLeft">
        <h4 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          React Movie App
        </h4>
      </div>
      {currentUser ? (
        <div className="navRight d-flex align-items-center gap-5">
          <h4 className="">{currentUser.displayName}</h4>
          <button className="btn  btn-outline-light me-4 mb-1">Logout</button>
        </div>
      ) : (
        <div className="navRight">
          <button
            className="btn btn-outline-light me-2 mb-1"
            onClick={() => navigate("login")}
          >
            Login
          </button>
          <button
            className="btn  btn-outline-light me-4 mb-1"
            onClick={() => navigate("register")}
          >
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
