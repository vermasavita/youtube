import axios from "axios";

const getCategoryHandler = async (setCategories) => {
  try {
    const response = await axios.get("/api/categories");
    if (response.status === 200) {
      setCategories(response.data.categories);
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export { getCategoryHandler };
