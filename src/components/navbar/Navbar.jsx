import "./navbar.css";
import { useSidebar } from "../../context/sidebar-context";
const Navbar = () => {
  const { setSidebar } = useSidebar();
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
        <div class="logo">Video Library</div>
      </div>
    </header>
  );
};

export { Navbar };
