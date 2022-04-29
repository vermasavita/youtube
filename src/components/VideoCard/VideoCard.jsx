import styles from "./VideoCard.module.css";
const VideoCard = () => {
  return (
    <div className={styles.videoCard}>
      <div className={styles.videoHeader}>
        <img src="https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8YmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></img>
      </div>
      <div className={styles.videoActionContainer}>
        <div className={styles.videoTimer}>
          <span>10:00</span>
        </div>
        <div className={styles.videoActionBtns}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.sidebarIcon}
              viewBox="0 0 512 512"
            >
              <path d="M128 447.1V223.1c0-17.67-14.33-31.1-32-31.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64C113.7 479.1 128 465.6 128 447.1zM512 224.1c0-26.5-21.48-47.98-48-47.98h-146.5c22.77-37.91 34.52-80.88 34.52-96.02C352 56.52 333.5 32 302.5 32c-63.13 0-26.36 76.15-108.2 141.6L178 186.6C166.2 196.1 160.2 210 160.1 224c-.0234 .0234 0 0 0 0L160 384c0 15.1 7.113 29.33 19.2 38.39l34.14 25.59C241 468.8 274.7 480 309.3 480H368c26.52 0 48-21.47 48-47.98c0-3.635-.4805-7.143-1.246-10.55C434 415.2 448 397.4 448 376c0-9.148-2.697-17.61-7.139-24.88C463.1 347 480 327.5 480 304.1c0-12.5-4.893-23.78-12.72-32.32C492.2 270.1 512 249.5 512 224.1z" />
            </svg>
          </button>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.sidebarIcon}
              viewBox="0 0 384 512"
            >
              <path d="M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z" />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.sidebarIcon}
              viewBox="0 0 512 512"
            >
              <path d="M464 96h-192l-64-64h-160C21.5 32 0 53.5 0 80v352C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48v-288C512 117.5 490.5 96 464 96zM336 311.1h-56v56C279.1 381.3 269.3 392 256 392c-13.27 0-23.1-10.74-23.1-23.1V311.1H175.1C162.7 311.1 152 301.3 152 288c0-13.26 10.74-23.1 23.1-23.1h56V207.1C232 194.7 242.7 184 256 184s23.1 10.74 23.1 23.1V264h56C349.3 264 360 274.7 360 288S349.3 311.1 336 311.1z" />
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.videoInfo}>
          <div className={styles.videoInfoImg}>
          <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />

          </div>
        <div className={styles.videoInfoContent}>
          <h3>12 Rules For Life by Jordan Peterson 📖 Book Summary</h3>
          <span>youtuber name</span>
        </div>
      </div>
    </div>
  );
};

export { VideoCard };
