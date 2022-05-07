const filterCategoryVideos = (category, videos) => {
  if (category === "") {
    return videos;
  } else {
    return videos.filter((video) => video.categoryName === category);
  }
};

export { filterCategoryVideos };
