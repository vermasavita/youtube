import "./videoCard.css";
const VideoCard = () => {
  return (
    <div className="video-card-container">
      <div className="video-image">
        <img
          src="https://images.unsplash.com/photo-1651683298355-fb85321852fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="video-time">10:00</div>
      </div>
      <div className="video-info">
        <div className="avatar-box">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="avatar image 1"
            className="avatar"
          />
        </div>
        <div className="video-content">
        Question of the day" thread in our neoG discord |<span> Savita Verma</span>
        </div>
        <div className="action-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            viewBox="0 0 128 512"
          >
            <path d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z" />
          </svg>
        </div>
      </div>
      </div>

  );
};

export { VideoCard };
