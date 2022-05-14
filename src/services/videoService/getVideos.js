import axios from "axios";

const getVideosHandler = async (setVideos, setVideoLoader) => {
  try {
    setVideoLoader(true);
    const response = await axios.get("/api/videos");
    if (response.status === 200) {
      setVideos(response.data.videos);
      setVideoLoader(false);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export { getVideosHandler };
