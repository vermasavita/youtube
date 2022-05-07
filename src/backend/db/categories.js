import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Rap",
    thumbnail:
      "http://i3.ytimg.com/vi/zJFlK0aOnqU/hqdefault.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Comedy",
    thumbnail:
      "http://i3.ytimg.com/vi/5Wp4Inv01ac/hqdefault.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Programming",
    thumbnail: "http://i3.ytimg.com/vi/eKqY-oP1d_Y/hqdefault.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Motivation",
    thumbnail: "http://i3.ytimg.com/vi/wnHW6o8WMas/hqdefault.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Poetry",
    thumbnail: "http://i3.ytimg.com/vi/kKSbaT-hlds/hqdefault.jpg",
  },
];
