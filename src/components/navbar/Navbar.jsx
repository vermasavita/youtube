import "./navbar.css";
import { Link } from "react-router-dom";
import { useSidebar } from "../../context";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
const Navbar = () => {
  const navigate = useNavigate();
  const { setSidebar } = useSidebar();
  const { authDispatch } = useAuth();

  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
  };

  return (
    <header className="header">
      <div className="head-container">
        <button
          className="hamburger-btn"
          onClick={() => setSidebar((prev) => !prev)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="icon">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        </button>
        <div className="logo">Video Library</div>
      </div>

      <div className="action-icon">
        {localStorage.getItem("token") ? (
          <button className="btn" onClick={logoutHandler}>
            Logout
          </button>
        ) : (
          <button className="btn">
            <Link className="link" to="/login">
              Login
            </Link>
          </button>
        )}
      </div>
    </header>
  );
};

export { Navbar };
