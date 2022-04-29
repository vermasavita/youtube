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
            viewBox="0 0 512 512"
          >
            <path d="M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM325.1 306.7L380.6 162.4C388.1 142.1 369 123.9 349.6 131.4L205.3 186.9C196.8 190.1 190.1 196.8 186.9 205.3L131.4 349.6C123.9 369 142.1 388.1 162.4 380.6L306.7 325.1C315.2 321.9 321.9 315.2 325.1 306.7V306.7z" />
          </svg>

          <Link to="/home" className={styles.sidebarText}>
            Explore
          </Link>
        </li>
        <li className={styles.sidebarListItems}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.sidebarIcon}
            viewBox="0 0 512 512"
          >
            <path d="M464 96h-192l-64-64h-160C21.5 32 0 53.5 0 80v352C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48v-288C512 117.5 490.5 96 464 96zM336 311.1h-56v56C279.1 381.3 269.3 392 256 392c-13.27 0-23.1-10.74-23.1-23.1V311.1H175.1C162.7 311.1 152 301.3 152 288c0-13.26 10.74-23.1 23.1-23.1h56V207.1C232 194.7 242.7 184 256 184s23.1 10.74 23.1 23.1V264h56C349.3 264 360 274.7 360 288S349.3 311.1 336 311.1z" />
          </svg>
          <div className={styles.sidebarText}>Playlist</div>
        </li>
        <li className={styles.sidebarListItems}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.sidebarIcon}
            viewBox="0 0 512 512"
          >
            <path d="M128 447.1V223.1c0-17.67-14.33-31.1-32-31.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64C113.7 479.1 128 465.6 128 447.1zM512 224.1c0-26.5-21.48-47.98-48-47.98h-146.5c22.77-37.91 34.52-80.88 34.52-96.02C352 56.52 333.5 32 302.5 32c-63.13 0-26.36 76.15-108.2 141.6L178 186.6C166.2 196.1 160.2 210 160.1 224c-.0234 .0234 0 0 0 0L160 384c0 15.1 7.113 29.33 19.2 38.39l34.14 25.59C241 468.8 274.7 480 309.3 480H368c26.52 0 48-21.47 48-47.98c0-3.635-.4805-7.143-1.246-10.55C434 415.2 448 397.4 448 376c0-9.148-2.697-17.61-7.139-24.88C463.1 347 480 327.5 480 304.1c0-12.5-4.893-23.78-12.72-32.32C492.2 270.1 512 249.5 512 224.1z" />
          </svg>

          <div className={styles.sidebarText}>Liked</div>
        </li>

        <li className={styles.sidebarListItems}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.sidebarIcon}
            viewBox="0 0 384 512"
          >
            <path d="M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z" />
          </svg>
          <Link to="/archive-notes" className={styles.sidebarText}>
            Watch Later
          </Link>
        </li>
        <li className={styles.sidebarListItems}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.sidebarIcon}
            viewBox="0 0 512 512"
          >
            <path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z" />
          </svg>

          <Link to="/deleted-notes" className={styles.sidebarText}>
            History
          </Link>
        </li>
        <li className={styles.sidebarListItems}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.sidebarIcon}
            viewBox="0 0 512 512"
          >
            <path d="M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z" />
          </svg>
          <div className={styles.sidebarText}>Logout</div>
        </li>
      </ul>
    </div>
  );
};

export { SideBar };
