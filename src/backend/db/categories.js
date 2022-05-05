import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Rap",
    imageSrc:
      "http://i3.ytimg.com/vi/zJFlK0aOnqU/hqdefault.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Comedies",
    imageSrc:
      "http://i3.ytimg.com/vi/5Wp4Inv01ac/hqdefault.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Programming",
    imageSrc: "http://i3.ytimg.com/vi/eKqY-oP1d_Y/hqdefault.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Motivation",
    imageSrc: "http://i3.ytimg.com/vi/wnHW6o8WMas/hqdefault.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Poetry",
    imageSrc: "http://i3.ytimg.com/vi/kKSbaT-hlds/hqdefault.jpg",
  },
];
