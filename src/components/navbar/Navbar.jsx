import { useSidebar } from "../../context/sidebar-context";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const { setSidebar } = useSidebar();

  return (
    <div>
      <header
        className={styles.header}
        onClick={() => setSidebar((prev) => !prev)}
      >
        <div className={styles.headerActionContainer}>
          <div className={styles.leftHead}>
            <button className={styles.menuIconBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.menuIcon}
              >
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
              </svg>
            </button>
            <div className={styles.logo}>Note Book</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export { Navbar };
