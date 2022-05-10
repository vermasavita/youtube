import axios from "axios";

const getSingleVideoHandler = async (videoId, setSingleVideo) => {
  try {
    const response = await axios.get(`/api/video/${videoId}`);

    if (response.status === 200) {
      setSingleVideo(response.data.video);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export { getSingleVideoHandler };
