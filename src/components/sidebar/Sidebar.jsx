import { useSidebar } from "../../context/sidebar-context";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
const SideBar = () => {
  const { sidebar } = useSidebar();

  return (
    <div className={`${styles.sidebar} ${sidebar ? styles.active : ""}`}>
      <ul>
        <li className={styles.sidebarListItems}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.sidebarIcon}
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path>
          </svg>

          <Link to ="/home"className={styles.sidebarText}>Home</Link>
        </li>
        <li className={styles.sidebarListItems}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.sidebarIcon}
          >
            <path d="m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z"></path>
            <path d="M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2V19z"></path>
          </svg>
          <div className={styles.sidebarText}>New Note</div>
        </li>
        <li className={styles.sidebarListItems}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.sidebarIcon}
          >
            <path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path>
          </svg>
          <div className={styles.sidebarText}>Labels</div>
        </li>

        <li className={styles.sidebarListItems}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.sidebarIcon}
          >
            <path d="m21.706 5.292-2.999-2.999A.996.996 0 0 0 18 2H6a.996.996 0 0 0-.707.293L2.294 5.292A.994.994 0 0 0 2 6v13c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6a.994.994 0 0 0-.294-.708zM6.414 4h11.172l1 1H5.414l1-1zM4 19V7h16l.002 12H4z"></path>
            <path d="M14 9h-4v3H7l5 5 5-5h-3z"></path>
          </svg>
          <Link to ="/archive-notes"className={styles.sidebarText}>Archive</Link>
        </li>
        <li className={styles.sidebarListItems}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.sidebarIcon}
          >
            <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
            <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
          </svg>
          <Link to ="/deleted-notes"className={styles.sidebarText}>Bin</Link>
        </li>
        <li className={styles.sidebarListItems}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.sidebarIcon}
          >
            <path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"></path>
            <path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"></path>
          </svg>

          <div className={styles.sidebarText}>Logout</div>
        </li>
      </ul>
    </div>
  );
};

export { SideBar };
